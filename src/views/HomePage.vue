<template>
  <ion-menu :type="'reveal'" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>
          hello
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-menu-toggle>
        <ion-button>
          Hello
        </ion-button>
      </ion-menu-toggle>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-content>
      <img class="hero-image" src="../../public/hero-image.jpg" alt="Hero image">

      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-menu-toggle>
            <img width="40px" class="rounded-full cursor-pointer" alt="Silhouette of a person's head"
                 src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
          </ion-menu-toggle>
          <ion-button shape="round" slot="end">
            <ion-icon slot="icon-only" :icon="settingsSharp"></ion-icon>
          </ion-button>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonTitle,
  IonButton,
  IonMenu,
  IonMenuToggle,
} from "@ionic/vue";
import {settingsSharp} from "ionicons/icons"
import {ref} from "vue";

</script>

<style scoped>
.ion-padding {
  --padding-top: 0;
  --padding-start: 0;
  --padding-end: 0;
  padding-bottom: 0;
}

.main {
  --ion-background-color: rgb(42, 52, 60);
  --background: linear-gradient(180deg, rgba(72, 94, 115, 1) 0%, rgba(138, 155, 173, 1) 65%, rgba(203, 206, 213, 1) 100%);
}

ion-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

ion-toolbar {
  --background: rgba(0, 0, 0, 0);
  --color: white;
  padding: 20px 10px 0 10px;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}

ion-button {
  --background: transparent;
  --box-shadow: none;
}
ion-menu-toggle ion-button{
  background: #006280;
}
</style>