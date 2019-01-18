<template>
    <div style="height: 100%;">
        <slot name="modalbutton" />
        <ion-button size="large" expand="block" @click="modal">Add</ion-button>
    </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        component: {
            required: true
        }
    },
    methods: {
        modal() {
            this.$ionic.modalController.create({
                component: MenuItem,
                componentProps: {
                    'item': this.item
                }
            })
            .then(m => m.present())
        },
    }
}
</script>
