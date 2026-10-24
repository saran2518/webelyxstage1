# Mobile home hero polish

- Replace only the mobile eyebrow with “Showering rain and love in Bengaluru”, retaining its style with 0.14em spacing and no wrapping.
- Add subtle fine drizzle confined to the photo and a 130px top shade behind the navbar.
- Preserve the photo, desktop hero, title, tagline, button and every other section.
- Check at 390×844 and 360×740 for a single-line eyebrow, photo-only rain and a fully visible button.

## Technical details
- Use a mobile-only canvas with approximately 140 independently moving streaks, scaled for device pixel ratio and resized with the photo.
- Pause animation while the tab is hidden, clean up on unmount and render a still frame for reduced motion.
- Keep presentation colours in the existing stylesheet’s semantic tokens.