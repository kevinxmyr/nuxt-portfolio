import { NuxtImg, NuxtLink } from '../../.nuxt/components';
<script setup>
const certifications = [
  {
    id: 1,
    title: "React: The Complete Web Developer in 2022: Zero to Mastery",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-1418ec8e-b312-44db-88d8-0d180c85f07d.jpg",
    issuer: "Udemy",
    year: "2022",
    description:
      "Learned Javascript along side React a Javascript Library. Mastered advanced React architecture, state management, and CSR (Client Side Rendering) routing.",
    instructor: "Andrei Neagoie, Zero To Mastery",
  },
  {
    id: 2,
    title: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-f42ea273-2ea2-4bdf-8b2e-8b4fa8bcc614.jpg?v=1699344835000",
    issuer: "Udemy",
    year: "2023",
    description:
      "Learned Full-stack web development using Next.js Pages Router. Developed dynamic user interfaces, optimized server-side rendering (SSR), and integrated secure API routes.",
    instructor: "Maximilian Schwarzmüller",
  },
];
const nonITList = [
  {
    id: 1,
    title:
      "TESDA DomRAC (Domestic Refrigeration & Air Conditioning Servicing National Certificate II)",
    image: "https://loremflickr.com/640/480/certificate",
    issuer: "TESDA",
    year: "2025",
    description:
      "Captured core competencies in hands-on installation, maintenance, servicing, and repairing residential cooling systems. Mastered basics of  electrical and electronic troubleshooting, brazing copper and aluminum tubes, refrigerant handling, use of HVAC tools safety, system re-process and cleaning, and diagnostic safety protocols aligned with corporate HVAC standards.",
    instructor: "Billy Hamor",
  },
  {
    id: 2,
    title: "Electronics Technician",
    image: "https://loremflickr.com/640/480/certificate",
    issuer: "South Dynamic Learning and Training Center Inc.",
    year: "2025",
    description:
      "Mastered diagnostic testing, component-level repair, and circuitry assembly for electronic equipment. Developed technical competencies in troubleshooting, soldering, and interpreting schematics. Demonstrated hands-on experience in circuit assembly and troubleshooting. In line with my HVAC/DomRAC National certificate.",
    instructor: "Chuck Lim",
  },
  {
    id: 3,
    title: "AutoCAD Operator/Draftsman 2D and 3D",
    image: "https://loremflickr.com/640/480/certificate",
    issuer: "Classnovation Skills Learning Centre",
    year: "2018",
    description:
      "Executed professional architectural and mechanical drafting works. Developed precision blueprints, 2D/3D models, and schematic layouts. Mastered industry-standard design protocols, spatial planning, and component manufacturing specifications.",
    instructor: "Daryl",
  },
];

const pdfurl =
  "https://drive.google.com/uc?export=view&id=1D38tU2etyyCfhDQHNcc1As8Y3s9QTU5V";

// "https://google.com/file/d/1D38tU2etyyCfhDQHNcc1As8Y3s9QTU5V/view?usp=sharing";
</script>

<template>
  <section
    name="certifications"
    class="max-w-225 px-8 mx-auto mb-10">
    <h2 class="font-bold text-lg capitalize">certifications</h2>
    <ul class="mt-4 space-y-10">
      <li
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
        v-for="cert in certifications"
        :key="cert.id"
        class="space-y-2 hover:cursor-pointer">
        <h3 class="font-bold">{{ cert.title }}</h3>
        <p class="text-[#A1A1A1] text-sm">
          {{ cert.issuer }} • {{ cert.instructor }} • {{ cert.year }}
        </p>
        <p class="text-[#A1A1A1]">{{ cert.description }}</p>
        <a
          :href="cert.image"
          target="_blank"
          class="text-sm text-secondary hover:underline"
          >View Certificate</a
        >
      </li>
    </ul>
  </section>

  <!-------------------- NON IT CERTIFICATIONS --------------------->

  <section class="max-w-225 px-8 mx-auto space-y-4">
    <h2
      v-motion
      :initial="{ y: 50, opacity: 0, filter: 'blur(10px)' }"
      :visible="{
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 500  },
      }"
      class="font-bold text-lg capitalize">
      Non-IT Certifications
    </h2>
    <ul class="mt-4 space-y-8">
      <li
        v-motion="'slide-visible-right'"
        :initial="{ y: 50, opacity: 0, filter: 'blur(10px)' }"
        :visible="{
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 500, delay: index * 150 },
        }"
        v-for="(nonIT, index) in nonITList"
        :key="nonIT.id"
        class="space-y-2">
        <h3 class="font-bold">{{ nonIT.title }}</h3>
        <p class="text-[#A1A1A1] text-sm">
          {{ nonIT.issuer }} • {{ nonIT.instructor }} • {{ nonIT.year }}
        </p>
        <p class="text-[#A1A1A1]">{{ nonIT.description }}</p>
        <a
          :href="nonIT.image"
          target="_blank"
          class="text-sm text-secondary hover:underline"
          >View Certificate</a
        >
      </li>
    </ul>
  </section>
</template>
