<template>
    <div class="bg-[#000000] h-auto relative pb-[6.04vw] overflow-hidden">
        <!-- Top Menu -->
        <div class="flex justify-between items-center w-full aspect-[1440/71] px-8 py-4 bg-[rgba(13,13,20,0.90)]">
            <!-- Title -->
            <div class="flex items-center">
                <img src="images/web_logo_inv.png" alt="Yi's Portfolio" class="h-[2.5vw] object-contain" />
            </div>
            <!-- Navigation Menu -->
            <div class="flex gap-[3vw] items-center text-white font-['Inter-Regular']  text-[1.111vw]">
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="https://www.linkedin.com/in/ysong2023/" target="_blank" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
                <a href="https://github.com/ysong2023" target="_blank" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
        <!-- Welcome -->
        <div id="home" class="relative h-[62.36vw]" style="background:url('images/section1-bg.png') center center / cover no-repeat;">
          <div class="text-left font-['Inter-Bold',_sans-serif] text-[5vw] font-bold absolute left-[31.8vw] top-[12vw]">
            <div class="text-[rgba(255,255,255,0.90)]">Welcome</div>
            <div class="text-left flex flex-row gap-[1.66vw]">
              <div class="text-[#0d4dcc]">Hey</div>
              <div class="text-[#1a80d9]">It's</div>
              <div class="text-[#33b2e5]">Yi</div>
            </div>
          </div>
        </div>
        
        <div class="relative w-full aspect-[1440/576] overflow-hidden" style="
        background: linear-gradient(180deg,rgba(27, 25, 28, 1) 0%,rgba(12, 6, 27, 1) 100%);">
            <div class="bg-[rgba(26,26,38,0.50)] rounded w-[12.5vw] h-[4.166vw] absolute left-[10.416vw] top-[15.277vw] overflow-hidden">
                <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.66vw] font-semibold absolute left-[2.08vw] top-[1.25vw]">
                    Education
                </div>
                <!-- <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.66vw] font-semibold absolute left-[17.222vw] top-[1.25vw]">
                    Experience
                </div> -->
            </div>
            <div class="text-[#00b2e5] text-left font-['Inter-Bold',_sans-serif] text-[3.33vw] font-bold absolute left-[10.069vw] top-[2.708vw]">
                About Me
            </div>
            <div class="text-[#e5e5f2] text-left font-['Inter-Regular',_sans-serif] text-[1.38vw] font-normal absolute left-[10.416vw] top-[8.68vw] w-[40vw]">
                I am a data science student specializing in computational linguistics with a unique blend of AI technical skills and legal knowledge.
            </div>
            <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.38vw] font-semibold absolute left-[10.416vw] top-[22.083vw]">
                • University of British Columbia
            </div>
            <div class="text-[#cccce5] text-left font-['Inter-Regular',_sans-serif] text-[1.25vw] font-normal absolute left-[12.5vw] top-[24.166vw]">
                Master of Data Science - Computational Linguistics
            </div>
            <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.38vw] font-semibold absolute left-[10.416vw] top-[27.638vw]">
                • Renmin University of China
            </div>
            <div class="text-[#cccce5] text-left font-['Inter-Regular',_sans-serif] text-[1.25vw] font-normal absolute left-[12.5vw] top-[29.72vw]">
                Master of Laws (LL.M.) - Data Law and Civil Law
            </div>
            <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.38vw] font-semibold absolute left-[10.416vw] top-[33.194vw]">
                • University of Strathclyde
            </div>
            <div class="text-[#cccce5] text-left font-['Inter-Regular',_sans-serif] text-[1.25vw] font-normal absolute left-[12.5vw] top-[35.277vw]">
                B.Eng. in Electrical and Electronic Engineering
            </div>
            <img class="w-[17vw] h-[27vw] absolute left-[65vw] top-[7.5vw]" src="images/photo 1.png" style="object-fit: cover;"/>
        </div>
        <!-- Horizontal Line Above Title -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>
        
        <div id="skills" class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold mt-[3.194vw]">
            My Skills
        </div>
        <div class="relative mt-[6.94vw] h-[21.9vw]">
          <!-- Python -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[5.833vw] top-[0]">
          </div>
          <div class="w-[4.375vw] h-[4.375vw] absolute left-[12.5vw] top-[2.152vw] overflow-hidden">
            <img class="w-[100%] h-[93.02%] absolute right-[0%] left-[0%] bottom-[3.49%] top-[3.49%] overflow-visible" src="images/group3.svg"/>
          </div>
          <div class="text-[#3366cc] text-center font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[5.833vw] top-[8.75vw] w-[18.055vw]">
              Python
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[7.361vw] top-[13.263vw] w-[12.083vw]">
              Pandas, NumPy, Matplotlib, NLTK, spaCy, FastAPI, Scikit-learn
          </div>
          
          
          <!-- ML/DS -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[29.236vw] top-[0]">
          </div>
          <div class="w-[4.305vw] h-[4.305vw] absolute left-[36.111vw] top-[2.083vw] overflow-hidden">
              <img class="h-[auto] absolute left-[0] top-[0] overflow-visible" src="images/x-30-3-neural-network0.svg"/>
          </div>
          <div class="text-[#3366cc] text-center font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[29.236vw] top-[8.125vw] w-[18.055vw]">
            ML/DS
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[31.319vw] top-[12.986vw] w-[12.083vw]">
            PyTorch, TensorFlow, CNNs, RNNs, Classification, Clustering, XGBoost
          </div>
          
          
          <!-- Fullstack -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[52.638vw] top-[0]">
          </div>
          <div class="w-[4.305vw] h-[4.305vw] absolute left-[59.444vw] top-[2.083vw] overflow-hidden">
              <img class="h-[auto] absolute left-[0.73px] top-[0.8px] overflow-visible" src="images/fullstack.svg"/>
          </div>
          <div class="text-[#3366cc] text-center font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[52.638vw] top-[8.75vw] w-[18.055vw]">
            Full Stack
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[55.000vw] top-[13.263vw] w-[12.083vw]">
            SQL, PostgreSQL, MongoDB, Docker, Git, Linux, AWS, Next.js
          </div>
          
          
          <!-- Ling -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[76.041vw] top-[0px]">
          </div>
          <div class="w-[4.375vw] h-[4.375vw] absolute left-[83.055vw] top-[2.361vw] overflow-hidden">
            <img class="h-[auto] absolute left-0 top-0 overflow-visible" src="images/group4.svg"/>
          </div>
          <div class="text-[#3366cc] text-center font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[76.041vw] top-[8.75vw] w-[18.055vw]">
            Linguistics
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[78.125vw] top-[13.611vw] w-[12.083vw]">
            Word2Vec, Transformers, NER, Text Classification, Sentence Embeddings
          </div>
        </div>
        
        <!-- Horizontal Line Above Title -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>
        
        <div id="projects" class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold left-[39.097vw] top-[160.000vw]">
            Projects
        </div>
        
        <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[84.722vw] h-[12.708vw] relative mx-auto mt-[7.083vw]">
          <img class="h-[7.777vw] w-[7.777vw] absolute left-[1.806vw] top-[2.013vw] overflow-visible" src="images/group5.svg"/>
          <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[11.32vw] top-[1.875vw]">
              RAG-based AI Knowledge Engine
          </div>
          <div class="text-[rgba(255,255,255,0.80)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[11.32vw] top-[5.486vw] w-[72.569vw]">
              A scalable RAG (Retrieval Augmented Generation) system deployed on AWS
        that seamlessly integrates document retrieval with AI. Features include
        local and cloud deployment with FastAPI backend, vector database for
        efficient document search, and a responsive frontend.
          </div>
          <a href="https://rag.heyitsyi.com" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[48.959vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            View
          </a>
          <a href="https://github.com/ysong2023/AWS-frontend-RAG" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[59.931vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            Source
          </a>
        </div>
        <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[84.722vw] h-[12.708vw] relative mx-auto mt-[7.083vw]">
          <img class="h-[7.777vw] w-[7.777vw] absolute left-[1.806vw] top-[2.013vw] overflow-visible" src="images/group6.svg"/>
          <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[11.32vw] top-[1.875vw]">
              TaskMaster: AI-Enhanced Task Management Platform
          </div>
          <div class="text-[rgba(255,255,255,0.80)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[11.32vw] top-[5.486vw] w-[72.569vw]">
              A modern full-stack SaaS task management solution built with Next.js and Supabase. Features include AI-powered task categorization, cloud image attachments, Google/email authentication, and premium subscription options through Stripe. Empowers users with intelligent organization while maintaining an intuitive interface.
          </div>
          <a href="https://task.heyitsyi.com" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[48.959vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            View
          </a>
          <a href="https://github.com/ysong2023/TASK-APP" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[59.931vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            Source
          </a>
        </div>
        
        <img class="w-[43.28%] h-[14.04%] absolute right-[-1.27%] left-[57.99%] bottom-[8.16%] top-[77.8%] overflow-visible z-[0]" src="images/group7.svg"/>
        <!-- Horizontal Line Above Title -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>

        <div id="resume" class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold left-[39.097vw] top-[160.000vw]">
            Resume
        </div>
        
        <div class="flex w-full h-auto items-center justify-center mt-[3.333vw]">
          <div class="bg-[#145ce5] rounded-lg w-[16.388vw] h-[3.819vw] flex items-center justify-center font-['Inter-ExtraBold',_sans-serif] text-[1.666vw] font-extrabold">
            <div class="bg-[#ffffff] w-[1.666vw] h-[1.666vw] left-[41.180vw] top-[224.583vw]"></div>
            <a href="resume.pdf" target="_blank" class="text-[#ffffff] ml-[1.1vw]">View Resume</a>
          </div>
        </div>
        
        <!-- Horizontal Line Above Title -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>
        
        <div id="contact" class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold w-full z-1">
            Let's Contact
        </div>
        
        <div class="relative pl-[7.916vw] mt-[4.583vw]">
          <div class="bg-[#1a1a1a] rounded-lg border-solid border-[#4d4d4d] border w-[62.222vw] h-[24.375vw] py-[1.666vw] px-[3.055vw]">
            <input class="bg-[#262626] py-[0.763vw] px-[0.625vw] mb-[1.111vw] rounded w-[47.777vw] h-[2.777vw] text-[#808080] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal" placeholder="Name" />
            <input class="bg-[#262626] py-[0.763vw] px-[0.625vw] mb-[1.111vw] rounded w-[47.777vw] h-[2.777vw] text-[#808080] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal" placeholder="Email" />
            <input class="bg-[#262626] py-[0.763vw] px-[0.625vw] mb-[1.111vw] rounded w-[47.777vw] h-[2.777vw] text-[#808080] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal" placeholder="Subject" />
            <textarea class="bg-[#262626] py-[0.763vw] px-[0.625vw] mb-[1.111vw] rounded w-[47.777vw] h-[5.555vw] text-[#808080] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal" placeholder="Subject" ></textarea>
            <button class="bg-[#0066ff] rounded w-[10.555vw] h-[2.777vw] text-[#ffffff] font-['Inter-Bold',_sans-serif] text-[1.111vw] font-bold flex items-center justify-center ml-[2.291vw]">
              Send Message
            </button>
          </div>
        </div>
        
    </div>
</template>
<script>
    export default {
  name: "PersonalWebsite",
  components: {},
  props: {},
  data() {},
};
</script>
<style scoped="">
</style>
