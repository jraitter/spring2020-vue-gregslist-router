<template>
  <div class="house-details">
    <div v-if="details._id">
      <div class="card">
        <img class="card-img-top" :src="details.imgUrl" alt="Card image cap" />
        <div class="card-body">
          <h5
            class="card-title"
          >Bedrooms: {{details.bedrooms}} - Bathrooms: {{details.bathrooms}} - Year: {{details.year}}</h5>
          <p class="card-text">
            {{details.description}}
            <b>${{details.price}}</b>
          </p>
        </div>
      </div>
      <button @click="deleteHouse">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDetails",
  mounted() {
    // NOTE if we have no houses in state
    if (!this.$store.state.houses.length) {
      // NOTE Go get the house by its id
      this.$store.dispatch("getHouseById", this.$route.params.houseId);
    } else {
      // NOTE otherwise, set the house as the active house, based on its ID
      this.$store.dispatch(
        "setActiveHouse",
        this.$store.state.houses.find(h => h._id == this.$route.params.houseId)
      );
    }
  },
  computed: {
    details() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.details._id);
    }
  }
};
</script>

<style></style>
