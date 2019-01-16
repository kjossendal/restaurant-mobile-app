<template>
    <ion-content text-center>
        <ion-grid>
            <ion-row justify-content-between align-items-center>
                <ion-text style="padding-left: 15px;" color="light">
                    <h3>Sauces</h3>
                </ion-text>
                <ion-button  class="button" color="dark" @click="close">
                    <ion-icon color="primary" slot="icon-only" name="close"></ion-icon>
                </ion-button>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>
<script>
export default {
    methods: {
        close() {
            this.$ionic.modalController.dismiss()
        }
    },
}
</script>
<style scoped>
ion-content {
    --background: var(--ion-color-dark);
}
.button {
    float: right;
}
</style>