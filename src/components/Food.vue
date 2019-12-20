<template>
  <div class="foodComponent">Everything Goes Here</div>
</template>
<script>
export default {
  name: "foodComponent",
  props: ["foodData"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    activeFood() {
      return this.$store.state.activeFood;
    }
  }
};
</script>
<style></style>
