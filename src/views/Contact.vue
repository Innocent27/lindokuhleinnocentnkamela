<template>
    <div class="contact-section">
        <form  id="contact-form" @submit.prevent="handleSubmit">
            <input class="form-input" type="text" placeholder="Name" v-model="text" required/>
            <input class="form-input" type="email" name="_replyto" placeholder="Email" v-model="email" required/>
            <textarea class="form-input" name="message" placeholder="Message" v-model="textarea" required></textarea>
            <button class="form-submit" type="submit">Send</button>
        </form>
        <p>{{ text}}</p>
        <p>{{ email}}</p>
        <p>{{ textarea}}</p>
    </div>
</template>
<script>
export default {
        data(){
            return{
                text: "",
                email: "",
                textarea: ""
        }
        },
        methods: {
            handleSubmit(){
             console.log(this.text, this.email, this.textarea ),

            fetch('http://localhost:4711/contact', {
                method: 'POST',
                body: JSON.stringify({
                    text: this.text,
                    email: this.email,
                    textarea: this.textarea
                }),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => alert(json.msg))
            .catch((e)=> alert(e));
        },
        }
}
</script>
<style scoped>
/* .contact-section{
    height: 48vw; 
    border: 10px solid white; 
}
    #contact-form {
    border: 10px solid white; 
    padding-top: 100px;
    padding-bottom: 70px;
    height: 48vw; 
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
	box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
}
.form-input{
    color: white;
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
} */
</style>