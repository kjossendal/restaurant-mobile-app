<template>
    <ion-content fullscreen text-center>
        <ion-text color="primary">
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
    --ion-background-color: var(--ion-color-dark);
}
</style>
