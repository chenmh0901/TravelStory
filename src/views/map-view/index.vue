<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { chinaMap } from './chinamap';
import * as d3 from 'd3';

const svgMap = ref();

const drawChinaMap = () => {
  const svg = d3.select(svgMap.value).attr('width', 1200).attr('height', 900);

  const projection = d3.geoMercator().center([100, 45]).scale(1000);

  const path = d3.geoPath(projection);

  const g = svg.append('g');

  const provinces = svg.append('g').attr('class', 'provinces');

  provinces
    .selectAll('path')
    .data(chinaMap.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', '#000')
    .attr('stroke', '#333')
    .attr('stroke-width', 0.5)
    .attr(
      'fill',
      (d: any, i: number) =>
        `rgba(38, 50, 56, ${(1 / chinaMap.features.length) * i})`
    );

  const labels = svg.append('g').attr('class', 'labels');

  labels
    .selectAll('text')
    .data(chinaMap.features)
    .enter()
    .append('text')
    .attr('font-size', 10)
    .attr('text-anchor', 'middle')
    .attr('x', (d) => {
      const center = d.properties.center || d.properties.centroid || [0, 0];
      return projection(center)[0];
    })
    .attr('y', (d) => {
      const center = d.properties.center || d.properties.centroid || [0, 0];
      return projection(center)[1] - 10;
    })
    .attr('dy', '0.35em')
    .text((d) => d.properties.name);

  const centers = svg.append('g').attr('class', 'centers');

  centers
    .selectAll('circle')
    .data(chinaMap.features)
    .enter()
    .append('circle')
    .attr('cx', (d) => {
      const center = d.properties.center || d.properties.centroid || [0, 0];
      return projection(center)[0];
    })
    .attr('cy', (d) => {
      const center = d.properties.center || d.properties.centroid || [0, 0];
      return projection(center)[1];
    })
    .attr('r', 3)
    .attr('fill', 'red');
};
onMounted(drawChinaMap);
</script>
<template>
  <svg ref="svgMap"></svg>
</template>

<style scoped></style>
