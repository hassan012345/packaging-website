import {
  CreditCard, Sticker, FileText, DoorOpen, Tag, Droplets,
  AppWindow, Star, Zap, Wine, FolderOpen, Settings
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface OtherItem {
  name: string;
  slug: string;
  icon: LucideIcon;
}

export const othersItems: OtherItem[] = [
  { name: "Business Cards", slug: "/custom-boxes", icon: CreditCard },
  { name: "Vinyl Stickers", slug: "/custom-boxes", icon: Sticker },
  { name: "Printed Flyers", slug: "/custom-boxes", icon: FileText },
  { name: "Door Hangers", slug: "/custom-boxes", icon: DoorOpen },
  { name: "Labels", slug: "/custom-boxes", icon: Tag },
  { name: "Bumper Stickers", slug: "/custom-boxes", icon: Sticker },
  { name: "Waterproof Stickers", slug: "/custom-boxes", icon: Droplets },
  { name: "Window Stickers", slug: "/custom-boxes", icon: AppWindow },
  { name: "Foil Stickers", slug: "/custom-boxes", icon: Star },
  { name: "Static Clings", slug: "/custom-boxes", icon: Zap },
  { name: "Bottle Neckers", slug: "/custom-boxes", icon: Wine },
  { name: "Folders", slug: "/custom-boxes", icon: FolderOpen },
  { name: "Custom", slug: "/custom-boxes", icon: Settings },
];
