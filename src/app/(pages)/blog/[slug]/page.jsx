import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailsPage() {

  return (
    <article className="section-py">
      <div className="container-xl max-w-3xl">
        <Link href="/blog" className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-teal-700">
          <ArrowLeft size={15} /> Back to Blog
        </Link>
      </div>
    </article>
  )
}