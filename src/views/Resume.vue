<template>
<main id="main">
   <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
          <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> -->
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Skills</h4>
              <p>
              <ul>
                <li>Design and sizing of solar photovoltaic systems</li>
                <li>Supervisor Control And Data Aquisition (SCADA)</li>
                <li>MS Suite (Excel, Word, PowerPoint)</li>
                <li>HTML/CSS/Javascript</li>
                <li>Bootstrap/VueJs/NodeJs/MySQL/MongoDB</li>
                <li>Computer literacy</li>
                <li>Islamic religion teachings</li>
              </ul>
              </p>
            </div>
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor of Science in Applied Mathematics</h4>
              <h5>2020 - 2021</h5>
              <p><em>Stellenbosch University-incomplete</em></p>
              <h5>Majors</h5>
              <ul>
                <li>Applied Mathematics</li>
                <li>Mathematics</li>
                <li>Probability and Statistics</li>
                <li>Computer Sciences</li>
                <li>Economics</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>National Diploma: Mechanical(Mechatronics) Engineeering</h4>
              <h5>2014 - 2018</h5>
              <p><em>Cape Peninsula University of Technology</em></p>
               <h5>Majors</h5>
              <ul>
                <li>Process Control</li>
                <li>Industrial Networking</li>
                <li>Engineering Professional Studies</li>
                <li>Mechatronics Engineering Design</li>
                <li>Computer Integrated Manufacturing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Lifechoices academy- Javascript fullstack developer student</h4>
              <h5>2021 - Present</h5>
              <p><em>Majors</em></p>
               <ul>
                  <li>HTML/CSS/Javascript</li>
                  <li>Bootstrap/VueJs</li>
                  <li>NodeJs/MySQL/MongoDB</li>
               </ul>
            </div>
            <div class="resume-item">
                <h4>Globeleq South African Management Services - Control systems operator</h4>
                <h5>2018 - 2019</h5>
                <p><em>Duties</em></p>
              <!-- <p> -->
                <ul>
                  <li>Remote monitoring of renewable energy (2x50MW Solar PV and 140MW wind power plants).</li>
                  <li>Scheduling of preventative and scheduled maintenance</li>
                  <li>Communicating faults, inefficiencies to onsite technicians</li>
                  <li>Data analysis collected from SPPA T3000 server using MS Excel.</li>
                  <li>Building Human Machine Interface (HMI) in WinCC for PV plants automation</li>
                  <li>Monitoring the company IT/network infrastructure and do analysis for any anomalies</li>
                  <li>Completing compliance reports (NERSA, SBO, IPP Office, Daily reports) for powerplants</li>
                  <li>Remote switching of medium, low voltage using Siemens SPPA T3000 SCADA</li>
                </ul>
            </div>
            <div class="resume-item">
              <h4>MilliCare - Machine Technician</h4>
              <h5>2017-2018</h5>
              <p><em>Duties :</em></p>
               <ul>
                  <li>Vacuum pump replacement</li>
                  <li>Maintenance of Vacuum motors</li>
                  <li>Maintenance reports</li>
               </ul>
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
<style scoped>
    .resume .resume-title {
  font-size: 26px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #222222;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #34b7a7;
  position: relative;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #1d685f;
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  background: #effbf9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
  color: #34b7a7;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}
.resume .resume-item:last-child {
  padding-bottom: 0;
}
.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #fff;
  border: 2px solid #34b7a7;
}
</style>