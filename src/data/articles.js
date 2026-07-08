import { GOVERNANCE_PATH, REGISTRY_PATH, TLA185_DISPLAY_ID } from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'

/**
 * Field Notes — the Foundation's essays and working-group explainers.
 *
 * Each entry is either `status: 'published'` (has `sections`) or
 * `status: 'planned'` (title + dek only, shown as an upcoming commission).
 * Sections reuse the DocsSection shape (heading / paragraphs / bullets /
 * actions), so no new renderer is required.
 *
 * Order is reverse-chronological within each status when listed.
 */

const DICTIONARY_URL = `${SCHEMA_PORTAL_URL}/dictionary`

export const FIELD_NOTES = Object.freeze([
  {
    slug: 'institutions-standards-and-the-infrastructure-gap',
    status: 'published',
    title: 'Institutions, standards, and the infrastructure gap',
    dek: 'Peak bodies and professional institutes are built to endorse standards — not to operate botanical pipelines, trait engines, or BIM-ready asset libraries. That division of labour is structural, not a failure of will; automation is what makes a different relationship possible.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-08',
    readingTime: '8 min',
    topics: ['Governance', 'Industry standards', 'Open infrastructure'],
    sections: [
      {
        heading: 'The institutional bottleneck',
        paragraphs: [
          'Landscape architecture in Australia — like most built-environment disciplines — relies on institutions that speak for the profession in public. The Australian Institute of Landscape Architects and comparable peak bodies are rightly expected to champion quality, education, advocacy, and the standards that let practitioners work with councils, clients, and allied consultants on shared terms. That mandate is <em>governance and endorsement</em>, not software engineering.',
          'The tension is familiar across professions: the body that should bless a data framework is seldom the body that can build and maintain one. Committees, position papers, and continuing-education programmes scale well; versioned field registries, automated trait ingestion, conformance validators, and high-fidelity three-dimensional planting assets do not emerge from working groups alone. They require sustained technical pipelines — data engineering, botanical QA, interchange testing, release discipline — that sit awkwardly inside volunteer governance structures and peak-body budgets.',
          'This is not an indictment of institutes. AILA and its peers were never chartered to run a nursery-exchange API or a species trait engine. The bottleneck appears when the profession needs <em>both</em> credible institutional voice <em>and</em> operational digital infrastructure at the same time — and assumes one organisation must supply both. Often, nothing moves: standards language stalls for lack of implementable artefacts, while proprietary libraries fill the vacuum product by product, fragmenting what the profession hoped to hold in common.',
          'The Landscape Archive began, in part, from that gap: a conviction that the open grammar of landscape metadata and the automated machinery to populate it could be built without waiting for an institute to become a technology company — while still leaving room for institutions to recognise, cite, and eventually adopt a framework they did not themselves compile.'
        ],
        actions: [{ label: 'Governance and the three-entity split', href: GOVERNANCE_PATH }]
      },
      {
        heading: 'Why high-fidelity botanical data was historically expensive',
        paragraphs: [
          'Before automation could shoulder repetitive work, “high fidelity” in landscape data meant manual labour at every step. A botanically defensible species record — growth form, mature dimensions, climate context, maintenance implications, and a three-dimensional representation usable in BIM or visualisation — was assembled by specialists: horticultural researchers, modellers, librarians, and vendor cataloguers billing hours per taxon. Scale was linear. A thousand species meant a thousand commissioning cycles.',
          'Commercial libraries priced that labour accordingly. Paywalled asset catalogues, enterprise planting databases, and per-seat BIM content subscriptions made sense when each record was handcrafted. Practices either paid, pirated, or made do with generic placeholders — massing trees without stable taxon identifiers, shrub mixes without trait provenance, climate claims without documented screening. The cost was not only financial; it was <em>access</em>. Small studios, regional councils, and university studios were priced out of the same botanical rigour that large firms treated as overhead.',
          'Institutes could publish principles — prefer native planting, document sustainability claims, prepare for digital handover — but could rarely supply the underlying objects. Universities could teach taxonomy and ecology; they could not, as a matter of course, maintain a live national inventory synced to revised nomenclature and climate layers. The legacy model assumed that high-fidelity data was a premium product, not public infrastructure.',
          `${TLA185_DISPLAY_ID} separates the structural question from the asset question on purpose. The Foundation stewards field definitions, conformance rules, and citation — the grammar of what an honest record should carry. Populated inventories, trait automation, and modelled geometry remain implementation work, historically expensive precisely because they sat behind manual gates. Understanding that history clarifies what automation changes — and what it does not pretend to replace: professional judgement, site survey, cultural protocol, and client sign-off.`
        ],
        actions: [
          { label: 'Browse the field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'See the field registry', href: REGISTRY_PATH }
        ]
      },
      {
        heading: 'How automation flips the model',
        paragraphs: [
          'Automation does not eliminate botanical expertise; it changes where that expertise is applied. When trait ingestion, nomenclature cross-checks, geometry generation, and dictionary alignment can run through documented pipelines — Python and interchange tooling rather than ad hoc spreadsheets — the marginal cost of adding a species falls sharply. A library that would once have required a catalogue team to grow linearly can compound: each new source dataset, each revised climate layer, each conformance rule propagates through the same machinery.',
          'That shift is what makes an accessible library plausible for everyday landscape architects — not only for enterprises with dedicated BIM managers. A practice in Hobart, a council streetscape team in Western Sydney, and a studio in Brisbane can work from the same citable field grammar and, where licensed, from implementation datasets that export dictionary-aligned bundles. The economics invert: infrastructure becomes something you can <em>subscribe to and implement</em>, while definitions remain something you can <em>cite in public</em> without renting vocabulary from a closed template.',
          'The strategic relationship with institutions changes at the same time — not by collapsing Foundation and peak body into one entity, but by clarifying roles. A body such as AILA can choose to reference an open specification in education guidance, awards criteria, or policy submissions without having built the pipeline behind it. It can acknowledge implementation partners that validate conformance while insisting that the public dictionary stays vendor-neutral. It can participate in draft founding alliance consultation — if it wishes — as one independent organisation among others, with no obligation to adopt commercial products and no implication that endorsement has already occurred.',
          `Nothing in this essay claims that any peak body has adopted ${TLA185_DISPLAY_ID}, Landscape Archive products, or a formal data standard. The potential is conditional: if automated infrastructure lowers the cost of honest records, institutes can focus on what they do best — setting professional expectations, brokering public debate, and pointing practitioners toward citable infrastructure — while implementation remains contestable in the market. That is healthier than either silence or the impossible ask that a volunteer council maintain a live national asset registry in spare hours.`,
          'Interim Foundation stewardship means the grammar is public and revisable; incorporation and founding alliance seating remain forward work described on the governance pages. The honest pitch to the profession is narrower: the bottleneck was real, the old economics were real, and automation offers a third path — open definitions plus implementable libraries — that institutions and practitioners can evaluate on evidence rather than on brand promises.'
        ],
        bullets: [
          'Peak bodies endorse and debate; they need not operate data pipelines to cite open field definitions',
          'High-fidelity assets were premium because labour scaled linearly — automation attacks marginal cost, not professional duty of care',
          'Practices gain access to library and export tooling through implementation licences; the dictionary remains publicly citable',
          'Institutional recognition, if it comes, can follow published conformance — it is not claimed here as accomplished fact'
        ],
        actions: [
          { label: 'Adopt the open standard', href: '/adopt' },
          { label: 'Founding alliance (draft consultation)', href: `${GOVERNANCE_PATH}#founding-alliance` },
          { label: 'Support the standard', href: '/support' }
        ]
      }
    ]
  },
  {
    slug: 'a-shared-vocabulary',
    status: 'published',
    title: 'A shared vocabulary for a fragmented profession',
    dek: 'Landscape architecture is spread across studios, universities, councils, and agencies that each name the same things differently. An open data dictionary is the quiet infrastructure that lets them speak — and disagree — precisely.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-05',
    readingTime: '7 min',
    topics: ['Advocacy', 'Vocabulary', 'Governance'],
    sections: [
      {
        heading: 'When records cannot be joined: a vocabulary problem',
        paragraphs: [
          'A landscape project passes through many hands — the practice that designs it, the nursery that supplies it, the council that approves it, the university that studies it, the agency that maintains it. Each keeps records. Almost none of them use the same words for the same things. One file says “native grass mix,” another “indigenous groundcover,” a third a botanical name that was superseded a decade ago. The information exists; it simply cannot be <em>joined</em>, compared, or checked.',
          'The gap is vocabulary, not technology. Before a profession can share data honestly, it has to agree on what its terms <em>mean</em> — to make difference <em>legible</em> without flattening it. The Landscape Archive Foundation exists to steward that agreement: an open, citable dictionary of the fields a landscape record ought to carry, and precise definitions for each.'
        ]
      },
      {
        heading: 'A dictionary you can cite, not just read',
        paragraphs: [
          `${TLA185_DISPLAY_ID} is that dictionary. It describes 185 documented elements — taxonomy and identity, site context, climate screening, sustainability disclosure, cultural protocol, and BIM delivery — as structural definitions, not as a dataset. Anyone may read it, reference it, and build on it under an open licence.`,
          'What makes a dictionary infrastructure rather than a glossary is that each term is <em>citable</em>. Every element now has a permanent identifier and a published definition, so a university can cite it in a curriculum, an agency can reference it in procurement, and a practice can point to it in a specification — and all three are pointing at exactly the same thing, at a fixed version, independent of any single vendor’s product lifecycle.'
        ],
        actions: [
          { label: 'Browse the Landscape Data Dictionary', href: DICTIONARY_URL, external: true },
          { label: 'See the field registry', href: REGISTRY_PATH }
        ]
      },
      {
        heading: 'Definitions should be argued about',
        paragraphs: [
          'A <em>living</em> vocabulary is one that is debated. What counts as “native” for a given project? When does a screening estimate become a claim? Which synonym is preferred, and which is merely tolerated? These are professional questions, and they deserve a published governance process — open proposals, request for comment, and versioned release.',
          'So each term carries a way to propose a change. A practitioner who thinks a definition is wrong, incomplete, or out of date can open a proposal against that exact term; the interim working group triages it; substantive changes become a request for comment and, if adopted, a versioned release. The words move forward in the open, with a record of who argued what and why — the same standard of truth-telling the Foundation asks of the projects that use them.'
        ],
        actions: [{ label: 'How governance works', href: GOVERNANCE_PATH }]
      },
      {
        heading: 'Why an independent steward',
        paragraphs: [
          'A vocabulary stewarded by an independent Foundation can be cited, taught, and revised through open governance. The Foundation layer is deliberately carved out from the commercial stack so the “<em>grammar</em>” of landscape metadata remains under open, independent stewardship. Vendors — including The Landscape Archive — compete on how well they implement the standard.',
          'That <em>independence</em> is what lets institutions adopt the dictionary with confidence. It is also what makes advocacy possible: a shared, open reference is something a profession can take to government, to standards bodies, and to the academy and say, together, “this is how we describe our work, and here is where you can check it.”'
        ]
      }
    ]
  },
  {
    slug: 'guidelines-for-honest-records',
    status: 'published',
    title: 'Guidelines for honest project records',
    dek: 'Practical guidance for practices and institutions on evidencing claims, handling cultural sensitivity, and attributing synthetic assets in exchange bundles — written for international teams, not only Australian procurement.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-07',
    readingTime: '9 min',
    topics: ['Guidelines', 'Truth-telling'],
    sections: [
      {
        heading: 'Why records fail after handover',
        paragraphs: [
          'A landscape project is judged in public long after the design team has moved on. Maintenance crews, asset managers, researchers, regulators, and community reviewers inherit drawings, models, and spreadsheets that often look authoritative while the underlying claims remain implicit. “Native planting,” “climate resilient,” “sustainable,” “culturally appropriate” — these phrases travel well in marketing copy and poorly in archival metadata unless someone has encoded what was meant, what evidence supports it, and what must stay restricted.',
          'The failure is <em>structural</em>, not moral. Practices in London, Singapore, Toronto, and Melbourne face the same handover gap: BIM objects without taxon identifiers, sustainability narratives without links to assessment methods, synthetic vegetation without lineage, and cultural references that cannot be published openly but still need to be traceable inside a project archive. An <em>honest record</em> is one that states its claims precisely enough to be reviewed — and modest enough to admit where evidence ends and professional judgement begins.',
          'International clients increasingly ask for digital asset registers that survive contractor changes and software migrations. EU taxonomy-aligned reporting, corporate nature-related disclosures, and municipal digital-twin programmes all converge on the same demand: show your work in a form someone else can verify. Landscape teams that treat metadata as an afterthought discover, at handover, that their most defensible design decisions are the least retrievable.'
        ]
      },
      {
        heading: 'Encode claims, not slogans',
        paragraphs: [
          `${TLA185_DISPLAY_ID} does not replace professional judgement, client sign-off, regulatory audit, or community protocol. It supplies a published field dictionary so teams can align on <em>what</em> to disclose and <em>how</em> to structure it in an interchange bundle. Australian modules in the current profile reflect where the standard was first exercised; international adopters map the same structural slots to local taxonomies, climate datasets, and procurement rules through published crosswalks rather than improvising parallel vocabularies.`,
          'Start with botanical identity: stable taxon identifiers, growth form, and planting role — not marketing common names alone. Pair climate context with documented screening methodology and banded estimates rather than single-point predictions that read as guarantees. Sustainability fields should carry evidence links or explicit “not assessed” states, not empty checkboxes that imply certification. Synthetic assets need lineage metadata — model source, training or capture method, revision date — distinct from photographic or surveyed specimens.'
        ],
        bullets: [
          'Replace generic labels with dictionary-backed field values wherever a claim will be reviewed after handover',
          'Attach evidence URIs, report IDs, or internal reference codes to sustainability and performance fields',
          'Use sensitivity classes so restricted cultural detail routes to appropriate repositories, not open file shares',
          'Document synthetic versus surveyed assets explicitly; do not let render-ready geometry imply botanical certainty'
        ],
        actions: [
          { label: 'Browse the field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'See the field registry', href: REGISTRY_PATH }
        ]
      },
      {
        heading: 'Cultural protocol and restricted metadata',
        paragraphs: [
          'Landscape work intersects with Indigenous and local knowledge systems worldwide. Not every field belongs in a public repository — yet projects still need internal traceability. Honest records distinguish what may be cited openly from what requires <em>restricted handling</em>, and they avoid laundering restricted detail into generic open labels.',
          'Practices should treat cultural metadata as co-authored where protocol requires it: who approved a representation, which sensitivity class applies, and where the authoritative record lives. The Foundation publishes structural slots for these disclosures; it does not substitute for Traditional Owner organisations, cultural advisors, or local consent processes. Interim draft governance means these guidelines are published for consultation — teams should align with both the open specification and the legal and cultural requirements of each jurisdiction.'
        ],
        actions: [{ label: 'Truth-telling charter', href: `${GOVERNANCE_PATH}#truth-telling` }]
      },
      {
        heading: 'A minimum bundle before you call a record “complete”',
        paragraphs: [
          'Before declaring a project archive complete for handover, ask whether an independent reviewer — another practice, a university studio, a client asset team, a regulator — could answer basic questions from the bundle alone. Which species or communities were specified, with what identifiers? What climate and site context informed selection? Which sustainability claims were made, with what evidence? Which assets are synthetic, and what is their revision history? Which fields are intentionally withheld, and under what protocol?',
          'Perfection is not the bar; <em>retrievable honesty</em> is. A bundle that marks uncertainty clearly is more valuable than one that implies certainty through polished graphics. As the Foundation’s awards programme prepares to recognise archival diligence alongside design excellence, these questions will surface repeatedly — not as policing, but as shared professional expectation. Publish what you can cite; restrict what you must; document the difference.'
        ],
        actions: [{ label: 'Awards programme (in preparation)', href: '/awards' }]
      },
      {
        heading: 'Working with vendors without surrendering the archive',
        paragraphs: [
          'Honest records are compatible with commercial tooling. The Foundation’s responsibility split is explicit: open structural definitions and conformance rules remain public; high-fidelity datasets, automation, and certified implementation tooling may remain <em>licensed</em>. A practice can use proprietary inventories while still exporting dictionary-aligned interchange bundles — provided the team maps product-specific labels to published field slots and preserves evidence outside the vendor’s closed export formats where necessary.',
          'Procurement teams should ask vendors how conformance is validated, not merely whether a checkbox exists. Can project metadata be exported without losing taxon identifiers? Can sensitivity classes be preserved through round-trip exchange? Can synthetic lineage survive a platform migration? These questions belong in international briefs alongside fee and schedule. They protect the client’s long-term archive and the profession’s ability to compare projects honestly across markets.'
        ]
      }
    ]
  },
  {
    slug: 'who-owns-the-words',
    status: 'published',
    title: 'Who owns the words? The economics of data and the future of landscape architecture',
    dek: 'When the field dictionary lives inside products, the profession rents its own language. What an open standard changes about the economics of practice — in any market where BIM, climate disclosure, and digital twins are becoming procurement requirements.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-06',
    readingTime: '8 min',
    topics: ['Economics', 'Open infrastructure'],
    sections: [
      {
        heading: 'Language locked inside platforms',
        paragraphs: [
          'Every mature design discipline eventually faces the same tension: the words practitioners use to describe their work become embedded in software, templates, and enterprise libraries. At first this feels like convenience — predefined fields, consistent exports, faster documentation. Over time it becomes <em>dependency</em>. The taxonomy in the model is the taxonomy in the contract. Change vendor, and you change the grammar of the project archive.',
          'Landscape architecture is late to this conversation compared with building engineering, but not exempt from it. Nurseries, councils, climate analysts, and asset managers already ask for structured metadata on planting, performance, and maintenance. When those structures live only inside commercial products, practices pay twice: once for the tool, and again in switching costs, retraining, and lost comparability across projects and jurisdictions.',
          'The cost is not only financial. When vocabulary is proprietary, professional debate moves off the <em>public record</em>. Associations cannot align continuing education with citable definitions. Researchers cannot reproduce planting-performance studies across cities. Graduates learn product-specific templates rather than transferable disclosure grammar — a hidden tax on mobility in an already international labour market.'
        ]
      },
      {
        heading: 'Renting vocabulary versus citing infrastructure',
        paragraphs: [
          'A closed field list is a recurring economic <em>rent</em> on professional memory. Teams cannot cite definitions in procurement, teach them consistently across universities, or challenge them through an open process — because the definitions are tied to a product lifecycle, not a public record. That model fragments international collaboration: a Scandinavian municipal brief, a Gulf state digital-twin mandate, and an Australian green-infrastructure programme may all demand “native planting” evidence, yet each inherits incompatible private schemas.',
          'Multinational practices feel this fragmentation in every internal knowledge-management initiative. Without a public interchange grammar, “lessons learned” stay trapped in local templates. Open definitions do not harmonise every national regulation — but they give teams a stable layer to map against, the same way IFC and buildingSMART profiles function for built form while local codes still differ.',
          `${TLA185_DISPLAY_ID} inverts part of that equation. The Foundation stewards structural definitions under an open licence — citable, versioned, independently governed — while vendors compete on implementation quality: datasets, automation, validation tooling, training, and support. The profession keeps the words; the market keeps the <em>services</em> built around them. That split is deliberate. It is also unfinished: interim draft governance means the dictionary is public and revisable, but the independent entity and long-term funding model are still in preparation.`
        ],
        actions: [
          { label: 'Governance and licence', href: GOVERNANCE_PATH },
          { label: 'Open schema portal', href: DICTIONARY_URL, external: true }
        ]
      },
      {
        heading: 'What changes for practices and institutions',
        paragraphs: [
          'For practices, open vocabulary lowers the cost of honesty. When disclosure fields are published, teams can align project metadata with client reporting, regulatory templates, and post-occupancy review without rebuilding semantics for every job. Cross-border studios gain a shared interchange layer they can map to local taxonomies rather than maintaining parallel glossaries per office.',
          'For universities, a citable dictionary is curriculum infrastructure — something students can inspect, critique, and extend in studio work tied to real conformance rules. For public bodies, it is procurement language that does not expire when a vendor contract ends. For regulators and climate-disclosure frameworks, it is a path toward comparable project claims without forcing every jurisdiction to invent a bespoke planting schema from scratch.',
          'None of this eliminates commercial software or proprietary datasets. High-fidelity species inventories, trait engines, and automation remain licensed implementation assets — as they should. The economic shift is narrower and more important: the <em>definitions</em> of what a landscape record ought to say should not be a trade secret.',
          'Professional indemnity, climate litigation, and nature-related finance are pushing landscape claims into discoverable records anyway. Teams that already export dictionary-aligned metadata will face lower friction when clients, insurers, or reviewers ask for evidence. Teams that rely on opaque product labels will pay consultants to reverse-engineer meaning at handover — if it can be recovered at all.'
        ]
      },
      {
        heading: 'Stewardship as a counterweight to consolidation',
        paragraphs: [
          'The global AEC platform market is consolidating faster than most professional associations can publish guidance. That consolidation is not inherently hostile — until metadata grammars become exclusive moats and project archives become unreadable outside a single ecosystem. An independent Foundation layer is a hedge against that outcome: a place where terms are argued about in public, where version history matters, and where no single vendor decides unilaterally what “sustainable planting” means this quarter.',
          'Stewardship is not free. Hosting, governance preparation, dictionary maintenance, and crosswalk work require sustained support — which is why the Foundation publishes transparent interim arrangements and invites institutional participation while a suitable independent entity is established. The alternative cost is higher: a profession that cannot compare projects across time, place, or platform because it never owned its words in the first place.',
          'Open infrastructure also shifts competitive advantage toward implementation quality rather than definitional capture. Vendors that validate conformance, publish crosswalks, and train practitioners on honest disclosure can differentiate on service — while the profession retains a stable reference it can cite in contracts, journals, and policy submissions worldwide. That is the future this programme is written for: not a world without commercial tools, but a world where the grammar of landscape metadata is too important to lock inside any one of them.'
        ],
        actions: [{ label: 'Support the standard', href: '/support' }]
      }
    ]
  },
  {
    slug: 'reading-the-landscape-as-data',
    status: 'published',
    title: 'Reading the landscape as data',
    dek: 'Synonyms, definitions, and meaning as design material — teaching landscape practice through the lens of data, art, and technology, for studios and researchers working across borders.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-06',
    readingTime: '8 min',
    topics: ['Education', 'Data as art'],
    sections: [
      {
        heading: 'The site was always a dataset',
        paragraphs: [
          'Students are taught to read contour, aspect, drainage, and vegetation pattern — to see composition, ecology, and cultural narrative in the same glance. What changes in the twenty-first century is not the need for that literacy but the <em>register</em> in which it is stored. A section drawing, a species palette, a maintenance note, and a climate screening memo are all representations of the same place. When they share no <em>join keys</em>, the site fractures into incompatible stories.',
          'Reading the landscape as data is not a call to reduce design to spreadsheets. It is the opposite: an insistence that the metaphors we use — native, resilient, wild, restored, synthetic — should be as deliberate in metadata as they are in critique. International studios already work this way informally when they coordinate planting lists across climates, export BIM for client review, or publish research on urban heat and canopy cover. The Foundation’s work makes that informal literacy citable and teachable.',
          'Consider how landscape representation has always borrowed from adjacent disciplines — cartography, ecology, art history, civil engineering — without surrendering its own critical voice. Data literacy is the same kind of borrow: a set of registers that let work travel. A student who can articulate why a planting palette is “indicative” in week four but “committed” at issue for construction is learning design <em>and</em> archival ethics in the same move.'
        ]
      },
      {
        heading: 'Synonyms as design material',
        paragraphs: [
          'Landscape language is gloriously ambiguous. “Grass” might mean a lawn cultivar, a native tussock matrix, or a post-industrial meadow strategy. “Tree” might mean a street specimen, a remnant woodland anchor, or a placeholder massing object awaiting survey. Ambiguity is sometimes intentional in early design; it is <em>destructive</em> in handover archives and comparative research.',
          'Pedagogy can treat synonyms as material rather than error. Assign students to map studio vocabulary onto published dictionary terms — not to erase nuance, but to locate it. Which preferred label applies? Which synonym is tolerated? Where does the definition explicitly allow regional modules? When two offices use different words for the same planting role, can they still produce an interchange bundle that joins? These exercises connect design criticism to information architecture in ways that travel across national curricula without pretending every biome shares the same species list.'
        ],
        bullets: [
          'Studio briefs that require dictionary-backed taxon and role fields alongside visual proposals',
          'Crit sessions that ask what a drawing claims implicitly — and what metadata would make that claim reviewable',
          'Cross-institutional exercises mapping local nursery lists to stable identifiers and growth forms',
          'Research studios pairing spatial analysis with published climate-screening bands rather than ad hoc suitability scores'
        ]
      },
      {
        heading: 'Data as art, art as evidence',
        paragraphs: [
          'There is a tired dichotomy between “technical” BIM work and “creative” landscape representation. In practice, the most compelling student and professional work often lives on the border: procedural canopies that reveal growth habit, annotated atlases that tie texture to taxon, mixed media boards that cite survey dates and synthetic lineage in the same composition. When metadata is treated as part of the artefact, the artefact becomes <em>evidence</em> — not merely illustration.',
          'Museums, biennials, and public agencies increasingly ask for digital provenance alongside visual deliverables. A planting concept shown in render may be indistinguishable from a specified community unless the bundle states otherwise. Teaching students to document that distinction early — synthetic versus surveyed, indicative versus committed — prepares them for international practice where climate disclosure, green claims, and digital asset custody are moving from optional narrative to reviewable record.',
          'Exhibition and competition juries can reward this literacy explicitly: ask not only what a proposal looks like, but what it claims and how those claims would be encoded for an asset register. The answer can remain sketch-level in early studios — but the habit of linking representation to disclosure is what separates persuasive imagery from professional record.'
        ],
        actions: [{ label: 'Browse the Landscape Data Dictionary', href: DICTIONARY_URL, external: true }]
      },
      {
        heading: 'An open reference for global studios',
        paragraphs: [
          `${TLA185_DISPLAY_ID} began with Australian field modules because that is where the first conformance exercises ran; it is published for global reference under open licence and interim Foundation stewardship. Universities in other regions need not adopt Australian species lists to adopt the pedagogical point: public definitions, versioned governance, and conformance rules that students can read, test, and challenge.`,
          'The Foundation does not prescribe studio aesthetics or replace site visits with dashboards. It offers a shared grammar so that when a graduate joins a practice in Rotterdam, Riyadh, or Auckland, they recognize the same structural questions: What identifies the planting? What context screened it? What supports the sustainability claim? What must stay restricted? Reading the landscape as data is, finally, a <em>humanistic skill</em> — the ability to make meaning precise enough to survive translation across software, jurisdictions, and time.',
          'Faculty need not become database administrators to teach this. The schema portal and field dictionary are reading assignments in their own right: public artefacts students can query, compare across versions, and critique in seminar the same way they critique precedent projects. That openness is the pedagogical point. A closed template teaches compliance; a citable standard teaches professional agency — including the agency to propose that a definition is wrong and should change through published governance.'
        ],
        actions: [{ label: 'How governance works', href: GOVERNANCE_PATH }]
      }
    ]
  }
])

export const PUBLISHED_FIELD_NOTES = FIELD_NOTES.filter((a) => a.status === 'published')
export const PLANNED_FIELD_NOTES = FIELD_NOTES.filter((a) => a.status === 'planned')

export function getArticle(slug) {
  return FIELD_NOTES.find((a) => a.slug === slug && a.status === 'published') || null
}

export function formatArticleDate(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}
