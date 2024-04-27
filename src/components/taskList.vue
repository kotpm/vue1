<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { defineProps } from 'vue';
import  EventBus  from '@/eventBus';

const props = defineProps({
  id: Number,
  note: String,
  checked: Boolean
});


const deleteNote = () => {

EventBus.emit('delete-note', { id: props.id ?? -1 });
console.log({ id: props.id ?? -1 });
}

const chekedNote = () => {

EventBus.emit('cheked-note', { id: props.id ?? -1 });
}


console.log(props.note);
</script>

<template>
 
 <div class="flex  items-center gap-x-2  p-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
    <Checkbox @click=" chekedNote" class="form-checkbox text-blue-600"  v-model = "$props.checked"/>
    <div class="flex items-center flex-row gap-1.5">
      
      <p class="text-sm text-gray-600" >
       {{ props.note }}


      </p>

      <Button @click="deleteNote" class="w-20 py-2 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"> Видалити </Button>
    </div>
</div>
 
</template>
