import got from 'got';

const BASE_URI = 'https://www.linktr.ee/'

export default async function scraper(profile: string): Promise<any> {
  const response = await got(BASE_URI + profile);
  console.log('file: main.ts 😈😈😈 line 7 😈😈😈 scraper 😈😈😈 response', response)

}

scraper('aaalpacaa_')