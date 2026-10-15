import { testCategories, tests } from "@/data/tests";
import TestDirectory from "./TestDirectory";

export default function TestContent() {
  return (
       <section className="section-py">
        <div className="container-xl">
          <TestDirectory tests={tests} categories={testCategories} />
        </div>
      </section>
  )
  
}