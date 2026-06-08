<template>

   <div class="space-y-6 space-x-4 px-8 mt-20 mb-50">

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
         <h2 class="capitalize font-bold mb-4">Work experience</h2>

         <div class="text-[#A1A1A1] text-sm">
            <div class="flex justify-between">
               <p>2020 - 2026</p>
               <p>—</p>
               <p>brand designer</p>
            </div>
            <div class="flex justify-between ">
               <p>2017 - 2020</p>
               <p>—</p>
               <p>web developer</p>
            </div>
            <div class="flex justify-between ">
               <p>2010 - 2015</p>
               <p>—</p>
               <p>Full Stack Developer<span class="text-[#A1A1A1]"></span></p>
            </div>

         </div>
      </div>

   </div>


</template>



<script>
export default {
   name: 'AboutMeContainer'
}
const st = 'As a UX/UI designer and front-end developer with 6 years of experience, I leverage my Boston University Interactive Design degree to craft user-centered digital experiences. My approach blends creative strategy with technical expertise, transforming concepts into functional, purposeful digital products that seamlessly integrate design and technology.'
console.log(st.split(" ").length)
</script>