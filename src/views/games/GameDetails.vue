<template>
   <div>
      <p>The route param is: {{ id }} </p>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            id: this.$route.params.id
         }
      }
   }
</script>

<style >

</style>