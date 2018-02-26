<template>
    <div class="name">
        <router-view></router-view>
        <LineA :data-list="dataList" easeType="easePolyOut" curveType="curveCatmullRom" :position="position" :dimension="dimension">s</LineA>
        <button @click="test">test</button>
    </div>
</template>
<script>
    import Pie from '../components/Shape/Pie/Index.vue';
    import LineA from '../components/Shape/Line/Index.vue';
    export default{
        name: "App",
        data(){
            return {
                dataList: [],
                position:{
                    positionX:599,
                    positionY:699
                },
                dimension:{
                    height:1080,
                    width:1900
                }
            }
        },
        components: {
            Pie,
            LineA,
        },
        created(){

        },
        mounted(){
            let data = [];
            for (let i = 0; i < 100; i++) {
                data.push({
                    data: i,
                    value: 100 * Math.random()
                });
                this.dataList = data;
            }
        },
        methods: {
            test(){
                let data = [];
                for (let i = 0; i < 100; i++) {
                    data.push({
                        data: i,
                        value: 100 * Math.random()
                    });
                    this.dataList = data;
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
    @import '../style/main';
    .name {
        .man {
            height: $width;
            width: $width;
            background: $color;
        }
    }
</style>