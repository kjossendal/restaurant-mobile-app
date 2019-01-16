<template>
    <ion-content text-center>
        <ion-list class="item-list" style="background-color:transparent;">
            <ion-item v-for="(x ,i) in 20" :key="i" style="background-color:transparent;">
                <ion-card color="light">
                    <img src="../assets/stir.jpg" alt="item image" />
                    <ion-card-header>
                        <ion-card-title color="dark">Item {{ i }}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <p color="dark">Description for this item</p>
                        <ModalButton :item="item" />
                    </ion-card-content>
                </ion-card>
            </ion-item>
        </ion-list>
    </ion-content>
</template>
<script>
import ModalButton from '../components/ModalButton.vue';

export default {
    components: {
        'ModalButton' : ModalButton,
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
    },
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;
}
.scroll-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;

}
ion-card {
    margin: 12px auto;
    width: 90%;
}
</style>
