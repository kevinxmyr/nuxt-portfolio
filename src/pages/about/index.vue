<script setup>
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
</template>
