<div
  v-motion
  :initial="{ opacity: 0, x: -180 }"
  :enter="{ opacity: 1, x: 25 }"
  class="p-8 bg-linear-to-tr from-violet-600 to-indigo-600 text-white rounded-2xl shadow-2xl max-w-sm text-center font-bold"
>
            hello world
          </div>

<div
  v-motion
  :initial="{
    opacity: 0,
    scale: 0.3,
    y: 100,
    rotate: -180,
  }"
  :enter="{
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 160, // High stiffness gives it punch
      damping: 12, // Low damping allows a beautiful elastic wobble
      mass: 0.8, // Lighter mass makes it snappy
    },
  }"
  class="p-8 bg-linear-to-tr from-violet-600 to-indigo-600 text-white rounded-2xl shadow-2xl max-w-sm text-center font-bold"
>
            ✨ Complex Spring Entrance
          </div>


<!-- //ito with STAGGERING WITH FOR LOOP -->
<ClientOnly>
      <div
        class="grid grid-cols-3 gap-6 p-10 max-w-4xl mx-auto perspective-[1000px]"
      >
        <div
          v-for="(card, i) in cards"
          :key="i"
          v-motion="currentVariant"
          :variants="purpleVariants(i)"
          class="p-8 bg-linear-to-tr from-violet-600 to-indigo-600 text-white rounded-2xl shadow-2xl text-center font-bold"
        >
          {{ card }}
        </div>
      </div>
    </ClientOnly>

    // 1. Define parent orchestration variants
const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Blasts each child 0.15s after the previous one
    },
  },
};
const purpleVariants = (i) => ({
  initial: {
    opacity: 0,
    scale: 2.5,
    y: 100,
    rotate: -180,
    filter: "blur(20px)",
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 12,
      mass: 0.8,
      delay: i * 150, // Stagger timing
    },
  },
});



const initialStyle = {
  opacity: 0,
  scale: 2.5,
  y: 100,
  rotate: -180,
  filter: "blur(20px)",
};

// REUSABLE BASE SPRING CONFIGURATION
const springTransition = (delayMs) => ({
  type: "spring",
  stiffness: 160,
  damping: 12,
  mass: 0.8,
  delay: delayMs, // This is where the manual stagger sequencing happens
});
