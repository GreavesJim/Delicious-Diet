<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        elicious
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
        iet
      </div>
      <form @submit.prevent="createLog">
        <input v-model="newLog.date" type="text" placeholder="date" />
        <input v-model="newLog.food" type="text" placeholder="food" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <h1>THIS IS WHAT IM LOOKING FOR</h1>
      <ol>
        <li v-for="log in logs" :key="log._id">
          <router-link :to="{ name: 'food', params: { id: log._id } }">
            {{ log.date }}
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getLogs");
  },
  data() {
    return {
      newLog: {
        date: "",
        food: ""
      }
    };
  },
  methods: {
    createLog() {
      this.$store.dispatch("createLog", this.newLog);
      this.newLog = {
        date: "",
        date: ""
      };
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  },
  components: {}
};
</script>
<style>
.logo {
  transform: rotate(270deg);
  height: 1.5rem;
}
</style>
