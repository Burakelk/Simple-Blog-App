<template>

  <side-bar-menu></side-bar-menu>
  <div style=" display: flex; flex-direction: column; width:100%; margin-left: 5px;">


    <div style=" margin-left: 5px; ">
      <h1 style="text-align: center;">YENİ BLOG YAZ </h1>
    </div>
    <div style=" margin-left: 5px; height: 860px;">

      <div class="colorful-form">
        <div class="form-group">
          <label class="form-label" for="name">Bir başlık girin:</label>
          <textarea @input="newTheTitle($event.target.value)" required="" placeholder="Konu Başlığı gir"
            class="form-input HeadingFont " style="resize: none;font-size: x-large; " type="textarea"></textarea>
        </div>
        <div class="form-group">
          <label class="form-label" for="message">Yazmaya başlayın:</label>
          <textarea  @input="newTheContent($event.target.value)" style="height: 600px;" required=""
            placeholder="Yeni bir yazıya başla" class="form-input Font" name="message" id="message"></textarea>
        </div>
        <button @click="updateData">Kaydet</button>
        <span>
          <input type="file" @change="onFileChange" ref="fileInput" style="display: none;">
          <button style="margin: 5px;width: 180px;margin-top: -100px;" @click="uploadImage">Fotoğraf Ekle</button>
        </span>

      </div>
    </div>




  </div>

</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {

      editArticle: ['title', 'contents'],
      message: null,
      titles: null,
      newContent: null,
      newTitle: null,
      imageUrl: null
    };
  },
  methods: {
    uploadImage() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageUrl = URL.createObjectURL(file);
      }
    },

    newTheTitle(value) {
      this.newTitle = value


    },
    newTheContent(value) {
      this.newContent = value


    },
    async updateData() {
      try {
        if(this.imageUrl==null||this.newTitle==null||this.newContent==null){
        alert('Eksik yerler var. Başlık, Metin ve Fotoğraf yüklemek zorundasınız!')
        return;
        }
        alert('data pushlandı lan' + this.newTitle)
        const response = await axios.post(`http://localhost:3000/articles`, {
          title: this.newTitle, 
          contents: this.newContent ,
          imageUrl:this.imageUrl

        });
        console.log('Veri güncellendi:', response.data);
      } catch (error) {
        console.error('Veri güncellenirken hata oluştu:', error);
      }
    }

  }

};
</script>

<style>
.colorful-form {
  max-width: 100%;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;

}

.form-group {
  margin-bottom: 20px;
  overflow: hidden;
  /* Hide scrollbars */
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;

}

.form-input {
  width: 99%;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #333;
  border-radius: 5px;
  resize: none;
  overflow: scroll;
}

textarea.form-input {
  height: 100px;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff6f69;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #ff5f59;
}
</style>