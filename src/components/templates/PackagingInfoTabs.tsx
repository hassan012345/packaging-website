import { useState } from "react";
import { defaultTabContent, type TabContentData } from "@/data/tabContent";
import { Layers, Paintbrush, Printer, Truck } from "lucide-react";

const tabs = [
  { key: "materials" as const, label: "Materials", icon: Layers },
  { key: "coating" as const, label: "Coating & Lamination", icon: Paintbrush },
  { key: "printInk" as const, label: "Print & Ink", icon: Printer },
  { key: "shipping" as const, label: "Shipping", icon: Truck },
];

interface Props {
  content?: TabContentData;
}

const PackagingInfoTabs = ({ content = defaultTabContent }: Props) => {
  const [active, setActive] = useState<keyof TabContentData>("materials");

  return (
    <section className="py-16 bg-[hsl(var(--primary))] text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Everything You Need to Know
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === tab.key
                    ? "bg-white text-[hsl(var(--primary))] shadow-lg"
                    : "bg-white/15 hover:bg-white/25 text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {content[active].map((item) => (
            <div
              key={item.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">{item.name}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagingInfoTabs;
