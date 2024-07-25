<template>
    <Slideportfolio />
    <h1 class="work">Наши работы</h1>
    <hr />
    <v-container class="bg-surface-variant">
        
            <v-col v-for="n in 9" :key="n" cols="1" sm="4">
                <v-sheet class="ma-2 pa-2">
                    <img src="https://mdbootstrap.com/img/new/standard/city/041.webp" @click="exampleModal = true" class="img-thumbnail" alt="..." />
                </v-sheet>
            </v-col>
    </v-container>
    <!-- Button trigger modal -->

    <MDBModal id="exampleModal" tabindex="-1" labelledby="exampleModalLabel" v-model="exampleModal">
        <MDBModalHeader>
            <MDBModalTitle id="exampleModalLabel"> rrsgyhrdfhdr </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>...</MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>
<script setup lang="ts">
import Slideportfolio from '../components/portfolio/Slideportfolio.vue'
import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

const exampleModal = ref(false);
</script>
<style>
.img-thumbnail {
    width: 400px;
    height: 250px;
    cursor: pointer;
}
.bg-surface-variant {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 0.5fr);
  grid-gap: 20px;
  padding: 15px;
}
.work{
    padding: 15px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
}  
</style>