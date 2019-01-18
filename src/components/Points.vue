<template>
    <div>
        <ion-content fullscreen text-center>
            <div class="content-secondary">
                <ion-card color="light">
                    <ion-button class="button" color="light" style="--box-shadow:none; z-index:200" @click="close">
                        <ion-icon color="primary" slot="icon-only" name="close"></ion-icon>
                    </ion-button>
                    <ion-card-header>
                        <ion-text class="card-title-top">YOUR</ion-text>
                        <ion-text class="card-title-bottom">POINTS</ion-text>
                        <!-- <ion-card-subtitle>How</ion-card-subtitle> -->
                        <!-- <ion-card-title class="card-title"><ion-text color="primary">It Works</ion-text></ion-card-title> -->
                    </ion-card-header>
                    <ion-card-content>
                        <ion-text>{{ item }} Points</ion-text>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </div>
</template>
<script>

export default {
    components: {
    },
    props: {
        item: {
            type: Number,
            deafult: 0
        }
    },
    data() {
        return {
        }
    },
    methods: {
        close() {
            this.$ionic.modalController.dismiss();
        }
    },
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;
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
.button {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
