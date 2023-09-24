<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8 py-8 overflow-x-auto">
    <table class="w-full min-w-max text-neutral-300 text-sm border-collapse">
      <thead>
        <tr>
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
          <td :class="['py-2 px-4', { 'pt-6': index === 0 }]">{{ index + 1 }}</td>
          <td :class="['flex gap-4 py-2 px-4', { 'pt-6': index === 0 }]">
            <img :src="song.album.image" :alt="song.album.name" class="w-10 h-10" />
            <div>
              <p class="text-white text-base">{{ song.title }}</p>
              <p>{{ getArtists(song.artists) }}</p>
            </div>
          </td>
          <td :class="['py-2 px-4', { 'pt-6': index === 0 }]">{{ song.album.name }}</td>
          <td :class="['py-2 px-4', { 'pt-6': index === 0 }]">{{ song.duration }}</td>
          <td :class="['py-2 px-4 text-center', { 'pt-6': index === 0 }]">
            <button aria-label="Favorite" class="focus:outline-none">
              <HeartIcon class="h-6 w-6 text-neutral-300 hover:text-white" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { HeartIcon } from "@heroicons/vue/24/outline";
import playlist from "@/api/playlist.json";

const headers = ref(["#", "Title", "Album", "Duration", ""]);
const songs = ref(playlist);

const getArtists = (artists: Array<string>) => artists.join(", ");
</script>

<style scoped></style>
