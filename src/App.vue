<script></script>

<template>
   <nav class="w-11/12 m-auto mt-10">
      <RouterLink
         to="/"
         class="pe-4 ">Home
      </RouterLink>
      <RouterLink
         to="timer"
         class="px-4 ">timer
      </RouterLink>
      <RouterLink
         :to="{ name: 'signup' }"
         class="px-4 ">Sign up 
      </RouterLink>
       <RouterLink
         :to="{ name: 'games' }"
         class="px-4 ">Games 
      </RouterLink>
   </nav>
   <RouterView />
</template>

<style scoped></style>
