<template>
  <form @submit="submit" v-show="!loading">
    <input type="email" v-model="query.email">
    <input type="password" v-model="query.password">
    <input type="submit">
  </form>
  <div v-show="loading">Loading ....</div>
</template>

<script>
import BaseApi from "@/Api/BaseApi";

export default {
  name: "LoginComponent",
  data() {
    return {
      loading: false,
      query: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit: function (e) {
      e.preventDefault();
      this.loading = true
      BaseApi.post('login', this.query)
          .then(response => {
            localStorage.setItem('token', response.data.token)
            location.reload()
          })
          .finally(() => {
            this.loading = false
          })
    }
  }
}
</script>