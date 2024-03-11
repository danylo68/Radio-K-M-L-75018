<template>
  <div></div>
  
<video  autoplay muted loop id="myVideo">
  <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

</template>

<script setup>

</script>


<style scoped>

#myVideo{
position: relative;
max-width: 100% ;
right: 0;

}
.content{
position: absolute;
z-index: 99;
height: 13rem;
width: 50%;
text-align: start;

}

h1{
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bolder;
}

</style>