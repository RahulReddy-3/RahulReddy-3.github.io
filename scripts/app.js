// app.js

// =====================
// Scroll Progress Bar
// =====================
window.onscroll = function() {scrollProgress()};

function scrollProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// =====================
// Skills Progress Animation
// =====================
document.addEventListener("DOMContentLoaded", () => {
    const skillProgress = document.querySelectorAll('.skill-progress');
    skillProgress.forEach(progress => {
        let width = progress.getAttribute('data-skill');
        progress.style.width = width;
    });
});

// =====================
// Timeline Data
// =====================
const timelineData = [
    {
        title: "Freelance Data Consultant",
        period: "Mar 2024 – Present",
        shortSummary: "Developed forecasting models and optimized Snowflake data warehouses for client analytics.",
        responsibilities: [
            "Built forecasting models in Python achieving 82% accuracy on seasonal trends.",
            "Developed Power BI dashboards processing 40,000+ customer feedback instances.",
            "Managed Snowflake warehouse optimizations boosting query performance by 25%.",
            "Designed CI/CD pipelines for ETL workflows reducing deployment time by 40%.",
            "Applied advanced Data Modeling for improved historical tracking and analysis."
        ]
    },
    {
        title: "Senior Analyst, Accenture",
        period: "Apr 2020 – Nov 2021",
        shortSummary: "Engineered real-time Azure ETL solutions and led Spark distributed pipelines in cloud environments.",
        responsibilities: [
            "Designed Change Data Capture (CDC) ETL pipelines enabling real-time data refresh.",
            "Engineered scalable Data Factory pipelines with multi-threaded Spark clusters.",
            "Applied SQL tuning and index optimization, improving processing efficiency by 35%.",
            "Created Data Warehouses on Azure Synapse reducing query execution by 20%.",
            "Facilitated Agile delivery, translating business needs into technical specifications."
        ]
    },
    {
        title: "Analyst, Accenture",
        period: "Apr 2018 – Mar 2020",
        shortSummary: "Built ETL pipelines using SSIS and developed reporting dashboards with Tableau and Power BI.",
        responsibilities: [
            "Crafted 20+ complex SQL queries supporting analytics in health and insurance industries.",
            "Integrated SSIS workflows orchestrating data transformations from diverse sources.",
            "Developed Python scripts for automating large scale data analysis and cleansing.",
            "Built interactive Tableau dashboards visualizing business KPIs.",
            "Debugged T-SQL queries in SSMS ensuring robust database integration."
        ]
    },
    {
        title: "Associate, Accenture",
        period: "Sep 2017 – Mar 2018",
        shortSummary: "Streamlined Oracle database integrations and automated monthly reporting pipelines for Amazon Marketplace.",
        responsibilities: [
            "Engineered automated Oracle DB ETL processes for 2M+ Amazon seller records.",
            "Created Excel VBA scripts saving 40+ hours monthly manual reporting time.",
            "Adopted Agile SDLC practices to streamline delivery cycles.",
            "Optimized complex T-SQL queries enhancing performance by 50%.",
            "Maintained codebase versioning with TFS."
        ]
    },
    {
        title: "Academic Project: OCR Automation",
        period: "Aug 2023 – Dec 2023",
        shortSummary: "Built a Flask application to automate OCR extraction of text from PDFs using Google Colab and Tesseract.",
        responsibilities: [
            "Developed a Flask web service managing PDF uploads and OCR processing.",
            "Leveraged Tesseract OCR library for accurate text extraction.",
            "Integrated Google Colab and Drive for scalable OCR workflows.",
            "Designed UI for easy document upload and output retrieval.",
            "Enabled automatic text formatting and error-checking mechanisms."
        ]
    },
    {
        title: "Academic Project: iOS Campus Explorer App",
        period: "Jan 2023 – Apr 2023",
        shortSummary: "Designed an iOS app helping new students explore campus facilities with maps and secure login features.",
        responsibilities: [
            "Built user authentication using Firebase backend services.",
            "Integrated dynamic campus maps using Apple MapKit APIs.",
            "Designed User-friendly navigation across campus zones.",
            "Implemented secure login, profile management, and emergency alerts.",
            "Optimized app for responsive UI across iOS devices."
        ]
    }
];

// =====================
// Timeline Builder
// =====================
function buildTimeline() {
    const container = document.getElementById('timelineContainer');
    timelineData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "timeline-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg w-[300px] shrink-0 relative flex flex-col justify-between";

        card.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${item.title}</h3>
            <p class="text-sm text-gray-500 mb-1">${item.period}</p>
            <p class="mb-2 text-gray-600 dark:text-gray-300">${item.shortSummary}</p>
            <button onclick="expandCard(${index})" class="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm transition">
                Know More →
            </button>
            <div id="details-${index}" class="hidden mt-4 text-gray-700 dark:text-gray-300 text-sm space-y-2">
                ${item.responsibilities.map(r => `<li>🔹 ${r}</li>`).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

function expandCard(index) {
    const details = document.getElementById(`details-${index}`);
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    } else {
        details.classList.add('hidden');
    }
}

// Build Timeline on Load
document.addEventListener('DOMContentLoaded', buildTimeline);
