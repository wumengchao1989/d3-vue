<template>
    <div id="content"></div>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name:"histograms",
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            createHistogram(){
                let svg=d3.select("#content").append("svg").attr("width",500).attr("height",500);
                let histogramGen=d3.histogram();
                console.log(histogramGen);

            }
        }
    }
</script>