import { Users, Monitor, Megaphone, BarChart3, Briefcase, Award } from "lucide-react";

export interface ServiceOffering {
  title: string;
  items: string[];
}

export interface ServiceAdvantage {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof Users;
  mainHeading: string;
  description1: string;
  description2: string;
  callToAction: string;
  advantages: ServiceAdvantage[];
  offerings: ServiceOffering[];
  expertServices?: ServiceAdvantage[];
}

export const services: Service[] = [
  {
    id: "recruitment-training",
    slug: "recruitment-training",
    title: "Recruitment & Training",
    shortTitle: "Recruitment",
    description: "Connect with top-tier professionals perfectly matched to your company's culture and goals.",
    icon: Users,
    mainHeading: "Unlock Your Business Potential with Our Expert Recruitment Solutions",
    description1: "Finding the right talent can be a game-changer—and our Recruitment solutions are designed to connect you with top-tier professionals perfectly matched to your company's unique culture and goals.",
    description2: "Empower your business with a recruitment partner that puts your success first. Let us help you discover the talent that will transform your team and elevate your organization to new heights.",
    callToAction: "Get in touch today and start building the future workforce your business deserves!",
    advantages: [
      { title: "Custom Acquisition", description: "We don't just fill vacancies; we understand your business deeply to source candidates who will drive growth and innovation." },
      { title: "Time & Cost Efficiency", description: "Say goodbye to endless resume screening and costly hiring mistakes. Our streamlined process brings you qualified candidates faster, saving you valuable resources." },
      { title: "Access to Exclusive Networks", description: "Benefit from our extensive industry connections and proprietary databases to find candidates who aren't visible on typical job boards." },
      { title: "Expert Screening & Assessment", description: "Each candidate is thoroughly vetted using advanced assessment tools and behavioral interviews to ensure the best fit for your team." },
      { title: "Ongoing Support", description: "From initial hiring through onboarding, we provide continuous consultancy to help integrate new hires smoothly and boost retention." },
    ],
    offerings: [
      {
        title: "Recruitment Services",
        items: ["Talent Acquisition", "Campus Recruitment", "Executive Search", "Contractual/Temporary Staffing", "Bulk/Volume Hiring"],
      },
      {
        title: "Training & Development",
        items: ["Soft Skills Training", "On-ground Training", "Corporate Training", "Technical/Skill-Based Training", "Digital Literacy Programs"],
      },
      {
        title: "Career Counselling & Employability Enhancement",
        items: ["Career Guidance", "Aptitude & Psychometric Testing", "Job Readiness Programs"],
      },
      {
        title: "HR Consulting Services",
        items: ["HR Policy Development", "Performance Management Systems", "Employee Engagement Programs"],
      },
    ],
  },
  {
    id: "it-software",
    slug: "it-software",
    title: "IT & Software Solutions",
    shortTitle: "IT & Software",
    description: "Drive innovation, optimize operations, and accelerate growth with cutting-edge technology.",
    icon: Monitor,
    mainHeading: "Bharat Metrics IT & Software Solutions: Powering Your Digital Future",
    description1: "Elevate your business with Bharat Metrics' comprehensive IT & Software Solutions, designed to drive innovation, optimize operations, and accelerate growth. Whether you're looking to establish a dynamic online presence, streamline complex workflows, or create custom software tailored to your needs, our expert team delivers cutting-edge solutions to transform your vision into reality.",
    description2: "Empower your business with Bharat Metrics IT & Software Solutions— where technology meets innovation for exceptional results.",
    callToAction: "Get started today and unlock the full potential of your digital transformation journey!",
    advantages: [
      { title: "Innovative Technology Expertise", description: "Stay ahead with the latest technologies and best practices." },
      { title: "Customized Solutions", description: "Strategies and solutions crafted precisely for your business goals." },
      { title: "End-to-End Project Management", description: "From concept to deployment and beyond, experience seamless delivery." },
      { title: "Enhanced Security & Compliance", description: "Protect your data while meeting all regulatory standards." },
      { title: "Cost-Effective & Scalable", description: "Solutions that grow with your business without breaking your budget." },
    ],
    expertServices: [
      { title: "Website Development", description: "Create stunning, responsive websites that captivate visitors and convert them into loyal customers." },
      { title: "App Development", description: "Build intuitive mobile and web applications that enhance user engagement and boost productivity." },
      { title: "Custom Software Development", description: "Tailor-made software solutions designed to solve your unique business challenges and scale seamlessly." },
      { title: "Workflow & Process Automation", description: "Automate repetitive tasks and business processes to increase efficiency, reduce errors, and save time." },
      { title: "Cloud Migration", description: "Safely and smoothly transition your infrastructure to the cloud, ensuring scalability, security, and cost savings." },
      { title: "SaaS Product Development", description: "Develop robust Software-as-a-Service products that deliver value to your customers and new revenue streams." },
      { title: "IT Support & Maintenance", description: "Reliable, 24/7 support and proactive maintenance to keep your IT systems running flawlessly." },
    ],
    offerings: [
      {
        title: "Custom Software Development",
        items: ["Web Applications - Tailored solutions for businesses (CRM, ERP, billing systems)", "Desktop Applications - Software for offline or hybrid use", "Mobile App Development - Android and iOS apps for business, education, healthcare"],
      },
      {
        title: "IT Consulting & Business Solutions",
        items: ["IT Strategy & Planning - Helping clients digitize their operations", "Digital Transformation - End-to-end upgrade of legacy systems", "Process Automation - Workflow optimization through software solutions"],
      },
      {
        title: "Web Design & Development",
        items: ["Website Design & Maintenance - Static and dynamic sites with responsive design", "E-Commerce Development - Online stores using Shopify, WooCommerce, or custom solutions", "Content Management Systems - WordPress, Joomla, Drupal development and customization"],
      },
      {
        title: "Cloud & Infrastructure Services",
        items: ["Cloud Migration - Moving infrastructure to AWS, Azure, or GCP", "SaaS Product Development - Building software that runs in the cloud", "Cyber-Security Services - Vulnerability Assessment & Penetration Testing (VAPT)"],
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing Solutions",
    shortTitle: "Digital Marketing",
    description: "Elevate your brand visibility, engage your audience, and drive measurable results.",
    icon: Megaphone,
    mainHeading: "Supercharge Your Growth with Bharat Metrics Digital Marketing Solutions",
    description1: "In the digital age, your online presence is the key to capturing market share and building lasting customer relationships. Bharat Metrics' comprehensive Digital Marketing Solutions are designed to elevate your brand visibility, engage your audience, and drive measurable results across every digital channel.",
    description2: "Partner with Bharat Metrics Digital Marketing Solutions and transform your online presence into a growth engine that delivers consistent, measurable success.",
    callToAction: "Start your digital marketing journey today—ignite engagement, drive conversions, and watch your business soar!",
    advantages: [
      { title: "Customized Solutions", description: "Tailored marketing plans that perfectly align with your industry, budget, and objectives." },
      { title: "Expert Team", description: "Seasoned professionals with deep expertise across all digital marketing channels." },
      { title: "Data-Driven Decisions", description: "Leverage real-time analytics to optimize campaigns and maximize your marketing ROI." },
      { title: "Creative Excellence", description: "Stand out with innovative, attention-grabbing content and designs." },
    ],
    expertServices: [
      { title: "Search Engine Optimization (SEO)", description: "Boost your website's organic rankings and attract qualified traffic with proven SEO strategies." },
      { title: "Search Engine Marketing (SEM)", description: "Maximize your reach with targeted paid campaigns that deliver instant visibility and ROI." },
      { title: "Content Creation & Marketing", description: "Craft compelling content that educates, entertains, and converts your target audience." },
      { title: "Email Marketing", description: "Nurture leads and strengthen customer loyalty through personalized, high-impact email campaigns." },
      { title: "Social Media Marketing", description: "Engage your community across platforms, building brand awareness and fostering meaningful connections." },
      { title: "Google Ads", description: "Capture high-intent customers through well-optimized, cost-effective search and display advertising." },
      { title: "Analytics & Reporting", description: "Gain deep insights with comprehensive data analysis to continuously refine and improve your marketing efforts." },
    ],
    offerings: [
      {
        title: "Search & Performance Marketing",
        items: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Google Ads Management", "Campaign Planning & Optimization"],
      },
      {
        title: "Content & Creative",
        items: ["Content Creation & Marketing", "Blog Writing & Video Marketing", "Infographics Design", "Creative Campaign Development"],
      },
      {
        title: "Social & Email",
        items: ["Social Media Marketing", "Email Marketing Campaigns", "Community Management", "Influencer Partnerships"],
      },
      {
        title: "Analytics & Strategy",
        items: ["Analytics & Reporting", "Integrated Digital Strategies", "Online Marketplace Optimization", "Conversion Rate Optimization"],
      },
    ],
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics & Market Research",
    shortTitle: "Data Analytics",
    description: "Transform your data into clear, actionable insights to power smart strategies.",
    icon: BarChart3,
    mainHeading: "Unlock Your Business Potential with Bharat Metrics Data Analytics & Market Research Solutions",
    description1: "In a data-driven world, making informed decisions is the key to staying ahead. Bharat Metrics Data Analytics & Market Research Solutions offer a full spectrum of services that transform your data into clear, actionable insights to power smart strategies and drive business growth.",
    description2: "Choose Bharat Metrics Data Analytics & Market Research Solutions — your trusted partner to turn data into your most powerful asset.",
    callToAction: "Ready to harness the power of data? Connect with Bharat Metrics today and start transforming insights into impact!",
    advantages: [
      { title: "Dynamic Dashboard Creation", description: "Harness the power of intuitive, customizable dashboards using Power BI, Tableau, and Looker Studio." },
      { title: "Advanced Analytics", description: "Leverage predictive and prescriptive analytics to anticipate market trends and make data-driven decisions." },
      { title: "In-Depth Research", description: "Gain a 360° view of your market through meticulously conducted primary and secondary research." },
      { title: "Robust Statistical Modeling", description: "Predict future outcomes to prepare your business for tomorrow's challenges." },
    ],
    expertServices: [
      { title: "Dynamic Dashboard Creation", description: "Harness the power of intuitive, customizable dashboards using Power BI, Tableau, and Looker Studio to visualize KPIs and track performance in real time." },
      { title: "Advanced Analytics", description: "Leverage predictive and prescriptive analytics to anticipate market trends, optimize strategies, and make data-driven decisions with confidence." },
      { title: "In-Depth Research", description: "Gain a 360° view of your market through meticulously conducted primary research (surveys, interviews, focus groups) and comprehensive secondary research." },
      { title: "Competitor & Benchmarking Analysis", description: "Stay ahead by understanding your competition and positioning your offerings strategically." },
      { title: "Consumer Behavior & Sentiment Analysis", description: "Understand what drives your customers and how they feel about your brand." },
      { title: "Robust Statistical Modeling & Forecasting", description: "Predict future outcomes to prepare your business for tomorrow's challenges." },
    ],
    offerings: [
      {
        title: "Data Analytics & Business Intelligence",
        items: ["Dashboard creation (Power BI, Tableau, Looker Studio)", "Predictive and prescriptive analytics", "KPI tracking and performance reporting"],
      },
      {
        title: "Market Research & Consumer Insights",
        items: ["Primary research (surveys, interviews, focus groups)", "Secondary research (industry reports, databases)", "Competitor and benchmarking analysis", "Consumer behavior and sentiment analysis"],
      },
      {
        title: "Data Strategy & Consulting",
        items: ["Data architecture and pipeline design", "Business problem scoping and analytics roadmap", "Tool and platform recommendation"],
      },
      {
        title: "Advanced Analytics & Modeling",
        items: ["Statistical modeling and forecasting", "Machine learning model development", "Text and sentiment analysis", "Pricing, churn, and customer segmentation models"],
      },
    ],
  },
  {
    id: "strategic-management",
    slug: "strategic-management",
    title: "Strategic Management & Business Intelligence",
    shortTitle: "Strategic Management",
    description: "Business model evaluation, market entry strategies, and competitive positioning.",
    icon: Briefcase,
    mainHeading: "Strategic Management & Business Intelligence Solutions",
    description1: "Navigate complex business landscapes with confidence. Our Strategic Management & Business Intelligence solutions help you make informed decisions, optimize operations, and achieve sustainable competitive advantage.",
    description2: "Partner with BharatMetrics to develop and execute strategies that drive measurable business outcomes and long-term success.",
    callToAction: "Ready to elevate your business strategy? Let's chart your path to success together!",
    advantages: [
      { title: "Strategic Planning Expertise", description: "Comprehensive business model evaluation and transformation guidance." },
      { title: "Market Intelligence", description: "Deep insights into market trends, competition, and growth opportunities." },
      { title: "Performance Optimization", description: "Process improvement using Lean and Six Sigma methodologies." },
      { title: "Data-Driven Insights", description: "BI dashboards and real-time reporting for informed decision-making." },
    ],
    offerings: [
      {
        title: "Strategic Planning & Business Consulting",
        items: ["Business model evaluation and transformation", "Market entry and expansion strategy", "Competitive positioning and differentiation", "Strategic roadmap and goal setting"],
      },
      {
        title: "Business Intelligence & Data-Driven Insights",
        items: ["BI dashboard design and reporting (Power BI, Tableau)", "Real-time data visualization and decision support", "Performance metrics tracking (KPIs, OKRs)"],
      },
      {
        title: "Market & Industry Analysis",
        items: ["Industry trend forecasting and scenario planning", "Competitive benchmarking and SWOT analysis", "Customer segmentation and profiling"],
      },
      {
        title: "Operational Strategy & Performance Optimization",
        items: ["Process improvement (Lean, Six Sigma)", "Cost optimization and efficiency analysis", "Resource allocation and productivity audits", "Strategic sourcing and vendor evaluation"],
      },
    ],
  },
  {
    id: "brand-management",
    slug: "brand-management",
    title: "Brand Management & Business Development",
    shortTitle: "Brand Management",
    description: "Craft a powerful, memorable, and authentic brand that resonates with your audience.",
    icon: Award,
    mainHeading: "Elevate Your Business with Bharat Metrics Brand Management Services",
    description1: "In a competitive marketplace, your brand is your most valuable asset. Bharat Metrics Brand Management Consultancy empowers you to craft a powerful, memorable, and authentic brand that resonates deeply with your audience and drives lasting growth.",
    description2: "With Bharat Metrics, transform your brand into a powerful business driver that inspires confidence and fuels growth. Let us guide you in shaping an unforgettable brand that not only meets but exceeds your ambitions.",
    callToAction: "Harness the power of exceptional brand management — partner with Bharat Metrics today and watch your brand thrive!",
    advantages: [
      { title: "Strategic Brand Positioning", description: "We help define and communicate your unique brand story, making you stand out in crowded markets." },
      { title: "Consistent Brand Identity", description: "From visuals to messaging, ensure every touchpoint reflects your brand's core values and vision flawlessly." },
      { title: "Market Insight & Analysis", description: "Leverage data-driven insights to adapt your brand strategy to evolving market trends and customer preferences." },
      { title: "Enhanced Customer Engagement", description: "Build strong emotional connections that turn audiences into loyal customers and brand advocates." },
      { title: "Integrated Marketing Communication", description: "Seamlessly align all marketing channels for a cohesive, impactful brand presence." },
      { title: "Reputation Management", description: "Proactively manage your brand's reputation to foster trust, credibility, and long-term success." },
    ],
    offerings: [
      {
        title: "Brand Strategy & Positioning",
        items: ["Brand identity creation (name, logo, tagline)", "Brand positioning and messaging framework", "Competitor brand analysis and benchmarking"],
      },
      {
        title: "Brand Communication & Promotion",
        items: ["Integrated marketing campaigns (online & offline)", "Social media branding and content planning", "PR strategy and media outreach", "Visual branding (brochures, brand kits, presentations)"],
      },
      {
        title: "Business Development & Growth Strategy",
        items: ["Go-to-market (GTM) strategy formulation", "Lead generation and client acquisition plans", "Sales funnel design and CRM implementation"],
      },
      {
        title: "Market Expansion & Relationship Management",
        items: ["New market identification and feasibility analysis", "Channel development (distributors, resellers, agents)", "Stakeholder engagement and account nurturing", "Post-launch support and feedback integration"],
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};
