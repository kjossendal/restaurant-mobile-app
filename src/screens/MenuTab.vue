<template>
    <ion-content text-center>
        <ion-list class="item-list" style="background-color:transparent; padding-top:10px;">
            <ion-item v-for="(x ,i) in 20" :key="i" style="background-color:transparent;">
                <Modal :item="item" :component="null">
                    <ion-card slot="modalcontent" color="light">
                        <ion-row class="ingredient-group" align-items-center>
                            <img class="ingredient-images" src="../assets/stir.jpg" />
                            <ion-col style="margin-right:10px;">
                                <ion-row align-items-center justify-content-between>
                                    <ion-text class="ingredient-title">Stir Fry</ion-text>
                                    <ion-text color="primary">$9.99</ion-text>
                                </ion-row>
                                <ion-text class="ingredient-subtitle">It's a stir fry</ion-text>
                            </ion-col>
                        </ion-row>
                    </ion-card>
                </Modal>
            </ion-item>
        </ion-list>
    </ion-content>
</template>
<script>
import Modal from '../components/Modal.vue';

export default {
    components: {
        'Modal' : Modal,
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
ion-card {
    margin: 5px auto;
    width: 95%;
}
.ingredient-group {
    width: 100%;
}
.ingredient-title {
    font-size: 1rem;
}
.ingredient-subtitle {
    font-size: 12px;
}
.ingredient-images {
    display: block;
    object-fit: contain;
    max-height: 70px;
    max-width: 70px;
}
</style>
