import { AgentFunctionInfo, defaultTestContext } from "graphai";
import "dotenv/config";

import exaAgent from "../src/exa_agent";

const main = async () => {
  const result = await exaAgent.agent({
    ...defaultTestContext,
    namedInputs: {query: "日本の首都について"},
    params: {
      apiKey: process.env.APIKEY, search_args: {text: true}
    }, 
  });
  console.log(result);
};
/*
  {
  requestId: '2fcf4423340ba21ce858cbe7c1bb883b',
  autopromptString: '日本の首都について',
  resolvedSearchType: 'neural',
  results: [
    {
      id: 'https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E9%A6%96%E9%83%BD',
      title: '日本の首都 - Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E3%81%AE%E9%A6%96%E9%83%BD',
      publishedDate: '2024-05-21T12:30:04.000Z',
      author: 'Contributors to Wikimedia projects',
      favicon: 'https://ja.wikipedia.org/static/apple-touch/wikipedia.png'
    },
    {
      id: 'https://en.wikipedia.org/wiki/Capital_of_Japan',
      title: 'Capital of Japan',
      url: 'https://en.wikipedia.org/wiki/Capital_of_Japan',
      publishedDate: '2025-02-26T06:28:44.000Z',
      author: 'Contributors to Wikimedia projects'
    },
    {
      id: 'https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%83%BD',
      title: '東京都 - Wikipedia',
      url: 'https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%83%BD',
      publishedDate: '2025-04-24T10:23:32.000Z',
      author: 'ウィキメディアプロジェクトへの貢献者',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Tokyo_Station_Marunouchi_Building_P5228787.jpg/960px-Tokyo_Station_Marunouchi_Building_P5228787.jpg'
    },
    {
      id: 'https://newt.net/jpn/tokyo/mag-969403131',
      title: '日本の首都は東京！観光スポットや歴史についても詳しく解説 - NEWT',
      url: 'https://newt.net/jpn/tokyo/mag-969403131',
      author: null
    },
    {
      id: 'https://web-japan.org/kidsweb/explore/regions/q10.html',
      title: 'Capital - Kanto - Regions - Explore Japan - Kids Web Japan',
      url: 'https://web-japan.org/kidsweb/explore/regions/q10.html',
      publishedDate: '2019-01-01T00:00:00.000Z',
      author: ''
    },
    {
      id: 'https://en.wikipedia.org/wiki/Portal:Tokyo/Intro',
      title: 'Portal:Tokyo/Intro - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Portal:Tokyo/Intro',
      publishedDate: '2021-03-03T00:00:00.000Z',
      author: '',
      favicon: 'https://en.wikipedia.org/static/apple-touch/wikipedia.png'
    },
    {
      id: 'https://kanji.tools/column/kanji-for-tokyo/',
      title: 'Kanji for Tokyo  |  Kanji Tools',
      url: 'https://kanji.tools/column/kanji-for-tokyo/',
      publishedDate: '2025-04-28T00:00:00.000Z',
      author: '',
      image: 'https://kanji.tools/images/ogp.png'
    },
    {
      id: 'https://www.japan.travel/en/destinations/kanto/tokyo/',
      title: 'Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site)',
      url: 'https://www.japan.travel/en/destinations/kanto/tokyo/',
      publishedDate: '2024-03-30T00:00:00.000Z',
      author: '',
      image: 'https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24'
    },
    {
      id: 'https://en.wikipedia.org/wiki/Tokyo_(disambiguation)',
      title: 'Tokyo (disambiguation)',
      url: 'https://en.wikipedia.org/wiki/Tokyo_(disambiguation)',
      publishedDate: '2025-03-21T23:56:16.000Z',
      author: 'Contributors to Wikimedia projects'
    },
    {
      id: 'https://www.gotokyo.org/index.html',
      title: 'GO TOKYO The Official Tokyo Travel Guide',
      url: 'https://www.gotokyo.org/index.html',
      publishedDate: '2024-02-25T00:00:00.000Z',
      author: 'Tokyo Convention & Visitors Bureau.',
      image: 'https://www.gotokyo.org/shared/site_gotokyo/images/ogp/ogp.png?2025',
      favicon: 'https://www.gotokyo.org/shared/site_gotokyo_rn/images/favicon/favicon.ico'
    }
  ],
  searchTime: 1834.5,
  costDollars: { total: 0.005, search: { neural: 0.005 } }
  }
  */
main();
