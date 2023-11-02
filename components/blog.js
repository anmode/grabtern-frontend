import React from "react";

const blogCard = ({ blog, link }) => {
  return (
    <div className="tw-rounded-lg tw-shadow-lg tw-bg-white">
      <img
        src={blog.image}
        alt="Blog Image"
        className="tw-rounded-t-lg tw-w-full"
      />
      <div className="tw-p-4 tw-flex tw-flex-col tw-gap-4">
        <h2 className="tw-text-2xl tw-font-semibold">{blog.name}</h2>
        <p className="tw-text-gray-600 tw-text-sm">
          Published on {blog.createdAt}
        </p>
        <p className="tw-text-gray-700 tw-text-base">{blog.description}</p>
        <a
          href={`/blogDetail/${blog.blogDetailId}`}
          className="tw-bg-sky-500 tw-text-white tw-py-3 tw-px-6 tw-rounded-xl tw-w-fit"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
export default blogCard;
