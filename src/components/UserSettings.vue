<template>
    <ion-content padding>
        <ion-list>
            <ion-list-header>
                Hello, {{ $user.email }}
            </ion-list-header>
            <ion-item><ion-label>Password reset</ion-label></ion-item>
            <ion-item><ion-label>Permissions</ion-label></ion-item>
            <ion-item><ion-label>Something else</ion-label></ion-item>
            <ion-item @click="close"><ion-label>Close</ion-label></ion-item>
        </ion-list>
    </ion-content>
</template>
<script>
export default {
    methods: {
        close() {
            this.$emit('close-popover')
            this.$ionic.popoverController.dismiss()
        }
    }
}
</script>
<style scoped>
ion-content {
}
ion-modal {
    max-width: 50%;
}
.inner-scroll {
    left: auto;
}
</style>