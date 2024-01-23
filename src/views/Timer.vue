<template>
   <div class="font-semibold  text-center mt-10">
      <h1 class="text-2xl mb-3" >Ninja reaction timer</h1>
      <button
         @click="play"
         :disabled="isPlaying"
         :class="{'bg-red-200': isPlaying}"
         class="bg-red-400 rounded-lg px-3 py-2 m-2">Play</button>
      <Block
         v-if="isPlaying"
         :delay="delay" 
         @end="endGame"
         />
         {{ reactionTime }}
      <Results/>
   </div>
</template>

<script>
import Block from '../components/Block.vue'
import Results from '../components/Results.vue'
export default {
   components: { Block, Results },
    data() {
      return {
         isPlaying: false,
         delay: null,
         reactionTime: null,

      }
   },
   methods: {
      play() {
         this.delay = 2000 + Math.random() * 5000,
         this.isPlaying = true
      },
      endGame(reactionTime) {
         console.log(reactionTime)
         this.reactionTime = reactionTime
         this.isPlaying = false
      }
   }
}
</script>

<style lang="scss" scoped></style>
