<template lang="">
  <div>
    <div class="bg-gray-200 min-h-screen flex">
      <div class="bg-gray-800 p-10 hidden md:block" style="width: 320px">
        <h2 class="font-bold text-xl text-gray-50">AIRDOMAX</h2>
        <div class="my-10">
          <router-link
            class="text-gray-50 font-bold hover:text-green-500"
            to="/user/dashboard"
            >Dashboard</router-link
          >
        </div>
      </div>
      <div class="p-5 flex-1">
        <div class="shadow-md p-5 mb-5 rounded bg-white">
          <h1>Welcome, John Doe</h1>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserView",
};
</script>
<style lang=""></style>
