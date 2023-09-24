<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8 py-8 overflow-x-auto">
    <table class="w-full min-w-max text-neutral-300 text-sm border-collapse">
      <thead>
        <tr>
          <!-- Header -->
          <th
            v-for="header in headers"
            :key="header"
            class="text-left font-normal border-b-[1px] border-neutral-700 py-2 px-4"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(song, index) in songs" :key="song.id">
          <!-- Number -->
          <td :class="['py-2 px-4', { 'pt-6': index === 0 }]">{{ index + 1 }}</td>

          <!-- Title -->
          <td :class="['flex gap-4 py-2 px-4', { 'pt-6': index === 0 }]">
            <img :src="song.album.image" :alt="song.album.name" class="w-10 h-10" />
            <div>
              <p class="text-white text-base">{{ song.title }}</p>
              <p>{{ getArtists(song.artists) }}</p>
            </div>
          </td>

          <!-- Album -->
          <td :class="['py-2 px-4', { 'pt-6': index === 0 }]">{{ song.album.name }}</td>

          <!-- Duration -->
          <td :class="['py-2 px-4', { 'pt-6': index === 0 }]">{{ song.duration }}</td>

          <!-- Favorite -->
          <td :class="['py-2 px-4 text-center', { 'pt-6': index === 0 }]">
            <button
              v-if="!song.isFavorite"
              aria-label="Favorite"
              class="focus:outline-none"
              @click="addToFavorites(song.id)"
            >
              <HeartIconOutline class="h-6 w-6 text-neutral-300 hover:text-white" />
            </button>
            <button
              v-else
              aria-label="Unfavorite"
              class="focus:outline-none"
              @click="removeFromFavorites(song.id)"
            >
              <HeartIconSolid class="h-6 w-6 text-green-600 hover:text-green-700" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { HeartIcon as HeartIconOutline } from "@heroicons/vue/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/24/solid";
import type { Song } from "@/types";

defineProps<{
  songs: Song[];
}>();

const emit = defineEmits(["addToFavorites", "removeFromFavorites"]);

const headers = ref(["#", "Title", "Album", "Duration", ""]);

const getArtists = (artists: Array<string>) => artists.join(", ");

const addToFavorites = (id: number) => {
  emit("addToFavorites", id);
};

const removeFromFavorites = (id: number) => {
  emit("removeFromFavorites", id);
};
</script>

<style scoped></style>
