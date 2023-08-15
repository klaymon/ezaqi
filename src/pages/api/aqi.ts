import type { NextApiRequest, NextApiResponse } from 'next';
import type { JsonResult } from '../../utils/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET' && req?.query?.zipcode) {
    const zipcode: string = Array.isArray(req?.query?.zipcode) ? req?.query?.zipcode[0] ?? '' : req?.query?.zipcode;
    if (zipcode) {
      const url = `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zipcode}&distance=25&API_KEY=9E5AECAD-C761-451C-861B-14F674DB9E45`;
      const response = await fetch(url);
      const result = (await response.json()) as [JsonResult];
      if (!result?.length) {
        return res.status(200).json('');
      }
      return res.status(200).json(result[0]);
    }
  }
  return res.status(200).json('');
}
