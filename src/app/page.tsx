
import Head from "next/head";
import Banner from "../components/banner";
import BlogPostCard from "../components/blogpostcard";
import blogPosts from "./api/blog-posts/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlogBliss| Explore the new horizon</title>
        <link rel="icon" href="/Logo" />
      </Head>
      <main className="font-bodyFont">
        
        <Banner />

        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>
        </div>

        
      </main>
    </div>
  );
}
