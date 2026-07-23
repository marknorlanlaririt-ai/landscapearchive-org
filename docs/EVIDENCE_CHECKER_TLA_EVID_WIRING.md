# Evidence Checker ↔ TLA-EVID wiring

**Audience:** Foundation + Archive engineers  
**Status:** wiring documented 2026-07-23 (Wave 2)  
**Self-serve upload UI:** still **paused** (`FOUNDATION_SELF_SERVE_TOOLS_PAUSED = true`)  
**Licence:** CC BY-NC-ND 4.0 KEEP settled — pause is stewardship / incorporation, not a CC tick.

## Layers (do not conflate)

| Layer | Surface | What it does | What it is not |
|-------|---------|--------------|----------------|
| **TLA-EVID** | Draft orbit `la.archive.audit-pack.v1` | Open evidence *shape* | Seal, Foundation Approved |
| **Evidence Checker** | `landscapearchive.org/evidence-checker` | Browser-local structure inspect (when un-paused) | Merchant Hub, Seal crypto |
| **TLA-Evidence.exe** | Desktop profession suite | Local validator for entitled / offline packs | Cloud Seal issue |
| **Archive Seal** | Commercial Archive | Period-bound attestation | Open Foundation tool |

## Artefacts

| Piece | Absolute path / URL |
|-------|---------------------|
| Orbit HTML | https://landscapearchive.org/standards/tla-evid |
| Golden example | https://landscapearchive.org/examples/orbits/tla-evid-example.json |
| Required-keys schema | `landscapearchive-org/public/schemas/orbits/tla-evid.required.schema.json` |
| Checker script | `landscapearchive-org/public/scripts/evidence-checker.js` (recognises `schema_id`) |
| Engineering stub | `la-frontend/docs/TLA_EVID_AUDIT_PACK_v1.md` |
| Remapper draft export | Admin `/admin-conduit` → Download draft TLA-EVID JSON |

## Acceptance when upload UI re-opens

1. Golden `tla-evid-example.json` opens as **TLA-EVID draft** with zero structure issues.  
2. Commercial `.tla` / `.lapkg` still refused.  
3. Presence of `attestation.archive_seal_ref` never implies Seal was issued by this page.  
4. Copy continues: Foundation Approved ≠ Seal (`/foundation-approved`).

## Explicit non-goals

- Un-pause without stewardship tick  
- Public Seal verify on `.org`  
- Claiming MoUs or live UK/CA/US markets
