<template>
    <div class="w-3/4 mx-auto flex justify-center my-32">
        <button class="bg-indigo-500 mx-auto w-1/6 px-2 py-1 rounded my-16" @click="increment">Increment +</button>
        <div class="my-16 border border-1 rounded px-3 py-2 text-2xl">{{ count }}</div>
        <button class="bg-green-500 mx-auto w-1/6 px-2 py-1 rounded my-16" @click="decrement"> Decrement -</button>
    </div>
</template>

<script setup lang="js">
const count = ref(0)

const increment = () => {
    count.value++;
}
const decrement = () => {
    count.value--;
}

</script>

<style scoped lang="scss">

</style>
