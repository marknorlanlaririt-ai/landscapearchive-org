# Orbit golden examples (draft)

Illustrative JSON packs for Foundation draft orbits. **Not normative.**

| File | Orbit | Schema id | Required-keys schema |
|------|-------|-----------|----------------------|
| `tla-syn-example.json` | TLA-SYN | `la.archive.synthetic-nature.v1` | [/schemas/orbits/tla-syn.required.schema.json](/schemas/orbits/tla-syn.required.schema.json) |
| `tla-evid-example.json` | TLA-EVID | `la.archive.audit-pack.v1` | [/schemas/orbits/tla-evid.required.schema.json](/schemas/orbits/tla-evid.required.schema.json) |
| `tla-ml-example.json` | TLA-ML | `la.archive.ml-label.v1` | [/schemas/orbits/tla-ml.required.schema.json](/schemas/orbits/tla-ml.required.schema.json) |

Validate locally (zero-dep required-keys smoke):

```bash
npm run validate:orbits
```

Public pages: [/standards](/standards). Constellation: [/governance#standards-constellation](/governance#standards-constellation).
