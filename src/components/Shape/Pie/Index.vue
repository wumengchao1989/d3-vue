<template>
    <div id="content">

    </div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: 'Pie',
        data(){
            return {}
        },
        computed:{
            xDomain: function () {
                return this.scale.scaleX.domain;
            },
            yDomain: function () {
                return this.scale.scaleY.domain;
            },
            xRange: function () {
                return this.scale.scaleX.range;
            },
            yRange: function () {
                return this.scale.scaleY.range;
            },
            positionX:function(){
                return this.position.positionX;
            },
            positionY:function(){
                return this.position.positionY;
            }
        },
        props: {
            dataList: Array,
            dimension:Object,
            position:Object,
            innerRadius:[Number,String],
            outerRadius:[Number,String],
            cornerRadius:[Number,String],
        },
        mounted(){
            this.createArc();
        },
        methods: {
            renderFrame(){
                let svg = d3.select("#content")
                    .append("svg")
                    .attr("height", this.dimension.height)
                    .attr("width", this.dimension.width)
                .attr("id","pie")
            },
            createArc(){
                let vm=this;
                let arcs = d3.pie()(vm.dataList);
                let svg = d3.select("#pie");
                arcs.map((item, index) => {
                    let arcLine = d3.arc()
                        .innerRadius(vm.innerRadius)
                        .outerRadius(vm.outerRadius)
                        .startAngle(item.startAngle)
                        .endAngle(item.endAngle)
                        .padAngle(0.2)
                        .cornerRadius(vm.cornerRadius);
                    let centroid = arcLine.centroid();
                    svg.append("path")
                        .attr("transform", "translate(500,500)")
                        .attr("d", arcLine)
                        .attr("stroke", "black")
                        .attr("fill", this.$store.state.pie_M.pieColor[index])
                        .on('mouseover', function (){
                            vm.zoom(this, item, "in")
                        })
                        .on('mouseout', function () {
                            vm.zoom(this, item, "out")
                        });
                    svg.append('text').attr("x", centroid[0] + 392)
                        .attr("y", centroid[1] + 308)
                        .text(item.value)
                })
            },
            zoom(){
                let el = arguments[0];
                let item = arguments[1];
                let zoomFlag = arguments[2];
                let arcZoom = d3.arc()
                    .innerRadius(40)
                    .outerRadius(zoomFlag == "in" ? 300 : 200,)
                    .startAngle(item.startAngle)
                    .endAngle(item.endAngle)
                    .padAngle(0.04)
                    .cornerRadius(5);
                d3.select(el)
                    .transition()
                    .ease(d3.easeBounceOut)
                    .duration(1500)
                    .attr("d", arcZoom);
            },
        }
    }
</script>