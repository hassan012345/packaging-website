import { TreePine, Truck, Package, Paintbrush } from "lucide-react";

const badges = [
  { icon: TreePine, label: "FSC Certified", desc: "Eco-friendly materials" },
  { icon: Truck, label: "Fast Delivery", desc: "7-10 business days" },
  { icon: Package, label: "Bulk Orders", desc: "No minimum limits" },
  { icon: Paintbrush, label: "Design Studio", desc: "Free design support" },
];

const TrustBadges = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {badges.map((b) => (
      <div key={b.label} className="flex flex-col items-center text-center gap-2 p-5 rounded-xl bg-primary text-primary-foreground shadow-md">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <b.icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-sm font-bold text-white">{b.label}</span>
        <span className="text-xs text-white/70">{b.desc}</span>
      </div>
    ))}
  </div>
);

export default TrustBadges;
