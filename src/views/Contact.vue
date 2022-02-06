<template>
    <div class="contact-section">
        <form action="https://formspree.io/f/mvodyoee" target="_blank"  method="POST" id="contact-form">
            <input class="form-input" type="text" name="name" placeholder="Name" required/>
            <input class="form-input" type="email" name="_replyto" placeholder="Email" required/>
            <textarea class="form-input" name="message" placeholder="Message" required></textarea>
            <button class="form-submit" type="submit">Send</button>
        </form>
    </div>
</template>
<style>
.contact-section{
    height: 48vw; 
    /* background: #292933; */
    border: 10px solid white; 
}
    #contact-form {
    border: 10px solid white; 
    padding-top: 100px;
    padding-bottom: 70px;
    /* padding-right: 70px;
    padding-left: 70px; */
    height: 48vw; 
    /* background: #292933;    */
	display: flex;
	flex-direction: column;
	width: 100%;
    }
    .form-input,
    .form-submit {
	border: none;
	outline: none;
	background-color:  #2c3e50;
	border-radius: 40px;
	padding: 2%;
	margin-bottom: 20px;
	/* color: white; */
	box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
}
.form-submit {
	cursor: pointer;
	color: white;
}
.form-submit:hover {
	box-shadow: 2px 6px 10px rgb(15 15 20 / 50%);
}
@media screen and (max-width: 720px) {
	#contact {
		padding: 0;
	}
	#contact-form {
		padding: 10%;
	}
	.form-input,
	.form-submit {
		padding: 5%;
	}
}
</style>