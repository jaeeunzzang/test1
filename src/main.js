//가장먼저 실행되는 파일
import { createApp } from 'vue' //vue모듈에서 createApp을 가져옴,,,,
import App from './App.vue' // App.vue파일을 가져와서 App으로 선언

createApp(App).mount('#app') 
//1. App(App.vue)를 가지고 createApp을 하겠다,,,,
//2. index.html 의 id = 'app'에 마운트
//3. 결론 : App.vue를 id = app 에 마운트 하겟다는거 

