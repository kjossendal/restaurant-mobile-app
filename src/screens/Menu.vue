<template>
    <div class="screen-container">
        <ion-grid>
            <ion-row>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
                <ion-col size="6">
                    <ModalButton />
                </ion-col>
            </ion-row> 
        </ion-grid>
    </div>
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
            items: []
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
.screen-container {
    flex: 1;
    height: 100%;
    background-color: var(--ion-color-dark);
}
</style>
