// Configuration file - Edit this to update your portfolio content
const CONFIG = {
    // Personal Information
    name: "Baltermia Clopath",
    title: ".NET & C++ Developer",
    bio: "Passionate software engineer specializing in high-performance applications, backend systems, and enterprise solutions using .NET and C++.",
    aboutDescription: `I'm a software developer with expertise in .NET development as well as C++ (although a bit rusty - pun intended). 
        I enjoy building high-performance business applications and designing robust & scalable backend architecture.
        Creating future-proof foundations that scale and other developers can easily build upon is my strength.`,
    aboutDescription2: `My passion lies in writing clean, efficient code to ensure maintainability and 
        solving complex technical challenges. I'm a software architect, not a vibe-coder. I take pride in my work.`,

    // Skills - Add your skills here
    skills: [
        {
            name: ".NET Ecosystem",
            icon: ".NET",
            iconType: "text", // "text" or "emoji"
            color: "from-dotnet to-purple-600",
            bulletColor: "dotnet",
            items: [
                "Legacy & Modern .NET",
                "Deep Async & TPL understanding",
                "DI & Microservices",
                "Entity Framework",
                "Blazor & Web APIs"
            ]
        },
        {
            name: "Tools & Practices",
            icon: "⚙️",
            iconType: "emoji",
            color: "from-accent to-blue-400",
            bulletColor: "accent",
            items: [
                "Git & Version Control",
                "Docker & Deployment",
                "Basic CI/CD",
                "Linux Server Management",
                "A lot more..."
            ]
        },
        {
            name: "Data & Storage",
            icon: "DB",
            iconType: "text",
            color: "from-gray-700 to-gray-500",
            bulletColor: "gray-700",
            items: [
                "MariaDB & MySQL",
                "PostgreSQL ",
                "Redis Caching",
                "RabbitMQ",
                "MQTT & High-throughput Messaging",
            ]
        },
        {
            name: "C++ Development",
            icon: "C++",
            iconType: "text",
            color: "from-cpp to-blue-500",
            bulletColor: "cpp",
            items: [
                "Modern C++ & STL",
                "Reliable Memory Management",
                "Qt Framework",
                "Image Manipulation",
                "Cmake Build System"
            ]
        },
    ],

    // Projects - Add your projects here
    projects: [
        {
            title: "Blazor Camera Streamer Library",
            description: "A Blazor Component Library that adds real-time camera streaming capabilities implemented using JS Interop. 25k+ downloads.",
            technologies: [".NET", "Blazor", "JS Interop", "Typescript", "47+ Github Starts", "2023"],
            github: "https://github.com/baltermia/blazor-camera-streamer",
            demo: "#"
        },
        {
            title: "Study Companion",
            description: "Quickly implemented school project of a AI assisted Telegram bot to help students with their studies.",
            technologies: [".NET", "DI", "Redis", "PostgreSQL", "EF", "2025"],
            github: "https://github.com/baltermia/study-companion",
            demo: "#"
        },
        {
            title: "Simple Surveys",
            description: "Another school project - a Blazor app with a lot of different UI components to create and take surveys.",
            technologies: [".NET", "Blazor", "WebAPI", "EF", "2021"],
            github: "https://github.com/baltermia/simple-surveys",
            demo: "#"
        },
        {
            title: "Mobile Weather",
            description: "A xamarin mobile weather app.",
            technologies: [".NET", "Xamarin", "2021"], 
            github: "https://github.com/baltermia/mobile-weather",
            demo: "https://baltermia.github.io/mobile-weather/"
        },
    ],

    // Experience - Add your work experience here
    experience: [
        {
            title: "Bachelor",
            company: "FHGR",
            period: "2025 - Today",
            description: "Studying Artificial Intelligence in Software Engineering at Fachhochschule Graubünden."
        },
        {
            title: "Mid-Level Software Engineer",
            company: "esave AG",
            period: "2023 - Today",
            description: "Overhauled the architecture of a modern .NET server application that parses binary-data from IoT devices over MQTT. Focusing on performance, maintainability and scalability. Managed Linux Server Infrastructure. Also maintained a legacy .NET Framework WinForms application and developed new features. "
        },
        {
            title: "Apprenticeship - Junior Software Developer",
            company: "Trumpf Schweiz AG",
            period: "2019 - 2023",
            description: "Implemented Image-Recognition features and drawing Tools in a C++ Qt Vision Application. Built Windows Desktop Apps with WPF and Blazor WepApps in .NET from the ground up."
        }
    ],

    // Contact Links - Update with your actual links
    contact: [
        {
            name: "GitHub",
            url: "https://github.com/baltermia",
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/baltermia-clopath-361a6b211/",
            icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
        },
        {
            name: "Email",
            url: "mailto:contact@clopath.com",
            icon: "✉️"
        }
    ]
};
