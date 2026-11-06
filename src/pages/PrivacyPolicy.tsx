import PolicyLayout, { COMPANY, contact, list, note, p, sub, type PolicySection } from "../components/PolicyLayout";

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
                'Welcome to Weblee Digital ("we," "our," "us," or "Company"). We are committed to protecting the privacy, confidentiality, and security of our clients, website visitors, business partners, and users.',
            ),
            p("Weblee Digital provides a range of digital and creative services, including:"),
            list(SERVICES, 2),
            p(
                "This Privacy Policy explains how we collect, use, store, process, disclose, and protect your personal information when you visit our website, communicate with us, request a quotation, purchase our services, or otherwise interact with our business.",
            ),
            p(
                "By accessing our website or using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described in this policy, please discontinue using our website and services.",
            ),
        ],
    },
    {
        id: "information-we-collect",
        title: "Information We Collect",
        blocks: [
            p("We may collect different types of information depending on how you interact with Weblee Digital."),
            sub("Personal Information", [
                p(
                    "When you contact us, request a quotation, register for a service, or enter into a business relationship with us, we may collect personal information, including:",
                ),
                list(
                    [
                        "Full name",
                        "Email address",
                        "Phone number and WhatsApp number",
                        "Business or company name",
                        "Business address",
                        "Billing and payment information",
                        "Country, city, and other relevant location details",
                        "Job title or professional designation",
                        "Any other information you voluntarily provide through our contact forms or communications",
                    ],
                    2,
                ),
            ]),
            sub("Business and Project Information", [
                p(
                    "To provide our digital services effectively, we may collect information related to your business, brand, website, or project, including:",
                ),
                list([
                    "Business descriptions and company profiles",
                    "Brand guidelines, logos, and visual assets",
                    "Website content, images, and other media files",
                    "Project requirements and technical specifications",
                    "Domain names and hosting information",
                    "Website login credentials and administrative access details, where necessary",
                    "E-commerce product information, pricing, and inventory details",
                    "Application requirements and database specifications",
                    "Marketing objectives and SEO-related information",
                    "Design references and creative instructions",
                ]),
                p("We only request information reasonably necessary to perform the services agreed upon with you."),
            ]),
            sub("Automatically Collected Information", [
                p("When you visit our website, certain technical information may automatically be collected, including:"),
                list(
                    [
                        "IP address",
                        "Browser type and version",
                        "Device type and operating system",
                        "Website pages visited",
                        "Date and time of website visits",
                        "Referring website addresses",
                        "Time spent on website pages",
                        "General website usage and interaction data",
                    ],
                    2,
                ),
                p(
                    "This information helps us understand visitor behavior, improve website functionality, monitor performance, and maintain website security.",
                ),
            ]),
            sub("Communication Information", [
                p("We may retain communications between you and Weblee Digital, including:"),
                list(
                    [
                        "Emails",
                        "Contact form submissions",
                        "WhatsApp messages",
                        "Phone call records or notes",
                        "Project discussions",
                        "Customer support requests",
                        "Feedback, complaints, and service inquiries",
                    ],
                    2,
                ),
                p(
                    "This information allows us to manage client relationships, respond to inquiries, resolve issues, and maintain accurate project records.",
                ),
            ]),
        ],
    },
    {
        id: "how-we-use-information",
        title: "How We Use Your Information",
        blocks: [
            p("Weblee Digital uses collected information for legitimate business purposes, including the following:"),
            sub("Service Delivery", [
                p("We use your information to:"),
                list([
                    "Develop and maintain websites and web applications.",
                    "Design and develop mobile applications.",
                    "Create branding materials and stationery designs.",
                    "Provide search engine optimization services.",
                    "Develop and manage e-commerce websites.",
                    "Provide website maintenance and technical support.",
                    "Register and manage domains and hosting services.",
                    "Produce video animations and creative media.",
                    "Manage ongoing projects and fulfill contractual obligations.",
                ]),
            ]),
            sub("Communication and Customer Support", [
                p("We may use your contact information to:"),
                list([
                    "Respond to inquiries and service requests.",
                    "Provide project updates and progress reports.",
                    "Share quotations, proposals, and invoices.",
                    "Discuss project requirements and revisions.",
                    "Provide technical assistance and troubleshooting.",
                    "Notify you about important service-related matters.",
                ]),
            ]),
            sub("Payments and Financial Administration", [
                p("We may process relevant personal and billing information to:"),
                list(
                    [
                        "Generate invoices.",
                        "Process service payments.",
                        "Maintain financial records.",
                        "Verify transactions.",
                        "Manage refunds, where applicable.",
                        "Meet applicable accounting and legal requirements.",
                    ],
                    2,
                ),
            ]),
            sub("Website Improvement and Analytics", [
                p("We may analyze website traffic and visitor behavior to:"),
                list(
                    [
                        "Improve website performance.",
                        "Enhance user experience.",
                        "Identify technical issues.",
                        "Understand visitor interests.",
                        "Optimize website content and navigation.",
                        "Improve our services and marketing strategies.",
                    ],
                    2,
                ),
            ]),
            sub("Marketing and Promotional Activities", [
                p("With your consent where required by applicable law, we may use your contact details to share:"),
                list(
                    [
                        "Service announcements.",
                        "Special offers and promotions.",
                        "Company updates.",
                        "New service launches.",
                        "Educational resources and industry insights.",
                    ],
                    2,
                ),
                p("You may opt out of promotional communications at any time."),
            ]),
        ],
    },
    {
        id: "cookies",
        title: "Cookies and Tracking Technologies",
        blocks: [
            p(
                "Our website may use cookies and similar tracking technologies to improve functionality, understand visitor behavior, and enhance the browsing experience.",
            ),
            p("Cookies are small text files stored on your device when you visit a website."),
            sub("Types of Cookies We May Use", [
                list([
                    { label: "Essential Cookies", text: "These cookies are necessary for website functionality, security, and basic operations." },
                    { label: "Performance and Analytics Cookies", text: "These help us understand website traffic, visitor behavior, and website performance." },
                    { label: "Functional Cookies", text: "These remember certain preferences and settings to improve your browsing experience." },
                    { label: "Marketing Cookies", text: "These may be used to deliver relevant advertisements and measure marketing campaign performance, where applicable." },
                ]),
            ]),
            sub("Managing Cookies", [
                p(
                    "You can manage, disable, or delete cookies through your browser settings. Please note that disabling certain cookies may affect website functionality or user experience.",
                ),
                p("Where required by applicable law, we will request your consent before placing non-essential cookies on your device."),
            ]),
        ],
    },
    {
        id: "client-data",
        title: "Website Development and Client Data",
        blocks: [
            p(
                "Because Weblee Digital provides website development, application development, e-commerce, and hosting-related services, we may access certain client information while performing our work.",
            ),
            p("We take reasonable steps to protect all information accessed during project development and maintenance."),
            sub("Client Website Information", [
                p("Depending on the services provided, we may access:"),
                list([
                    "Website administrative dashboards.",
                    "Website databases and files.",
                    "Customer account information.",
                    "E-commerce order and transaction records.",
                    "Website analytics data.",
                    "Server and hosting configurations.",
                    "Application source code and technical documentation.",
                ]),
                p(
                    "We use such information solely to provide agreed services, maintain functionality, troubleshoot issues, and fulfill our contractual responsibilities.",
                ),
            ]),
            sub("Client Credentials", [
                p(
                    "If you provide us with website login details, hosting credentials, domain management access, or other sensitive authentication information, we will take reasonable measures to protect them against unauthorized access and disclosure.",
                ),
                p(
                    "Clients are encouraged to use secure methods when sharing credentials and to change temporary passwords after project completion or whenever access is no longer required.",
                ),
            ]),
            sub("Client Responsibility", [
                p(
                    "Clients are responsible for ensuring they have the necessary legal rights, permissions, and consents to provide us with website content, customer data, images, videos, databases, and other materials required for their projects.",
                ),
            ]),
        ],
    },
    {
        id: "ecommerce-payments",
        title: "E-commerce and Payment Information",
        blocks: [
            p("For e-commerce development and related services, we may work with third-party payment gateways and payment service providers."),
            p(
                "Weblee Digital does not intentionally collect or store complete credit or debit card details unless specifically required for an authorized business process and handled through appropriate security measures.",
            ),
            p(
                "Payment transactions may be processed directly by third-party payment providers, which operate under their own privacy policies and security procedures.",
            ),
            p("We encourage users to review the privacy policies of relevant payment providers before submitting payment information."),
        ],
    },
    {
        id: "domain-hosting",
        title: "Domain Registration and Hosting Services",
        blocks: [
            p(
                "When providing domain registration, DNS management, or hosting services, we may collect and process information necessary to establish and maintain these services.",
            ),
            p("This information may include:"),
            list(
                [
                    "Domain owner or registrant details.",
                    "Contact information.",
                    "Domain registration information.",
                    "Hosting account information.",
                    "Server configuration details.",
                    "Technical and administrative access information.",
                ],
                2,
            ),
            p(
                "Certain domain registration information may be shared with domain registrars, hosting providers, registries, or other relevant service providers as required to deliver the requested services.",
            ),
            p(
                "The availability of publicly accessible domain registration information depends on applicable registrar policies and privacy protection options.",
            ),
        ],
    },
    {
        id: "sharing-disclosure",
        title: "Sharing and Disclosure of Information",
        blocks: [
            note("Weblee Digital respects your privacy and does not sell your personal information to third parties."),
            p("However, we may share certain information in the following circumstances:"),
            sub("Service Providers and Business Partners", [
                p("We may share relevant information with trusted third-party providers who assist us in delivering our services, including:"),
                list(
                    [
                        "Domain registrars.",
                        "Web hosting companies.",
                        "Cloud storage providers.",
                        "Payment processors.",
                        "Email service providers.",
                        "Analytics platforms.",
                        "Advertising platforms.",
                        "Software and technology providers.",
                        "Project management and communication tools.",
                    ],
                    2,
                ),
                p("These providers may access only the information reasonably necessary to perform their assigned functions."),
            ]),
            sub("Legal Requirements", [
                p(
                    "We may disclose personal information if required to do so by applicable laws, regulations, court orders, legal proceedings, or valid requests from authorized government authorities.",
                ),
            ]),
            sub("Business Protection", [
                p("We may disclose information when reasonably necessary to:"),
                list([
                    "Protect our legal rights.",
                    "Prevent fraud or unauthorized activities.",
                    "Investigate security incidents.",
                    "Enforce contractual agreements.",
                    "Protect the safety and security of our clients, employees, and business operations.",
                ]),
            ]),
            sub("Business Transfers", [
                p(
                    "In the event of a merger, acquisition, restructuring, or sale of business assets, relevant information may be transferred as part of the transaction, subject to appropriate confidentiality and privacy protections.",
                ),
            ]),
        ],
    },
    {
        id: "third-party",
        title: "Third-Party Websites and Services",
        blocks: [
            p("Our website, applications, or services may contain links to third-party websites, platforms, plugins, tools, or services."),
            p("These may include:"),
            list(
                [
                    "Google services.",
                    "Social media platforms.",
                    "Payment gateways.",
                    "Hosting providers.",
                    "Domain registrars.",
                    "Third-party plugins and integrations.",
                    "External marketing and analytics platforms.",
                ],
                2,
            ),
            p(
                "Weblee Digital does not control the privacy policies, security practices, or data handling procedures of these external platforms.",
            ),
            p("We recommend reviewing their respective privacy policies before sharing personal information or using their services."),
        ],
    },
    {
        id: "data-retention",
        title: "Data Storage and Retention",
        blocks: [
            p(
                "We retain personal and business information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy.",
            ),
            p("The retention period may depend on:"),
            list([
                "The nature of the services provided.",
                "The duration of the client relationship.",
                "Project and contractual requirements.",
                "Legal and regulatory obligations.",
                "Financial and accounting requirements.",
                "Dispute resolution and business protection needs.",
            ]),
            p(
                "When information is no longer required, we will take reasonable steps to delete, securely destroy, or anonymize it, subject to applicable legal and contractual retention requirements.",
            ),
        ],
    },
    {
        id: "pseudonym-policy",
        title: "Pseudonym Policy",
        highlight: true,
        blocks: [
            p("We hold a policy of using pseudonyms to ensure the following:"),
            list([
                "To avoid undue confusion and hassle for our customers when they are assigned a new account manager, we use pseudonyms. This helps our customers remain connected with a single point of contact and remember their name comfortably.",
                "Moreover, as our staff comprises people from different regions and cultures, the use of pseudonyms helps us present a uniform culture across the organization.",
            ]),
            note(
                `Opt-Out: You can opt out of SMS communications by replying with the word "STOP" to any message you receive from us. To unsubscribe from emails, click the "unsubscribe" link in any of our emails or contact us directly at ${COMPANY.email}.`,
            ),
        ],
    },
    {
        id: "data-security",
        title: "Data Security",
        blocks: [
            p(
                "Weblee Digital takes reasonable technical, administrative, and organizational measures to protect personal information against:",
            ),
            list(
                ["Unauthorized access.", "Accidental loss.", "Misuse or alteration.", "Unauthorized disclosure.", "Data theft.", "Destruction or damage."],
                2,
            ),
            p("Depending on the nature of the information and services involved, security measures may include:"),
            list(
                [
                    "Secure access controls.",
                    "Password protection.",
                    "Restricted administrative permissions.",
                    "Secure communication methods.",
                    "Software and security updates.",
                    "Regular website maintenance.",
                    "Backup procedures.",
                    "Monitoring for suspicious activities.",
                ],
                2,
            ),
            p(
                "Although we make reasonable efforts to protect your information, no website, online platform, electronic transmission, or data storage system can be guaranteed to be completely secure.",
            ),
        ],
    },
    {
        id: "international-transfers",
        title: "International Data Transfers",
        blocks: [
            p(
                "Some of our service providers, hosting partners, cloud platforms, and technology providers may operate in countries outside your country of residence.",
            ),
            p("As a result, your information may be transferred to or processed in different jurisdictions."),
            p(
                "Where applicable, we take reasonable steps to ensure that such transfers are handled in accordance with relevant data protection requirements and appropriate safeguards.",
            ),
        ],
    },
    {
        id: "privacy-rights",
        title: "Your Privacy Rights",
        blocks: [
            p("Depending on your location and applicable privacy laws, you may have certain rights regarding your personal information."),
            p("These rights may include:"),
            sub("Right to Access", [p("You may request information about the personal data we hold about you.")]),
            sub("Right to Correction", [p("You may request corrections to inaccurate, incomplete, or outdated personal information.")]),
            sub("Right to Deletion", [
                p("You may request deletion of your personal information, subject to applicable legal, contractual, and legitimate business requirements."),
            ]),
            sub("Right to Withdraw Consent", [p("Where we process information based on your consent, you may withdraw that consent at any time.")]),
            sub("Right to Object", [p("You may object to certain types of personal information processing where applicable laws provide this right.")]),
            sub("Right to Data Portability", [
                p("Where applicable, you may request a copy of certain personal information in a commonly used and machine-readable format."),
            ]),
            sub("Marketing Preferences", [p("You may unsubscribe from promotional emails or request that we stop sending marketing communications.")]),
            p("To exercise any applicable privacy rights, please contact us using the contact details provided at the end of this policy."),
            p("We may need to verify your identity before processing certain requests."),
        ],
    },
    {
        id: "childrens-privacy",
        title: "Children's Privacy",
        blocks: [
            p(
                "Our website and services are intended for businesses, professionals, and individuals who are legally able to enter into relevant agreements.",
            ),
            p("We do not knowingly collect personal information from children in violation of applicable privacy laws."),
            p(
                "If we become aware that personal information has been collected from a child without the required parental or guardian consent, we will take reasonable steps to delete such information.",
            ),
            p(
                "Parents or legal guardians who believe that a child has provided personal information to us may contact us to request its review or deletion.",
            ),
        ],
    },
    {
        id: "email-marketing",
        title: "Email and Marketing Communications",
        blocks: [
            p(
                "By contacting Weblee Digital or requesting our services, you may receive communications directly related to your inquiry, project, account, or service.",
            ),
            p("Marketing and promotional communications will be sent where permitted by applicable law and, where required, with your consent."),
            p(
                "You can unsubscribe from promotional emails by following the unsubscribe instructions included in the message or by contacting us directly.",
            ),
            p(
                "Please note that opting out of promotional communications will not prevent us from sending essential service-related messages, such as invoices, security notifications, project updates, or contractual communications.",
            ),
        ],
    },
    {
        id: "confidentiality",
        title: "Confidentiality and Non-Disclosure",
        blocks: [
            p(
                "Weblee Digital understands the importance of protecting confidential business information, proprietary materials, and project-related data.",
            ),
            p(
                "We take reasonable steps to ensure that client information is accessed only by authorized individuals who need it to perform their responsibilities.",
            ),
            p("Confidential information may include:"),
            list(
                [
                    "Business strategies and plans.",
                    "Product concepts and ideas.",
                    "Website and application source code.",
                    "Customer databases.",
                    "Marketing strategies.",
                    "Login credentials.",
                    "Financial and operational information.",
                    "Unpublished designs and creative assets.",
                ],
                2,
            ),
            p(
                "Where appropriate, confidentiality and non-disclosure obligations may also be established through separate agreements between Weblee Digital and its clients.",
            ),
        ],
    },
    {
        id: "policy-changes",
        title: "Changes to This Privacy Policy",
        blocks: [
            p(
                "Weblee Digital reserves the right to update, modify, or revise this Privacy Policy from time to time to reflect changes in our business operations, technology, services, legal requirements, or data protection practices.",
            ),
            p("Any changes will be published on this page."),
            p("We encourage visitors and clients to review this Privacy Policy periodically to stay informed about how their information is handled."),
            p(
                "Your continued use of our website or services after an updated policy becomes effective will be subject to the revised policy, to the extent permitted by applicable law.",
            ),
        ],
    },
    {
        id: "acceptance",
        title: "Your Acceptance of This Policy",
        blocks: [
            p(
                "By accessing the Weblee Digital website, submitting an inquiry, or using our services, you acknowledge that you have had the opportunity to review this Privacy Policy.",
            ),
            p("Where applicable law requires consent for specific data processing activities, we will obtain that consent separately."),
            p("Thank you for trusting Weblee Digital with your digital projects and business information."),
        ],
    },
    {
        id: "contact-us",
        title: "Contact Us",
        blocks: [
            p(
                "If you have any questions, concerns, complaints, or requests regarding this Privacy Policy or the way Weblee Digital handles your personal information, please contact us.",
            ),
            contact("Privacy Policy Inquiry"),
            p(
                "We will make reasonable efforts to review and respond to privacy-related inquiries within a reasonable timeframe and in accordance with applicable laws.",
            ),
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <PolicyLayout
            title="Privacy Policy"
            intro="How Weblee Digital collects, uses, stores, and protects your information when you visit our website or work with us."
            currentHref="/privacy-policy"
            sections={sections}
            closing={
                <p className="text-center text-sm text-gray-500">
                    Weblee Digital – Building Digital Experiences with Creativity, Innovation, and Trust.
                </p>
            }
        />
    );
}