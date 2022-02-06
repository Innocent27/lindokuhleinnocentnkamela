<template>
<div class="card mb-3" id="about">
  <div class="row g-0" id="subabout">
    <div class="col-md-4">
      <img src="../assets/images/about.jpeg" id="img" class="img-fluid rounded-start" alt="about">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">About me</h5>
        <p class="card-text">My name is Lindokuhle Nkamela and I'm an aspiring fullstack developer, 
          with practical experience. I am a qualified Mechatronics technician; 
          devoted to automation of internet of things Functional Programming and 
          Information Architecture. Also a huge fan of Artificial Intelligence 
          and renewable energy. 
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<style>
#about{
  border: 10px solid white; 
  padding-top: 160px;
  padding-bottom: 70px;
  padding-right: 70px;
  padding-left: 70px;
  height: 48vw; 
  background: #292933;
}
#img{
  /* border-radius: 50%; */
  object-fit: cover;
  transition: all 0.3s linear;
  animation: changeBG 5s linear infinite;
}
.card-title, .card-text{
  color: white;
}

@keyframes changeBG {
  0%,
  100% {
    background-image: url(../assets/images/about.jpeg);
    border-radius: 81% 19% 70% 30% / 38% 60% 40% 62%;
  }
  50% {
    background-image: url(../assets/images/lilita.jpg);
    border-radius: 43% 57% 65% 35% / 80% 18% 82% 20%;
  }
  60% {
      background-image: url(../assets/images/mist.jpg);
      border-radius: 60% 40% 38% 62% / 57% 74% 26% 43%;
    }
}
</style>


