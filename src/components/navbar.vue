<template><!-- 
  <div class="flex h-16 w-full items-center justify-between p-7">

</div>

    -->
      <nav>


        <ul class="  z-111 hidden flex-auto gap-2 nav-links sm:flex">
          <!-- menu deployée -->

          <li class="hover-underline-animation  ">
            <router-link to="/">Accueil</router-link>
          </li>
          <li class="hover-underline-animation   ">
            <router-link to="/apropos">À propos</router-link>
          </li>
          <li class="hover-underline-animation   ">
            <router-link to="/">Projets</router-link>
          </li>

          <li class="hover-underline-animation  ">
            <a href="../public/document/CV.pdf" download>CV</a>
          </li>

          <li class="hover-underline-animation   ">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>

      </nav>

      <button class=" z-111 text-xl sm:hidden" aria-haspopup="true" aria-controls="menu" :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">

        <div
          class="flex absolute top-5 right-4 z-50 md:hidden w-8 h-5
                                                                                                                                                 flex-col justify-between"
          @click="switchMenu">
          <span class="w-full h-[3px] bg-white  transition-all" :class="menuOuvert && `rotate-45`"></span>
          <span class="w-2/3 h-[2px] bg-white self-end transition-all"
            :class="menuOuvert && ` w-[100%]  hidden absolute `"></span>
          <span class="w-full h-[2px] bg-white transition-all" :class="menuOuvert && ` absolute -rotate-45 `"></span>
        </div>

      </button>

      <div id="menu"
        class="fixed inset-0 z-100 translate-x-full overflow-y-hidden bg-noir motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }">
        <div class="mt-11">
          <p class="ml-4 inline-block pr-3 font-montserrat text-4xl  text-white">Portfolio</p>
          <p class="ml-4 inline-block font-montserrat text-2xl text-white">Valentin Saraiva</p>
        </div>

        <ul class="ml-4 flex h-5/6 -mt-6  flex-col justify-evenly font-montserrat text-4xl  text-white">
          <li @click="menuOuvert = !menuOuvert" class=""><router-link to="/">Accueil </router-link></li>
          <li @click="menuOuvert = !menuOuvert" class=""><router-link to="/apropos">À propos </router-link></li>
          <li @click="menuOuvert = !menuOuvert" class=""><router-link to="/">Projets </router-link></li>
          <li @click="menuOuvert = !menuOuvert" class=""><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
<!-- "z-50" place le menu eu dessus de tous les autes éléments.
                              "relative" est indispensable avec un z- sinon ce dernier n'est pas pris en compte
                              "sm:hidden permet de cacher l'élément lorsque l'écran est moins large que 640px    --><!--

    </div>
    --></template>

<script>
import HamburgerMenueVue from "./icons/HamburgerMenue.vue";
import MenuHamburgerPortfolio from "./icons/HamburgerMenu.vue";

export default {
  name: "navbar",
  components: { HamburgerMenueVue, MenuHamburgerPortfolio },
  data() {
    return {
      menuOuvert: false,
    };
  },
};
</script>
