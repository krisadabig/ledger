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
            v-for="(data, index) in dataRecords"
            :key="index"
            class="text-lg h-14 even:bg-gray-200 odd:bg-gray-50"
          >
            <td class="dataTable">{{ data.date }}</td>
            <td class="dataTable">{{ data.desc }}</td>
            <td class="dataTable">{{ data.receive }}</td>
            <td class="dataTable">{{ data.paid }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <label for="totalReceive" class="createLabel">Total Receive : </label>
      <label for="amount">{{ totalReceive }}</label>
    </div>
    <div>
      <label for="totalPaid" class="createLabel">Total Paid :</label>
      <label for="amount">{{ totalPaid }}</label>
    </div>
    <div>
      <label for="balance" class="createLabel">Balance : </label>
      <label for="balance">{{ balance }}</label>
    </div>
  </div>
</template>

<script>
import DataStore from "@/store/index";
export default {
  data() {
    return {
      dataRecords: [],
      balance: 0,
      totalReceive: 0,
      totalPaid: 0,
    };
  },
  created() {
    this.fetchRecord();
    this.calBalance();
  },
  methods: {
    async fetchRecord() {
      await DataStore.dispatch("fetchRecord");

      this.dataRecords = DataStore.getters.records;
      console.log(this.dataRecords);
    },
    calBalance() {
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
    this.calBalance();
  },
};
</script>

<style></style>
