import Link from "next/link";
import Card from "@/components/common/Card";
import Label from "@/components/common/Label";

export default function BlogCard({ blog }) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/blog/${blog.slug}`} className="block overflow-hidden">
        <div className="aspect-[16/10] w-full overflow-hidden bg-sand-100">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <Label tone="teal">{blog.category}</Label>
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-navy-900 hover:text-teal-700">
            {blog.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy-500">
          {blog.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4 text-xs text-navy-400">
          <span>{blog.author}</span>
          <span>
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Card>
  );
}
