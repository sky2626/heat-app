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
    
    <p class="text-white text-center mt-24 md:text-center text-xl my-4 font-bold">About Me</p>
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

    <div 
    class="flex mt-20 flex-col">
      <p 
      class="text-white text-center mt-8 md:text-center text-xl my-4 font-bold">
        EXPERIENCE
      </p>
      <div 
      class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/aws.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            AWS
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/azure.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            AZURE
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/js.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            JAVASCRIPT
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/python.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            PYTHON
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/react.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            REACT JS
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/vuejs.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            VUE JS
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/nodejs.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            NODE JS
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/css3.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            CSS 3
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/html5.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            HTML 5
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/bootstrap.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            BOOTSTRAP
          </p>
        </div>
        <div 
        class="flex flex-wrap flex-col mb-4">
          <img 
          class="justify-center h-20 md:h-28" 
          src="@/assets/tailwind-css.svg" alt="">
          <p class="font-bold text-center text-xl text-white">
            TAILWIND CSS
          </p>
        </div>
      </div>

      <div>
        <p 
        class="mt-28 text-white text-xl text-center font-bold">
          CONTACT
        </p>
        <div 
        class="p-10 grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
          <div 
            class="p-2">
            <h3 
            class="text-start pb-4 text-white font-bold">
              Drop Me a Message
            </h3>
            <p 
            class="text-start mb-6 text-white ">
              Let me know what I can help you with. Keep it simple and clear please.
            </p>
            <div
            class=" text-white mb-6 flex flex-row gap-8">
              <img class="h-10 w-10" src="@/assets/call.png" alt="">
              <a 
              class="mt-2 font-bold " 
              href="tel:+233546383716">
                +233-546-383-716
              </a>
            </div>
            <div
            class=" text-white mb-6 flex flex-row gap-8">
              <img class="h-10 w-10" src="@/assets/mail.png" alt="">
              <a 
              class="mt-2 font-bold " 
              href="mailto:alhassansalu1@gmail.com">
                alhassansalu1@gmail.com
              </a>
            </div>
            <div
            class=" text-white mb-6 flex flex-row gap-8">
              <img class="h-10 w-10" src="@/assets/location.png" alt="">
              <a 
              class="mt-2 font-bold " 
              v-bind:href="url">
                Kintampo, Ghana
              </a>
            </div>
          </div>

          <div 
          class="rounded-lg grid gap-2 p-6 lg:mx-8 bg-gradient-to-r from-blue-400 to-violet-900">
            <input
            class="rounded-lg text-lg bg-slate-800 h-6 p-4 "
            type="text" id="full name" name="full Name" placeholder="Name" autocomplere="off" required />
            <input
            class="rounded-lg text-lg bg-slate-800 h-6 p-4 "
            type="text"  id="email" name="email" placeholder="Email" autocomplere="off" required />
            <textarea 
            class="rounded-lg text-white text-lg bg-slate-800 p-4 " 
            id="subject" name="subject" placeholder="Please write your message here." style="height:120px" required></textarea>
            <input
            class="rounded-lg text-lg text-white bg-green-600 p-2 "
            type="submit" value = "submit" />
          </div>
        </div>

        <div 
        class="p-10">
          <hr>
          <div 
          class="flex flex-row gap-2 md:gap-4 mt-4 justify-center">
            <figure>
              <img class="h-8 " src="@/assets/switch-access.svg" alt="logo img">
            </figure>
            <p 
            class="text-neutral-700 mt-1 ">
              2024 &#169; - All right reserved.
            </p>
            <figure 
            class="flex flex-row gap-2 ">
              <img class="h-8" v-bind:href="gitgubUrl" src="@/assets/github.svg" alt="github img">
              <img class="h-8" v-bind:href="linkedInUrl" src="@/assets/linked-in.svg" alt="linked-in img">
              <img class="h-8" v-bind:href="fbUrl" src="@/assets/facebook.svg" alt="facebook img">
            </figure>
          </div>
        </div>
      </div>

     <!--  <hr>
      <div 
      class="flex flex-row text-center">
        <div >
          <p> {{ age }} </p>
          <button 
          v-on:click="increase"
          class="bg-blue-300 p-6 text-lg text-blue-950 ">
            increase +
          </button>
          <button 
          v-on:click="age--"
          class="bg-blue-300 p-6 text-lg text-blue-950 ">
            decrease -
          </button>
        </div>
      </div> -->
    
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import SpecialNavBar from '@/components/SpecialNavBar.vue'


export default {
  data(){
    return{
      url: 'https://www.google.com/maps/@8.0598699,-1.7245588,16z?entry=ttu',
      age: 50,
      githubUrl: 'github.com/sky2626',
      linkInUrl: 'linkedIn.com/alhassansalu',
      fbUrl: 'facebook.com/alhassansalu35722'

    }

  },

  methods: {
    increase() {
      this.age++
    },
    
  },

  name: 'PortfolioView',

  components: {
    SpecialNavBar,
   
  },

  

}
</script>
