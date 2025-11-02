interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cuisine Recipes App",
    description:
      "A full-featured recipe application where users can browse, search, and save their favorite recipes with detailed cooking instructions.",
    technologies: ["React", "JavaScript", "CSS", "API Integration"],
    category: "Web Application",
    features: [
      "Recipe Search",
      "Save Favorites",
      "Cooking Instructions",
      "Ingredient Lists",
    ],
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "Complete system for managing student records, grades, and academic information with admin dashboard and reporting features.",
    technologies: ["React", "Node.js", "Database", "Authentication"],
    category: "Full Stack",
    features: [
      "Student Records",
      "Grade Management",
      "Admin Dashboard",
      "Reports",
    ],
  },
  {
    id: 3,
    title: "Email Application",
    description:
      "Modern email client with compose, inbox management, and real-time notifications. Clean UI with advanced filtering options.",
    technologies: ["React", "TypeScript", "Real-time Updates", "UI/UX"],
    category: "Web Application",
    features: [
      "Compose Emails",
      "Inbox Management",
      "Real-time Notifications",
      "Advanced Filtering",
    ],
  },
  {
    id: 4,
    title: "Pacman Game",
    description:
      "Classic Pacman game recreation with smooth animations, score tracking, and multiple levels. Built with vanilla JavaScript.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Game Logic"],
    category: "Game Development",
    features: [
      "Classic Gameplay",
      "Score Tracking",
      "Multiple Levels",
      "Smooth Animations",
    ],
  },
  {
    id: 5,
    title: "ToDo List App",
    description:
      "Productive task management application with drag-and-drop functionality, categories, and progress tracking.",
    technologies: ["React", "Local Storage", "CSS", "JavaScript"],
    category: "Productivity",
    features: [
      "Task Management",
      "Drag & Drop",
      "Categories",
      "Progress Tracking",
    ],
  },
  {
    id: 6,
    title: "Random Password Generator",
    description:
      "Secure password generator with customizable length, character sets, and strength indicators for enhanced security.",
    technologies: ["JavaScript", "HTML", "CSS", "Security"],
    category: "Utility",
    features: [
      "Customizable Length",
      "Character Sets",
      "Strength Indicator",
      "Copy to Clipboard",
    ],
  },
  {
    id: 7,
    title: "Mario Club Website",
    description:
      "Fan website dedicated to Mario games with game information, character profiles, and community features.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Website",
    features: [
      "Game Information",
      "Character Profiles",
      "Responsive Design",
      "Community Features",
    ],
  },
  {
    id: 8,
    title: "Dice Rolling Website",
    description:
      "Interactive dice rolling application for board games and RPGs with multiple dice types and roll history.",
    technologies: ["JavaScript", "HTML", "CSS", "Animations"],
    category: "Game Utility",
    features: [
      "Multiple Dice Types",
      "Roll History",
      "Animations",
      "Game Support",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in
            web development, game development, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-background/50 text-foreground/80 px-2 py-1 rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Key Features:
                </h4>
                <ul className="text-xs text-foreground/70 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/60 mb-4">
            Interested in working together or want to see more projects?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};
