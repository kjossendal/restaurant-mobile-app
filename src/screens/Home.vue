<template>
    <ion-content text-center>
        <ion-grid>
            <ion-row justify-content-center style="padding:10px 50px;">
                <img src="../assets/sfr-hero-logo.png" alt="Stirfry republic" />
            </ion-row>
        </ion-grid>
        <ion-grid>
            <ion-row justify-content-center>
                <ion-button color="light" @click="showKeyboard">Show Keyboard</ion-button>
                <ion-button color="light" @click="hideKeyboard">Hide Keyboard</ion-button>
            </ion-row>
            <ion-row justify-content-center>
                <ion-button color="light" @click="camera">Camera</ion-button>
                <ion-button color="light" @click="browser">Browser</ion-button>
            </ion-row>
            <ion-row justify-content-center>
                <ion-button color="light" @click="fileWrite">Write File</ion-button>
                <ion-button color="light" @click="fileRead">Read File</ion-button>
            </ion-row>
        </ion-grid>
        <div class="content-secondary">
            <ion-list class="item-list" style="background-color:transparent;">
            <ion-item style="background-color:transparent;">
                <ion-card color="light">
                    <ion-card-header>
                        <ion-card-subtitle>How</ion-card-subtitle>
                        <ion-card-title class="card-title"><ion-text color="primary">It Works</ion-text></ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <p style="font-style: italic;">Let us prepare a stirfry bowl for you with your choice of noodles, as many fresh veggies as you want, meat or tofu, all tossed with one of our homemade sauces. And best of all, everything is prepared and cooked fresh!</p>
                        <ion-grid>
                            <ion-row class="ingredient-group" justify-content-center @click="viewIngredientGroup('veggies')">
                                <ion-col>
                                    <h3 class="ingredient-title">Choose Your Veggies</h3>
                                    <img src="../assets/green-pepper.png" />
                                    <ion-button size="large" color="dark">View all veggies</ion-button>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ingredient-group" justify-content-center @click="viewIngredientGroup('noodles')">
                                <ion-col>
                                    <h3 class="ingredient-title">Choose Your Noodles</h3>
                                    <img src="../assets/chow.png" />
                                    <ion-button size="large" color="dark">View all noodles</ion-button>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ingredient-group" justify-content-center @click="viewIngredientGroup('protein')">
                                <ion-col>
                                    <h3 class="ingredient-title">Choose Your Protein</h3>
                                    <img src="../assets/beef.png" />
                                    <ion-button size="large" color="dark">View all protein</ion-button>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ingredient-group" justify-content-center @click="viewIngredientGroup('sauce')">
                                <ion-col>
                                    <h3 class="ingredient-title">Choose Your Sauce</h3>
                                    <img src="../assets/sfr-signature.png" />
                                    <ion-button size="large" color="dark">View all saauces</ion-button>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                        <!-- <ModalButton :item="item" /> -->
                    </ion-card-content>
                </ion-card>
            </ion-item>
        </ion-list>
        </div>
    </ion-content>
</template>
<script>
import { Plugins, CameraResultType, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

import IngredientsSlider from '../components/IngredientsSlider.vue';

import firebase from 'firebase';

const { Keyboard, Camera, Browser, Filesystem } = Plugins;

export default {
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut().then(() => this.$router.replace('/login'))
        },
        viewIngredientGroup(componentName) {
            console.log(componentName)
            this.$ionic.modalController.create({
                component: IngredientsSlider,
                componentProps: {
                    // 'item': this.item
                }
            })
            .then(m => m.present())
        },
        showKeyboard() {
            Keyboard.show()
        },
        hideKeyboard() {
            Keyboard.hide()
        },
        async camera() {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });
            // image.webPath will contain a path that can be set as an image src. You can access
            // the original file using image.path, which can be passed to the Filesystem API to
            // read the raw data of the image, if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;
            // can be set to the src of an image now
            // imageElement.src = imageUrl; 
        },
        async browser() {
            await Browser.open({ url: 'http://www.jossendal.com/' });
        },
        fileWrite() {
            try {
                Filesystem.writeFile({
                path: 'secrets/text.txt',
                data: "This is a test",
                directory: FilesystemDirectory.Documents,
                encoding: FilesystemEncoding.UTF8
                })
            } catch(e) {
                console.error('Unable to write file', e);
            }
        },
        async fileRead() {
            let contents = await Filesystem.readFile({
                path: 'secrets/text.txt',
                directory: FilesystemDirectory.Documents,
                encoding: FilesystemEncoding.UTF8
            });
            console.log(contents);
        }
    },
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;
}
.content-secondary {
    --background: url("../assets/food-background-01.png") no-repeat center center / cover;
}
ion-card {
    width: 100%;
    text-align: center;
}
.card-title {
    font-weight: bold;
    font-size: 24px;
}
.ingredient-group {
    margin-bottom: 20px;
}
.ingredient-title {
    color: var(--ion-color-primary);
    font-size: 22px;
    margin-bottom: 10px;
}
</style>
