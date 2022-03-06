<template>
<h1>Projects</h1>
<div class="card-container">
  <div class="row row-cols-1 row-cols-md-4 g-2">
      <div class="card"  v-for="project of projects" :key="project.id" > 
        <div class="col">
          <div class="card h-100">
                <img :src="project.img" class="card-img-top" alt="project.img_alt">
              <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">{{project.desc}}</p>
                <p class="card-text">{{project.stack}}</p>
                <a href="/About" id="more">View Site</a>
                <button class="button type3"></button>
                <button class="button type1">View Github</button>
              </div>
          </div>
        </div>
    </div>
  </div>
</div>
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
            projects:[]
        }
    },


    mounted(){
        fetch('https://nodejsexpressapilindo.herokuapp.com/projects')
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