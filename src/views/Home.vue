<template>
  <div class="box-border">
    <div class="bg-classic-blue h-32 flex sticky top-0">
      <div class="m-auto">
        <h2 class="text-7xl text-indigo-500 font-bold h-auto">Ledger</h2>
      </div>
    </div>
    <div class="flex justify-between">
      <record-table class=""></record-table>
      <create-form class="sticky top-32 w-2/6" />
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
