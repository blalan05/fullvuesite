import * as sitemap from 'super-sitemap';

export const GET = async () => {
  return await sitemap.response({
    origin: 'https://fullvue.io',
    additionalPaths: [
      'https://www.youtube.com/embed/S18ptA8cySc?si=4WbS5nHNeroPAlb1&rel=0',
      'https://www.youtube.com/embed/dBojug0hTr8?si=4WbS5nHNeroPAlb1&rel=0',
      'https://www.youtube.com/embed/jeWbM4vBzkE?si=4WbS5nHNeroPAlb1&rel=0',
      'https://www.youtube.com/embed/SYIZux4tCZU?si=m7nyVXzfQr239m0s&rel=0',
    ]
  });
};