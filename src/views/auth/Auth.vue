<template>
  <div class="min-h-screen">
    <div class="flex h-screen">
      <div class="hidden h-100 p-5 md:block md:w-1/2">
        <div
          class="flex justify-center items-center bg-gray-200 px-32 h-full rounded-lg"
        >
          <div>
            <h1 class="font-medium text-3xl text-gray-800 my-5 tracking-wider">
              Let us help you run your manufacturing business
            </h1>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nesciunt dolores aliquam, quod quaerat reiciendis.
            </p>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
};
</script>

<style lang="scss"></style>
