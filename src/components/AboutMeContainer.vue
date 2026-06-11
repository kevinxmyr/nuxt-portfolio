<script setup>

const experiences = [
   {
      year: "2020 - 2026",
      position: "brand designer"
   },
   {
      year: "2017 - 2020",
      position: "web developer"
   },
   {
      year: "2010 - 2015",
      position: "Full Stack Developer"
   },
]


</script>

<template>

   <div class="space-y-6 space-x-4 px-8 mt-28 mb-24 whitespace-pre-wrap max-w-225 mx-auto lg:grid lg:grid-cols-2 lg:gap-10">

      <div>
         <h2 class="capitalize font-bold mb-4 font-public">about me</h2>

         <p class="text-sm text-[#A1A1A1]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis voluptatum molestias necessitatibus
            veritatis debitis quos rerum officia vitae totam aliquam similique, a saepe aspernatur aut accusamus quae
            officiis hic eius incidunt mollitia possimus architecto quisquam magnam cum. Tempore nesciunt minus laborum
            commodi dolorum. Quam, quos officiis.
         </p>
      </div>

      <div class="capitalize">
         <h2 class="font-bold mb-4">Work experience</h2>

         <!-- Single wrapper for shared text colors and sizes -->
         <div class="text-[#A1A1A1] text-sm">
            <div v-for="(exp, index) in experiences" :key="index" class="flex w-full justify-between items-center">
               <p>{{ exp.year }}</p>
               <hr class="grow border-t border-[#A1A1A1] px-2 opacity-25 mx-2">
               <p>{{ exp.position }}</p>
            </div>
         </div>
      </div>

   </div>


</template>
