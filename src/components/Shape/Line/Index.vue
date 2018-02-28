<template>
    <div id="content"></div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: "LineChart",
        data(){
            return {}
        },
        props: {
            xAxis: Object,
            yAxis: Object,
            dataList: Array,
            curveType: {
                type: String,
                default: "curveCardinal"
            },
            easeType: {
                type: String,
                default: "easeLinear",
            },
            position: {
                type: Object,
                default: {
                    positionX: 200,
                    positionY: 200
                }
            },
            dimension: {
                type: Object,
                default: {
                    width: 200,
                    height: 200
                }
            },
            scale: Object,
            lineStyle: {
                type: Object,
                default: {
                    colors: ["black"]
                }
            }
        },
        computed: {},
        mounted(){
            this.renderFrame();
            this.axesGenerator();
             this.renderLine();
        },
        updated(){
            this.renderLine();
        },
        methods: {
            renderFrame(){
                let svg = d3.select("#content")
                    .append("svg")
                    .attr("height", this.dimension.height)
                    .attr("width", this.dimension.width);
            },
            axesGenerator(){
                let svg=d3.select("#content>svg");
                let scaleX = d3.scaleLinear().domain(this.scale.scaleX.domain).range(this.scale.scaleX.range);
                let scaleY = d3.scaleLinear().domain(this.scale.scaleY.domain).range(this.scale.scaleY.range);
                let axisLeft = d3.axisLeft(scaleX).ticks(10, 's');
                let axisTop = d3.axisTop(scaleY).ticks(10, 's');
                svg.append("g")
                    .attr("transform", "translate(" + this.position.positionX + "," + this.position.positionY + ")")
                    .call(axisLeft)
                    .append("g")
                    .append("text")
                    .text(this.xAxis.name)
                    .attr("fill", "black")
                    .attr("x", 310)
                    .attr("y", 0)
                    .attr("text-anchor", "start")
                svg.append("g")
                    .attr("transform", "translate(" + this.position.positionX + "," + this.position.positionY + ")")
                    .call(axisTop)
                    .append("g")
                    .append("text")
                    .text(this.yAxis.name)
                    .attr("fill", "black")
                    .attr("x", -6)
                    .attr("y", 320)
                    .attr("text-anchor", "start")
            },
            renderLine(){
                let easeMethod;
                let svg = d3.select("#content svg");
                let vm = this;
                let scaleX = d3.scaleLinear().domain(vm.scale.scaleX.domain).range(vm.scale.scaleX.range);
                let scaleY = d3.scaleLinear().domain(vm.scale.scaleY.domain).range(vm.scale.scaleY.range);
                svg.selectAll(".line").remove();
                if (typeof vm.easeType == "string") {
                    easeMethod = d3[vm.easeType];
                } else {
                    console.warn('props easeType should be defined as String!')
                }
                if (typeof vm.curveType == "string") {
                    easeMethod = d3[vm.curveType];
                } else {
                    console.warn('props curveType should be defined as String!')
                }
                for (let i = 0; i < vm.dataList.length; i++) {
                    if (vm.dataList[0].length) {
                        vm.dataList[i] = vm.dataList[i].filter(function (item) {
                            return scaleX(item.x) < vm.scale.scaleX.range[1] && scaleY(item.y) < vm.scale.scaleY.range[1]
                        });
                        svg.append("path")
                            .attr("fill", "none")
                            .attr("class", "line")
                            .attr("d", vm.lineGenerator()(vm.dataList[i]))
                            .attr("stroke", vm.lineStyle.colors[i])
                            .attr('transparent', "100%")
                            .attr("transform", "translate(" + vm.position.positionX + "," + vm.position.positionY + ")");
                    } else {
                        svg.append("path")
                            .attr("fill", "none")
                            .attr("class", "line")
                            .attr("d", vm.lineGenerator()(vm.dataList))
                            .attr("stroke", vm.lineStyle.colors[0])
                            .attr('transparent', "100%")
                            .attr("transform", "translate(" + vm.position.positionX + "," + vm.position.positionY + ")");
                        return;
                    }
                }
            },
            lineGenerator(){
                let scaleX = d3.scaleLinear().domain(this.scale.scaleX.domain).range(this.scale.scaleX.range);
                let scaleY = d3.scaleLinear().domain(this.scale.scaleY.domain).range(this.scale.scaleY.range);
                return d3.line()
                    .x(function (d) {
                        return scaleX(d.x)
                    })
                    .y(function (d) {
                        return scaleY(d.y)
                    })
                    .curve(d3[this.curveType]);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
    #content {
        .btn {
            background: #B7FF94;
            margin-right: 1rem;
            width: 125px;
            margin-bottom: 16px;
        }
    }
</style>