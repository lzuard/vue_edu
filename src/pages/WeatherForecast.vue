<template>
    <div class="head_bar">
        <h1>WeatherPage</h1>
        <my-button
        @click="getForecast()"
        >Load weather</my-button>
    </div>
    <WeatherList
    :forecasts="forecasts"></WeatherList>
</template>

<script>
import WeatherList from "@/components/WeatherList.vue"
import axios from "axios";

export default{
    components: {WeatherList},
    data(){
        return{
            forecasts:[]
        }
    },
    methods:{
        async getForecast(){
            try{
                const responce = await axios.get('http://localhost:5024/weatherforecast')
                this.forecasts = responce.data
            }
            catch(e){
                alert('Error: '+ e)
            }
        }
    },
    mounted(){
        this.getForecast
    }
}
</script>

<style>
</style>