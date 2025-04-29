// 🚀 Skills Injection (with actual ratings)
const skills = [
  { name: "SQL", level: 95 },
  { name: "Python", level: 85 },
  { name: "Power BI", level: 80 },
  { name: "Azure Synapse", level: 75 },
  { name: "ETL Pipelines", level: 90 },
  { name: "Data Modeling", level: 85 },
  { name: "Snowflake", level: 80 },
  { name: "Tableau", level: 75 },
  { name: "Git/GitHub", level: 80 },
  { name: "AWS S3", level: 70 },
  { name: "Java", level: 70 },
  { name: "Cloud Solutions", level: 75 }
];

const skillsList = document.getElementById('skillsList');

skills.forEach(skill => {
  const skillDiv = document.createElement('div');
  skillDiv.className = "space-y-2";

  skillDiv.innerHTML = `
    <p class="font-semibold text-gray-800">${skill.name}</p>
    <div class="w-full bg-gray-200 rounded-full h-3">
      <div class="bg-emerald-500 h-3 rounded-full progress" style="width: ${skill.level}%; transition: width 1s ease;"></div>
    </div>
  `;
  skillsList.appendChild(skillDiv);
});

// 🚀 Timeline Data Injection (proper separation)
const timelineData = [
  {
    title: "Freelance Data Consultant",
    duration: "March 2024 - Present",
    image: "assets/images/logos/freelance.PNG",
    shortDesc: "Crafted predictive models, Snowflake tuning, CI/CD pipelines, customer analytics dashboards.",
    responsibilities: [
      "Built forecasting models with 82% accuracy for budgeting.",
      "Optimized Snowflake warehouse performance by 25%.",
      "Created Power BI dashboards for 40k+ customer feedback.",
      "Engineered robust CI/CD pipelines reducing ETL time by 40%."
    ]
  },
  {
    title: "Academic Project - Institutional Data OCR",
    duration: "Aug 2023 - Dec 2023",
    image: "assets/images/logos/university.PNG",
    shortDesc: "Built Python OCR service for university archives using Tesseract, Flask, and Google Drive.",
    responsibilities: [
      "Created end-to-end text extraction pipeline from PDFs.",
      "Automated document upload and processing workflows.",
      "Streamlined OCR accuracy improvements.",
      "Secured document storage using Google Cloud."
    ]
  },
  {
    title: "Academic Project - iOS University Explorer App",
    duration: "Jan 2023 - April 2023",
    image: "assets/images/logos/university.PNG",
    shortDesc: "Built iOS app with Firebase login, campus Maps, and real-time mailing features for university.",
    responsibilities: [
      "Built iOS UI and integrated Firebase Auth.",
      "Real-time navigation system integration with Maps.",
      "Secured login system with OTP authentication.",
      "Collaborated on testing and final launch."
    ]
  },
  {
    title: "Accenture - Application Development Senior Analyst",
    duration: "April 2020 - November 2021",
    image: "assets/images/logos/accenture.PNG",
    shortDesc: "Built Data Warehouses, SQL tuning, Azure ETL pipelines across Health, Media, and Transport domains.",
    responsibilities: [
      "Optimized 50+ ETL packages reducing data time by 50%.",
      "Built CDC-based Spark pipelines in Azure.",
      "Documented full data lineage for critical systems.",
      "Automated reporting with Python (Pandas, NumPy)."
    ]
  },
  {
    title: "Accenture - Application Development Analyst",
    duration: "April 2018 - March 2020",
    image: "assets/images/logos/accenture.PNG",
    shortDesc: "Developed SSIS pipelines, Azure Synapse analytics, Disney project front-end debugging via SQL tuning.",
    responsibilities: [
      "Engineered scalable ETL pipelines (Azure + SSIS).",
      "Optimized front-end SQL debugging for Disney websites.",
      "Crafted secure data governance for healthcare clients.",
      "Designed Data Warehouse Architecture for AON Health."
    ]
  },
  {
    title: "Accenture - Application Development Associate",
    duration: "Sept 2017 - March 2018",
    image: "assets/images/logos/accenture.PNG",
    shortDesc: "Oracle DB design for Amazon Seller Central; automated reports saving 40 hours monthly.",
    responsibilities: [
      "Built Oracle Database for 2M+ seller records.",
      "Automated monthly reports using Excel VBA Macros.",
      "Implemented SSIS ETL workflows with performance logging.",
      "Participated in Agile-based delivery cycles."
    ]
  }
];

const timelineContainer = document.getElementById('timelineContainer');

// Inject Timeline Cards
timelineData.forEach((item, index) => {
  const card = document.createElement('div');
  card.className = "bg-white rounded-lg shadow-lg p-6 w-[300px] flex flex-col timelinePop relative transition-transform hover:scale-105";

  card.innerHTML = `
    <img src="${item.image}" alt="Logo" class="h-12 mx-auto mb-4 object-contain" />
    <h3 class="text-xl font-bold text-center text-gray-800 mb-2">${item.title}</h3>
    <p class="text-sm text-gray-500 text-center mb-2">${item.duration}</p>
    <p class="text-gray-700 text-sm">${item.shortDesc}</p>
    <button class="text-emerald-500 font-bold mt-4" onclick="expandResponsibilities(this, ${index})">⬇️ Know More</button>
    <ul id="responsibility-${index}" class="hidden list-disc mt-4 pl-5 text-sm text-left text-gray-600"></ul>
  `;

  timelineContainer.appendChild(card);
});

// Expand / Collapse Timeline Cards
function expandResponsibilities(button, index) {
  const ul = document.getElementById(`responsibility-${index}`);
  if (ul.classList.contains('hidden')) {
    ul.innerHTML = timelineData[index].responsibilities.map(item => `<li>${item}</li>`).join('');
    ul.classList.remove('hidden');
    button.innerText = "⬆️ Show Less";
  } else {
    ul.innerHTML = '';
    ul.classList.add('hidden');
    button.innerText = "⬇️ Know More";
  }
}

// Scroll Buttons
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

scrollLeftBtn.addEventListener('click', () => {
  timelineContainer.scrollBy({ left: -300, behavior: 'smooth' });
});
scrollRightBtn.addEventListener('click', () => {
  timelineContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('progressbar').style.width = scrolled + "%";
});

