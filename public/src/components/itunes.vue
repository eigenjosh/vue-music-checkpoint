<template>
    <form @submit.prevent="getSongs">
        <input type="text" placeholder="Track Name">
        <button @click="">Search</button>
    </form>
</template>

<script>
    export default {
        name: 'itunes',
        data() {
            return {

            }
        }
    }
</script>

<style>
</style>