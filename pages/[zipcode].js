import Component from './index.js'
import { API_KEY } from '../shared/constants.js'

export async function getServerSideProps (context) {
  const zipCode = context?.query?.zipcode

  if (!zipCode) {
    return {
      props: {}
    }
  }

  const url = `https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipCode}&distance=1&API_KEY=${API_KEY}`
  const res = await fetch(url)
  const result = await res.json()

  if (!result || !result.length) {
    return {
      props: {}
    }
  }

  const realResult = result.filter(object => object.ParameterName === 'PM2.5')[0] || { AQI: 0, Category: { Number: 0 } }

  return {
    props: {
      aqi: [realResult.AQI, realResult.Category.Number],
      zipCode
    }
  }
}

export default function Zip (props) {
  return <Component aqi={props.aqi} zipCode={props.zipCode} />
}
