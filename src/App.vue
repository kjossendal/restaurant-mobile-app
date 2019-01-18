<template>
    <div id="app">
        <ion-app>
            <router-view></router-view>
        </ion-app>
    </div>
</template>
<script>
export default {
    created() {
        console.log("IONIC", this.$ionic)
    },
}
</script>
<style>
:root {
    --ion-color-primary: #cf1e3a;
    --ion-color-secondary: #3d3c2e;
    --ion-color-danger: #f53d3d;
    --ion-color-light: #fff6ed;
    --ion-color-dark: #222222;
}
:host {
    /* Look in to changing this. For some reason this selector defaults to 8px right and 16px left, offsetting all lists */
    /* --padding-start: 8px !important; */
}
#app {
  font-family: 'Bitter', serif;
}
</style>
