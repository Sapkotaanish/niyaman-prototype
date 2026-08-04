# Niyaman Prototype — Assumptions & Notes

- Single Design Component (`Niyaman.dc.html`) + `SeedData.js` (seed data module). State persists to `localStorage` (`niyaman-v1`).
- AI-drafted Minutes are **simulated**: a deterministic template merges company/AGM data into formal minutes text; "Regenerate" with a refine instruction applies simple keyword-triggered rewrites (contains "formal" / "short" / "auditor"), else appends a note reflecting the instruction. No live LLM call — matches the "realistic canned draft" scope decision.
- Nepali-calendar (Poush-end) deadlines are approximated with plausible Gregorian dates for the seeded compliance items; a real build should convert BS↔AD properly.
- Export: DOCX is a real download (Word-compatible HTML wrapped in `application/msword`). PDF export uses the browser's native print dialog on an isolated print view of the document — user chooses "Save as PDF."
- 2 seeded workspaces (1 firm managing 2 companies, 1 owner managing 1 company), 3 seeded companies, ~55 NISC codes.
- Auth: no login; workspace switcher only, as scoped.
- Compliance status colors/thresholds: overdue (red), due within 14 days (amber), otherwise neutral — an assumption, not specified in the brief.
- Out of scope per brief: payments, real auth, OCR/CAMIS integration, non-AGM workflows, real email delivery.
