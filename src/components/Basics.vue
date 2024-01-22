<template>
   <div class="my-10 w-11/12 m-auto">
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
         <li
            v-for="book in books"
            @click="toggleFavorite(book)"
            v-bind:key="book"
            :class="{ 'bg-orange-400': book.isFav }"
         >
            <img width="100px" v-bind:src="book.img" v-bind:alt="book.title" />
            <span>{{ book.author }} - </span>
            <span>{{ book.title }}</span>
         </li>
      </ul>

      <h1 class="pt-5 pb-5 text-3xl font-bold underline">Atrribute binding</h1>
      <a target="_blank" v-bind:href="url">Youtube</a>

      <h1 class="pt-5 pb-5 text-3xl font-bold underline">Computed properties</h1>
      <h2>Favorite books</h2>

      <!-- V-for computed-->
      <ul>
         <li v-for="book in filteredBooks" v-bind:key="book">
            <img width="100px" :src="book.img" alt="" />
            <h3>{{ book.author }}</h3>
            <span>{{ book.title }}</span>
         </li>
      </ul>

      <h1 class="pt-5 pb-5 text-3xl font-bold underline">flexbox with tailwind</h1>

      <div class="flex flex-wrap md:flex-nowrap items-center">
         <div
            class="box md:basis-1/4 basis-full px-5 m-3 bg-blue-400 hover:bg-sky-700 hover:text-white text-center rounded-md font-thin"
         >
            box 1
         </div>
         <div
            class="box md:basis-1/4 basis-full px-5 m-3 bg-blue-400 text-center rounded-md font-medium"
         >
            box 2
         </div>
         <div
            class="box md:basis-1/2 basis-full px-5 m-3 bg-blue-400 text-center rounded-md font-black"
         >
            box 3
         </div>
      </div>

      <h1 class="pt-5 pb-5 text-3xl font-bold underline">Template refs</h1>

      <input type="text" ref="name" placeholder="name" />
      <input type="text" ref="number" placeholder="number" />
      <button @click="handleInputs">Click me</button>

      <TitleH1 :title="titleOne" />
      <!-- Class binding -->
      <TitleH1 :title="titleTwo" theme="important" />
      <titleH1 :title="titleOne" theme="info" />
      <titleH1 :title="titleOne" theme="poopoo" />

      <!-- CUSTOM EVENTS -->
      <Button @close="toggleCard" text="Close card" />

      <div v-if="showCard">
         <div>TEST CARD</div>
      </div>

      <!-- SLOTS -->
      <Card>
         <h1>Slot 1</h1>
         <!-- Named slots -->
         <template v-slot:links>
            <a href="#">Log in</a>
         </template>
      </Card>
      <Card>
         <h1>Slot 2</h1>
         <template v-slot:links>
            <a href="#">Sign up</a>
         </template>
      </Card>
   </div>
</template>

<script>
import TitleH1 from './TitleH1.vue'
import Card from './Card.vue'
import Button from './Button.vue'
export default {
   components: { TitleH1, Card, Button },
   data() {
      return {
         showCard: false,
         // PROPS //
         titleOne: 'This is an example for using props',
         titleTwo: 'This is another example for using props',
         // END PROPS //
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
      toggleCard() {
         this.showCard = !this.showCard
      },
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
      },
      toggleFavorite(book) {
         book.isFav = !book.isFav
      },
      handleInputs() {
         console.log(this.$refs)
         this.$refs.name.focus()
      }
   },
   computed: {
      filteredBooks() {
         return this.books.filter((book) => book.isFav)
      }
   }
}
</script>

<style scoped></style>
