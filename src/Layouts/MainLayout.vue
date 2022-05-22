<template>
  <p>
    {{user.name}}
    خوش آمدی
    <logout-component />
  </p>
</template>

<script>
import LogoutComponent from "@/components/LogoutComponent";
export default {
  name: "MainLayout",
  components: {LogoutComponent},
  computed: {
    user: function () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>