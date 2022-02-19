<template>
<h1>Testimonials</h1>
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
/* #text-p,#title-h{
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
} */
</style>