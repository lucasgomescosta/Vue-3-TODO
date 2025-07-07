// stores/counter.js
import { defineStore } from 'pinia'
import { useAlertStore } from '@stores/alert';
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
      { title: 'Estudar Vue', description: 'Estudar vue com Vuetify' },
      { title: 'Ler documentação', description: 'Ler a documentação do Vuetify' },
      { title: 'Task 3', description: 'Description for task 3' },
    ],
    titleTaskCreating: '',
    showDialogDelete: false,
    indexTaskSelected: 0,
    showDialogTaskFields: false,
  }),
  // poderia também ser definida como
  // state: () => ({ count: 0 })
  actions: {
    addTask() {
      if(this.titleTaskCreating.length < 5) return;
      this.tasks.push({
        title: this.titleTaskCreating,
      });
      this.titleTaskCreating = '';
      this.saveLocalData();
      alertStore.notifyAlert();
    },
    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1);
      this.toggleDelete();
      this.saveLocalData();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields
      if(index != null)
        this.indexTaskSelected = index
      this.saveLocalData();
    },
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete
      if(index != null)
        this.indexTaskSelected = index
    },
    saveLocalData() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    getTasks() {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }
  },
})
