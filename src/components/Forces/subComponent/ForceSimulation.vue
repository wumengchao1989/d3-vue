<template>
    <canvas width="1920" height="1080"></canvas>
</template>
<script>
    import * as d3 from 'd3';
    export default{
        name: "forceSimulation",
        data(){
            return {}
        },
        mounted(){
            var nodes = d3.range(8).map(function (i) {
                return {
                    index: i,
                    name: "hello"
                };
            });

            /*var links = d3.range(nodes.length - 1).map(function (i) {
                return {
                    source: i,
                    target: i + 1
                };
            });*/
            var links=[{source:1,target:2},
                {source:3,target:2},
                {source:4,target:2},
                {source:2,target:5},
                {source:6,target:5},
                {source:7,target:5},]


            var simulation = d3.forceSimulation(nodes)
                .force("charge", d3.forceManyBody())
                .force("link", d3.forceLink(links).distance(50).strength(1))
                .force("x", d3.forceX())
                .force("y", d3.forceY())
                .on("tick", ticked);

            var canvas = document.querySelector("canvas"),
                context = canvas.getContext("2d"),
                width = canvas.width,
                height = canvas.height;

            d3.select(canvas)
                .call(d3.drag()
                    .container(canvas)
                    .subject(dragsubject)
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended))

            function ticked() {
                context.clearRect(0, 0, width, height);
                context.save();
                context.translate(width / 2, height / 2);

                context.beginPath();
                links.forEach(drawLink);
                context.strokeStyle = "red";
                context.stroke();
                context.beginPath();
                nodes.forEach(drawNode);
                context.fill();
                context.strokeStyle = "#fff";
                context.stroke();
                context.restore();
            }

            function dragsubject() {
                return simulation.find(d3.event.x - width / 2, d3.event.y - height / 2);
            }

            function dragstarted() {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d3.event.subject.fx = d3.event.subject.x;
                d3.event.subject.fy = d3.event.subject.y;
            }

            function dragged() {
                d3.event.subject.fx = d3.event.x;
                d3.event.subject.fy = d3.event.y;
            }

            function dragended() {
                if (!d3.event.active) simulation.alphaTarget(0);
                d3.event.subject.fx = null;
                d3.event.subject.fy = null;
            }

            function drawLink(d) {
                context.moveTo(d.source.x, d.source.y);
                context.lineTo(d.target.x, d.target.y);
            }

            function drawNode(d) {
                context.moveTo(d.x + 3, d.y);
                context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
            }

        },
        methods: {}
    }
</script>