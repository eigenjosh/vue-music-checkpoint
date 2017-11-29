<template>
    <div class="container">
        <h1 class="text-center">My Playlist</h1>
        <div v-for="track in $store.state.mytunes" class="row">
            <div class="col-sm-8">
                {{track.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mytunes',
        data() {
            return {
                track: ""
            }
        }
    }
</script>

<style>
</style>