<template>
    <ion-content text-center>
        <ion-text color="dark">
            <h3>Rewards</h3>        
        </ion-text>
    </ion-content>
</template>
<script>
import HeaderTabs from '../components/HeaderTabs.vue'

export default {
    components: {
        'HeaderTabs' : HeaderTabs
    },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style scoped>
ion-content {
    --background: url('../assets/hero-bg-02-min.jpg') no-repeat center center / cover;
}
</style>
