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
                <ion-button>
                    <ion-icon slot="icon-only" name="contact"></ion-icon>
                </ion-button>
                <ion-button @click="search">
                    <ion-button>
                        <ion-icon slot="icon-only" name="search"></ion-icon>
                    </ion-button>
                </ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
                <ion-button @click="openActionsheet" color="primary">
                    <ion-icon slot="icon-only" name="more"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>
<script>
import firebase from 'firebase';

export default {
    components: {
    },
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    methods: {
        logout() {
            // clear vuex store, could also clear cart but may want that to persist in a mobile environment
            this.$user.setEmail('')
            firebase.auth().signOut().then(() => this.$router.replace('/login'))
        },
        search() {},
        openActionsheet() {
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
