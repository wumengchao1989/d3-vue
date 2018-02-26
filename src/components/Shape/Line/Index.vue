<template>
    <div id="content"></div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: "LineD",
        data(){
            return {
                /*easeTypes: {
                 easeBounceIn: d3.easeBounceIn,
                 easeBounceOut: d3.easeBounceOut,
                 easePolyIn: d3.easePolyIn,
                 easePolyOut: d3.easePolyOut,
                 easePoly: d3.easePoly,
                 easePolyInOut: d3.easePolyInOut,
                 easeQuadIn: d3.easeQuadIn,
                 easeQuadOut: d3.easeQuadOut,
                 easeQuad: d3.easeQuad,
                 easeQuadInOut: d3.easeQuadInOut,
                 easeCubicIn: d3.easeCubicIn,
                 easeCubicOut: d3.easeCubicOut,
                 easeCubic: d3.easeCubic,
                 easeCubicInOut: d3.easeCubicInOut,
                 easeSinIn: d3.easeSinIn,
                 easeSinOut: d3.easeSinOut,
                 easeSin: d3.easeSin,
                 easeSinInOut: d3.easeSinInOut,
                 easeExpIn: d3.easeExpIn,
                 easeExpOut: d3.easeExpOut,
                 easeExp: d3.easeExp,
                 easeExpInOut: d3.easeExpInOut,
                 easeCircleIn: d3.easeCircleIn,
                 easeCircleOut: d3.easeCircleOut,
                 easeCircle: d3.easeCircle,
                 easeCircleInOut: d3.easeCircleInOut,
                 easeElasticIn: d3.easeElasticIn,
                 easeElastic: d3.easeElastic,
                 easeElasticOut: d3.easeElasticOut,
                 easeElasticInOut: d3.easeElasticInOut,
                 easeBackIn: d3.easeBackIn,
                 easeBackOut: d3.easeBackOut,
                 easeBack: d3.easeBack,
                 easeBackInOut: d3.easeBackInOut,
                 }*/
            }
        },
        props: {
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
            dimension:{
                type:Object,
                default:{
                    width:200,
                    height:200
                }
            },
            scale:Object,
            lineStyle:{
                type:Object,
                default:{
                    colors:["black"]
                }
            }
        },
        computed: {},
        mounted(){
            this.renderFrame();
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
                let scale = d3.scaleLinear().domain(this.scale.domain).range(this.scale.range);
                let axisLeft = d3.axisLeft(scale).ticks(5, 's');
                let axisTop = d3.axisTop(scale).ticks(5, 's');
                svg.append("path")
                    .attr("id", "line")
                    .attr("fill", "none")
                    .attr("stroke", this.lineStyle.colors[0])
                    .attr('transparent', "100%")
                    .attr("transform", "translate("+this.position.positionX+","+this.position.positionY+")");
                svg.append("g")
                    .attr("transform","translate("+this.position.positionX+","+this.position.positionY+")")
                    .call(axisLeft);
                svg.append("g")
                    .attr("transform", "translate("+this.position.positionX+","+this.position.positionY+")")
                    .call(axisTop);
            },
            renderLine(){
                console.log(this.lineStyle)
                let easeMethod;
                if (typeof this.easeType == "string") {
                    easeMethod = d3[this.easeType];
                } else {
                    console.warn('props easeType should be defined as String!')
                }
                if (typeof this.curveType == "string") {
                    easeMethod = d3[this.curveType];
                } else {
                    console.warn('props curveType should be defined as String!')
                }

                for(let i=0;i<this.dataList.length;i++){
                    if(this.dataList[0].length){
                        console.log(this.lineStyle.colors[i]);
                        let svg=d3.select("#content svg");
                        svg.append("path")
                            .attr("fill", "none")
                            .attr("d",this.lineGenerator()(this.dataList[i]))
                            .attr("stroke", this.lineStyle.colors[i])
                            .attr('transparent', "100%")
                            .attr("transform", "translate("+this.position.positionX+","+this.position.positionY+")");
                    }else{
                        let lineE = d3.select("#line");
                        lineE.transition()
                            .ease(easeMethod)
                            .duration(1500)
                            .attr("d", this.lineGenerator()(this.dataList))
                            .attr("stroke", this.lineStyle.colors[0]);
                        return;
                    }
                }

            },
            lineGenerator(){
                let scale = d3.scaleLinear().domain(this.scale.domain).range(this.scale.range);
                return d3.line()
                    .x(function (d) {
                        return scale(d.x)
                    })
                    .y(function (d) {
                        return scale(d.y)
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