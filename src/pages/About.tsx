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
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton default-href="#"></IonBackButton>
          </IonButtons>
          <IonTitle>資源簡介</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">資源簡介</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonImg
            src="assets/images/xlcd/xlcdapp_qrcode.png"
            alt="二維碼(QR Code)">
          </IonImg>
          <IonCardHeader>
            <IonCardTitle>二維碼(QR Code)</IonCardTitle>
            <IonCardSubtitle>二維碼(QR Code)'</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            請掃描二維碼(QR Code)便於使用xlcdapp(「笑裡藏道」App)。
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg
            src="assets/images/xlcd/xlcd_book_photo.png"
            alt="「笑裡藏道」書籍">
          </IonImg>
          <IonCardHeader>
            <IonCardTitle>「笑裡藏道」書籍介紹</IonCardTitle>
            <IonCardSubtitle>「笑裡藏道」，曾興才著，天恩出版社，2016年11月初版，2022第七版。'</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            「笑裡藏道」是曾興才牧師首本著作，收集了五十二篇他這些年於矽谷生命河靈糧堂主日證道中分享的精彩笑話及其中引申的經文應用。
              喜樂的心乃是良藥，這本讓人開懷大笑的好書，能使大家從幽默文字中領悟屬靈的道理，也為您打開與人分享真理的機會之門！
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg
            src="assets/images/xlcd/pastor_cheng_photo.png"
            alt="曾興才牧師: 「笑裡藏道」書籍作者">
          </IonImg>
          <IonCardHeader>
            <IonCardTitle>曾興才牧師: 「笑裡藏道」書籍作者</IonCardTitle>
            <IonCardSubtitle>曾興才牧師: 「笑裡藏道」書籍作者'</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            出生於馬來西亞，至英國及美國路易斯安那州攻讀建築學位。
              全職奉獻後於1990年獲得達拉斯神學院神學碩士，曾於德州阿靈頓聖經教會牧會。
              1995年返回馬來西亞擔任吉隆坡信義會主任牧師。
              2001年全家返美，加入「矽谷生命河靈糧堂」事奉團隊，目前負責牧養處事工。
              與師母 Connie 育有兩個女兒。
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg
            src="assets/images/xlcd/xlcdapp_photo_default.png"
            alt="讚揚「笑裡藏道」書籍">
          </IonImg>
          <IonCardHeader>
            <IonCardTitle>讚揚「笑裡藏道」書籍</IonCardTitle>
            <IonCardSubtitle>來，領受一份 「幽默感」的恩膏！ 累積你的笑話存款，提升你的親和指數，打開分享真理的機會之門！'</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  👍若同樣有功效，能用幽默的笑話，把神的道解明，豈不更好？鄭重推薦本書，幫助你分享真道，有笑果，更有效果！
                  (靈糧全球使徒性網絡主席 周神助)
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  👍幽默感能使我們從新的角度來看每天周遭發生的事，也使我們可以笑談自己的缺失，並接納別人的軟弱。事實上，幽默感能幫助我們的信仰 更人性化，使人更容易來親近神。
                  (美國加州矽谷生命河靈糧堂主任牧師 劉彤)
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  👍曾牧師這本書顛覆傳統，詮釋了矽谷的創新精神⋯⋯一個牧師寫本關於「笑」的書，就如同嚴肅人講笑話，講的時候常有意想不到的效果。
                  (矽谷創新頻道「丁丁電視」創辦人丁維平)
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  👍每篇短文都像是曾牧師喜歡的一杯好茶，初嚐不酸，再喝不澀，品完後喉韻甘醇，回味無窮。
                  (欣欣教育基金會教育顧問 廖本榮)
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  👍獨樂樂，不如眾樂樂。我預測你的朋友們會和你一樣，迫不及待地想要享受 《笑裡藏道》。所以，做一件讓他們大為開懷的事一一送他們一人一本吧！
                  (北加州全福會會長、優視頻道執行委員會主席 劉效宏)
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg
            src="assets/images/xlcd/joy_pray_thanks.png"
            alt="張嘉: 「笑裡藏道」App開發者">
          </IonImg>
          <IonCardHeader>
            <IonCardTitle>張嘉: 「笑裡藏道」App開發者</IonCardTitle>
            <IonCardSubtitle>張嘉: 「笑裡藏道」App開發者'</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            感謝主! 我一生一世如同聖經上應許:「有主的恩惠、慈愛隨著我!」出生於台灣，大學畢業，服完兵役，來美留學，完成電腦碩士及兼職完成企管碩士。
              1981年起即在矽谷電腦公司，從事多種電腦軟體工程開發。2023年從Microsoft退休。
              業餘時領受主的呼召及恩典，在教會裡擔任過多種事奉，傳主福音，跟隨耶穌，榮神益人。
              與妻子Judy目前領受主賜兒孫滿堂。
              祈求藉著「笑裡藏道」書籍+App為主多傳喜樂的福音，領人歸主。頌讚、榮耀歸於我們的神，直到永永遠遠！阿們。
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default About;
