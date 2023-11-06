<template>
  <div class="app">
    <h2>Страница с постами</h2>
    <my-button @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list 
      :posts="posts"
      @remove="removePost"  
      />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

export default{
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
      {id: 1, title:'Title 1', body:'Description 1'},
      {id: 2, title:'Title 2', body:'Description 2'},
      {id: 3, title:'Title 3', body:'Description 3'},
      {id: 4, title:'Title 4', body:'Description 4'},
    ],
    dialogVisible: false
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
    }
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
