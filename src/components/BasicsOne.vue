<template>
   <h1 class="pb-5 text-3xl font-bold underline">Vue Basics</h1>
   <div v-if="showBooks">
      <h3>{{ title }} - {{ age }}</h3>
   </div>
   <button @click="age++">Increase age</button>
   <br />
   <br />
   <button @click="toggleBooks">
      <span v-if="showBooks">hide book</span>
      <span v-else>Show book</span>
   </button>
   <br />
   <br />
   <div v-show="showBooks">Currently showing books</div>

   <h1 class="pt-5 pb-5 text-3xl font-bold underline">Mouse Events</h1>

   <div @mouseover="handleEvent($event, 5)" class="box">Mouseover (enter)</div>
   <div @mouseleave="handleEvent" class="box">Mouseleave</div>
   <div @dblclick="handleEvent" class="box">Double click</div>
   <div @mousemove="onMouseOver" class="box">position {{ x }} - {{ y }}</div>

   <h1 class="pt-5 pb-5 text-3xl font-bold underline">V-for</h1>
   <ul>
      <li v-for="book in books" v-bind:key="book" :class="{ fav: book.isFav }">
         <img width="100px" v-bind:src="book.img" v-bind:alt="book.title" />
         <span>{{ book.author }} - </span>
         <span>{{ book.title }}</span>
      </li>
   </ul>

   <h1 class="pt-5 pb-5 text-3xl font-bold underline">Atrribute binding</h1>
   <a target="_blank" v-bind:href="url">Youtube</a>
</template>

<script>
export default {
   data() {
      return {
         showBooks: true,
         title: 'The last empires',
         age: 30,
         x: 0,
         y: 0,
         url: 'https://www.youtube.com/',
         books: [
            {
               id: 1,
               author: 'Inan Yigit',
               title: 'wat nu',
               img: './src/assets/images/hp1.webp',
               isFav: true
            },
            {
               id: 2,
               author: 'Pieter Malfliet',
               title: 'wat dan',
               img: './src/assets/images/hp2.webp',
               isFav: false
            },
            {
               id: 3,
               author: 'Laurens Vossen',
               title: 'wat anders',
               img: './src/assets/images/hp3.webp',
               isFav: true
            }
         ]
      }
   },
   methods: {
      increaseAge() {
         this.age++
      },
      toggleBooks() {
         this.showBooks = !this.showBooks
      },
      handleEvent(e, data) {
         console.log(e, e.type)
         if (data) {
            console.log(data)
         }
      },
      onMouseOver(e) {
         this.x = e.offsetX
         this.y = e.offsetY
      }
   }
}
</script>

<style scoped>
.box {
   padding: 100px 0;
   width: 200px;
   text-align: center;
   background: #ddd;
   margin: 20px;
   display: inline-block;
}
.fav {
   background: yellow;
}
</style>
