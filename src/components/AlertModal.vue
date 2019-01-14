<template>
    <div>
        <ion-button @click="showAlert">
            HERE
        </ion-button>
    </div>
</template>
<script>
import { Plugins } from '@capacitor/core';

export default {
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        message: {
            type: String,
            required: true,
            default: ''
        }
    },
    methods: {
        test() {
            console.log("REF WORKING")
        },
        async showAlert() {
            /* eslint-disable-next-line */
            console.log("TREW")
            await Plugins.modal.alert({
                title: this.title,
                message: this.message
            });
        }
    }
}
</script>
