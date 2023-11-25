<template>
<div class="forecast">
    <div>
        <div>Date: {{ forecast.date }}, Summary: {{ forecast.summary }}</div>
        <div>Temperature: C {{ forecast.temperatureC }}, F {{ forecast.temperatureF }}</div>
    </div>
</div>
</template>

<script>
export default{
    props:{
        forecast:{
            type: Object,
            required: true,
        }
    }
}

</script>

<style>
.forecast{
    display: flex;
    border: 1px solid seagreen;
    align-items: center;
    justify-content: space-between;
    margin: 20px 15px;
    padding: 5px 5 px;
}
</style>