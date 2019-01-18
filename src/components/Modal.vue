<template>
    <div style="height: 100%; width: 100%;" @click="modal">
        <slot name="modalcontent" />
    </div>
</template>
<script>
import MenuItem      from './MenuItem.vue';
import Rewards       from './Rewards.vue';
import Points        from './Points.vue';

export default {
    props: {
        item: {
            required: true
        },
        modalComponent: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            useComponent: MenuItem
        }
    },
    methods: {
        modal() {
            if (this.modalComponent === 'rewards') {
                this.useComponent = Rewards
            } else if (this.modalComponent === 'points') {
                this.useComponent = Points
            }
            this.$ionic.modalController.create({
                component: this.useComponent,
                componentProps: {
                    'item': this.item
                }
            })
            .then(m => m.present())
        },
    }
}
</script>
