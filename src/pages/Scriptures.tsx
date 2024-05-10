import {
  IonBackButton,
  IonButtons,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,

  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';
import './Scriptures.css';

const Scriptures: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
         <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>聖經經文</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">聖經經文</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList inset={true}>
          <IonItem>
            <IonLabel>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在，你的杖、你的竿都安慰我。」(詩篇 23:4)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。」(歌羅西書 3:13)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「你自己眼中有梁木，怎能對你弟兄說『容我去掉你眼中的刺』呢？」(馬太福音 7:4)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「約翰回答說：『有兩件衣裳的，就分給那沒有的，有食物的也當這樣行。』」(路加福音 3:11)</IonLabel>
          </IonItem>
          
          <IonItem>
            <IonLabel>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在，你的杖、你的竿都安慰我。」(詩篇 23:4)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。」(歌羅西書 3:13)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「你自己眼中有梁木，怎能對你弟兄說『容我去掉你眼中的刺』呢？」(馬太福音 7:4)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「約翰回答說：『有兩件衣裳的，就分給那沒有的，有食物的也當這樣行。』」(路加福音 3:11)</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在，你的杖、你的竿都安慰我。」(詩篇 23:4)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。」(歌羅西書 3:13)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「你自己眼中有梁木，怎能對你弟兄說『容我去掉你眼中的刺』呢？」(馬太福音 7:4)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>✞「約翰回答說：『有兩件衣裳的，就分給那沒有的，有食物的也當這樣行。』」(路加福音 3:11)</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Scriptures;
