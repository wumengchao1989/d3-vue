<template>
    <Geo></Geo>
</template>
<script>
    import Geo from './Geo.vue';
    export default {
        name:"test",
        components:{
            Geo,
        },
        data(){
            return{
                a:1
            }
        }
    }
</script>