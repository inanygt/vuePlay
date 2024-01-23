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
            games: []
         }
      },
      mounted() {
         fetch("http://localhost:3000/games")
            .then(res => res.json())
            .then(data => this.games = data)
            .catch(err => console.log(err.message))
      }
}
</script>

<style >

</style>