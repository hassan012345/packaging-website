import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, Upload } from "lucide-react";
import { z } from "zod";

const productTypes = [
  "Mylar Bags", "Tuck Boxes", "Coffee Packaging", "Kraft Boxes",
  "Rigid Boxes", "Tin Packaging", "Candle Boxes", "Soap Boxes",
  "Gift Boxes", "Bakery Boxes", "Display Boxes", "Pillow Boxes",
  "Christmas Boxes", "Cosmetic Boxes", "Mailer Boxes", "CBD Boxes", "Other",
] as const;

const materials = [
  "Standard White Card", "Corrugated", "Kraft", "Rigid", "Foil Metallic",
  "Textured", "Colored", "Holographic",
] as const;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const quoteSchema = z.object({
  product_type: z.enum(productTypes, { errorMap: () => ({ message: "Please select a product type." }) }),
  length: z.string().refine(v => v === "" || (!isNaN(Number(v)) && Number(v) > 0 && Number(v) <= 10000), { message: "Must be 0–10,000." }).optional(),
  width: z.string().refine(v => v === "" || (!isNaN(Number(v)) && Number(v) > 0 && Number(v) <= 10000), { message: "Must be 0–10,000." }).optional(),
  height: z.string().refine(v => v === "" || (!isNaN(Number(v)) && Number(v) > 0 && Number(v) <= 10000), { message: "Must be 0–10,000." }).optional(),
  unit: z.enum(["inches", "cm", "mm"]),
  quantity: z.string().refine(v => { const n = Number(v); return Number.isInteger(n) && n >= 50 && n <= 1000000; }, { message: "Quantity must be 50–1,000,000." }),
  name: z.string().trim().min(1, "Name is required.").max(100, "Max 100 characters."),
  email: z.string().trim().max(255, "Max 255 characters.").refine(v => v === "" || /^\S+@\S+\.\S+$/.test(v), { message: "Invalid email." }),
  phone: z.string().max(20, "Max 20 characters.").refine(v => v === "" || /^[+\d\s().\-]+$/.test(v), { message: "Invalid phone number." }),
  message: z.string().max(2000, "Max 2,000 characters."),
  material: z.string().optional(),
}).refine((data) => {
  return (data.email?.trim() || data.phone?.trim());
}, { message: "Email or phone is required.", path: ["email"] });
;

const QuoteForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    product_type: "",
    length: "",
    width: "",
    height: "",
    unit: "inches",
    quantity: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    material: "",
  });

  const set = (key: string, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => { const { [key]: _, ...rest } = e; return rest; });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const oversized = selectedFiles.find(f => f.size > MAX_FILE_SIZE);
      if (oversized) {
        toast({ title: "File too large", description: `${oversized.name} exceeds 5 MB limit.`, variant: "destructive" });
        return;
      }
      setFiles(selectedFiles);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = quoteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Validation Error", description: "Please fix the highlighted fields.", variant: "destructive" });
      return;
    }
    setErrors({});
    setLoading(true);

    let uploadedFileUrls: string[] = [];
    if (files.length > 0) {
      for (const file of files) {
        const fileName = `${Date.now()}-${file.name}`;
        const { data, error: uploadError } = await supabase.storage
          .from("quote-designs")
          .upload(fileName, file);
        if (uploadError) {
          toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
          setLoading(false);
          return;
        }
        if (data) {
          const { data: urlData } = supabase.storage.from("quote-designs").getPublicUrl(data.path);
          uploadedFileUrls.push(urlData.publicUrl);
        }
      }
    }

    const messageWithFiles = [
      form.message,
      uploadedFileUrls.length > 0 ? `\n\nDesign files: ${uploadedFileUrls.join(", ")}` : "",
    ].join("");

    const { data, error: fnError } = await supabase.functions.invoke("submit-quote", {
      body: {
        product_type: form.product_type,
        length: form.length || null,
        width: form.width || null,
        height: form.height || null,
        dimension_unit: form.unit,
        quantity: form.quantity,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: messageWithFiles.trim() || null,
      },
    });
    setLoading(false);

    if (fnError || (data && data.error)) {
      toast({ title: "Error", description: data?.error || "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Quote Submitted!", description: "We'll get back to you within 15 minutes." });
      setForm({ product_type: "", length: "", width: "", height: "", unit: "inches", quantity: "", name: "", email: "", phone: "", message: "", material: "" });
      setFiles([]);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Free Quote</span>
        <h2 className="text-3xl md:text-5xl font-black mt-2 text-foreground">
          Get a Quote in 15 Minutes
        </h2>
        <p className="text-muted-foreground mt-4">
          Fill out the form below and our team will respond within 15 minutes during business hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8 md:p-10 space-y-6 border border-border">
        {/* Product Type & Material */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Product Type *</label>
            <Select value={form.product_type} onValueChange={(v) => set("product_type", v)}>
              <SelectTrigger className={errors.product_type ? "border-destructive" : ""}><SelectValue placeholder="Select product type" /></SelectTrigger>
              <SelectContent>
                {productTypes.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.product_type && <p className="text-destructive text-xs mt-1">{errors.product_type}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Material</label>
            <Select value={form.material} onValueChange={(v) => set("material", v)}>
              <SelectTrigger><SelectValue placeholder="Select material" /></SelectTrigger>
              <SelectContent>
                {materials.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Dimensions */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">Dimensions</label>
          <TooltipProvider delayDuration={200}>
            <div className="grid grid-cols-4 gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input placeholder="Length" type="number" step="0.01" min="0" max="10000" value={form.length} onChange={(e) => set("length", e.target.value)} className={errors.length ? "border-destructive" : ""} />
                </TooltipTrigger>
                <TooltipContent>Length: Left to right</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input placeholder="Width" type="number" step="0.01" min="0" max="10000" value={form.width} onChange={(e) => set("width", e.target.value)} className={errors.width ? "border-destructive" : ""} />
                </TooltipTrigger>
                <TooltipContent>Width: Front to back</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Input placeholder="Height" type="number" step="0.01" min="0" max="10000" value={form.height} onChange={(e) => set("height", e.target.value)} className={errors.height ? "border-destructive" : ""} />
                </TooltipTrigger>
                <TooltipContent>Height: Top to bottom</TooltipContent>
              </Tooltip>
              <Select value={form.unit} onValueChange={(v) => set("unit", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="inches">Inches</SelectItem>
                  <SelectItem value="cm">CM</SelectItem>
                  <SelectItem value="mm">MM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TooltipProvider>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">Quantity *</label>
          <Input placeholder="e.g. 500" type="number" min="50" max="1000000" value={form.quantity} onChange={(e) => set("quantity", e.target.value)} className={errors.quantity ? "border-destructive" : ""} />
          {errors.quantity && <p className="text-destructive text-xs mt-1">{errors.quantity}</p>}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Name *</label>
            <Input placeholder="Your name" maxLength={100} value={form.name} onChange={(e) => set("name", e.target.value)} className={errors.name ? "border-destructive" : ""} />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Email *</label>
            <Input placeholder="you@company.com" type="email" maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">Phone</label>
            <Input placeholder="+1 (555) 000-0000" maxLength={20} value={form.phone} onChange={(e) => set("phone", e.target.value)} className={errors.phone ? "border-destructive" : ""} />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">Additional Details</label>
          <Textarea placeholder="Tell us more about your project..." rows={4} maxLength={2000} value={form.message} onChange={(e) => set("message", e.target.value)} className={errors.message ? "border-destructive" : ""} />
          {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">Upload Your Design</label>
          <div
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-foreground/20 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-primary/50 transition-colors"
          >
            <Upload className="h-5 w-5 text-muted-foreground shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">
                {files.length > 0 ? files.map((f) => f.name).join(", ") : "Click to upload (PDF, AI, PSD, PNG, JPG, ZIP) — Max 5 MB"}
              </p>
            </div>
          </div>
          <input ref={fileRef} type="file" multiple accept=".pdf,.ai,.psd,.png,.jpg,.jpeg,.zip" onChange={handleFileChange} className="hidden" />
        </div>

        <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={loading}>
          {loading ? "Submitting..." : <>Submit Quote Request <Send className="ml-2 h-5 w-5" /></>}
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
