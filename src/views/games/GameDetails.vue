<template>
   <div v-if="game">
      <h1>{{ game.title }}</h1>
      <div>{{ game.details }}</div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            id: this.$route.params.id,
            game: null,
         }
      },
      mounted() {
         fetch("http://localhost:3000/games/" + this.id)
            .then(res => res.json())
            .then(data => this.game = data)
            .catch(err => console.log(err.message))
      }
   }
</script>

<style >

</style>