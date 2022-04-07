<template>
  <div class="about">
    <h1>Who am I?</h1>
    <body>
    <img src="../assets/img/cvimage.jpg" alt="CV Image"/>
      <p>
        Hi! My name is  Jani Turpeinen, and I am 28 years old. I live in Vantaa. I am currently studying at Metropolia University of Applied Sciences.
        I am currently on my second year of studies. I am studying to become an ICT Engineer. My major at the time of writing this is Software Development,
        but I am applying to change it to either Video Game Development or Smart IoT systems, since I have more interest in those than Software Development.
      </p>
      <p>
        I am currently looking for a job in my field. Preferably one where I can do my on-the-job learning. You can see my work and school experience on the
        <router-link to="/experience" style="color: azure">experience</router-link> page.
      </p>
      <p>
        My hobbies are playing video games, airsoft and playing drums. I've been playing video games since I was about 6 years old.
        My favorites include: Escape From Tarkov, Souls-series (especially Bloodborne), Resident Evil 4 and Kingdom Hearts series.
        I started airsofting in spring of 2021. I used to play guitar which I started at about 13 years old. I switched to bass when I was about 18, and now I switched to drums
        in fall of 2021.
      </p>

    </body>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style>
  @import '../assets/styles/AboutMe.css';
</style>
