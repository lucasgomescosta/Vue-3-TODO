<template>
  <v-text-field
      clearable
      label="Add Task"
      v-model="task.title"
      @keyup.enter="addTask"
      >
  </v-text-field>

  <ListTaks :tasks="tasks" />
</template>

<script setup>
  import ListTaks from '@/components/ListTasks.vue'

  import { ref } from 'vue'


  const tasks = ref([
    { title: 'Estudar Vue', description: 'Estudar vue com Vuetify' },
    { title: 'Ler documentação', description: 'Ler a documentação do Vuetify' },
    { title: 'Task 3', description: 'Description for task 3' },
  ]);

  const task = ref({
      title: '',
      description: ''
  })

  const addTask = () => {
    tasks.value.push({
      title: task.value.title,
      description: task.value.description
    });
    task = {
      title: '',
      description: ''
    }
  }
</script>
