import { Article } from "./I_Article";
import enUS from "./articles_en-US";
import zhCN from "./articles_zh-CN";
import zhTW from "./articles_zh-TW";

import i18n from "../../src/i18n/index";

let articles: Article[];
//export const getArticles = () => articles;
export const getArticles = () => {
    console.log("getArticles(): i18n.global.locale.value = " + i18n.global.locale.value);
    switch (i18n.global.locale.value) {
        case "en-US": {
            articles = enUS;
            break;
        }
        case "zh-CN": {
            articles = zhCN;
            break;
        }
        case "zh-TW": {
            articles = zhTW;
            break;
        }
        default: {
            articles = zhTW;
            break;
        }
    }

    return articles;
}

// export const getArticle = (id: number) => articles.find(m => m.articleId === id);
export const getArticle = (id: number) => {
    console.log("getArticle(id): i18n.global.locale.value = " + i18n.global.locale.value);
    return getArticles().find(m => m.articleId === id);
}
