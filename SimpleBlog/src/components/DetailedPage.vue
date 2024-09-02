<template>

    <div style="display: flex;flex-direction: row; " >
        
        <img style="box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;" class="DetailedPageImage" :src="this.data.imageUrl">

        <div class="ArticleBorder"  >
            <RouterLink class="RouterLinkButton  StickyButton" to="/" >Geri dön</RouterLink>
            <div style="margin-left: 10%; margin-right: 10%;display:flex;flex-direction: column; ">
             
                  
                        <h1 class="HeadingFont" style="box-shadow: rgb(8, 57, 77) 0px 10px 10px -10px; text-align: center;margin-bottom: 60px;border-radius: 20%;padding-bottom: 8%;">{{ this.data.title }}</h1>

                        <p  class="Font" style="box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;line-height: 50px;padding: 50px;background-color: white;" >{{this.data.contents}}</p>
                   

                </div>
            </div>

        </div>
   

  

</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {

            data: [],

        }
    },
    created() {

        this.fetchUser(this.$route.query.Id);
    },
    methods: {

        async fetchUser(PasId) {
            try {
                const response = await axios.get(`http://localhost:3000/articles/${PasId}`);
                this.data = response.data;
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        },
    }
}
</script>



<style scoped>
body{
    overflow: scroll;
}
.DetailedPageImage {
    background-repeat: no-repeat;
    width: 1853px;
    height: 1100px;
    z-index: -1;


}.ArticleBorder{

    margin-top: 850px;
    margin-right: 50px;
    width: 70%;
    background-color:white;
    display:block;  
    margin-left: 5px;
    z-index: 100;
    left: 15%;
    height: 1500px;
    position: absolute;
}.StickyButton{
  position: sticky; z-index: 2;
  margin-top: 55px;
  background-color: transparent;
  
}.StickyButton::before{
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #ffffff;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 750ms
}
</style>