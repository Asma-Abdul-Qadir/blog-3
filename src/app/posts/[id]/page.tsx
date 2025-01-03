'use client'
import Image from 'next/image';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import blogPosts from '../../api/blog-posts/data';
import { BlogPost } from '../../types';

const PostPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find((p) => p.id === Number(id));
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [id]);

  const handleAddComment = (): void => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <p className="text-red-500 text-lg font-medium">Post not found!</p>
        <button
          onClick={() => router.push('/')}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
        
          className="rounded-md shadow-md"
        />
      )}
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        {post.content.split('\n').map((paragraph, index) => {
          if (/^\d+\.\s/.test(paragraph.trim())) {
            return (
              <p key={index} className="mb-4">
                <strong className="font-bold text-gray-800">{paragraph}</strong>
              </p>
            );
          } else if (paragraph.trim().startsWith('Conclusion')) {
            return (
              <h2 key={index} className="mt-6 mb-4 text-2xl font-bold text-gray-800">
                {paragraph}
              </h2>
            );
          }
          return (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800">Comments</h2>
        <div className="mt-6 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-md p-4 shadow-sm transition hover:shadow-lg"
              >
                <p className="text-gray-700">{comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
          )}
        </div>
        <div className="mt-6">
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Type your comment here..."
            className="w-full p-3 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md shadow transition focus:ring-2 focus:ring-blue-500"
          >
            Add Comment
          </button>
        </div>
      </section>
    </article>
  );
};

export default PostPage;