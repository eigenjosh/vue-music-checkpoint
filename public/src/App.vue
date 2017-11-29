<template>
  <div id="app">
    <header class="jumbotron">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/400px-Vue.js_Logo.svg.png" class="logo">
      <h1 class="uesic">uesic</h1>
    </header>
    <home></home>
  </div>
</template>

<script>
  import Home from './components/Home'
  import itunes from './components/itunes'
  import mytunes from './components/my-tunes'

  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style scoped>
  .uesic{
    margin-right: 50%;
    color: rgb(49, 190, 129) !important;
    text-shadow: 1px 1px 4px black; 

  }
  .logo{
    width: 300px;
    height: 300px;
  };
  .jumbotron {
    display: flex;
    justify-content: center;
    padding-top: 0;
    padding-bottom:0;
    margin-bottom: 15px;
    background-image: url(https://thevinylfactory.com/wp-content/uploads/2015/07/Entroducing.png);
    background-repeat: no-repeat;
    background-size: cover; 
  }
</style>