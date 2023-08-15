import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query && req.query?.zipcode) {
      const url = `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${req.query?.zipcode}&distance=10&API_KEY=9E5AECAD-C761-451C-861B-14F674DB9E45`;
      const response = await fetch(url);
      const result = await response.json();
      console.log('result', result);
      if (!result || !result.length) {
        return res.status(200).json('');
      }
      return res.status(200).json(result[0]);
    }
  }
  console.log('else');
  return res.status(200).json('');
}
