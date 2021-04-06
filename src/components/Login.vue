<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区 -->
      <div class="avatar_box">
        <!-- src：规定显示图像的 URL alt：规定图像的替代文本 -->
        <img src="../assets/logo.png" alt="avatar" />
      </div>
      <!-- 登录表单 -->
      <!-- ref引用 通过$ref调用 :rules规则 :model双向绑定-->
      <div>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="60px"
          class="login_form"
        >
          <!-- prop 绑定对应的规则 v-model双向绑定 -->
          <el-form-item label="账号" prop="username">
            <el-input
              v-model="loginForm.username"
              prefix-icon="iconfont icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="iconfont icon-3702mima"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetLoginForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则 每个规则组为数组对应的对象为规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 表单重置按钮
    resetLoginForm () {
      // console.log(this)
      // 调用全局refs清空表单
      // resetFields：element-ui提供的表单方法
      this.$refs.loginFormRef.resetFields()
    },
    // 登录按钮
    login () {
      // 表单预验证
      // valid：bool类型
      this.$refs.loginFormRef.validate(async valid => {
        // console.log(valid)
        if (!valid) return false
        // this.$http.post('login', this.loginForm): 返回值为promise
        // 返回值为promise，可加await简化操作 相应的也要加async
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败')
        this.$message.success('登录成功')
        // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
        //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
        window.sessionStorage.setItem('token', res.data.token)
        // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
/* // lang="less" 支持less格式
// scoped vue的指令，只在当前组件生效 */
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 360px;
  background-color: #fff;
  // 给div元素添加圆角的边框：
  border-radius: 3px;
  // 绝对定位
  position: absolute;
  left: 50%;
  top: 50%;
  // 元素变换 scale缩放 rotate水平旋转 translate平移 skew沿水平方向倾斜变形
  //position加transform是一种块居中的方式
  -webkit-transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.103);

  .avatar_box {
    width: 130px;
    height: 130px;
    // 边框样式
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    //div 元素添加阴影：
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
.info {
  font-size: 13px;
  margin: 10px 15px;
}
</style>
