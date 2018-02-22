<template>
    <div id="content">
        <button class="btn" v-for="(value,key) in easeTypes" @click="changeLineData(key)">{{key}}</button>
    </div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: "LineD",
        data(){
            return {
                data: [],
                easeTypes: {
                    easeBounceIn: d3.easeBounceIn,
                    easeBounceOut:d3.easeBounceOut,
                    easePolyIn:d3.easePolyIn,
                    easePolyOut:d3.easePolyOut,
                    easePoly:d3.easePoly,
                    easePolyInOut:d3.easePolyInOut,
                    easeQuadIn:d3.easeQuadIn,
                    easeQuadOut:d3.easeQuadOut,
                    easeQuad:d3.easeQuad,
                    easeQuadInOut:d3.easeQuadInOut,
                    easeCubicIn:d3.easeCubicIn,
                    easeCubicOut:d3.easeCubicOut,
                    easeCubic:d3.easeCubic,
                    easeCubicInOut:d3.easeCubicInOut,
                    easeSinIn:d3.easeSinIn,
                    easeSinOut:d3.easeSinOut,
                    easeSin:d3.easeSin,
                    easeSinInOut:d3.easeSinInOut,
                    easeExpIn:d3.easeExpIn,
                    easeExpOut:d3.easeExpOut,
                    easeExp:d3.easeExp,
                    easeExpInOut:d3.easeExpInOut,
                    easeCircleIn:d3.easeCircleIn,
                    easeCircleOut:d3.easeCircleOut,
                    easeCircle:d3.easeCircle,
                    easeCircleInOut:d3.easeCircleInOut,
                    easeElasticIn:d3.easeElasticIn,
                    easeElastic:d3.easeElastic,
                    easeElasticOut:d3.easeElasticOut,
                    easeElasticInOut:d3.easeElasticInOut,
                    easeBackIn:d3.easeBackIn,
                    easeBackOut:d3.easeBackOut,
                    easeBack:d3.easeBack,
                    easeBackInOut:d3.easeBackInOut,
                }
            }
        },
        computed: {},
        created(){
            for (let i = -30; i < 30; i++) {
                this.data.push({
                    data: i*10,
                    value:300- 600 * Math.random()
                });
            }
        },
        mounted(){
            this.renderLine();
        },
        methods: {
            changeLineData(){
                let data = [];
                for (let i = -30; i < 30; i++) {
                    data.push({
                        data: i * 10,
                        value: 300-600 * Math.random()
                    });
                }
                this.data = data;
                this.reRenderLine(arguments[0]);
            },
            renderLine(){
                let svg = d3.select("#content")
                    .append("svg")
                    .attr("height", 1080)
                    .attr("width", 1920);
                let scale = d3.scaleLinear().domain([-300, 300]).range([-300, 300]);
                let axisLeft = d3.axisLeft(scale).ticks(5, 's');
                let axisTop = d3.axisTop(scale).ticks(5, 's');
                let line = d3.line()
                    .x(function (d) {
                        return d.data
                    })
                    .y(function (d) {
                        return d.value
                    })
                    .curve(d3.curveCardinal.tension(0.5));//d3生成一个函数line,line里面可以添加data,然后生成一段path路径.
                svg.append("path")
                    .attr("id", "line")
                    .attr("d", line(this.data))
                    .attr("fill", "none")
                    .attr("stroke", "red")
                    .attr('transparent', "100%")
                    .attr("transform", "translate(300,300)");
                svg.append("g")
                    .attr("transform", "translate(300,300)")
                    .call(axisLeft);
                svg.append("g")
                    .attr("transform", "translate(300,300)")
                    .call(axisTop);
            },
            reRenderLine(a){
                let easeMethod;
                if (typeof this.easeTypes[a] == 'function') {
                    easeMethod = this.easeTypes[a];
                } else {
                    easeMethod = d3.easeLinear;
                }

                let svg = d3.select("#content");
                let line = d3.line()
                    .x(function (d) {
                        return d.data
                    })
                    .y(function (d) {
                        return d.value
                    })
                    .curve(d3.curveCardinal.tension(0.5));
                let lineE = d3.select("#line");
                lineE.transition()
                    .ease(easeMethod)
                    .duration(1500)
                    .attr("d", line(this.data))
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
    #content{
       .btn{
          background: #B7FF94;
           margin-right: 1rem;
           width:125px;
           margin-bottom: 16px;
       }
    }
</style>