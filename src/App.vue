<template>

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" >Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Resume" >Resume</router-link>  
        </li>
         <li class="nav-item">
          <router-link to="/Skills" >Skills</router-link>
        </li>
        <li class="nav-item">
              <router-link to="/Projects" >Projects</router-link> 
        </li>
        <li class="nav-item">
              <router-link to="/Testimonials" >Testimonials</router-link>  
        </li>
        <li class="nav-item">
              <router-link to="/Contact" >Contact</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>    
  <router-view/>
<!--footer starts from here-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

<footer class="footer">
        <div class="containers bottom_border">
        <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Follow me</h5>
              <p><i class="fa fa-location-arrow"></i> 314 Imam heron road Lansdown, Cape Town </p>
              <p><i class="fa fa-phone"></i>  +27 78 669 6539 </p>
              <p><i class="fa fa fa-envelope"></i> lindokuhlenkamela@gmail.com  </p>
            </div>
        </div>
        </div>
        <div class="containers">
            <ul class="foote_bottom_ul_amrc">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Resume">Resume</a></li>
              <li><a href="/Skills">Skills</a></li>
              <li><a href="/Projects">Projects</a></li>
              <li><a href="/Testimonials">Testimonials</a></li>
              <li><a href="/Contact">Contacts</a></li>
            </ul>
<!--foote_bottom_ul_ends here-->
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
/* menu */
.links {
	background-color: #123;
	background-image: linear-gradient(to bottom, #0003, transparent);
	border-bottom: 1px solid #0003;
	box-shadow: 0 0 32px #0003;
	font-size: 2em;
	font-weight: 300;
}
/* .links > a {
	color: #9ab;
	padding: .75em;
	text-align: center;
	text-decoration: nosne;
	transition: all .5s;
} */
/* tobe deleted */
 a {
	color: white;
	padding: .75em;
	text-align: center;
	text-decoration: none;
	transition: all .5s;
}/*
.links > a:hover {
	background: #ffffff06;
	color: #adf;
}
.links > .line {
	background: #68a;
	height: 1px;
	pointer-events: none;
} */

/* The Magic
#header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.links {
	display: grid;
	grid-template-columns: repeat(var(--items), 1fr);
	position: relative;
}
.links > .line {
	opacity: 0;
	transition: all .5s;
	position: absolute;
	bottom: 0;
	left: var(--left, calc(100% / var(--items) * (var(--index) - 1)));
	width: var(--width, calc(100% / var(--items)));
	--index: 0;
}
.links > a:hover ~ .line {
	opacity: 1;
}

.links > a:nth-of-type(1):hover ~ .line { --index: 1; }
.links > a:nth-of-type(2):hover ~ .line { --index: 2; }
.links > a:nth-of-type(3):hover ~ .line { --index: 3; }
.links > a:nth-of-type(4):hover ~ .line { --index: 4; }
.links > a:nth-of-type(5):hover ~ .line { --index: 5; }
.links > a:nth-of-type(6):hover ~ .line { --index: 6; }
.links > a:nth-of-type(7):hover ~ .line { --index: 7; }
.links > a:nth-of-type(8):hover ~ .line { --index: 8; }
.links > a:nth-of-type(9):hover ~ .line { --index: 9; }
.links > a:nth-of-type(10):hover ~ .line { --index: 10; }
.links > a:last-of-type:hover ~ .line { --index: var(--items); } */
/* end menu */
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
