<template>
  <div class="box-border">
    <div class="bg-classic-blue h-32 flex sticky top-0 z-10">
      <div class="m-auto">
        <h2 class="text-7xl text-indigo-500 font-bold h-auto font-serif">
          General Ledger
        </h2>
      </div>
    </div>
    <div class="flex justify-between">
      <record-table
        class=""
        :DataRecordsFromOther="dataRecords"
        :addReceive="updateReceive"
        :addPaid="updatePaid"
        v-if="dataRecords"
      ></record-table>
      <div class="flex-col">
        <create-form
          @clickUpdate="updateReceive"
          @clickUpdatePaid="updatePaid"
          class="sticky top-32 w-full"
        >
        </create-form>
        <div
          class="
            sticky
            top-2/4
            bg-gray-300
            h-26
            p-9
            m-10
            border-4 border-gray-500
            font-bold
          "
        >
          <div>
            <label for="totalReceive" class="createLabel text-green-600"
              >Total Receive : {{ totalReceive }}
            </label>
          </div>
          <div>
            <label for="totalPaid" class="createLabel text-red-600"
              >Total Paid : {{ totalPaid }}</label
            >
          </div>
          <div>
            <label for="balance" class="createLabel"
              >Balance : {{ balance }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateForm from "@/components/CreateForm";
import RecordTable from "@/components/RecordTable";
import DataStore from "@/store/index";

export default {
  components: {
    CreateForm,
    RecordTable,
  },
  data() {
    return {
      dataRecords: null,
      balance: 0,
      totalReceive: 0,
      totalPaid: 0,
      arrDate: [],
      arrReceive: [],
      arrPaid: [],
      dataLoaded: false,
    };
  },
  created() {
    this.fetchRecord();
  },
  beforeUpdate() {},
  methods: {
    async fetchRecord() {
      await DataStore.dispatch("fetchRecord");

      this.dataRecords = DataStore.getters.records.sort().reverse();
      console.log(this.dataRecords);
      // this.dataLoaded = true;
      this.calBalance();
    },
    updateReceive(item) {
      this.totalReceive += parseInt(item.receive);
      this.balance = this.totalReceive - this.totalPaid;
    },
    updatePaid(item) {
      this.totalPaid += parseInt(item.paid);
      this.balance = this.totalReceive - this.totalPaid;
    },
    updateG() {
      this.dataRecords.forEach((element) => {
        this.arrDate.push(element.date);
        if (element.receive) {
          this.arrReceive.push(element.receive);
          this.arrPaid.push(0);
        } else if (element.paid) {
          this.arrPaid.push(element.paid);
          this.arrReceive.push(0);
        }
      });
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
};
</script>
