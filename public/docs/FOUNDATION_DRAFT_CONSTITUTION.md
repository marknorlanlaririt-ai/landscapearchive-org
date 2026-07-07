# DRAFT FOR LAWYER REVIEW — NOT INCORPORATED

> **Legal notice:** This document is an AI-assisted draft constitution for consultation only. It is **not legal advice** and is **not filing-ready** until reviewed and adapted by a qualified Australian not-for-profit / charity lawyer. Publishing draft charter consultation is lawful and common; **do not** claim incorporated charity status until ASIC registration and any ACNC obligations are complete. Public specification copyright is held by **The Landscape Vault Pty Ltd** pending assignment to the incorporated Foundation by deed.

**Document type:** Draft Constitution (Company Limited by Guarantee)  
**Entity name (proposed):** The Landscape Archive Foundation Limited  
**Version:** 0.1 — consultation draft  
**Status:** NOT legally binding. Operative only after lawyer review, member adoption, ASIC registration, and (if applicable) ACNC registration.

**Companion materials:** [federation/CHARTER.md](../federation/CHARTER.md), [federation/GOVERNANCE.md](../federation/GOVERNANCE.md), [FOUNDATION_PUBLIC_NAMING_AND_LEGAL_SAFETY.md](./FOUNDATION_PUBLIC_NAMING_AND_LEGAL_SAFETY.md)

---

## 1. Type and name

1.1 The company is **The Landscape Archive Foundation Limited** (the **Company**), a public company limited by guarantee under the *Corporations Act 2001* (Cth).

1.2 The Company is a **not-for-profit** entity. No part of the income or property of the Company is payable or transferable, directly or indirectly, to members except as permitted by law and this Constitution.

1.3 The Company does **not** sell commercial products. Members and implementation partners may sell products that **implement** the open landscape metadata standard. Commercial operations remain with **The Landscape Archive Pty Ltd**; proprietary IP remains with **The Landscape Vault Pty Ltd** (see §4).

---

## 2. Objects

The objects of the Company are:

2.1 **Open standard stewardship** — to maintain, publish, and govern an open, vendor-neutral metadata standard for landscape architecture and allied built-environment practice (presently **TLA-185** and **TLA-169**), including field dictionaries, JSON Schema modules, JSON-LD context, reference validator rules, and semantic versioning releases.

2.2 **Education and research infrastructure** — to provide neutral shared infrastructure (schema portal, worked examples, conformance criteria, and open assessment tools) suitable for teaching, citation, and independent review.

2.3 **RFC governance** — to operate a transparent request-for-comment process for specification change, with published thresholds for minor and major releases.

2.4 **National and international advocacy** — to advance climate-positive design, open planting data, and Connection to Country protocols in public metadata — without absorbing or controlling the internal operations of any member organisation.

2.5 **Conformance programme** — to publish and maintain **Foundation Approved** badge criteria as machine-checkable conformance against the open specification (distinct from commercial practitioner credentials).

2.6 The Company must act consistently with its not-for-profit character and must not carry on activities that would disqualify it from charitable or deductible-gift-recipient status if such status is sought (subject to legal advice).

---

## 3. Three-entity firewall

3.1 **The Landscape Vault Pty Ltd** (the **Vault**) is the private intellectual-property holding company. Until assignment under §8, it holds copyright in the public specification layer. The Vault's proprietary assets (TLA Brain, three-dimensional assets, populated datasets, pipelines) are **not** governed by the Company.

3.2 **The Landscape Archive Pty Ltd** (the **Archive**) is the commercial operator under licence from the Vault. Products, subscriptions, enterprise delivery, and practitioner certification remain with the Archive. The Archive is a **founding implementation partner** and holds **no default voting seat** on the Council (§6.4).

3.3 **The Landscape Archive Foundation Limited** (the **Company**) stewards only the **public specification layer** — schemas, conformance criteria, governance process, and national advocacy within §2. The Company must not interfere in member HR, fees, clients, proprietary design IP, unreleased models, or software vendor choice.

3.4 Where a matter is not expressly a Company reserved power under §5, it remains a **member-reserved power**. Disputes over tier classification are resolved under §12.

---

## 4. Guarantee and membership classes

4.1 Each member undertakes that, if the Company is wound up while they are a member or within one year after they cease to be a member, they will contribute an amount not exceeding **$[amount — lawyer to set]** toward payment of the Company's debts and liabilities contracted before they cease to be a member, and of the costs, charges, and expenses of winding up.

4.2 **Member classes** (voting rights as stated):

| Class | Who | Vote |
|-------|-----|------|
| Practice member | Private landscape architecture and allied built-environment practices | Yes |
| Academic member | University landscape architecture programs and research schools | Yes |
| Public-body member | Councils, environmental authorities, utilities, research bodies | Yes |
| Indigenous advisory member | Traditional Owner organisations and protocol authorities | Yes, plus protocol authority under §9.4 |
| Implementation advisory member | Software, BIM, GIS, and interchange vendors implementing the standard | **No vote** (advisory only) |

4.3 Each member remains a fully independent legal entity. Membership creates **no joint liability** between members.

4.4 Admission, suspension, resignation, and fees are set by by-laws approved under §7. Funding (membership contributions, grants, sponsorship) must not confer extra votes or schema control.

---

## 5. Reserved powers (what the Company may and may not do)

### 5.1 Company reserved powers

The Company **may only** govern:

- the public metadata schema and its versioning;
- the JSON-LD context and reference validator;
- Foundation Approved badge criteria;
- optional shared open-asset registry policy;
- national advocacy positions adopted by Council;
- the Company's own budget, brand, domain, and infrastructure.

### 5.2 Member-reserved powers

The Company **must not** interfere in:

- a member's staffing, finances, fees, or clients;
- a member's proprietary design IP and unreleased models;
- a member's choice of software vendor or internal workflow;
- a member's project delivery decisions;
- Archive product pricing or Vault licensing terms.

### 5.3 Prohibited conduct

No member, partner, or contributor may:

- redirect Company brand, marks, or releases for private commercial advantage;
- publish competing forks under the Company name or Foundation Approved mark;
- use Council seats to set Archive shop prices or Vault IP terms.

---

## 6. Council (governing body)

6.1 The Company is governed by a **Council** of voting representatives elected by members, not by any single member or implementation partner.

6.2 **Composition (founding target):**

| Seats | Sector | Term |
|-------|--------|------|
| 2 | Practice members (different states/territories) | 2 years |
| 2 | Academic members | 2 years |
| 1 | First Nations / Indigenous advisory | 2 years, renewable by advisory panel |
| 1 | Public-body / environmental | 2 years |
| 1 | Open-data / standards liaison | 2 years |

6.3 The Council elects a Chair and Secretary from among voting members. No organisation holds more than one voting seat.

6.4 **Implementation partners** (including The Landscape Archive Pty Ltd) attend in an **advisory capacity only** and hold **no voting majority** on Council. Implementation partners must not collectively hold a majority of filled voting seats.

6.5 **Conflict of interest:** A Council member with a material personal interest in a matter must declare it, must not be present for or vote on that matter (except where the *Corporations Act* or this Constitution permits), and must not participate in decisions setting their own remuneration (§10.5).

---

## 7. Decisions, voting, and RFC process

7.1 **Quorum:** a majority of voting seats filled and present (in person or by permitted remote means).

7.2 **Vote thresholds:**

| Decision type | Threshold |
|---------------|-----------|
| Ordinary business (budget, advocacy statements, badge tweaks) | Simple majority of votes cast |
| Schema **minor** release (1.x) | Simple majority |
| Schema **major** release (2.0), constitution amendment, new member class | **Two-thirds (2/3)** of all voting seats |
| Cultural-context rules (§9.4) | Threshold as above **plus** Indigenous advisory sign-off |
| Winding up (§13) | Three-quarters (3/4) of all voting seats |

7.3 Each voting member has one vote. The Chair has a casting vote only to break a tie on ordinary business.

7.4 **RFC process (semver):**

1. Request for Comment opened on the public repository (minimum **14-day** comment period);
2. working-group recommendation;
3. Council vote at the threshold in §7.2;
4. publication on the schema portal with CHANGELOG entry and semver tag.

7.5 Breaking changes require a **major** semver bump and the §7.2 super-majority.

7.6 Decisions, vote tallies, and dissents are recorded in public minutes on the schema portal (with confidential or cultural detail redacted as required).

7.7 **Constitution amendments** require the §7.2 super-majority after **21 days'** notice to all members, ASIC-compliant special resolution procedures, and lawyer review.

---

## 8. Intellectual property and assignment

8.1 The public TLA-169 and TLA-185 field dictionaries, schema documentation, and governance artefacts are licensed **CC BY-NC-ND 4.0** for public reference. Reference validator code may be licensed Apache-2.0 where marked in file headers.

8.2 **Until assignment:** copyright in the public specification layer is held by **The Landscape Vault Pty Ltd**. The Company acknowledges that no public claim that the Company holds copyright is made until a formal **assignment deed** (Vault → Company) is executed and registered as required.

8.3 On assignment, the Company holds copyright in the public standard layer subject to the published open licences. The Company grants every member and implementation partner a perpetual, royalty-free licence to implement and extend mappings in their own tools.

8.4 Members retain all IP in their own designs, datasets, and models. Contributing to the schema does not transfer member project IP.

8.5 Commercial implementation (enterprise BIM, automation, high-fidelity assets) requires a separate licence from The Landscape Archive Pty Ltd.

---

## 9. Cultural context governance

9.1 Landscape metadata may include `cultural-context` fields subject to Connection to Country protocols.

9.2 Any schema field, badge rule, or registry policy touching `cultural-context` requires **sign-off from the Indigenous advisory Council seat** (or successor protocol authority recognised in by-laws) **before** adoption.

9.3 This sign-off is a **protocol authority** and **cannot be overridden** by majority vote.

9.4 Restricted cultural detail must not be published in open repositories; sensitivity classes and protocol references are defined in public policy only.

---

## 10. Finances and lawful pay

10.1 The Company is not-for-profit. Surplus is applied to the objects in §2, never distributed to members as members.

10.2 The Company may employ staff and engage contractors to carry out its objects (schema maintenance, validator engineering, secretariat, programmes), subject to applicable employment law.

10.3 The Company will comply with the *Fair Work Act 2009* (Cth) and applicable modern awards or state instruments. Remuneration classifications require professional advice before engagement.

10.4 **Surplus feeds the work:** operating surplus is directed first to lawful remuneration and on-costs of people engaged under §10.2, then to other object activities. Paying for services actually rendered is not profit distribution to members.

10.5 **Related-party safeguards:** persons paid who are also members or Council members must declare interests, must not vote on their own remuneration, and rates must not exceed fair market value. Council-member pay requires prior Council approval and any member approval required by law.

---

## 11. Officers and administration

11.1 The Company must have at least the directors/officers required by the *Corporations Act* (lawyer to map "Council" to director/member roles).

11.2 The Secretary maintains the member register, minutes, and ASIC filings.

11.3 Public GitHub organisation administration and release tags are exercised by officers under Council direction; merges follow the RFC process in §7.

---

## 12. Dispute resolution

12.1 Parties must attempt good-faith negotiation (14 days) before arbitration.

12.2 Unresolved disputes are referred to an **independent arbitrator** (or small panel) who is not an officer or employee of any member.

12.3 The arbitrator interprets this Constitution and schema rules and issues a **binding** decision, published with confidential/cultural detail redacted.

12.4 Arbitration is the agreed forum before court action except where injunctive relief is urgently required. Governing law: the State/Territory of the Company's registered office, Australia.

12.5 The arbitrator is appointed by Council super-majority and serves a fixed term.

---

## 13. Winding up and asset lock

13.1 The Company may be wound up only by special resolution at the §7.2 three-quarters threshold and in compliance with the *Corporations Act*.

13.2 **Asset lock:** on winding up, after payment of debts and liabilities:

- the schema, documentation, and validator releases **remain** under their open licences (§8.1) and publicly accessible;
- no member may receive distribution of surplus assets;
- remaining assets transfer to one or more not-for-profit entities with objects compatible with §2, as determined by members and approved by law.

13.3 The open specification must not be privatised, encumbered, or removed from public licence terms as a condition of dissolution.

---

## 14. Interim period (pre-ASIC)

14.1 Until ASIC registration completes, the founding alliance operates as an **unincorporated consultation group**. This Constitution is published for review only and creates **no binding membership** in a legal entity that does not yet exist.

14.2 **The Landscape Archive Pty Ltd** provides interim hosting as implementation partner. Interim specification copyright remains with **The Landscape Vault Pty Ltd**.

14.3 Founding supporters who confirm review of this draft and nominate a representative may be listed when the standard launches publicly — not upon commercial product adoption.

---

## 15. Incorporation pathway (proposed)

| Phase | Action |
|-------|--------|
| 1. Consultation | Publish this draft; collect founding alliance feedback (public page: `landscapearchive.org/founding-charter`) |
| 2. Lawyer review | Australian NFP/charity lawyer adapts for CLG, ACNC (if sought), tax, and cultural-protocol enforceability |
| 3. ASIC registration | Register company limited by guarantee; adopt constitution; appoint directors |
| 4. IP assignment | Execute Vault → Company assignment deed for public specification copyright |
| 5. Founding alliance | Founding members execute membership; inaugural Council elected; by-laws adopted |
| 6. ACNC (if applicable) | Apply for charity registration only after legal advice on objects and DGR strategy |

---

## 16. Definitions

- **Foundation Approved** — conformance with published JSON Schema and validator rules; not a regulatory certification.
- **Implementation partner** — a vendor implementing the standard; advisory by default.
- **Member** — an organisation admitted under §4 (not individual affiliate referrers).
- **Public specification layer** — field dictionaries, schemas, contexts, validator rules, and governance artefacts under CC BY-NC-ND 4.0.
- **RFC** — request for comment on the public repository with minimum 14-day comment period.

---

*End of draft — for lawyer review only.*
