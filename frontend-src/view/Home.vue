<template>
    <div>
        <h3>Welcome to {{ APPLICATION_NAME }}!</h3>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            APPLICATION_NAME: APPLICATION_NAME,
        };
    },
};
</script>

<style scoped lang="less">

</style>
