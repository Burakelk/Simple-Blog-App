<!--BlogListSection.vue-->
<template>
  <div class="ArtList">
    
    
      <div v-for="article in articles" :key="article.id" class="ArtListBorder ">
          
          <div class="ArtListPicAndTitle" >

            <img @click="previewArticle(article.id)" style="    box-shadow: rgb(38, 57, 77) 0px 0px 30px 2px;cursor: pointer;" class="ArtImages"  :src="article.imageUrl">

            <div class="ArtListTitleAndButton " style="font-size: smaller;height: 120px; " >
              
              <h3 @click="previewArticle(article.id)" style="flex-grow: 1;cursor: pointer;" class="Font">{{article.title}}</h3>
           <!--   <button class="Font" @click="previewArticle(article.id)">Detaylı gör</button>-->
           
            </div>

          </div>
       
      </div>

    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    previewArticle(id) {
      this.$emit('preview', id);
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/articles');
      this.articles = response.data;
       this.articles.title= this.articles.title.substring(0,10)+'...'

    } catch (error) {
      console.error('API hatası:', error);
    }
  }
};
</script>



<style>


.ArtList {
  display: flex;
  flex-wrap: wrap;
  height: 880px;
  width: 1000px;

  margin: 2px;
  overflow: scroll;
  overflow-x: hidden;
  transition: all 600ms ease;



}.ArtList:hover{
  height: 890px;
  width: 1010px;
  transition: all 600ms ease;
}
.ArtImages{
  width: 100%;
  height: 100%;
  transition: all 600ms ease;
  border-radius:15%;
  

}.ArtImages:hover{
  width: 99%;
  height: 99%;
  transition: all 600ms ease;
}
.ArtListBorder {
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin: 50px;

} 
.ArtListPicAndTitle{
 
   color: #1c2522;
  font-family:  sans-serif;
  letter-spacing: .2em;
  line-height: 1.1em;
  text-transform: uppercase;


  
}
.ArtListTitleAndButton{
  text-align: center;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f2;
  transform: translate(-9%, -60%); /* Tam ortalamak için */
  margin-left:50px ;
  margin-right: 00px;
  padding-left:30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border: transparent;
  border-radius: 15px;
 }


</style>