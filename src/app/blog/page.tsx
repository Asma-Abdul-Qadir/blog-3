import Head from 'next/head';
import BlogPostCard from '../../components/blogpostcard';
import blogPosts from '../../app/api/blog-posts/data';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <Head>
        <title>Blog | My Blog</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
