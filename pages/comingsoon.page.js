import React from 'react'
import { useRouter } from 'next/router';
import styles from "../styles/404.module.css";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { comingSoon } from '../public/assets';
import { FaTwitter } from 'react-icons/fa';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { IoArrowBackOutline } from 'react-icons/io5';



const ComingSoon = () => {

    const router = useRouter();


    return (
        <>
            <section className={styles.boxx}>
                <div className={styles.mainContainer}>
                    <div className={styles.imageContainer}>
                        <img src="/Error.svg" alt="bg" />
                    </div>
                    <div className={`${styles.mainSectionComingSoon}`}>
                        <div className='tw-flex tw-gap-5 tw-flex-wrap'>
                            <Link href="/">
                                <button className='tw-mt-10 tw-p-2 tw-left-[90px] tw-bg-primary-100 tw-w-[90px] tw-items-center tw-justify-center hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all  tw-rounded-md tw-text-white tw-font-semibold tw-relative tw-flex'>
                                    Home
                                </button>
                            </Link>
                            <button onClick={() => router.back()} className='tw-mt-10 tw-p-2 tw-left-[90px] tw-bg-primary-100 tw-w-[90px] tw-items-center tw-justify-center hover:tw-bg-primary-200 tw-duration-200 tw-ease-in-out tw-transition-all  tw-rounded-md tw-text-white tw-font-semibold tw-relative tw-flex'>
                                <IoArrowBackOutline className='tw-text-2xl tw-mr-2' />Back
                            </button>
                        </div>
                        <div className='tw-flex'>
                            <div className={styles.text1}>
                                <div className={styles.text4}>
                                    <h1>Coming Soon</h1>
                                    <p className='tw-text-slate-900 tw-font-semibold tw-text-md'>
                                        We are working on this page. Stay tuned!
                                    </p>
                                    <p className='tw-text-slate-900 tw-font-semibold tw-text-md'>
                                        You can contribute to this page by visiting our GitHub repository.
                                    </p>
                                    <p className='tw-text-slate-900 tw-font-semibold tw-text-md'>
                                        We'll try to get this page up and running as soon as possible.
                                        Please subscribe to our newsletter to get notified when this page is live.
                                    </p>
                                    <div className='tw-flex tw-justify-center tw-items-center tw-mt-10 tw-gap-2'>
                                        <input type="email" placeholder="Enter your email" className="tw-w-full tw-h-16 tw-bg-[#f5f5f5] tw-border-dashed tw-border-4 tw-border-slate-400 tw-py-2 tw-px-6 focus:tw-outline-none tw-rounded-lg tw-font-semibold" />
                                        <button className="md:tw-w-auto tw-h-16 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold tw-ease-in-out tw-duration-200 tw-transition-all">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                                <div className='tw-justify-center tw-items-center tw-relative tw-bottom-20 max-[735px]:tw-flex max-[735px]:tw-mt-6 tw-flex-col'>
                                    <p className='tw-text-slate-800 tw-font-semibold tw-text-3xl'>Meanwhile Visit: </p>
                                    <div className='tw-mt-6 tw-justify-center tw-flex tw-items-center tw-gap-8'>
                                        {/* Twitter link */}
                                        <Link href='#'>
                                            <FaTwitter className='tw-text-3xl tw-mx-2 tw-text-slate-600 hover:tw-text-[#1DA1F2] tw-ease-in-out hover:tw-scale-125 tw-transition-all tw-duration-200' />
                                        </Link>
                                        {/* Facebook link */}
                                        <Link href='#'>
                                            <AiFillFacebook className='tw-text-3xl tw-mx-2 tw-text-slate-600 hover:tw-text-[#1877F2] hover:tw-scale-125 tw-transition-all tw-duration-200 tw-ease-in-out' />
                                        </Link>
                                        {/* Github link */}
                                        <Link href='https://github.com/anmode/grabtern-frontend' target='_blank'>
                                            <AiFillGithub className='tw-text-3xl tw-mx-2 tw-text-slate-600 hover:tw-text-black hover:tw-scale-125 tw-transition-all tw-duration-200 tw-ease-in-out' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="tw-flex tw-flex-1 tw-w-[400px] tw-h-[400px] max-[735px]:tw-hidden">
                                <Image src={comingSoon} width={500} height={500} alt="coming soon" className='tw-bg-blend-hue' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComingSoon