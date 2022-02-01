<template>
  <h1>Projects</h1>
  <div v-if="projects.length">
       <div v-for="project in projects" :key="project.id" class="project">
        <router-link :to="{ name: 'ProjectsDetails', params: {id: project.id}}">
            <h2>{{ project.title}}</h2>
        </router-link>
       </div>
  </div>
  <div v-else>
      <p> Loading projects</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            projects:[]
        }
    },
    mounted(){
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>
    .project h2{
        background: white;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .project h2:hover{
        background: grey;
    }
    .project a{
        text-decoration: none;
    }
</style>