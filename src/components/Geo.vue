<template>
   <div>
       <div id="content"></div>
   </div>
</template>
<script>
    import * as d3 from 'd3';
    import china from '../util/GeoJson/china';
    export default{
        name:"Geo",
        mounted(){
            this.renderChina();
        },
        methods:{
            renderChina(){
                for(let i=0;i<china.features.length;i++){
                    china.features[i].properties.color="rgb("+parseInt(255*Math.random())+","+parseInt(255*Math.random())+","+parseInt(255*Math.random())+")";
                }
                let projection = d3.geoEquirectangular().fitExtent([[20, 20], [980, 980]], china);
                let geoGenerator = d3.geoPath()
                    .projection(projection);
                let svg = d3.select('#content')
                    .append("svg")
                    .attr("width", 1024)
                    .attr("height", 1024);
                svg.selectAll("path")
                    .data(china.features)
                    .enter()
                    .append("path")
                    .attr("d", geoGenerator)
                    .attr("stroke", "#aaa")
                    .attr("fill", function(d,i){
                        return d.properties.color
                    })
                    .on("mouseover",function(d,i){
                        d3.select(this).attr("fill","yellow")
                    })
                    .on("mouseout",function(d,i){
                        d3.select(this).attr("fill",d.properties.color)
                    })
                svg.append("g")
                    .attr("id","circles")
                    .selectAll("circle")
                    .data(china.features)
                    .enter()
                    .append("circle")
                    .attr("cx", function (d) {
                        console.log("dd", d);
                        return projection([d.properties.cp[0],d.properties.cp[1]])[0]
                    })
                    .attr("cy", function (d) {
                        return projection([d.properties.cp[0],d.properties.cp[1]])[1]
                    })
                    .attr("r", 3)
                    .attr('fill', 'red');

                svg.selectAll("text")
                    .data(china.features)
                    .enter()
                    .append("text")
                    .text(function(d){
                        return d.properties.name
                    })
                    .attr("x", function (d) {
                        return projection([d.properties.cp[0],d.properties.cp[1]])[0]
                    })
                    .attr("y", function (d) {
                        return projection([d.properties.cp[0],d.properties.cp[1]])[1]
                    })
                    .attr('fill','#000')
                    .attr('font-size','12px');
            }
        }
    }
</script>