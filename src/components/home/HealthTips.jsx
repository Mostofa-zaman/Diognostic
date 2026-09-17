import { blogs } from "@/data/blogs";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import BlogCard from "../common/BlogCard";

export default function HealthTips() {
  return (
    <section className="section-py">
      <div className="container-xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Health Tips"
            title="From our medical blog"
            description="Practical, doctor-authored guidance on preventive care and everyday health."
          />
          <Button
            href="/blog"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            View All Articles →
          </Button>
        </div>
        
           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
      </div>
    </section>
  );
}
