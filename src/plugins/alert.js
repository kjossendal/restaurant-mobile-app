export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                "$alertError"(message) {
                    this.$ionic.alertController.create({
                        header: 'Error',
                        message: message,
                        buttons: ['OK'],
                    }).then(r => r.present())
                },
                "$alertSuccess"(message) {
                    this.$ionic.alertController.create({
                        header: 'Success',
                        message: message,
                        buttons: ['OK'],
                    }).then(r => r.present())
                },
            }
        });
    }
}

