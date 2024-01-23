<template>
   <div class="mt-10 m-auto w-11/12">
      <form>
         <label> Email:</label>
         <input ref="email" type="email">
      </form>
   </div>
</template>

<script>
   export default {
      mounted() {
         this.$refs.email.focus();
      }
   }
</script>

<style scoped>

</style>