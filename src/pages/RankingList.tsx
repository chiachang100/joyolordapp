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
  IonIcon,
  IonImg,
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
import './RankingList.css';

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
    title: '1 勝過恐懼',
    subtitle: '✞「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在，你的杖、你的竿都安慰我。」(詩篇 23:4)',
    imageUrl: 'assets/images/xlcd/xlcdapp_photo_2.png',
    url: '/settings',
    buttonLabel: '✞神的道是有功效的',
    iosIcon: listCircleOutline,
    mdIcon: listCircleSharp,
    content: '🌞時事雜誌的主持人芭芭拉•華特斯（Barbara Watters），在阿富汗戰爭爆發前，到一個叫卡布（Kabul）的地方，做了一個有關兩性角色的主題故事。...',
  },
  {
    title: '2 愛的激勵',
    subtitle: '✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(哥林多後書 5:14)',
    imageUrl: 'assets/images/xlcd/xlcdapp_photo_1.png',
    url: '/settings',
    buttonLabel: '✞神的道是有功效的',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    content: '🌞老張在他生日時，收到好朋友送給他一隻會說話的鸚鵡，但這隻鸚鵡的態度很差，滿口都是髒話，不是罵人的話，就是一些粗話。...',
  },
  {
    title: '3 彼此饒恕',
    subtitle: '✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」(歌羅西書 3:13)',
    imageUrl: 'assets/images/xlcd/xlcdapp_photo_3.png',
    url: '/settings',
    buttonLabel: '✞神的道是有功效的',
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp,
    content: '🌞有一天，國文老師在上文課時，指定一個作文題目〈三十年後的我〉。以下是美的作文：...',
  },
];

const RankingList: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
         <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>喜樂榜</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">喜樂榜</IonTitle>
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

export default RankingList;
