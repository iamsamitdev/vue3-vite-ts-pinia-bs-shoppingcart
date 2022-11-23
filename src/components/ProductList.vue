<template>
    <div className='row my-4'>

        <ProductListItem v-for="product in products" 
            :key="product.id" :product="product" />

    </div>
</template>

<script setup lang="ts">

    import ProductListItem from '@/components/ProductListItem.vue'

    // Mockup Data
    import products from '@/mockupdata/products'

</script>

<style>
</style>