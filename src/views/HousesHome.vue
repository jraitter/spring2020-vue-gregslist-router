<template>
  <div class="houses-home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Welcome to Gregslist - Houses</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <houses />
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <create-house />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Houses from "@/components/Houses";
import CreateHouse from "@/components/CreateHouse";

export default {
  name: "HousesHome",
  components: {
    Houses,
    CreateHouse
  }
};
</script>
