<template>
  edit from
  <loading-component v-if="loading"/>
  <form @submit="submit" v-if="!loading">
    <input type="text" v-model="query.name" placeholder="name"/><br>
    <input type="email" v-model="query.email" placeholder="Email"/><br>
    <input type="password" v-model="query.password" placeholder="password"/><br>
    <input type="submit">
  </form>
</template>

<script>
import BaseApi from "@/Api/BaseApi";
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "UserEditForm",
  components: {LoadingComponent},
  data() {
    return {
      loading: false,
      query: {
        name: '',
        email: '',
        password: ''

      }
    }
  },
  mounted() {
    this.getUserData()
  },
  methods: {
    getUserData: function () {
      this.loading = true
      BaseApi.get(`admin/users/${this.$route.params.id}`).then((response) => {
        this.query = response.data.data
      }).finally(() => {
        this.loading = false
      })
    },
    submit: function (e) {
      e.preventDefault();
      this.loading = true
      BaseApi.put(`admin/users/${this.$route.params.id}`, this.query).then(() => {
        this.$router.push({name: "users"})
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
