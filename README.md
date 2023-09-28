# Introduction to Vue

## What is Vue?

Vue is a JavaScript framework that allows developers to build user interfaces. It was created by Evan You as a personal side project in 2014, and it is now an independent, community-driven project. Vue is highly flexible and can be adopted gradually by projects.

## Demo

We will create a song playlist with Vue. Users can favorite songs and search by title.

![](https://res.cloudinary.com/melindagolden/image/upload/v1695865513/notes/r5vv8lyq2x9tbsggnksk.png)

## Features

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)
- ESLint
- Prettier

## Requirements

- [Node 16+](https://nodejs.org/en)
- [VSCode](https://code.visualstudio.com/)
- [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Vue Language Features \(Volar\) extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin \(Volar\) extension](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## VSCode settings

```
// settings.json

{
  // ...
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "prettier.trailingComma": "none",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Getting started

The first step is to [install Vue](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).
`npm create vue@latest`

Answer yes to everything except JSX, Pinia, Vitest, and end-to-end testing.

```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

Then, install the dependencies.
`npm install`

Update the `.eslintrc.cjs` file to use `plugin:vue/vue3-strongly-recommended`. See [￼`eslint-plugin-vue`￼](https://eslint.vuejs.org/user-guide/#bundle-configurations) and the official [Vue style guide](https://vuejs.org/style-guide/rules-strongly-recommended.html).

```
// .eslintrc.cjs

// ...
module.exports = {
  // ...
  extends: [
    "plugin:vue/vue3-strongly-recommended"
  ],
};
```

Update the `.prettierrc.json` file.

```
// .prettierrc.json

{
  // ...
  "semi": true,
  "singleQuote": false
}
```

Re-format all of the files.
`npm run format`

Start the dev server.
`npm run dev`

### Directory structure

- `public/` - contains public files that likely won’t change (e.g. `favicon.ico`)
- `src/` - the source folder
  - `assets/` - contains the assets the build tool will process. It usually contains these types of files: stylesheets, fonts, and images
  - `components/` - where you put all of your Vue components that can be imported into other components
  - `router/` - contains the router instance and all of the routes for the app
  - `views/` - Vue components that handle routes
  - `App.vue` - the root Vue component
  - `main.ts` - the file that initializes the Vue app
- `.eslintrc.cjs` - the ESLint config file
- `.gitignore` - specifies which files and folders should not be committed to Git
- `.prettierrc.json` - the Prettier config file
- `.env.d.ts` - Vite’s [client types](https://vitejs.dev/guide/features.html#client-types)
- `index.html` - the file where the single-page application (SPA) is mounted
- `package.json` - contains project metadata such as name, version, and dependencies
- `README.md` - markdown file that is shown in the GitHub repo description
- `tsconfig.app.json` - the TypeScript config files
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts` - the Vite config file

### Delete boilerplate code

Delete these files:

- assets/base.css
- assets/logo.svg
- assets/main.css
- components/HelloWorld.vue
- components/icons/IconCommunity.vue
- components/icons/IconDocumentation.vue
- components/icons/IconEcosystem.vue
- components/icons/IconSupport.vue
- components/icons/IconTooling.vue
- components/TheWelcome.vue
- components/WelcomeItem.vue
- views/AboutView.vue

Update `App.vue`. `router-view` will display the component that corresponds to the URL.

```
// App.vue

<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
```

Remove `import "./assets/style.css";` from `main.ts`.

Remove the “about” route from `router/index.ts`.

Remove `TheWelcome` component from `views/HomeView.vue`.

### Install Tailwind CSS

Install [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue).
`npm install --save-dev tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

Add the paths to your template files.

```
// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // ...
};
```

Add a `style.css` file under the assets folder, and add the tailwind directives.

```
// assets/style.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import `style.css` into `main.ts`

```
import "./assets/style.css";
```

Add some code to test if Tailwind is working.

```
// views/HomeView.vue

<template>
  <main>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </main>
</template>
```

Start the dev server.
`npm run dev`

### Add Google font

```
// assets/style.css

@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");

//...

@layer base {
  html {
    font-family: "Heebo", sans-serif;
  }
}
```

### Create the header

Install Heroicons
`npm install @heroicons/vue`

Add a global background color to `style.css`

```
// assets/style.css

// ...
@layer base {
  html {
    font-family: "Heebo", sans-serif;
    @apply bg-neutral-900;
  }
}
```

Create the markup for the header

```
// views/HomeView.vue

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
          type="text"
          placeholder="Search by song title..."
          class="bg-neutral-700 border-2 border-neutral-700 rounded-md text-white py-2 pl-12 pr-4 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:border-neutral-900 ring-green-800 w-full md:w-auto"
        />
      </div>
    </div>
  </header>
  <main></main>
</template>

<script setup lang="ts">
import { PlayIcon } from "@heroicons/vue/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
```

### Create a JSON file for the playlist

```
// api/playlist.json

[
  {
    "id": 1,
    "title": "Classical Lines",
    "artists": ["Careless Angel"],
    "duration": "1:04",
    "album": {
      "name": "Hyperspace",
      "image": "https://picsum.photos/id/10/300/300"
    }
  },
  {
    "id": 2,
    "title": "Sweet Saturday",
    "artists": ["Heartsick Images"],
    "duration": "3:52",
    "album": {
      "name": "Feel The Reflections",
      "image": "https://picsum.photos/id/11/300/300"
    }
  },
  {
    "id": 3,
    "title": "Fortunate Memory",
    "artists": ["Happy Flow", "Friday Crash"],
    "duration": "3:03",
    "album": {
      "name": "A Distilled Flow",
      "image": "https://picsum.photos/id/12/300/300"
    }
  },
  {
    "id": 4,
    "title": "Believe In A Thing Called Lethargy",
    "artists": ["Big Juice"],
    "duration": "4:19",
    "album": {
      "name": "Crying World",
      "image": "https://picsum.photos/id/13/300/300"
    }
  },
  {
    "id": 5,
    "title": "I Lose My Ways",
    "artists": ["Money Voice"],
    "duration": "3:54",
    "album": {
      "name": "Your Soul",
      "image": "https://picsum.photos/id/14/300/300"
    }
  },
  {
    "id": 6,
    "title": "Not Enough Beauty",
    "artists": ["Young Jazz", "Pained Solo"],
    "duration": "3:37",
    "album": {
      "name": "Is This Spring",
      "image": "https://picsum.photos/id/15/300/300"
    }
  },
  {
    "id": 7,
    "title": "Garden Of Voice",
    "artists": ["Soft Concerto"],
    "duration": "5:03",
    "album": {
      "name": "So Long End",
      "image": "https://picsum.photos/id/16/300/300"
    }
  },
  {
    "id": 8,
    "title": "Fresh Balance",
    "artists": ["Another Vision"],
    "duration": "3:39",
    "album": {
      "name": "Sunny Nature",
      "image": "https://picsum.photos/id/17/300/300"
    }
  },
  {
    "id": 9,
    "title": "Stuck With Shadows",
    "artists": ["Good Dreams"],
    "duration": "4:53",
    "album": {
      "name": "Uplifting Day",
      "image": "https://picsum.photos/id/18/300/300"
    }
  },
  {
    "id": 10,
    "title": "Unexpected Promises",
    "artists": ["Rest Adventure"],
    "duration": "5:42",
    "album": {
      "name": "Space For Echo",
      "image": "https://picsum.photos/id/19/300/300"
    }
  }
]
```

### Update the TypeScript config

```
// tsconfig.app.json

{
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "src/**/*.json"],
  // ...
}
```

Add a file to export our types. The `isFavorite` property is optional.

```
// types/index.ts

export interface Album {
  name: string;
  image: string;
}

export interface Song {
  id: number;
  title: string;
  artists: string[];
  duration: string;
  album: Album;
  isFavorite?: boolean;
}
```

### Create the playlist table component

```
// components/PlaylistTable.vue

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
import type { Song } from "@/types";

defineProps<{
  songs: Song[];
}>();

const headers = ref(["#", "Title", "Album", "Duration", ""]);

const getArtists = (artists: Array<string>) => artists.join(", ");
</script>
```

Add the `PlaylistTable` to `HomeView`

```
// views/HomeView.vue

<template>
  <!-- ... -->
  <main>
    <PlaylistTable :songs="songs" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PlaylistTable from "@/components/PlaylistTable.vue";
import { PlayIcon } from "@heroicons/vue/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import playlist from "@/api/playlist.json";
import type { Song } from "@/types";

const songs = ref<Song[]>(playlist);
</script>
```

### Text interpolation

The most basic form of data binding is [text interpolation](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation) using the “mustache” syntax (double curly braces). The mustache tag will be replaced with the value. It will also update whenever that value changes. You can use JavaScript expressions inside all data bindings.

### Attribute bindings

Mustaches cannot be used inside HTML attributes. You have to use the [v-bind directive](https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings). The shorthand syntax for `v-bind` is `:`.

### Reactive state with ref()

In Composition API, the recommended way to declare [reactive state](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref) is using `ref()`. `ref()` takes the argument and returns it wrapped within a ref object with a `.value` property. You don’t need to append `.value` when using a ref in the template. Refs are automatically unwrapped when used inside templates.

### List rendering

You can use the `v-for` directive to [render a list](https://vuejs.org/guide/essentials/list.html#list-rendering) of items based on an array. Inside of the `v-for` scope, template expressions have access to all parent scope properties. It is recommended to provide a `key` attribute with `v-for` whenever possible. This helps Vue reuse and reorder existing elements.

### Props

Props are custom attributes you can use to pass data from a parent component to a child component. When the parent property updates, it will flow down to the child, but not the other way around. You should not attempt to mutate a prop inside a child component.

### Add the ability to favorite a song

Import the solid heart icon. This will indicate that the song has been favorited.

```
// components/PlaylistTable.vue

<script setup lang="ts">
// ...
import { HeartIcon as HeartIconOutline } from "@heroicons/vue/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/vue/24/solid";
</script>
```

Add another button and icon for the solid heart icon.

```
// components/PlaylistTable.vue

// ...
<!-- Favorite -->
<td :class="['py-2 px-4 text-center', { 'pt-6': index === 0 }]">
  <button aria-label="Favorite" class="focus:outline-none">
    <HeartIconOutline class="h-6 w-6 text-neutral-300 hover:text-white" />
  </button>
  <button aria-label="Unfavorite" class="focus:outline-none">
    <HeartIconSolid class="h-6 w-6 text-green-600 hover:text-green-700" />
  </button>
</td>
```

Create a function that will emit an event to the parent component.

```
// components/PlaylistTable.vue

<script setup lang="ts">
// ...

const emit = defineEmits(["addToFavorites"]);

const addToFavorites = (id: number) => {
  emit("addToFavorites", id);
};
</script>
```

Add a click event listener to the button.

```
// components/PlaylistTable.vue

<button aria-label="Favorite" class="focus:outline-none" @click="addToFavorites(song.id)">
  <HeartIconOutline class="h-6 w-6 text-neutral-300 hover:text-white" />
</button>
```

Add another function to emit an event to the parent component.

```
// components/PlaylistTable.vue

<script setup lang="ts">
// ...
const emit = defineEmits(["addToFavorites", "removeFromFavorites"]);

const removeFromFavorites = (id: number) => {
  emit("removeFromFavorites", id);
};
</script>
```

Add a click listener to the button.

```
// components/PlaylistTable.vue

<button
  aria-label="Unfavorite"
  class="focus:outline-none"
  @click="removeFromFavorites(song.id)"
>
  <HeartIconSolid class="h-6 w-6 text-green-600 hover:text-green-700" />
</button>
```

Add conditional rendering to the buttons. The favorite button should only appear if the song has not been favorited yet and vice versa.

```
// components/PlaylistTable.vue

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
```

Capture the emitted events and update the songs.

```
// views/HomeView.vue

<template>
  <!-- ... -->
  <main>
    <PlaylistTable
      :songs="songs"
      @add-to-favorites="addToFavorites"
      @remove-from-favorites="removeFromFavorites"
    />
  </main>
</template>

<script setup lang="ts">
// ...

const addToFavorites = (id: number) => {
  const index = songs.value.findIndex((song) => song.id === id);
  songs.value[index].isFavorite = true;
};

const removeFromFavorites = (id: number) => {
  const index = songs.value.findIndex((song) => song.id === id);
  songs.value[index].isFavorite = false;
};
</script>
```

### Conditional rendering

The directive `v-if` is used to conditionally render a block. The block will only be rendered if the directive’s expression returns a truthy value. You can use the `v-else` directive to indicate an “else block.”

### Listening for events

We can use the `v-on` directive (shorthand `@` symbol) to listen for DOM events and run some code when triggered.

### Emitting events

A component can emit custom events. You can pass arguments along with the emitted event. The parent component can listen for the event using `v-on` or the `@` symbol shorthand.

### Add searching by song title

Add a `ref()` and `v-model` for the search input

```
// views/HomeView.vue

<template>
  <header class="py-8 border-b-[1px] border-neutral-700">
    <div class="max-w-5xl mx-auto md:flex justify-between items-center px-4 md:px-8">
      <!-- ... -->

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

// ...

const songs = ref<Song[]>(playlist);
const searchTerm = ref("");

const filteredSongs = computed(() =>
  songs.value.filter((song) => song.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
);

// ...
</script>
```

### Form input bindings

We can use `v-model` to sync the state of form input elements with the state in JavaScript. The `v-model` is a simplified version of this:

```
<input
  :value="text"
  @input="event => text = event.target.value">
```

### Computed properties

You can use computed properties for complex logic that includes reactive data. A computed property automatically tracks its reactive dependencies. Vue will update any bindings that depend on the computed property when the reactive data changes.
