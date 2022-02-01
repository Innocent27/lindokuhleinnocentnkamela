<template>
<!----------Start of timeline1---------------------------------------->
<div class="timeline">
    <div class="line"></div>
    <div class="timeline-section" >
            <h4>2020</h4>
            <h4>Bsc Applied Mathematics from Stellenbosch University-Uncomplete</h4>
            <h4>Courses:</h4>
            <ul>
                <li>Applied Mathematics</li>
                <li>Computer Sciences</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>Operations Research</li>
                <li>Abstract Mathematics</li>
                <li>Statistics</li>
            </ul>
    </div>
<!--------------Start-of-timeline2----------------------------------------------- -->
    <div class="timeline-section">
                <h4>2017-2018</h4>
                <h4>MilliCare - Machinery technician</h4>
                <h4>(Internship whilst studying)</h4>
                <h4>Duties:</h4>
            <ul>
                <li>Vacuum pump replacement</li>
                <li>Maintenance of Vacuum motors</li>
                <li>Maintenance reporting</li>
            </ul>
                <h4>2017-2018</h4>
                <h4>Globeleq - Control systems Operator</h4>
                <h4>Duties:</h4>
            <ul>
                <li>1.Remote monitoring of renewable energy plants.</li>
                <li>2.Scheduling of preventative and scheduled maintenance.</li>
                <li>3.Remote operation of medium, low voltage using Siemens SPPA T3000 SCADA.</li>
                <li>4.Monitoring the company IT/Network infrastructure and do analysis 
                    for any anomalies.</li>
                    
            </ul>
    </div>
<!--------------Start-of-timeline3------------------------------------------------------------ -->
    <div class="timeline-section">
                <h4>2016-2018</h4>
                <h4>Cape Peninsula University of Technology</h4>
                <h4>Courses</h4><br>
            <ul>
                <li>Process Control</li>
                <li>Industrial Networking</li>              
                <li>Engineering Professional Studies</li>
                <li>Mechatronics Engineering Design</li>
                <li>Computer Integrated Manufacturing</li>
            </ul>
    </div>
<!--------------Start-of-timeline1------------------------------------------------------------ -->
    <div class="timeline-section">      
                <h4>2021-Present</h4>
                <h4>Life Choices - Javascript Fullstack developer student</h4>
                <h4>Courses:</h4><br>
            <ul>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>VueJS 3</li>
                <li>MySQL</li>
                <li>Javascript</li>
                <li>Bootstrap 3</li>
            </ul>
    </div>
</div>
</template>
<style>
li,h4{
    color: white;
    list-style: none;
}
.timeline {
	display: grid;
	grid-template-areas:
		"first line ....."
		".... line second"
		"third line ....."
		".... line fourth";
	grid-template-columns: 49% 2% 49%;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	width: 100%; 
    height: 48vw;
}
.line {
	height: 100%;
	background-color: #353539;
	grid-area: line;
	width: 100%; 
}
.timeline-section {
	background-color: #292933;
	padding: 10%;
	margin: 2%;
	box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
	text-decoration: none;
}
.timeline-section:nth-of-type(1) {
	grid-area: first;
}
.timeline-section:nth-of-type(2) {
	grid-area: second;
}
.timeline-section:nth-of-type(3) {
	grid-area: third;
}
.timeline-section:nth-of-type(4) {
	grid-area: fourth;
}
.timeline-section:nth-of-type(even) {
	text-align: right;
}
@media screen and (max-width: 720px) {
	.timeline {
		grid-template-areas:
			"line first"
			"line second"
			"line third"
			"line fourth";
		grid-template-columns: 2% 98%;
	}
	.timeline-section:nth-of-type(even) {
		text-align: left;
	}
}
</style>