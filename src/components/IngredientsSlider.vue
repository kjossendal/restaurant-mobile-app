<template>
    <ion-slides pager="true">

        <ion-slide>

            <VegSlide />
        </ion-slide>

        <ion-slide>
            <NoodleSlide />
        </ion-slide>

        <ion-slide>
            <ProteinSlide />
        </ion-slide>

        <ion-slide>
            <SauceSlide />
        </ion-slide>
    </ion-slides>
</template>
<script>
import ProteinSlide from './ProteinSlide.vue';
import NoodleSlide  from './NoodleSlide.vue';
import SauceSlide   from './SauceSlide.vue';
import VegSlide     from './VegSlide.vue';
import { setTimeout } from 'timers'; // weird

export default {
    components: {
        'ProteinSlide' : ProteinSlide,
        'NoodleSlide' : NoodleSlide,
        'SauceSlide' : SauceSlide,
        'VegSlide' : VegSlide,
    },
    data() {
        return {

        }
    },
    mounted() {
        setTimeout(() => {
            document.querySelector('ion-slides').stopAutoplay()
            document.querySelector('ion-slides').options = {
            }
        }, 1000)
    },
    methods: {
        close() {
            this.$ionic.modalController.dismiss()
        }
    },
}
</script>
<style scoped>
.button {
    position: absolute;
    top: 0;
    right: 0;
}
</style>