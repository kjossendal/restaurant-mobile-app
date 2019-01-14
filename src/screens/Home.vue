<template>
    <div class="screen-container">
        <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <ion-button @click="logout" size="large" expand="block">Logout</ion-button>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="12">
                    <ion-text>
                        <h3 class="text">Home Page</h3>
                        <ModalButton>
                        </ModalButton>
                    </ion-text>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>
<script>
import firebase from 'firebase';

import ModalButton from '../components/ModalButton';

export default {
    components: {
        'ModalButton' : ModalButton
    },
  data() {
    return {
    }
  },
  methods: {
      logout() {
          firebase.auth().signOut().then(() => this.$router.replace('/login'))
      },
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
