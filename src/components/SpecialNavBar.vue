<template>
  <header class="bg-mycolor-100 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <img class="h-8" src="#" alt="Ma Guy">
      </div>
      <div class="sm:hidden md:hidden ">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:texbluei4e focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 md:flex sm:flex sm:p-0">
      <a href="#" class="mt-1 block px-8 py-3 text-xl text-white font-semibold rounded hover:bg-blue-400 md:mt-0 md:ml-2 sm:mt-0 sm:ml-2" >Home</a>
      <router-link to="/" class="block px-8 py-3 text-xl text-white font-semibold rounded hover:bg-blue-400 md:mt-0 md:ml-2">Portfolio</router-link>
      <router-link to="/portifolio" class="mt-1 block px-8 py-3 text-xl text-white font-semibold rounded hover:bg-blue-400 md:mt-0 md:ml-2 sm:mt-0 sm:ml-2">Projects</router-link>
      <a href="#" class="mt-1 block px-8 py-3 text-xl text-white font-semibold rounded hover:bg-blue-400  md:mt-0 md:ml-2 sm:mt-0 sm:ml-2" >Experiences</a>
      <button class="bg-gradient-to-r from-blue-400 to-violet-900 mt-1 block px-8 py-3 text-xl text-white font-semibold rounded-lg hover:bg-blue-400  md:mt-0 md:ml-2 sm:mt-0 sm:ml-2">Contact</button>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'SpecialNavBar',

  data() {
    return {
      isOpen: false,
    }
  },

}

</script>

