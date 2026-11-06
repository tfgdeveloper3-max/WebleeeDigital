import PolicyLayout, { contact, list, note, p, sub, type PolicySection } from "../components/PolicyLayout";

const SERVICES = [
    "Website Design & Development",
    "Web Application Development",
    "Website Maintenance",
    "Branding and Stationery Design",
    "Search Engine Optimization (SEO)",
    "E-commerce Website Development",
    "Mobile Application Development",
    "Domain and Hosting Services",
    "Video Animation",
];

const sections: PolicySection[] = [
    {
        id: "introduction",
        title: "Introduction",
        blocks: [
            p('Welcome to Weblee Digital ("we," "our," "us," or "Company").'),
            p("These Terms & Conditions govern your access to and use of our website, products, digital solutions, and professional services."),
            p("Weblee Digital provides a wide range of digital and creative services, including:"),
            list(SERVICES, 2),
            p(
                "By accessing our website, requesting a quotation, purchasing our services, or entering into a business relationship with Weblee Digital, you agree to comply with these Terms & Conditions.",
            ),
            p("If you do not agree with any part of these terms, please refrain from using our website or services."),
        ],
    },
    {
        id: "definitions",
        title: "Definitions",
        blocks: [
            p("For the purposes of these Terms & Conditions:"),
            list([
                { label: "Company", text: "Refers to Weblee Digital, including its authorized representatives, employees, and service providers." },
                { label: "Client / Customer / You", text: "Refers to any individual, business, organization, or entity purchasing or using our services." },
                { label: "Services", text: "Refers to all digital, creative, technical, marketing, development, and hosting services provided by Weblee Digital." },
                { label: "Project", text: "Refers to any agreed assignment, development work, design work, marketing campaign, or service engagement." },
                {
                    label: "Agreement",
                    text: "Refers to the accepted quotation, proposal, invoice, project scope, written confirmation, or other mutually agreed arrangement between Weblee Digital and the Client.",
                },
                {
                    label: "Deliverables",
                    text: "Refers to the final designs, websites, applications, source files, animations, content, or other materials agreed upon for delivery.",
                },
            ]),
        ],
    },
    {
        id: "acceptance",
        title: "Acceptance of Terms",
        blocks: [
            p("By using our website or engaging our services, you acknowledge that:"),
            list([
                "You have read and understood these Terms & Conditions.",
                "You have the legal authority to enter into an agreement with Weblee Digital.",
                "All information you provide is accurate and complete to the best of your knowledge.",
                "You agree to comply with the applicable terms, policies, and project requirements.",
                "You understand that additional project-specific agreements may apply to certain services.",
            ]),
            p(
                "For paid services, the applicable quotation, proposal, invoice, or project agreement may contain additional terms. Any agreed project-specific terms will apply to that particular engagement. In the event of a conflict, the parties will follow the expressly agreed written terms for that project, subject to applicable law.",
            ),
        ],
    },
    {
        id: "scope-of-services",
        title: "Scope of Services",
        blocks: [
            p("Weblee Digital provides professional digital and creative solutions based on the requirements agreed upon with each client."),
            sub("Website Design & Development", [
                p("We provide website planning, design, development, customization, and deployment services."),
                p("The scope may include:"),
                list(
                    [
                        "Custom website design.",
                        "Responsive website development.",
                        "Front-end and back-end development.",
                        "Content management system integration.",
                        "Website functionality and integrations.",
                        "Website testing and deployment.",
                    ],
                    2,
                ),
                p("Any additional features, pages, or functionality not included in the approved project scope may require additional charges."),
            ]),
            sub("Web Application Development", [
                p("We develop customized web applications according to the client's requirements."),
                p(
                    "Clients must provide accurate project specifications, workflows, business requirements, and necessary access to third-party systems.",
                ),
                p("Changes to functionality, technical specifications, or project scope after approval may affect the delivery timeline and project cost."),
            ]),
            sub("Website Maintenance", [
                p("Website maintenance services may include:"),
                list(
                    [
                        "Website updates.",
                        "Security updates.",
                        "Bug fixes.",
                        "Performance improvements.",
                        "Content updates.",
                        "Technical troubleshooting.",
                        "Website backups, where included in the service agreement.",
                    ],
                    2,
                ),
                p(
                    "The exact maintenance coverage, response times, and service frequency will depend on the selected maintenance package or individual agreement.",
                ),
            ]),
            sub("Branding and Stationery Design", [
                p("Our branding services may include:"),
                list(
                    [
                        "Logo design.",
                        "Brand identity development.",
                        "Business card design.",
                        "Letterhead design.",
                        "Corporate stationery.",
                        "Brand guidelines.",
                        "Other agreed creative materials.",
                    ],
                    2,
                ),
                p(
                    "Clients are responsible for ensuring that any names, trademarks, images, slogans, and materials supplied to us do not infringe upon third-party intellectual property rights.",
                ),
            ]),
            sub("Search Engine Optimization (SEO)", [
                p("Our SEO services may include:"),
                list(
                    [
                        "Keyword research.",
                        "On-page optimization.",
                        "Technical SEO.",
                        "Content optimization.",
                        "Website performance recommendations.",
                        "Search engine visibility improvements.",
                        "SEO reporting, where included.",
                    ],
                    2,
                ),
                p("Weblee Digital does not guarantee specific search engine rankings, traffic volumes, lead generation, or sales results."),
                p("Search engine algorithms, competitor activity, website changes, and other external factors may influence SEO performance."),
            ]),
            sub("E-commerce Website Development", [
                p("Our e-commerce development services may include:"),
                list(
                    [
                        "Online store design and development.",
                        "Product and category management.",
                        "Shopping cart functionality.",
                        "Payment gateway integration.",
                        "Order management functionality.",
                        "Shipping and delivery integrations.",
                        "Inventory management features.",
                    ],
                    2,
                ),
                p(
                    "Clients are responsible for their products, pricing, inventory, taxes, shipping arrangements, customer service, legal disclosures, and compliance with applicable e-commerce regulations.",
                ),
            ]),
            sub("Mobile Application Development", [
                p("We develop mobile applications according to approved project specifications."),
                p(
                    "Clients are responsible for providing accurate requirements, relevant content, necessary third-party service access, and applicable developer account information.",
                ),
                p(
                    "App Store and Google Play approval, publication timelines, and platform-specific requirements are controlled by their respective operators and cannot be guaranteed by Weblee Digital.",
                ),
            ]),
            sub("Domain and Hosting Services", [
                p(
                    "We may provide domain registration, hosting, DNS management, server configuration, and related services directly or through third-party providers.",
                ),
                p(
                    "Domain availability, registration periods, renewal requirements, hosting uptime, server resources, and provider-specific restrictions may vary.",
                ),
                p(
                    "Clients are responsible for providing accurate domain registration information and renewing domain names and hosting services on time unless renewal management is expressly included in their agreement.",
                ),
            ]),
            sub("Video Animation", [
                p("Our animation services may include:"),
                list(
                    [
                        "Explainer videos.",
                        "Promotional animations.",
                        "Motion graphics.",
                        "Animated advertisements.",
                        "Logo animations.",
                        "Social media videos.",
                        "Other agreed video and animation materials.",
                    ],
                    2,
                ),
                p("Clients must ensure that supplied scripts, music, images, footage, voiceovers, and other creative materials are legally authorized for use."),
            ]),
        ],
    },
    {
        id: "quotations",
        title: "Quotations and Project Approval",
        blocks: [
            p("All project quotations and proposals are based on the requirements and information provided by the client."),
            p("A project will generally be considered approved when the client:"),
            list([
                "Accepts the quotation or proposal.",
                "Confirms the agreed project scope in writing.",
                "Completes any required advance payment.",
                "Provides the information and materials necessary to begin work.",
            ]),
            p("Quotations are subject to the validity period stated in the proposal or quotation."),
            p("Any changes to the project after approval may require a revised quotation."),
        ],
    },
    {
        id: "pricing-payment",
        title: "Pricing and Payment Terms",
        blocks: [
            p("Clients agree to pay the fees specified in the approved quotation, proposal, or invoice."),
            sub("Advance Payments", [
                p("Certain projects may require an advance payment before work begins."),
                p("The advance payment amount and payment schedule will be communicated before project commencement."),
            ]),
            sub("Milestone Payments", [
                p("For larger projects, payments may be divided into multiple milestones, such as:"),
                list(["Initial project deposit.", "Design approval.", "Development completion.", "Testing and final delivery."], 2),
                p("The applicable milestone structure will be specified in the project agreement."),
            ]),
            sub("Late Payments", [
                p("Failure to make payments by the agreed deadlines may result in:"),
                list([
                    "Temporary suspension of project activities.",
                    "Delayed project delivery.",
                    "Suspension of maintenance or support services.",
                    "Delayed release of final deliverables.",
                    "Additional charges where expressly agreed and legally permitted.",
                ]),
                p("Weblee Digital will make reasonable efforts to notify clients before suspending services due to overdue payments."),
            ]),
            sub("Additional Costs", [
                p(
                    "Third-party costs, including domain registration, hosting, premium themes, plugins, software licenses, stock images, paid APIs, and external subscriptions, may be charged separately unless expressly included in the quotation.",
                ),
            ]),
        ],
    },
    {
        id: "timelines-delivery",
        title: "Project Timelines and Delivery",
        blocks: [
            p("Project timelines are estimated based on the approved scope, project complexity, resource availability, and timely client cooperation."),
            p("We will make reasonable efforts to complete projects within the agreed timelines."),
            p("However, delays may occur due to:"),
            list([
                "Late submission of content or materials by the client.",
                "Delayed approvals or feedback.",
                "Changes in project requirements.",
                "Technical complications.",
                "Third-party service disruptions.",
                "Unforeseen circumstances beyond our reasonable control.",
            ]),
            p("If a client delays providing necessary information, approvals, or feedback, the project schedule may be adjusted accordingly."),
        ],
    },
    {
        id: "client-responsibilities",
        title: "Client Responsibilities",
        blocks: [
            p("Clients agree to cooperate with Weblee Digital throughout the project."),
            p("Their responsibilities include:"),
            list([
                "Providing accurate project information.",
                "Supplying required content, images, and documents.",
                "Providing necessary website, hosting, and application access.",
                "Reviewing submitted work within reasonable timeframes.",
                "Providing clear and consolidated feedback.",
                "Ensuring that supplied materials are legally authorized for use.",
                "Making payments according to the agreed schedule.",
                "Maintaining the security of their accounts and credentials.",
                "Obtaining necessary permissions and licenses for their business activities.",
            ]),
            p("Weblee Digital will not be responsible for delays or issues directly resulting from the client's failure to fulfill these responsibilities."),
        ],
    },
    {
        id: "revisions",
        title: "Revisions and Scope Changes",
        blocks: [
            p("Our services may include a specified number of revisions, depending on the project quotation or agreement."),
            p("A revision refers to reasonable modifications to previously approved work that remain within the original project scope."),
            p("The following may be treated as additional work:"),
            list([
                "Complete redesigns after approval.",
                "New website pages or application modules.",
                "Additional features or functionality.",
                "Changes to previously approved concepts.",
                "New integrations.",
                "Changes in original project requirements.",
            ]),
            p("Additional work may require a separate quotation and revised delivery timeline."),
            p("The number of included revisions and the charges for additional revisions will be communicated in the relevant project agreement."),
        ],
    },
    {
        id: "account-managers",
        title: "Project Communication and Account Managers",
        blocks: [
            p("Weblee Digital aims to maintain a consistent, professional, and convenient communication experience for its clients."),
            p(
                "Clients may be assigned a dedicated account manager, project coordinator, or customer support representative who serves as their primary point of contact.",
            ),
            p("To maintain continuity and simplify customer communication, Weblee Digital may use professional pseudonyms for certain employees or representatives."),
            p("These pseudonyms help provide a consistent communication identity when account managers or representatives change."),
            p(
                "The use of professional pseudonyms does not alter Weblee Digital's legal identity, contractual responsibilities, or accountability for the services provided.",
            ),
            p("Clients may contact our official support channels for assistance with account-related concerns, project matters, or service escalations."),
            note("Further details regarding pseudonym usage and customer communications are explained in our Privacy Policy."),
        ],
    },
    {
        id: "intellectual-property",
        title: "Intellectual Property Rights",
        blocks: [
            p("Intellectual property ownership and usage rights will be governed by the applicable project agreement and payment status."),
            sub("Client-Supplied Materials", [
                p("Clients retain ownership of materials they provide to Weblee Digital, including:"),
                list(
                    [
                        "Logos and brand assets.",
                        "Business content.",
                        "Images and videos.",
                        "Product information.",
                        "Existing source code.",
                        "Proprietary business information.",
                    ],
                    2,
                ),
                p("Clients grant Weblee Digital permission to use these materials solely to the extent necessary to perform the agreed services."),
            ]),
            sub("Custom Deliverables", [
                p(
                    "Ownership of custom-designed or developed deliverables will transfer to the client upon receipt of full payment, subject to any third-party licenses, pre-existing materials, and specific written agreements.",
                ),
            ]),
            sub("Third-Party Materials", [
                p(
                    "Certain projects may use third-party software, plugins, fonts, themes, stock images, libraries, frameworks, or other licensed resources.",
                ),
                p(
                    "Such materials remain subject to their respective licensing terms and may not be transferred or owned by the client beyond the rights granted under those licenses.",
                ),
            ]),
            sub("Portfolio Rights", [
                p(
                    "Unless otherwise agreed in writing, Weblee Digital may display completed projects, publicly available website links, and non-confidential project samples in its portfolio, marketing materials, or promotional channels.",
                ),
                p(
                    "Clients who require confidentiality or wish to restrict portfolio use should communicate this requirement before project commencement and obtain written confirmation.",
                ),
            ]),
        ],
    },
    {
        id: "security",
        title: "Website and Application Security",
        blocks: [
            p("Weblee Digital takes reasonable steps to develop and maintain secure digital solutions."),
            p(
                "However, no website, application, server, hosting environment, or online platform can be guaranteed to be completely free from security vulnerabilities or cyber threats.",
            ),
            p("Clients are encouraged to:"),
            list(
                [
                    "Use strong passwords.",
                    "Enable multi-factor authentication where available.",
                    "Maintain updated software.",
                    "Use secure hosting environments.",
                    "Restrict unnecessary administrative access.",
                    "Maintain appropriate backups.",
                ],
                2,
            ),
            p(
                "Unless expressly included in a separate agreement, ongoing security monitoring, penetration testing, incident response, and cybersecurity management are not automatically included in standard development services.",
            ),
        ],
    },
    {
        id: "third-party-services",
        title: "Third-Party Services and Integrations",
        blocks: [
            p("Our services may involve third-party platforms and providers, including:"),
            list(
                [
                    "Domain registrars.",
                    "Hosting providers.",
                    "Payment gateways.",
                    "Google services.",
                    "Social media platforms.",
                    "Advertising networks.",
                    "App marketplaces.",
                    "Third-party APIs.",
                    "Software plugins and integrations.",
                ],
                2,
            ),
            p("These services are subject to their own terms, policies, pricing structures, availability, and technical requirements."),
            p(
                "Weblee Digital is not responsible for independent changes, outages, account suspensions, policy modifications, or service interruptions caused by third-party providers.",
            ),
            p("Where reasonably possible, we will assist clients in identifying and addressing integration-related issues within the agreed service scope."),
        ],
    },
    {
        id: "seo-disclaimer",
        title: "SEO and Marketing Disclaimer",
        blocks: [
            p("Search engine optimization and digital marketing outcomes depend on various factors beyond our direct control."),
            p("Weblee Digital does not guarantee:"),
            list(
                [
                    "First-page Google rankings.",
                    "Specific keyword positions.",
                    "A particular number of website visitors.",
                    "Guaranteed sales or conversions.",
                    "Specific advertising returns.",
                    "Guaranteed lead generation.",
                ],
                2,
            ),
            p("We commit to performing agreed SEO and marketing activities professionally and using reasonable industry practices."),
            p("However, search engine updates, competitor behavior, market conditions, and advertising platform policies may affect results."),
        ],
    },
    {
        id: "maintenance-hosting",
        title: "Website Maintenance and Hosting Availability",
        blocks: [
            p(
                "For maintenance and hosting-related services, availability and support will depend on the selected service plan and applicable third-party provider arrangements.",
            ),
            p("Scheduled maintenance, emergency updates, server issues, and external service disruptions may temporarily affect website availability."),
            p(
                "Unless expressly agreed in a separate service-level agreement, Weblee Digital does not guarantee uninterrupted website or hosting availability.",
            ),
            p("Clients are encouraged to maintain independent backups of important website content and business data."),
        ],
    },
    {
        id: "confidentiality",
        title: "Confidentiality",
        blocks: [
            p("Weblee Digital recognizes the importance of protecting confidential client information."),
            p("We take reasonable measures to prevent unauthorized access, use, or disclosure of confidential information."),
            p("Confidential information may include:"),
            list(
                [
                    "Business strategies.",
                    "Customer databases.",
                    "Financial records.",
                    "Website credentials.",
                    "Source code.",
                    "Unpublished designs.",
                    "Marketing strategies.",
                    "Internal business documents.",
                ],
                2,
            ),
            p(
                "Confidential information will only be shared with authorized personnel or service providers where reasonably necessary to perform the agreed services, or where disclosure is legally required.",
            ),
            p("Additional confidentiality obligations may be established through a separate Non-Disclosure Agreement (NDA)."),
        ],
    },
    {
        id: "prohibited-use",
        title: "Prohibited Use of Services",
        blocks: [
            p("Clients must not use our services, websites, applications, or developed platforms for unlawful or harmful activities."),
            p("Prohibited activities include:"),
            list([
                "Fraudulent or deceptive business practices.",
                "Distribution of malicious software.",
                "Unauthorized access to computer systems.",
                "Phishing or identity theft.",
                "Distribution of illegal content.",
                "Copyright or trademark infringement.",
                "Activities that violate applicable laws.",
                "Harassment, threats, or abuse.",
                "Any activity that may damage the reputation, infrastructure, or security of Weblee Digital or third parties.",
            ]),
            p(
                "We reserve the right to refuse, suspend, or terminate services where there is a reasonable basis to believe that our services are being used unlawfully or in violation of these terms.",
            ),
        ],
    },
    {
        id: "cancellation-refunds",
        title: "Cancellation and Refunds",
        blocks: [
            p(
                "Project cancellations, refund eligibility, and refund procedures are governed by our separate Refund & Cancellation Policy and any applicable written project agreement.",
            ),
            p("Clients are encouraged to review the Refund & Cancellation Policy before purchasing our services."),
            p("Cancellation or refund requests must be submitted through our official communication channels."),
            p("Any applicable refund will be assessed according to the agreed project scope, work completed, incurred expenses, and applicable law."),
        ],
    },
    {
        id: "limitation-of-liability",
        title: "Limitation of Liability",
        blocks: [
            p(
                "To the maximum extent permitted by applicable law, Weblee Digital will not be liable for indirect, incidental, special, or consequential losses arising from the use of our services.",
            ),
            p("This may include:"),
            list([
                "Loss of business opportunities.",
                "Loss of anticipated profits.",
                "Loss of revenue.",
                "Loss of data resulting from circumstances outside our reasonable control.",
                "Business interruption.",
                "Third-party service failures.",
                "Search engine ranking fluctuations.",
            ]),
            p(
                "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law, including liability that cannot legally be excluded.",
            ),
            p(
                "Where permitted by law, our aggregate liability arising from a particular project will not exceed the amount paid or payable for the specific services giving rise to the claim, except where a different limitation has been expressly agreed in writing.",
            ),
        ],
    },
    {
        id: "contact",
        title: "Contact Information",
        blocks: [
            p("If you have any questions about these Terms & Conditions or your project with Weblee Digital, please contact us."),
            contact("Terms & Conditions Inquiry"),
        ],
    },
];

export default function TermsAndConditions() {
    return (
        <PolicyLayout
            title="Terms & Conditions"
            intro="The terms that govern your use of the Weblee Digital website and the digital and creative services we provide."
            currentHref="/terms-and-conditions"
            sections={sections}
        />
    );
}