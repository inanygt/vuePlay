<template>
   <div class="my-10 m-auto w-11/12">
      <form @submit.prevent="handleForm">
         <label> Email:</label>
         <input ref="email" type="email" v-model="email">

         <div>
            <label> Password:</label>
            <input ref="password" type="password" v-model="password">
            <div class="text-red-500 text-sm"> {{ passwordError }} </div>
         </div>

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

         <div class="mt-5">
            <button class="bg-orange-300 px-4 py-1 rounded-xl">Submit</button>
         </div>
      </form>

      <div class="mt-10">
         <p> Email: {{ email }} </p>
         <p> Password: {{ password }} </p>
         <p> Role: {{ role }} </p>
         <p> Terms: {{ terms }} </p>
         <p> job: {{ job }} </p>

         <br/>

         <h1 class="mb-4"> Your Skills</h1>
         <div class="flex">
            <div v-for="skill in skills" :key="skill">
               <div @click="delSkill(skill)" class="bg-green-100 px-4 py-1 cursor-pointer me-2 rounded-xl"> {{ skill }} </div>
            </div>
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
            tempSkill: '',
            passwordError: ''
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
         },
         delSkill(skill) {
            this.skills = this.skills.filter((item) => {
               return skill !== item
            })
         },
         // handleForm() {
         //    console.log(this.email, this.password)
         //    this.passwordError = this.password > 6 ? '' : 'The password must be longer than 6 characters'
         // }
      }
    
   }
</script>

<style >

</style>