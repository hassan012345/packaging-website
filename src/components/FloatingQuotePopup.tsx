import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, X, Phone } from "lucide-react";

const FloatingQuotePopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 bg-popover border border-border rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <h3 className="font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Get Instant Quote</h3>
            <button onClick={() => setOpen(false)}><X className="h-4 w-4" /></button>
          </div>
          <div className="p-4 space-y-3">
            <Input placeholder="Full Name" className="text-sm" />
            <Input placeholder="Email Address" type="email" className="text-sm" />
            <Input placeholder="Phone Number" className="text-sm" />
            <Input placeholder="Total Quantity" type="number" className="text-sm" />
            <Select>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Select Box Type" />
              </SelectTrigger>
              <SelectContent>
                {["Tuck Boxes", "Mailer Boxes", "Display Boxes", "Rigid Boxes", "Kraft Boxes", "Mylar Bags", "Other"].map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full text-sm">Submit Request</Button>
            <div className="text-center">
              <a href="tel:8333275627" className="flex items-center justify-center gap-2 text-xs text-primary font-semibold hover:underline">
                <Phone className="h-3.5 w-3.5" /> CALL FOR INSTANT PRICING
              </a>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default FloatingQuotePopup;
