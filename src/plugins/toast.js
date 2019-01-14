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
                        position: 'bottom',
                        closeButtonText: 'Done',
                    })
                    .then(t => t.present())
                },
            }
        })
    }
}
    