<template>
  <h1>Give feedback on my website or contact me.</h1>

  <form @submit="onsubmit" class="contactForm">
    <input required type="email" placeholder="E-Mail">
    <textarea type="text" rows="4" placeholder="Contact me!"></textarea>
    <button class="contactButton">SEND</button>
  </form>
</template>

<script>
export default {
  name: 'ContactComponent',

  methods: {
    onSubmit () {
      return ''
    }
  }
}
</script>

<style>
  @import "../assets/styles/ContactMe.css";
</style>
