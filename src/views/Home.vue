<template>
  <div class="box-border">
    <div class="bg-purple-600 h-32 flex">
      <div class="m-auto">
        <h2 class="text-7xl text-white h-auto">Ledger</h2>
      </div>
    </div>
    <div class="flex justify-between">
      <create-form class="sticky top-0 w-2/6" />
      <record-table class=""></record-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateForm from "@/components/CreateForm";
import RecordTable from "@/components/RecordTable";

export default {
  components: {
    CreateForm,
    RecordTable,
  },
};
</script>
