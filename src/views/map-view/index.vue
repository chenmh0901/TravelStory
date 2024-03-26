<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as d3 from 'd3';

const svgMap = ref();

const drawChinaMap = () => {
  const projection = d3.geoMercator().center([107, 31]).scale(600);
  const path = d3.geoPath(projection);
  const svg = d3.select(svgMap.value);
  const g = svg.append('g');
  d3.json('https://geo.datav.aliyun.com/areas_v2/bound/100000_full.json').then(
    (data) => {
      svg
        .selectAll('g')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', '#ccc')
        .attr('stroke', '#333')
        .attr('stroke-width', 1)
        .attr('fill', (d, i) => {
          return `rgba(38, 50, 56, ${(1 / data.features.length) * i})`;
        });
    }
  );
  svg
    .selectAll('g')
    .append('text')
    .attr('font-size', 12)
    .attr('font-anchor', 'middle')
    .attr('x', (d) => {
      const pos = projection(d.properties.centered || [0.0]);
      return pos[0];
    })
    .attr('y', (d) => {
      const pos = projection(d.properties.centroid || [0, 0]);
      return pos[1];
    })
    .attr('dy', (d) => {
      if (d.properties.name === '澳门') {
        return 15;
      }
    })
    .text((d) => d.properties.name);
};
onMounted(drawChinaMap);
</script>
<template>
  <svg ref="svgMap" class="w-[1000px] h-[1000px]" />
</template>

<style scoped></style>
