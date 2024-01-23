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

         <br/>
         <br/>

         <div>
            <input type="checkbox" required v-model="terms">
            <label class="px-2">Accept terms and conditions</label>
         </div>

         <br/>
         <br/>

         <div >
            <input type="checkbox" value="remote" v-model="job">
            <label class="px-2">Remote</label>
         </div>
         <div>
            <input type="checkbox" value="hybrid" v-model="job">
            <label class="px-2">hybrid</label>
         </div>
         <div>
            <input type="checkbox" value="on-site" v-model="job">
            <label class="px-2">on site</label>
         </div>

         <div class="mt-10">
         <label class="pe-2">Skills</label>
         <input class="border rounded" type="tempSkill" v-model="tempSkill" @keyup="addSkill">
      </div>
      </form>

      <div class="mt-10">
         <p> Email: {{ email }} </p>
         <p> Password: {{ password }} </p>
         <p> Role: {{ role }} </p>
         <p> Terms: {{ terms }} </p>
         <p> job: {{ job }} </p>

         <br/>
         <br/>

         <h1>Skills</h1>
         <div v-for="skill in skills" :key="skill">
            <p> {{ skill }} </p>
         </div>
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
            role: 'developer',
            terms: false,
            job: [],
            skills: [],
            tempSkill: ''
         }
      },
      methods: {
         addSkill(e) {
            if (e.key === 'Enter') {
               if (!this.skills.includes(this.tempSkill)) {
                  this.skills.push(this.tempSkill)
               }
               this.tempSkill = ''
            }
         }
      }
   }
</script>

<style >

</style>