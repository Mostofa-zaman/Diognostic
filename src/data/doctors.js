export const doctors = [
  {
    slug: "dr-md-kamrul-rahman",
    name: "Dr. Md. Kamrul Rahman",
    degree: "MBBS, FCPS (Cardiology)",
    specialty: "Consultant Cardiologist",
    department: "cardiology",
    experience: "12+ Years",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
    days: "Saturday – Thursday",
    time: "5:00 PM – 9:00 PM",
    fee: "৳ 1,000",
    bio: "Dr. Kamrul Rahman is a consultant cardiologist with over a decade of experience in diagnosing and managing complex cardiac conditions. He specializes in preventive cardiology and non-invasive cardiac diagnostics.",
    expertise: ["Coronary Artery Disease", "Hypertension Management", "Echocardiography", "Preventive Cardiology"],
  },
  {
    slug: "dr-fahmida-akter",
    name: "Dr. Fahmida Akter",
    degree: "MBBS, DGO, FCPS (Gynae & Obs)",
    specialty: "Consultant Gynecologist",
    department: "gynecology",
    experience: "10+ Years",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format&fit=crop",
    days: "Sunday – Thursday",
    time: "4:00 PM – 8:00 PM",
    fee: "৳ 900",
    bio: "Dr. Fahmida Akter provides comprehensive women's health services, from prenatal care to gynecological screening, with a compassionate, patient-first approach.",
    expertise: ["Prenatal Care", "High-Risk Pregnancy", "Menstrual Disorders", "Preventive Screening"],
  },
  {
    slug: "dr-shahriar-hossain",
    name: "Dr. Shahriar Hossain",
    degree: "MBBS, MD (Neurology)",
    specialty: "Consultant Neurologist",
    department: "neurology",
    experience: "14+ Years",
    photo:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
    days: "Saturday – Wednesday",
    time: "6:00 PM – 9:00 PM",
    fee: "৳ 1,200",
    bio: "Dr. Shahriar Hossain treats a wide range of neurological disorders with a focus on early diagnosis using advanced imaging and clinical evaluation.",
    expertise: ["Stroke Management", "Epilepsy", "Migraine", "Nerve Conduction Studies"],
  },
  {
    slug: "dr-nusrat-jahan",
    name: "Dr. Nusrat Jahan",
    degree: "MBBS, DCH, FCPS (Pediatrics)",
    specialty: "Consultant Pediatrician",
    department: "pediatrics",
    experience: "9+ Years",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop",
    days: "Saturday – Thursday",
    time: "10:00 AM – 1:00 PM",
    fee: "৳ 800",
    bio: "Dr. Nusrat Jahan is dedicated to child healthcare, from newborn screening to adolescent care, with a gentle and family-friendly approach.",
    expertise: ["Newborn Care", "Vaccination", "Growth Monitoring", "Childhood Infections"],
  },
  {
    slug: "dr-imran-kabir",
    name: "Dr. Imran Kabir",
    degree: "MBBS, MS (Orthopedics)",
    specialty: "Consultant Orthopedic Surgeon",
    department: "orthopedics",
    experience: "15+ Years",
    photo:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=600&auto=format&fit=crop",
    days: "Sunday – Friday",
    time: "5:30 PM – 9:00 PM",
    fee: "৳ 1,000",
    bio: "Dr. Imran Kabir specializes in the diagnosis and non-surgical management of bone, joint and spine conditions, with focus on sports injuries.",
    expertise: ["Joint Pain", "Fracture Care", "Sports Injury", "Spine Disorders"],
  },
  {
    slug: "dr-tahmina-sultana",
    name: "Dr. Tahmina Sultana",
    degree: "MBBS, MD (Endocrinology)",
    specialty: "Consultant Endocrinologist",
    department: "endocrinology",
    experience: "11+ Years",
    photo:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=600&auto=format&fit=crop",
    days: "Saturday – Wednesday",
    time: "4:30 PM – 8:00 PM",
    fee: "৳ 1,000",
    bio: "Dr. Tahmina Sultana focuses on diabetes, thyroid disorders and metabolic conditions, helping patients manage long-term hormonal health.",
    expertise: ["Diabetes Management", "Thyroid Disorders", "PCOS", "Obesity Management"],
  },
  {
    slug: "dr-rafiqul-islam",
    name: "Dr. Rafiqul Islam",
    degree: "MBBS, FCPS (Medicine)",
    specialty: "Consultant Physician",
    department: "medicine",
    experience: "18+ Years",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop",
    days: "Saturday – Thursday",
    time: "5:00 PM – 9:00 PM",
    fee: "৳ 800",
    bio: "Dr. Rafiqul Islam is a senior internal medicine specialist known for thorough diagnosis and patient-centered treatment plans for chronic illnesses.",
    expertise: ["Diabetes", "Hypertension", "Infectious Disease", "General Checkups"],
  },
  {
    slug: "dr-sabbir-ahmed",
    name: "Dr. Sabbir Ahmed",
    degree: "MBBS, MS (Gastroenterology)",
    specialty: "Consultant Gastroenterologist",
    department: "gastroenterology",
    experience: "13+ Years",
    photo:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop",
    days: "Sunday – Thursday",
    time: "6:00 PM – 9:30 PM",
    fee: "৳ 1,100",
    bio: "Dr. Sabbir Ahmed provides expert diagnosis and management of digestive disorders, including endoscopic and colonoscopic evaluation.",
    expertise: ["Endoscopy", "Colonoscopy", "Liver Disease", "IBS & IBD"],
  },
];

export function getDoctorBySlug(slug) {
  return doctors.find((d) => d.slug === slug);
}

export function getDoctorsByDepartment(department) {
  return doctors.filter((d) => d.department === department);
}
