<template>
    <el-form @submit="submit" v-loading="loading" >
      <el-form-item>
        <el-input type="text"  v-model="query.email" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="query.password"/>
      </el-form-item>
      <div class="">
        <el-row  justify="center" >
          <el-button type="primary" @click="submit">ورود</el-button>
        </el-row>

      </div>
    </el-form>
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