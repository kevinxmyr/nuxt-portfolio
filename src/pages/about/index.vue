<script setup>
const animationvariant = "";
</script>

<template>
  <div
    class="mt-16 mx-6 flex flex-col justify-center items-center gap-10 md:max-w-2xl md:mx-auto lg:max-w-4xl lg:mx-auto md:box-border">
    <!-- container -->

    <div class="flex flex-col lg:flex-row gap-8 lg:grid lg:grid-cols-12">
      <div class="border-amber-300 md:col-span-8 space-y-4 lg:col-span-9">
        <h1 class="text-3xl font-bold capitalize text-[#f1f1f1]">About Me</h1>
        <p class="text-[#a1a1a1]">
          Learn more about my journey as a self-taught Next.js developer, my
          engineering philosophy, and my passion for crafting high-performance
          digital experiences built on a solid foundation of I.T. education.
        </p>
      </div>

      <div
        class="md:border-amber-300 md:py- md:box-border overflow-hidden flex justify-center items-center lg:col-span-3 lg:rotate-3">
        <NuxtImg
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
            filter: 'blur(20px)',
          }"
          :visible="{
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
          class="rounded-md h-40 w-40 object-cover lg:rotate-0"
          title="profile image"
          alt="profile photo"
          src="/kevin2.JPG" />
      </div>

    </div>

    <!-- PARAGRAPH -->

    <div class="space-y-10">
      <div>
        <p class="text-[#a1a1a1]">
          Hi, I'm <span class="font-bold">Kevin Punongbayan</span>, a UX/UI
          Designer and Front-End Developer based right here in the Philippines.
          For the past six years, I've been immersed in the world of digital
          product creation, focusing on building experiences that are not just
          functional, but genuinely intuitive and engaging for users.My path
          started at Informatics Technology College, where I earned a degree in
          Interactive Design. It was there I discovered my dual passion for the
          visual language of design and the logical puzzle of code. Since then,
          I've honed my skills in both areas, believing that the best digital
          products are born from a deep understanding of both aesthetics and
          implementation.
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <h2 class="text-xl font-bold capitalize text-[#f1f1f1]">
          What Drives Me
        </h2>
        <p class="text-[#a1a1a1]">
          What keeps me excited about this work is the constant learning and the
          challenge of translating complex ideas into simple, elegant solutions.
          There's nothing more rewarding than seeing a design come to life and
          knowing it's making someone's digital interaction easier or more
          enjoyable.
        </p>
      </div>

      <div class="flex flex-col gap-3">
        <h2 class="text-xl font-bold capitalize text-[#f1f1f1]">
          Beyond the Screen
        </h2>
        <p class="text-[#a1a1a1]">
          When I'm not designing or coding, you might find me exploring Boston's
          latest coffee shops, hiking nearby trails, or occasionally
          contributing to open-source projects.Thanks for stopping by. Feel free
          to browse my <NuxtLink to="/projects">projects</NuxtLink> or
          <NuxtLink to="/contact">get in touch</NuxtLink> if you'd like to
          collaborate!
        </p>
      </div>

      <div
        class="flex justify-center items-center relative h-72 w-full overflow-hidden mx-auto">
        <!-- //images stack up together -->

        <!-- Left Polaroid (Smaller Size) -->
        <div
          class="absolute left-1/2 -translate-x-1/2 -ml-14 top-4 -rotate-6 hover:scale-105 hover:duration-500 hover:transition-all hover:zoom-100 hover:z-100">
          <div
            class="relative bg-[#f1f1f1] h-48 w-40 shadow-md rounded-sm p-2.5 pb-7 flex flex-col items-center justify-center">
            <div
              class="relative w-full aspect-square overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
              <NuxtImg
                class="object-cover w-full h-full"
                src="/kevin3.jpg"
                alt="kev" />
            </div>
            <!-- Changed: text-xs -> text-[10px] for better scale -->
            <div
              class="mt-auto text-center font-serif text-[10px] text-gray-500 italic">
              kev // dev
            </div>
          </div>
        </div>

        <!-- Right Polaroid  -->
        <div
          class="absolute right-1/2 -translate-x-1/2 -mr-56 top-4 z-50 rotate-6 hover:scale-105 hover:duration-500 hover:transition-all hover:zoom-100 drop-shadow-2xl">
          <div
            class="relative bg-[#f1f1f1] h-50 w-40 shadow-md rounded-sm p-2.5 pb-7 flex flex-col items-center justify-center">
            <div
              class="relative w-full aspect-square overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
              <NuxtImg
                class="object-cover w-full h-full"
                src="/kevin.jpg"
                alt="kev2" />
            </div>
            <div
              class="mt-auto text-center font-serif text-[10px] text-gray-500 italic">
              kev // dev
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--container -->
  </div>
</template>

<!-- <script setup>
import { onMounted, onUnmounted } from "vue";
const config = useRuntimeConfig();

const s = config.public.publiko;

const {
  data: posts,
  pending,
  error,
  refresh,
} = await useFetch("http://localhost:3010/api/largedata", {
  key: "about-page-data",
  // getCachedData: () => undefined,
});

const formData = ref({
  title: "",
  userId: Math.floor(Math.random() * 100),
});
const res = ref(null);

const emptyFieldText = ref(null);
const settingthetitlevalue = (e) => {
  console.log("setting the title value", e.target.value);
  formData.value.title = e.target.value;
}

const submitData = async () => {
  if (!formData.value.title) {
    emptyFieldText.value = "Title is required";
    return;
  }
  emptyFieldText.value = null
  try {
    res.value = await $fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData.value,
    });
    console.log("success, response: ", res.value);
  } catch (error) {
    console.error("error: ", error);
  }
};

const counter = ref(0);
const increment = () => {
  return counter.value++;
};

const image = ref("https://vuejs.org/images/logo.png");
const isDisabled = ref(false);

const handleFocus = async () => {
  console.log("focus detected");
  clearNuxtData("about-page-data");
  console.log("➔ NUXT CACHE CLEARED: Sending fresh network request...");
  await refresh();
  console.log("➔ NETWORK REQUEST COMPLETED");
};

onMounted(() => {
  // Listen to both window focus AND a direct body pointer click to guarantee capture
  window.addEventListener("focus", handleFocus);
  // document.body.addEventListener('pointerdown', handleFocus)
});

onUnmounted(() => {
  window.removeEventListener("focus", handleFocus);
  // document.body.removeEventListener('pointerdown', handleFocus)
});

const username = ref('wa;a pa')

const stateName = useState('globalName')
</script>

<template>
  <div>
    <p>state from index: {{ stateName }}</p>
    <h1 class="text-3xl font-bold underline capitalize text-primary">about page</h1>
    <p>It works!</p>
    <p class="underline">It works! {{ s.toUpperCase() }}</p>

    <UButton>
      <NuxtLink to="/">Go Home</NuxtLink>
    </UButton>

    <UButton :disabled="isDisabled">Click me</UButton>

    <img :src="image" alt="vaue logo" />
    <UButton
      :class="[
        'text-white',
        'px-5',
        'py-2',
        'hover:cursor-pointer',
        'rounded-md',
        isDisabled ? 'bg-red-300' : 'bg-blue-500',
      ]"
      @click="submitData"
    >
      {{ isDisabled ? "not available" : "available" }}
    </UButton>

    <input
      class="bg-white-500 border-2 rounded-xl text-black ml-10"
      v-model="formData.title"
      type="text"
      @change="settingthetitlevalue"
    />

    <p>{{ formData.title }}</p>

    <p :class="emptyFieldText === null ? 'hidden' : 'block text-red-500 font-bold'">{{ emptyFieldText }}</p>

    <p>res::: {{ res }}</p>


    <input type="text" v-model="username" /> <span>{{ username }}</span>


    <div>
      <button class="hover:cursor-pointer" @click="increment">
        {{ counter }}
      </button>
    </div>

    <div v-if="pending">Loading Posts...</div>

    <div v-else-if="error">
      opps! something went wrong... {{ error.message }}
    </div>

    <div v-else>
      <h2>Posts</h2>
      <ul></ul>

      <p v-for="post of posts" :key="post.id">
        {{ post.id }} - {{ post.company }} - {{ typeof post.age }} -
      </p>

      <button @click="handleFocus">click this</button>
    </div>
  </div>
</template> -->
