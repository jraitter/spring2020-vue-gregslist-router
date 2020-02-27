<template>
  <div class="create-house">
    <form @submit.prevent="createHouse">
      <input
        type="number"
        name="bedrooms"
        placeholder="Bedrooms..."
        v-model="newHouse.bedrooms"
        required
      />
      <input
        type="number"
        name="bathrooms"
        placeholder="Bathrooms..."
        v-model="newHouse.bathrooms"
        required
      />
      <input type="number" name="levels" placeholder="Levels..." v-model="newHouse.levels" required />
      <input type="number" name="year" placeholder="year..." v-model="newHouse.year" required />
      <input type="number" name="price" placeholder="price..." v-model="newHouse.price" required />
      <input
        type="text"
        name="description"
        placeholder="description..."
        v-model="newHouse.description"
      />
      <input type="text" name="imgUrl" placeholder="imgUrl..." v-model="newHouse.imgUrl" required />
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateHouse",
  data() {
    return {
      newHouse: {}
    };
  },
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
    }
  }
};
</script>

<style></style>
