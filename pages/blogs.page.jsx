import dynamic from "next/dynamic";
import BlogCard from "../components/BlogCard/BlogCard";
const Footer = dynamic(() => import("../components/Footer"));
const Header = dynamic(() => import("../components/Header"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));

import styles from "../styles/blogs.module.css";

// Temporary Blog Content
const BlogContent = [
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },
  {
    title: "How to be a self-taught Full Stack Engineer",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque odio porro dolorum? Beatae quibusdam iure quam, tempora ipsam, facilis reprehenderit aliquam qui nemo facere nam officia esse perferendis ratione.",
    likes: "264",
    comments: "22",
    blogImg: "https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    authorName: "Anthony Simons",
    authorImg: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80",
    readTime: "4"
  },

]

const Blogs = () => {
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Blogs" siteName="Blogs" />
      <main className={` container ${styles.BlogSection}`}>
        <div className={styles.row}>
          {BlogContent.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              content={blog.BlogContent}
              likes={blog.likes}
              comments={blog.comments}
              blogImg={blog.blogImg}
              authorName={blog.authorName}
              authorImg={blog.authorImg}
              readTime={blog.readTime}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
