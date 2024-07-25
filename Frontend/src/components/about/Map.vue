<template>
    <div class="map">
        <div style="display: flex; justify-content: start; margin: 0; position:relative;"><a
                href="https://yandex.ru/maps/org/sarera/22882260479/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:0px;">Sarera</a><a
                href="https://yandex.ru/maps/35/krasnodar/category/auto_detailing/9561111444/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:14px;">Детейлинг в Краснодаре</a><a
                href="https://yandex.ru/maps/35/krasnodar/category/auto_cleaning/28364857613/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:28px;">Автохимчистка в Краснодаре</a><iframe
                src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.009416%2C45.014759&mode=search&oid=22882260479&ol=biz&source=mapframe&utm_source=mapframe&z=16.37"
                width="1000" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </div>
        <div class="map-info">
            <div class="map-info-gm">
                <div class="map-info-title">
                    <h3>GM</h3>
                </div>
                <div class="map-info-schedule">
                    <h5>График работы: ПН-ВС: 10:00-22:00</h5>
                </div>
                <div class="map-info-number">
                    <h5>Tel: 89898270207</h5>  
                </div>
                <div class="map-info-mail">
                    <h5>mail: gmdetailing@gmail.com</h5>
                </div>
            </div>
        </div>
    </div>
    <hr>
</template>
<script>
import {

  MDBIcon
} from 'mdb-vue-ui-kit';
export default {

}
</script>
<style scoped>
.map {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dbdbdb;
}

.map-info {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: end;
}
.map-info-gm {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.map-info-title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-info-schedule {
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-info-number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.map-info-mail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>