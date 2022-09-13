import got from 'got';
import { JSDOM } from 'jsdom';

const BASE_URI = 'https://www.linktr.ee/'

export default async function scraper(profile: string): Promise<any> {
  const response = await got(BASE_URI + profile);
  const document = new JSDOM(response.body).window.document;

  const data = document.querySelectorAll('#__NEXT_DATA__')
  const accountData = JSON.parse(data[0].innerHTML)
  console.log('file: main.ts 😈😈😈 line 16 😈😈😈 scraper 😈😈😈 accountData', accountData['props']['pageProps']['account'])

}

scraper('aaalpacaa_')