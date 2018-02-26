<template>
    <div class="name">
        <router-view></router-view>
        <LineA :data-list="dataList" ease-type="easePolyOut" curve-type="curveCatmullRom" :position="position" :dimension="dimension" :scale="scale" :lineStyle="lineStyle">
            <div></div>
        </LineA>
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
                    positionX:200,
                    positionY:200
                },
                dimension:{
                    height:1080,
                    width:1900
                },
                scale:{
                    domain:[0,100],
                    range:[0,300]
                },
                lineStyle:{
                    colors:["yellow","red","blue"]
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
                    x: i,
                    y: 100 * Math.random()
                });
                this.dataList = data;
            }
        },
        methods: {
            test(){
                let data = [];
                for(let j=0;j<3;j++){
                    let subData=[];
                    for (let i = 0; i < 100; i++) {
                        subData.push({
                            x: i,
                            y: 100 * Math.random()
                        });
                    }
                    data.push(subData);
                }
                this.dataList=data
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