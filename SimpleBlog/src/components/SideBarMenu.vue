<template>
  
    <div class="">

      <div style="display: flex; flex-direction: column;">
        <nav>
          <div class="navbar">
            <div class="container nav-container" >
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div class="logo">

              </div>
              <div class="menu-items">

                <RouterLink   to="/">Home</RouterLink>
                <RouterLink  to="/NewArticle">New Artical</RouterLink>
                <RouterLink    to="/EditArticle">Edit Artical</RouterLink>
              </div>
            </div>
          </div>
        </nav>

      </div>


    </div>

  


</template>

<script>
export default {
  methods: {
            
  },
}
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<style>
.Menu {
  background-color: #DFDBDC;
  /* %50 geçirgen mavi renk */
  /*   background-image: url('./assets/NaturePic.jpg') ;   */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: smaller;
  width: 10%;
  height: 900px;

}

.MenuTitles {
  color: #1c2522;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .2em;
  line-height: 1em;
  text-transform: uppercase;
}

.Font {
  color: #65706d;
  font-family: "PT Sans", sans-serif;
  
  line-height: 1.1em;
  
}.HeadingFont{
  color: #1c2522;
  font-family: "ABeeZee", sans-serif;
  
  line-height: 1.1em;
}


.MenuDiv {

  background-color: transparent;
  text-align: center;

}
</style>