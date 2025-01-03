import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../app/types';

const BlogPostCard: React.FC<BlogPost> = ({ id, title, description, imageUrl }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex rounded overflow-hidden shadow-lg border">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
           style={{ backgroundImage: `url(${imageUrl})` }}>
        <Image src={imageUrl} alt={title} width={400} height={250} objectFit="cover" className="hidden" />
      </div>
      <div className="flex flex-col justify-between leading-normal p-4 flex-grow">
        <div className="mb-2">
          <div className="text-gray-900 font-bold text-xl mb-2">
            <Link href={`/posts/${id}`} className="hover:text-blue-500">
              {title}
            </Link>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          <Link
            href={`/posts/${id}`}
            className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
