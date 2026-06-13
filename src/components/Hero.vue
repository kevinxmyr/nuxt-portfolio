<script setup>
import { ref, onMounted } from "vue";

const isMounted = ref(false);
const currentVariant = ref("initial");

onMounted(() => {
  isMounted.value = true;
  setTimeout(() => {
    currentVariant.value = "enter";
  }, 75);
});

const socials = [
  {
    id: 1,
    icon: "i-simple-icons-instagram",
    size: "xl",
    url: "https://www.instagram.com",
  },
  {
    id: 2,
    icon: "i-simple-icons-linkedin",
    size: "xl",
    color: "",
    url: "https://www.linkedin.com",
  },
  {
    id: 3,
    icon: "i-simple-icons-github",
    size: "xl",
    url: "https://www.github.com",
  },
];

const nameVarState = useState("globalName", () => "john");

const windowWidth = ref("");

const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};
onMounted(() => {
  updateWidth(); // Set initial client-side width
  window.addEventListener("resize", updateWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<template>
  <div
    name="hero"
    class="flex select-none justify-center py-20">
    <!-- lg:border-l lg:border-l-[#353535] lg:border-l-opacity-25 lg:border-r lg:border-r-[#353535] md:border-r-opacity-25 -->
    <div class="flex flex-col items-center gap-10">
      <div class="relative">
        <div
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
            filter: 'blur(20px)',
          }"
          :enter="{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 100, // High stiffness gives it punch
              damping: 15, // Low damping allows a beautiful elastic wobble
              mass: 0.8, // Lighter mass makes it snappy
              delay: 40,
            },
          }"
          class="rounded-full border-2 border-[#353535] absolute top-[-5%] left-[-5%] w-22 h-22 z-10 p-2"></div>
        <NuxtImg
          v-motion.once
          :initial="{
            opacity: 0,
            y: 20,
            filter: 'blur(20px)',
          }"
          :enter="{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 100, // High stiffness gives it punch
              damping: 15, // Low damping allows a beautiful elastic wobble
              mass: 0.8, // Lighter mass makes it snappy
              delay: 40,
            },
          }"
          class="w-20 h-20 rounded-full object-cover"
          src="/kevin.JPG"
          alt="Kimberly Tadus <3"
          loading="lazy" />
      </div>

      <div class="text-center grid gap-8">
        <!-- NAME AND TITLE -->

        <ClientOnly>
          <div class="">
            <div class="max-w-xl mx-auto capitalize px-6 md:px-0">
              <RevealingText
                text="Hey, I'm kevin, Next.js & Nuxt developer"
                by="words" />
              <!-- {{ nameVarState }} -->
              <!-- {{ windowWidth }} -->
            </div>
          </div>
        </ClientOnly>

        <!-- PROFESSIONAL SUMMARY -->

        <ClientOnly>
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 20,
              filter: 'blur(20px)',
            }"
            :enter="{
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: index * staggerDelay,
              },
            }"
            class="flex items-center justify-center text-center mx-auto
            max-w-md lg:max-w-2xl box-border whitespace-pre-wrap

            ">
            <p class="flex items-center text-[#A1A1A1]">
              <!-- <RevealingText text="" /> NAG EEROR! KAPAG MERON NITO NAG EEROR YUNG KEVIN -->
              Full-Stack Engineer specialized in crafting modern web applications using Next.js and React. From designing responsive UIs with Tailwind CSS to architecting secure REST/GraphQL APIs and databases, I build production-ready digital products from scratch. Focused on performance, SEO, and flawless user experiences.
            </p>
          </div>
        </ClientOnly>

        <!-- BUTTON AND CHIP -->

        <div
          v-motion
          :initial="{ opacity: 0, filter: 'blur(5px)' }"
          :enter="{
            opacity: 1,
            filter: 'blur(0px)',
            transition: { delay: 500 },
          }"
          :leave="{ y: -20 }"
          class="flex justify-center-safe items-center gap-6">
          <NuxtLink to="/projects">
            <UButton color="neutral">View Projects</UButton>
          </NuxtLink>
          <div class="flex items-center gap-">
            <BlinkingDot />
            <UButton
              aria-disabled="true"
              class="text-success"
              variant="ghost"
              >Open for work</UButton
            >
          </div>
        </div>
        <!-- LINKS -->

        <div class="flex gap-4 justify-center box-border p-2">
          <NuxtLink
            v-for="(social, index) of socials"
            :key="social.id"
            :to="social.url"
            target="_blank"
            :name="`social media link ${social.name || index}`"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 350 + index * 50,
              },
            }">
            <BtnSocials
              class="hover:bg-transparent hover:scale-110 hover:cursor-pointer hover:duration-500 hover:transition-all"
              :icon="social.icon"
              :size="social.size"
              :color="social.color" />
          </NuxtLink>
        </div>
        <!-- SOCIALS END -->
      </div>
    </div>
  </div>
</template>
