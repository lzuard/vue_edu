<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск..."
    >
    </my-input>
    <div class="app_btns">
      <my-button
        @click="showDialog"
        >
        Создать пост
      </my-button>
      <my-select 
        v-model="selectedSort"
        :options="sortedOptions">

      </my-select>
    </div>
    <my-dialog 
      v-model:show="dialogVisible"
    >
      <post-form 
        @create="createPost"
      />
    </my-dialog>
    <post-list 
      :posts="sortedAndSearchedPosts"
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
      isPostsLoading: false,
      selectedSort: '',
      sortedOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
      searchQuery: '',
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
  },
  computed:{
    sortedPosts(){
      return [...this.posts].sort((post1,post2) => 
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
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

.app_btns{
  margin: 15px 0px 15px 0px;
  display: flex;
  justify-content: space-between;
}
</style>
