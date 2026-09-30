<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Check from "@primeicons/vue/check";
import User from '@primeicons/vue/user';
import RadioButton from 'primevue/radiobutton';
import Label from 'primevue/label';

import { ref } from 'vue';
import { type User as PrimeUser, DEFAULT_USER } from 'lib-primeui';

const title = ref('vue primeui');
const user: PrimeUser = DEFAULT_USER;
const selectedCategory = ref(null);
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);
</script>

<template>
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ user.name }}</p>
    </div>
    <div className="flex gap-4">
      <Button>
        <Check /> Check
      </Button>
      <InputText />
      <Button class="p-button-accent">
        <User /> Button accent
      </Button>
    </div>
     <div class="flex justify-center">
        <div class="flex flex-wrap gap-4">
            <div v-for="category in categories" :key="category.key" class="flex items-center gap-2">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="category" :value="category.key" />
                <Label :for="category.key" class="text-sm!">{{ category.name }}</Label>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
