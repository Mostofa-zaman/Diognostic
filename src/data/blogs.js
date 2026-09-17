export const blogs = [
  {
    slug: "importance-of-regular-health-checkups",
    title: "The Importance of Regular Health Checkups",
    category: "Preventive Care",
    author: "Dr. Rafiqul Islam",
    date: "2026-06-12",
    excerpt:
      "Regular health checkups help detect potential health issues before they become serious. Here's why annual screening matters at every age.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    content:
      "Routine health checkups play a central role in catching conditions early, when they are most treatable. Even without symptoms, an annual screening can reveal changes in blood pressure, cholesterol or blood sugar long before they cause noticeable problems. Preventive screening is especially important for adults over 40, individuals with a family history of chronic disease, and anyone managing an existing condition. Building a habit of regular checkups, paired with open conversation with your physician, is one of the simplest ways to protect long-term health.",
  },
  {
    slug: "when-to-check-blood-sugar",
    title: "When Should You Check Your Blood Sugar?",
    category: "Diabetes Care",
    author: "Dr. Tahmina Sultana",
    date: "2026-05-28",
    excerpt:
      "Understanding when and how often to test your blood sugar can make a real difference in managing or preventing diabetes.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop",
    content:
      "Blood sugar testing frequency depends on individual risk factors and existing conditions. For most healthy adults, an annual fasting blood sugar test is recommended as part of a routine checkup. Those with a family history of diabetes, higher body weight, or symptoms such as frequent thirst and fatigue should test more regularly. For individuals already diagnosed with diabetes, testing frequency is typically guided by a treating physician and may range from several times a day to a few times a week depending on the treatment plan.",
  },
  {
    slug: "understanding-your-cbc-report",
    title: "Understanding Your CBC Report",
    category: "Lab Tests",
    author: "Dr. Kamrul Rahman",
    date: "2026-05-10",
    excerpt:
      "A Complete Blood Count report can look overwhelming at first glance. Here's a simple breakdown of what each value means.",
    image:
      "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=800&auto=format&fit=crop",
    content:
      "A CBC report measures several components of your blood, including red blood cells, white blood cells, hemoglobin and platelets. Red blood cell counts and hemoglobin levels help identify anemia, while white blood cell counts can indicate infection or inflammation. Platelet counts are important for assessing your blood's ability to clot normally. While reference ranges vary slightly between labs, any values flagged as high or low should always be discussed with your physician rather than interpreted alone.",
  },
  {
    slug: "heart-health-tips",
    title: "Simple Heart Health Tips for Every Age",
    category: "Cardiology",
    author: "Dr. Kamrul Rahman",
    date: "2026-04-22",
    excerpt:
      "Small, consistent lifestyle habits can significantly reduce your long-term risk of heart disease.",
    image:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=800&auto=format&fit=crop",
    content:
      "Heart health is shaped by daily habits more than occasional effort. Regular physical activity, a balanced diet low in processed foods, and adequate sleep all contribute to healthy blood pressure and cholesterol levels. Avoiding smoking and moderating salt and sugar intake further reduce cardiovascular risk. For anyone over 40, or those with a family history of heart disease, periodic screening with an ECG or lipid profile is a practical way to monitor heart health over time.",
  },
  {
    slug: "benefits-of-preventive-screening",
    title: "Benefits of Preventive Health Screening",
    category: "Preventive Care",
    author: "Dr. Rafiqul Islam",
    date: "2026-04-05",
    excerpt:
      "Preventive screening shifts the focus from treating illness to catching risk factors early, often before symptoms appear.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop",
    content:
      "Preventive screening programs are designed to identify risk factors before disease develops, rather than waiting for symptoms to appear. This proactive approach often leads to simpler, less invasive treatment and better long-term outcomes. Health packages that combine several relevant tests, tailored to age and gender, are an efficient way to cover common risk areas in a single visit. Choosing a screening plan appropriate to your age group is one of the most effective preventive health decisions available.",
  },
  {
    slug: "womens-health-screening-guide",
    title: "A Woman's Guide to Health Screening",
    category: "Women's Health",
    author: "Dr. Fahmida Akter",
    date: "2026-03-18",
    excerpt:
      "From routine bloodwork to reproductive health screening, here's what women should prioritize at different life stages.",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop",
    content:
      "Women's health screening needs shift across different life stages. In their 20s and 30s, routine bloodwork and reproductive health checkups form the foundation of preventive care. Approaching and during middle age, screening often expands to include thyroid function, bone health and cardiovascular risk assessment. Regular gynecological checkups remain important throughout adulthood. A tailored women's health package can simplify this process by grouping the most relevant tests for each stage into a single, convenient visit.",
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}
