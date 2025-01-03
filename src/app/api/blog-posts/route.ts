import { NextResponse } from 'next/server';
import blogPosts from './data';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id'); // Get the 'id' query parameter

    if (id) {
        // Find the blog post by ID
        const blogPost = blogPosts.find((post) => post.id === parseInt(id, 10));

        if (blogPost) {
            return NextResponse.json(blogPost);
        } else {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }
    }

    // If no 'id' is provided, return all blog posts
    return NextResponse.json(blogPosts);
}
