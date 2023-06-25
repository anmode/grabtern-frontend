import React,{useEffect} from 'react';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
function MentorTestimonial() {
    // useEffect(()=>{
    //     AOS.init();
    // },[])
  return (
    <div>
    <div className='tw-container tw-justify-center'>
    <div class="outerdiv tw-container tw-flex tw-flex-col">
        <div data-aos="fade-right" className='tw-flex tw-text-2xl tw-text-fuchsia-700 tw-text-7xl heading' >What Our users say</div>
    <div class="innerdiv tw-mx-2">
      
      <div class="div1 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt=""/>
          </div>
          <div class="detbox">
            <p class="name">Daniel Clifford</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h4>
        <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
        </div>
      </div>
     
      <div class="div2 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt=""/>
          </div>
          <div class="detbox">
            <p class="name">Jonathan Walters</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>The team was very supportive and kept me motivated</h4>
        <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
        </div>
      </div>
     
      <div class="div3 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt=""/>
          </div>
          <div class="detbox">
            <p class="name dark">Kira Whittle</p>
            <p class="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div class="review dark">
          <h4>Such a life-changing experience. Highly recommended!</h4>
          <p>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. It certainly helped me land a job as a full-stack 100% recommend! ”</p>
        </div>
      </div>
      
      <div class="div4 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt=""/>
          </div>
          <div class="detbox">
            <p class="name dark">Jeanette Harmon</p>
            <p class="designation dark">Verified Graduate</p>
          </div>
        </div>
        <div class="review dark">
          <h4>An overall wonderful and rewarding experience</h4>
        <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
        </div>
      </div>
     
      <div class="div5 eachdiv">
        <div class="userdetails">
          <div class="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt=""/>
          </div>
          <div class="detbox">
            <p class="name">Patrick Abrams</p>
            <p class="designation">Verified Graduate</p>
          </div>
        </div>
        <div class="review">
          <h4>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h4>
        <p>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
}

export default MentorTestimonial
