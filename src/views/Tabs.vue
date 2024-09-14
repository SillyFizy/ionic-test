<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <div class="tab-bar-container">
        <ion-tab-bar>
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="home"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="night" href="/night">
            <ion-icon :icon="moon"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="lotus" href="/lotus">
            <ion-icon :icon="flower"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="music" href="/music">
            <ion-icon :icon="musicalNote"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </div>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/vue'
import {home, moon, flower, musicalNote} from 'ionicons/icons';
</script>

<style scoped>
.tab-bar-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 1000;
  --ion-background-color: rgba(0, 0, 0, 0);
}

ion-tab-bar {
  --background: #485e73;
  width: 90%;
  margin: 0 auto 10px;
  border-radius: 40px;
}

ion-tabs {
  margin-bottom: 10px;
}
</style>