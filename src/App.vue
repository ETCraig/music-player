<template>
  <app-header></app-header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <player></player>

  <auth></auth>
</template>

<script>
import AppHeader from "./components/Header.vue";
import Auth from "./components/Auth.vue";
import Player from "./components/Player.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "@/includes/firebase";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    Player,
  },
  computed: {
    ...mapWritableState(useUserStore, ["loggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.loggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s lienar;
  opacity: 0;
}
</style>
