<template>
  <header class="py-8 border-b-[1px] border-neutral-700">
    <div class="max-w-5xl mx-auto md:flex justify-between items-center px-4 md:px-8">
      <div class="flex items-center gap-6 mb-6 md:mb-0">
        <!-- Play button -->
        <button
          aria-label="Play playlist"
          class="bg-green-600 border-2 border-green-600 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:border-neutral-900 ring-green-800"
        >
          <PlayIcon class="h-6 w-6 text-neutral-900" />
        </button>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-white">Good Vibes</h1>
      </div>

      <!-- Search-->
      <div class="relative w-full md:w-auto">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon class="h-6 w-6 text-white" />
        </div>
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search by song title..."
          class="bg-neutral-700 border-2 border-neutral-700 rounded-md text-white py-2 pl-12 pr-4 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:border-neutral-900 ring-green-800 w-full md:w-auto"
        />
      </div>
    </div>
  </header>
  <main>
    <PlaylistTable
      :songs="filteredSongs"
      @add-to-favorites="addToFavorites"
      @remove-from-favorites="removeFromFavorites"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import PlaylistTable from "@/components/PlaylistTable.vue";
import { PlayIcon } from "@heroicons/vue/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import playlist from "@/api/playlist.json";
import type { Song } from "@/types";

const songs = ref<Song[]>(playlist);
const searchTerm = ref("");

const filteredSongs = computed(() =>
  songs.value.filter((song) => song.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
);

const addToFavorites = (id: number) => {
  const index = songs.value.findIndex((song) => song.id === id);
  songs.value[index].isFavorite = true;
};

const removeFromFavorites = (id: number) => {
  const index = songs.value.findIndex((song) => song.id === id);
  songs.value[index].isFavorite = false;
};
</script>
