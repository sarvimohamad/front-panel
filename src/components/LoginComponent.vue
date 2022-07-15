<template>
  <el-form @submit="submit"  v-loading="loading">
    <el-form-item label="Email">
      <el-input v-model="query.email" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="query.password" />
    </el-form-item>

    <el-button type="primary"  @click="submit">ورود</el-button>

  </el-form>
  <loading-component v-show="loading"/>
</template>

<script>
import BaseApi from "@/Api/BaseApi";
import LoadingComponent from "@/components/LoadingComponent";

export default {
  name: "LoginComponent",
  components: {LoadingComponent},
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
    submit: function () {
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