<template>
  <div class="w-3/6 flex-col mx-32">
    <div class="">
      <table
        class="float-left w-full m-10 content-center border-2 border-gray-700"
      >
        <thead class="bg-gray-600 border-b-2 border-black-700 sticky top-32">
          <tr class="text-3xl h-20 text-yellow-50">
            <th>Date</th>
            <th>Description</th>
            <th>Received</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            v-for="(data, index) in DataRecordsFromOther"
            :key="index"
            class="
              text-lg
              h-14
              even:bg-gray-200
              odd:bg-gray-50
              hover:bg-gray-300
            "
          >
            <td class="dataTable">{{ data.date }}</td>
            <td class="dataTable">{{ data.desc }}</td>
            <td
              class="dataTable font-bold"
              :class="data.receive ? 'text-green-500' : ''"
            >
              {{ data.receive }}
            </td>
            <td
              class="dataTable font-bold"
              :class="data.paid ? 'text-red-500' : ''"
            >
              {{ data.paid }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DataStore from "@/store/index";
export default {
  props: ["DataRecordsFromOther", "addReceive", "addPaid"],
  data() {
    return {
      dataRecords: null,
      balance: 0,
      totalReceive: 0,
      totalPaid: 0,
      receiveProp: this.addReceive,
    };
  },
  computed: {
    // clear duplicate date next time!
  },
  watch: {
    receiveProp: function (newreceive, oldreceive) {
      this.totalReceive += this.addReceive;
      this.totalPaid += this.addPaid;
      this.balance = this.totalReceive - this.totalPaid;
      console.log(this.balance);
      console.log(this.receive);
      console.log(this.paid);
    },
  },
  created() {
    this.dataRecords = this.DataRecordsFromOther;
    this.calBalance();
  },
  mounted() {},
  methods: {
    async fetchRecord() {
      await DataStore.dispatch("fetchRecord");

      this.dataRecords = DataStore.getters.records;
      console.log(this.dataRecords);
    },
    calBalance() {
      console.log(this.dataRecords);
      this.dataRecords.forEach((element) => {
        if (element.receive) {
          this.totalReceive += parseInt(element.receive);
        } else if (element.paid) {
          this.totalPaid += parseInt(element.paid);
        }
      });
      this.balance = this.totalReceive - this.totalPaid;
    },
  },
  beforeUpdate() {
    // this.calBalance();
  },
};
</script>

<style></style>
