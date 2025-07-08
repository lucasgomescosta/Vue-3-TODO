<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogDelete"
      max-width="400"
      persistent
    >

      <v-card
        prepend-icon="mdi-map-marker"
        text="This action can't be reverted."
        title="Are you sure you want delete this task?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn color="red-darken-1" variant="elevated" @click="taskStore.toggleDelete">
            No
          </v-btn>

          <v-btn color="red-darken-1" variant="outlined" @click="taskStore.deleteTask()">
            Yes
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useTaskStore } from '@/stores/task.js'

const taskStore = useTaskStore();

const props = defineProps({
  dialog: Boolean
})
</script>
