

## Plan: Add Blinking Ring Animation to WhatsApp Button

### What changes
Update the WhatsApp floating button to have an animated pulsing/blinking ring effect radiating outward from the green circle, similar to common WhatsApp chat widgets.

### 1. Add ring pulse keyframe animation (`tailwind.config.ts`)
- Add a custom `whatsapp-ring` keyframe that creates expanding, fading rings around the button
- Register the animation as `animate-whatsapp-ring`

### 2. Update WhatsApp button with ring effect (`src/components/WhatsAppButton.tsx`)
- Wrap the button in a container with `relative` positioning
- Add two `::before`/`::after` pseudo-ring elements (or span elements) that pulse outward with the WhatsApp green color
- The rings will scale up and fade out continuously, creating a blinking ring effect
- Remove the current `animate-pulse` in favor of the new ring animation

### Files to edit
- `tailwind.config.ts` — add whatsapp-ring keyframe animation
- `src/components/WhatsAppButton.tsx` — add pulsing ring spans around the button

