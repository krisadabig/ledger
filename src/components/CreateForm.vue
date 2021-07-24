<template>
  <div class="h-28 flex-wrap align-center p-10">
    <div class="mx-auto border bg-gray-300 p-4">
      <div class="">
        <label for="Date" class="createLabel">Date</label>
        <v-date-picker :model-config="modelConfig" v-model="form.date">
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded h-6"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
      </div>
      <div>
        <label for="Desc" class="createLabel">Description</label>
        <input type="text" v-model="form.desc" class="createInput" />
      </div>

      <div>
        <label for="Amount" class="createLabel">Amount</label>
        <input type="text" v-model="form.amount" class="createInput" />
      </div>

      <div>
        <button @click="addReceiveRecord" class="createBtn bg-green-600">
          Receive
        </button>
        <button @click="addPaidRecord" class="createBtn bg-red-600">
          Paid
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "@/store/index";
export default {
  data() {
    return {
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
      form: {
        date: "",
        desc: "",
        amount: "",
        receive: "",
        paid: "",
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  methods: {
    clearForm() {
      this.form = {
        date: "",
        desc: "",
        amount: "",
        receive: "",
        paid: "",
      };
    },
    addReceiveRecord() {
      if (this.form.date && this.form.desc && this.form.amount) {
        let payload = {
          date: this.form.date,
          desc: this.form.desc,
          receive: this.form.amount,
        };
        console.log(payload);
        Store.dispatch("addRecord", payload);
        this.clearForm();
      }
    },
    addPaidRecord() {
      let payload = {
        date: this.form.date,
        desc: this.form.desc,
        paid: this.form.amount,
      };
      console.log(payload);
      Store.dispatch("addRecord", payload);
      this.clearForm();
    },
  },
};
</script>

<style>
</style>