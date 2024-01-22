<template>
   <h1
      class="pt-5 pb-5 text-3xl font-bold underline"
      :class="{
         important: theme === 'important',
         info: theme === 'info',
         // Using tailwind utility classes
         'text-yellow-900': theme === 'poopoo'
      }"
   >
      {{ title }}
   </h1>
</template>

<script>
export default {
   setup() {
      return {}
   },
   // props
   props: ['title', 'theme']
}
</script>

<style scoped>
.important {
   color: crimson;
}

.info {
   color: greenyellow;
}
</style>
