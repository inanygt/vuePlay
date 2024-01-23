<template>
   <div v-if="showBlock" class="bg-red-700 w-60 h-60 m-auto mt-5 flex items-center justify-center rounded-2xl">
      <div class="text-white">Click me</div>
   </div>   
</template>

<script>
export default {
   setup () {
      return {}
   },
   props: ['delay'],
   data() {
      return {
         showBlock: false
      }
   },
   mounted() {
      console.log('Block mounted'),
      setTimeout(() => {
         this.showBlock = true
         console.log(this.delay)
      }, this.delay);
   },
   updated() {
      console.log('Block updated')
   },
   unmounted() {
      console.log('Block unmounted')
   }
} 

</script>

<style lang="scss" scoped>

</style>