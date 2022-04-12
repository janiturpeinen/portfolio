<template>
  <h1>Mouse Game!</h1>
  <h2>Guide the mouse through the maze without touching the walls.</h2>
  <div id="theMaze">

    <div id="box1" class="wall" @mouseover="fail"></div>
    <div id="middle">
      <div id="box2" class="wall" @mouseover="fail"></div>
      <div id="box3" class="wall" @mouseover="fail"></div>
      <div id="box4" class="wall" @mouseover="fail"></div>
      <div id="start" @mouseover="start">S</div>
      <div id="end" @mouseover="victory">E</div>
    </div>
    <div id="box5" class="wall"></div>
  </div>

  <p v-if="victoryText">Congratulations! You won!</p>
  <p v-if="failureText">Try again! The mouse touched a wall.</p>
</template>

<script>
export default {
  name: 'MouseGameComponent',
  data () {
    return {
      failureText: false,
      victoryText: false
    }
  },
  methods: {
    fail () {
      console.log('Failure! Mouse touched a wall!')
      this.failureText = true
    },
    victory () {
      console.log('Victory!')
      this.victoryText = true
    },
    start () {
      this.victoryText = false
      this.failureText = false
    }
  }
}
</script>

<style>
  @import '../assets/styles/MouseGame.css';
</style>
