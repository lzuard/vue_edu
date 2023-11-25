<template>
    <h2>Wethaer list</h2>
    <TransitionGroup name="weather-list">
        <WeatherItem
        v-for="forecast in forecasts"
        :forecast="forecast"
        ></WeatherItem>
    </TransitionGroup>
    </template>
    
    <script>
    import WeatherItem from "@/components/WeatherItem.vue"
    export default{
        components: {WeatherItem},
        props: {
            forecasts: {
                type: Array,
                required: true
            }
        }
    }
    </script>
    
    <style>
    
    </style>