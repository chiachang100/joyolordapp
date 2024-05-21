import { Scripture } from "./I_Scriptures";
import enUS from "./scriptures_en-US";
import zhCN from "./scriptures_zh-CN";
import zhTW from "./scriptures_zh-TW";

import i18n from "../../src/i18n/i18nMain";

let scriptures: Scripture[];
//export const getScriptures = () => scriptures;
export const getScriptures = () => {
    console.log("getScriptures(): i18n.global.locale.value = " + i18n.global.locale.value);
    switch (i18n.global.locale.value) {
        case "en-US": {
            scriptures = enUS;
            break;
        }
        case "zh-CN": {
            scriptures = zhCN;
            break;
        }
        case "zh-TW": {
            scriptures = zhTW;
            break;
        }
        default: {
            scriptures = zhTW;
            break;
        }
    }

    return scriptures;
}

// export const getScripture = (id: number) => scriptures.find(m => m.articleId === id);
export const getScripture = (id: number) => {
    console.log("getScriptures(id): i18n.global.locale.value = " + i18n.global.locale.value);
    return getScriptures().find(m => m.articleId === id);
}
