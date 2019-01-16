<template>
    <ion-header class="header">
        <ion-toolbar color="secondary">
            <ion-title>{{ title }}</ion-title>
            <!-- some cheese right here -->
            <ion-buttons slot="start" v-if="['/cart', '/checkout'].includes($route.path)">
                <ion-back-button></ion-back-button>
                <ion-button @click="$router.go(-1)">
                    <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-buttons slot="secondary">
                <ion-button @click="openUserPopover">
                    <ion-icon slot="icon-only" name="contact"></ion-icon>
                </ion-button>
                <ion-button @click="search">
                    <ion-button>
                        <ion-icon slot="icon-only" name="search"></ion-icon>
                    </ion-button>
                </ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
                <ion-button @click="openBottomActionsheet" color="primary">
                    <ion-icon slot="icon-only" name="more"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>
<script>
import UserSettings from './UserSettings.vue';

import firebase from 'firebase';

export default {
    components: {
        'UserSettings' : UserSettings,
    },
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            popoverOpen: false,
        }
    },
    methods: {
        logout() {
            // clear vuex store, could also clear cart but may want that to persist in a mobile environment
            this.$user.setEmail('')
            firebase.auth().signOut().then(() => this.$router.replace('/login'))
        },
        search() {},
        openUserPopover() {
            if(!this.popoverOpen) {
                this.$ionic.popoverController.create({
                    header: this.$user.email,
                    component: UserSettings,
                    componentProps: {},
                    backdropDismiss: true,
                    keyboardClose: true,
                }).then(p => {
                    this.popoverOpen = true;
                    p.present()
                })
            }
        },
        openBottomActionsheet() {
            this.$ionic.actionSheetController.create({
                header: "Options",
                buttons: [{
                    text: 'Logout',
                    role: 'destructive',
                    icon: 'log-out',
                    handler: () => {
                        this.logout()
                    }
                    }, {
                    text: 'Cart',
                    icon: 'cart',
                    handler: () => {
                        this.$router.push('/cart')
                    }
                    }, {
                    text: 'Settings',
                    icon: 'settings',
                    handler: () => {
                        console.log('settings clicked');
                    }
                    }, {
                    text: 'About', 
                    icon: 'information-circle-outline',
                    handler: () => {
                        console.log('about clicked')
                    }
                    }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
            }).then(action => {
                action.present()
            })
        }
    },
}
</script>
<style scoped>
/* these stylings are related to the popover and are very unintuitive */
ion-modal {
    max-width: 80%;
    width: auto;
    max-height: 45%;
    margin-top: 56px; /* fetch this programmatically */
    left: 80px;
}
.inner-scroll {
    left: auto;
}
</style>