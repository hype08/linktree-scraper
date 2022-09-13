import got from 'got';
import { JSDOM } from 'jsdom';

const BASE_URI = 'https://www.linktr.ee/'

export default async function scraper(profile: string): Promise<any> {
  const response = await got(BASE_URI + profile);
  const document = new JSDOM(response.body).window.document;

  const dataNode = document.querySelectorAll('#__NEXT_DATA__')
  const linkTreeData = JSON.parse(dataNode[0].innerHTML)

  const accountData = linkTreeData['props']['pageProps']['account']

}

scraper('aaalpacaa_')