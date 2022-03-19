<!--
 * @Author: TonyInBeijing
 * @Date: 2022-03-19 11:26:55
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-19 11:39:29
 * @FilePath: /notebook/vue3-geekbang/geek-admin/src/pages/g2.vue
 * @Description: 
 * 
-->

<template>
    <div>
        <div id="chart1"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, watch } from "vue";
import { Chart } from "@antv/g2";
export default defineComponent({
    setup(props, context) {
        const data = [
            { year: '1951 年', sales: 38 },
            { year: '1952 年', sales: 52 },
            { year: '1956 年', sales: 61 },
            { year: '1957 年', sales: 145 },
            { year: '1958 年', sales: 48 },
            { year: '1959 年', sales: 38 },
            { year: '1960 年', sales: 38 },
            { year: '1962 年', sales: 38 },
        ];
        let chart;
        onMounted(() => {
            chart = new Chart({
                container: "chart1",
                autoFit: true,
                height: 300
            });
            chart.data(data);
            chart.scale('sales', {
                nice: true,
            });
            chart.tooltip({
                showMarkers: false
            });
            chart.interaction('active-region');
            chart.interval().position('year*sales');

            chart.render();
        });
    }
});
</script>
