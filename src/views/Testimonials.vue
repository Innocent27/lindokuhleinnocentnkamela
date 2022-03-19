<template>
<main id="main">
<section id="about" class="about">
<div class="container" data-aos="fade-up">
  <div class="section-title">
      <h2>Testimonials</h2>
  </div>
  <!-- carousels -->
  <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    <div class="carousel-inner" >
      <div class="carousel-item active" v-for="testimonial of testimonials" :key="testimonial.id">
        <img :src="testimonial.img" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{testimonial.title}}</h5>
          <p class="card-text">{{testimonial.desc}}</p>
        </div>
      </div> -->

      <!-- <div class="carousel-item active">
        <img :src="testimonial.img" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{testimonial.title}}</h5>
          <p class="card-text">{{testimonial.desc}}</p>
        </div>
      </div> -->

      <!-- <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div> -->
  <!-- </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->

  <!-- cards -->
    <div class="card-container">
      <div class="row row-cols-1 row-cols-md-4 g-2">
        <div class="card"  v-for="testimonial of testimonials" :key="testimonial.id" > 
          <div class="col">
              <div class="card h-100">
                    <img :src="testimonial.img" class="card-img-top" alt="project.img_alt">
                  <div class="card-body">
                    <h5 class="card-title">{{testimonial.title}}</h5>
                    <p class="card-text">{{testimonial.desc}}</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
<!-- footer -->
<footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Lindokuhle</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- add linkedIn link -->
        Designed by <a href="https://www.linkedin.com/in/lindokuhle-nkamela-b779a8126/">Lindokuhle Nkamela</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
    data() {
        return {
            testimonials:[]
        }
    },


    mounted(){
        fetch('https://nodejsexpressapilindo.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => {this.testimonials = data})
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
    /* .project h2{
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    img{
      height: 300px;
      width:300px ;
    } */
    </style>
<style scoped>
 #text-p,#title-h{
color: black;
}
#img-card{
object-fit: cover;
height: 20px;
width: 20px;
border-radius: 50%;
}
.card-group{
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
} 

/* footer */
#footer {
  background: #e9e8e6;
  padding: 30px 0;
  color: #222222;
  font-size: 14px;
  text-align: center;
}
#footer .credits {
  padding-top: 5px;
  font-size: 13px;
}
#footer .credits a {
  color: #34b7a7;
}
</style>