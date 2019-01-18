<template>
    <div>
        <!-- <ion-header>
            <ion-toolbar color="secondary">
                <ion-buttons slot="start">
                    <ion-back-button @click="close" default-href="/home" />
                </ion-buttons>
                <ion-title>Menu Item</ion-title>
            </ion-toolbar>
        </ion-header> -->
        <ion-content text-center>
            <div class="inner-background">
            <ion-buttons slot="start">
                <ion-back-button @click="close" default-href="/home" />
            </ion-buttons>
            <ion-grid>
                <ion-row justify-content-center>
                    <img src="../assets/stir.jpg" alt="logo" />
                </ion-row>
                <ion-row justify-content-center>
                    <ion-col>
                        <h3 class="color">{{ item.name }}</h3>
                        <p class="color">{{ item.price }}</p>
                        <ion-button color="primary" @click="addToCart">Add</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
            <ion-list>
                <!-- <ion-list-header>Select Extras</ion-list-header> -->
                <ion-item>
                    <ion-select id="customAlertSelect" @ionChange="handleItemSelection($event.target.value)" interface="alert" multiple="true" cancel-text="Cancel" ok-text="Done" placeholder="Add Extras">
                        <ion-select-option value="marmite">Marmite</ion-select-option>
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
            <ion-list v-if="unnamedList.length > 0">
                <ion-list-header class="color-border">Additions</ion-list-header>
                <ion-item v-for="(item, i) in unnamedList" :key="i">
                    <ion-text color="dark">+ {{ item }} $9.99</ion-text>
                </ion-item>
            </ion-list>
            </div>
        </ion-content>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            unnamedList: []
        }
    },
    methods: {
        handleItemSelection(selected) {
            this.unnamedList = selected
            console.log(this.unnamedList)
        },
        alert(name) {
            this.$ionic.alertController.create({
                header: 'Added',
                message: name,
                buttons: [
                    {
                        text: 'OK!',
                        role: 'cancel',
                        handler: () => {
                            this.close()
                        }
                    }
                ],
            })
            .then(a => a.present())
        },
        addToCart() {
            // TODO handle adding additional items and there costs
            this.$cart.addToCart(this.item);
            this.alert(this.item.name, this.close)
        },
        close() {
            this.$ionic.modalController.dismiss()
        }
    },
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/contact-bg-01.jpg') no-repeat center center / cover;}
ion-select {
    color: var(--ion-color-dark);
}
.inner-background {
    background: url('../assets/food-background-01.png') no-repeat center center / cover;
    min-height: 95%;
    margin: 15px;
    padding: 10px;
}
.color {
    color: var(--ion-color-dark);
}
.color-border {
    color: var(--ion-color-dark);
    border-bottom: 1px solid var(--ion-color-dark);
}
</style>
