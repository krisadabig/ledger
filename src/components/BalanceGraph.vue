
<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["date", "paid", "receive"],
  data() {
    return {
      chartData: {
        labels: this.date,
        datasets: [
          {
            label: "Paid",
            fill: false,
            data: this.paid,
          },
          {
            label: "receive",
            data: this.receive,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMax: 2000,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        labelString: this.msg,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>