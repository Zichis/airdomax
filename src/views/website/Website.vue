<template>
  <div class="min-h-screen bg-gray-100">
    <nav
      class="fixed z-50 w-full flex items-center justify-between flex-wrap p-6 bg-white"
    >
      <div class="flex items-center flex-shrink-0 text-teal-600 mr-6">
        <span class="font-semibold text-xl tracking-tight">Airdomax</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-600 border-teal-600 hover:text-teal-800 hover:border-teal-800"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-teal-800 mr-4"
            >Home</router-link
          >
          <router-link
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-teal-800 mr-4"
            >About</router-link
          >
          <router-link
            to="/contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-teal-800 mr-4"
            >Contact</router-link
          >
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-600 border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Download</a
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "WebsiteView",
};
</script>

<style lang="scss"></style>
