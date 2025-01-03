import Head from 'next/head';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-cover bg-center p-8"
         style={{ backgroundImage: 'url("/images/background2.webp")', color: '#00008B' }}>
      <Head>
        <title>About Us | BlogBliss</title>
      </Head>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-center mb-10">
          Welcome to BlogBliss! Our mission is to inspire, inform, and entertain our readers through compelling stories,
          insightful analyses, and innovative ideas that span across the vast field of design and technology.
        </p>

        <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Meet the Mind Behind the Magic: Asma</h2>
          <p className="text-lg mb-6">
            Hello! I&apos;m Asma, the passionate UI/UX Designer behind BlogBliss.
             I&apos;ve dedicated my time to crafting beautiful and user-friendly interfaces that enhance user
            experiences and bring ideas to life.
          </p>
          <p className="text-lg mb-6">
            My journey in design began at the Governor House IT Program, where I discovered my love for turning complex
            problems into simple, accessible solutions. My approach blends aesthetic precision with functional clarity, driven
            by a relentless pursuit of design excellence.
          </p>
          
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Why Follow Us?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovative Design Insights: Stay ahead of the curve with cutting-edge design trends and techniques that I explore through hands-on projects and collaborations.</li>
            <li>Practical Tips and Tricks: From DIY design hacks to professional advice, gain valuable insights that can transform your creative process.</li>
            <li>Inspiring Stories: Read about the journeys of renowned designers and rising stars in the industry, as well as our own successes and challenges.</li>
            <li>Community Engagement: Join a community of like-minded enthusiasts who are shaping the future of design. Share, learn, and grow with us as we explore the fascinating world of UI/UX design.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
