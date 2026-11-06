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
            p(
                'At Weblee Digital ("we," "our," "us," or "Company"), we are committed to providing professional digital, creative, and technology services while maintaining transparency and fairness in our business relationships.',
            ),
            p(
                "This Refund & Cancellation Policy outlines the terms and conditions governing cancellations, refund requests, payment disputes, and service termination.",
            ),
            p("Our services include:"),
            list(SERVICES, 2),
            p(
                'By purchasing or engaging our services, you ("Client," "Customer," or "you") acknowledge that you have reviewed and understood this policy.',
            ),
            p("This policy should be read together with our Terms & Conditions and applicable project agreements."),
        ],
    },
    {
        id: "change-of-mind",
        title: "Change-of-Mind Cancellation and Refund Terms",
        blocks: [
            sub("Definition of Change-of-Mind Cancellation", [
                p(
                    "A change-of-mind cancellation refers to a Client's voluntary decision to discontinue a project for personal reasons or circumstances unrelated to a failure by the Company to perform its contractual obligations.",
                ),
            ]),
            sub("Conditions Governing Change-of-Mind Cancellation Requests", [
                p("The following conditions shall govern change-of-mind cancellation requests:"),
                sub("Cancellation Within Twenty-Four (24) Hours of Project Onboarding", [
                    note(
                        "Where the Client submits a written cancellation request within twenty-four (24) hours from the official project onboarding date and time, the Client shall be eligible for a refund equivalent to thirty percent (30%) of the total amount received by the Company for the relevant project.",
                    ),
                    p(
                        "The remaining seventy percent (70%) shall be retained by the Company as a cancellation charge, subject to applicable law and the terms of the service agreement.",
                    ),
                    p(
                        "Any applicable taxes, statutory deductions, or legally required adjustments shall be deducted from the refundable amount before disbursement, where permitted by law.",
                    ),
                ]),
                sub("Cancellation After Twenty-Four (24) Hours of Project Onboarding", [
                    p(
                        "Where the Client submits a change-of-mind cancellation request after the expiration of the initial twenty-four (24)-hour period, the project shall be considered non-refundable on the grounds of change of mind alone.",
                    ),
                    p(
                        "Accordingly, the Company shall have no contractual obligation to issue a refund solely because the Client elects to discontinue the project after the expiration of this period, subject to applicable consumer-protection laws, statutory refund rights, and the Company's obligations under the applicable service agreement.",
                    ),
                ]),
            ]),
            sub("Commencement of the Twenty-Four (24)-Hour Period", [
                p(
                    "For the purposes of this Section, the twenty-four (24)-hour period shall commence from the official project onboarding date and time recorded or communicated by the Company.",
                ),
                p(
                    "The official onboarding date and time may be established through written communication, project confirmation, onboarding documentation, or another verifiable record maintained by the Company.",
                ),
            ]),
            sub("Exceptions to Change-of-Mind Restrictions", [
                p(
                    "The provisions of this Section shall not restrict any refund entitlement arising from the Company's material breach, failure to deliver agreed services, or any other circumstance in which a refund is required by applicable law.",
                ),
            ]),
        ],
    },
    {
        id: "client-cancellation",
        title: "Project Cancellation by the Client",
        blocks: [
            p(
                "Clients wishing to cancel a project must submit a written cancellation request through our official email address or another authorized communication channel.",
            ),
            p("The cancellation request should include:"),
            list(
                [
                    "Client's full name.",
                    "Project name or reference number.",
                    "Original payment details.",
                    "Date and time of project onboarding.",
                    "Reason for cancellation.",
                    "Relevant supporting information, where applicable.",
                ],
                2,
            ),
            p(
                "Upon receiving a cancellation request, Weblee Digital will review the request and determine its eligibility according to this policy and the applicable project agreement.",
            ),
            p(
                "Cancellation eligibility will be assessed based on the nature of the request, the time elapsed since onboarding, applicable contractual obligations, and any mandatory legal requirements.",
            ),
        ],
    },
    {
        id: "company-non-performance",
        title: "Refunds Due to Company Non-Performance",
        blocks: [
            p("Weblee Digital aims to complete all agreed projects professionally and within the agreed scope."),
            p(
                "However, if the Company materially fails to fulfill its contractual obligations, the Client may submit a written complaint or refund request.",
            ),
            p("Such circumstances may include:"),
            list([
                "Failure to commence an agreed project without a valid reason.",
                "Failure to deliver the agreed services.",
                "Material deviation from the approved project scope.",
                "Failure to provide an agreed service that cannot reasonably be remedied.",
                "Other circumstances in which a refund is required under the applicable service agreement or law.",
            ]),
            p(
                "Where appropriate, Weblee Digital may first attempt to resolve the issue through corrective work, additional support, or an agreed revised delivery schedule.",
            ),
            p(
                "If the issue cannot reasonably be resolved, any applicable refund will be assessed based on the services not delivered, payments received, contractual obligations, and applicable law.",
            ),
            note("Nothing in this policy limits a Client's statutory rights or remedies."),
        ],
    },
    {
        id: "eligibility-by-service",
        title: "Refund Eligibility by Service Category",
        blocks: [
            p(
                "Due to the nature of our digital and creative services, refund eligibility may vary depending on the service purchased and the stage of completion.",
            ),
            sub("Website Design & Development", [
                p("Website design and development projects involve planning, design, development, programming, and implementation."),
                p(
                    "Refund requests will be assessed according to the applicable cancellation terms, project progress, deliverables completed, and any contractual or statutory refund rights.",
                ),
                p(
                    "Once a project has progressed beyond the change-of-mind cancellation period, a voluntary change-of-mind request alone will not create a refund entitlement.",
                ),
            ]),
            sub("Web Application Development", [
                p(
                    "Web application projects may involve custom programming, system architecture, database configuration, integrations, and specialized development work.",
                ),
                p(
                    "Because these projects require dedicated resources and customized technical work, refund requests will be evaluated according to the agreed project terms, work performed, and applicable legal requirements.",
                ),
            ]),
            sub("Website Maintenance", [
                p("Website maintenance services may be purchased as recurring or fixed-term packages."),
                p(
                    "Payments for services already delivered or maintenance periods already commenced will generally not be refundable solely due to a change of mind, subject to the applicable agreement and mandatory legal requirements.",
                ),
                p("Any cancellation of future maintenance periods will be handled according to the subscription or service agreement."),
            ]),
            sub("Branding and Stationery Design", [
                p(
                    "Branding and stationery projects may involve research, creative concepts, logo development, design revisions, and final artwork preparation.",
                ),
                p(
                    "Refund eligibility will be assessed according to the applicable cancellation period, work completed, approved deliverables, and contractual obligations.",
                ),
            ]),
            sub("Search Engine Optimization (SEO)", [
                p("SEO services involve ongoing research, analysis, optimization, monitoring, and strategic activities."),
                p(
                    "Payments for completed SEO activities, reporting periods, or work already performed will generally not be refundable solely because a Client changes their mind.",
                ),
                p("Future service periods may be cancelled according to the applicable service agreement."),
                p(
                    "No refund will be granted solely because a particular search engine ranking, traffic level, or business result was not achieved where no such outcome was expressly guaranteed in writing.",
                ),
                p("This does not affect any refund rights arising from failure to perform the agreed SEO services."),
            ]),
            sub("E-commerce Website Development", [
                p(
                    "E-commerce development may include store design, product configuration, payment integration, inventory functionality, and other customized features.",
                ),
                p(
                    "Refund requests will be handled according to the project cancellation terms, work completed, third-party expenses, and applicable legal requirements.",
                ),
            ]),
            sub("Mobile Application Development", [
                p("Mobile application development may involve UI/UX design, programming, backend development, testing, and platform-specific integrations."),
                p(
                    "Refund eligibility will depend on the agreed project terms, applicable cancellation period, development progress, and any relevant statutory refund rights.",
                ),
            ]),
            sub("Domain and Hosting Services", [
                p("Domain registration and hosting services may involve third-party providers, registrars, and infrastructure companies."),
                p(
                    "Once a domain has been registered or a hosting service has been activated, the related charges may be non-refundable where the third-party provider does not offer refunds and the applicable agreement permits this treatment.",
                ),
                p(
                    "Renewal payments, registration fees, setup charges, and third-party costs will be handled according to the relevant provider's policies and applicable law.",
                ),
            ]),
            sub("Video Animation", [
                p(
                    "Video animation projects may involve scripting, storyboarding, illustration, voiceovers, animation, rendering, and post-production.",
                ),
                p(
                    "Refund requests will be evaluated according to the applicable cancellation period, completed work, approved stages, and contractual obligations.",
                ),
            ]),
        ],
    },
    {
        id: "third-party-charges",
        title: "Non-Refundable Expenses and Third-Party Charges",
        blocks: [
            p("Certain project expenses may be incurred on behalf of the Client."),
            p("These may include:"),
            list(
                [
                    "Domain registration fees.",
                    "Hosting and server charges.",
                    "Premium plugins and software licenses.",
                    "Paid themes and templates.",
                    "Stock images and video licenses.",
                    "Third-party API subscriptions.",
                    "External service provider fees.",
                    "Payment gateway charges.",
                    "Other approved third-party expenses.",
                ],
                2,
            ),
            p("Such expenses may be non-refundable if they have already been paid to third-party providers and cannot be recovered."),
            p(
                "Any deduction from an otherwise refundable amount must be supported by the applicable agreement, actual incurred expenses, and applicable law.",
            ),
        ],
    },
    {
        id: "deposits",
        title: "Project Deposits and Advance Payments",
        blocks: [
            p("Some projects require advance payments or deposits before work commences."),
            p("These payments help secure project resources, allocate development time, and initiate the onboarding process."),
            p("Advance payments are subject to the change-of-mind cancellation terms outlined in Section 2."),
            p("Any additional deposit or advance payment conditions will be communicated in the approved quotation, invoice, or project agreement."),
        ],
    },
    {
        id: "subscriptions",
        title: "Subscription and Recurring Payments",
        blocks: [
            p("Certain services, including hosting, maintenance, support, and other ongoing services, may operate on recurring payment arrangements."),
            p("Clients are responsible for reviewing the billing frequency, renewal dates, and payment terms associated with their subscriptions."),
            sub("Subscription Cancellation", [
                p("Clients may request cancellation of recurring services through our official communication channels."),
                p("Unless otherwise agreed, cancellation will apply to future billing periods after the current paid period."),
            ]),
            sub("Automatic Renewals", [
                p(
                    "Where automatic renewal is enabled, clients are responsible for managing their renewal preferences and providing cancellation requests within the notice period specified in their service agreement.",
                ),
            ]),
            sub("Unused Subscription Periods", [
                p(
                    "Unused portions of an active subscription will generally not be refundable solely because the Client chooses not to use the service, subject to applicable law and the agreed subscription terms.",
                ),
            ]),
        ],
    },
    {
        id: "request-procedure",
        title: "Refund Request Procedure",
        blocks: [
            p(
                "To request a refund, Clients must contact Weblee Digital through the official support email or another authorized written communication channel.",
            ),
            p("Refund requests should contain:"),
            list(
                [
                    "Full name or registered business name.",
                    "Registered email address.",
                    "Project name or reference number.",
                    "Invoice or transaction reference.",
                    "Date of payment.",
                    "Date and time of project onboarding.",
                    "Reason for the refund request.",
                    "Supporting documents, where relevant.",
                ],
                2,
            ),
            p("Our team may request additional information to verify the payment, identify the project, and assess the refund request."),
            p("Incomplete requests may require additional clarification before they can be processed."),
        ],
    },
    {
        id: "review-approval",
        title: "Refund Review and Approval",
        blocks: [
            p("All refund requests will be reviewed by the authorized representatives of Weblee Digital."),
            p("During the review process, we may consider:"),
            list([
                "The applicable project agreement.",
                "Date and time of official onboarding.",
                "Time elapsed since project commencement.",
                "Payments received.",
                "Project progress.",
                "Completed deliverables.",
                "Third-party expenses.",
                "Nature of the cancellation request.",
                "Any material failure to perform contractual obligations.",
                "Applicable consumer protection and other legal requirements.",
            ]),
            p("Approval of a refund request will be communicated to the Client through an official communication channel."),
        ],
    },
    {
        id: "processing-time",
        title: "Refund Processing Time",
        blocks: [
            p("Once a refund has been approved, Weblee Digital will initiate the refund process within a reasonable timeframe."),
            p("The actual time required for the refunded amount to appear in the Client's account may depend on:"),
            list(
                [
                    "The original payment method.",
                    "Bank processing times.",
                    "Payment gateway procedures.",
                    "International payment regulations.",
                    "Currency conversion.",
                    "Applicable statutory deductions.",
                ],
                2,
            ),
            p("We will make reasonable efforts to ensure that approved refunds are processed without unnecessary delays."),
        ],
    },
    {
        id: "refund-method",
        title: "Refund Method",
        blocks: [
            p("Where reasonably possible, approved refunds will be issued through the original payment method used by the Client."),
            p(
                "If the original payment method is unavailable or cannot accept the refund, Weblee Digital may coordinate an alternative refund arrangement with the Client, subject to payment provider requirements and applicable law.",
            ),
            p("Clients may be required to provide additional verification before an alternative refund can be issued."),
        ],
    },
    {
        id: "chargebacks",
        title: "Chargebacks and Payment Disputes",
        blocks: [
            p(
                "Clients are encouraged to contact Weblee Digital before initiating a chargeback or payment dispute with their bank, card issuer, or payment provider.",
            ),
            p("We aim to resolve legitimate payment concerns through direct communication."),
            p(
                "Where a chargeback is initiated, Weblee Digital may provide relevant transaction records, invoices, project communications, approval records, and delivery evidence to the payment provider as part of the dispute resolution process.",
            ),
            p("This section does not restrict any rights that Clients may have under applicable payment or consumer protection laws."),
        ],
    },
    {
        id: "client-cooperation",
        title: "Client Failure to Cooperate",
        blocks: [
            p("Project delivery may depend on the Client providing content, approvals, credentials, feedback, and other necessary materials."),
            p("If the Client fails to provide the required information or cooperation, project timelines may be delayed."),
            p("Weblee Digital will make reasonable efforts to contact the Client and request the outstanding information."),
            p(
                "Where a project remains inactive due to the Client's prolonged lack of response, we may suspend or close the project in accordance with the applicable service agreement.",
            ),
            p("Any refund assessment will remain subject to this policy, the work performed, and applicable law."),
        ],
    },
    {
        id: "disputed-deliverables",
        title: "Disputed Deliverables and Revisions",
        blocks: [
            p("If a Client is dissatisfied with a deliverable, they should notify Weblee Digital in writing and explain the specific issue."),
            p("Where the issue falls within the approved project scope and included revision allowance, we will make reasonable efforts to address it."),
            p(
                "Requests involving additional functionality, entirely new concepts, or changes outside the original project scope may require additional fees.",
            ),
            p("Dissatisfaction alone does not automatically create a refund entitlement where the agreed services have been properly performed."),
            p(
                "However, this provision does not limit refund rights arising from material non-performance, defective services, or applicable consumer protection laws.",
            ),
        ],
    },
    {
        id: "fraud",
        title: "Fraudulent Transactions and Unauthorized Payments",
        blocks: [
            p(
                "If Weblee Digital identifies a potentially fraudulent transaction or unauthorized payment, we reserve the right to temporarily suspend the related services while the matter is investigated.",
            ),
            p("Clients who believe that a payment was made without their authorization should contact us immediately."),
            p(
                "We may request reasonable documentation to verify the transaction and coordinate with the relevant financial institution or payment provider.",
            ),
            p("Any refund or reversal will be handled according to applicable payment procedures and legal requirements."),
        ],
    },
    {
        id: "statutory-rights",
        title: "Exceptions and Statutory Consumer Rights",
        blocks: [
            p(
                "Nothing in this Refund & Cancellation Policy is intended to exclude, restrict, or override any mandatory consumer rights, statutory refund entitlements, or legal remedies available to Clients under applicable law.",
            ),
            p("Where any provision of this policy conflicts with mandatory legal requirements, the applicable legal requirements will prevail."),
            p(
                "In cases involving material breach, failure to deliver contracted services, or other legally recognized grounds for a refund, the matter will be assessed independently of the voluntary change-of-mind cancellation provisions.",
            ),
        ],
    },
    {
        id: "policy-changes",
        title: "Changes to This Refund Policy",
        blocks: [
            p("Weblee Digital reserves the right to update, amend, or revise this Refund & Cancellation Policy from time to time."),
            p("Changes may be made to reflect:"),
            list([
                "Changes in our services.",
                "Business operational requirements.",
                "Payment processing procedures.",
                "Changes in third-party provider policies.",
                "Applicable legal or regulatory requirements.",
            ]),
            p("Updated versions will be published on our website."),
            p(
                "For existing projects, changes will not retroactively remove refund rights or contractual protections that have already accrued, except where permitted by applicable law and agreed contractual terms.",
            ),
        ],
    },
    {
        id: "contact",
        title: "Contact Information",
        blocks: [
            p("For cancellation requests, refund requests, or questions about this policy, please contact Weblee Digital through our official channels."),
            contact("Refund & Cancellation Request"),
        ],
    },
];

export default function RefundPolicy() {
    return (
        <PolicyLayout
            title="Refund & Cancellation Policy"
            intro="How cancellations, refund requests, and payment disputes are handled for Weblee Digital projects and services."
            currentHref="/refund-policy"
            sections={sections}
        />
    );
}