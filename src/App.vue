<template>
<div id="nav">
    <router-link :to="{ name: 'Home'}">Home</router-link> 
    <router-link :to="{ name: 'About'}">About</router-link> 
    <router-link :to="{ name: 'Resume'}" >Resume</router-link> 
    <router-link :to="{ name: 'Skills'}" >Skills</router-link> 
    <router-link :to="{ name: 'Projects'}" >Projects</router-link> 
    <router-link :to="{ name: 'Testimonials'}" >Testimonials</router-link> 
    <router-link :to="{ name: 'Contact'}" >Contact</router-link>
</div> 


  <router-view/>
  <!-- footer -->
<!-- <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> -->
<!-- <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script> -->
<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

<!--footer starts from here-->
<footer class="footer">
<div class="container bottom_border">
<div class="row">
<div class=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Follow me</h5>
<!--headin5_amrc-->
<p><i class="fa fa-location-arrow"></i> 314 Imam heron road Lansdown, Cape Town </p>
<p><i class="fa fa-phone"></i>  +27 78 669 6539 </p>
<p><i class="fa fa fa-envelope"></i> lindokuhlenkamela@gmail.com  </p>


</div>
</div>
</div>


<div class="container">
<ul class="foote_bottom_ul_amrc">
<li><a href="/">Home</a></li>
<li><a href="/About">About</a></li>
<li><a href="/Resume">Resume</a></li>
<li><a href="/Skills">Skills</a></li>
<li><a href="/Projects">Projects</a></li>
<li><a href="/Testimonials">Testimonials</a></li>
<li><a href="/Contact">Contacts</a></li>
</ul>
<!--foote_bottom_ul_amrc ends here-->
<p class="text-center">Copyright @2021 | Designed by Lindokuhle</p>

<ul class="social_footer_ul">
<li><a href="http://webenlance.com"><i class="fab fa-linkedin"></i></a></li>
<li><a href="mailto:lindokuhlenkamela@gmail.com"><i class="far fa-envelope"></i></a></li>
<li><a href="https://github.com/Innocent27"><i class="fab fa-github"></i></a></li>
<li><a href="https://codepen.io/innocent27/pen/XWgyGbB"><i class="fab fa-codepen"></i></a></li>
</ul>
<!--social_footer_ul ends here-->
</div>

</footer>
</template>
<script>
export default {
  
}
</script>

<style>  
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.col_white_amrc { color:#FFF;}
footer { width:100%; background-color:#263238; min-height:250px; padding:10px 0px 25px 0px ;}
.pt2 { padding-top:40px ; margin-bottom:20px ;}
footer p { font-size:13px; color:#CCC; padding-bottom:0px; margin-bottom:8px;}
.mb10 { padding-bottom:15px ;}
.footer_ul_amrc { margin:0px ; list-style-type:none ; font-size:14px; padding:0px 0px 10px 0px ; }
.footer_ul_amrc li {padding:0px 0px 5px 0px;}
.footer_ul_amrc li a{ color:#CCC;}
.footer_ul_amrc li a:hover{ color:#fff; text-decoration:none;}
.fleft { float:left;}
.padding-right { padding-right:10px; }

.footer_ul2_amrc {margin:0px; list-style-type:none; padding:0px;}
.footer_ul2_amrc li p { display:table; }
.footer_ul2_amrc li a:hover { text-decoration:none;}
.footer_ul2_amrc li i { margin-top:5px;}

.bottom_border { border-bottom:1px solid #323f45; padding-bottom:20px;}
.foote_bottom_ul_amrc {
	list-style-type:none;
	padding:0px;
	display:table;
	margin-top: 10px;
	margin-right: auto;
	margin-bottom: 10px;
	margin-left: auto;
}
.foote_bottom_ul_amrc li { display:inline;}
.foote_bottom_ul_amrc li a { color:#999; margin:0 12px;}

.social_footer_ul { display:table; margin:15px auto 0 auto; list-style-type:none;  }
.social_footer_ul li { padding-left:20px; padding-top:10px; float:left; }
.social_footer_ul li a { color:#CCC; border:1px solid #CCC; padding:8px;border-radius:50%;}
.social_footer_ul li i {  width:20px; height:20px; text-align:center;}

/* Credit to https://bootsnipp.com/snippets/bxDBA */


</style> 
