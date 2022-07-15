import { createApp } from "vue";
import { createPinia } from "pinia";
import Notifications from "@kyvg/vue3-notification";

import App from "./App.vue";
import router from "./router";

// BASE COMPONENTS
import BaseButton from "./components/BaseButton.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseRadio from "./components/BaseRadio.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";
import BaseTextarea from "./components/BaseTextarea.vue";
import BaseAlert from "./components/BaseAlert.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Notifications);

app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseRadio", BaseRadio);
app.component("BaseSelect", BaseSelect);
app.component("BaseBadge", BaseBadge);
app.component("BaseCheckbox", BaseCheckbox);
app.component("BaseTextarea", BaseTextarea);
app.component("BaseAlert", BaseAlert);

app.mount("#app");
