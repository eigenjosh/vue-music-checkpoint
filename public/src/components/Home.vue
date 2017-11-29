<template>
  <div class="home container">
    <form @submit.prevent="getMusicByArtist()">
      <input type="text" v-model="artist" class="pull-left">
      <button type="submit">Search</button>
    </form>
    <div class="row">
      <itunes class="itunes col-xs-5 bg-success"></itunes>
      <mytunes class="my-tunes col-xs-5 bg-info"></mytunes>
    </div>
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
    components: {
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
  }

  .itunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
  }
</style>