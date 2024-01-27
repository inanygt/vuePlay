<template>
   <div class="w-11/12 m-auto my-10">
      <p>hello my name is {{ name }} and i am {{ age }} years old</p>
      <button class="mt-3 py-1 px-2 bg-green-400 rounded-xl" @click="handleClick">Click me</button>
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl py-2 px-2 mx-3 " type="text" v-model="name">

      <br>
      <br>

      <!-- Computed properties -->
      <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl py-2 px-2 mx-3" type="text" v-model="search">
      <div>search the name - {{ search }}</div>

      <div v-if="search">
         <div v-for="name in matchingNames" :key="name">
         {{ name }}
         </div>
      </div>
      <button @click="handleStopWatch">Stop watch</button>
   </div>

  
</template>

<script >
import { ref, computed, watch, watchEffect } from 'vue'

export default {
   setup() {
      const name = ref('inan')
      const age = ref(30)
      const search = ref('')

      // Computed

      const names = ref(['inan', 'pieter', 'laurens', 'tom', 'nick', 'jaak', 'mars'])

      const matchingNames = computed(() => {
         return names.value.filter((name) => name.includes(search.value) )
      })

      // Watch 

      const stopWatch = watch(search, () => {
         console.log('watch search')
      })

     // watcheffect

      const stopWatchEffect = watchEffect(() => {
         console.log('watcheffect function ran', search.value)
      })


      const handleClick = () => {
         name.value = 'Mario'
         age.value++
      }

      const handleStopWatch = () => {
         stopWatch()
         stopWatchEffect()
      }

      return { name, names, search, handleStopWatch, matchingNames, age, handleClick }
   }
}

</script>

<style >

</style>