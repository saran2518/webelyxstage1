# Project rules
- Keep all page media and brand asset references in `src/content/media.ts`, with future filenames beside fallback slots, so uploads need one update.
- Render brand wordmarks through `Wordmark` using the original asset SVG geometry and colours, with per-instance `useId` gradient identifiers to prevent navbar/footer collisions.
- Render image/video slots through `SlotMedia` so absent videos show posters without broken playback.
- Serve phone-only portrait photo variants through a `<picture>` source in the page rather than cropping the wide image, because a tall phone frame cannot fit two people standing side by side.
- Use `EarlyAccessButton` for the shared marketing action so its destination stays consistent.
- Preserve early access validation, email verification and registration behaviour during copy-only changes.
- Keep legal document text unchanged during marketing rewrites because those pages contain supplied legal documents.