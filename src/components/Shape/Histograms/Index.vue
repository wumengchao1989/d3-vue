<template>
    <div id="content"></div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: "histograms",
        data(){
            return {

            }
        },
        mounted(){
            this.createHistogram();
        },
        methods: {
            createHistogram(){
                let svg = d3.select("#content").append("svg").attr("width", 500).attr("height", 500);
                let x = d3.scaleLinear().domain([0, 50]).range([0, 400]);
                let y = d3.scaleLinear().domain([50, 0]).range([0, 400]);
                let y1=d3.scaleLinear().domain([0,50]).range([0,400])
                let xAxis = d3.axisBottom(x);
                let yAxis = d3.axisLeft(y);
                let histogramGen = d3.histogram().domain(x.domain()).thresholds(10);
                svg.append("g").attr("transform", "translate(65,450)").call(xAxis);
                svg.append("g").attr("transform", "translate(65,50)").call(yAxis);
                let data=[];
                for(let i=0;i<100;i++){
                    data.push(Math.random()*50)
                }
                var bar = svg.selectAll(".bar")
                    .data(histogramGen(data))
                    .enter().append("g")
                    .attr("class", "bar")
                    .attr("transform", function (d) {
                        return "translate(" + (x(d.x0) + 100) + "," + 450 + ") rotate(-180)";
                    });
                bar.append("rect")
                    .attr("width", function (d) {
                        return x(d.x1) - x(d.x0) - 10;
                    })
                    .attr("height", function (d) {
                        return y1(d.length);
                    })
            }
        }

    }
</script>
<style lang="scss" rel="stylesheet/scss" type="text/css">
    .bar rect {
        fill: red;
    }
</style>