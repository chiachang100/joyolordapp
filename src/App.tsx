import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, homeSharp, listCircleSharp, listCircleOutline, newspaperOutline, newspaperSharp } from 'ionicons/icons';
import About from './pages/About';
import DataRefresher from './pages/DataRefresher';
import Joys from './pages/Joys';
import Menu from './components/Menu';
import NewList from './pages/NewList';
import Photos from './pages/Photos';
import RankingList from './pages/RankingList';
import Scriptures from './pages/Scriptures';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Palette
 * -----------------------------------------------------
 * For more information, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/react/css/palettes/dark.always.css';
// import '@ionic/react/css/palettes/dark.class.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

interface AppPage {
  tab: string;
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    tab: 'joys',
    title: '笑裡藏道',
    url: '/joys',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    tab: 'rankinglist',
    title: '喜樂榜',
    url: '/rankinglist',
    iosIcon: listCircleOutline,
    mdIcon: listCircleSharp
  },
  {
    tab: 'newlist',
    title: '新出爐',
    url: '/newlist',
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp
  },
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/joys" />
          </Route>
          <Route exact path="/joys">
            <Joys />
          </Route>
          <Route exact path="/scriptures">
            <Scriptures />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/rankinglist">
            <RankingList />
          </Route>
          <Route exact path="/newlist">
            <NewList />
          </Route>
          <Route exact path="/photos">
            <Photos />
          </Route>
          <Route exact path="/datarefresher">
            <DataRefresher />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {appPages.map((appPage, index) => {
            return (
              <IonTabButton tab={appPage.tab} href={appPage.url}>
                <IonIcon aria-hidden="true" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonTabButton>
            );
          })}          
        </IonTabBar>
        {/*
        <IonTabBar slot="bottom">
          <IonTabButton tab="joys" href="/joys">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>笑裡藏道</IonLabel>
          </IonTabButton>
          <IonTabButton tab="scriptures" href="/scriptures">
            <IonIcon aria-hidden="true" icon={listOutline} />
            <IonLabel>聖經經文</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>設定</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={peopleOutline} />
            <IonLabel>關於</IonLabel>
          </IonTabButton>
          <IonTabButton tab="photos" href="/photos">
            <IonIcon icon={imageOutline} />
            <IonLabel>相片</IonLabel>
          </IonTabButton>
        </IonTabBar>
        */}
      </IonTabs>
    </IonReactRouter>
    <Menu />
  </IonApp>
);

export default App;
