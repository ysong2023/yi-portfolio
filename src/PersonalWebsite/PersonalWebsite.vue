
<template>
    <div class="bg-[#000000] h-auto relative pb-[6.04vw] overflow-hidden">
        <!-- 顶部菜单 -->
        <div class="flex justify-between items-center w-full aspect-[1440/71] px-8 py-4 bg-[rgba(13,13,20,0.90)]">
            <!-- 标题 -->
            <div class="text-[#00b2cc] font-bold font-['Inter-Bold'] 
                       text-[1.666vw] min-w-[4.930vw] flex-shrink-0">
                Yi’s Portfolio
            </div>
            <!-- 导航菜单 -->
            <div class="flex gap-[3vw] items-center text-white font-['Inter-Regular']  text-[1.111vw]">
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Resume</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <!-- Welcome -->
        <div class="relative h-[62.36vw]" style="background:url('images/section1-bg.png') center center / cover no-repeat;">
          <div class="text-left font-['Inter-Bold',_sans-serif] text-[5vw] font-bold absolute left-[31.8vw] top-[20.40vw]">
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
            <div class="text-[#e5e5f2] text-left font-['Inter-Regular',_sans-serif] text-[1.38vw] font-normal absolute left-[10.416vw] top-[8.68vw] w-[64.027vw]">
                I am passionate about Large Language Models and Machine Learning.
            </div>
            <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.38vw] font-semibold absolute left-[10.416vw] top-[22.083vw]">
                • University of A
            </div>
            <div class="text-[#cccce5] text-left font-['Inter-Regular',_sans-serif] text-[1.25vw] font-normal absolute left-[12.5vw] top-[24.166vw]">
                M.Sc. in Data Science
            </div>
            <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.38vw] font-semibold absolute left-[10.416vw] top-[27.638vw]">
                • University of A
            </div>
            <div class="text-[#cccce5] text-left font-['Inter-Regular',_sans-serif] text-[1.25vw] font-normal absolute left-[12.5vw] top-[29.72vw]">
                M.Sc. in Data Science
            </div>
            <div class="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-[1.38vw] font-semibold absolute left-[10.416vw] top-[33.194vw]">
                • University of A
            </div>
            <div class="text-[#cccce5] text-left font-['Inter-Regular',_sans-serif] text-[1.25vw] font-normal absolute left-[12.5vw] top-[35.277vw]">
                M.Sc. in Data Science
            </div>
            <img class="w-[27vw] h-[27vw] absolute left-[66.59vw] top-[7.5vw]" src="images/logo-10.png" style="object-fit: cover; aspect-ratio: 1"/>
        </div>
        <!-- 标题上面横线 -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>
        
        <div class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold mt-[3.194vw]">
            My Skills
        </div>
        <div class="relative mt-[6.94vw] h-[21.9vw]">
          <!-- Python -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[5.833vw] top-[0]">
          </div>
          <div class="w-[4.375vw] h-[4.375vw] absolute left-[12.5vw] top-[2.152vw] overflow-hidden">
            <img class="w-[100%] h-[93.02%] absolute right-[0%] left-[0%] bottom-[3.49%] top-[3.49%] overflow-visible" src="images/group3.svg"/>
          </div>
          <div class="text-[#3366cc] text-left font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[7.708vw] top-[8.75vw]">
              Python
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[7.361vw] top-[13.263vw] w-[12.083vw]">
              pandas, numpy, scikit-learn, matplotlib, tensorflow, keras
          </div>
          
          
          <!-- ML/DS -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[29.236vw] top-[0]">
          </div>
          <div class="w-[4.305vw] h-[4.305vw] absolute left-[36.111vw] top-[2.083vw] overflow-hidden">
              <img class="h-[auto] absolute left-[0] top-[0] overflow-visible" src="images/x-30-3-neural-network0.svg"/>
          </div>
          <div class="text-[#3366cc] text-left font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[31.666vw] top-[8.125vw]">
            ML/DS
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[31.319vw] top-[12.986vw] w-[12.083vw]">
            Fine Tuning, Data Visualization, SVM, MLE, Data Engineering
          </div>
          
          
          <!-- Fullstack -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[52.638vw] top-[0]">
          </div>
          <div class="w-[4.305vw] h-[4.305vw] absolute left-[59.444vw] top-[2.083vw] overflow-hidden">
              <img class="h-[auto] absolute left-[0.73px] top-[0.8px] overflow-visible" src="images/fullstack.svg"/>
          </div>
          <div class="text-[#3366cc] text-left font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[55.347vw] top-[8.75vw]">
            Full Stack
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[55.000vw] top-[13.263vw] w-[12.083vw]">
            Frontend, Backend, Database, AWS, Cloud Server
          </div>
          
          
          <!-- Ling -->
          <div class="bg-[#000000] rounded border-solid border-[#4d4d4d] border w-[18.055vw] h-[21.875vw] absolute left-[76.041vw] top-[0px]">
          </div>
          <div class="w-[4.375vw] h-[4.375vw] absolute left-[83.055vw] top-[2.361vw] overflow-hidden">
            <img class="h-[auto] absolute left-0 top-0 overflow-visible" src="images/group4.svg"/>
          </div>
          <div class="text-[#3366cc] text-left font-['Inter-SemiBold',_sans-serif] text-[1.666vw] font-semibold absolute left-[78.472vw] top-[8.75vw]">
            Linguistics
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-left font-['Inter-Regular',_sans-serif] text-[1.111vw] font-normal absolute left-[78.125vw] top-[13.611vw] w-[12.083vw]">
            Computational Linguistics, Swahili
          </div>
        </div>
        
        <!-- 标题上面横线 -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>
        
        <div class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold left-[39.097vw] top-[160.000vw]">
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
          <a href="#" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[48.959vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            View
          </a>
          <a href="#" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[59.931vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
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
          <a href="#" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[48.959vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            View
          </a>
          <a href="#" class="bg-[#145ce5] rounded w-[8.333vw] h-[2.5vw] absolute left-[59.931vw] top-[9.444vw] text-[#ffffff] text-center font-['Inter-SemiBold',_sans-serif] text-[1.111vw] font-semibold flex items-center justify-center">
            Source
          </a>
        </div>
        
        <img class="w-[43.28%] h-[14.04%] absolute right-[-1.27%] left-[57.99%] bottom-[8.16%] top-[77.8%] overflow-visible z-[0]" src="images/group7.svg"/>
        <!-- 标题上面横线 -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>

        <div class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold left-[39.097vw] top-[160.000vw]">
            Resume
        </div>
        
        <div class="flex w-full h-auto items-center justify-center mt-[3.333vw]">
          <div class="bg-[#145ce5] rounded-lg w-[16.388vw] h-[3.819vw] flex items-center justify-center font-['Inter-ExtraBold',_sans-serif] text-[1.666vw] font-extrabold">
            <div class="bg-[#ffffff] w-[1.666vw] h-[1.666vw] left-[41.180vw] top-[224.583vw]"></div>
            <a href="#" class="text-[#ffffff] ml-[1.1vw]">View Resume</a>
          </div>
        </div>
        
        <!-- 标题上面横线 -->
        <div class="bg-[rgba(128,128,128,0.30)] w-[41.666vw] h-px mt-[5.972vw] mb-[3.194vw] mx-auto"></div>
        
        <div class="text-[rgba(255,255,255,0.90)] text-center font-['Inter-Bold',_sans-serif] text-[5vw] font-bold w-full z-1">
            Let’s Contact
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
