<template>
    <ion-content>
        <ion-grid>
            <ion-row justify-content-center style="padding:10px;">
                <img src="../assets/sfr-hero-logo.png" alt="logo" />
            </ion-row>
        </ion-grid>
        <!-- <ion-text text-center>
            <h2 class="title">Chicken D'élégance</h2>
        </ion-text> -->
        <ion-grid>
            <ion-row justify-content-center>
                <ion-col>
                    <ion-input class="input-field" placeholder="Email" :value="email" @input="email = $event.target.value" />
                    <ion-input 
                        class="input-field"
                        placeholder="Password" 
                        type="password"
                        :value="password" 
                        @input="password = $event.target.value"
                    />
                </ion-col>
            </ion-row>
        </ion-grid>
        <div text-center>
            <ion-button color="light" class="button" expand="block" @click="login">Login</ion-button>
            <ion-button color="light" class="button" expand="block" @click="register">Sign Up</ion-button>
            <ion-button color="light" class="button" expand="block" @click="getObject({'key':'token'})">Get Object</ion-button>
            <ion-button color="light" class="button" expand="block" @click="keys">Get keys</ion-button>
            <ion-button color="light" class="button" expand="block" @click="clear">Clear</ion-button>
        </div>
    </ion-content>
</template>
<script>
import { Plugins } from '@capacitor/core';
import axios from 'axios';
// import firebase from 'firebase';
const { Storage } = Plugins

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            this.$showLoader()
            this.$auth.login(this.email, this.password)
            .then(() => {
                this.$hideLoader()
                this.$router.replace('/tabs')
            })
            .catch(() => {
                this.$hideLoader()
                this.$alertError('Invalid Email/Password')
            })
            // can remove pending testing of $auth plugin
            // axios.post('api/login', { email: this.email, password: this.password })
            // .then(resp => {
            //     let tokenData = {
            //         'key': 'token', 
            //         'value': JSON.stringify({
            //                     'token': resp.data.access_token, 
            //                     'expires': resp.data.expires_in,
            //                     'type': resp.data.token_type
            //                 })
            //     }
            //     this.setTokenInStorage(tokenData)
            //     this.$user.setToken({
            //         'token': resp.data.access_token, 
            //         'expires': resp.data.expires_in,
            //         'type': resp.data.token_type
            //     })
            //     return axios.post('api/me', {}, { headers: {"Authorization" : `Bearer ${resp.data.access_token}`} })
            // })
            // .then(resp => {
            //     this.$user.setUser(resp.data)
            //     this.$hideLoader()
            //     this.$router.replace('/tabs')
            // })
            // .catch(err => {
            //     this.$hideLoader()
            //     console.log(err)
            //     this.$alertError(err)
            // })
        },
        register() {
            this.$router.push('/register')
        },
        // storage api methods, testing purposes
        async setObject(obj) {
            // obj must have a stringified value
            await Storage.set(obj);
        },
        async getObject(obj) {
            const user = await Storage.get(obj)
            console.log('Got Object',user)
        },
        async setTokenInStorage(obj) {
            await Storage.set(obj);
        },
        async getItem(getKey) {
            const value = await Storage.get(getKey);
            console.log('Got item: ', value);
        },
        async removeItem(removeKey) {
            await Storage.remove({ key: removeKey });
        },
        async keys() {
            const keys = await Storage.keys();
            console.log('Got keys: ', keys);
        },
        async clear() {
            await Storage.clear();
        },
    },
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;
}
.button {
    margin: 0 auto;
    margin-bottom: 12px;
    width: 50%;
}
.title {
    color: var(--ion-color-primary);
}
.input-field {
    width: 80%;
    margin: 0 auto;
    border: 1px solid var(--ion-color-dark);
    background-color: var(--ion-color-light);
    border-radius: 10px;
    margin-bottom: 10px;
    color: var(--ion-color-dark);
}
.spinner {
    /* styling the spinner is not working */
    padding: 49px;
    color: var(--ion-color-primary);
}
</style>
