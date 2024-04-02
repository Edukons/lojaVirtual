import { defineAsyncComponent, ShallowRef, onMounted, onUnmounted } from "vue"

export default function useLayout(){
    const layout = ShallowRef()

    const onResize = () => {
        const width = window.innerWidth
        if (width < 768){
            layout.value = defineAsyncComponent(() => import('@/layout/LayoutSmall.vue'))
        } else if(width < 1024){
            layout.value = defineAsyncComponent(() => import('@/layout/Layoutmedium.vue'))
        }else{
            layout.value = defineAsyncComponent(() => import('@/layout/LayoutLarge.vue'))
        }
    }
onMounted(() =>{
    window.addEventListener('resize', 'onResize')
    onResize()
})
onUnmounted(() => {
    window.removeEventListener('resize', onResize)
})

return { layout }
}

