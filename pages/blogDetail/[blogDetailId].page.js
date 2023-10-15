import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/layout/Header"));
import styles from "../../styles/blogDetail.module.css";
import { Section } from "../../components/UI";
import axios from "axios";

function Index({ blogDetailData }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Section
          kicker={
            blogDetailData.length === 0
              ? ""
              : `Date: ${blogDetailData.createdAt}`
          }
          heading={
            blogDetailData.length === 0
              ? "404 Blog not found!"
              : blogDetailData.name
          }
          align="center"
          className="tw-mt-10"
        >
          {blogDetailData.length === 0 ? null : (
            <p className={styles.p}>{blogDetailData.description}</p>
          )}
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
    return {
      props: {
        blogDetailData: data,
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
