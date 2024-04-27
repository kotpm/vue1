<script setup lang="ts">


import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { ref } from 'vue';
import  EventBus  from '@/eventBus';


const note = ref('')





const sendNote = () => {
 if (note.value=="") note.value="Тут має бути замітка";
  EventBus.emit('add-note', {
    id: Date.now(), 
    note: note.value,
    checked: false
  });
  note.value = '';
}


</script>

<template>
  <div class=" bg-white shadow-md rounded-lg p-6 w-full max-w-md">
  <h2 class="xl">Введи замітку</h2>
  <Textarea v-model="note" class="w-full mt-4 h-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" > </Textarea>
  <Button @click="sendNote" class="w-full py-2 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"> Натисни мене </Button>
  </div>
  
</template>

<style scoped>

</style>
