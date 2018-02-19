<template>
    <div class="name">
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:"App",
        data(){
            return{
                a:"name",
                name:"wumengchao"
            }
        },
        created(){
           console.log("created")
        },
        mounted(){
            console.log("mounted")
        },

        methods:{

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
    @import '../style/main.scss';
    .name{
       .man{
           height:$width;
           width:$width;
           background: $color;
       }
    }
</style>