<template>
    <article id="index">
        <ul>
            <li v-for="(todo, index) in data.data" :key="index">
                {{ todo.text }}
            </li>
        </ul>
    </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: mapState({
        data: state => state.aside.asidedata
    }),
    created () {
        this.$store.dispatch('aside/read');
    }
}
</script>

<style lang="scss" scoped>
ul {display: flex; flex-wrap: wrap; justify-content: space-between; padding: 2%; margin: 0 0 -2%;
    li {width: 49%; height: 100px; margin: 0 0 2%; border: 1px solid #000;}
}
</style>
