// Configuration file - Edit this to update your portfolio content
const CONFIG = {
    // Personal Information
    name: "[Your Name]",
    title: ".NET & C++ Developer",
    bio: "Passionate software engineer specializing in high-performance applications, backend systems, and enterprise solutions using .NET and C++.",
    aboutDescription: `I'm a software developer with expertise in .NET and C++ development. 
        I enjoy building high-performance applications, working with low-level systems, 
        and creating scalable enterprise solutions. My passion lies in writing clean, 
        efficient code and solving complex technical challenges.`,

    // Projects - Add your projects here
    projects: [
        {
            title: "Enterprise API Platform",
            description: "High-performance REST API built with ASP.NET Core, serving millions of requests daily with sub-100ms response times.",
            technologies: ["C#", "ASP.NET Core", "SQL Server", "Redis", "Docker"],
            github: "#",
            demo: "#"
        },
        {
            title: "Real-time Data Processing Engine",
            description: "Multi-threaded C++ application for processing real-time data streams with low latency and high throughput.",
            technologies: ["C++17", "Boost", "CMake", "Linux"],
            github: "#",
            demo: "#"
        },
        {
            title: "Microservices Architecture",
            description: "Distributed system with multiple microservices communicating via message queues, built with .NET and Docker.",
            technologies: ["C#", ".NET 6", "RabbitMQ", "Kubernetes", "Azure"],
            github: "#",
            demo: "#"
        },
        {
            title: "Performance Optimization Library",
            description: "C++ library providing memory-efficient data structures and algorithms for high-performance computing.",
            technologies: ["C++20", "STL", "CMake", "GoogleTest"],
            github: "#",
            demo: "#"
        },
        {
            title: "Web Application Dashboard",
            description: "Modern web dashboard with real-time updates using SignalR and Blazor WebAssembly.",
            technologies: ["Blazor", "SignalR", "C#", "JavaScript"],
            github: "#",
            demo: "#"
        },
        {
            title: "Game Engine Component",
            description: "Custom physics engine component written in C++ for game development with optimized collision detection.",
            technologies: ["C++", "OpenGL", "Physics", "CMake"],
            github: "#",
            demo: "#"
        }
    ],

    // Experience - Add your work experience here
    experience: [
        {
            title: "Senior Software Engineer",
            company: "[Company Name]",
            period: "[Start Date] - Present",
            description: "Leading development of enterprise-grade applications using .NET and C++. Architecting scalable solutions and mentoring junior developers."
        },
        {
            title: "Software Developer",
            company: "[Company Name]",
            period: "[Start Date] - [End Date]",
            description: "Developed and maintained backend services using ASP.NET Core and C++. Improved system performance by 40% through optimization."
        },
        {
            title: "Junior Developer",
            company: "[Company Name]",
            period: "[Start Date] - [End Date]",
            description: "Built web applications and APIs using .NET technologies. Collaborated with cross-functional teams in an Agile environment."
        }
    ],

    // Contact Links - Update with your actual links
    contact: [
        {
            name: "GitHub",
            url: "https://github.com/[your-username]",
            icon: "📦"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/[your-profile]",
            icon: "💼"
        },
        {
            name: "Email",
            url: "mailto:[your-email]@example.com",
            icon: "✉️"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/[your-handle]",
            icon: "🐦"
        }
    ]
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
