<template>
  <div class="common-layout">
    <el-container>
      <el-header>به فام خوش آمدید</el-header>
      <el-main>
        <login-component />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent";
export default {
name: "NotAuthenticatedLayout",
  components: {LoginComponent}
}
</script>