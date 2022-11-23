<template>
    <div class="col-lg-4 col-md-6 col-sm-4 mb-4">
        <div class="card">
            <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}"><img :src="product.image" class="card-img-top" alt="..." /></router-link>
            <div class="card-body">
                <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}"><h5 class="card-title fw-bold fs-4">{{product.name}}</h5></router-link>
                <p class="card-text text-black">{{ product.detail }}</p>
                
                <div class="row">
                    <div class="col-4 fs-5 text-black fw-bold text-start">
                        ${{ product.price }}
                    </div>
                    <div class="col-8 text-end">
                        <button class="btn btn-success">
                            <i class="bi bi-cart-check"></i> เพิ่มลงรถเข็น
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">

    //get props
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });

</script>

<style>
    a {
        text-decoration: none;
        color: black;
    }
</style>