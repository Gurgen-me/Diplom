<template>
  <!-- Footer -->
  <MDBFooter :text="['center', 'lg-start', 'muted']">
    <!-- Section: Social media -->
    <section class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      ">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Наши социальные сети:</span>
      </div>
      <!-- Left -->
      <!-- Right -->
      <div>
        <router-link to="" class="me-4 text-reset">
          <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
        </router-link>
        <router-link to="" class="me-4 text-reset">
          <MDBIcon iconStyle="fab" icon="vk"></MDBIcon>
        </router-link>
        <router-link to="" class="me-4 text-reset">
          <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
        </router-link>
        <router-link to="" class="me-4 text-reset">
          <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
        </router-link>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->
    <!-- Section: Links  -->
    <section class="">
      <MDBContainer class="text-center text-md-start mt-5">
        <!-- Grid row -->
        <MDBRow class="mt-3">
          <!-- Grid column -->
          <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>GM
            </h6>
            <p>
              GM - профессиональный детейлинг любой сложности. Автодетейлинг высокого качества за доступную
              цену.
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Услуги</h6>
            <p>
              <router-link to="" class="text-reset">Pricing</router-link>
            </p>
            <p>
              <router-link to="" class="text-reset">Settings</router-link>
            </p>
            <p>
              <router-link to="" class="text-reset">Orders</router-link>
            </p>
            <p>
              <router-link to="" class="text-reset">Help</router-link>
            </p>
          </MDBCol>
          <!-- Grid column -->
          <!-- Grid column -->
          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i class="fas fa-home me-3"></i>ул. Ковтюха, 98, Краснодар, Краснодарский край, 350001
            </p>
            <p>
              <i class="fas fa-envelope"></i>
              gmdetailing@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone" class="me-3" />+7 989 827 02 07
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
      <router-link to="">GM</router-link>
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
  MDBCol,
  MDBIcon
} from 'mdb-vue-ui-kit';
</script>

<style scoped>

</style>