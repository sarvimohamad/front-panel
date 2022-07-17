<template>
    <el-row align="middle" justify="center" style="height: 90vh">
      <el-col :span="6"  >
        <div >
          <login-component />
        </div>
      </el-col>
    </el-row>
</template>

<script>
import LoginComponent from "@/components/LoginComponent";
export default {
name: "NotAuthenticatedLayout",
  components: {LoginComponent}
}
</script>