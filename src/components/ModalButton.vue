<template>
    <div style="height: 100%;">
        <slot name="modalbutton" />
        <ion-button size="large" expand="block" @click="modal">Open Modal</ion-button>
    </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
export default {
    methods: {
        alert() {
            this.$ionic.alertController.create({
                header: 'Hello!',
                message: 'How are you?',
                buttons: ['OK, thanks!'],
            })
            .then(a => a.present())
        },
        modal() {
            this.$ionic.modalController.create({
                component: MenuItem
            })
            .then(m => m.present())
        },
    }
}
</script>
