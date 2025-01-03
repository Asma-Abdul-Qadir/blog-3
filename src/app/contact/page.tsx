import Head from "next/head";

const Contact = () => {
  return (
    <div 
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/background1.webp')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Head>
        <title>Contact Us | My Blog</title>
      </Head>
      <div className="max-w-3xl w-full backdrop-blur-md bg-white/30 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center" style={{ color: '#0077B6' }}>Contact Us</h1>
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-600 p-3 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-600 p-3 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-400 p-3 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
