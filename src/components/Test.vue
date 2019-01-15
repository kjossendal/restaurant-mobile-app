<template>
    <div class="screen-container">
    <ion-content>
            <ion-button @click="alert">Trigger Alert</ion-button>
            <ion-button @click="loading">Trigger Loading</ion-button>
            <ion-button @click="menu">Toggle Menu</ion-button>
            <ion-button @click="modal">Open Modal</ion-button>
            <ion-button @click="popover">Open Popover</ion-button>
            <ion-button @click="$toast('WORKING')">Trigger Toast</ion-button>
            <ion-button @click="actionsheet">Action Sheet</ion-button>
    </ion-content>
    </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
import Popover  from './Popover.vue';
export default {
    methods: {
        alert() {
            this.$ionic.alertController.create({
                header: 'Hello!',
                message: 'How are you?',
                buttons: ['OK, thanks!'],
            })
            .then(a => a.present())
        },
        actionsheet() {
            this.$ionic.actionSheetController.create({
                header: "Albums",
                buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    console.log('Delete clicked');
                }
                }, {
                text: 'Share',
                icon: 'share',
                handler: () => {
                    console.log('Share clicked');
                }
                }, {
                text: 'Play (open modal)',
                icon: 'arrow-dropright-circle',
                handler: () => {
                    console.log('Play clicked');
                }
                }, {
                text: 'Favorite',
                icon: 'heart',
                handler: () => {
                    console.log('Favorite clicked');
                }
                }, {
                text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
                }]
            }).then(action => {
                action.present()
            })
        },
        loading() {
            this.$ionic.loadingController.create()
            .then(l => {
                l.present()
                setTimeout(function() {
                    l.dismiss()
                }, 2000)
            })
        },
        menu() {
            this.$ionic.menuController.get().then(m => {
                console.log('menu', m)
            })
        },
        modal() {
            this.$ionic.modalController.create({
                component: MenuItem
            })
            .then(m => m.present())
        },
        popover(event) {
            this.$ionic.popoverController.create({
                component: Popover,
                translucent: true,
                event
            })
            .then(p => p.present())
        },
        toast() {
            this.$ionic.toastController.create({
                message: 'Sweet Toast',
                showCloseButton: true,
                position: 'bottom',
                closeButtonText: 'Done'
            })
            .then(t => t.present())
        },
    }
}
</script>
<style scoped>
.screen-container {
    flex: 1;
    height: 100%;
    background-color: var(--ion-color-dark);
}
</style>