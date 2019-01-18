<template>
    <ion-content>
        <div class="inner-background">
            <ion-grid>
                <ion-row justify-content-center style="padding:10px;">
                    <!-- <img src="../assets/sfr-hero-logo.png" alt="logo" /> -->
                    <ion-text text-center>
                        <h4 style="margin: 0 auto;">MEMBER</h4>
                        <h2 class="title">SIGNUP</h2>
                        <p style="font-style: italic; font-size:14px;">Members receive exclusive discounts, can track and save rewards, and will be the first eligible to try out our online ordering - and best of all it's free!</p>
                    </ion-text>
                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row justify-content-center>
                    <ion-col>
                        <ion-input class="input-field" placeholder="First Name" :value="firstName" @input="firstName = $event.target.value" />
                        <ion-input class="input-field" placeholder="Last Name" :value="lastName" @input="lastName = $event.target.value" />
                        <ion-input class="input-field" placeholder="Email" :value="email" @input="email = $event.target.value" />
                        <ion-input 
                            class="input-field"
                            placeholder="Password" 
                            type="password"
                            :value="password" 
                            @input="password = $event.target.value"
                        />
                        <ion-input 
                            class="input-field"
                            placeholder="Confirm Password" 
                            type="password"
                            :value="confirmPassword" 
                            @input="confirmPassword = $event.target.value"
                        />
                    </ion-col>
                </ion-row>
                <ion-row class="checkbox" align-items-center>
                    <ion-checkbox :value="subscribe" @ionChange="toggleCheckbox" style="background-color: black;" color="primary"></ion-checkbox>
                    <ion-label text-wrap style="padding-left:10px; font-size:12px;">Receive more discounts & our newsletter via email?</ion-label>
                </ion-row>
            </ion-grid>
            <div text-center>
                <ion-button color="primary" class="button" expand="block" @click="register">Register</ion-button>
                <ion-button color="primary" class="button" expand="block" @click="$router.go(-1)">Back</ion-button>
            </div>
        </div>
    </ion-content>
</template>
<script>
import User from '../types/user.js';

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            subscribe: false
        }
    },
    methods: {
        register() {
            //register then login new user
            if(this.password !== this.confirmPassword) {
                this.alert('Passwords do not match')
                return;
            }
            this.$showLoader()
            let newUser = new User({
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                accepts_marketing: this.subscribe ? 'yes' : 'no',
                password: this.password,
                password_confirmation: this.confirmPassword
            })
            // console.log('new', newUser)
            this.$auth.register(newUser)
            .then(() => {
                console.log('success')
                this.$hideLoader()
                this.$router.replace('/tabs')
            })
            .catch(() => {
                this.$hideLoader()
                this.$alertError('Error creating new user')
            })
        },
        toggleCheckbox() {
            this.subscribe = !this.subscribe;
        },
    },
  created() {
  }
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;
}
.inner-background {
    background: url('../assets/food-background-01.png') no-repeat center center / cover;
    margin: 15px;
    padding: 10px;
}
.button {
    margin: 0 auto;
    margin-bottom: 12px;
    width: 50%;
}
.title {
    font-size: 38px;
    font-weight: bold;
    margin: 0 auto;
    color: var(--ion-color-primary)
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
.checkbox {
    width: 75%;
    margin: 0 auto;
}
</style>
