import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload } from "lucide-react";
import { categories } from "@/data/categories";
import { shapes, materials } from "@/data/shapes";

interface Props {
  productType?: string;
}

const productOptions = [
  ...new Set([
    ...categories.map(c => c.name),
    ...shapes.map(s => s.name),
    ...materials.map(m => m.name),
  ])
];

const InlineQuoteForm = ({ productType = "Custom" }: Props) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("inches");
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [selectedProduct, setSelectedProduct] = useState(productType);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    length: "",
    width: "",
    height: "",
    message: "",
  });

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.quantity) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      let uploadedFileUrls: string[] = [];
      if (files.length > 0) {
        for (const file of files) {
          const fileName = `${Date.now()}-${file.name}`;
          const { data, error: uploadError } = await supabase.storage
            .from("quote-designs")
            .upload(fileName, file);
          if (uploadError) throw uploadError;
          if (data) {
            const { data: urlData } = supabase.storage
              .from("quote-designs")
              .getPublicUrl(data.path);
            uploadedFileUrls.push(urlData.publicUrl);
          }
        }
      }

      const messageWithFiles = [
        form.message,
        uploadedFileUrls.length > 0 ? `\n\nDesign files: ${uploadedFileUrls.join(", ")}` : "",
      ].join("");

      const { error } = await supabase.from("quote_requests").insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        product_type: selectedProduct,
        quantity: parseInt(form.quantity) || 0,
        length: parseFloat(form.length) || null,
        width: parseFloat(form.width) || null,
        height: parseFloat(form.height) || null,
        dimension_unit: unit,
        message: messageWithFiles || null,
      });
      if (error) throw error;
      toast({ title: "Quote request submitted!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", quantity: "", length: "", width: "", height: "", message: "" });
      setSelectedProduct("Custom");
      setFiles([]);
      if (fileRef.current) fileRef.current.value = "";
    } catch {
      toast({ title: "Submission failed", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 space-y-4 shadow-lg">
      <h3 className="text-xl font-bold text-foreground text-center mb-2">Get Your Free Quote</h3>

      {/* Row 1: Name, Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Input value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="Full Name *" className="border-foreground/30 focus:border-primary" />
        <Input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="Email *" className="border-foreground/30 focus:border-primary" />
        <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Phone" className="border-foreground/30 focus:border-primary" />
      </div>

      {/* Row 2: L x W x H + Unit */}
      <TooltipProvider delayDuration={200}>
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Input type="number" value={form.length} onChange={(e) => handleChange("length", e.target.value)} placeholder="L" className="border-foreground/30 focus:border-primary" />
            </TooltipTrigger>
            <TooltipContent>Length: Left to right</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input type="number" value={form.width} onChange={(e) => handleChange("width", e.target.value)} placeholder="W" className="border-foreground/30 focus:border-primary" />
            </TooltipTrigger>
            <TooltipContent>Width: Front to back</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input type="number" value={form.height} onChange={(e) => handleChange("height", e.target.value)} placeholder="H" className="border-foreground/30 focus:border-primary" />
            </TooltipTrigger>
            <TooltipContent>Height: Top to bottom</TooltipContent>
          </Tooltip>
          <Select value={unit} onValueChange={setUnit}>
            <SelectTrigger className="w-[100px] border-foreground/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inches">Inches</SelectItem>
              <SelectItem value="mm">mm</SelectItem>
              <SelectItem value="cm">cm</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </TooltipProvider>

      {/* Row 3: Product + Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
          <SelectTrigger className="border-foreground/30">
            <SelectValue placeholder="Select Product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Custom">Custom</SelectItem>
            {productOptions.map((p) => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input type="number" value={form.quantity} onChange={(e) => handleChange("quantity", e.target.value)} placeholder="Total Quantity *" className="border-foreground/30 focus:border-primary" />
      </div>

      {/* Row 4: Specifications */}
      <Textarea
        value={form.message}
        onChange={(e) => handleChange("message", e.target.value)}
        placeholder="Provide detailed packaging specifications including dimensions, materials, weight restrictions, and design references and we'll get back to you with an instant quote."
        className="border-foreground/30 focus:border-primary min-h-[100px]"
      />

      {/* Row 5: File upload */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Upload Your Design</label>
        <div onClick={() => fileRef.current?.click()} className="border-2 border-dashed border-foreground/20 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-primary/50 transition-colors">
          <Upload className="h-5 w-5 text-muted-foreground shrink-0" />
          <p className="text-sm text-muted-foreground">
            {files.length > 0 ? files.map((f) => f.name).join(", ") : "Click to upload (PDF, AI, PSD, PNG, JPG, ZIP) — Max 5 MB"}
          </p>
        </div>
        <input ref={fileRef} type="file" multiple accept=".pdf,.ai,.psd,.png,.jpg,.jpeg,.zip" onChange={handleFileChange} className="hidden" />
      </div>

      {/* Row 6: Submit */}
      <Button type="submit" className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90" disabled={loading}>
        {loading ? "Submitting..." : "Get Quote"}
      </Button>
    </form>
  );
};

export default InlineQuoteForm;
