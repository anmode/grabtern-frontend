import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/Footer"));

function ErrorPage() {
    return (
        <>
            <div className={styles.mainContainer} >
                <div className={styles.imageContainer} >
                    <img
                        src="/Errorr.svg"
                        alt="bg"
                    />
                </div>
                <div className={`${styles.mainSection}`}>
                    <div className={styles.text1}>
                        <div className={styles.text2}>
                            <h1>Error page 404</h1>
                            <p>Lorem ipsum dolor sit amet. Est voluptas eaque vel nihil fugiat aut nemo aspernatur id similique repudiandae et laborum voluptatibus? Ea tenetur illo est ipsum possimus eos velit veritatis est deleniti illum quo velit neque ut enim laborum.</p>
                        </div>
                        <div className={styles.btn}>
                            <button className="md:tw-w-auto tw-h-16 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold">
                                <Link href="/">Go Back</Link>
                            </button>
                        </div>
                    </div>
                    <div className={styles.image2} >
                        <img
                            src="/404.svg"
                            alt="404"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default ErrorPage;
