import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

export class AnalyticsService {
  private analyticsEnabled = true;

  constructor() {
    console.log('analytics.service: constructor');
  }

  setEnabled = async ({ enabled }: { enabled: boolean }) => {
    await FirebaseAnalytics.setEnabled({
      enabled: enabled,
    });
  };

  isEnabled = async () => {
    const { enabled } = await FirebaseAnalytics.isEnabled();
    return enabled;
  };

  toggleAnalytics() {
    this.analyticsEnabled = !this.analyticsEnabled;    
    this.setEnabled({ enabled: this.analyticsEnabled });
  }

  setUserId = async ({ userId }: { userId: string }) => {
    await FirebaseAnalytics.setUserId({
      userId: userId,
    });
  };

  setUserProperty = async ({ key, value }: { key: string, value: string }) => {
    await FirebaseAnalytics.setUserProperty({
      // key: 'language',
      // value: 'en',
      key: key,
      value: value,
    });
  };

  setCurrentScreen = async ({ screenName, screenClassOverride }:
    { screenName: string, screenClassOverride: string }) => {
      await FirebaseAnalytics.setCurrentScreen({
        // screenName: 'Login',
        // screenClassOverride: 'LoginPage',
        screenName: screenName,
        screenClassOverride: screenClassOverride,
      });
  };

  // Log custom events
  logEvent = async ({ name, parameters }:
    { name: string, parameters: object }) => {
    await FirebaseAnalytics.logEvent({
      // name: 'screen_view',
      // params: {
      //  joyolordapp_screen: 'MainAppScreen',
      //  joyolordapp_screen_class: 'Main',
      // },
      name: name,
      params: parameters,
    });
  };

  setSessionTimeoutDuration = async ({ duration }: { duration: number }) => {
    await FirebaseAnalytics.setSessionTimeoutDuration({
      // duration: 120,
      duration: duration,
     });
  };

  // setAppVersion = async ({ version }: { version: string }) => {
  //   FirebaseAnalytics.setAppVersion(version);
  // }
  
  resetAnalyticsData = async () => {
    await FirebaseAnalytics.resetAnalyticsData();
  };
}

