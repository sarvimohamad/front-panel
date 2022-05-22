<template>
  <p>loading</p>
</template>

<script>
import BaseApi from "@/Api/BaseApi";
export default {
  name: "InitLayout",
  mounted() {
    if(!localStorage.getItem('token')) {
      this.$emit('layout-changed', 'NotAuthenticatedLayout')
      return false
    }
    this.checkUser()
  },
  methods: {
    checkUser: function () {
      BaseApi.get('user').then((response) => {
        this.$store.state.user = response.data
        this.$emit('layout-changed', 'MainLayout')
      }).catch(() => {
        this.$emit('layout-changed', 'NotAuthenticatedLayout')
      })
    }
  }
}
</script>