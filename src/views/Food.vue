<template>
  <div class="food container-fluid">
    <h1>This is da log page</h1>
    <div class="row">
      <div class="col">
        <form>
          <input
            v-model="consumed.food"
            type="text"
            placeholder="What did you eat today?"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <foodComponent />
      </div>
    </div>
  </div>
</template>
<script>
import foodComponent from "../components/Food";
export default {
  name: "food-view",
  mounted() {},
  data() {
    return {
      consumed: {
        food: ""
      }
    };
  },
  methods: {
    getFood() {
      this.$store.dispatch("getFood", this.consumed);
    }
  },
  components: {
    foodComponent
  }
};
</script>
<style></style>
