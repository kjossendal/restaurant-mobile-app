<template>
    <div class="screen-container">
        <ion-grid>
            <ion-row justify-content-center>
                <img src="../assets/chicken_logo.png" alt="logo" />
            </ion-row>
        </ion-grid>
        <ion-text text-center>
            <h2 class="title">Chicken D'élégance</h2>
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
            <ion-button class="button" expand="block" @click="login">Login</ion-button>
            <ion-button class="button" expand="block" @click="register">Sign Up</ion-button>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
          // man is this ugly
            this.$ionic.loadingController.create({
                keyboardClose: true,
                showBackdrop: false,
                message: 'Please Wait...',
                cssClass: 'spinner'
            })
            .then(loader => {
                loader.present()
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(
                    () => {
                        loader.dismiss()
                        this.$user.setEmail(this.email)
                        this.$router.replace('/tabs')
                    },
                    (err) => {
                        loader.dismiss()
                        this.alert(err.message)
                    }
                )
            })
        },
        register() {
            this.$router.push('/register')
        },
        alert(message) {
            // make this a plugin
            this.$ionic.alertController.create({
                header: 'Error',
                message: message,
                buttons: ['OK'],
            })
            .then(a => a.present())
        },
    },
}
</script>
<style scoped>
.screen-container {
    background-color: var(--ion-color-dark);
    flex: 1;
}
.button {
    margin: 0 auto;
    margin-bottom: 12px;
    width: 50%;
}
.title {
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
.spinner {
    /* not working */
    padding: 49px;
    color: var(--ion-color-primary)
}
</style>
