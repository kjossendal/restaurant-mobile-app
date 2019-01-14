<template>
    <div>
    <ion-header class="header">
        <ion-toolbar color="dark">
            <ion-title>{{ title }}</ion-title>
            <ion-buttons slot="start">
                <ion-menu-button> </ion-menu-button>
                    <!--                <ion-back-button></ion-back-button> -->
            </ion-buttons>
            <ion-buttons slot="secondary">
                <ion-button>
                    <ion-icon slot="icon-only" name="contact"></ion-icon>
                </ion-button>
                <ion-button @click="open">
                    <ion-button>
                         <ion-icon slot="icon-only" name="search"></ion-icon>
                    </ion-button>
                </ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
                <ion-button @click="logout" color="primary">
                    <ion-icon slot="icon-only" name="more"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>

    <ion-menu side="end" id="end">
        <ion-header>
            <ion-toolbar>
                <ion-title>Menu1</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-list>
                <ion-item>Menu2
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
    </div>
</template>
<script>
//import OptionsMenu from './OptionsMenu.vue';
import firebase from 'firebase';

export default {
    components: {
 //       'OptionsMenu' : OptionsMenu,
    },
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => this.$router.replace('/login'))
        },
        open() {
            this.$ionic.menuController.toggle('end').then(m => {
                console.log('Menu', m)
            })
        },
        async openStart() {
          const menuButton = document.querySelector('ion-menu-toggle');
          await menuButton.componentOnReady();
          menuButton.menu = 'start';
        }
    },
}
</script>
