<template>
    <ion-header class="header">
        <ion-toolbar color="secondary">
            <ion-title>{{ title }}</ion-title>
            <!-- some cheese right here, full path is not available when header is used in a modal -->
            <ion-buttons slot="start" v-if="['/cart', '/checkout', '/dashboard'].includes($route.fullPath)">
            <!-- <ion-buttons slot="start"> -->
                <ion-back-button></ion-back-button>
                <ion-button @click="$router.go(-1)">
                    <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
                </ion-button>
            </ion-buttons>
            <!-- <ion-buttons slot="secondary">
                <ion-button @click="openUserPopover">
                    <ion-icon slot="icon-only" name="contact"></ion-icon>
                </ion-button>
                <ion-button @click="search">
                    <ion-button>
                        <ion-icon slot="icon-only" name="search"></ion-icon>
                    </ion-button>
                </ion-button>
            </ion-buttons> -->
            <ion-buttons slot="primary">
                <ion-button @click="openBottomActionsheet" color="primary" style="background-color: white; border-radius: 50%; font-size: 22px;">
                    <!-- <ion-icon slot="icon-only" name="more"></ion-icon> -->
                    <font-awesome-icon  icon="user-ninja" />
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>
<script>
import UserSettings from './UserSettings.vue';

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
            this.$auth.logout().then(() => {
                this.$router.replace('/login')
            })
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
                    text: 'Dashboard',
                    icon: 'reorder',
                    handler: () => {
                        this.$router.push('/dashboard')
                    }
                    }, {
                    text: 'Profile', 
                    icon: 'information-circle-outline',
                    handler: () => {
                        console.log('profile clicked')
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