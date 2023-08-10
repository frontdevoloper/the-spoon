<script lang="ts" setup>
const route = useRoute();
const title = 'Dashboard';

const { data } = await useFetch('/api/hello/login');

definePageMeta({
    middleware: 'auth',
    title: 'Dashboard',
});

useHead({
    meta: [{property: 'og:title', content: `App name - ${route.meta.title}`}],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&dusplay=swap'
        }
    ]
});

</script>

<template>
    <h1>Дашборд сайта</h1>    
    <p> А это результат api : {{ data }} </p>
</template>