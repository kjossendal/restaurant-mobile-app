<template>
    <ion-content>
        <ion-grid>
            <ion-row justify-content-between align-items-center>
                <ion-text style="padding-left: 15px;" color="light">
                    <h3>Noodles</h3>
                </ion-text>
                <ion-button class="button" color="dark" @click="close">
                    <ion-icon color="primary" slot="icon-only" name="close"></ion-icon>
                </ion-button>
            </ion-row>
            <ion-row justify-content-around align-items-center style="padding: 0 10px;">
                <div class="image-container">
                    <img class="ingredient-image" src="../assets/ingredients/chow.png" />
                    <ion-text color="light">Chow</ion-text>
                </div>
                <div class="image-container">
                    <img class="ingredient-image" src="../assets/ingredients/skinny.png" />
                    <ion-text color="light">Skinny</ion-text>
                </div>
                <div class="image-container">
                    <img class="ingredient-image" src="../assets/ingredients/fat.png" />
                    <ion-text color="light">Fat</ion-text>
                </div>
                <div class="image-container">
                    <img class="ingredient-image" src="../assets/ingredients/wide.png" />
                    <ion-text color="light">Wide</ion-text>
                </div>
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
.image-container {
    position: relative;
    display: inline-block;
    width: 35%;
    margin-bottom: 10px;
}
.image-container > ion-text {
    font-size: 14px;
}
.ingredient-image {
    /* position: relative; */
    /* padding-top: 75%; */
}
</style>