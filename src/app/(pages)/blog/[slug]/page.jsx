import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Label from "@/components/common/Label";
import { getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";


export default function BlogDetailsPage({ params }) {
      const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();


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
    </article>
  )
}