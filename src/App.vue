<template>
  <div class="app">
    <h2>Страница с постами</h2>
    <my-button
      @click="showDialog"
      >
      Создать пост
    </my-button>
    <my-dialog 
      v-model:show="dialogVisible"
    >
      <post-form 
        @create="createPost"
      />
    </my-dialog>
    <post-list 
      :posts="posts"
      @remove="removePost"
      v-if="!isPostsLoading"  
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

import axios from 'axios'

export default{
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false
    } 
    
  },
  methods:{
    createPost(post){
      this.posts.push(post)
      this.dialogVisible=false
    },
    removePost(post){
      this.posts = this.posts.filter(p=> p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible=true
    },
    async fetchPosts(){
      try{
        this.isPostsLoading = true
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = responce.data
      }
      catch(e){
        alert('Ошибка '+ e)
      }
      finally{
        this.isPostsLoading = false
      }
    },
  },
  mounted(){
    this.fetchPosts()
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app{
  margin: 15px;
}

</style>
