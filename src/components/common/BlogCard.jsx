import Link from "next/link";
import Card from "@/components/common/Card";

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
      </Card>
  )
}