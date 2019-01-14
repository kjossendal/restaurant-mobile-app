<template>
    <div class="screen-container">
        <HeaderTabs title="Rewards" />
        <ion-text>
            <h3 class="text">Rewards</h3>
        </ion-text>
    </div>
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
.screen-container {
    flex: 1;
    height: 100%;
    background-color: var(--ion-color-dark);
}
.text {
    color: var(--ion-color-primary);
}
</style>
