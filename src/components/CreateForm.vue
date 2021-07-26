<template>
  <div class="h-28 flex-wrap align-center p-10">
    <div
      class="
        mx-auto
        border-4 border-gray-500
        bg-gray-300
        p-4
        flex-col
        justify-between
      "
    >
      <div class="mb-4 inputDiv">
        <label for="Date" class="createLabel font-semibold">Date</label>
        <v-date-picker :model-config="modelConfig" v-model="form.date">
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded h-6 w-60"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </v-date-picker>
      </div>
      <div class="inputDiv">
        <label for="Desc" class="createLabel font-semibold">Description</label>
        <input type="text" v-model="form.desc" class="createInput" />
      </div>

      <div class="inputDiv">
        <label for="Amount" class="createLabel font-semibold">Amount</label>
        <input type="text" v-model="form.amount" class="createInput" />
      </div>

      <div>
        <button
          @click="addReceiveRecord"
          class="createBtn bg-green-600 hover:bg-green-800"
        >
          Receive
        </button>
        <button
          @click="addPaidRecord"
          class="createBtn bg-red-600 hover:bg-red-800"
        >
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
        mask: "DD/MM/YYYY", // Uses 'iso' if missing
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
      if (this.form.date && this.form.desc && parseFloat(this.form.amount)) {
        let payload = {
          date: this.form.date,
          desc: this.form.desc,
          receive: this.form.amount,
        };
        console.log(payload);
        Store.dispatch("addRecord", payload);
        this.$emit("clickUpdate", payload);
        this.clearForm();
      }
    },
    addPaidRecord() {
      if (this.form.date && this.form.desc && parseFloat(this.form.amount)) {
        let payload = {
          date: this.form.date,
          desc: this.form.desc,
          paid: this.form.amount,
        };
        console.log(payload);
        Store.dispatch("addRecord", payload);
        this.$emit("clickUpdatePaid", payload);
        this.clearForm();
      }
    },
  },
};
</script>

<style>
</style>