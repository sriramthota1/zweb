// ============================================
// PORTFOLIO WEBSITE CONFIGURATION
// ============================================
// Simply fill in your information below
// No coding knowledge required!
// ============================================

const portfolioConfig = {
    
    // ========== PERSONAL INFORMATION ==========
    personalInfo: {
        name: "Dr. Zafar Iqbal",
        title: "Advancing Agriculture with AI",
        description: "Postdoctoral Associate at University of Florida, pioneering the intersection of artificial intelligence and agricultural engineering to create sustainable, data-driven farming solutions.",
        email: "iqbal.m@ufl.edu",
        phone: "+1 (XXX) XXX-XXXX",
        location: "Gainesville, Florida, USA",
        cvFile: "CV-Zafar_Umin_Update11-11-25.pdf"
    },

    // ========== PROFILE PHOTOS ==========
    // Add 4 profile photo filenames
    profilePhotos: [
        "Zafar1.png",
        "zafar2.png",
        "zafar-3.png",
        "zafar4.png"
    ],

    // ========== STATISTICS ==========
    stats: {
        publications: 15,
        projects: 6,
        yearsExperience: 7
    },

    // ========== SOCIAL MEDIA LINKS ==========
    socialMedia: {
        linkedin: "https://www.linkedin.com/in/md-zafar-iqbal/",
        googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
        researchGate: "https://www.researchgate.net/profile/Md-Zafar-Iqbal",
        github: "",
        twitter: ""
    },

    // ========== EDUCATION ==========
    // Add your degrees here
    education: [
        {
            degree: "Ph.D. Biological & Agricultural Engineering",
            university: "Texas A&M University",
            years: "2020-2024",
            logo: "A&M.png",
            badge: "Ph.D."
        },
        {
            degree: "M.Sc. Agricultural Machinery Engineering",
            university: "Chungnam National University",
            years: "2017-2019",
            logo: "CNU.png",
            badge: "M.Sc."
        },
        {
            degree: "B.Sc. Agricultural Engineering",
            university: "Hajee Mohammad Danesh Science & Technology University",
            years: "Bangladesh",
            logo: "HMDSTU.png",
            badge: "B.Sc."
        }
    ],

    // ========== EXPERIENCE ==========
    // Add your work experience here
    experience: [
        {
            position: "Postdoctoral Associate",
            organization: "University of Florida",
            years: "2024-Present",
            logo: "UF.png",
            badge: "Current"
        },
        {
            position: "Graduate Research Assistant",
            organization: "Texas A&M University",
            years: "2020-2024",
            logo: "A&M.png",
            badge: "PhD"
        },
        {
            position: "Graduate Research Assistant",
            organization: "Chungnam National University",
            years: "2017-2019",
            logo: "CNU.png",
            badge: "MSc"
        }
    ],

    // ========== TECHNICAL SKILLS ==========
    // Add your skills by category
    skills: {
        "Programming": ["Python", "MATLAB", "R", "C++"],
        "AI/ML Frameworks": ["TensorFlow", "PyTorch", "Keras", "OpenCV"],
        "Tools & Software": ["ArcGIS", "ENVI", "Git", "Docker"]
    },

    // ========== RESEARCH PROJECTS ==========
    // Add your research projects
    projects: [
        {
            title: "E. coli Detection Using AI",
            description: "UV-C fluorescence imaging and deep learning for rapid E. coli detection on leafy produce",
            category: "crop",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "fa-microscope",
            links: {
                pdf: "#",
                external: "#"
            }
        },
        {
            title: "Soybean Disease Detection",
            description: "Hyperspectral imaging and ML for assessing Sudden Death Syndrome severity in soybean",
            category: "crop",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "fa-seedling",
            links: {
                pdf: "#",
                external: "#"
            }
        },
        {
            title: "Smart Greenhouse Systems",
            description: "IoT-based monitoring and automation for greenhouse climate control",
            category: "climate",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "fa-warehouse",
            links: {
                pdf: "#",
                external: "#"
            }
        },
        {
            title: "Cotton Module Handling",
            description: "Logistics optimization and cover damage assessment for cotton modules",
            category: "soil",
            gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            icon: "fa-boxes",
            links: {
                pdf: "#",
                external: "#"
            }
        },
        {
            title: "Greenhouse Climate Control",
            description: "Suspension-type heating and dehumidification systems for smart greenhouses",
            category: "climate",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            icon: "fa-temperature-high",
            links: {
                pdf: "#",
                external: "#"
            }
        },
        {
            title: "Automated Pest Control",
            description: "IoT-based harmful fly collector monitoring system for smart greenhouses",
            category: "soil",
            gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
            icon: "fa-spider",
            links: {
                pdf: "#",
                external: "#"
            }
        }
    ],

    // ========== PUBLICATIONS ==========
    // Add your publications
    publications: [
        {
            year: 2023,
            title: "Comparison of heating modules for suspension-type multipoint temperature variability management in smart greenhouses",
            journal: "Elsevier",
            date: "July 31, 2023",
            tags: ["Smart Greenhouses", "Climate Control"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2023,
            title: "Evaluation of a 0.7 kW Suspension-Type Dehumidifier Module in a Closed Chamber and in a Small Greenhouse",
            journal: "MDPI",
            date: "March 15, 2023",
            tags: ["Dehumidification", "IoT Systems"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2022,
            title: "Theoretical transmission analysis to optimize Gearbox for a 2.6 kW automatic pepper transplanter",
            journal: "Page Press",
            date: "May 22, 2022",
            tags: ["Agricultural Robotics", "Optimization"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2022,
            title: "Theoretical Overturning Analysis of a 2.6-kW Two-Row Walking-Type Automatic Pepper Transplanter",
            journal: "Springer",
            date: "February 17, 2022",
            tags: ["Mechanical Analysis", "Agricultural Machinery"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2022,
            title: "A CNN-Based Approach to Detect Cover Damage of Round Cotton Modules",
            journal: "National Cotton Council Beltwide Cotton Conference",
            date: "January 6, 2022",
            tags: ["Deep Learning", "Computer Vision"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2021,
            title: "Evaluation of pepper seedling growth according to the growing period and tray for automatic transplanting",
            journal: "KJOAS",
            date: "November 18, 2021",
            tags: ["Plant Growth", "Automation"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2021,
            title: "Kinematic analysis of a hopper-type dibbling mechanism for a 2.6 kW two-row pepper transplanter",
            journal: "Springer",
            date: "May 22, 2021",
            tags: ["Kinematics", "Agricultural Machinery"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2021,
            title: "Working speed analysis of the gear-driven dibbling mechanism of a 2.6 kW walking-type automatic pepper transplanter",
            journal: "MDPI",
            date: "January 22, 2021",
            tags: ["Speed Analysis", "Precision Agriculture"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2021,
            title: "Stress and fatigue analysis of picking device gears for a 2.6 kW automatic pepper transplanter",
            journal: "MDPI",
            date: "January 7, 2021",
            tags: ["Stress Analysis", "Mechanical Engineering"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2020,
            title: "Performance analysis of a gear-driven rotary dibbler",
            journal: "MDPI",
            date: "December 2020",
            tags: ["Performance Analysis", "Agricultural Equipment"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2020,
            title: "Development of a seeding device for a tractor-mounted garlic planter",
            journal: "KJOAS",
            date: "September 2020",
            tags: ["Planting Technology", "Agricultural Innovation"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2019,
            title: "Development of a walking-type automatic pepper transplanter",
            journal: "MDPI",
            date: "November 2019",
            tags: ["Automation", "Transplanting Technology"],
            links: { pdf: "#", external: "#" }
        },
        {
            year: 2019,
            title: "Design and performance analysis of a gear-driven rotary dibbler",
            journal: "KJOAS",
            date: "June 2019",
            tags: ["Design", "Agricultural Machinery"],
            links: { pdf: "#", external: "#" }
        },
        
        {
            year: 2019,
            title: "Development of IoT-based harmful fly collector monitoring system for smart greenhouse",
            journal: "KJOAS",
            date: "March 2019",
            tags: ["IoT", "Smart Agriculture", "Pest Control"],
            links: { pdf: "#", external: "#" }
        }
        // Add more publications here...
    ],

    // ========== AWARDS & HONORS ==========
    awards: [
        {
            icon: "🥇",
            title: "Outstanding Research Award",
            description: "Texas A&M University, 2023"
        },
        {
            icon: "🏆",
            title: "Best Paper Award",
            description: "International Conference on Agricultural Engineering, 2022"
        }
    ],

    // ========== LANGUAGES ==========
    languages: [
        { name: "English", level: 100, description: "Fluent" },
        { name: "Bengali", level: 100, description: "Native" },
        { name: "Korean", level: 70, description: "Intermediate" }
    ],

    // ========== CORE EXPERTISE ==========
    expertise: [
        { icon: "🤖", text: "AI & Machine Learning" },
        { icon: "🌾", text: "Precision Agriculture" },
        { icon: "🛰️", text: "Remote Sensing" },
        { icon: "📊", text: "Data Analytics" },
        { icon: "🔬", text: "Agricultural Engineering" },
        { icon: "💻", text: "Computer Vision" }
    ],

    // ========== RESEARCH INTERESTS ==========
    researchInterests: [
        { icon: "🌱", title: "Smart Agriculture", description: "IoT-based monitoring systems and automation for sustainable farming" },
        { icon: "🤖", title: "Agricultural Robotics", description: "Autonomous systems for planting, harvesting, and crop management" },
        { icon: "🛰️", title: "Remote Sensing", description: "Satellite and drone imagery analysis for crop health monitoring" },
        { icon: "🔬", title: "Food Safety", description: "AI-powered detection systems for pathogens and contaminants" }
    ],

    // ========== PROFESSIONAL MEMBERSHIPS ==========
    memberships: [
        { logo: "ASABE", organization: "American Society of Agricultural and Biological Engineers", status: "Member" },
        { logo: "IEEE", organization: "Institute of Electrical and Electronics Engineers", status: "Member" },
        { logo: "KSAM", organization: "Korean Society for Agricultural Machinery", status: "Member" }
    ],

    // ========== CONFERENCES ==========
    conferences: [
        { type: "Keynote", icon: "fa-microphone", title: "National Cotton Council Beltwide Cotton Conference", location: "Virtual Meeting • 2021-2022", topic: "Round Modules: Handling Logistics and Cover Damage", tags: ["Cotton Industry", "AI Applications"] },
        { type: "Presentation", icon: "fa-presentation", title: "International Conference on Agricultural Engineering", location: "South Korea • 2019-2021", topic: "Smart Greenhouse Automation Systems", tags: ["IoT", "Automation"] },
        { type: "Workshop", icon: "fa-users", title: "IEEE International Conference on Robotics", location: "Texas, USA • 2022-2023", topic: "Agricultural Robotics and Precision Farming", tags: ["Robotics", "Precision Agriculture"] }
    ],

    // ========== TEACHING & MENTORING ==========
    teaching: [
        { icon: "fa-chalkboard-teacher", title: "Graduate Student Mentoring", description: "Mentored 8+ graduate students in agricultural engineering and AI applications, guiding thesis research and career development.", stats: [{ number: "8+", label: "Students Mentored" }, { number: "5", label: "Thesis Supervised" }] },
        { icon: "fa-laptop-code", title: "Workshop Facilitation", description: "Conducted workshops on deep learning applications in agriculture, IoT systems, and precision farming technologies.", topics: ["Deep Learning", "IoT Systems", "Precision Farming"] },
        { icon: "fa-book-open", title: "Curriculum Development", description: "Contributed to curriculum design for agricultural engineering programs, integrating modern AI and automation technologies.", areas: [{ icon: "fa-robot", label: "Agricultural Robotics" }, { icon: "fa-brain", label: "AI in Agriculture" }] }
    ],

    // ========== COLOR SCHEME ==========
    // Choose your website colors
    colors: {
        primary: "#00d4aa",      // Main color (teal)
        secondary: "#6c5ce7"     // Accent color (purple)
    }
};

// Don't edit below this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
