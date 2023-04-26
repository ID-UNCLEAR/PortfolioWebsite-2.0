<template>
    <footer class="p-5 pl-0 bg-slate-400 ml-0 mt-auto">
       <div class="text-center pb-4">
            <div>
                <a class="text-6xl p-1 my-0 mx-2 rounded-full leading-9 inline-block text-center opacity-70 hover:opacity-100" href="https://github.com/GUTENTAG1" target="_blank" hreflang="nl">
                    <i class="fab fa-github text-4xl px-1.5" alt="GitHub"></i>
                </a>
                <a class="text-6xl p-1 my-0 mx-2 rounded-full leading-9 inline-block text-center opacity-70 hover:opacity-100" href="https://www.linkedin.com/in/ruben-van-zanten-ab4a1924b/" target="_blank" hreflang="nl">
                    <i class="fab fa-linkedin text-4xl px-2" alt="LinkedIn"></i>
                </a>
            </div>
       </div>
       <ul class="text-black flex justify-center flex-col gap-8 leading-3 ml-5 sm:flex-row">
            <li class="opacity-60 hover:opacity-100">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="opacity-60 hover:opacity-100">
              <RouterLink to="/about">Over Mij</RouterLink>
            </li>
            <li class="opacity-60 hover:opacity-100">
              <RouterLink to="/projects">Projecten</RouterLink>
            </li>
            <li class="opacity-60 hover:opacity-100">
              <RouterLink to="/contact">Contact</RouterLink>
            </li>
            <li class="opacity-60 hover:opacity-100">
              <RouterLink to="/privacystatement">PrivacyStatement</RouterLink>
            </li>
        </ul>
        <div class="text-center mt-5">
            <p>Copyright © Ruben van Zanten 2023</p>
        </div>
    </footer>
</template>
<script lang="ts">
  export default {
    name: 'Footer'
  }
</script>