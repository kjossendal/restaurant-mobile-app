export default {
    install(Vue) {
        Vue.mixin({
            computed: {
                $theme() {
                    return {
                        primary: '#cab645',
                        secondary: '#3d3c2e',
                        danger: '#f53d3d',
                        light: '#e74c3c',
                        dark: '#222222'
                    }
                },
            }
        })
    }
}
    