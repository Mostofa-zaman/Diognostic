import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "@/data/blogs";
import Label from "@/components/common/Label";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}


export default function BlogDetailsPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <article className="section-py">
      <div className="container-xl max-w-3xl">
        <Link href="/blog" className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700">
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        <Label tone="teal" className="mt-6">{blog.category}</Label>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
          {blog.title}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-navy-400">
          <span>{blog.author}</span>
          <span>·</span>
          <span>
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="mt-8 h-72 w-full rounded-2xl object-cover shadow-card md:h-96"
        />

        <p className="mt-8 text-lg leading-relaxed text-navy-600">{blog.content}</p>
      </div>

      {related.length > 0 && (
        <div className="container-xl mt-16 max-w-6xl border-t border-navy-100 pt-16">
          <h2 className="font-display text-2xl font-semibold text-navy-900">More Articles</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((b) => (
              <BlogCard key={b.slug} blog={b} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
