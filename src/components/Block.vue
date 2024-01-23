<template>
   <div
      v-if="showBlock"
      @click="stopTimer"
      class="bg-red-700 w-60 h-60 m-auto mt-5 flex items-center justify-center rounded-2xl">
      <div class="text-white">Click me</div>
   </div>   
</template>

<script>
export default {
   // Props
   props: ['delay'],
   // Data
   data() {
      return {
         showBlock: false,
         timer: null,
         reactionTime: 0
      }
   },
   // Methods
   methods: {
      startTimer() {
         this.timer = setInterval(() => {
            this.reactionTime += 10
         }, 10)
      },
      stopTimer() {
         clearInterval(this.timer)
         console.log(this.timer)
         console.log(this.reactionTime)
      }
   },
   // Lifecycle hooks 
   mounted() {
      console.log('Block mounted'),
      setTimeout(() => {
         this.showBlock = true
      }, this.delay);
   },
   updated() {
      console.log('Block updated')
      this.startTimer();
   },
   unmounted() {
      console.log('Block unmounted')
   }
} 

</script>

<style lang="scss" scoped>

</style>