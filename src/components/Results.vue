<template>
   <div  >Score: {{ score }} ms </div>
   <div
      class='text-xl pt-10 '

      :class="{'text-green-600': score < 250, 'text-orange-600': score < 500, 'text-red-600': score > 500 }"
   >
   {{ rank }}</div>
</template>

<script>

// Todo if you click before you lose! 

export default {
  props: ['score'],
  data() {
   return {
      rank: null,
   }
  },
  mounted() {
   if (this.score < 250 ) {
      this.rank = 'You are fast!'
   } else if (this.score < 500 ) {
      this.rank = 'Not bad!'

   } else {
      this.rank = 'Too slow!'

   }
  }
}
</script>

<style >

</style>