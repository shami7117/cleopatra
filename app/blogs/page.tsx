import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/data";
import Header from "@/components/LandingPage/Header";
import GlobalFooter from "@/components/GlobalFooter";

const BlogPage: React.FC = () => {
  const featuredPost = blogPosts.find((post) => post.id === 7);
  const sidebarPosts = blogPosts.slice(0, 4);
  const popularPosts = blogPosts
    .filter((post) => post.featured && post.id !== 7)
    .slice(0, 2);

  return (
    <>
      <Header />
      <div className="BlogPage_heroBanner__M7flb">
        <div className="BlogPage_heroBannerContainer__GqB-f">
          <div className="BlogPage_heroBannerSubDiv__pVlhK">
            {/* Featured Post */}
            <div className="BlogPage_blogContainer__ZQWzs">
              <div className="BlogPage_mainContent__rLgKm">
                <div className="BlogPage_firstRow__pO5Jz">
                  <div className="BlogPage_featuredSection__uG6Du">
                    {featuredPost && (
                      <Link
                        href={`/blogs/${featuredPost.slug}`}
                        className="BlogPage_largeCard__rgSow"
                      >
                        <div className="BlogPage_largeCardImage__+i+x9">
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className=""
                          />
                        </div>
                        <div className="BlogPage_largeCardContent__A0iAw">
                          <h3 className="BlogPage_largeCardTitle__qc6HA">
                            {featuredPost.title}
                          </h3>
                          <p className="BlogPage_largeCardDescription__qlzqw">
                            {featuredPost.excerpt}
                          </p>
                        </div>
                      </Link>
                    )}
                  </div>
                  {/* Sidebar */}
                  <div className="BlogPage_sidebar__wJiS3">
                    <div className="BlogPage_sidebarList__OdWZl">
                      {sidebarPosts.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blogs/${post.slug}`}
                          className="BlogPage_sidebarItem__04d2F"
                        >
                          <div className="BlogPage_sidebarImage__1HBQB">
                            <img
                              src={post.image}
                              alt={post.title}
                              className=""
                            />
                          </div>
                          <div className="BlogPage_sidebarContent__ibX2+">
                            <h4 className="BlogPage_sidebarTitle__aNJQp">
                              {post.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Most Popular Posts */}
                <div className="BlogPage_popularSection__blbjh">
                  <h2 className="BlogPage_sectionTitle__dfbdm">
                    Most Popular Posts
                  </h2>

                  <div className="BlogPage_popularGrid__kSbBx">
                    {popularPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blogs/${post.slug}`}
                        className="BlogPage_card__aPepa"
                      >
                        <div className="BlogPage_cardImage__6zpoE">
                          <img src={post.image} alt={post.title} className="" />
                        </div>
                        <div className="BlogPage_cardContent__cjNwq">
                          <h3 className="BlogPage_cardTitle__LDP0c">
                            {post.title}
                          </h3>
                          <p className="BlogPage_largeCardDescription__qlzqw">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* All Articles */}
                <div className="BlogPage_articlesSection__Wu4y3">
                  <h2 className="BlogPage_sectionTitle__dfbdm">All Articles</h2>

                  <div className="BlogPage_articlesGrid__GoULp">
                    {blogPosts.slice(0, 4).map((post) => (
                      <Link
                        key={post.id}
                        href={`/blogs/${post.slug}`}
                        className="BlogPage_card__aPepa"
                      >
                        <div className="BlogPage_cardImage__6zpoE">
                          <img src={post.image} alt={post.title} className="" />
                        </div>
                        <div className="BlogPage_cardContent__cjNwq">
                          <h3 className="BlogPage_cardTitle__LDP0c">
                            {post.title}
                          </h3>
                          <p className="BlogPage_largeCardDescription__qlzqw">
                            {post.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Read More Button */}
                  {/* <div className="flex justify-center mt-10 lg:mt-12">
                    <Link href="/blogs">
                      <button
                        className="px-12 py-3 border-2 text-white rounded-[10px] transition-colors duration-300 font-medium text-sm sm:text-base"
                        style={{
                          borderColor: "#FD037E",
                          backgroundColor: "#FD037E",
                        }}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div> */}
                </div>
                {/* View All Button */}
                <div className="BlogPage_readMoreContainer__eknHI">
                  <Link href="/blogs">
                    <button className="BlogPage_readMoreButton__E1ZE8">
                      VIEW ALL
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GlobalFooter />
    </>
  );
};

export default BlogPage;
