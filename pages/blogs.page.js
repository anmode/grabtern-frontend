import { useState } from "react";
import dynamic from "next/dynamic";
import { LuSearch } from "react-icons/lu";
import BlogCard from "../components/blog";
const Header = dynamic(() => import("../components/layout/Header"));
import { Section, Input } from "../components/UI";
import axios from "axios";

function Blogs({ blogsData }) {
  const [query, setQuery] = useState("");

  const filteredBlogs =
    blogsData.length !== 0
      ? blogsData?.filter(
          (blog) =>
            blog?.name.toLowerCase().includes(query.toLowerCase()) ||
            blog?.description.toLowerCase().includes(query.toLowerCase()),
        )
      : [];
  return (
    <>
      <Header />
      <main>
        <Section
          kicker="Our blogs"
          heading="Find all blogs Here"
          align="center"
          className="tw-mt-10"
        >
          {/* input */}
          <div className="md:tw-w-96 tw-mb-4 tw-ml-auto">
            <Input
              Icon={LuSearch}
              type="text"
              placeholder="Search blogs..."
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {/* <input
            type="text"
            placeholder="Search blogs..."
            className="search"
            onChange={(e) => setQuery(e.target.value)}
          /> */}
          </div>
          {/* blogs cards */}

          <div className="tw-grid tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3">
            {filteredBlogs.length === 0 ? (
              <div className="tw-text-black tw-text-xl ">
                <h1>No match found</h1>
              </div>
            ) : (
              blogsData
                .filter(
                  (blog) =>
                    blog.name.toLowerCase().includes(query.toLowerCase()) ||
                    blog.internAt.toLowerCase().includes(query.toLowerCase()) ||
                    blog.currentStatus
                      .toLowerCase()
                      .includes(query.toLowerCase()),
                )

                .map((blog) => (
                  <a href={`/blogDetail/${blog.blogDetailId}`} key={blog._id}>
                    {
                      <BlogCard
                        blog={blog}
                        link={`/blogDetail/${blog.blogDetailId}`}
                      />
                    }
                  </a>
                ))
            )}
          </div>
        </Section>
      </main>
    </>
  );
}

export default Blogs;

export async function getServerSideProps() {
  try {
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/fetchAllBlogs`;
    const { data } = await axios.get(URL);
    return {
      props: {
        blogsData: data,
      },
    };
  } catch (error) {
    console.error("Error in fetching blogs ", error);
    return {
      props: {
        blogsData: [],
      },
    };
  }
}
