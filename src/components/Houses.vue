<template>
  <div class="houses row">
    <!-- NOTE Props are data passed from parent to child component -->
    <div class="col-12">
      <label for="filter-price">Max Price</label>
      <input type="number" id="filter-price" v-model="maxPrice" />
    </div>
    <house
      v-for="(houseObj, index) in houses"
      :key="houseObj._id"
      :houseData="houseObj"
      :houseIndex="index"
    />
  </div>
</template>

<script>
import House from "./House";
export default {
  name: "Houses",
  mounted() {
    //NOTE mounted is fired when the component is 'mounted' to the page
    //NOTE '$' is a reference to the Root instance (main.js)
    this.$store.dispatch("getHouses");
  },
  data() {
    return {
      page: 0,
      maxPrice: 0
    };
  },
  //NOTE Computed's are watching the store for changes (observers) and are reactive to change
  //NOTE Computeds can be treated like getters (variable properties) and should always be used when getting data from the state
  computed: {
    //NOTE Computeds must always return a value
    houses() {
      let data = this.$store.state.houses;
      if (this.maxPrice > 0) {
        data = data.filter(c => c.price < parseInt(this.maxPrice));
      }
      //   return this.$store.state.houses.slice(this.page, this.page + 3);
      return data;
    }
  },
  components: {
    House
  }
};
</script>

<style></style>
