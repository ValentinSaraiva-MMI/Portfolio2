<template>
  <figure
    class="m-4 lg:my-8  flex h-[45vh] w-[55vw] flex-col   bg-[#141414] md:mx-auto md:h-[56vh] md:w-[35vw] lg:ml-0 lg:h-[59vh] lg:w-[29.8vw] xl:ml-0 xl:h-[59vh] xl:w-[29.8vw]">
    <div class="ml-4 mt-4">
      <p class="font-lato text-base font-light text-white md:text-base lg:text-base xl:text-base">
        {{ date }}
      </p>
      <h4 class="font-lat mt-2 text-2xl font-medium text-white md:text-2xl lg:text-3xl xl:text-4xl">
        {{ titre }}
      </h4>

      <h5 class="text-base font-medium text-white md:text-base lg:text-lg xl:text-xl">
        {{ tache }}
      </h5>
    </div>

    <img
      class="my-auto h-auto max-h-96 w-[80%] md:max-h-[21rem] lg:max-h-[18rem]    self-center md:w-[85%] lg:w-[85%] xl:w-[85%]"
      :src="image" alt="image de projets" />
    <a class="viewmore">
      <span class="tag">Voir projet</span>
      <span class="arrow arrow--right"></span>
    </a>
  </figure>
</template>

<script>
import { stringifyQuery } from "vue-router";

export default {
  name: "projetcard",
  components: {},
  props: {
    image: {
      type: String,
    },

    titre: {
      type: String,
    },

    tache: {
      type: String,
    },

    date: {
      type: String,
    },
  },
};
</script>
