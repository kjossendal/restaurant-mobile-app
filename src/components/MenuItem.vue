<template>
    <div class="screen-container">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button @click="close" default-href="/home" />
                </ion-buttons>
                <ion-title>Menu Item</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <ion-row justify-content-center>
                    <img src="../assets/chicken_logo.png" alt="logo" />
                </ion-row>
            </ion-grid>
            <ion-list>
                <ion-list-header>Select Extras</ion-list-header>
                <ion-item>
                <ion-select id="customAlertSelect" @ionChange="handleItemSelection($event.target.value)" interface="alert" multiple="true" cancel-text="Cancel" ok-text="Done" placeholder="Select One">
                    <ion-select-option value="bacon">Bacon</ion-select-option>
                    <ion-select-option value="olives">Black Olives</ion-select-option>
                    <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
                    <ion-select-option value="peppers">Green Peppers</ion-select-option>
                    <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
                    <ion-select-option value="onions">Onions</ion-select-option>
                    <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
                    <ion-select-option value="pineapple">Pineapple</ion-select-option>
                    <ion-select-option value="sausage">Sausage</ion-select-option>
                    <ion-select-option value="Spinach">Spinach</ion-select-option>
                </ion-select>
                </ion-item>
            </ion-list>
        </ion-content>
    </div>
</template>
<script>
export default {
    data() {
        return {
            unnamedList: []
        }
    },
    methods: {
        handleItemSelection(event) {
            this.unnamedList = event
            this.$emit('item-change', this.unnamedList);
        },
        close() {
            this.$ionic.modalController.dismiss()
        }
    },
}
</script>
<style scoped>
.screen-container {
    height: 100%;
    background-color: var(--ion-color-dark);
}
</style>
