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
                const arc = d3.arc();
                arcs.map((item, index) => {
                    let that = this;
                    let arcLine = arc({
                        innerRadius: 40,
                        outerRadius: 200,
                        startAngle: item.startAngle,
                        endAngle: item.endAngle,
                        cornerRadius: Math.PI / 3,
                        padAngle: 0.04
                    });
                    svg.append("path")
                        .attr("transform", "translate(400,300)")
                        .attr("d", arcLine)
                        .attr("stroke", "red")
                        .attr("fill", this.$store.state.pie_M.pieColor[index])
                        .on('mouseover', function () {
                            that.zoom(this, item,"in")
                        })
                        .on('mouseout',function(){
                            that.zoom(this,item,"out")
                        });
                    svg.selectAll("text").enter()
                })
            },
            zoom(){
                const arc = d3.arc();
                let arcZoom = arc({
                    innerRadius: 40,
                    outerRadius: arguments[2]=="in"?300:200,
                    startAngle: arguments[1].startAngle,
                    endAngle: arguments[1].endAngle,
                    cornerRadius: Math.PI / 3,
                    padAngle: 0.04
                });
                d3.select(arguments[0]).attr("d", arcZoom)
            },

        }
    }
</script>