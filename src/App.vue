<script setup lang="ts">
import taskForm from './components/taskForm.vue'
import taskList from './components/taskList.vue'

import  EventBus  from './eventBus';
import { ref } from 'vue';

let notes = ref([]); 

const addNote = (newNote: { id: number; note: string; checked: boolean }) => {
  notes.value.push(newNote);
  console.log(notes.value);
};

const dellNote = (id) => {
const index = notes.value.findIndex(note => note.id === id.id);
  
  if (index !== -1) {
    notes.value.splice(index, 1);
  }

  console.log(notes.value);
};

const chekNote = (id) => {
const index = notes.value.findIndex(note => note.id === id.id);
  
  if (index !== -1) {
    notes.value[index].checked = !notes.value[index].checked;
  }

  console.log(notes.value);
};

if (EventBus) {
  EventBus.on('add-note', (dataEvent) => {addNote(dataEvent)});
  EventBus.on('delete-note', (id) => {dellNote(id)});
  EventBus.on('cheked-note', (id) => {chekNote(id)});
}

</script>

<template>
 
   <div class=" flex flex-col items-center justify-center h-full space-y-16">
    <taskForm  />
    <div class="flex  items-center flex-col-reverse gap-1.5">
        <taskList v-for="note in notes"  :key="note.id" :id="note.id" :note="note.note" :checked="note.checked"/>
    </div>
    
   </div>
    
 
</template>

