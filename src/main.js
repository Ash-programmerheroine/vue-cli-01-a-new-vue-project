import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriendContact from './components/NewFriendContact.vue';
const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriendContact);
app.mount('#app');
