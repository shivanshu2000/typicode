<template>
  <div class="container">
    <div class="items">
      <List />
    </div>
    <div class="details">
      <Details />
    </div>
  </div>
</template>

<script>
import List from "@/components/List.vue";
import Details from "@/components/Details.vue";
export default {
  name: "Home",
  components: {
    List,
    Details,
  },
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem 3rem;
}
</style>
