<template>
   <button @click="closeCard" class="bg-black text-white rounded-xl p-2 my-2">{{ text }}</button>
</template>

<script>
export default {
   props: ['text'],
   methods: {
      closeCard() {
         this.$emit('close')
      }
   }
}
</script>
