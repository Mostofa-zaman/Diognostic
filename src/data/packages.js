export const packages = [
  {
    slug: "basic-health-checkup",
    name: "Basic Health Checkup",
    audience: "Adults 18+",
    testCount: 6,
    tests: ["CBC", "Blood Sugar (Fasting)", "Urine R/E", "Lipid Profile", "Liver Function Test", "Kidney Function Test"],
    price: "৳ 2,500",
    originalPrice: "৳ 3,200",
  },
  {
    slug: "executive-health-checkup",
    name: "Executive Health Checkup",
    audience: "Working Professionals",
    testCount: 8,
    tests: [
      "CBC",
      "HbA1c",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "ECG",
      "Chest X-Ray",
    ],
    price: "৳ 5,500",
    originalPrice: "৳ 7,200",
  },
  {
    slug: "womens-health-package",
    name: "Women's Health Package",
    audience: "Women 20+",
    testCount: 7,
    tests: ["CBC", "Thyroid Profile", "Blood Sugar (Fasting)", "Urine R/E", "Iron Studies", "Pap Smear", "Ultrasonography (Pelvis)"],
    price: "৳ 4,800",
    originalPrice: "৳ 6,300",
  },
  {
    slug: "senior-citizen-package",
    name: "Senior Citizen Package",
    audience: "Age 55+",
    testCount: 9,
    tests: [
      "CBC",
      "Blood Sugar (Fasting)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile",
      "ECG",
      "Chest X-Ray",
      "PSA (Men) / CA-125 (Women)",
    ],
    price: "৳ 6,200",
    originalPrice: "৳ 8,000",
  },
];

export function getPackageBySlug(slug) {
  return packages.find((p) => p.slug === slug);
}
