import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<div className='tw-flex tw-flex-col tw-z-[1000] tw-text-center tw-text-[#845ec2] tw-fixed tw-bottom-0 tw-right-0 tw-mr-8 tw-mb-8 tw-cursor-pointer hover:tw-text-blue-500 tw-duration-200'>
	<FaArrowCircleUp onClick={scrollToTop} className='tw-bg-white tw-rounded-full' fontSize={45}
	style={{display: visible ? 'inline' : 'none'}} />
    <span style={{display: visible ? 'block' : 'none', transitionDuration:"2s", backgroundColor:visible?'white':'transparent'}}>Top</span>
	</div>
);
}

export default ScrollButton;
