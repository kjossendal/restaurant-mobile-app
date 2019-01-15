<template>
    <ion-content fullscreen text-center>
        <!-- <ion-grid>
            <ion-row>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
                <ion-col size="6">
                    <ModalButton :item="item" />
                </ion-col>
            </ion-row> 
        </ion-grid> -->
                <ion-list class="item-list">
                    <ion-item v-for="(x ,i) in 20" :key="i">
                        <ion-card color="secondary">
                            <img src="../assets/chicken_logo.png" alt="item image" />
                            <ion-card-header>
                                <ion-card-title color="primary">Item {{ i }}</ion-card-title>
                            </ion-card-header>
                            <ion-card-content>
                                <p color="primary">Description for this item</p>
                                <ModalButton :item="item" />
                            </ion-card-content>
                        </ion-card>
                    </ion-item>
                </ion-list>
    </ion-content>
</template>
<script>
import ModalButton from '../components/ModalButton.vue';
import MenuItem    from '../components/MenuItem.vue';

import firebase from 'firebase';

export default {
    components: {
        'ModalButton' : ModalButton,
        'MenuItem' : MenuItem,
    },
    data() {
        return {
            items: [],
            item: {
                name: 'Item',
                price: '$9.99'
            }
        }
    },
    methods: {
        itemChanged(newItems) {
            this.items = newItems;
        },
        logout() {
            firebase.auth().signOut().then(() => this.$router.replace('/login'))
        },
    },
}
</script>
<style scoped>
ion-content {
    --ion-background-color: var(--ion-color-dark);
}
ion-card {
    margin: 12px auto;
    width: 90%;
}
</style>
