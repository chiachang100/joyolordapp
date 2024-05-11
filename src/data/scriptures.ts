export interface Scripture {
  bibleBookName: string;
  bibleVerseChapter: string;
  bibleScriptureVerse: string;
  like: string;
  id: number;
}

const scriptures: Scripture[] = [
  {
    bibleBookName: '哥林多後書',
    bibleVerseChapter: '5:14',
    bibleScriptureVerse: '✞「原來基督的愛激勵我們，因我們想：一人既替眾人死，眾人就都死了；」',
    like: 'Like',
    id: 1
  },
  {
    bibleBookName: '詩篇',
    bibleVerseChapter: '23:4',
    bibleScriptureVerse: '✞「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在，你的杖、你的竿都安慰我。」',
    like: 'Like',
    id: 2
  },
  {
    bibleBookName: '歌羅西書',
    bibleVerseChapter: '3:13',
    bibleScriptureVerse: '✞「倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。」',
    like: 'Like',
    id: 3

  },
  {
    bibleBookName: '馬太福音',
    bibleVerseChapter: '7:4',
    bibleScriptureVerse: '✞「你自己眼中有梁木，怎能對你弟兄說『容我去掉你眼中的刺』呢？」',
    like: 'Like',
    id: 4
  },
  {
    bibleBookName: '路加福音',
    bibleVerseChapter: '3:11',
    bibleScriptureVerse: '✞「約翰回答說：『有兩件衣裳的，就分給那沒有的，有食物的也當這樣行。』」',
    like: 'Like',
    id: 5
  },
  {
    bibleBookName: '箴言，新譯本',
    bibleVerseChapter: '15:30',
    bibleScriptureVerse: '「眼中的光采使人心快樂；好消息使骨頭滋潤。」',
    like: 'Like',
    id: 5
  },
  {
    bibleBookName: '提摩太前書',
    bibleVerseChapter: '6:18',
    bibleScriptureVerse: '「又要囑咐他們行善，在好事上富足，甘心施捨，樂意供給(或譯:體貼)人。」',
    like: 'Like',
    id: 6
  },
  {
    bibleBookName: '羅馬書',
    bibleVerseChapter: '12:17',
    bibleScriptureVerse: '「不要以惡報惡。眾人以為美的事，要留心去做。」',
    like: 'Like',
    id: 19
  },
  {
    bibleBookName: '以弗所書',
    bibleVerseChapter: '6:2~3',
    bibleScriptureVerse: '「『要孝敬父母，使你得福，在世長壽。』這是第一條帶應許的誡命。」',
    like: 'Like',
    id: 20
  },
  {
    bibleBookName: '馬太福音',
    bibleVerseChapter: '10:16',
    bibleScriptureVerse: '「我差你們去，如同羊進入狼群，所以你們要靈巧像蛇，馴良像鴿子。」',
    like: 'Like',
    id: 21
  }
];

export const getScriptures = () => scriptures;

export const getScripture = (id: number) => scriptures.find(m => m.id === id);