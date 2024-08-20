<template>
    <div class="img_about">
        <img src="../../assets/personal.jpg" class="img-thumbnail" alt="..." />
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .img-thumbnail{
        border-radius: 25px;
        width: 850px;
        height: 450px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      .img-thumbnail{
        border-radius: 25px;
        width: 700px;
        height: 350px;
      }

    }


    @media (max-width: 767px) {
      .img-thumbnail{
        border-radius: 25px;
        width: 500px;
        height: 300px;
      }

    }


    @media (max-width: 480px) {
      .img-thumbnail{
        border-radius: 25px;
        width: 400px;
        height: 250px;
      }
    }
    @media (max-width: 344px) {
      .img-thumbnail{
        border-radius: 25px;
        width: 300px;
        height: 200px;
      }
    }
</style>