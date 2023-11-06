<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts"/>
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
    title:'',
    body: '',
    } 
    
  },
  methods:{
    createPost(post){
      this.posts.push(post)
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
