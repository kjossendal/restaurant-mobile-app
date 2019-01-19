<template>
    <ion-content text-center>
        <ion-grid>
            <ion-row justify-content-center style="padding:10px 50px;">
                <img src="../assets/sfr-hero-logo.png" alt="Stirfry republic" />
            </ion-row>
        </ion-grid>
        <!-- <ion-grid>
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
        </ion-grid> -->
        <div class="content-secondary">
            <ion-list class="item-list" style="background-color:transparent;">
            <ion-item style="background-color:transparent;">
                <ion-card color="light">
                    <ion-card-header>
                        <ion-text class="card-title-top">HOW</ion-text>
                        <ion-text class="card-title-bottom">IT WORKS</ion-text>
                        <!-- <ion-card-subtitle>How</ion-card-subtitle> -->
                        <!-- <ion-card-title class="card-title"><ion-text color="primary">It Works</ion-text></ion-card-title> -->
                    </ion-card-header>
                    <ion-card-content>
                        <p style="">Let us prepare a stirfry bowl for you with your choice of noodles, as many fresh veggies as you want, meat or tofu, all tossed with one of our homemade sauces. And best of all, everything is prepared and cooked fresh!</p>
                        <ion-grid>
                            <ion-row class="ingredient-group" align-items-center @click="viewIngredientGroup('0')">
                                <img class="ingredient-images" src="../assets/green-pepper.png" />
                                <ion-col>
                                    <h3 class="ingredient-title">1. Choose Your Veggies</h3>
                                    <ion-row align-items-center style="float: right;">
                                        <p class="ingredient-subtitle">View all veggies</p>
                                        <img class="arrow" src="../assets/arrow-right.svg" />
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ingredient-group" align-items-center @click="viewIngredientGroup('1')">
                                <img class="ingredient-images" src="../assets/ingredients/chow.png" />
                                <ion-col>
                                    <h3 class="ingredient-title">2. Choose Your Noodles</h3>
                                    <ion-row align-items-center style="float: right;">
                                        <p class="ingredient-subtitle">View all noodles</p>
                                        <img class="arrow" src="../assets/arrow-right.svg" />
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ingredient-group" align-items-center  @click="viewIngredientGroup('2')">
                                <img class="ingredient-images" src="../assets/beef.png" />
                                <ion-col>
                                    <h3 class="ingredient-title">3. Choose Your Protein</h3>
                                    <ion-row align-items-center style="float: right;">
                                        <p class="ingredient-subtitle">View all proteins</p>
                                        <img class="arrow" src="../assets/arrow-right.svg" />
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ingredient-group" align-items-center @click="viewIngredientGroup('3')">
                                <img class="ingredient-images" src="../assets/sfr-signature.png" />
                                <ion-col>
                                    <h3 class="ingredient-title">4. Choose Your Sauce</h3>
                                    <ion-row align-items-center style="float: right;">
                                        <p class="ingredient-subtitle">View all sauces</p>
                                        <img class="arrow" src="../assets/arrow-right.svg" />
                                    </ion-row>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
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


const { Keyboard, Camera, Browser, Filesystem } = Plugins;

export default {
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        viewIngredientGroup(slideIndex) {
            this.$ionic.modalController.create({
                component: IngredientsSlider,
                componentProps: {
                    startslide: slideIndex,
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
ion-card-content > p {
    font-style: italic; 
    font-weight: 600;
    font-size: 16px; 
    font-family: Bitter; 
    margin-bottom:15px;
}
.content-secondary {
    --background: url("../assets/food-background-01.png") no-repeat center center / cover;
}
ion-card {
    width: 100%;
    text-align: center;
}
.card-title-top {
    display: block;
    font-size: 1.5rem;
    margin: 0 auto;
    font-family: 'Alfa Slab One', serif;
}
.card-title-bottom {
    font-size: 3rem;
    font-weight: 800;
    margin: 0 auto;
    color: var(--ion-color-primary);
    font-family: 'Alfa Slab One', serif;
}
.ingredient-group {
    margin-top: 20px;
    padding: 5px;
    background-color: black;
}
.ingredient-title {
    color: var(--ion-color-light);
    font-size: 1rem;
}
.ingredient-subtitle {
    font-size: 12px;
    color: var(--ion-color-light)
}
.ingredient-images {
    display: block;
    object-fit: contain;
    max-height: 50px;
    max-width: 50px;
}
.arrow {
    margin:0 5px;
    max-height: 12px;
    max-width: 12px;
}
</style>
