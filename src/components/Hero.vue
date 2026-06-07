import { NuxtLink } from '../../.nuxt/components';
<script setup>
import { ref, onMounted } from "vue";
// stager

//useState


const isMounted = ref(false);
const currentVariant = ref("initial");

onMounted(() => {
  isMounted.value = true;
  setTimeout(() => {
    currentVariant.value = "enter";
  }, 75);
});


const socials = [
  { id: 1, icon: "i-simple-icons-instagram", size: "xl" }, // Uses fallback color 'neutral'
  { id: 2, icon: "i-simple-icons-linkedin", size: "xl", color: "secondary" }, // Overrides color
  { id: 3, icon: "i-simple-icons-github", size: "xl" },
];

const nameVarState = useState('globalName', () => 'john')


</script>

<template>
  <div class="flex justify-center py-20">

    <div class="flex flex-col items-center gap-10">
    a
      <img
        class="rounded-full h-24 w-24"
        src="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
        alt="Hero"
        loading="lazy"
      />

      <div class="max-w-3/4 text-center grid gap-8">
        <!-- NAME AND TITLE -->

        <div class="px-20">
          <h1 class="text-5xl font-bold">
            Hey, I'm Kevin Next.js and Nuxt developer
          </h1>
        </div>

        <!-- PROFESSIONAL SUMMARY -->

        <div class="flex items-center justify-center">
          <p class="flex items-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eius
            nulla officiis incidunt nobis dicta. Nemo, facere. Officia eaque
            distinctio
          </p>
        </div>

        <!-- BUTTON AND CHIP -->

        <div class="flex justify-center-safe items-center gap-6">
          <NuxtLink to="/">
            <UButton color="neutral">View Projects</UButton>
          </NuxtLink>
          <div class="flex items-center gap-">
            <BlinkingDot />

            <UButton aria-disabled="true" class="text-success" variant="ghost"
              >Open for work</UButton
            >
          </div>
        </div>
        <!-- LINKS -->

        <div class="flex gap-4 justify-center">
          <BtnSocials
            v-for="social of socials"
            :key="social.id"
            :icon="social.icon"
            :size="social.size"
            :color="social.color"
          />




        </div>
        <!-- SOCIALS END -->
      </div>
    </div>
  </div>

  <div
    class="grid grid-cols-3 gap-6 p-10 max-w-4xl mx-auto perspective-[1000px]"
  >

  </div>
</template>
