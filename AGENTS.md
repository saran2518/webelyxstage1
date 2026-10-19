# Project rules
- Keep all page media and brand asset references in `src/content/media.ts`, with future filenames beside fallback slots, so uploads need one update.
- Render image/video slots through `SlotMedia` so absent videos show posters without broken playback.
- Use `EarlyAccessButton` for the shared marketing action so its destination stays consistent.
- Preserve early access validation, email verification and registration behaviour during copy-only changes.
- Keep legal document text unchanged during marketing rewrites because those pages contain supplied legal documents.