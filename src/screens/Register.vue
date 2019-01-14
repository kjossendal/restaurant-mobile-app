<template>
    <div class="screen-container">
        <ion-grid>
            <ion-row justify-content-center>
                <img class="logo" src="../assets/chicken_logo.png" alt="logo" />
            </ion-row>
        </ion-grid>
        <ion-text text-center>
            <h2 class="title">Sign up is easy!</h2>
        </ion-text>
        <ion-grid>
            <ion-row justify-content-center>
                <ion-col>
                    <ion-input class="input-field" placeholder="Email" :value="email" @input="email = $event.target.value" />
                    <ion-input 
                        class="input-field"
                        placeholder="Password" 
                        :value="password" 
                        @input="password = $event.target.value"
                    />
                </ion-col>
            </ion-row>
        </ion-grid>
        <div text-center>
            <ion-button class="button" expand="block" @click="register">Register</ion-button>
            <ion-button class="button" expand="block" @click="$router.go(-1)">Back</ion-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import firebase from 'firebase';

export default {
  data() {
    return {
        email: '',
        password: '',
    }
  },
  methods: {
      register() {
          //register then login new user
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(
                (user) => {
                    this.$router.push('/home')
                    alert('Account Created')
                }, 
                (err) => {
                    alert('Sorry ' + err.message)
                }
            )
      }
  },
  created() {
  }
}
</script>
<style scoped>
.screen-container {
    background-color: var(--ion-color-dark);
    flex: 1;
}
.logo {
}
.button {
    margin: 0 auto;
    margin-bottom: 12px;
    width: 50%;
}
.title {
    /* color: white */
    color: var(--ion-color-primary)
}
.input-field {
    width: 80%;
    margin: 0 auto;
    border: 1px solid var(--ion-color-primary);
    border-radius: 10px;
    margin-bottom: 10px;
    color: white;
}
</style>
