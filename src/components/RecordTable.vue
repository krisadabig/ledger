<template>
  <div class="w-3/6 flex-col mr-30">
    <div class="">
      <table
        class="
          float-right
          w-full
          m-10
          mr-16
          content-center
          border-2 border-green-700
        "
      >
        <thead class="border-b-2 border-green-700">
          <tr class="h-16 text-2xl">
            <th>Date</th>
            <th>Description</th>
            <th>Received</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody class="even:bg-red-300">
          <tr
            v-for="(data, index) in dataRecords"
            :key="index"
            class="text-xl h-14"
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
      editIndex: -1,
      form: {
        date: "",
        desc: "",
        amount: "",
        receive: "",
        paid: "",
      },
      balance: 0,
      totalReceive: 0,
      totalPaid: 0,
    };
  },
  created() {
    this.fetchRecord();
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
      this.balance = this.totalReceive + this.totalPaid * -1;
      console.log("calbalanced!!!");
    },
  },
  beforeUpdate() {
    this.calBalance();
    console.log("before updated");
  },
};
</script>

<style>
</style>