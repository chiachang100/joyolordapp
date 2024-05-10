import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonSplitPane,
} from '@ionic/react';
import { homeOutline, homeSharp, imageOutline, imageSharp, listOutline, listSharp, peopleOutline, peopleSharp, refreshCircleOutline, refreshCircleSharp, settingsOutline, settingsSharp } from 'ionicons/icons';

import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: '笑裡藏道',
    url: '/joys',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: '聖經經文',
    url: '/scriptures',
    iosIcon: listOutline,
    mdIcon: listSharp
  },
  {
    title: '個人設置',
    url: '/settings',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  },
  {
    title: '資源簡介',
    url: '/about',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: '相片存檔',
    url: '/photos',
    iosIcon: imageOutline,
    mdIcon: imageSharp
  },
  {
    title: '數據刷新',
    url: '/datarefresher',
    iosIcon: refreshCircleOutline,
    mdIcon: refreshCircleSharp
  },
];

const Menu: React.FC = () => {
  return (
      <IonMenu type='overlay' contentId="main">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>選單</IonListHeader>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>    
  );
};

export default Menu;
