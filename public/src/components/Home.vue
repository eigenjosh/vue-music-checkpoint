<template>
  <div class="home container">
      <form @submit.prevent="getMusicByArtist()">
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
      return this.artist
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
    background: rgb(128, 2, 139);
  }

  .itunes {
    display: inline-block;
    background: rgb(255, 196, 0);
    min-height: 500px;
    min-width: 50%;
  }

</style>