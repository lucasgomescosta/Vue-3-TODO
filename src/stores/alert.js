// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "",
    text: ""
  }),
  actions: {
    notifyAlert() {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 3000); // Alert will be shown for 3 seconds
    },
    notifyAlertCreated() {
      this.type = "success";
      this.text = "Task created successfully!";
      this.notifyAlert();
    },
    notifyAlertDeleted() {
      this.type = "warning";
      this.text = "Task deleted!";
      this.notifyAlert();
    },
    notifyAlertUpdated() {
      this.type = "info";
      this.text = "Task updated!";
      this.notifyAlert();
    }
  }
})
