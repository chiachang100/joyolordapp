import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  homeOutline,
  homeSharp,
  listCircleOutline,
  listCircleSharp,
  newspaperOutline,
  newspaperSharp,
} from 'ionicons/icons';
import './NewList.css';

interface JoyRecord {
  title: string;
  subtitle: string;
  imageUrl: string,
  url: string;
  buttonLabel: string;
  iosIcon: string;
  mdIcon: string;
  content: string;
}

const joyRecords: JoyRecord[] = [
  {
    title: '不要以惡報惡',
    subtitle: '✞「不要以惡報惡。眾人以為美的事，要留心去做。」(羅馬書 12:17)',
    imageUrl: 'assets/images/xlcd/xlcdapp_photo_19.png',
    url: '/settings',
    buttonLabel: '✞神的道是有功效的',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    content: '🌞有一對姊妹，有一天在海邊撿到一個瓶子，兩人好奇地打開，竟然有一股煙冒出來，化成一個神仙，兩人嚇壞了，沒想到神仙居然開口說話：...',
  },
  {
    title: '要孝敬父母',
    subtitle: '✞「『要孝敬父母，使你得福，在世長壽。』這是第一條帶應許的誡命。」(以弗所書 6:2~3)',
    imageUrl: 'assets/images/xlcd/xlcdapp_photo_20.png',
    url: '/settings',
    buttonLabel: '✞神的道是有功效的',
    iosIcon: listCircleOutline,
    mdIcon: listCircleSharp,
    content: '🌞老楊在清明節時去買祭品，看到居然有紙糊的iphone，還是最新的iPhone 6，便問老闆說：...',
  },
  {
    title: '靈巧像蛇、馴良像鴿子',
    subtitle: '✞「我差你們去，如同羊進入狼群，所以你們要靈巧像蛇，馴良像鴿子。」(馬太福音 10:16)',
    imageUrl: 'assets/images/xlcd/xlcdapp_photo_00.png',
    url: '/settings',
    buttonLabel: '✞神的道是有功效的',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    content: '🌞國慶黃金週有對老夫婦要去南方看孫子，離家前擔心家中被偷盜，翻箱倒櫃不算，還會損壞傢俱。...',
  },
];

const NewList: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
         <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>新出爐</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">新出爐</IonTitle>
          </IonToolbar>
        </IonHeader>

        {joyRecords.map((joyRecord, index) => {
          return (
            <IonCard>
              <IonImg
                src={joyRecord.imageUrl}
                alt={joyRecord.title}>
              </IonImg>
              <IonCardHeader>
                <IonCardTitle>{joyRecord.title}</IonCardTitle>
                <IonCardSubtitle>{joyRecord.subtitle}</IonCardSubtitle>
              </IonCardHeader>
              {/*<IonIcon aria-hidden="true" ios={joyRecord.iosIcon} md={joyRecord.mdIcon} />*/}
              <IonCardContent>
                {joyRecord.content}
              </IonCardContent>
              <IonButton expand="block" fill="outline" href={joyRecord.url}>{joyRecord.buttonLabel}</IonButton>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default NewList;
