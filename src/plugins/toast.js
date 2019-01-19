import Ionic from '@ionic/vue';
export default {
    install(Vue) {
        Vue.use(Ionic)
        Vue.mixin({
            methods: {
                $toast(toastMessage) {
                    this.$ionic.toastController.create({
                        message: toastMessage,
                        showCloseButton: true,
                        position: 'top',
                        closeButtonText: 'Close',
                    })
                    .then(t => t.present())
                },
            }
        })
    }
}
    