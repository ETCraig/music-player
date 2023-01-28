import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    loggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await usersCollection.doc(userCred.user.uid).set({
        name: values,
        email: values.email,
        age: values.age,
        country: values.country,
      });

      await userCred.user.updateProfile({
        displayName: values.name,
      });

      this.userStore.loggedIn = true;
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password);

      this.loggedIn = true;
    },
    async logout() {
      await auth.signOut();

      this.loggedIn = false;
    },
  },
});
