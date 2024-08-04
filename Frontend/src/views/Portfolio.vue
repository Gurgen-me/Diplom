<template>
    <Slideportfolio />
    <div class="all_work">
        <div class="work">
            <img src="../assets/premium.png" class="work_img" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slideportfolio from "../components/portfolio/Slideportfolio.vue";

export default defineComponent({
    name: "Portfolio",
    data: () => ({
    }),

    components: {
        Slideportfolio,
    },

})
</script>

<style scoped>
.all_work {
    display: flex;
    padding: 25px;
    width: 100%;
    height: 100%;
}

.work {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    margin: 5px;
    width: 300px;
    height: 200px;
}
.work_img:hover {
    width: 350px;
    height: 230px;
    box-shadow: 1px 1px 1px #ff0000;
}
.work:hover {
    width: 350px;
    height: 230px;
}

.work_img {
    border-radius: 15px;
    width: 300px;
    height: 200px;
}
</style>