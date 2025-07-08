// stores/counter.js
import { defineStore } from 'pinia'
import { useAlertStore } from './alert.js';
const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
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
      alertStore.notifyAlertCreated();
    },
    deleteTask() {
      this.tasks.splice(this.indexTaskSelected, 1);
      this.toggleDelete();
      this.saveLocalData();
      alertStore.notifyAlertDeleted();
    },
    updateTask() {
      this.saveLocalData();
      this.toggleEdit();
      alertStore.notifyAlertUpdated();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields
      if(index != null)
        this.indexTaskSelected = index
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
    },
    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
      this.saveLocalData();
    }
  },
})
