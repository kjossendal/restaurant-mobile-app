<template>
    <div>
        <!-- <HeaderTabs title="dashboard"/> -->
        <ion-content fullscreen text-center>
            <div class="content-secondary">
                <ion-card color="light">
                    <ion-card-header>
                        <ion-text class="card-title-top">YOUR</ion-text>
                        <ion-text class="card-title-bottom">DASHBOARD</ion-text>
                        <!-- <ion-card-subtitle>How</ion-card-subtitle> -->
                        <!-- <ion-card-title class="card-title"><ion-text color="primary">It Works</ion-text></ion-card-title> -->
                    </ion-card-header>
                    <ion-card-content>
                        <p style="">Welcome to your Stirfry Republic Member Dashboard!</p>
                        <p style="">You currently have {{ formatRewardText }}</p>
                        <Modal :item="rewards" modalComponent="rewards" >
                            <ion-text slot="modalcontent" color="primary" style="">Rewards: Use unique codes to get discounts and free stuff.</ion-text>
                        </Modal>
                        <Modal :item="points" modalComponent="points">
                            <ion-text slot="modalcontent" color="primary" style="">Points: Get points for the dollars you spend on meals.</ion-text>
                        </Modal>
                        <ion-text>Everything here is fresh and prepared in-house (we do all our own software development), so if you find a bug, send us an email!</ion-text>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </div>
</template>
<script>
import HeaderTabs from '../components/HeaderTabs.vue';

import Modal      from '../components/Modal.vue';

import axios from 'axios';

export default {
    components: {
        'HeaderTabs' : HeaderTabs,
        'Modal' : Modal,
    },
    data() {
        return {
            items: [],
            item: {
                name: 'Item',
                price: '$9.99'
            },
            points: 0,
            rewards: [],
        }
    },
    mounted() {
        // this.$showLoader() // not available in mounted hook
        this.$user.getToken().then(resp => {
            return axios.get('api/rewards', { headers: {"Authorization" : `Bearer ${resp.token}`} })
        })
        .then(resp => {
            console.log('rewards', resp.data)
            this.points = resp.data.points;
            this.rewards = resp.data.rewards;
        })
        .catch(err => {
            console.error(err)
            this.$alertError('Could not retrieve you current reward info')
        })
        .finally(() => {
            // this.$hideLoader();
        })
    },
    methods: {
        additionsChanged(newItems) {
            this.items = newItems;
        },
    },
    computed: {
        formatRewardText() {
            return `${this.rewards.length} ${this.rewards.length === 1 ? 
                'reward' : 
                'rewards'} available and ${this.points} ${this.points === 1 ? 
                'point' : 
                'points'
            }`
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
    margin: 5px auto;
    width: 95%;
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
</style>
