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
        mounted(){
            this.createArc();
        },
        methods: {
            createArc(){
                const svg = d3.select('#content').append('svg').attr('width', 1200).attr("height", 780);
                const arcs = d3.pie()(this.$store.state.pie_M.pieData)
                const arc = d3.arc().cornerRadius(5);
                arcs.map((item, index) => {
                    let that = this;
                    let arcLine = d3.arc()
                        .innerRadius(40)
                        .outerRadius(200)
                        .startAngle(item.startAngle)
                        .endAngle(item.endAngle)
                        .padAngle(0.04)
                        .cornerRadius(5);
                    let centroid=arcLine.centroid();
                    svg.append("path")
                        .attr("transform", "translate(400,300)")
                        .attr("d", arcLine)
                        .attr("stroke", "black")
                        .attr("fill", this.$store.state.pie_M.pieColor[index])
                        .on('mouseover', function () {
                            that.zoom(this, item, "in")
                        })
                        .on('mouseout', function () {
                            that.zoom(this, item, "out")
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