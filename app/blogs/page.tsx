import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/data';
import Header from '@/components/LandingPage/Header';
import GlobalFooter from '@/components/GlobalFooter';

const BlogPage: React.FC = () => {
  const featuredPost = blogPosts.find(post => post.id === 7);
  const sidebarPosts = blogPosts.slice(0, 4);
  const popularPosts = blogPosts.filter(post => post.featured && post.id !== 7).slice(0, 2);

  return (
    <>
      <Header />
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            {featuredPost && (
              <Link href={`/blogs/${featuredPost.slug}`}>
                <div className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
                  <div className="relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {sidebarPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <div className="flex gap-4 p-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-3 leading-snug">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Most Popular Posts */}
        <div className="mt-16 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12" style={{ color: '#FD037E' }}>
            Most Popular Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {popularPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
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
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-10 lg:mt-12">
            <Link href="/blogs">
              <button className="px-12 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-pink-500 hover:text-pink-500 transition-colors duration-300 font-medium text-sm sm:text-base">
                VIEW ALL
              </button>
            </Link>
          </div>
        </div>

        {/* All Articles */}
        <div className="mt-16 lg:mt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12" style={{ color: '#FD037E' }}>
            All Articles
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Read More Button */}
          <div className="flex justify-center mt-10 lg:mt-12">
            <Link href="/blogs">
              <button 
                className="px-12 py-3 border-2 text-white rounded-full transition-colors duration-300 font-medium text-sm sm:text-base"
                style={{ borderColor: '#FD037E', backgroundColor: '#FD037E' }}
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
    <GlobalFooter />
    </>
  );
};

export default BlogPage;
