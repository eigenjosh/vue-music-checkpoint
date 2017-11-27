<template>
    <div>
        <div v-for="result in results">
            <h1>{{result.trackName}}</h1>
            <img :src="result.artworkUrl100">
            <audio class="audio" :src="result.previewUrl" controls="controls"></audio>
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