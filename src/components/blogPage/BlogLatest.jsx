import { blogs } from "@/data/blogs";
import BlogCard from "../common/BlogCard";
import SectionHeading from "../common/SectionHeading";



export default function BlogLatest() {
  return (
     <section className="section-py">
        <div className="container-xl">
          <SectionHeading eyebrow="Latest Articles" title="From our medical blog" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      </section>
  );
}
