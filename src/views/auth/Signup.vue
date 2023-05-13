<template>
  <div class="w-full md:w-1/2">
    <div class="min-h-screen p-10 md:p-20">
      <h1 class="font-medium text-3xl text-gray-800 my-5">Get started</h1>
      <p class="font-light text-gray-600">
        Create your account to access our services
      </p>
      <form @submit.prevent="signUp">
        <div class="my-2">
          <label for="name" class="block">Name</label>
          <input
            name="name"
            v-model="signupForm.name"
            type="text"
            placeholder="Enter your name"
            class="w-full md:w-3/4 my-3 border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div class="my-2">
          <label for="email" class="block">Email</label>
          <input
            name="email"
            v-model="signupForm.email"
            type="email"
            placeholder="Enter your email"
            class="w-full md:w-3/4 my-3 border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div class="my-2">
          <label for="password" class="block">Password</label>
          <input
            name="password"
            v-model="signupForm.password"
            type="password"
            placeholder="Enter your password"
            class="w-full md:w-3/4 my-3 border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div class="my-2">
          <label for="account_type" class="block">Account type</label>

          <select
            name="account_type"
            v-model="signupForm.account_type_id"
            id="account_type"
            class="w-full md:w-3/4 my-3 border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="1">Manufacturer</option>
            <option value="2">Customer</option>
            <option value="3">Producer</option>
          </select>
        </div>
        <div class="my-2">
          <button
            class="bg-green-500 hover:bg-green-700 text-white w-full md:w-3/4 font-bold py-3 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
        <p class="text-gray-500">
          Have an account?
          <router-link
            to="/auth/login"
            class="text-green-500 hover:text-green-700"
            >Login</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from "../../services/AuthService";
export default {
  name: "SignupView",
  data() {
    return {
      signupForm: {
        name: "",
        email: "",
        password: "",
        account_type_id: "1",
      },
    };
  },
  methods: {
    signUp() {
      console.log(this.signupForm);
      AuthService.signup(this.signupForm)
        .then((response) => {
          console.log(response);
          //localStorage.setItem("airdomax_token", response.data.token);
          //this.$store.dispatch("user", response.data.user);
          //router.push("/app/dashboard");
        })
        .catch(
          (error) => (this.loginErrorMessage = error.response.data.message)
        );
    },
  },
};
</script>

<style lang="scss"></style>
