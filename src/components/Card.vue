<template>
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
        <div class="card">
            <img :src="product.thumbnailUrl" :alt="`imagen-${product.title}`" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.precio }}<span></span></p>
                <button class="btn btn-dark">Comprar</button>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    props: ['product']
}
</script>

<style>

</style>