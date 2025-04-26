// Profile Data
const profileData = {
    skills: [
        { name: "SQL", level: 98, category: "Database" },
        { name: "Python", level: 95, category: "Programming" },
        { name: "Azure Synapse", level: 92, category: "Cloud" },
        { name: "Snowflake", level: 94, category: "Data Warehouse" },
        { name: "Power BI", level: 90, category: "Visualization" },
        { name: "ETL Pipelines", level: 96, category: "Data Engineering" }
    ],

    experience: [
        {
            company: "Accenture",
            role: "Senior Data Analyst",
            period: "2020-2021",
            achievements: [
                "Engineered 50+ optimized Stored Procedures reducing processing time by 50%",
                "Designed CDC pipelines for real-time data updates",
                "Developed Azure Data Factory ETL solutions with Spark"
            ]
        },
        {
            company: "Freelance Consultant",
            role: "Data Architect",
            period: "2024-Present",
            achievements: [
                "Optimized Snowflake data warehouse performance by 25%",
                "Developed CI/CD pipelines reducing ETL deployment time by 40%",
                "Created forecasting models with 82% accuracy"
            ]
        }
    ],

    projects: [
        {
            title: "Snowflake Optimization",
            description: "Improved query performance by 25% through advanced optimization techniques",
            technologies: ["Snowflake", "Python", "SQL"],
            link: "#"
        },
        {
            title: "Customer Analytics Dashboard",
            description: "Processed 40k+ customer feedback instances with Power BI visualizations",
            technologies: ["Power BI", "Python", "Azure"],
            link: "#"
        }
    ]
};

// Initialize Typewriter
function initTypewriter() {
    const elements = [
        "Data Engineering Specialist",
        "Cloud Solutions Architect",
        "ETL Pipeline Expert"
    ];
    let index = 0;
    
    setInterval(() => {
        document.getElementById('dynamic-tagline').textContent = elements[index];
        index = (index + 1) % elements.length;
    }, 3000);
}

// Render Skills
function renderSkills() {
    const container = document.querySelector('.skills-grid');
    container.innerHTML = profileData.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <span>${skill.name}</span>
                <span class="skill-category">${skill.category}</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
}

// Render Experience
function renderExperience() {
    const container = document.querySelector('.timeline-container');
    container.innerHTML = profileData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-header">
                <img src="assets/images/company-logos/${exp.company.toLowerCase()}.png" alt="${exp.company}">
                <div>
                    <h3>${exp.company}</h3>
                    <p>${exp.role} | ${exp.period}</p>
                </div>
            </div>
            <ul class="timeline-achievements">
                ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
            </ul>
            <button class="know-more">Know More <i class="fas fa-chevron-down"></i></button>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const container = document.querySelector('.projects-grid');
    container.innerHTML = profileData.projects.map(project => `
        <div class="project-card">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    renderSkills();
    renderExperience();
    renderProjects();
});