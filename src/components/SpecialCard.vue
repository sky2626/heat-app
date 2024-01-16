<template>
    <p class="font-bold text-center text-xl text-white">
        {{ msg }}
    </p>
</template>

<script>
export default {
    name: 'SpecialCard',

    Prop: {
        msg: string

    }

}
    
</script>