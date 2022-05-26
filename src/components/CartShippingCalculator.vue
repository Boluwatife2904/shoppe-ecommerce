<script setup lang="ts">
import { computed, ref, watch } from "vue";
import BaseSelect from "./BaseSelect.vue";
import statesData from "@/data/nigeria-state-and-lgas.json"
import BaseButton from "./BaseButton.vue"

const countries = ref(["Nigeria"]);
const selectedState = ref("");
const selectedCountry = ref("");
const selectedLGA = ref("");

const states = computed(() => {
    return statesData.map((state) => state.state).sort()
})

const lgas = computed(() => {
    if (selectedState.value) {
        const state = statesData.find((state) => state.state === selectedState.value);
        return (state?.lgas) as string[];
    } else {
        return []
    }
})

// Change Selected LGA to "" when the selectedState is changed
watch(selectedState, () => selectedLGA.value = "");
</script>

<template>
    <div class="shipping">
        <h5 class="heading-5 shipping__title">CALCULATE SHIPPING</h5>
        <div class="shipping__input">
            <BaseSelect v-model="selectedCountry" :options="countries" name="country" placeholder="SELECT A COUNTRY" />
        </div>
        <div class="shipping__input">
            <BaseSelect v-model="selectedState" :options="states" name="state" placeholder="SELECT A STATE" />
        </div>
        <div class="shipping__input">
            <BaseSelect v-model="selectedLGA" :options="lgas" name="lga" placeholder="SELECT A L.G.A." />
        </div>
        <div class="shipping__update">
            <BaseButton variant="outline-black" size="large" text="UPDATE TOTALS" />
        </div>
    </div>
</template>

<style lang="scss">
.shipping {

    &__title {
        margin-bottom: 2.3rem;
    }

    &__input {
        margin-bottom: 2.3rem;
    }
}
</style>