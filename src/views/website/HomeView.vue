<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from "aos";

export default {
  name: "HomeView",
  components: {},
  mounted() {
    AOS.init();
  },
};
</script>
