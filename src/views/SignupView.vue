<template>
  <div class="vue-tempalte">
    <form>
      <div>
        <h3>Sign Up</h3>
      </div>
      <br>
      <div>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control form-control-lg"/>
        </div>
        <br>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control form-control-lg" />
        </div>
      </div>
      <br>
      <div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control form-control-lg" />
        </div>
      </div>
      <div>
        <br>
        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
      </div>
      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{name: 'login'}">sign in?</router-link>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  background: #2554FF !important;
  min-height: 100vh;
  font-weight: 400;
}
body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;

}
.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}
.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
label {
  font-weight: 500;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}
.forgot-password a {
  color: #2554FF;
}
.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}
.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}
.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
img{
  width: 8%;
  position: absolute;
  top: 20%;
  left: 50%
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>
