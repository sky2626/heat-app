<template>
    <p class="font-bold text-center text-xl text-white">
        {{ msg }}
    </p>
</template>

<script>
export default {
    name: 'SpecialCard',

    Props: {
        msg: String,

    },

}
    
</script>