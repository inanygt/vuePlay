<template>
   <div class="mt-10 m-auto w-11/12">
      <form>
         <label> Email:</label>
         <input ref="email" type="email" v-model="email">

         <label> Password:</label>
         <input ref="password" type="password" v-model="password">

         <br/>
         <br/>

         <label>Role:</label>
         <select v-model="role">
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
         </select>
      </form>

      <div class="mt-10">
         <p> Email: {{ email }} </p>
         <p> Password: {{ password }} </p>
         <p> Role: {{ role }} </p>
      </div>
   </div>
</template>

<script>
   export default {
      mounted() {
         this.$refs.email.focus();
      },
      data() {
         return {
            email: '',
            password: '',
            role: 'developer'
         }
      }
   }
</script>

<style scoped>

</style>