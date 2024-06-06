<script>
import AppCard from './AppCard.vue';
export default {
    components: {
        AppCard,
    },
    props: {
      languageCode: {
        type: String,
        required: true
      }
    },
    computed: {
      countryCode() {
        const languageCountry = {
          'en': 'us',
          'it': 'it',
        };
        return languageCountry[this.languageCode] || null;
      }
    }
}
</script>

<template>
<span :class="['flag-icon', `flag-icon-${countryCode}`, 'flag']">
    <img :src="`flags/language-${movie.original_language}.svg`" alt="original_language">
</span>
</template>