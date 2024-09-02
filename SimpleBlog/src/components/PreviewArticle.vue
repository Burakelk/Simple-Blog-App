<!-- PreviewArticle.vue -->
<template>
    <blog-list-section class="container" @preview="receiveEmit" style="order: 3;"></blog-list-section>
    <div class="PreviewBody"
        style=" height: 700px; margin: 20px; padding: 10px 20px; display: flex; flex-direction: column; ">
        <div class="">

           


            <div style="display: flex; flex-direction:  column; transition: all 750ms ease;; ">
                <img style="    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;" class="PreviewPic" :src="data.imageUrl">
                <div class="PreviewTitleAndButton Font" style="font-size: smaller;">
                    <h2 class="HeadingFont"  style="padding: 5px;border-bottom: 2px solid;">{{data.title}}</h2>
                    <p style=" padding: 5px;text-transform:none;">{{data.contents}}</p>
                  <RouterLink class="RouterLinkButton" :to="{path:'/DetailedPage',query:{Id:this.PasId}}">İncele</RouterLink>
                    
                    
            </div>
            
                </div>
                
            </div>
            <div style="display: flex; flex-direction: row;">  
                
          
        </div>



        

    </div>



</template>
<script>
import axios from 'axios';

export default {

    data() {
        return {
            PasId: 0,
            data:[],
        }
    },
    created() {
        this.data.title='Bir konu görmek ister misin?'
        this.data.contents=' O zaman bir başlık seç'
        this.data.id='8dfe'
        this.data.imageUrl="../../public/pexels-fabiano-rodrigues-794857-1662298.jpg"
        this.fetchUser();
      
    },
    methods: {
        goToDetailedPage() {
            alert('pushladı goto')
      this.$router.push('/DetailedPage')
    },
        receiveEmit(ArtId) {

            this.PasId = ArtId;

            this.fetchUser(this.PasId);

        },
        async fetchUser(PasId) {
            try {
                const response = await axios.get(`http://localhost:3000/articles/${PasId}`);
                this.data = response.data;
                   this.data.title= this.data.title.substring(0,70)+'...'
               
                this.data.contents= this.data.contents.substring(0,200)+'...'
                
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        },
    }
}
</script>





<style>
.PreviewTitleAndButton{
text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f2; 
  margin-left:50px ;
  margin-right: 50px;
  padding-left:30px;
  padding-right: 30px;
  background-color: #f6f6f2; 
 transform: translate(0, -80%);
 border-radius:5px
  
}.RouterLinkButton{
    width: 230px;
  height: 50px;
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: #e8e8e8;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

}.RouterLinkButton:before {
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
}.RouterLinkButton:hover {
  color: rgb(0, 119, 99);
  ;
}.RouterLinkButton:hover::before {
  width: 100%;
}
.PreviewPic{
    border-radius: 2%;
   height: 800px;
   width: 800px;
   border-radius: 10%;
}
.PreviewTitleAndButton {

    display: flex;
    flex-direction: column;
    background-color: #f6f6f2;
    transform: translate(-11%, -100%);
    /* Tam ortalamak için */
    margin-left: 70px;
    margin-right: 60px;
    padding-left: 30px;
    padding-right: 30px;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

}

.PreviewBody {
    

    width: 55%;
}
</style>