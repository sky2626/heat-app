<template>
  <div class="home bg-mycolor-100">
    <SpecialNavBar />
    <div class="HeroSection ">
      <div class="h-auto">
        <p class="text-white text-3xl font-bold mx-12 my-10">I'm a</p>
        <p class="text-white text-6xl md:text-10xl font-extrabold m-8 ">
          <span class="text-blue-300">Full Stack</span> <br>
          <spam>SOFTWARE <br> ENGINEER</spam>
        </p>
      </div>
      <div class="mx-10 flex flex-wrap flex-row gap-4">
        <button class="bg-gradient-to-r from-blue-400 to-violet-900 mt-1 block px-14 py-6 text-xl text-white font-bold 
        rounded-xl hover:bg-violet-900  md:mt-0 md:ml-2 sm:mt-0 sm:ml-2">
          View Projects
        </button>
        <button class="border-4 border-mycolor-200 mt-1 block px-14 py-6 text-xl text-white font-bold 
        rounded-xl hover:bg-blue-400  md:mt-0 md:ml-2 sm:mt-0 sm:ml-2">
            View Resume
        </button>
      </div>
     
    </div>
    
    <p class="text-white text-center mt-8 md:text-center text-xl my-4 font-bold">About Me</p>
    <div class="flex flex-col md:flex-row md:gap-4 md:justify-center ">
      <div class="w-auto">
        <img
        class="m-8 h-auto max-w-sm"
        src="@/assets/img-1.png"
        alt="" />
        <h5
        class="mb-2 text-xl text-center font-bold text-neutral-800 dark:text-neutral-50">
          SALU ALHASSAN
        </h5>
      </div>
      <div 
      class=" md:w-1/2">
        <p 
        class="flex justify-center m-8 md:justify-start md:4 text-neutral-600 dark:text-neutral-200">
          Full-Stack Web Developer specializing in front end development. 
          Experienced with all stages of the development cycle for dynamic web projects. 
          I am a creative and innovative UI/UX designer with figma and Adobe packages and 
          Well-versed in numerous programming languages including HTML5, CSS, JavaScript, 
          Python, C, MySQL and frameworks like React, Vue and Django. Strong background in 
          project management, version control like git and customer relations. Linux and 
          Windows are operating systems that I feel comfortable with. Discord and slack are
          at my fingertips.
        </p>
        <div class="m-8 flex flex-wrap flex-col md:flex-row md:mt-16 lg:mt-20 gap-4">
          <button class="bg-gradient-to-r from-blue-400 to-violet-900 mt-1 block px-14 py-6 text-xl text-white font-bold 
          rounded-xl hover:bg-violet-900  md:mt-0 md:ml-2 sm:mt-0 sm:ml-2">
            Hire Me
          </button>
          <button class="border-4 border-mycolor-200 mt-1 block px-14 py-6 text-xl text-white font-bold 
          rounded-xl hover:bg-blue-400  md:mt-0 md:ml-2 sm:mt-0 sm:ml-2">
              Contact Me
          </button>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SpecialNavBar from '@/components/SpecialNavBar.vue'

export default {
  name: 'PortfolioView',
  components: {
    SpecialNavBar
  },

}
</script>
