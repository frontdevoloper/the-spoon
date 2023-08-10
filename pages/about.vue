<script setup lang="ts">
const route = useRoute();

console.log(route.params.id)
</script>

<template>
    <Head>
        <Title>{{ route.meta.title }}</Title>
    </Head>
    <h1>This is aboute page</h1>   
</template>