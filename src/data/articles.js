import { GOVERNANCE_PATH, REGISTRY_PATH, TLA185_DISPLAY_ID } from './foundationWing.js'
import { SCHEMA_PORTAL_URL } from './site.js'

/**
 * Field Notes — the Foundation's essays and explainers.
 *
 * Each entry is either `status: 'published'` (has `sections`) or
 * `status: 'planned'` (title + dek only, shown as an upcoming commission).
 * Sections reuse the DocsSection shape (heading / paragraphs / bullets /
 * actions), so no new renderer is required.
 *
 * Order is reverse-chronological within each status when listed.
 */

const DICTIONARY_URL = `${SCHEMA_PORTAL_URL}/dictionary`

/** Apex Archive page for studios (landscapearchive.com.au). */
export const APEX_FOR_STUDIOS_URL = 'https://landscapearchive.com.au/for-studios'

/**
 * Shared closing section appended to every published Field Note.
 * Prefer this single pattern over per-article duplicates.
 * Keep copy understated — factual pointers, not a sales close.
 */
export const FIELD_NOTES_NEXT_STEPS = Object.freeze({
  id: 'next-steps',
  heading: 'Next Steps',
  paragraphs: [
    'Open Foundation materials for one studio deliverable are on the adoption guide. A short Archive page for practices is also available.'
  ],
  actions: [
    { label: 'Studio Pilot Kit', href: '/adopt#studio-pilot' },
    {
      label: 'Archive — for studios',
      href: APEX_FOR_STUDIOS_URL,
      external: true
    },
    {
      label: 'Contact',
      href: 'https://landscapearchive.com.au/contact',
      external: true
    }
  ]
})
export const FIELD_NOTES = Object.freeze([
  {
    slug: 'outsourcing-truths-nail-and-agent',
    status: 'published',
    title: 'Outsourcing truths: the nail and the agent',
    dek: 'A nail extends the hand. Agentic software proposes what the hand should mean. Landscape practice is learning that difference under pressure from tools, budgets, labour, politics, and time, and under a harder question still: where living nature ends and digital nature begins.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-31',
    readingTime: '10 min',
    topics: ['Culture', 'Automation', 'Professional practice', 'Digital nature'],
    legalNote:
      'This Field Note is Foundation commentary and opinion. It is not legal, professional, or investment advice. Survey and market figures are cited from publicly reported sources; readers should consult the originals for methods, sample sizes, and caveats.',
    sections: [
      {
        heading: 'A nail is not a claim',
        paragraphs: [
          'A nail is a tool with almost no politics. It does not invent a species. It does not tell a client that a canopy is climate resilient. It does not migrate a planting schedule into an asset register under a logo that implies the hard questions are already settled. Drive it correctly and it holds timber. Fail, and the failure is local, inspectable, and usually yours.',
          'Agentic software, systems that plan, draft, rearrange, and complete work across files, models, and briefs, is not that kind of tool. It moves. It proposes. It fills gaps. It can look like labour that has already been performed. Used carefully, it can absorb repetition in the sense earlier Field Notes have defended: hygiene, scaffolding, first passes. Used carelessly, it outsources something else entirely: <em>truth</em>, the quiet assignment of consequence to a claim.',
          'The difference is epistemic rather than romantic. A nail does not speak for the site. An agent that writes a methods paragraph, selects a plant list, or completes a BIM attribute table does speak, unless someone in the studio insists on reading what was said.'
        ],
        actions: [
          {
            label: 'Meaning between data and computation',
            href: '/articles/meaning-between-data-and-computation'
          },
          {
            label: 'What automation replaces in landscape practice',
            href: '/articles/what-automation-replaces-and-cannot-sign-for'
          }
        ]
      },
      {
        heading: 'Evidence of uptake, and of uneven accountability',
        paragraphs: [
          'Practitioner evidence already shows the gap between adoption and professional closure. In the 2024 ASLA Digital Technology PPN survey, 55% of respondents reported using AI in practice, teaching, or research, yet only 27% said it had saved them time, while 48% were unsure and 7% said it had added time. Only 15% of firms allowed billable time for AI experimentation. Most respondents (56%) did not disclose AI use in deliverables, and only 7% said their firm permitted AI-generated content in stamped plans.',
          'The 2025 joint CSLA–ASLA–IFLA follow-up, acknowledging a lower response rate than earlier waves, found approximately half of respondents still incorporating AI into practice, with 75% reporting greater task efficiency where AI was used, and 92% learning by trial and error. Respondents also called for clearer professional scaffolding: 62% for declarations on AI use, 53% for theoretical discussion, and 51% for dedicated class time on tools, ethics, and environmental footprint.',
          'At the wider AEC scale, McKinsey’s analysis of AI in architecture, engineering, and construction estimates that AI could automate roughly 50% of nonphysical work in architecture and engineering and 39% in construction, identifying some 150 workflows across 25 domains, with early gains concentrated in design, modelling, and feasibility. The same analysis projects that AI and related automation could unlock on the order of USD 228 billion in annual value for the United States AEC industry by 2030, and roughly USD 126 billion for European construction, while cautioning that AI is unlikely to be an extinction event for firms and will not, alone, solve the sector’s productivity problem. Those forecasts describe task automation potential, not the automatic transfer of professional meaning.',
          'Read together, the landscape surveys and the AEC forecasts point to the same tension: efficiency can rise while disclosure, training, and sign-off lag. That is precisely the condition under which truths get outsourced.'
        ]
      },
      {
        heading: 'What gets outsourced when attention slips',
        paragraphs: [
          'Studios rarely outsource truth in a single dramatic gesture. They outsource it through small economies.',
          'Tools arrive first: a generative canopy that looks surveyed; a language model that drafts a climate narrative; a remapper that fills empty fields because empty fields look unfinished. Budgets arrive second: the hour saved is removed from the fee, or never returned to survey, nursery coordination, or cultural protocol. Labour arrives third: the junior who once learned by checking lists now prompts; the senior who once signed meaning now signs volume. Politics arrive fourth: the client wants certainty on a slide; the vendor wants AI capability named in the brief; the council wants digital twin vocabulary that no one on the project owns. Time remains scarce throughout, so the plausible answer becomes the answer that ships.',
          'None of that abolishes landscape architecture. It relocates the interpretive middle. Meaning between data and computation does not disappear; it migrates into defaults, prompts, and product assumptions that are hard to audit after handover. The record still exists. What weakens is the profession’s grip on what the record is allowed to mean.'
        ],
        actions: [
          {
            label: 'Guidelines for honest project records',
            href: '/articles/guidelines-for-honest-records'
          }
        ]
      },
      {
        heading: 'Compromise the means, not the claim',
        paragraphs: [
          'Practice has always compromised. Specification against cost. Design ambition against maintenance budgets. Community process against programme. Digital work is no exception. Choosing a cheaper asset library, a faster render pipeline, or an agent to draft the first schedule is often rational.',
          'The line worth defending is narrower: compromise the means, not accountability for claims.',
          'A placeholder tree may be acceptable in concept stage. It should not travel silently into construction documentation as if it were a surveyed taxon. An agent may draft a sustainability appendix. That draft should not be presented as settled method because the prose sounded confident. Automation may buy time. That saving should not be sold as proof that ecological or cultural work is finished.',
          'Budgets and politics will keep pressing toward the second option. They always have. The profession’s task is to keep the first option speakable in fees, RFQs, and studio culture, so that faster does not quietly become someone else decided what is true.'
        ]
      },
      {
        heading: 'Nature and digital nature',
        paragraphs: [
          'Here the line is not merely technical. It is ontological enough to matter in public.',
          'Nature, in the sense this Foundation keeps returning to under land, is the living world and its afterlife: growth, failure, recovery, maintenance, protocol, the thing that does not care how persuasive a model was. Digital nature is representation and simulation: geometry, traits, climate bands, synthetic canopies, twin layers, agent-authored inventories. Useful, sometimes indispensable, and still not the site.',
          'Market and reporting pressure intensifies the risk of conflation. As of the TNFD’s 2025 status reporting, hundreds of organisations had committed to nature-related disclosure aligned with the Taskforce’s recommendations, with voluntary adopter commitments representing on the order of USD 20 trillion in assets under management and more than 500 TNFD-aligned reports already identified in market scans. Later public tallies placed adopters above 700 organisations and assets under management above USD 22 trillion. Those frameworks increase demand for nature evidence. They do not, by themselves, guarantee that a digital twin layer, a generative planting board, or an AI-completed schedule is an honest proxy for living systems.',
          'The danger is not that digital nature exists. Landscape architecture has always worked through drawings that are not the ground. The danger is conflation: when digital nature is treated as a sufficient substitute for encounter with living systems, or when synthetic assets inherit the authority of survey without lineage. Practices such as explicit synthetic provenance exist for that reason: not as theology about technology, but as a refusal to let render-ready vegetation impersonate botanical certainty.',
          'Where is the line drawn? Not at never use AI, and not at the model is the place. The line is drawn wherever a deliverable asks someone downstream (client, council, maintainer, community, future practitioner) to believe something about living systems. At that point, digital nature must declare itself: indicative or specified; generated or surveyed; estimated or evidenced; open or restricted. If it cannot declare itself, it is not yet professional material. It is scenery with credentials.'
        ],
        actions: [
          {
            label: 'Four things: land, art, technology, data',
            href: '/articles/four-things-land-art-technology-data'
          },
          { label: 'TLA-SYN (synthetic provenance)', href: '/standards/tla-syn' }
        ]
      },
      {
        heading: 'Holding the hand that holds the tool',
        paragraphs: [
          'A nail extends the hand. Agentic software can extend the studio, or replace the studio’s judgement with a fluent approximation of judgement. The difference will not be settled by banning tools or by worshipping them. It will be settled by whether landscape architecture keeps interpretive labour visible: the slow decisions that bind trace to claim, claim to evidence, and evidence to someone who can still be answerable when the planting fails, the twin drifts, or a resilient line in a brief is challenged years later.',
          'Outsourcing repetition can be wise. Outsourcing truths is how a discipline loses the right to speak for the places it modifies.',
          'Land remains the test. Art remains how belief is made. Technology remains how evidence becomes usable. Data remains the trace. Between them, and between nail and agent, meaning is still work.'
        ],
        actions: [
          { label: 'Studio Pilot Kit', href: '/adopt#studio-pilot' },
          { label: 'Cultural pillars on governance', href: `${GOVERNANCE_PATH}#cultural-pillars` }
        ]
      },
      {
        heading: 'Sources',
        paragraphs: [
          'Figures above are summarised from publicly reported sources. Consult the originals for methods, sample sizes, and caveats.'
        ],
        bullets: [
          'ASLA Digital Technology PPN (2024). <a href="https://www.asla.org/news-insights/the-field/how-landscape-architects-are-incorporating-artificial-intelligence" rel="noopener" target="_blank">How Landscape Architects Are Incorporating Artificial Intelligence</a>.',
          'CSLA, ASLA, and IFLA (2025). <a href="https://www.csla-aapc.ca/sites/csla-aapc.ca/files/2025-ai-survey-descriptive-results.docx.pdf" rel="noopener" target="_blank">2025 AI+LA Practitioner Survey Findings</a>.',
          'McKinsey &amp; Company (2026). <a href="https://www.mckinsey.com/industries/engineering-construction-and-building-materials/our-insights/how-ai-is-reshaping-the-future-of-the-aec-industry" rel="noopener" target="_blank">How AI is reshaping the future of the AEC industry</a>.',
          'TNFD (2025). <a href="https://tnfd.global/tnfd-2025-status-report/" rel="noopener" target="_blank">TNFD Status Report</a>; see also TNFD Adopter announcements for later public tallies.'
        ]
      }
    ]
  },
  {
    slug: 'what-automation-replaces-and-cannot-sign-for',
    status: 'published',
    title: 'What automation replaces in landscape practice',
    dek: 'AI absorbs repetitive hygiene and generic drafting so the profession keeps judgment liability and the open systems that make records trustworthy.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-28',
    readingTime: '7 min',
    topics: ['Culture', 'Open infrastructure', 'Professional practice', 'Automation'],
    sections: [
      {
        heading: 'From physical labour to interpretive labour',
        paragraphs: [
          'In earlier industrial shifts, machines and institutions displaced manual roles: the draftsperson grinding sheets, the clerk filing cards, the calculator working by hand. Emerging systems absorbed the physical repetition.',
          'In the era of AI and computational data, the pattern is different. Technology does not erase the practitioner. It removes repetitive, low leverage mechanical work so that professional value concentrates where it always belonged: judgment, accountability, and interpretation.',
          'That distinction matters for landscape architecture, where a plausible picture is not the same thing as a claim that can survive audit, ecology, or handover.'
        ],
        actions: [
          {
            label: 'Meaning between data and computation',
            href: '/articles/meaning-between-data-and-computation'
          },
          {
            label: 'Consequential data, time, and infrastructure',
            href: '/articles/consequential-data-time-and-infrastructure'
          }
        ]
      },
      {
        heading: 'What AI and automation replace in this work',
        paragraphs: [
          'Through The Landscape Archive and the Foundation, the open materials we publish (field dictionaries, open BIM schemas, citation guidance, computational taxonomy) sit next to a wider automation wave. Together they help reduce work that used to burn junior hours and studio budget. Interactive Foundation validators remain paused while stewardship arrangements are clarified.',
          'Repetitive data hygiene and auditing: shared field IDs and published schemas reduce the need for each office to invent private labels for species names, nursery lists, and BIM metadata.',
          'Generative drafting and generic visuals: models can produce plausible canopies, massing options, and marketing imagery quickly. That reduces the need to pay for purely generic blocking out of baseline 3D assets or repetitive layout drafting.',
          'Closed vendor lock in for basic records: open schemas and published field definitions reduce the need to buy expensive proprietary templates simply to keep project records aligned.',
          'These are real gains. They are also the wrong place to locate professional authority.'
        ],
        actions: [
          { label: 'Browse the field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Open field registry', href: REGISTRY_PATH }
        ]
      },
      {
        heading: 'What AI cannot replace',
        paragraphs: [
          'As argued in Meaning between data and computation, AI generates plausibility, not truth. A photorealistic canopy does not prove that the taxon fits local ecological protocol, climate screening, cultural sensitivity, or the contract that governs handover.',
          'AI cannot replace the interpretive middle: deciding what a dataset means in a specific physical and cultural context, reconciling brief, site, native communities, protocol, and climate reality.',
          'AI cannot replace legal liability and sign off. A model cannot sign a drawing set, stand before a municipal authority, or carry financial and legal responsibility when an asset claim fails at handover.',
          'AI cannot replace system architecture. It produces output inside a system. It does not author the open dictionaries, governance, and standards (such as TLA-185) that let different software speak about the same landscape claims.'
        ],
        actions: [
          {
            label: 'Guidelines for honest project records',
            href: '/articles/guidelines-for-honest-records'
          },
          {
            label: 'Institutions, standards, and the infrastructure gap',
            href: '/articles/institutions-standards-and-the-infrastructure-gap'
          }
        ]
      },
      {
        heading: 'The takeaway',
        paragraphs: [
          'AI is not replacing the landscape architect. It is replacing low level drafting and data clutter that once consumed the discipline.',
          'By authoring open schemas and validation tools, we build the infrastructure that governs how automation may behave. AI replaces the busywork. The profession retains authority over meaning, accountability for claims, and authorship of the systems those claims depend on.',
          'That is not a slogan against technology. It is a boundary condition for honest practice: automate hygiene; never outsource truth.'
        ],
        actions: [
          { label: `About ${TLA185_DISPLAY_ID}`, href: `${GOVERNANCE_PATH}#charter-pillars` },
          { label: 'Who owns the words?', href: '/articles/who-owns-the-words' }
        ]
      }
    ]
  },
  {
    slug: 'consequential-data-time-and-infrastructure',
    status: 'published',
    title: 'Consequential data, time, and the infrastructure we cannot postpone',
    dek: 'Landscape records do not become consequential because they are digital. They become consequential when time, infrastructure, and professional obligation meet, and that meeting is no longer optional.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-27',
    readingTime: '8 min',
    topics: ['Culture', 'Open infrastructure', 'Professional practice'],
    sections: [
      {
        heading: 'What consequential actually means',
        paragraphs: [
          'Most project data is ambient. It sits in folders, models, and schedules until a claim is made in public: that a planting is suitable, that a canopy will persist, that a handover is complete, that a nature related disclosure can be trusted.',
          'Consequential data is the subset that can change someone’s entitlement to believe. A council planner, an asset manager, a researcher, a community reviewer: each is entitled to treat a documented claim as something they may act on. When the record cannot survive that scrutiny, the data was never inert in the moral sense; it was only unverified.',
          'Data without consequence is inventory. Data with consequence is infrastructure for accountability.'
        ],
        actions: [
          {
            label: 'Meaning between data and computation',
            href: '/articles/meaning-between-data-and-computation'
          },
          {
            label: 'Guidelines for honest project records',
            href: '/articles/guidelines-for-honest-records'
          }
        ]
      },
      {
        heading: 'Time is the other half of the claim',
        paragraphs: [
          'Landscape work is slow in ways software is not. Trees mature on decades. Maintenance regimes outlive design teams. Climate bands shift under the feet of yesterday’s assumptions. Cultural protocol does not expire with a project fee.',
          'Time is what converts a plausible schedule into either evidence or embarrassment. A taxon identifier that looked precise at issue can mislead at year twelve if lineage, method, and disclosure were never recorded. A render that persuaded at DA can quietly rewrite memory if no one marked it as illustration.',
          'So the Foundation’s concern is not “more data.” It is data that remains answerable across time: citable definitions, explicit evidence states, honest synthetic lineage, and enough structure that a later reader can check what was meant.'
        ],
        actions: [
          { label: 'Browse the field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Four things: land, art, technology, data', href: '/articles/four-things-land-art-technology-data' }
        ]
      },
      {
        heading: 'Infrastructure is how inevitability arrives',
        paragraphs: [
          'Digital handover, climate and nature related disclosure, digital twins, and AI assisted documentation are not fashion cycles. They are converging procurement and governance pressures. Somewhere, a shared vocabulary will settle: either as open, revisable public grammar, or as the accumulated defaults of whichever products happen to win.',
          'That is the infrastructure question. Peak bodies can endorse principles; vendors can ship pipelines; studios can produce beautiful work. Without a citable middle layer (fields, conformance, dictionaries that survive any single product lifecycle), the profession rents its memory and inherits someone else’s inevitability.',
          'Open infrastructure does not remove judgement. It makes disagreement inspectable. Automation can lower the cost of precision; it cannot assign consequence. That remains professional labour: survey, protocol, sign off, and the interpretive middle between raw record and generative completion.'
        ],
        actions: [
          {
            label: 'Institutions, standards, and the infrastructure gap',
            href: '/articles/institutions-standards-and-the-infrastructure-gap'
          },
          { label: 'Who owns the words?', href: '/articles/who-owns-the-words' }
        ]
      },
      {
        heading: 'Inevitability is not destiny',
        paragraphs: [
          'Inevitability, here, does not mean one company, one schema, or one aesthetic. It means that opaque records will become indefensible, and that “we meant well” will not satisfy archives, auditors, or places that keep living after the board is packed away.',
          'The choice is narrower and more practical: standardise deliberately (land, art, technology, and data held together), or accept standardisation as residue from tools that never owed the profession a public grammar.',
          'Meaning is what makes data consequential. Time is what tests it. Infrastructure is what carries it. Inevitability is only the pressure to stop pretending otherwise.'
        ],
        actions: [
          { label: 'Cultural pillars on governance', href: `${GOVERNANCE_PATH}#cultural-pillars` },
          { label: 'Foundation Standards', href: `${GOVERNANCE_PATH}#charter-pillars` }
        ]
      }
    ]
  },
  {
    slug: 'meaning-between-data-and-computation',
    status: 'published',
    title: 'Meaning between data and computation',
    dek: 'Raw records and generative models face opposite directions on the same coin; neither yields consequence without interpretive work. A note on art, overclaim, labour, and the profession landscape architecture must become, not merely automate.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-21',
    readingTime: '10 min',
    topics: ['Culture', 'Automation', 'Professional practice'],
    sections: [
      {
        heading: 'Two directions on one coin',
        paragraphs: [
          'Contemporary discourse about landscape practice often treats artificial intelligence and project data as if they were the same kind of thing, or as if one would soon replace the other. They are not, and it will not. They are better understood as opposite faces of a single coin.',
          'At one face sits <em>raw data</em>: measurements, taxon identifiers, survey coordinates, nursery lists, climate layers, maintenance logs, traces of a site and its afterlife that accumulate whether or not anyone interprets them. Data does not argue. It does not choose a planting community, reconcile a brief with a covenant, or decide what may be published under cultural protocol. It waits.',
          'At the other face sits <em>computation</em>: increasingly, generative models and automated pipelines that infer, complete, render, and optimise from patterns in those traces. Computation moves. It proposes forms, fills gaps, accelerates repetition, and scales output. But it does not, by itself, know which proposal belongs to which place, client, or obligation. It extrapolates.',
          'The coin is incomplete if you stare at only one side. A planting schedule without interpretive judgement is inert inventory. A photorealistic canopy without documented taxon lineage is persuasive imagery that may mislead at handover. The Foundation’s cultural frame (land, art, technology, data) already names the four coordinates this note tries to sharpen: neither data nor computation is sufficient alone; meaning is what lets either become consequential in public.'
        ],
        actions: [
          {
            label: 'Four things: land, art, technology, data',
            href: '/articles/four-things-land-art-technology-data'
          }
        ]
      },
      {
        heading: 'The interpretive middle',
        paragraphs: [
          'Between raw record and automated inference lies interpretive work: the slow labour of deciding what a field means in context, what claim is being made, what evidence supports it, and what must remain restricted. That middle is not a software layer waiting to be productised. It is professional practice.',
          'Interpretation shows up in mundane decisions: whether “native” in this brief refers to pre-1750 reference communities or to a nursery-available mix; whether a climate band is indicative or contractual; whether a massing tree is a survey anchor or a placeholder; whether a render is evidence or illustration. Each decision alters what downstream reviewers (councils, asset teams, researchers, community members) are entitled to believe.',
          'Open field definitions, such as those in the Foundation’s dictionary, do not remove that labour. They make it <em>legible</em>. When teams align metadata to published terms, disagreement becomes inspectable rather than buried in incompatible templates. When they do not, the middle collapses into slogan (“sustainable,” “resilient,” “AI-assisted”) that travels well in procurement decks and poorly in archives.',
          'Meaning, in this sense, is neither decoration nor post hoc narrative. It is the connective tissue that binds trace to claim, claim to evidence, and evidence to accountability. Without it, data stays inert and computation stays speculative, often impressively so, but not yet professional.'
        ],
        actions: [
          { label: 'Browse the field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'Guidelines for honest project records', href: '/articles/guidelines-for-honest-records' }
        ]
      },
      {
        heading: 'Art as evidence, not ornament',
        paragraphs: [
          'Landscape architecture has long been suspicious of anything that sounds like “art” in the same sentence as “data,” as if the two were rivals. That suspicion protects the discipline from empty styling; it also risks misplacing what art actually does in practice.',
          'Art, here, is not a render aesthetic or a competition board. It is the representational discipline through which places are made legible: section, plan, model, photograph, exhibition, annotated atlas, mixed media that carries dates, scales, and lineage alongside composition. Representation is how belief about a site is formed. That power is why art belongs in the charter alongside land, technology, and data: it is a way of knowing that can be careful or careless.',
          'When metadata is treated as part of the artefact, the artefact becomes evidence as well as illustration. A procedural canopy that documents growth habit teaches differently from a generic RPC tree. A planting concept board that states “indicative, not for construction” teaches differently from one that silently implies specification. The distinction is not anti-digital; it is anti-conflation.',
          'Generative tools intensify the problem rather than dissolving it. They can produce plausible vegetation, plausible sections, and plausible sustainability narratives faster than any studio could manually. Plausibility is not truth-telling. Art, in the expanded sense this note defends, is the interpretive practice that keeps representation answerable to site, protocol, and handover. Without that practice, automation does not clarify the profession; it accelerates ambiguity.'
        ],
        actions: [
          { label: 'Reading the landscape as data', href: '/articles/reading-the-landscape-as-data' }
        ]
      },
      {
        heading: 'Claims presented as settled fact',
        paragraphs: [
          'The built-environment software market rewards certainty in sales language. Features ship as “complete,” “scientific,” “compliant,” “AI-powered,” often implying that the hard questions (botanical identity, climate suitability, cultural authority, archival durability) have already been settled inside the product. Many of those claims are overstated, or true only inside narrow assumptions that disappear in the fine print.',
          'This is not an indictment of commercial tools. Implementation work (trait engines, geometry libraries, validators, interchange) remains necessary and valuable. The caution is epistemic. When a platform’s defaults become the profession’s implicit vocabulary, teams may stop asking what is being claimed and whether the bundle would survive independent review. The appearance of precision can substitute for documented evidence.',
          'Peak bodies and procurement frameworks face a related pressure: to endorse digital maturity without always distinguishing grammar from inventory, or automation from accountability. Standards language can advance while implementable artefacts lag; conversely, products can leap ahead while public definitions remain proprietary. Neither imbalance is cured by marketing adjectives.',
          'The Foundation’s posture is narrower: publish citable definitions, require explicit evidence states, and treat conformance as something that can be checked, not assumed from a logo slide. Practitioners still choose tools; they should also choose what those tools are allowed to assert on their behalf.'
        ],
        actions: [
          {
            label: 'Institutions, standards, and the infrastructure gap',
            href: '/articles/institutions-standards-and-the-infrastructure-gap'
          }
        ]
      },
      {
        heading: 'What persists: value, money, meaning, and labour',
        paragraphs: [
          'Predictions that automation will “eliminate” landscape work misunderstand what is being automated. Repetitive drafting, nomenclature cross-checks, geometry generation, and bundle validation: these tasks can and should take less manual time as pipelines mature. That shift does not abolish fees, clients, sites, or responsibility. It relocates effort.',
          'Value persists because clients still need places that work ecologically, culturally, and operationally, not only models that look resolved. Money persists because implementation, liability, and maintenance still flow through contracts, nurseries, councils, and asset registers. Meaning persists because publics still ask what a project <em>was for</em>, long after the design team has moved on. Labour persists because someone must still walk the site, negotiate protocol, sign drawings, and answer when a claim is challenged.',
          'Automation changes marginal cost; it does not automatically change marginal <em>worth</em>. A library that once required linear catalogue labour may become compound once trait ingestion and dictionary alignment run through documented machinery, as other Field Notes in this series describe. The economic inversion is real: clearer records may become more accessible. But accessibility is not the same as abdication. The interpretive middle remains billable, teachable, and defensible, because it is where consequence is assigned.',
          'Workforce anxiety in the discipline is therefore best addressed honestly. Train for the middle: reading and writing records, aligning representation to claims, governing synthetic lineage, participating in definitional debate. Tools will continue to change; the need to make meaning precise enough for handover will not.'
        ],
        actions: [{ label: 'Who owns the words?', href: '/articles/who-owns-the-words' }]
      },
      {
        heading: 'Precision without a profession to hold it',
        paragraphs: [
          'Technical capability in landscape data has advanced faster than professional agreement about what to do with it. Teams can now model individual plants and trees to high geometric fidelity, assemble planting plans with botanical identifiers and climate-screened traits, and export bundles that satisfy digital-handover checklists in less time than a decade ago would have required a dedicated BIM librarian and a catalogue subscription.',
          'That capability is welcome. It is also politically silent. Every hour saved on scientifically accurate planting documentation is an hour that can be reinvested in survey, community consultation, or design iteration, or an hour removed from the fee structure because a client believes the software has “done the landscape part.” The question is not whether precision is possible. It is <em>which industry</em> absorbs the saving, and which obligations are quietly transferred.',
          'Landscape architecture can narrow itself to the tasks machines perform well (massing, scheduling, documentation hygiene) and hope allied disciplines will still credit the outcome as design. Or it can expand: take interpretive responsibility for how data enters the record, how computation is disclosed, how art states its claims, and how handover archives remain honest under climate and nature-related scrutiny. Expansion is harder to automate because it requires judgement across land, representation, tooling, and trace.',
          'The Foundation does not prescribe studio aesthetics or mandate a single vendor stack. It argues that the profession’s credible future lies in holding the middle: open grammar publicly, implementation contestable in the market, interpretive labour valued rather than hidden behind renders. Automation should widen who can produce clear records; it should not shrink who is answerable for what those records mean.'
        ],
        actions: [
          { label: 'Cultural pillars on governance', href: `${GOVERNANCE_PATH}#cultural-pillars` },
          { label: 'Foundation Standards', href: `${GOVERNANCE_PATH}#charter-pillars` }
        ]
      },
      {
        heading: 'Expansion as the honest path',
        paragraphs: [
          'Progress in landscape architecture will not come from pretending that data and computation are already aligned, nor from treating art as packaging around a technical core. It will come from expanding the discipline’s account of its own work, explicitly, to include the interpretive practices that make records consequential.',
          'That expansion is compatible with rigorous automation. Indeed, open definitions and validated pipelines lower the cost of being precise, which is why the Foundation stewards grammar separately from licensed inventories. But precision without meaning is an empty deliverable; meaning without traceable structure is a fragile promise. The coin needs both faces and the interpretive edge between them.',
          'Readers who disagree with this framing are invited to disagree in public, through definitional proposals, working-group comment, or a responding Field Note. The point is not to win a slogan war about AI. It is to keep professional language from collapsing into product defaults, and to keep landscape work answerable to the places it modifies.',
          'Land, art, technology, data: held together, not collapsed. That is the cultural work this note asks the profession to treat as central, not residual.'
        ]
      }
    ]
  },
  {
    slug: 'four-things-land-art-technology-data',
    status: 'published',
    title: 'Four things: land, art, technology, data',
    dek: 'A short note on the Foundation’s cultural frame — why land, art, technology, and data hold together.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-11',
    readingTime: '5 min',
    topics: ['Governance', 'Culture', 'Foundation'],
    sections: [
      {
        heading: 'Four cultural pillars',
        paragraphs: [
          'We keep returning to four words: land, art, technology, data. They are easy to print on a slide and easy to empty out. This note keeps them full — as a cultural frame for accountable public knowledge.',
          'The Landscape Archive Foundation sits where those four meet. Product ships tools. The Foundation holds the charter those tools are supposed to serve. If that split sounds abstract, the four things are how we keep it concrete.'
        ],
        actions: [{ label: 'Four cultural pillars on governance', href: `${GOVERNANCE_PATH}#cultural-pillars` }]
      },
      {
        heading: 'Land',
        paragraphs: [
          'Land is the living world and the practices that care for it — place, ecology, maintenance, the long after of a planting schedule. Generic greenery for a mood board is not land in this sense. Land asks whether the record still points at something that grows, fails, recovers, and belongs somewhere.',
          'When we say the Foundation cares about land, we mean the work stays answerable to sites and systems, not only to images of them.'
        ]
      },
      {
        heading: 'Art',
        paragraphs: [
          'Art is how landscape is seen and represented — drawing, model, photograph, render, exhibition, the quiet craft of making a place legible to someone who was not there.',
          'Representation changes what people believe a place is. That power is why art belongs in the charter: a way of knowing that can be careful or careless, not merely decoration around the data.'
        ]
      },
      {
        heading: 'Technology',
        paragraphs: [
          'Technology is the set of tools that make evidence usable — validators, interchange, BIM handoffs, and browsers that can open a bundle for review. Shipping a connector is valuable work; the Foundation remains the charter those tools serve.',
          'We want tools that lower the cost of being precise. The public trust layer should remain a stable, citable charter alongside commercial product releases.'
        ]
      },
      {
        heading: 'Data',
        paragraphs: [
          'Data is the traceable record: methods, identifiers, openness for the commons, enough structure that someone else can check the claim.',
          'Open definitions matter here alongside proprietary inventories. The grammar should be citable; the filled shelves can still be licensed. That split is deliberate.'
        ]
      },
      {
        heading: 'Holding them together',
        paragraphs: [
          'None of the four is enough alone. Land without art forgets how belief is made. Art without land becomes scenery. Technology without data is incomplete. Data without the other three loses the site.',
          'The five Foundation Standards — botanical truth, climate disclosure, open infrastructure, public-sector interface, synthetic-nature ethics — say what the open metadata steward publishes. The four things say <em>why</em> that steward exists culturally. They are complementary, not competing.',
          'The Foundation is preparing for incorporation; this frame is published for critique and adoption. If the four words start to sound like branding alone, return to the cultural pillars on the governance page.'
        ],
        actions: [
          { label: 'Cultural pillars', href: `${GOVERNANCE_PATH}#cultural-pillars` },
          { label: 'Foundation Standards', href: `${GOVERNANCE_PATH}#charter-pillars` }
        ]
      }
    ]
  },
  {
    slug: 'institutions-standards-and-the-infrastructure-gap',
    status: 'published',
    title: 'Institutions, standards, and the infrastructure gap',
    dek: 'Peak bodies and professional institutes excel at governance, education, and endorsement. Sustained product engineering — botanical pipelines, trait engines, and BIM-ready asset libraries — is a different kind of work. Where automation lowers the marginal cost of clear records, institutes and open infrastructure can reinforce each other.',
    author: 'Mark Norlan Laririt',
    date: '2026-07-08',
    readingTime: '8 min',
    topics: ['Governance', 'Industry standards', 'Open infrastructure'],
    legalNote:
      'This Field Note is a Foundation essay and opinion piece. It is not legal, professional, or investment advice, and it does not represent endorsement by any peak body, institute, or standards organisation. It describes The Landscape Archive Foundation’s own approach and observations only; readers should evaluate institutional relationships on their own evidence and qualified advisers.',
    sections: [
      {
        heading: 'Complementary roles, not competing ones',
        paragraphs: [
          'Landscape architecture in Australia — like most built-environment disciplines — relies on institutions that speak for the profession in public. Peak professional bodies and national institutes are rightly expected to champion quality, education, advocacy, and the standards that let practitioners work with councils, clients, and allied consultants on shared terms. That mandate centres on <em>governance and endorsement</em>; sustained software engineering is typically organised elsewhere.',
          'Across professions, the organisation best placed to endorse a data framework is not always the same organisation resourced to build and maintain one at product scale. Committees, position papers, and continuing-education programmes align well with governance mandates. Versioned field registries, automated trait ingestion, conformance validators, and high-fidelity three-dimensional planting assets generally require sustained technical pipelines — data engineering, botanical QA, interchange testing, release discipline — that sit more naturally with product and research teams.',
          'Institutional landscape architecture bodies were generally not chartered to operate nursery-exchange APIs or species trait engines, and they need not be. The opportunity appears when the profession needs <em>both</em> credible institutional voice <em>and</em> operational digital infrastructure: institutes set expectations and cite shared grammar; implementers maintain the pipelines. When those layers stay aligned, practitioners gain citable definitions without waiting for any single organisation to supply every artefact.',
          'The Landscape Archive began, in part, from that opportunity: to pursue open landscape-metadata grammar and the automated machinery to populate it as implementation work — while leaving clear room for institutions to recognise, cite, or eventually adopt a framework that complements their governance role.'
        ],
        actions: [{ label: 'Governance and the three-entity split', href: GOVERNANCE_PATH }]
      },
      {
        heading: 'Why high-fidelity botanical data was historically expensive',
        paragraphs: [
          'Before automation could shoulder repetitive work, “high fidelity” in landscape data meant manual labour at every step. A botanically defensible species record — growth form, mature dimensions, climate context, maintenance implications, and a three-dimensional representation usable in BIM or visualisation — was assembled by specialists: horticultural researchers, modellers, librarians, and vendor cataloguers billing hours per taxon. Scale was linear. A thousand species meant a thousand commissioning cycles.',
          'Commercial libraries priced that labour accordingly. Subscription-based asset catalogues, enterprise planting databases, and per-seat BIM content licences reflected the economics of handcrafted records. Practices with larger budgets could license those catalogues; others often worked from generic placeholders — massing trees without stable taxon identifiers, shrub mixes without trait provenance, climate claims without documented screening. The cost was not only financial; it was also <em>access</em>. Small studios, regional councils, and university studios could face higher unit costs for the same botanical rigour that larger firms absorbed as project overhead.',
          'Professional institutes have long published guidance — prefer native planting, document sustainability claims, prepare for digital handover — while vendors, researchers, and project teams have carried the day-to-day work of building implementation datasets. Universities teach taxonomy and ecology; maintaining a live national inventory synced to revised nomenclature and climate layers is a different scale of operation. High-fidelity data has historically been delivered as a premium product; public interchange grammar offers a complementary infrastructure layer that institutes can cite without having to operate the production pipeline themselves.',
          `${TLA185_DISPLAY_ID} separates the structural question from the asset question on purpose. The Foundation stewards field definitions, conformance rules, and citation — the grammar of what a clear record should carry. Populated inventories, trait automation, and modelled geometry remain implementation work, historically costly in part because production relied on manual gates. Understanding that history clarifies what automation may change — and what it leaves with professionals: judgement, site survey, cultural protocol, and client sign-off.`
        ],
        actions: [
          { label: 'Browse the field dictionary', href: DICTIONARY_URL, external: true },
          { label: 'See the field registry', href: REGISTRY_PATH }
        ]
      },
      {
        heading: 'How automation supports institutional voice',
        paragraphs: [
          'Automation does not eliminate botanical expertise; it changes where that expertise is applied. When trait ingestion, nomenclature cross-checks, geometry generation, and dictionary alignment can run through documented pipelines — Python and interchange tooling rather than ad hoc spreadsheets — the marginal cost of adding a species may fall sharply. A library that would once have required a catalogue team to grow linearly can compound: each new source dataset, each revised climate layer, each conformance rule propagates through the same machinery.',
          'That shift is what makes an accessible library plausible for everyday landscape architects — not only for enterprises with dedicated BIM managers. A practice in Hobart, a council streetscape team in Western Sydney, and a studio in Brisbane could work from the same citable field grammar and, where appropriately licensed, from implementation datasets that export dictionary-aligned bundles. In our view, the economics can invert: infrastructure becomes something teams may <em>license and implement</em>, while definitions remain something they can <em>cite in public</em> without binding project metadata to a single vendor’s proprietary field list.',
          'Roles can stay clear without collapsing Foundation and peak body into one entity. A professional body may choose to reference an open specification in education guidance, awards criteria, or policy submissions without having built the pipeline behind it. It could acknowledge implementation partners that validate conformance while insisting that the public dictionary stays vendor-neutral. It may participate in draft founding alliance consultation — if invited and if it wishes — as one independent organisation among others.',
          `No peak body adoption of ${TLA185_DISPLAY_ID} or Landscape Archive products is asserted here. If automated infrastructure lowers the cost of clear records, institutes can continue to set professional expectations and point practitioners toward citable infrastructure — with implementation remaining contestable in the market.`,
          'Foundation stewardship keeps the grammar public and revisable. Incorporation and founding-alliance seating are forward work described on the governance pages. Open definitions plus implementable libraries give institutions and practitioners a path they can evaluate together on evidence.'
        ],
        bullets: [
          'Peak bodies can endorse and debate; they need not operate data pipelines to cite open field definitions',
          'High-fidelity assets carried premium economics because labour scaled linearly — automation may reduce marginal cost while professional duty of care remains',
          'Practices may gain access to library and export tooling through implementation licences; the dictionary remains publicly citable',
          'Institutional recognition, if it comes, would follow published conformance over time'
        ],
        actions: [
          { label: 'Adopt the open standard', href: '/adopt' },
          { label: 'Founding alliance (draft consultation)', href: `${GOVERNANCE_PATH}#founding-alliance` },
          { label: 'Support status', href: '/support' }
        ]
      }
    ]
  },
  {
    slug: 'a-shared-vocabulary',
    status: 'published',
    title: 'A shared vocabulary for the profession',
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
          'So each term carries a way to propose a change. A practitioner who thinks a definition is wrong, incomplete, or out of date can open a proposal against that exact term; published review routes it into a request for comment and, if adopted, a versioned release. The words move forward in the open, with a record of who argued what and why — the same standard of truth-telling the Foundation asks of the projects that use them.'
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
          'Landscape work intersects with Indigenous and local knowledge systems worldwide. Not every field belongs in a public repository — yet projects still need internal traceability. Clear records distinguish what may be cited openly from what requires <em>restricted handling</em>, and keep restricted detail out of generic open labels.',
          'Practices should treat cultural metadata as co-authored where protocol requires it: who approved a representation, which sensitivity class applies, and where the authoritative record lives. The Foundation publishes structural slots for these disclosures; it does not substitute for Traditional Owner organisations, cultural advisors, or local consent processes. These guidelines are published for consultation — teams should align with both the open specification and the legal and cultural requirements of each jurisdiction.'
        ],
        actions: [{ label: 'Truth-telling charter', href: `${GOVERNANCE_PATH}#truth-telling` }]
      },
      {
        heading: 'A minimum bundle before you call a record “complete”',
        paragraphs: [
          'Before declaring a project archive complete for handover, ask whether an independent reviewer — another practice, a university studio, a client asset team, a regulator — could answer basic questions from the bundle alone. Which species or communities were specified, with what identifiers? What climate and site context informed selection? Which sustainability claims were made, with what evidence? Which assets are synthetic, and what is their revision history? Which fields are intentionally withheld, and under what protocol?',
          'Perfection is not the bar; <em>retrievable honesty</em> is. A bundle that marks uncertainty clearly is more valuable than one that implies certainty through polished graphics. Draft Foundation awards discussion explores recognising archival diligence alongside design excellence — the same questions already belong as shared professional expectation. Publish what you can cite; restrict what you must; document the difference.'
        ],
        actions: [{ label: 'Awards', href: '/awards' }]
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
          'The cost is not only financial. When vocabulary is proprietary, professional debate moves off the <em>public record</em>. Associations have less stable ground on which to align continuing education with citable definitions. Researchers struggle to reproduce planting-performance studies across cities. Graduates learn product-specific templates rather than transferable disclosure grammar — an unnecessary friction on mobility in an already international labour market.'
        ]
      },
      {
        heading: 'Renting vocabulary versus citing infrastructure',
        paragraphs: [
          'A closed field list is a recurring economic <em>rent</em> on professional memory. Teams cannot cite definitions in procurement, teach them consistently across universities, or challenge them through an open process — because the definitions are tied to a product lifecycle, not a public record. That model fragments international collaboration: a Scandinavian municipal brief, a Gulf state digital-twin mandate, and an Australian green-infrastructure programme may all demand “native planting” evidence, yet each inherits incompatible private schemas.',
          'Multinational practices feel this fragmentation in every internal knowledge-management initiative. Without a public interchange grammar, “lessons learned” stay trapped in local templates. Open definitions do not harmonise every national regulation — but they give teams a stable layer to map against, the same way IFC and buildingSMART profiles function for built form while local codes still differ.',
          `${TLA185_DISPLAY_ID} inverts part of that equation. The Foundation stewards structural definitions under an open licence — citable, versioned, independently governed — while vendors compete on implementation quality: datasets, automation, validation tooling, training, and support. The profession keeps the words; the market keeps the <em>services</em> built around them. That split is deliberate. The dictionary is public and revisable; the independent entity and long-term funding model remain in preparation.`
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
          'Professional indemnity, climate litigation, and nature-related finance are pushing landscape claims into discoverable records anyway. Teams that already export dictionary-aligned metadata will face lower friction when clients, insurers, or reviewers ask for evidence. Teams that rely on vendor-specific labels alone may need extra work at handover to recover meaning across platforms.'
        ]
      },
      {
        heading: 'Stewardship as a counterweight to consolidation',
        paragraphs: [
          'The global AEC platform market is consolidating faster than most professional associations can publish guidance. That consolidation is not inherently hostile — until metadata grammars become exclusive moats and project archives become unreadable outside a single ecosystem. An independent Foundation layer is a hedge against that outcome: a place where terms are argued about in public, where version history matters, and where no single vendor decides unilaterally what “sustainable planting” means this quarter.',
          'Stewardship is not free. Hosting, governance preparation, dictionary maintenance, and crosswalk work require sustained support — which is why the Foundation publishes transparent interim arrangements and invites institutional participation while a suitable independent entity is established. The alternative cost is higher: a profession that cannot compare projects across time, place, or platform because it never owned its words in the first place.',
          'Open infrastructure also shifts competitive advantage toward implementation quality rather than definitional capture. Vendors that validate conformance, publish crosswalks, and train practitioners on careful disclosure can differentiate on service — while the profession retains a stable reference it can cite in contracts, journals, and policy submissions worldwide. The future this programme is written for keeps commercial tools competitive while treating the grammar of landscape metadata as shared professional infrastructure.'
        ],
        actions: [{ label: 'Support status', href: '/support' }]
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
          'Landscape language is often ambiguous. “Grass” might mean a lawn cultivar, a native tussock matrix, or a post-industrial meadow strategy. “Tree” might mean a street specimen, a remnant woodland anchor, or a placeholder massing object awaiting survey. Ambiguity is sometimes intentional in early design; it undermines handover archives and comparative research unless terms are later aligned.',
          'Pedagogy can treat synonyms as material rather than error. Assign students to map studio vocabulary onto published dictionary terms — not to erase nuance, but to locate it. Which preferred label applies? Which synonym is tolerated? Where does the definition explicitly allow regional modules? When two offices use different words for the same planting role, can they still produce an interchange bundle that joins? These exercises connect design criticism to information architecture in ways that travel across national curricula without requiring every biome to share the same species list.'
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
          'Technical BIM work and creative landscape representation often meet productively at the border: procedural canopies that reveal growth habit, annotated atlases that tie texture to taxon, mixed media boards that cite survey dates and synthetic lineage in the same composition. When metadata is treated as part of the artefact, the artefact becomes <em>evidence</em> as well as illustration.',
          'Museums, biennials, and public agencies increasingly ask for digital provenance alongside visual deliverables. A planting concept shown in render may be indistinguishable from a specified community unless the bundle states otherwise. Teaching students to document that distinction early — synthetic versus surveyed, indicative versus committed — prepares them for international practice where climate disclosure, green claims, and digital asset custody are moving from optional narrative to reviewable record.',
          'Exhibition and competition juries can reward this literacy explicitly: ask not only what a proposal looks like, but what it claims and how those claims would be encoded for an asset register. The answer can remain sketch-level in early studios — but the habit of linking representation to disclosure is what separates persuasive imagery from professional record.'
        ],
        actions: [{ label: 'Browse the Landscape Data Dictionary', href: DICTIONARY_URL, external: true }]
      },
      {
        heading: 'An open reference for global studios',
        paragraphs: [
          `${TLA185_DISPLAY_ID} began with Australian field modules because that is where the first conformance exercises ran; it is published for global reference under open licence and Foundation stewardship. Universities in other regions need not adopt Australian species lists to adopt the pedagogical point: public definitions, versioned governance, and conformance rules that students can read, test, and challenge.`,
          'The Foundation does not prescribe studio aesthetics or replace site visits with dashboards. It offers a shared grammar so that when a graduate joins a practice in Rotterdam, Riyadh, or Auckland, they recognise the same structural questions: What identifies the planting? What context screened it? What supports the sustainability claim? What must stay restricted? Reading the landscape as data is, finally, a <em>humanistic skill</em> — the ability to make meaning precise enough to survive translation across software, jurisdictions, and time.',
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

function stripHtml(value) {
  return String(value || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Short excerpt for cards and feeds — dek already on the card; body preview from first section.
 */
export function getArticlePreviewExcerpt(article, maxLength = 340) {
  const fromSection = stripHtml(article?.sections?.[0]?.paragraphs?.[0] || '')
  const fallback = stripHtml(article?.dek || '')
  const text = fromSection || fallback
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, '')}…`
}

export function formatArticleDate(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00Z`)
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}

/** Casual short form for strips and cards — e.g. "11 Jul 2026". */
export function formatShortDate(iso) {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return String(iso)
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
