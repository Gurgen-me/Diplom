<template>
  <!-- Footer -->
  <MDBFooter  bg="#303336" :text="['center', 'lg-start', 'muted']">
    <!-- Section: Social media -->
    <section class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      "></section>
    <!-- Section: Links  -->
    <section class="">
      <MDBContainer class="text-center text-md-start mt-5">
        <!-- Grid row -->
        <MDBRow class="mt-3">
          <!-- Grid column -->
          <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              SARERA
            </h6>
            <p>
              Для тех, кто ценит свой автомобиль!
              КРАСНОДАР - район Катюши / Ипподрома
              Бронировка авто пленкой/ Ипподрома
            </p>
          </MDBCol>
          <!-- Grid column -->
          <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Наши соц сети</h6>
            <p>
              <a href="https://www.youtube.com/channel/UCqAo7O9R4b97CxujqSKPHdg" class="text-reset">Youtube</a>
            </p>
            <p>
              <a href="tel:+7 989 827 02 07" class="text-reset">
                WhatsApp
              </a>
            </p>
            <p>
              <a href="https://t.me/GM_0702" class="text-reset">Telegram</a>
            </p>
          </MDBCol>
          <!-- Grid column -->
          <!-- Grid column -->
          <!-- Grid column -->
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">КОНТАКТЫ</h6>
            <p>
             <a href="https://yandex.ru/maps/-/CDc8iZIM" class="text-reset">
               <b>Адрес:</b> ул. Ковтюха, 98, Краснодар, Краснодарский край, 350001
             </a>
            </p>
            <p>
              <a href="mailto:dlyakino.7@gmail.com" class="text-reset">
                <b>Почта:</b> dlyakino.7@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+7 989 827 02 07" class="text-reset">
                <b>Телефон:</b> +7 989 827 02 07
              </a>
            </p>
          </MDBCol>
          <!-- Grid column -->
        </MDBRow>
        <!-- Grid row -->
      </MDBContainer>
    </section>
    <!-- Section: Links  -->
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2024 Copyright:
      <a class="text-reset fw-bold" href="https://yandex.ru/legal/siteconstruct_termsofuse/">SARERA</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>


<script setup lang="ts">
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-vue-ui-kit';
</script>

<style scoped>


</style>