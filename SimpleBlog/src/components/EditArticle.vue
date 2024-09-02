<template>

    <side-bar-menu></side-bar-menu>
    <div style="margin: 20px; height: 800px;display:flex; flex-direction: row ">

        <div style="width: 800px; ">
            <div>
                <label class="form-label" for="name">BAŞLIK:</label>
                <textarea class="form-input HeadingFont" @input="updateTheTitle($event.target.value)" required=""
                    placeholder="Başlık bekleniyor" style="resize: none;font-size: xx-large;box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;"
                    type="textarea">{{ editArticle.title }}</textarea>
            </div>
            <div>
                <label class="form-label " for="message">Blog:</label>
                <textarea @input="updateTheContent($event.target.value)"
                    style="box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;;resize: none; width: 100%;font-size:large;height: 600px;" required=""
                    placeholder="Güncelleme zamanı gelmiş.." name="message" class="form-input Font"
                    id="message">{{ editArticle.contents }}</textarea>

            </div>
            <button @click="updateData">Kaydet</button>
            <span>
                <input type="file" @change="onFileChange" ref="fileInput" style="display: none;">
                <button style="margin: 5px;width: 180px;" @click="uploadImage">Fotoğraf ekle</button>
            </span>
        </div>

    </div>
    <div class="ArtList">


        <div v-for="article in articles" :key="article.id" class="ArtListBorder ">

            <div class="ArtListPicAndTitle">
                <div style="display: flex ;margin-bottom:-10%; ">
                    <button style="margin-left: 0%;margin-right: 10%; "
                        @click="editArticleId(article.id, article.title, article.contents, article.imageUrl)">Düzenle</button>
                    <button @click="deleteArt(article.id)">Sil</button>
                </div>
                <img class="ArtImages" :src="article.imageUrl" style="box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;">

                <div class="ArtListTitleAndButton " style="font-size: smaller; ">

                    <h3 style="flex-grow: 1;" class="Font">{{ article.title }}</h3>

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
            articles: [],
            editArticle: ['id', 'title', 'contents', 'imageUrl'],
            message: null,
            titles: null,
            DeleteArtId: null,

        };
    },
    methods: {
        uploadImage() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.editArticle.imageUrl = URL.createObjectURL(file);
            }
        },
        deleteArt(id) {
            this.DeleteArtId = id;
            this.DeleteData();
        },
        updateTheTitle(value) {

            this.editArticle.title = value


        },
        updateTheContent(value) {
            this.editArticle.contents = value


        },
        editArticleId(id, title, content, Url) {
            this.editArticle.id = id;
            this.editArticle.title = title
            this.editArticle.contents = content;
            this.editArticle.imageUrl = Url

        }, async updateData() {
            try {


                if (this.editArticle.title == null && this.editArticle.contents == null && this.editArticle.imageUrl == null) {
                    alert('boş değer olamaz!')
                    return
                } else{
                    const response = await axios.patch(`http://localhost:3000/articles/${this.editArticle.id}`, {
                    title: this.editArticle.title, contents: this.editArticle.contents, imageUrl: this.editArticle.imageUrl

                });
                alert('Veri güncellendi:');
                }

          
            } catch (error) {
                alert('Veri güncellenirken hata oluştu:', error);
            }
        },
        async DeleteData() {
            try {
                alert('Delete  içine girdi amkq' + this.DeleteArtId)
                const response = await axios.delete(`http://localhost:3000/articles/${this.DeleteArtId}`, {


                });
                console.log('Veri güncellendi:', response.data);
            } catch (error) {
                console.error('Veri güncellenirken hata oluştu:', error);
            }
        }

    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3000/articles');
            this.articles = response.data;
            this.editArticle = this.articles

        } catch (error) {
            console.error('API hatası:', error);
        }
    },
    /*async UpdateData2() {
            try {
                const response = await axios.patch(`http://localhost:3000/articles/${this.editArticle.i}`)
                 {"title"= this.editedTitle, "contents"= this.editedContent }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        }*/

};
</script>
<style></style>