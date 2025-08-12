import React from 'react';

const App = () => {
    const companyName = "BharatMetrics";
    const tagline = "Empowering Businesses";
    const address = "Godawari Enclave, 111-A, New Patliputra Colony, Patliputra, Patna, Bihar - 800013";
    const contactNo = "(+91) 790 349 9877";
    const email = "info@bharatmetrics.net";
    const website = "www.bharatmetrics.net";
    const aboutUsParagraph1 = "We are a Bihar-based business consultancy offering comprehensive business solutions across various domains.";
    const aboutUsParagraph2 = "We extend our expertise to various business areas, making it a one-stop consultancy solution.";

    // Data extracted for the "Our Mission" section (Page 3)
    const missionStatements = [
        {
            title: "Empowering Businesses",
            description: "Deliver tailored business solutions that help enterprises overcome challenges and achieve long-term success."
        },
        {
            title: "Driving Innovation",
            description: "Utilize data-driven strategies, cutting-edge technology, and market insights to enhance business efficiency and competitiveness."
        },
        {
            title: "Holistic Business Support",
            description: "Offer a one-stop consultancy service covering Recruitment & Training of Human Resources, IT & Software Solutions, Digital Marketing Services, Data Analytics & Market research and more."
        },
        {
            title: "Strengthening Bihar's Economy",
            description: "Support local businesses in scaling up and contributing to the overall economic development of the state."
        },
        {
            title: "Creating Business Friendly Environment",
            description: "Promote strategic planning, skill development, and market expansion opportunities for businesses in Bihar."
        }
    ];

    // Data extracted for the "Our Vision" section (Page 4)
    const visionStatement = "We envision to revolutionize Bihar's business ecosystem by providing comprehensive and innovative consultancy solutions, fostering entrepreneurship, and driving sustainable economic growth, making Bihar a recognized hub for thriving businesses.";

    // Data extracted for the "Our Team" section (Page 5)
    const teamMembers = [
        {
            name: "Aviyaan Srivastava",
            title: "Director",
            department: "Marketing & Operation",
            imageUrl: "https://picsum.photos/150/150?random=1"
        },
        {
            name: "Shallu Chandel",
            title: "Program Director",
            department: "Talent & Culture",
            imageUrl: "https://picsum.photos/150/150?random=2"
        },
        {
            name: "Rishab Singh",
            title: "Program Director",
            department: "Information Technology",
            imageUrl: "https://picsum.photos/150/150?random=3"
        },
        {
            name: "Shubham Shourav",
            title: "Program Manager",
            department: "",
            imageUrl: "https://picsum.photos/150/150?random=4"
        },
        {
            name: "Avinash Singh",
            title: "Sr. Business Consultant",
            department: "TA",
            imageUrl: "https://picsum.photos/150/150?random=5"
        },
        {
            name: "Ankit Singh",
            title: "Sr. Business Consultant",
            department: "BDPR",
            imageUrl: "https://picsum.photos/150/150?random=6"
        },
        {
            name: "Abhinav Kumar",
            title: "Sr. Business Consultant",
            department: "Project",
            imageUrl: "https://picsum.photos/150/150?random=7"
        },
        {
            name: "Wajid Khan",
            title: "Sr. Business Consultant",
            department: "IT",
            imageUrl: "https://picsum.photos/150/150?random=8"
        },
        {
            name: "Shubham Bhardwaj",
            title: "Human Resource Manager",
            department: "",
            imageUrl: "https://picsum.photos/150/150?random=9"
        },
        {
            name: "Aavya Sinha",
            title: "Associate Consultant",
            department: "DMBM",
            imageUrl: "https://picsum.photos/150/150?random=10"
        },
        {
            name: "Sabra",
            title: "Associate Consultant",
            department: "BDPR",
            imageUrl: "https://picsum.photos/150/150?random=11"
        }
    ];

    const teamDescription1 = "At BharatMetrics, our team is the cornerstone of our success—comprising elite minds from premier B-Schools like IIMs, CITP Patna, and UBS Mumbai; hospitality leaders from IHMA Gurdaspur and Lovely Professional University; and cutting-edge technologists from IIITs, IITs, and NITs.";
    const teamDescription2 = "Our collective expertise is honed by experience with industry giants such as Whirlpool, AWS, Oracle, J.W. Marriott, Parle Agro, and more. This rich diversity fuels our ability to deliver innovative, scalable solutions driven by strategic insight, customer focus, and technical excellence.";
    const teamDescription3 = "We don't just advise — we partner deeply, becoming an integral extension of your business, committed to driving transformative growth and sustainable success in Bihar and beyond.";

    // Data extracted for the "Our Services" section (Page 6)
    const servicesOverview = [
        "Recruitment & Training of Human Resources",
        "IT & Software Solutions",
        "Digital Marketing Solutions",
        "Data Analytics & Market Research",
        "Strategic Management & BI",
        "Brand Management & Business Development"
    ];

    // Data extracted for "Recruitment & Training Solutions" (Pages 7-9)
    const recruitmentTraining = {
        mainHeading: "Unlock Your Business Potential with Our Expert Recruitment Solutions",
        description1: "Finding the right talent can be a game-changer—and our Recruitment solutions are designed to connect you with top-tier professionals perfectly matched to your company's unique culture and goals.",
        callToAction: "Get in touch today and start building the future workforce your business deserves!",
        description2: "Empower your business with a recruitment partner that puts your success first. Let us help you discover the talent that will transform your team and elevate your organization to new heights.",
        advantages: [
            {
                title: "Custom Acquisition",
                description: "We don't just fill vacancies; we understand your business deeply to source candidates who will drive growth and innovation."
            },
            {
                title: "Time & Cost Efficiency",
                description: "Say goodbye to endless resume screening and costly hiring mistakes. Our streamlined process brings you qualified candidates faster, saving you valuable resources."
            },
            {
                title: "Access to Exclusive Networks",
                description: "Benefit from our extensive industry connections and proprietary databases to find candidates who aren't visible on typical job boards."
            },
            {
                title: "Expert Screening & Assessment",
                description: "Each candidate is thoroughly vetted using advanced assessment tools and behavioral interviews to ensure the best fit for your team."
            },
            {
                title: "Ongoing Support",
                description: "From initial hiring through onboarding, we provide continuous consultancy to help integrate new hires smoothly and boost retention."
            }
        ],
        specificServices: {
            recruitmentServices: [
                "Talent Acquisition",
                "Campus Recruitment",
                "Executive Search",
                "Contractual/Temporary Staffing",
                "Bulk/Volume Hiring"
            ],
            trainingDevelopment: [
                "Soft Skills Training",
                "On-ground Training",
                "Corporate Training",
                "Technical/Skill-Based Training",
                "Digital Literacy Programs"
            ],
            careerCounselling: [
                "Career Guidance",
                "Aptitude & Psychometric Testing",
                "Job Readiness Programs"
            ],
            hrConsulting: [
                "Career Guidance", // Duplicated, keeping as per source
                "Aptitude & Psychometric Testing", // Duplicated, keeping as per source
                "Job Readiness Programs" // Duplicated, keeping as per source
            ]
        }
    };

    // Data extracted for "IT & Software Solutions" (Pages 11-14)
    const itSoftwareSolutions = {
        mainHeading: "Bharat Metrics IT & Software Solutions: Powering Your Digital Future",
        description1: "Elevate your business with Bharat Metrics’ comprehensive IT & Software Solutions, designed to drive innovation, optimize operations, and accelerate growth. Whether you’re looking to establish a dynamic online presence, streamline complex workflows, or create custom software tailored to your needs, our expert team delivers cutting-edge solutions to transform your vision into reality.",
        callToAction: "Get started today and unlock the full potential of your digital transformation journey!",
        description2: "Empower your business with Bharat Metrics IT & Software Solutions— where technology meets innovation for exceptional results.",
        advantages: [
            { title: "Innovative Technology Expertise", description: "Stay ahead with the latest technologies and best practices." },
            { title: "Customized Solutions", description: "Strategies and solutions crafted precisely for your business goals." },
            { title: "End-to-End Project Management", description: "From concept to deployment and beyond, experience seamless delivery." },
            { title: "Enhanced Security & Compliance", description: "Protect your data while meeting all regulatory standards." },
            { title: "Cost-Effective & Scalable", description: "Solutions that grow with your business without breaking your budget." }
        ],
        expertServices: [
            { title: "Website Development", description: "Create stunning, responsive websites that captivate visitors and convert them into loyal customers." },
            { title: "App Development", description: "Build intuitive mobile and web applications that enhance user engagement and boost productivity." },
            { title: "Custom Software Development", description: "Tailor-made software solutions designed to solve your unique business challenges and scale seamlessly." },
            { title: "Workflow & Process Automation", description: "Automate repetitive tasks and business processes to increase efficiency, reduce errors, and save time." },
            { title: "Cloud Migration", description: "Safely and smoothly transition your infrastructure to the cloud, ensuring scalability, security, and cost savings." },
            { title: "SaaS Product Development", description: "Develop robust Software-as-a-Service products that deliver value to your customers and new revenue streams." },
            { title: "IT Support & Maintenance", description: "Reliable, 24/7 support and proactive maintenance to keep your IT systems running flawlessly." }
        ],
        detailedOfferings: {
            customSoftwareDevelopment: [
                "WEB APPLICATIONS| Tailored solutions for businesses (e.g., CRM, ERP, billing systems).",
                "DESKTOP APPLICATIONS| Software for offline or hybrid use in institutions, shops, or factories.",
                "MOBILE APP DEVELOPMENT| Android and iOS apps for business, education, healthcare, etc."
            ],
            itConsultingBusinessSolutions: [
                "IT STRATEGY & PLANNING | Helping clients digitize their operations.",
                "DIGITAL TRANSFORMATION | End-to-end upgrade of legacy systems to digital platforms.",
                "PROCESS AUTOMATION | Workflow optimization through software solutions (RPA, chatbots, etc.)."
            ],
            webDesignDevelopment: [
                "WEBSITE DESIGN & MAINTENANCE | Static and dynamic sites with responsive design.",
                "E-COMMERCE DEVELOPMENT | Online stores using platforms like Shopify, WooCommerce, or custom solutions.",
                "CONTENT MANAGEMENT SYSTEMS (CMS) | WordPress, Joomla, Drupal development and customization."
            ],
            cloudInfrastructureServices: [
                "CLOUD MIGRATION | Moving infrastructure or data to AWS, Azure, or GCP.",
                "SAAS PRODUCT DEVELOPMENT | Building software that runs in the cloud and serves multiple clients.",
                "CYBER-SECURITY SERVICES | Vulnerability Assessment & Penetration Testing (VAPT) | Network Security Solutions"
            ],
            itSupportMaintenance: [
                "IT SUPPORT & MAINTENANCE | AMC (Annual Maintenance Contracts) for software or systems. | Remote and On-site Tech Support for SMEs and institutions."
            ]
        }
    };

    // Data extracted for "Digital Marketing Solutions" (Pages 15-18)
    const digitalMarketingSolutions = {
        mainHeading: "Supercharge Your Growth with Bharat Metrics Digital Marketing Solutions",
        description1: "In the digital age, your online presence is the key to capturing market share and building lasting customer relationships. Bharat Metrics’ comprehensive Digital Marketing Solutions are designed to elevate your brand visibility, engage your audience, and drive measurable results across every digital channel.",
        callToAction: "Start your digital marketing journey today—ignite engagement, drive conversions, and watch your business soar!",
        description2: "Partner with Bharat Metrics Digital Marketing Solutions and transform your online presence into a growth engine that delivers consistent, measurable success.",
        powerfulServices: [
            { title: "Search Engine Optimization (SEO)", description: "Boost your website’s organic rankings and attract qualified traffic with proven SEO strategies." },
            { title: "Search Engine Marketing (SEM)", description: "Maximize your reach with targeted paid campaigns that deliver instant visibility and ROI." },
            { title: "Content Creation & Marketing", description: "Craft compelling content that educates, entertains, and converts your target audience." },
            { title: "Email Marketing", description: "Nurture leads and strengthen customer loyalty through personalized, high-impact email campaigns." },
            { title: "Campaign Planning", description: "Strategically design marketing campaigns tailored to your goals and audience for maximum impact." },
            { title: "Online Marketplaces", description: "Expand your sales channels by establishing a strong presence on popular marketplaces." },
            { title: "Google Ads", description: "Capture high-intent customers through well-optimized, cost-effective search and display advertising." },
            { title: "Social Media Marketing", description: "Engage your community across platforms, building brand awareness and fostering meaningful connections." },
            { title: "Blog Writing & Video Marketing", description: "Deliver valuable insights and dynamic storytelling that position your brand as a thought leader." },
            { title: "Infographics", description: "Simplify complex information into visually striking graphics that enhance understanding and shareability." },
            { title: "Analytics & Reporting", description: "Gain deep insights with comprehensive data analysis to continuously refine and improve your marketing efforts." },
            { title: "Integrated Digital Strategies", description: "Seamlessly blend multiple channels for a unified, powerful marketing approach." },
            { title: "Data-Driven Decisions", description: "Leverage real-time analytics to optimize campaigns and maximize your marketing ROI." },
            { title: "Creative Excellence", description: "Stand out with innovative, attention-grabbing content and designs." }
        ],
        whyBharatMetrics: [
            { title: "Customized Solutions", description: "Tailored marketing plans that perfectly align with your industry, budget, and objectives." },
            { title: "Expert Team", description: "Tailored marketing plans that perfectly align with your industry, budget, and objectives." } // Duplicate from source
        ],
        empowerYourBusinessWith: [
            "Increased brand awareness",
            "Enhanced customer engagement",
            "Higher conversion rates",
            "Sustainable and scalable growth"
        ]
    };

    // Data extracted for "Brand Management & Business Development Solutions" (Pages 19-21)
    const brandManagementSolutions = {
        mainHeading: "Elevate Your Business with Bharat Metrics Brand Management Services",
        description1: "In a competitive marketplace, your brand is your most valuable asset. Bharat Metrics Brand Management Consultancy empowers you to craft a powerful, memorable, and authentic brand that resonates deeply with your audience and drives lasting growth.",
        callToAction: "Harness the power of exceptional brand management — partner with Bharat Metrics today and watch your brand thrive!",
        description2: "With Bharat Metrics, transform your brand into a powerful business driver that inspires confidence and fuels growth. Let us guide you in shaping an unforgettable brand that not only meets but exceeds your ambitions.",
        advantages: [
            { title: "Strategic Brand Positioning", description: "We help define and communicate your unique brand story, making you stand out in crowded markets." },
            { title: "Consistent Brand Identity", description: "From visuals to messaging, ensure every touchpoint reflects your brand’s core values and vision flawlessly." },
            { title: "Market Insight & Analysis", description: "Leverage data-driven insights to adapt your brand strategy to evolving market trends and customer preferences." },
            { title: "Enhanced Customer Engagement", description: "Build strong emotional connections that turn audiences into loyal customers and brand advocates." },
            { title: "Integrated Marketing Communication", description: "Seamlessly align all marketing channels for a cohesive, impactful brand presence." },
            { title: "Reputation Management", description: "Proactively manage your brand’s reputation to foster trust, credibility, and long-term success." }
        ],
        offerings: {
            brandStrategyPositioning: [
                "Brand identity creation (name, logo, tagline)",
                "Brand positioning and messaging framework",
                "Competitor brand analysis and benchmarking"
            ],
            brandCommunicationPromotion: [
                "Integrated marketing campaigns (online & offline)",
                "Social media branding and content planning",
                "PR strategy and media outreach",
                "Visual branding (brochures, brand kits, presentations)"
            ],
            businessDevelopmentGrowthStrategy: [
                "Go-to-market (GTM) strategy formulation",
                "Lead generation and client acquisition plans",
                "Sales funnel design and CRM implementation"
            ],
            marketExpansionRelationshipManagement: [
                "New market identification and feasibility analysis",
                "Channel development (distributors, resellers, agents)",
                "Stakeholder engagement and account nurturing",
                "Post-launch support and feedback integration"
            ]
        }
    };

    // Data extracted for "Data Analytics & Market Research Solutions" (Pages 22-24)
    const dataAnalyticsSolutions = {
        mainHeading: "Unlock Your Business Potential with Bharat Metrics Data Analytics & Market Research Solutions",
        description1: "In a data-driven world, making informed decisions is the key to staying ahead. Bharat Metrics Data Analytics & Market Research Solutions offer a full spectrum of services that transform your data into clear, actionable insights to power smart strategies and drive business growth.",
        callToAction: "Ready to harness the power of data? Connect with Bharat Metrics today and start transforming insights into impact!",
        description2: "Choose Bharat Metrics Data Analytics & Market Research Solutions — your trusted partner to turn data into your most powerful asset.",
        exceptionalServices: [
            { title: "Dynamic Dashboard Creation", description: "Harness the power of intuitive, customizable dashboards using Power BI, Tableau, and Looker Studio to visualize KPIs and track performance in real time." },
            { title: "Advanced Analytics", description: "Leverage predictive and prescriptive analytics to anticipate market trends, optimize strategies, and make data-driven decisions with confidence." },
            { title: "In-Depth Research", description: "Gain a 360° view of your market through meticulously conducted primary research (surveys, interviews, focus groups) and comprehensive secondary research (industry reports, databases)." },
            { title: "Competitor & Benchmarking Analysis", description: "Stay ahead by understanding your competition and positioning your offerings strategically." },
            { title: "Consumer Behavior & Sentiment Analysis", description: "Harness the power of intuitive, customizable dashboards using Power BI, Tableau, and Looker Studio to visualize KPIs and track performance in real time." }, // Duplicate description in source
            { title: "Data Architecture & Pipeline Design", description: "Leverage predictive and prescriptive analytics to anticipate market trends, optimize strategies, and make data-driven decisions with confidence." }, // Duplicate description in source
            { title: "Robust Statistical Modeling & Forecasting", description: "Predict future outcomes to prepare your business for tomorrow’s challenges." },
            { title: "Pricing, Churn & Segmentation Models", description: "Optimize pricing strategies, reduce customer churn, and identify high-value customer segments to increase revenue." }
        ],
        offerings: {
            dataAnalyticsBusinessIntelligence: [
                "Dashboard creation (Power BI, Tableau, Looker Studio)",
                "Predictive and prescriptive analytics",
                "KPI tracking and performance reporting"
            ],
            marketResearchConsumerInsights: [
                "Primary research (surveys, interviews, focus groups)",
                "Secondary research (industry reports, databases)",
                "Competitor and benchmarking analysis",
                "Consumer behavior and sentiment analysis"
            ],
            dataStrategyConsulting: [
                "Data architecture and pipeline design",
                "Business problem scoping and analytics roadmap",
                "Tool and platform recommendation"
            ],
            advancedAnalyticsModeling: [
                "Statistical modeling and forecasting",
                "Machine learning model development",
                "Text and sentiment analysis (social media, reviews)",
                "Pricing, churn, and customer segmentation models"
            ]
        }
    };

    // Data extracted for "Strategic Management & Business Intelligence Solutions" (Pages 25-26)
    const strategicManagementSolutions = {
        mainHeading: "STRATEGIC MANAGEMENT & BUSINESS INTELLIGENCE SOLUTIONS",
        offerings: {
            strategicPlanningBusinessConsulting: [
                "Business model evaluation and transformation",
                "Market entry and expansion strategy",
                "Competitive positioning and differentiation",
                "Strategic roadmap and goal setting"
            ],
            businessIntelligenceDataDrivenInsights: [
                "BI dashboard design and reporting (Power BI, Tableau)",
                "Real-time data visualization and decision support",
                "Performance metrics tracking (KPIs, OKRs)"
            ],
            marketIndustryAnalysis: [
                "Industry trend forecasting and scenario planning",
                "Competitive benchmarking and SWOT analysis",
                "Customer segmentation and profiling"
            ],
            operationalStrategyPerformanceOptimization: [
                "Process improvement (Lean, Six Sigma)",
                "Cost optimization and efficiency analysis",
                "Resource allocation and productivity audits",
                "Strategic sourcing and vendor evaluation"
            ]
        }
    };


    const SectionContainer = ({ title, children }) => (
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl w-full mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-100 text-center">{title}</h2>
            {children}
        </div>
    );

    const ServiceAdvantageItem = ({ title, description, iconColor = "blue-400" }) => (
        <div className="flex flex-col md:flex-row items-start md:items-center bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className={`flex-shrink-0 mr-4 mb-2 md:mb-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 bg-opacity-20`}>
                <svg
                    className={`w-5 h-5 text-${iconColor}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-1">{title}</h3>
                <p className="text-base leading-relaxed text-gray-200">{description}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white font-inter flex flex-col items-center justify-center p-4">
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
            </style>

            {/* Hero Section - About Us */}
            <SectionContainer title="">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left section: Logo and Tagline */}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        {/* Logo Placeholder */}
                        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-4 mb-4 shadow-lg">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-6h2v6zm4 0h-2V7h2v10z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                            {companyName}
                        </h1>
                        <p className="text-lg md:text-xl font-medium text-gray-300 mb-6">
                            {tagline}
                        </p>
                        <div className="text-left text-gray-300 text-sm">
                            <p><strong>Address:</strong> {address}</p>
                            <p><strong>Contact:</strong> {contactNo}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">{website}</a></p>
                        </div>
                    </div>

                    {/* Right section: About Us */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-100 text-center md:text-left">About Us</h2>
                        <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">
                            {aboutUsParagraph1}
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-200">
                            {aboutUsParagraph2}
                        </p>
                    </div>
                </div>
            </SectionContainer>

            {/* Our Mission Section */}
            <SectionContainer title="Our Mission">
                <div className="space-y-6">
                    {missionStatements.map((mission, index) => (
                        <ServiceAdvantageItem key={index} title={mission.title} description={mission.description} iconColor="blue-400" />
                    ))}
                </div>
            </SectionContainer>

            {/* Our Vision Section */}
            <SectionContainer title="Our Vision">
                <div className="flex flex-col md:flex-row items-start md:items-center bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex-shrink-0 mr-4 mb-2 md:mb-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-700 bg-opacity-20">
                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-200">
                        {visionStatement}
                    </p>
                </div>
            </SectionContainer>

            {/* Our Team Section */}
            <SectionContainer title="Our Team">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-400" onError={(e) =>
                            {
                                // e.target.onerror = null;
                                // e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error";
                            }} />
                            <h3 className="text-xl font-semibold text-blue-300">{member.name}</h3>
                            <p className="text-base text-gray-300">{member.title}</p>
                            {member.department && <p className="text-sm text-gray-400">{member.department}</p>}
                        </div>
                    ))}
                </div>
                <div className="mt-8 space-y-4 text-gray-200 text-base md:text-lg leading-relaxed">
                    <p>{teamDescription1}</p>
                    <p>{teamDescription2}</p>
                    <p>{teamDescription3}</p>
                </div>
            </SectionContainer>

            {/* Our Services Overview Section */}
            <SectionContainer title="Our Services">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicesOverview.map((service, index) => (
                        <div key={index} className="flex items-center bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <svg className="w-8 h-8 text-green-400 flex-shrink-0 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            <p className="text-lg text-gray-200">{service}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Recruitment & Training Solutions Section */}
            <SectionContainer title="Recruitment & Training Solutions">
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{recruitmentTraining.mainHeading}</p>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{recruitmentTraining.description1}</p>
                <p className="text-base md:text-lg leading-relaxed font-semibold text-blue-200 mb-6">{recruitmentTraining.callToAction}</p>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200">{recruitmentTraining.description2}</p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Advantages</h3>
                <div className="space-y-4 mb-8">
                    {recruitmentTraining.advantages.map((advantage, index) => (
                        <ServiceAdvantageItem key={index} title={advantage.title} description={advantage.description} iconColor="cyan-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Specific Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-xl font-semibold text-blue-300 mb-2">Recruitment Services</h4>
                        <ul className="list-disc list-inside text-gray-200 space-y-1">
                            {recruitmentTraining.specificServices.recruitmentServices.map((item, index) => (
                                <li key={index} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-blue-300 mb-2">Training & Development</h4>
                        <ul className="list-disc list-inside text-gray-200 space-y-1">
                            {recruitmentTraining.specificServices.trainingDevelopment.map((item, index) => (
                                <li key={index} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-blue-300 mb-2">Career Counselling & Employability Enhancement</h4>
                        <ul className="list-disc list-inside text-gray-200 space-y-1">
                            {recruitmentTraining.specificServices.careerCounselling.map((item, index) => (
                                <li key={index} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-blue-300 mb-2">HR Consulting Services</h4>
                        <ul className="list-disc list-inside text-gray-200 space-y-1">
                            {recruitmentTraining.specificServices.hrConsulting.map((item, index) => (
                                <li key={index} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionContainer>

            {/* IT & Software Solutions Section */}
            <SectionContainer title="IT & Software Solutions">
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{itSoftwareSolutions.mainHeading}</p>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{itSoftwareSolutions.description1}</p>
                <p className="text-base md:text-lg leading-relaxed font-semibold text-blue-200 mb-6">{itSoftwareSolutions.callToAction}</p>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200">{itSoftwareSolutions.description2}</p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Advantages</h3>
                <div className="space-y-4 mb-8">
                    {itSoftwareSolutions.advantages.map((advantage, index) => (
                        <ServiceAdvantageItem key={index} title={advantage.title} description={advantage.description} iconColor="blue-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Expert Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {itSoftwareSolutions.expertServices.map((service, index) => (
                        <ServiceAdvantageItem key={index} title={service.title} description={service.description} iconColor="teal-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Detailed Offerings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(itSoftwareSolutions.detailedOfferings).map((category, index) => (
                        <div key={index} className="bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <h4 className="text-xl font-semibold text-blue-300 mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                                {itSoftwareSolutions.detailedOfferings[category].map((item, idx) => (
                                    <li key={idx} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Digital Marketing Solutions Section */}
            <SectionContainer title="Digital Marketing Solutions">
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{digitalMarketingSolutions.mainHeading}</p>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{digitalMarketingSolutions.description1}</p>
                <p className="text-base md:text-lg leading-relaxed font-semibold text-blue-200 mb-6">{digitalMarketingSolutions.callToAction}</p>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200">{digitalMarketingSolutions.description2}</p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Powerful Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {digitalMarketingSolutions.powerfulServices.map((service, index) => (
                        <ServiceAdvantageItem key={index} title={service.title} description={service.description} iconColor="pink-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Why Bharat Metrics?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {digitalMarketingSolutions.whyBharatMetrics.map((reason, index) => (
                        <ServiceAdvantageItem key={index} title={reason.title} description={reason.description} iconColor="yellow-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Empower Your Business With:</h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2">
                    {digitalMarketingSolutions.empowerYourBusinessWith.map((item, index) => (
                        <li key={index} className="text-lg transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                    ))}
                </ul>
            </SectionContainer>

            {/* Brand Management & Business Development Solutions Section */}
            <SectionContainer title="Brand Management & Business Development Solutions">
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{brandManagementSolutions.mainHeading}</p>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{brandManagementSolutions.description1}</p>
                <p className="text-base md:text-lg leading-relaxed font-semibold text-blue-200 mb-6">{brandManagementSolutions.callToAction}</p>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200">{brandManagementSolutions.description2}</p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Advantages</h3>
                <div className="space-y-4 mb-8">
                    {brandManagementSolutions.advantages.map((advantage, index) => (
                        <ServiceAdvantageItem key={index} title={advantage.title} description={advantage.description} iconColor="orange-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Detailed Offerings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(brandManagementSolutions.offerings).map((category, index) => (
                        <div key={index} className="bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <h4 className="text-xl font-semibold text-blue-300 mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                                {brandManagementSolutions.offerings[category].map((item, idx) => (
                                    <li key={idx} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Data Analytics & Market Research Solutions Section */}
            <SectionContainer title="Data Analytics & Market Research Solutions">
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{dataAnalyticsSolutions.mainHeading}</p>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">{dataAnalyticsSolutions.description1}</p>
                <p className="text-base md:text-lg leading-relaxed font-semibold text-blue-200 mb-6">{dataAnalyticsSolutions.callToAction}</p>
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200">{dataAnalyticsSolutions.description2}</p>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Exceptional Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {dataAnalyticsSolutions.exceptionalServices.map((service, index) => (
                        <ServiceAdvantageItem key={index} title={service.title} description={service.description} iconColor="purple-400" />
                    ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Detailed Offerings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(dataAnalyticsSolutions.offerings).map((category, index) => (
                        <div key={index} className="bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <h4 className="text-xl font-semibold text-blue-300 mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                                {dataAnalyticsSolutions.offerings[category].map((item, idx) => (
                                    <li key={idx} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Strategic Management & Business Intelligence Solutions Section */}
            <SectionContainer title="Strategic Management & Business Intelligence Solutions">
                <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-200">
                    {strategicManagementSolutions.mainHeading}
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Offerings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(strategicManagementSolutions.offerings).map((category, index) => (
                        <div key={index} className="bg-white bg-opacity-5 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <h4 className="text-xl font-semibold text-blue-300 mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                                {strategicManagementSolutions.offerings[category].map((item, idx) => (
                                    <li key={idx} className="transition-all duration-300 hover:scale-[1.02] hover:text-blue-200">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionContainer>

        </div>
    );
};

export default App;
