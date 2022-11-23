<template>
    <nav class="navbar navbar-expand-lg bg-dark fixed-top">
        <div class="container">

            <router-link class="navbar-brand mt-1 fs-5 text-light" to="/">ร้านไอทีจีเนียส</router-link>

            <div class="d-flex">
                
                <span class="d-block px-2"></span>

                <router-link class="nav-link text-light mt-1" :to="{ name: 'Cart' }"><i class="bi bi-cart-check"></i> ตะกร้าสินค้า (0)</router-link>
                
                <span class="d-block px-2"></span>

                <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-list"></i>
                </button>

                <span class="d-block px-1"></span>

                <button class="btn btn-outline-light px-2 py-0" @click="toggleDark()">
                    <i v-if="isDark" class="bi bi-moon"></i>
                    <i v-if="!isDark" class="bi bi-brightness-high"></i>
                </button>

            </div>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-light" :to="{ name: 'Home' }">หน้าหลัก</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-light" :to=" { name: 'About'}">เกี่ยวกับเรา</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { useDark, useToggle  } from '@vueuse/core'

    // Dark Mode
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>


<style>

</style>