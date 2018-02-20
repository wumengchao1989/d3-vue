<template>
    <div id="content"></div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: "LineD",
        data(){
            return {}
        },
        mounted(){
            this.renderLine();
        },
        methods: {
            renderLine(){
                let data = [];
                for (let i = 0; i < 23; i++) {
                    data.push({
                        data: i * 10,
                        value: 300 * Math.random()
                    });
                }
                let svg = d3.select("#content")
                    .append("svg")
                    .attr("height", 1080)
                    .attr("width", 1920);
                let scale = d3.scaleLinear().domain(0, 1080);
                let axis = d3.axisLeft(scale);
                let line = d3.line()
                    .x(function (d) {
                        return d.data
                    })
                    .y(function (d) {
                        return d.value
                    })
                    .curve(d3.curveCardinal.tension(0.5));//d3生成一个函数line,line里面可以添加data,然后生成一段path路径.
                svg.append("path")
                    .attr("d", line(data))
                    .attr("fill", "none")
                    .attr("stroke", "red")
                    .attr('transparent', "100%")
                    .attr("transform", "translate(200,200)");
                svg.append("g")
                    .attr("transform", "translate(200,200)")
                    .call(axis)
            }
        }
    }
</script>