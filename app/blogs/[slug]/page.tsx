import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/data';
interface BlogDetailProps {
  post?: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
  };
}
import Header from '@/components/LandingPage/Header';
import GlobalFooter from '@/components/GlobalFooter';
const BlogDetailPage: React.FC<BlogDetailProps> = ({ post }) => {
  // Default to the featured post if no post is provided
  const defaultPost = {
    id: 7,
    slug: '10-quick-cleaning-hacks-busy-professionals',
    title: '10 Quick Cleaning Hacks For Busy Professionals',
    excerpt: 'Pressed for time? These simple tricks will keep your home fresh and stress-free—without eating up your day.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&h=600&fit=crop',
    category: 'Tips',
    author: 'Jessica Martinez',
    date: '2024-03-01',
    readTime: '6 min read'
  };

  const currentPost = post || defaultPost;

  const cleaningHacks = [
    {
      number: 1,
      title: 'The 2-Minute Counter Reset',
      description: 'Before bed, take just two minutes to clear and wipe kitchen and bathroom counters with a microfiber cloth. It instantly refreshes the space.'
    },
    {
      number: 2,
      title: 'Microwave Magic',
      description: 'Heat a bowl of water with lemon slices for 3 minutes. Steam loosens stains, and you can wipe the inside clean effortlessly.'
    },
    {
      number: 3,
      title: 'The Shoe Drop Zone',
      description: 'Keep a rack or basket near the door. Shoes off = less dirt tracked around the house.'
    },
    {
      number: 4,
      title: 'The "10-Minute Tidy" Rule',
      description: 'Set a timer and tackle one room, putting away items in the living room or bedroom. You will wake up to less visual clutter.'
    },
    {
      number: 5,
      title: 'Multi-Task Dusting',
      description: 'While on a phone call, grab a cloth and tackle shelves or baseboards. It is quick, mindless, and efficient.'
    },
    {
      number: 6,
      title: 'Bathroom Wipe-Down',
      description: 'Keep disinfectant wipes handy. A daily 30-second sink + faucet wipe prevents buildup and saves hours later.'
    },
    {
      number: 7,
      title: 'The "Random Stuff" Trick',
      description: 'Have one basket for clothes and one for "random stuff." This makes tidying up in a hurry a breeze.'
    },
    {
      number: 8,
      title: 'Use Doormats Wisely',
      description: 'One outside, one inside. This simple hack stops dirt and dust big time!'
    },
    {
      number: 9,
      title: 'Freshen Fabrics with Baking Soda',
      description: 'Sprinkle baking soda on sofas or carpets, leave for 15 minutes, then vacuum. Instant freshness!'
    },
    {
      number: 10,
      title: 'Delegate to CleoCrew',
      description: 'For ultimate hack? Let the professionals handle the deep cleaning. Book a CleoCrew pro in under 60 seconds and take back your time.'
    }
  ];
  const popularPosts = blogPosts.filter(post => post.featured && post.id !== 7).slice(0, 4);

  return (
    <>
      <Header />
    <div className="min-h-screen bg-white">
     

     

      {/* Hero Section */}
      <div className="relative" style={{ backgroundColor: '#C70163' }}>
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
           {/* Back to Blog Link */}
      <div className="container mx-auto ">
        <a href="/blogs" className="inline-flex items-center text-white hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-[18px] font-medium">Back to blog</span>
        </a>
      </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {currentPost.title}
              </h1>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed">
                {currentPost.excerpt}
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
                <img 
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16 max-w-7xl">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            When work deadlines and family responsibilities pile up, cleaning often feels like the last thing you have time for. 
            But a messy home can add to stress, making it harder to unwind when you do get home. So, what's the solution?
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <strong>Smart, quick hacks.</strong>
          </p>
        </div>

        {/* Cleaning Hacks List */}
        <div className="space-y-8">
          {cleaningHacks.map((hack) => (
            <div key={hack.number} className="border-l-4 border-[#FD037E] pl-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Hack #{hack.number}: {hack.title}
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {hack.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Content */}
        <div className="mt-12 space-y-6">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            A clean home doesn't have to take hours. With these simple hacks, you can maintain a tidy space even on your 
            busiest days. Each one is designed to save you time and effort without sacrificing cleanliness. Remember, consistency is the secret—
            small daily actions add up to a spotless space.
          </p>
          
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            But you don't have to do it all on your own. When life gets crazy cleaning, the CleoCrew is just a click away. Our 
            experienced professionals can handle the heavy lifting, so you can spend more time on the things that matter most. 
            Book a session today, and say goodbye to the cleaning overwhelm. Your home—and your peace of mind—will thank you. 
            Stay clean, stay productive, and most importantly, <strong>stay stress-free.</strong>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button 
            className="px-8 sm:px-12 py-3 sm:py-4 text-white rounded-full transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            style={{ backgroundColor: '#FD037E' }}
          >
            BOOK YOUR NEXT CLEANING NOW
          </button>
        </div>



        {/* Most Popular Posts Section */}
        <div className="mt-16 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12" style={{ color: '#E91E8C' }}>
Related Articles          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {popularPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-10 lg:mt-12">
            <button className="px-12 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 font-medium text-sm sm:text-base">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
  
    </div>
    <GlobalFooter />
    </>
  );
};

export default BlogDetailPage;