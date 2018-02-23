<template>
    <div id="content">

    </div>
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
            this.createHistogram();
        },
        methods:{
            createHistogram(){
                let svg=d3.select("#content").append("svg").attr("width",500).attr("height",500);
                let histogramGen=d3.histogram();
                console.log(histogramGen([1,2,3.4,4,12,32,33]));

            }
        }
    }
</script>