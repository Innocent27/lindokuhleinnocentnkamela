<template>
<main id="main">
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p> 
            My name is Lindokuhle Nkamela and I'm an aspiring fullstack developer,   
            I am a qualified Mechatronics engineering technician with specialty in automation.
            i have huge interest in internet of things(IoT), Artificial Intelligence and renewable energy.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="../assets/images/about.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Backend developer</h3>
            <p class="fst-italic">
              <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. -->
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 09 December 1994</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>LinkedIn:</strong> linkedin.com/in/lindokuhle-nkamela-b779a8126</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +27 78 669 6539</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> Cape Town ,RSA</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong> 30</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong> Mechatronics Engineering</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Email:</strong> lindokuhlenkamela@gmail.com</li>
                  <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Mechatronics graduate who is passionate about making a change to society. Dedicated and loyal. Good researcher,
analyst, strategic thinker. Proactive with a focus on solutions
            </p>
          </div>
        </div>
      </div>
      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </section>
  </main><!-- End #main -->
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
<router-view/>
</template>
<style>
.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #555555;
}
.about .content ul {
  list-style: none;
  padding: 0;
}
.about .content ul li {
  padding-bottom: 10px;
}
img{
  height: 300px;
  width: 300px;
  object-fit: cover;
}
.about .content ul i {
  font-size: 20px;
  padding-right: 2px;
  color: #34b7a7;
}
.about .content p:last-child {
  margin-bottom: 0;
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


