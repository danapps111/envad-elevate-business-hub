export type Block =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[] };

export type ServiceSection = { title: string; blocks: Block[] };

export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  heading: string;
  tagline: string;
  intro: string[];
  sections: ServiceSection[];
  highlights?: { title: string; items: string[] };
  deliverables?: { title: string; items: string[] };
  industries?: { title: string; items: string[]; note?: string };
  closing?: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "gis-mapping": {
    metaTitle: "GIS Mapping for Planning & Permitting",
    metaDescription:
      "Specialist ArcGIS Pro mapping for environmental permit applications, planning submissions, Fire Prevention Plans and sensitive receptor mapping.",
    heading: "Mapping services for permitting and planning using ArcGIS Pro",
    tagline: "Professional GIS mapping for planning, permitting and compliance.",
    intro: [
      "At Envad Ltd, we provide specialist GIS mapping services using ArcGIS Pro to support environmental permitting, planning applications and regulatory compliance across the UK.",
      "Our mapping solutions are designed to meet the detailed requirements of the Environment Agency (EA) and local planning authorities, helping you prepare accurate, compliant documentation for your site operations.",
    ],
    sections: [
      {
        title: "Planning & permitting mapping",
        blocks: [
          { kind: "text", text: "We deliver ArcGIS Pro-based maps for:" },
          {
            kind: "list",
            items: [
              "Environmental permit applications, including EA submissions, and permitting services and support",
              "Local authority planning and waste management consents",
              "Environmental Impact Assessment (EIA) scoping",
              "Site redevelopment and land-use changes",
            ],
          },
          {
            kind: "text",
            text: "Our outputs are submission-ready, ensuring your mapping meets EA and local authority standards for clarity, accuracy and scale.",
          },
        ],
      },
      {
        title: "Fire Prevention Plan (FPP) mapping",
        blocks: [
          {
            kind: "text",
            text: "We prepare Fire Prevention Plan maps in full compliance with EA Fire Prevention Plan Guidance, including:",
          },
          {
            kind: "list",
            items: [
              "Detailed site layout and operational boundaries",
              "Fire compartments, quarantine areas and access routes",
              "Material storage zones with classification labels",
              "Firewater containment and drainage routes",
            ],
          },
          {
            kind: "text",
            text: "Our FPP mapping supports your permit application and demonstrates your commitment to fire safety and environmental protection.",
          },
        ],
      },
      {
        title: "Sensitive receptor mapping",
        blocks: [
          {
            kind: "text",
            text: "Using ArcGIS Pro spatial analysis tools and open data sources, we identify and map sensitive receptors within regulatory buffer zones, such as:",
          },
          {
            kind: "list",
            items: [
              "Residential dwellings, schools, hospitals and care homes",
              "Surface water bodies, groundwater abstraction points and protected habitats",
              "Recreational areas and other community receptors",
              "Ecological areas for conservation and protection",
            ],
          },
          {
            kind: "text",
            text: "Sensitive receptor maps are essential for risk assessments, odour modelling and EA permit submissions.",
          },
        ],
      },
      {
        title: "Site layout & storage mapping",
        blocks: [
          { kind: "text", text: "We create accurate, to-scale site layout maps showing:" },
          {
            kind: "list",
            items: [
              "Site boundaries and fixed structures",
              "Storage and operational areas",
              "Material handling, process flow and waste transfer zones",
            ],
          },
          {
            kind: "text",
            text: "All layouts are designed to be clear, professional and compliant with local authority mapping standards.",
          },
        ],
      },
      {
        title: "Site drainage & surface water mapping",
        blocks: [
          {
            kind: "text",
            text: "Our drainage and surface water flow maps support compliance with EA and SuDS (Sustainable Drainage Systems) guidance:",
          },
          {
            kind: "list",
            items: [
              "Surface water run-off pathways and drainage infrastructure",
              "Discharge locations and containment systems",
              "Flood-risk and pollution-control mapping",
            ],
          },
          {
            kind: "text",
            text: "We help ensure your site’s drainage plan aligns with environmental permitting conditions and best practice design.",
          },
        ],
      },
    ],
    highlights: {
      title: "Why work with us on mapping",
      items: [
        "ArcGIS Pro expertise — advanced geospatial analysis and high-quality cartographic output",
        "EA and local authority compliance — every map designed to meet official guidance",
        "Tailored to your site — custom data layers and layouts for specific project needs",
        "Fast, reliable service — submission-ready mapping delivered on schedule",
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "High-resolution PDF and CAD-compatible maps",
        "Optional ongoing GIS data management and updates",
      ],
    },
    industries: {
      title: "Industries we support",
      items: [
        "Waste management & recycling",
        "Construction & demolition",
        "Manufacturing & industrial sites",
        "Energy & renewables",
        "Environmental consultancy",
      ],
    },
    closing:
      "For expert ArcGIS Pro mapping and environmental permitting support, contact our team today.",
  },

  "iso-9001": {
    metaTitle: "ISO 9001 Certification",
    metaDescription:
      "End-to-end ISO 9001 support: gap analysis, documentation templates, implementation, internal audit and certification body liaison.",
    heading: "Achieve ISO 9001 certification with confidence and ease",
    tagline: "Documentation, templates, training and inspection — all in one place.",
    intro: [
      "ISO 9001 is the world’s most recognised Quality Management System (QMS) standard, helping organisations demonstrate their ability to consistently provide products and services that meet customer and regulatory requirements.",
      "At Envad Ltd, we simplify the certification process through comprehensive support that includes documentation, templates, training and an initial compliance inspection — everything you need to get ISO 9001 certified efficiently and affordably.",
    ],
    sections: [
      {
        title: "1. Gap analysis & initial inspection",
        blocks: [
          {
            kind: "text",
            text: "Our ISO consultants begin with an initial inspection and gap analysis to evaluate your current processes against ISO 9001:2015 standards. You’ll receive a detailed report outlining:",
          },
          {
            kind: "list",
            items: [
              "Areas of compliance and non-compliance",
              "Recommended corrective actions",
              "Timeline and roadmap to certification",
            ],
          },
          {
            kind: "text",
            text: "This assessment sets the foundation for a focused and efficient implementation process.",
          },
        ],
      },
      {
        title: "2. Documentation support",
        blocks: [
          {
            kind: "text",
            text: "Documentation is a critical part of ISO 9001 compliance. We provide a full suite of ready-to-use templates and customised documents, including:",
          },
          {
            kind: "list",
            items: [
              "Quality Manual",
              "Quality Policy",
              "Process flowcharts",
              "Standard Operating Procedures (SOPs)",
              "Work instructions",
              "Document control procedure",
              "Risk and opportunity assessment template",
              "Customer feedback and complaint handling forms",
              "Internal audit plan and checklist",
              "Corrective and Preventive Action (CAPA) forms",
              "Management review meeting agenda and minutes template",
              "Training records and competency matrix",
              "Non-conformance report (NCR) template",
            ],
          },
          {
            kind: "text",
            text: "All templates are aligned with ISO 9001:2015 clauses and are easy to customise for your specific business operations.",
          },
        ],
      },
      {
        title: "3. Implementation assistance",
        blocks: [
          { kind: "text", text: "We offer hands-on support in implementing your QMS. This includes:" },
          {
            kind: "list",
            items: [
              "Customising your documentation",
              "Training key staff members",
              "Guiding you through process adjustments",
              "Ensuring internal buy-in and engagement",
            ],
          },
          {
            kind: "text",
            text: "Whether on-site or remotely, our consultants work alongside your team to embed ISO-compliant practices into your daily operations.",
          },
        ],
      },
      {
        title: "4. Internal audit & pre-certification review",
        blocks: [
          {
            kind: "text",
            text: "Before your external certification audit, we conduct a full internal audit to ensure your system is performing effectively and meeting ISO 9001 requirements.",
          },
        ],
      },
      {
        title: "5. Certification body liaison",
        blocks: [
          {
            kind: "text",
            text: "We help you coordinate with a recognised third-party Certification Body of your choice. Our team will:",
          },
          {
            kind: "list",
            items: [
              "Help select the right accredited body",
              "Prepare and submit application documents",
              "Support you throughout the audit process",
            ],
          },
          {
            kind: "text",
            text: "We remain available during the external audit to answer questions and clarify documentation if needed.",
          },
        ],
      },
      {
        title: "6. Training services",
        blocks: [
          {
            kind: "text",
            text: "To support ongoing compliance, we offer ISO 9001 awareness and internal auditor training. These can be delivered online or on-site and are tailored to your team’s roles and responsibilities.",
          },
        ],
      },
      {
        title: "7. Post-certification support",
        blocks: [
          {
            kind: "text",
            text: "Certification is just the beginning. We offer optional ongoing support, including:",
          },
          {
            kind: "list",
            items: [
              "Annual internal audits",
              "Continual improvement planning",
              "Support during surveillance audits",
              "Document control and revision updates",
            ],
          },
        ],
      },
    ],
    industries: {
      title: "Who we serve",
      items: [
        "Manufacturing",
        "Construction",
        "IT & software",
        "Healthcare",
        "Logistics & supply chain",
        "Education and training providers",
        "Professional services",
      ],
      note: "Whether you’re a startup or an established enterprise, our solutions scale to fit your needs.",
    },
    closing:
      "Achieving ISO 9001 certification doesn’t have to be complex or costly. With our structured approach, expert guidance and complete documentation toolkit, you can reach compliance with clarity and confidence. Contact us now to schedule your initial inspection or request a free consultation.",
  },

  "digital-services": {
    metaTitle: "Digital & Visual Services",
    metaDescription:
      "Mapping, visualisation and 3D rendering — from permitting maps and dispersion visualisations to contamination contour maps for EIAs.",
    heading: "Digital and visual services",
    tagline: "Mapping, visualisation and rendering for stakeholders and investors.",
    intro: [
      "We provide mapping solutions for your every need, from planning and permitting applications maps to visualisations of air dispersion modelling results or contamination contour maps for Environmental Impact Assessments.",
      "We also provide tailored Google Sketch drawings and, together with GIS and dispersion modelling software, can provide rendering for visualisation purposes for your stakeholders and investors.",
    ],
    sections: [
      {
        title: "What this covers",
        blocks: [
          {
            kind: "list",
            items: [
              "Planning and permitting application maps",
              "Visualisations of air dispersion modelling results",
              "Contamination contour maps for Environmental Impact Assessments",
              "Tailored Google Sketch drawings",
              "Rendering produced with GIS and dispersion modelling software",
            ],
          },
          {
            kind: "text",
            text: "The aim is always the same: results that a planner, a stakeholder or an investor can read at a glance, without needing the technical report beside them.",
          },
        ],
      },
    ],
    closing:
      "Tell us what you need to show, and to whom, and we’ll recommend the clearest way to present it.",
  },

  "research-development": {
    metaTitle: "Research & Development",
    metaDescription:
      "Bespoke scientific support for remediation strategies and new process designs, feasibility assessments, KTPs and funded projects.",
    heading: "Research & Development",
    tagline: "Scientific support for remediation strategies and new process designs.",
    intro: [
      "We provide bespoke solutions and scientific support for companies looking for remediation strategies and new process designs. Our experience in the fields of contamination and remediation has provided solutions to various industries such as printing, car manufacturing and composting.",
      "We provide a platform for SMEs to pitch new ideas and provide feasibility assessments, followed by potential Knowledge Transfer Partnerships (KTP) with academic institutions and ERDF-funded projects, allowing companies to materialise their vision.",
    ],
    sections: [
      {
        title: "How we can help",
        blocks: [
          {
            kind: "list",
            items: [
              "Bespoke remediation strategies and new process designs",
              "Feasibility assessments for new ideas and processes",
              "Knowledge Transfer Partnerships (KTP) with academic institutions",
              "Support with ERDF-funded project applications",
            ],
          },
        ],
      },
    ],
    closing:
      "If you have an idea that needs testing, or a problem that needs a new approach, tell us about it and we’ll tell you honestly how far it can go.",
  },

  training: {
    metaTitle: "Training",
    metaDescription:
      "Bespoke training for consultancies and industry — WAMITAB revision sessions, toolbox talks, CPD courses and short seminars.",
    heading: "Training",
    tagline: "Bespoke training for consultancies and industry.",
    intro: [
      "We provide bespoke training solutions for consultancies and industries. Our training solutions range from WAMITAB revision sessions to specifically designed toolbox talks in all aspects of Environmental Management Systems.",
      "Training can also be designed for CPD courses and short seminars for different groups of employees. The seminars can be delivered in one session or multiple short sessions designed specifically for your employees’ shift patterns or availability.",
    ],
    sections: [
      {
        title: "What we deliver",
        blocks: [
          {
            kind: "list",
            items: [
              "WAMITAB revision sessions",
              "Toolbox talks across all aspects of Environmental Management Systems",
              "CPD courses",
              "Short seminars fitted to shift patterns and availability",
            ],
          },
          {
            kind: "text",
            text: "We use innovative teaching techniques and, as a Fellow of the Higher Education Academy, provide up-to-date training using new pedagogical tools for adult learners.",
          },
        ],
      },
    ],
    closing:
      "Tell us who needs training and when they’re available, and we’ll build a session around it.",
  },

  "international-companies": {
    metaTitle: "International Companies",
    metaDescription:
      "Training, translation and business communication support for international companies entering the UK market.",
    heading: "International companies",
    tagline: "Training, translation and communication support for the UK market.",
    intro: [
      "We also provide training solutions for international companies requiring specific training when dealing with the UK market. Our services include translation and also more business-focused communication training.",
      "Our current translation service is limited to French–English, but will be expanding in the near future.",
    ],
    sections: [
      {
        title: "What we cover",
        blocks: [
          {
            kind: "list",
            items: [
              "Training for companies entering or working in the UK market",
              "Business-focused communication training",
              "Translation services (currently French–English)",
            ],
          },
        ],
      },
    ],
    closing:
      "If you’re preparing to work with UK partners, regulators or clients, we can help you get the language and the message right.",
  },

  "air-dispersion-modelling": {
    metaTitle: "Air Dispersion Modelling",
    metaDescription:
      "Air dispersion modelling using ADMS and AERMOD, with clear visual results for permitting, EIAs and impact assessments.",
    heading: "Air dispersion modelling",
    tagline: "ADMS and AERMOD modelling with clear, visual results.",
    intro: [
      "We carry out air dispersion modelling using ADMS and AERMOD to support permit applications, Environmental Impact Assessments and impact assessments.",
      "Results are presented as clear maps and visualisations, so the information works as easily for a planning officer or stakeholder as it does for a technical reviewer.",
    ],
    sections: [
      {
        title: "What we cover",
        blocks: [
          {
            kind: "list",
            items: [
              "Dispersion modelling for environmental permit applications",
              "Modelling to support Environmental Impact Assessments",
              "Assessment of impacts on nearby sensitive receptors",
              "Visual outputs prepared alongside GIS mapping and 3D rendering",
            ],
          },
          {
            kind: "text",
            text: "Modelling is most useful when it can be read at a glance, so we pair the numbers with mapping that shows exactly what they mean on your site and around it.",
          },
        ],
      },
    ],
    closing:
      "Tell us about your site and the consent you’re working towards, and we’ll recommend the modelling approach that fits.",
  },

  "branding-marketing": {
    metaTitle: "Branding & Marketing",
    metaDescription:
      "Logo design, brand identity, marketing materials, websites and campaigns that present your business professionally.",
    heading: "Branding and marketing",
    tagline: "Identity, materials and campaigns that present your business professionally.",
    intro: [
      "Envad grew out of two passions: the environment and creating. Branding and marketing is where the second one lives — the identity and materials that make a business look as considered as it is.",
      "We design the brand and produce the materials that carry it, so everything a customer sees says the same thing about you.",
    ],
    sections: [
      {
        title: "What we cover",
        blocks: [
          {
            kind: "list",
            items: [
              "Logo design and brand identity",
              "Marketing materials — brochures, flyers, datasheets and presentations",
              "Websites and landing pages",
              "Campaign artwork and social graphics",
              "Brand guidelines so everything stays consistent",
            ],
          },
          {
            kind: "text",
            text: "Because the same team handles the technical side of our work, technical services can be explained in plain language without losing accuracy.",
          },
        ],
      },
    ],
    closing:
      "Tell us what your business does and who you need to reach, and we’ll put together something that fits.",
  },

  "company-merchandise": {
    metaTitle: "Company Merchandise",
    metaDescription:
      "Branded merchandise for your team and clients — printing, embroidery and engraving on clothing, drinkware, signage and gifts.",
    heading: "Company merchandise",
    tagline: "Printing, embroidery and engraving on products people actually use.",
    intro: [
      "We turn your brand into physical products — from clothing and drinkware to signage and gifts — using printing, embroidery and engraving.",
      "It’s the practical side of branding: something your team and your clients can pick up, use and keep.",
    ],
    sections: [
      {
        title: "How it’s made",
        blocks: [
          {
            kind: "list",
            items: [
              "Printing — for clothing, posters, signage and packaging",
              "Embroidery — for workwear, polos and bags",
              "Engraving — for drinkware, awards, tools and equipment",
            ],
          },
        ],
      },
      {
        title: "What you can put your mark on",
        blocks: [
          {
            kind: "list",
            items: [
              "Clothing and workwear",
              "Drinkware and flasks",
              "Signage and displays",
              "Gifts and promotional items",
            ],
          },
        ],
      },
    ],
    closing:
      "Tell us what you’d like to produce, roughly how many, and when you need them by.",
  },
};

export function getServiceDetail(slug: string | undefined): ServiceDetail | undefined {
  return slug ? SERVICE_DETAILS[slug] : undefined;
}
