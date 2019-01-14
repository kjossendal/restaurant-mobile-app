<template>
    <div>
        <ion-app>
            <router-view></router-view>
        </ion-app>
        <ion-menu-controller></ion-menu-controller>
    </div>
</template>

<script>
import OptionsMenu from './components/OptionsMenu.vue';

export default {
    created() {
        console.log("IONIC", this.$ionic)
        console.log("User", this.$user)
    },
    components: { 
        'OptionsMenu' : OptionsMenu,
    },
}
</script>

<style>
:root {
    --ion-color-primary: #cab645;
    --ion-color-secondary: #3d3c2e;
    --ion-color-danger: #f53d3d;
    --ion-color-light: #e74c3c;
    --ion-color-dark: #222222;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
