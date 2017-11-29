<template>
    <div class="container">
        <div v-for="result in results" class="row">
            <div class="col-m-8">
                <h1>{{result.trackName}}</h1>
                <img :src="result.artworkUrl100">
                <router-link class="mytunes"></router-link>
                <audio class="audio" :src="result.previewUrl" controls="controls"></audio>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'itunes',
        data() {
            return {

            }
        },
        methods:{
            getMusicByArtist(){
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToMyTunes(){
                this.$store.dispatch('addToMyTunes', this.track)
            }
        },
        computed:{
            results(){
                return this.$store.state.results
            }
        }
    }
</script>

<style>
</style>