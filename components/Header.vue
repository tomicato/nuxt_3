<script setup lang="js">
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: ''
        }
    ],
    script: [
        {
            src: 'https://kit.fontawesome.com/3509edaf0e.js'
        }
    ]
})
</script>
<template>
    <header class="w-1/2 mx-auto py-2">
        <ul class="flex justify-start items-center my-4">
            <li class="ml-1.5 mr-1.5"><NuxtLink to="/"><i class="fa-solid fa-house text-green-500"></i> </NuxtLink></li>
            <li class="ml-1.5 mr-1.5"><NuxtLink to="/events">Events</NuxtLink></li>
            <li class="ml-1.5 mr-1.5"><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
    </header>
</template>
