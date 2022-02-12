<template >
<div id="landing-section">
    <h1>I'm Lindokuhle Nkamela</h1>
    <h2>aspiring Javascript fullstack developer</h2>
    <a href="/About" id="more">Read more</a>
</div>
        
    <!-- <video src="../assets/images/mist.mp4"></video> -->
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script> 

<style scoped>
#more{
 text-decoration: none;
 display: inline-block;
	padding: 10px 30px;
	background: #3a4052;
	color: #fff;
	border-radius: 5px;
	border: solid #fff 1px;
	margin-top: 25px;
	opacity: 0.7;
	border-radius: 25px;
}
#landing-section{
  border: 10px solid white; 
  padding-top: 160px;
  padding-bottom: 70px;
  padding-right: 70px;
  padding-left: 70px;
  height: 48vw; 
  background: #292933;
  color: white;
}
/* h1,h2{
  color: white;
} */
</style>

