import DepartmentsHero from "@/components/departmentsPage/DepartmentHero";
import DepartmentsList from "@/components/departmentsPage/DepartmentsList";

export const metadata = {
  title: "Departments",
  description:
    "Explore all 15 medical departments at S. Alam Digital Diagnostic Center, from cardiology to pathology.",
};

export default function DepartmentsPage() {
  return (
    <>
    <DepartmentsHero/>
    <DepartmentsList/>
    
    </>
  )
}