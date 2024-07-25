<template>
  <div class="item-details">
    <img :src="item.image" :alt="item.name">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
    <button @click="$emit('delete-item', item)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>

</style>