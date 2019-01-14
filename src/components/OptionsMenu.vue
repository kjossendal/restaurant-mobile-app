<template>
    <div>
  <ion-menu side="end">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hola</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-label>END MENU CONTENTS</ion-label>
    </ion-content>
  <ion-content>
  </ion-content>
  </ion-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        open() {
            document.querySelector('ion-menu-controller').open('start')
        }
    },
};
</script>
