<template>
    <ion-content fullscreen no-padding text-center>
        <ion-text color="primary">
            <h3>Home Page</h3>
        </ion-text>
        <ion-grid>
            <ion-row justify-content-center>
                <ion-button @click="showKeyboard">Show Keyboard</ion-button>
                <ion-button @click="hideKeyboard">Hide Keyboard</ion-button>
            </ion-row>
            <ion-row justify-content-center>
                <ion-button @click="camera">Camera</ion-button>
                <ion-button @click="browser">Browser</ion-button>
            </ion-row>
            <ion-row justify-content-center>
                <ion-button @click="fileWrite">Write File</ion-button>
                <ion-button @click="fileRead">Read File</ion-button>
            </ion-row>
        </ion-grid>
    </ion-content>
</template>
<script>
import { Plugins, CameraResultType, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

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
    --ion-background-color: var(--ion-color-dark);
}
</style>
