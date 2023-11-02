import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/layout/Header"));
import styles from "../../styles/blogDetail.module.css";
import { Section } from "../../components/UI";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

function Index({ blogDetailData }) {
  return (
    <>
      <Head>
        <title>GrabTern | Blogs</title>
      </Head>
      <Header />
      <main>
        <Section>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-mb-[10rem]">
            {/* Title of blog */}
            <p className="tw-font-bold tw-text-black tw-text-4xl">
              {blogDetailData.name}
            </p>
            <div className="tw-flex tw-flex-col-1 tw-gap-[0.5rem] tw-pt-[2rem]">
              <span className="tw-pt-[0.2rem]">
                <FaUserCircle />
              </span>
              <p className="tw-font-normal">
                Created at {blogDetailData.createdAt}
              </p>
            </div>
            {/* <div className="sm:tw-flex-row tw-flex tw-gap-5 tw-mt-[3rem]">
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                GrabTern
              </button>
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                Open Source
              </button>
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                Contributors
              </button>
              <button className="tw-rounded-full tw-py-2 tw-px-4 tw-bg-gray-300 tw-text-center tw-font-medium hover:tw-bg-gray-400 hover:tw-border-4">
                Opportunity
              </button>
            </div> */}
            <div className="tw-mt-[3rem] hover:tw-bg-gray-300 hover:tw-border-4 tw-border-black  tw-rounded-lg tw-border-gray-400 tw-border-2 tw-p-5">
              <Image
                className=""
                src={blogDetailData.image}
                alt="img"
                width={700}
                height={700}
              />
            </div>
            <p className="tw-subpixel-antialiased tw-leading-relaxed tw-tracking-normal tw-text-black tw-mt-[5rem]">
              {blogDetailData.description}
            </p>
          </div>
        </Section>
      </main>
    </>
  );
}

export default Index;

export async function getServerSideProps(context) {
  try {
    const { blogDetailId } = context.params;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/fetchDetailBlog/${blogDetailId}`,
    );
    console.log(data);
    return {
      props: {
        blogDetailData: data[0],
      },
    };
  } catch (error) {
    console.error("server side props error ", error);
    return {
      props: {
        blogDetailData: {},
      },
    };
  }
}
