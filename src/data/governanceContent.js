import {
  FOUNDATION_COMMERCIAL_CONTACT_PATH,
  FOUNDATION_LICENCE_LABEL,
  ARCHIVE_CITATIONS_PATH,
  FEDERATION_SCHEMA_PORTAL_URL,
  FOUNDATION_GOVERNANCE_CITATION_URL,
  FOUNDATION_SUPPORT_CONTACT_PATH,
  OPEN_STANDARD_GITHUB_TAG_URL,
  OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE,
  REGISTRY_PATH,
  SUPPORT_PATH,
  TLA169_DISPLAY_ID,
  TLA169_FIELD_COUNT,
  TLA185_DISPLAY_ID,
  TLA185_FIELD_COUNT,
  TLA185_VERSION,
  isOpenStandardGithubPubliclyAvailable
} from './foundationWing.js'
import { ARCHIVE_ORIGIN } from './site.js'
import { buildFoundationIntendedPurposeSections } from './purposeContent.js'

/**
 * Foundation mission and Foundation Standards (five pillars).
 * Wording distinguishes live public standard work from incorporation-era goals.
 */
export function buildFoundationGovernanceSections({
  fieldCount = TLA185_FIELD_COUNT,
  baseFieldCount = TLA169_FIELD_COUNT
} = {}) {
  return Object.freeze([
    {
      id: 'standard-stewardship',
      heading: 'Standard stewardship',
      paragraphs: [
        'The Landscape Archive Foundation is intended to serve a role distinct from the commercial product stack. Its public mandate is stewardship of the open specification — field registry, schemas, and conformance criteria — not subscriptions, proprietary datasets, or delivery tooling.',
        'Two Australian proprietary limited companies hold commercial roles separate from that mandate. The Landscape Vault Pty Ltd holds proprietary intellectual property: TLA Brain automation, three-dimensional assets, populated datasets, and implementation code. The Landscape Archive Pty Ltd operates commercially — subscriptions, Studio+™, Revit integration, and enterprise delivery — under licence from the Vault.',
        'The canonical specification is published as independent public infrastructure: a shared reference that no single vendor controls, so criteria for botanically informed digital representation remain open to scrutiny and revision through open governance. Until an independent steward entity is established, interim hosting is provided by The Landscape Archive Pty Ltd as implementation partner; the draft governance terms on this page apply for consultation only.'
      ]
    },
    ...buildFoundationIntendedPurposeSections(),
    {
      id: 'truth-telling',
      heading: 'Truth and truth-telling',
      paragraphs: [
        'Landscape projects carry claims — about species, climate suitability, sustainability outcomes, cultural context, and the provenance of visual assets. The Foundation exists so those claims can be expressed, checked, and questioned in a shared vocabulary suitable for independent review.',
        'Truth-telling here is practical and structural: documented taxon IDs instead of vague planting labels; banded site context with explicit spatial resolution; evidence URIs and method notes on sustainability fields; sensitivity classes that route restricted cultural detail to appropriate repositories; lineage metadata on synthetic or derivative assets.',
        'The Foundation publishes the information architecture within which practitioners, clients, regulators, and communities document and verify claims: what was asserted, what evidence supports it, and what must remain restricted. Substantive verification remains with the project team and the institutions that govern them.',
        'Open specification work is itself a form of truth-telling. Criteria, schemas, and conformance checks are published for independent review and citation.'
      ],
      bullets: [
        'Botanical truth — harmonised names, taxon IDs, and growth form in interchange bundles',
        'Climate and sustainability truth — auditable fields with evidence links and method notes',
        'Cultural truth — protocol-aware metadata with sensitivity-class routing for restricted detail',
        'Provenance truth — attribution and lineage for synthetic or derivative nature assets',
        'Institutional truth — clear separation of Foundation Approved (open conformance) from Archive Certified (vendor credential)'
      ]
    },
    {
      id: 'three-entity-structure',
      heading: 'Three-entity structure',
      paragraphs: [
        'Commercial assets remain within the Vault and Archive. The public specification resides in the Foundation layer.'
      ],
      facts: [
        { label: 'The Landscape Vault Pty Ltd', value: 'Private holding company. Proprietary IP: TLA Brain, 3D assets, databases, and pipelines.' },
        { label: 'The Landscape Archive Pty Ltd', value: 'Commercial operator under Vault licence. Products, sales, and interim Foundation hosting.' },
        { label: 'The Landscape Archive Foundation', value: `Intended independent steward (not yet incorporated). Public ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID} specifications under CC BY-NC-ND 4.0.` }
      ]
    },
    {
      id: 'who-can-change-what',
      heading: 'Governance scope',
      paragraphs: [
        "Foundation governance addresses the public specification. Member organisations retain independent authority over their business operations, intellectual property, and internal tooling.",
        'Within scope: admitted members electing Council representatives and approving schema proposals through the published process.',
        'Outside scope: redirecting Foundation brand or releases; publishing competing forks under the Foundation name; using Council seats to set Archive pricing or Vault licensing terms.'
      ],
      facts: [
        { label: `${TLA185_DISPLAY_ID} extension (e.g. climate screening)`, value: 'Foundation Council — request for comment, working group, simple majority' },
        { label: `${TLA169_DISPLAY_ID} minor release (1.x)`, value: 'Foundation Council — request for comment, working group, simple majority' },
        { label: `${TLA169_DISPLAY_ID} / ${TLA185_DISPLAY_ID} major revision`, value: 'Foundation Council — request for comment, two-thirds super-majority' },
        { label: 'Cultural context and badge criteria', value: 'Council with First Nations advisory review before adoption' },
        { label: 'Foundation budget, brand, and domain', value: 'Foundation Council — simple majority; not-for-profit' },
        { label: 'GitHub releases and organisation administration', value: 'Foundation officers — public pull requests; merges via officers' },
        { label: 'Member practice (HR, clients, delivery)', value: 'Each member organisation — member organisation remit' },
        { label: 'Member proprietary IP and unreleased models', value: 'Each member — specification contribution retains member project IP' },
        { label: 'Landscape Archive products and pricing', value: 'The Landscape Archive Pty Ltd — implementation partners hold no Foundation voting seat' },
        { label: 'Landscape Vault IP (Brain, assets, pipelines)', value: 'The Landscape Vault Pty Ltd — not Foundation-governed' },
        { label: 'Commercial implementation licence', value: 'The Landscape Archive Pty Ltd — separate from non-commercial reference use' },
        { label: 'Client project exchange records', value: 'Project author — restricted cultural material routed via published sensitivity classes' }
      ]
    },
    {
      id: 'foundation-vs-archive',
      heading: 'Foundation and Archive responsibilities',
      paragraphs: [
        'Three entities, three distinct roles. Practitioner certification remains commercial; published conformance criteria (Foundation Approved) reside with the Foundation.',
        'Foundation Approved is vendor-neutral and denotes conformance with the published specification. Landscape Archive Certified is a paid practitioner credential — a commercial training and verification programme distinct from Foundation Approved conformance assessment.'
      ],
      facts: [
        { label: 'Vault — TLA Brain, assets, datasets, pipelines', value: 'Proprietary IP holding company — not Foundation-governed' },
        { label: `Foundation — ${TLA185_DISPLAY_ID} / ${TLA169_DISPLAY_ID}, schemas, open assessment tools`, value: 'Public specification steward — CC BY-NC-ND 4.0' },
        { label: 'Foundation — Foundation Approved criteria', value: 'Interchange baseline — published conformance criteria, formally assessable' },
        { label: 'Foundation — cultural-context policy and audit checklist', value: 'Policy and checklists only — not datasets or applications' },
        { label: 'Archive — Library, Revit, Studio+™, shop, Brain delivery', value: 'Commercial products implementing the specification' },
        { label: 'Archive — practitioner certification programme', value: 'Paid tiers, cohorts, credential verification — vendor credential' },
        { label: 'Archive — species library, Run-01, export assist', value: 'Licensed data — remains outside the open GitHub layer' },
        { label: 'Layer 1 · Foundation Approved', value: 'Foundation — exchange record meets published conformance assessment' },
        { label: 'Layer 2 · Archive Certified', value: 'Archive — training on Archive tools (paid)' },
        { label: 'Layer 3 · Institutional attestation (future)', value: 'Foundation policy; Archive may be one issuer among many' }
      ],
      bullets: [
        'Public usage: “Foundation Approved” denotes open specification conformance; “Archive Certified” denotes a practitioner credential',
        'Practitioner certification, commerce, and licensed datasets remain with the Archive'
      ],
      actions: [{ label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true }]
    },
    {
      id: 'founding-alliance',
      heading: 'Founding alliance',
      paragraphs: [
        'The Landscape Archive Foundation is intended to convene a founding alliance — an international coalition of independent organisations that help steward the open landscape metadata specification through draft charter consultation. This is not a separate trademark, franchise, or commercial network; it sits under the Foundation name and scope described on this page.',
        'The Landscape Archive affiliate partner programme is a commercial referral arrangement operated by The Landscape Archive Pty Ltd for subscription sales. Affiliate partnership is unrelated to Foundation founding membership: it confers no vote, Council seat, charter signatory status, or listing as a founding supporter.',
        'Founding alliance participants are invited across jurisdictions — landscape architecture and allied design practices; university schools and research groups; municipal, regional, and national public bodies; First Nations and Indigenous protocol authorities where cultural-context fields apply; nursery and supply-chain partners whose provenance data supports honest planting records; and software, BIM, GIS, and interchange vendors as implementation partners worldwide. Implementation partners participate in an advisory capacity by default and hold no voting majority.',
        'Each organisation remains legally independent. Founding participation creates no joint liability, no obligation to adopt commercial Archive products, and no transfer of proprietary project intellectual property. Shared work is confined to the public specification layer — field registry, schemas, conformance criteria, and published governance — as set out under governance scope above.',
        'This material is draft and for consultation only. A founding charter is under review with advisers and prospective members; nothing here solicits binding membership in an incorporated entity that does not yet exist. Organisations confirming review of the draft charter and nominating a representative may be listed as founding supporters when the standard launches publicly — not upon commercial product adoption or affiliate programme acceptance.'
      ],
      bullets: [
        'Practice members — private landscape, urban design, and allied built-environment firms worldwide',
        'Academic members — university programmes, research institutes, and open-science collaborators',
        'Public-body members — agencies, utilities, and environmental authorities referencing the open standard',
        'Indigenous protocol members — Traditional Owner organisations and custodial authorities with advisory sign-off on cultural-context rules',
        'Supply-chain partners — nurseries, seed networks, and material suppliers supporting traceable planting provenance',
        'Implementation partners — BIM, GIS, nursery exchange, and validation tooling vendors (advisory; no default vote)'
      ],
      facts: [
        { label: 'Affiliate partner programme', value: 'Commercial referral programme operated by The Landscape Archive Pty Ltd — not Foundation membership' },
        { label: 'Founding alliance', value: 'Draft charter consultation under The Landscape Archive Foundation — membership classes subject to published by-laws' },
        { label: 'Implementation partners', value: 'Software and delivery vendors including The Landscape Archive — advisory by default; no voting majority' }
      ],
      actions: [
        { label: 'Schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true },
        { label: 'Awards and data architecture', href: '/awards#data-architecture-alignment' },
        {
          label: 'Charter consultation',
          href: `${FOUNDATION_SUPPORT_CONTACT_PATH}&intent=founding-alliance`,
          external: true
        },
        { label: 'Affiliate partner programme (commercial)', href: `${ARCHIVE_ORIGIN}/partners`, external: true }
      ]
    },
    {
      id: 'charter-pillars',
      heading: 'Foundation Standards',
      paragraphs: [
        'The Foundation’s public work is organised around five interrelated Foundation Standards. Each pillar describes a domain in which landscape project metadata must meet rising professional and public expectation as climate reporting, digital twin adoption, and synthetic visualisation accelerate. The pillars are statements of public purpose — domains in which the open specification establishes shared definitions and the boundary between public reference work and commercial implementation.',
        'Read together, they articulate a single argument: that truth in landscape documentation is an infrastructural problem, solvable only through shared definitions, open governance, and a clear boundary between public reference work and commercial implementation. The sections that follow develop each standard in turn.'
      ]
    },
    {
      id: 'pillar-botanical-truth',
      heading: '1 · Botanical truth and reference standard',
      paragraphs: [
        'Landscape architecture has long depended on planting schedules, species palettes, and visual representations that imply botanical knowledge without always encoding it. A drawing may show “coastal banksia” or “native grass mix” while leaving unresolved whether the name is current, whether the taxon is appropriate to the site, or whether the digital asset corresponds to a living plant at all. The first Foundation Standard addresses that gap by stewarding the information architecture through which botanical claims can be stated precisely, exchanged between organisations, and held open to scrutiny.',
        `The public specification — presently ${TLA185_DISPLAY_ID}, with ${fieldCount} documented elements extending the earlier ${TLA169_DISPLAY_ID} profile at ${baseFieldCount} fields — defines modules for taxonomy and identity, traits and morphology, botanical asset rows, and the metadata required for BIM delivery. Accepted scientific names, Darwin Core taxon identifiers, controlled synonym handling, native status, and growth form are treated as first-class interchange elements rather than informal annotations. Implementations may reference this schema freely; populated species records and trait matrices are supplied through licensed Archive and Vault datasets at production scale. The open layer establishes what ought to be said about a plant in a project record; the Archive and Vault hold the proprietary automation that populates those fields.`,
        'At minimum, a Foundation Approved exchange bundle is expected to carry at least one botanical asset row sufficient for an independent reader to reconstruct planting intent: a taxon identifier, a scientific name, native status, and growth form, without reliance on proprietary joins or undisclosed lookup tables. This is a modest bar, but it is a truthful one. It converts implicit horticultural assumption into documented assertion.',
        'Looking forward, the Foundation intends to formalise processes for specification revision, publish explicit criteria for botanical accuracy in digital representation, and develop frameworks that respect both scientific taxonomy and Indigenous ecological knowledge — including appropriate attribution, sensitivity classification, and governance review where cultural context fields are involved. Those criteria will remain distinct from product marketing and from vendor certification; they belong to the public reference layer, where they can be debated, cited, and revised through the Foundation’s open governance process.'
      ]
    },
    {
      id: 'pillar-climate-compliance',
      heading: '2 · Climate and environmental disclosure',
      paragraphs: [
        'Climate adaptation, environmental risk, and sustainability performance are now routine subjects in landscape project documentation — yet the digital record of such claims often lags far behind the rhetoric of drawings and reports. Projects may be described as “climate resilient,” “water sensitive,” or “nature positive” without a corresponding, auditable statement of what was assessed, under which disclosure framework, with what evidence, and within what spatial or temporal bounds. The second pillar holds that environmental truth-telling in landscape metadata requires a shared vocabulary encoded in documented metadata fields.',
        `The ${TLA185_DISPLAY_ID} specification extends the baseline environment and sustainability modules with site context bands, mid-century climate screening fields, environmental risk metadata, and structured sustainability disclosure. Practitioners may record, for example, which disclosure standard they mapped to, what proportion of planting is native by the project’s own definition, whether water-sensitive design principles were applied, and where supporting evidence resides — together with method notes that explain how figures were derived. Site context is expressed as summarised bands (Köppen classification, rainfall and temperature ranges, microclimate commentary) to keep interchange legible and reviewable at project scale.`,
        'The Foundation’s role in this pillar is definitional: to specify the metadata shape within which practitioners, clients, and advisers populate environmental disclosure and within which software validates structural completeness. Entity-level greenhouse-gas inventories, audited financial-climate filings, and regulatory compliance assessments remain with project teams, advisers, and governing institutions. Verification of substance — whether a claim is justified — follows established professional and institutional processes.',
        'Work continues toward open auditing checklists, documented conformance signals for three-dimensional assets, and public crosswalk notes that relate specification fields to commonly encountered disclosure concepts in procurement and reporting. Those instruments will be published through the same open governance process as the schema itself, so that climate-ready project documentation rests on inspectable information architecture.'
      ]
    },
    {
      id: 'pillar-open-infrastructure',
      heading: '3 · Open research infrastructure',
      paragraphs: [
        `Universities, research groups, and independent practitioners need a stable reference if landscape information is to be taught, cited, and reproduced consistently across cohorts and jurisdictions. When the field dictionary lives only inside commercial products, curriculum design becomes dependent on vendor access, licence terms shift with product roadmaps, and students learn an interface rather than a discipline. The third pillar commits the Foundation to maintaining open research infrastructure: the canonical specification, schema artefacts, worked examples, and reference validation tools that make ${TLA185_DISPLAY_ID} and ${TLA169_DISPLAY_ID} legitimate objects of academic study.`,
        'That infrastructure is already partially in place. The specification is released on GitHub under semantic versioning; a schema portal allows browsing of modules without downloading the full dictionary; worked example bundles illustrate how sustainability and site context fields compose in real project records; and a reference validator supports structural and Foundation Approved checks in local or browser environments. Revit crosswalk documentation connects the open model to common delivery workflows. <a href="https://schema.landscapearchive.org/examples/built-environment/manifest.json">Built environment export profiles</a> — IFC property sets, GeoJSON civic registries, USD metadata sidecars, and spreadsheet crosswalks — publish interchange bindings as schema artefacts with worked examples. Any party may inspect, cite, and teach these materials under the non-commercial licence terms — attributing the specification, refraining from redistributing modified copies, and implementing through their own tooling or a licensed vendor where commercial use is required.',
        'The distinction between open research infrastructure and commercial production systems rests on governance and access. TLA Brain automation, high-fidelity three-dimensional assets, Studio+™ delivery, and populated species libraries remain licensed products of the Archive and Vault. The Foundation layer maintains the conceptual framework — the “grammar” of landscape project metadata — under open, independent stewardship. That separation protects academic independence while allowing industry partners to compete on execution quality.',
        'Further Foundation-maintained tooling — conformance assessment utilities, reference API patterns, and continuous-integration-friendly validator packages — is planned under licences suited to academic and research reuse. Such tools will extend the public layer without substituting for the commercial stack; they are intended to lower the cost of rigorous teaching, replication, and third-party critique.'
      ]
    },
    {
      id: 'pillar-government',
      heading: '4 · Public-sector and digital twin interface',
      paragraphs: [
        'Public-sector agencies, utilities, and standards bodies increasingly require reference architectures that can be cited in procurement, audited by third parties, and adapted across programmes without lock-in to a single vendor’s data model. Landscape planting metadata sits at the intersection of biodiversity policy, urban greening targets, climate adaptation, and digital twin initiatives — yet it is often represented either informally in CAD layers or opaquely inside proprietary platforms. The fourth pillar positions the Foundation as steward of an openly documented environmental information standard that agencies may reference independently of commercial implementation choices.',
        `In its present form, the ${TLA185_DISPLAY_ID} specification is suitable as a reference layer in procurement documentation, digital twin metadata discussions, and ISO 19650-style information-management conversations. An agency may adopt the schema as a non-commercial reference under the published licence while licensing BIM integration, populated datasets, and automation separately through commercial channels. Foundation Approved provides a machine-checkable baseline for interchange — describing bundle structure and minimum disclosure against published conformance criteria.`,
        'The charter envisages a Council composition that includes practice, academic, public-body, and First Nations advisory representation, with protocol review on cultural-context rules before adoption. No single vendor is intended to hold a voting majority. Interim Foundation pages describe the intended governance model; formal government partnerships will be published as agreements are concluded. Independent entity formation, memoranda of understanding with digital twin programmes and environmental agencies, and published advocacy for open planting metadata remain forward work subject to adviser review — but the intellectual basis for that engagement is already public.',
        'For public institutions, the practical proposition is straightforward. Reference the open specification freely in policy and procurement language; implement through whichever licensed partners meet operational requirements; and assess interchange records against published conformance criteria. That model preserves institutional sovereignty while giving landscape metadata a durable, citable home independent of any one product roadmap.'
      ]
    },
    {
      id: 'pillar-ai-ethics',
      heading: '5 · Ethics of synthetic nature and attribution',
      paragraphs: [
        'Generative and synthetic imagery has entered landscape visualisation faster than the professions have developed shared rules for provenance, attribution, and permissible reuse. A rendered planting scene may combine photographic texture, modelled geometry, and algorithmically inferred foliage with no record of which elements derive from living reference, which from licensed assets, and which from unattributed source material. The fifth pillar addresses the ethical dimension of that shift by defining how provenance and attribution appear in project metadata when visual assets combine multiple source types.',
        'The Foundation’s contribution begins at the metadata layer. The public specification separates open schema from commercial data and assets, and cultural-context modules include sensitivity classes — open, restricted, and not-for-publication — so that restricted detail follows published routing rules. Where cultural knowledge requires restricted handling, the specification provides for pointers and protocol authority references. On the commercial side, Archive legal instruments governing responsible AI use, data and machine-learning restrictive licensing, and contributor terms protect proprietary and contributor intellectual property; the Foundation layer publishes the rules for how lineage and attribution should be described in interchange.',
        'Planned Foundation policy will define ethical synthetic nature in terms assessable within exchange bundles: creator attribution, derivation lineage, and explicit marking where visual assets are synthetic or composite. The aim is professional integrity — a record that allows a reviewer to establish where a representation came from and under what conditions it may be reused. Advocacy against predatory training use of landscape visualisation work complements that technical work; metadata lineage forms one component of a broader industry conversation on ethical practice.',
        'This pillar recognises that truth-telling in synthetic nature is a collective undertaking. The Foundation establishes that honest project records describe provenance, that restricted cultural material follows published sensitivity classes, and that interchange conformance increasingly expects attribution fields to be populated. That expectation, published openly and revised through governance, is the Foundation’s proper instrument.'
      ]
    },
    {
      id: 'licence-sovereignty',
      heading: 'Licence and sovereignty',
      paragraphs: [
        `The public specification (${fieldCount} documented elements) and schema documentation are published under ${FOUNDATION_LICENCE_LABEL}:`
      ],
      bullets: [
        'BY (Attribution) — the canonical specification must be credited',
        'NC (Non-Commercial) — commercial use requires a separate licence from The Landscape Archive Pty Ltd',
        'ND (No Derivatives) — modified redistributions are not permitted; updates are issued through Foundation semver releases only'
      ]
    },
    {
      id: 'interim-stewardship',
      heading: 'Interim stewardship',
      paragraphs: [
        'The Landscape Archive Foundation name and governance model described here reflect intended stewardship of the public specification once a suitable independent entity is established. Interim hosting is provided by The Landscape Archive Pty Ltd (implementation partner). Copyright in the public specification is held by The Landscape Vault Pty Ltd (IP holding company) and is intended for assignment to the Foundation when a suitable independent entity is established.',
        'These pages describe draft governance and licence terms for discussion only. For legal interpretation, consult qualified advisers.'
      ],
      bullets: [
        `Specification published under ${FOUNDATION_LICENCE_LABEL}`,
        'Interim copyright held by The Landscape Vault Pty Ltd, pending intended assignment when a suitable independent entity is established',
        'Species values, automation, and commercial assets excluded from the public open layer',
        'Aspirational path toward autonomous governance through advisory board and independent entity formation'
      ]
    },
    {
      id: 'citation-guidance',
      heading: 'How to cite TLA-185 and the Foundation',
      paragraphs: [
        'When you reference the open standard in academic work, procurement, or public documentation, cite the specification and steward — not individual contributors by default.',
        `Recommended format: The Landscape Archive Foundation. ${TLA185_DISPLAY_ID} Landscape Metadata Standard, version ${TLA185_VERSION}. ${FOUNDATION_GOVERNANCE_CITATION_URL} (accessed [date]). Licensed under ${FOUNDATION_LICENCE_LABEL}.`,
        'For the field registry or a specific release tag, add the registry URL or GitHub release identifier when the public repository is available. For the commercial Archive product (Library, Studio+™, datasets), cite The Landscape Archive separately at landscapearchive.com.au/citations.',
        ...(isOpenStandardGithubPubliclyAvailable()
          ? []
          : [OPEN_STANDARD_GITHUB_UNAVAILABLE_NOTICE]),
        'Standard bibliographic citation should reference the specification and steward. Individual author names are optional unless your style guide requires them for technical reports.'
      ],
      actions: [
        { label: 'Archive citation hub', href: ARCHIVE_CITATIONS_PATH, external: true },
        { label: 'Field registry', href: REGISTRY_PATH },
        ...(isOpenStandardGithubPubliclyAvailable()
          ? [{ label: 'Release tag 185-v1.0.0', href: OPEN_STANDARD_GITHUB_TAG_URL, external: true }]
          : [{ label: 'Schema portal', href: FEDERATION_SCHEMA_PORTAL_URL, external: true }])
      ]
    },
    {
      id: 'commercial-bridge',
      heading: 'Commercial bridge',
      paragraphs: [
        'Non-commercial reference use (teaching, research, open government documentation) may be permitted under the NC licence terms. Organisations requiring commercial implementation — enterprise BIM, TLA Brain automation, or high-fidelity three-dimensional assets — license through The Landscape Archive Pty Ltd.',
        'The Foundation establishes the shared information architecture. The Archive and Vault deliver licensed production assets and automation at scale.'
      ],
      actions: [
        { label: 'Commercial licensing', href: FOUNDATION_COMMERCIAL_CONTACT_PATH, external: true },
        { label: 'Support the standard', href: SUPPORT_PATH }
      ]
    }
  ])
}
