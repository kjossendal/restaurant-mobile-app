export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                "$showLoader"(loadingMessage) {
                    this.$ionic.loadingController.create({
                        keyboardClose: true,
                        showBackdrop: false,
                        message: loadingMessage || 'Please Wait...',
                    }).then(l => l.present())
                },
                "$hideLoader"() {
                    this.$ionic.loadingController.dismiss();
                }
            }
        });
    }
}

