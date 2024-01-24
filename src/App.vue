<template>
   <nav class="w-11/12 m-auto mt-10">
      <button
         @click="goHome"
         class="pe-4 ">Home
   </button>
      <RouterLink
         to="timer"
         class="px-4 ">timer
      </RouterLink>
      <RouterLink
         :to="{ name: 'signup' }"
         class="px-4 ">Sign up 
      </RouterLink>
       <RouterLink
         :to="{ name: 'games' }"
         class="px-4 ">Games 
      </RouterLink>
      <RouterLink
         :to="{ name: 'composition'}"
         class="px-4">
         Composition Api
      </RouterLink>
   </nav>
   <RouterView />
</template>

<script>
   export default {
      methods: {
         goHome() {
            this.$router.push({ name: 'home' })
         }
      }
   }
</script>

<style scoped></style>
