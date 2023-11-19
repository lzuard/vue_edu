<template>
    <div class="navbar">
        <div @click="$router.push('/')">vue_edu</div>
        <div class="navbar__btns">
            <my-button 
            class="navbar__btns__item"
            @click="$router.push('/blogs')"
            >Посты</my-button>
            <my-button 
            class="navbar__btns__item"
            @click="$router.push('/about')"
            >О сайте</my-button>
        </div>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>

.navbar{
    height: 50px;
    background-color: lightblue;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0px 15px;
}

.navbar__btns{
    margin-left: auto;
}

.navbar__btns__item{
    margin-left: 10px;
}

</style>