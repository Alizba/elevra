

export const portfolioCategories = [
  {
    id: 1,
    title: "Illustrations",
    slug: "illustrations",
    href: "/portfolio/illustrations",
    image: "/photo2.jpg",
    description: "Creative illustrations and digital art"
  },
  {
    id: 2,
    title: "Applications",
    slug: "applications",
    href: "/portfolio/applications",
    image: "/photo3.jpg",
    description: "Web and mobile applications"
  },
  {
    id: 3,
    title: "Websites",
    slug: "websites",
    href: "/portfolio/websites",
    image: "/photo4.jpg",
    description: "Modern website designs"
  }
]

export const portfolioProjects = {
  illustrations: [
    {
      id: 1,
      title: "Creative Illustration Design",
      description: "A stunning collection of hand-drawn illustrations featuring vibrant colors and unique artistic styles. Perfect for editorial and commercial use.",
      image: "/photo2.jpg",
      url: "/portfolio/illustrations/1",
      category: "illustrations",
      tags: ["digital art", "editorial", "commercial"]
    },
    {
      id: 2,
      title: "Digital Art Collection",
      description: "Modern digital illustrations combining traditional techniques with contemporary design elements for impactful visual storytelling.",
      image: "/photo3.jpg",
      url: "/portfolio/illustrations/2",
      category: "illustrations",
      tags: ["digital", "contemporary", "storytelling"]
    },
    {
      id: 3,
      title: "Character Design Series",
      description: "Unique character illustrations designed for games, animations, and marketing campaigns with detailed personality traits.",
      image: "/photo4.jpg",
      url: "/portfolio/illustrations/3",
      category: "illustrations",
      tags: ["character design", "games", "animation"]
    },
    {
      id: 4,
      title: "Vector Artwork Portfolio",
      description: "Clean and scalable vector illustrations suitable for branding, logos, and print materials with professional quality.",
      image: "/photo2.jpg",
      url: "/portfolio/illustrations/4",
      category: "illustrations",
      tags: ["vector", "branding", "print"]
    }
  ],
  
  applications: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration, user authentication, and real-time inventory management.",
      image: "/photo2.jpg",
      url: "/portfolio/applications/1",
      category: "applications",
      tags: ["e-commerce", "full-stack", "react", "node.js"]
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Comprehensive analytics dashboard for social media management with data visualization and scheduling features.",
      image: "/photo3.jpg",
      url: "/portfolio/applications/2",
      category: "applications",
      tags: ["dashboard", "analytics", "social media"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with team features, deadline tracking, and productivity analytics.",
      image: "/photo4.jpg",
      url: "/portfolio/applications/3",
      category: "applications",
      tags: ["productivity", "collaboration", "task management"]
    },
    {
      id: 4,
      title: "Fitness Tracking Mobile App",
      description: "React Native mobile application for tracking workouts, nutrition, and fitness goals with social features.",
      image: "/photo2.jpg",
      url: "/portfolio/applications/4",
      category: "applications",
      tags: ["mobile", "react native", "fitness", "health"]
    }
  ],
  
  websites: [
    {
      id: 1,
      title: "Corporate Website",
      description: "Modern corporate website with responsive design, interactive elements, and optimized performance for better user engagement.",
      image: "/photo2.jpg",
      url: "/portfolio/websites/1",
      category: "websites",
      tags: ["corporate", "responsive", "next.js"]
    },
    {
      id: 2,
      title: "Portfolio Site",
      description: "Creative portfolio website showcasing work samples with smooth animations and an intuitive user interface.",
      image: "/photo3.jpg",
      url: "/portfolio/websites/2",
      category: "websites",
      tags: ["portfolio", "creative", "animations"]
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Feature-rich blog platform with CMS integration, SEO optimization, and social media sharing capabilities.",
      image: "/photo4.jpg",
      url: "/portfolio/websites/3",
      category: "websites",
      tags: ["blog", "cms", "seo"]
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Beautiful restaurant website with online ordering, reservation system, and interactive menu display.",
      image: "/photo2.jpg",
      url: "/portfolio/websites/4",
      category: "websites",
      tags: ["restaurant", "e-commerce", "booking"]
    }
  ]
}

export const getProjectsByCategory = (category) => {
  return portfolioProjects[category.toLowerCase()] || []
}

export const getProjectById = (category, id) => {
  const projects = portfolioProjects[category.toLowerCase()] || []
  return projects.find(project => project.id === parseInt(id))
}