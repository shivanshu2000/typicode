<template>

  <div v-if="$store.state.albums.length ===0">Select an user to see the albums</div>
  <div v-if="$store.state.albums.length >0">
    <h1> Albums by: {{$store.state.selectedUser.name}}</h1>
    <div
      class="card"
      v-for="album in $store.state.albums"
      :key="album.id"
    >
      <div>
        <span>Title: </span> {{album.title}}
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  width: 100%;
  margin-bottom: 5px;
  padding: 11px 7px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.green {
  border: 1px solid green;
}

.red {
  border: 1px solid red;
}
</style>