<template>
    <div class="name">
        <router-view></router-view>
        <LineA :dataList="dataList"></LineA>
        <button >test</button>
    </div>
</template>
<script>
    import Pie from '../components/Shape/subComponent/Pie.vue';
    import LineA from '../components/Shape/subComponent/Line.vue';
    export default{
        name: "App",
        data(){
            return {
                dataList: [{
                    data: 1,
                    value: 22
                }, {
                    data: 30, value: 32
                }, {
                    data: 24, value: 45
                }, {
                    data: 23, value: 55
                }]
            }
        },
        components: {
            Pie,
            LineA,
        },
        created(){

        },
        mounted(){

        },
        methods: {
            test(){
                for (let i = 0; i < 100; i++) {
                    let data = [];
                    data.push({
                        data: i,
                        value: 100 * Math.random()
                    });
                    this.data=data;
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