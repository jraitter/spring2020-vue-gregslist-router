<template>
  <div class="house col-12">
    <div class="card">
      <router-link :to="{ name: 'HouseDetails', params: { houseId: this.houseData._id } }">
        <img :src="houseData.imgUrl" class="card-img-top" />
      </router-link>
      <div class="card-body">
        <h5
          class="card-title"
        >Bedrooms: {{ houseData.bedrooms }} - Bathrooms: {{ houseData.bathrooms }}</h5>
      </div>
      <button @click="deleteHouse">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "House",
  //NOTE child components 'catch' information in props
  props: ["houseData", "houseIndex"],
  methods: {
    deleteHouse() {
      this.$store.dispatch("deleteHouse", this.houseData._id);
    },
    setActive() {
      this.$store.dispatch("setActiveHouse", this.houseData);
    }
  }
};
</script>

<style scoped>
.car {
  cursor: pointer;
}
</style>
