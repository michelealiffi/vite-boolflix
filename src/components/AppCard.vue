<script>
export default {
    props: ["index", "title", "originalTitle", "originalLanguage", "vote"],
}
</script>

<template>
<div class="card">
    <p>{{ this.title }}</p>
    <p>{{ this.originalTitle }}</p>
    <p>{{ this.originalLanguage }}</p>
    <p>{{ this.vote }}</p>
</div>
</template>