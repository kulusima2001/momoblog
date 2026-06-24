import type { NewsItem } from "../../types/news";
import { news01 } from "./news-01";
import { news02 } from "./news-02";
import { news03 } from "./news-03";

export const news = [news02, news01, news03] satisfies NewsItem[];
