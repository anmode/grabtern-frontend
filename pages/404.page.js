import React from "react";
import Link from "next/link";
import '../styles/404.module.css';

function ErrorPage() {
    return (
        <>
            <div className="container flex flex-col justify-center items-center bg-antiquewhite">
                <div className="Text">
                    <h1>Error page 404</h1>
                    <p></p>
                    <button className="md:tw-w-auto tw-h-16 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold"><Link href='/'>Go Back</Link></button>
                </div>
                <div className="Image">
                    <img src="#" alt="error"></img>
                </div>
            </div>
        </>
    );
}


export default ErrorPage;