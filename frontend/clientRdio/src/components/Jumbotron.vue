<template>
<div class="container-fluid">

  <div class="content">
<h1>Web Radio Paris 18</h1>
</div>
  <!-- Content here -->

  <div class="jumbotron">
    <div class="jumbotron-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';

const title = ref( "about me" )
const description = ref("bojour le monde")


</script>

<style scoped>
.container-fluid  {
  background-image: url('https://picsum.photos/id/39/3456/700');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
  width: 100%;
  padding: 0;
}

.jumbotron-content {
background:rgba(77, 136, 209, 0.43);
height: 30em;
}

.content{
color: white;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: bold;
text-align: right;
position: absolute;

}



</style>
