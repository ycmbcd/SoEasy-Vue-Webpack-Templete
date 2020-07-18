<template>
  <div class="example">
    <div class="hellow">{{ msg }}</div>

    <!-- 熊猫  -->
    <img src="./assets/images/panda.png" alt="phone">
    <h4>熊猫图片（大于10KB）的地址：</h4>
    <h6>./static/images/panda_eb8547.png</h6>
    <!-- 手机  -->
    <img src="./assets/images/phone.jpg" alt="phone">
    <h4>手机图片（小于10kb）编译为base64地址：</h4>
    <textarea>data:image/jpeg;base64,/9j/4AAQSkZJRgABAQACzwLPAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAIxlAAAAMgAAjGUAAAAyAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAGSgAwAEAAAAAQAAAGQAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIAGQAZAMBIgACEQEDEQH...</textarea>
    <h4>ES6编译为</h4>
    <h2>{{es6}}</h2>
  </div>
</template>

<script>
// import phone from './assets/images/phone.jpg';

export default {
  data () {
    return {
      msg: 'Hello world!',
    }
  },
  computed:{
    es6: function(){
      const es6Test = (a, b) => a + b;
      return es6Test;
    }
  }
}
</script>

<style lang="stylus" scoped>
$red = red
$blue = #2d73bb
h4
  color $blue
.example
  text-align center
  box-shadow: 1px 1px 10px #777;
  color #444444;
  width: 80%;
  padding: 20px;
  margin:30px auto;
.hellow
  color $red
textarea
  font-size: 12px;
  height: 80px;
  width: 50%;
  margin: 10px 0;
  padding: 10px;
  resize: none;
  border: 1px solid #dedede;

</style>


