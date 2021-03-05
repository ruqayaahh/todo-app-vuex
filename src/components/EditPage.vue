<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>You wanted to edit this todo</h2>
    <div>
      <input type="text" />
    </div>
    <div>
      <button>Edit</button>
      <button>Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
