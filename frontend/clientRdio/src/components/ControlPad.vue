<template>
  <!-- Content -->
<div class="container d-flex justify-content-center my-4 mb-5">

  <audio class="w-100" id="plyr-audio-player" controls>
  <source src="./assets/audio/Water_Lily.mp3" type="audio/mp3" />
</audio>
  
</div>
<!-- Content -->
</template>

<script setup>
import { ref } from "vue"


</script>




<style scoped>
html,
body,
.view {
  height: 100%;
}
.container{
height: 20rem;
background-color: rgb(75, 71, 71);
}

#mobile-box {
  width: 360px;
}

.card {
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

.card .view {
  -webkit-border-top-left-radius: 10px;
  border-top-left-radius: 10px;
  -webkit-border-top-right-radius: 10px;
  border-top-right-radius: 10px;
}

.card h5 a {
  color: #0d47a1;
}

.card h5 a:hover {
  color: #072f6b;
}

#pButton {
  float: left;
}

#timeline {
  width: 90%;
  height: 2px;
  margin-top: 20px;
  margin-left: 10px;
  float: left;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
}

#pButton {
  margin-top: 12px;
  cursor: pointer;
}

#playhead {
  width: 8px;
  height: 8px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  margin-top: -3px;
  background: black;
  cursor: pointer;
}

</style>















<!-- <audio id="myAudio" autoplay loop controls>
    <source src="chemin_vers_votre_audio.mp3" type="audio/mpeg"> 
    <source src="chemin_vers_votre_audio.mp3" type="audio/mpeg">
    <source src="chemin_vers_votre_audio.ogg" type="audio/ogg">
    <source src="chemin_vers_votre_audio.wav" type="audio/wav">
    <source src="chemin_vers_votre_audio.aac" type="audio/aac">
    <source src="chemin_vers_votre_audio.flac" type="audio/flac">
      Votre navigateur ne supporte pas la lecture audio.
    </audio> -->