import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/layout/Header"));
import styles from "../../styles/blogDetail.module.css";
import { Section } from "../../components/UI";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Index({ blogDetailData }) {
  const[loading,setLoading]= useState({status:false});
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
  setLoading({status:false});
  try {
    const toastId = toast.promise(
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/fetchDetailBlog/${blogDetailId}s`,
        {
          withCredentials: true,
        }
      ),
      {
        pending: 'Fetching data...',
        success: 'Data fetched successfully!',
        error: 'Error fetching data.',
      }
    );

    setLoading({ status: true });

    const { blogDetailId } = context.params;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/fetchDetailBlog/${blogDetailId}`,
    );
    setLoading({ status: false });
    toast.dismiss(toastId);
    return {
      props: {
        blogDetailData: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        blogDetailData: {},
      },
    };
  }
}
