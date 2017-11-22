<template>
  <div class="home">
      <form @submit.prevent="getMusicByArtist">
        <input type="text" v-model="artist">
        <button type="submit">Search</button>
     </form>
    <mytunes class="my-tunes"></mytunes>
    <itunes class="itunes"></itunes>
  </div>
</template>

<script>
  import mytunes from './my-tunes';
  import itunes from './itunes';
  export default {
    name: 'home',
    data() {
      return {
        artist: ""
      }
    },

  methods: {
    getMusicByArtist() {
      this.$store.dispatch('getMusicByArtist', this.artist)
      console.log(this.artist)
    }
  },
  computed: {
    
  },
  components:{
    mytunes,
    itunes
  }
}
</script>

<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>