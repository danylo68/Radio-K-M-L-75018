<template>
  <div class="content">
     <Jumbotron />
    <Navbar />
   <ContainMedia />
    <ControlPad /> 
  
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navbar from './components/NavBar.vue';
import Jumbotron from './components/Jumbotron.vue';
import ContainMedia from './components/ContainMedia.vue';
import ControlPad from './components/ControlPad.vue';

export default defineComponent({
  components: {
    Navbar,
    Jumbotron,
    ContainMedia,
    ControlPad
  },
});
</script>

<style scoped>
.content{
  width: 100%;
  height:90rem;
background-color: rgb(224, 220, 220);
}
/* Ajoutez ici des styles CSS globaux si nécessaire */
</style>
