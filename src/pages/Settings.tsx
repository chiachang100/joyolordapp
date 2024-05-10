import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
         <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>個人設置</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">個人設置</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonImg
            src="assets/images/xlcd/xlcdapp_photo_default.png"
            alt="愛的激勵">
          </IonImg>
          <IonCardHeader>
            <IonCardTitle>語言設置</IonCardTitle>
            <IonCardSubtitle>語言設置更換後，請重新啟動應用程式。</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonSelect label="選擇語言" labelPlacement="floating">
              <IonSelectOption value="traditionalChinese">繁體中文</IonSelectOption>
              <IonSelectOption value="simplifiedChinese">简体中文</IonSelectOption>
            </IonSelect>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
