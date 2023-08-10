<script lang="ts" setup>
  

  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Spon` : 'Spoon';
    },
    meta: [
      {name: 'description', content: 'My amazzing site.'},
    ],
    bodyAttrs: {
      class: 'test'
    },    
    link: [
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'}
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
        tagPosition: 'bodyClose'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
        tagPosition: 'bodyClose'
      },
    ]
  })
  useSeoMeta({
    title: 'My amzing site',
    ogTitle: 'My Amazing Site',
    description: 'This is my mazing site, let me tell you all about it.',
    ogDescription: 'This is my mazing site, let me tell you all about it.',
    ogImage: 'https://examle.com/image.png',
    twitterCard: 'summary_large_image'
  });
</script>

<template>
  <div>
    <MainHeader/>
    <NuxtPage />
  </div>
</template>

<style scoped>


</style>
