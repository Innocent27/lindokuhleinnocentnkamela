<template>
<main id="main">
<section id="about" class="about">
<div class="container" data-aos="fade-up">
  <div class="section-title">
      <h2>Testimonials</h2>
  </div>
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
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
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
        .then(data => {this.projects = data})
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
height: 200px;
width: 200px;
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