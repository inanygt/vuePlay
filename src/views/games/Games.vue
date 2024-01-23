<template>
   <div class="mt-10">
      <div 
      v-for="game in games" :key="game.id"
      >
      <RouterLink :to="{ name: 'gamedetails', params: { id: game.id } }">
         <p>{{ game.title }}</p>
      </RouterLink>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            games: [
               {id:1, title: 'Hades'},
               {id:2, title: 'Spire'},
            ]
         }
      }
   }
</script>

<style >

</style>