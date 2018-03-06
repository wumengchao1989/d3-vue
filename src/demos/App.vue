<template>
    <div class="name">
        <router-view></router-view>
        <line-chart  v-bind="chartConfig"  ease-type="easePolyOut" curve-type="curveCatmullRom">
            <div></div>
        </line-chart>
        <pie v-bind="pieConfig"></pie>
        <button @click="test">test</button>
    </div>
</template>
<script>
    import Pie from '../components/Shape/Pie/Index.vue';
    import {LineChart} from '../components/index';
    export default{
        name: "App",
        data(){
            return {
                chartConfig: {
                    xAxis:{
                        show:true,//true or false
                        position:"top", //top or bottom
                        name:"x轴",
                    },
                    yAxis:{
                        show:true,//true or false
                        position:"left", //left or right
                        name:"y轴",
                    },
                    dataList: [],
                    position: {
                        positionX: 200,
                        positionY: 200
                    },
                    dimension: {
                        height:450,
                        width: 920
                    },
                    scale: {
                        scaleX: {
                            domain: [0, 100],
                            range: [0, 300]
                        },
                        scaleY: {
                            domain: [0, 100],
                            range: [0, 300]
                        }
                    },
                    lineStyle: {
                        colors: []
                    }
                },
                pieConfig:{
                    dataList:[1,2,3,4,5,6],
                    dimension:{
                        height:450,
                        width: 920,
                    },
                    innerRadius:30,
                    outerRadius:50,
                    cornerRadius:20,
                    position: {
                        positionX: 500,
                        positionY: 500
                    },
                }
            }
        },
        components: {
            Pie,
            LineChart,
        },
        created(){

        },
        mounted(){
            let data = [];
            for (let i = 0; i < 100; i++) {
                data.push({
                    x: i,
                    y: i*i/200
                });
                this.chartConfig.dataList = data;
            }
        },
        methods: {
            test(){
                let data = [];
                for(let j=0;j<1;j++){
                    let subData=[];
                    let param=Math.random()*100;
                    for (let i = 0; i < 100; i++) {
                        subData.push({
                            x: i,
                            y: Math.sin(param*i)*param
                        });
                    }
                    data.push(subData);
                    let r = Math.round((Math.random()*255)).toString(16);
                    let g = Math.round((Math.random()*255)).toString(16);
                    let b = Math.round((Math.random()*255)).toString(16);
                    let color = "#"+r+g+b;
                    this.chartConfig.lineStyle.colors.push(color)
                }
                this.chartConfig.dataList=data
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