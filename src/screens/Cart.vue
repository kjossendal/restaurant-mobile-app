<template>
    <div>
        <HeaderTabs title="Cart"/>

        <ion-content fullscreen text-left>
            <ion-list v-if="$cart.items.length > 0">
                <ion-item v-for="(item, i) in $cart.items" :key="i">
                    <ion-text color="primary">{{ item.name }} {{ item.price }}</ion-text>
                    <!-- skillfully append add-ons here -->
                </ion-item>
            </ion-list>
            <ion-list v-else>
                <!-- <ion-list-header>Header?</ion-list-header> -->
                <ion-item>
                    <ion-text color="primary">Cart is empty</ion-text>
                </ion-item>
            </ion-list>
            <ion-grid>
                <ion-row justify-content-center>
                    <ion-text style="margin-bottom: 20px;" color="primary">Total: ${{ cartTotal || 0 }}</ion-text>
                </ion-row>
                <ion-row justify-content-center>
                    <ion-button @click="$router.push('/checkout')" v-if="$cart.items.length > 0" size="large">Checkout</ion-button>
                </ion-row>
            </ion-grid>
        </ion-content>
    </div>
</template>
<script>
import HeaderTabs from '../components/HeaderTabs.vue';

export default {
    components: {
        'HeaderTabs' : HeaderTabs,
    },
    data() {
        return {
         
        }
    },
    computed: {
        cartTotal() {
            // this is a mess, make prices in cents
            return this.$cart.items.reduce((total, cartItem) => {
                let price = cartItem.price.replace('$', '')
                return total += Number(price)
            }, 0)
        }
    },
    methods: {
        alert(message) {
            // make this a plugin
            this.$ionic.alertController.create({
                header: 'Error',
                message: message,
                buttons: ['OK'],
            })
            .then(a => a.present())
        },
        logout() {
            // clear vuex store, could also clear cart but may want that to persist in a mobile environment
            this.$user.setUser('')
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
<style scoped>
ion-content {
    --ion-background-color: var(--ion-color-dark);
}
</style>
