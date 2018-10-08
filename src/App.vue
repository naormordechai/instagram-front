<template>
  <section class="x">
    <div class="box">
      <div class="width">
      <img class="instagram-img" src="../img/crop.jpeg" />
        <div class="container-input">
          <input v-model="userDetail.email"  type="text" placeholder="Phone number, username, or email">
          <input v-model="userDetail.password"  type="password" placeholder="password">
          <button @click="login" class="login">Log in</button>
          <a href="#?">Forgot password?</a>
        </div>
     </div>
    </div>
    <div class="box account-box">
      <p>Don't have an account? <span><a href="#">Sign up</a></span></p>
    </div>
    <div class="t-align">
      Get the app
      <div class="imgs flex justify-content">
        <img src="../img/download-app-android.png"/>
        <img src="../img/button-macappstore.png"/>
        <img src="../img/English_get-it-from-MS_InvariantCulture_Default.png"/>
      </div>
    </div>
  </section>
</template>

<script>

import Userservice from '../services/UserService'

export default {
  data() {
    return {
      userDetail:{
        email:'',
        password:'',
      }
    }
  },
  methods:{
    login() {
        Userservice.addUser(this.userDetail)
    }
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

.justify-content {
  justify-content: center;
}

.x {
  overflow-x: hidden;
}

.flex {
  display: flex;
}

.imgs > *:not(:last-child) {
  margin-right: 8px;
}

.align-items {
  align-items: center;
}

.account-box {
  padding: 10px;
}

.x div:first-child {
  margin-top: 40px;
}

img {
  width: 130px;
  height: 40px;
}

.t-align {
  text-align: center;
}

.box {
  border: 1px solid rgba(212, 212, 212, 0.911);
  max-width: 350px;
  text-align: center;
  margin: 0 auto 20px;
  min-height: 100%;
}

.width {
  margin: 0 auto;
  max-width: 80%;
}
.container-input > * {
  width: 100%;
  padding: 7px;
  margin-bottom: 12px;
}

.instagram-img {
  height: 100px;
}

.login {
  padding: 7px;
  background-color: #02a3dd;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.login:hover {
  opacity: 0.5;
}

a {
  text-decoration: none;
  font-size: 13.5px;
  color: #003569;
}

@media (max-width: 440px) {
  img {
    width: 30vw;
  }
}
</style>
