<template>
   <div class="w-11/12 m-auto my-10">
      <p>hello my name is {{ name }} and i am {{ age }} years ols</p>
      <button @click="handleClick"></button>
   </div>
</template>

<script >
export default {
   setup() {
      let name = 'inan'
      let age = 30

      const handleClick = () => {
         console.log('clicked')
      }

      return { name, age, handleClick }
   }
}

</script>

<style >

</style>