<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Me</router-link> |
    <router-link to="/experience">Experience</router-link> |
    <router-link to="/contact">Contact Me</router-link> |
    <router-link to="/mouse">Mouse Game</router-link>
  </nav>
  <router-view/>

  <nav>
    <img src="../src/assets/img/github.png" alt="GitHub logo" class="icon">
    <a class="socials" href="https://github.com/janiturpeinen/"> GitHub </a>

    <img src="../src/assets/img/linkedin.png" alt="LinkedIn logo" class="icon">
    <a class="socials" href="https://www.linkedin.com/in/jani-turpeinen-0bb533136/"> LinkedIn </a>
    <div id="siteUpdated">Site last updated: 4/2022</div>
  </nav>
</template>

<style>
@import "assets/styles/App.css";
</style>
