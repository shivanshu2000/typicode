<template>
  <div class="list-container">
    <a
      v-for="user in $store.state.users"
      :key="user.id"
      href='#'
      :class="{active: $store.state.selectedUser.id === user.id}"
      @click.prevent="$store.commit('selectUser',user)"
    >{{user.name}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list-container a {
  text-decoration: none;
  color: black;
  width: 100%;
  border-radius: 3px;
  background: #ccc;
  padding: 15px 7px;
  margin-bottom: 5px;
  border: 1px solid #00000085;
}

.list-container a.active {
  background: black;
  color: white;
  border: 1px solid #ccc;
}
</style>