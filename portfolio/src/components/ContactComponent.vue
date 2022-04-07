<template>
  <h1>Give feedback on my website or contact me.</h1>

  <form @submit="onSubmit" class="contactForm">
    <input required type="email" placeholder="E-Mail" autocomplete="off" v-model="email">
    <textarea type="text" rows="4" placeholder="Contact me!" autocomplete="off" v-model="message"></textarea>
    <button class="contactButton">SEND</button>
    <p v-show="messageSent">Message sent!</p>
    <p v-show="messageError">Something went wrong! Try again later.</p>
  </form>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactComponent',

  data () {
    return {
      email: '',
      message: '',
      messageSent: false,
      messageError: false
    }
  },

  methods: {
    onSubmit (e) {
      try {
        emailjs.sendForm('service_outlook', 'template_2mw2jv8', e.target,
          'qPUNpNDmEv_3vivmi', {
            email: this.email,
            message: this.message
          })
        console.log('Success!')
      } catch (error) {
        console.log({ error })
        this.messageError = true
      }
      this.email = ''
      this.message = ''
      this.messageSent = true
    }
  }
}
</script>

<style>
  @import "../assets/styles/ContactMe.css";
</style>
