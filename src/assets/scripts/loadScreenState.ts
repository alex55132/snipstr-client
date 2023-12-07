import { reactive } from 'vue';

export const LoadScreenState = reactive({
    isShown: false,
    show() {
        this.isShown = true
    },
    hide() {
        this.isShown = false
    }
})