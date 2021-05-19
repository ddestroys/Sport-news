import * as axios from 'axios';

export const getHeader = (header = {}) => {
  return {
    ...header,
  };
};

const createMethod = (baseUrl, url, data, headers, method) => axios.create({baseURL: baseUrl}).request({url, data, method: method, headers: getHeader(headers)});

const GET = (baseUrl, url, data, headers) => createMethod(baseUrl, url, data, headers, 'GET');

async function makeCall(method, baseUrl, url, data, headers = {}) {
  let result = null;
  try {
    let resp = await method(baseUrl, url, data, headers);
    result = {
      data: resp.data,
      isError: false,
      url: url,
      arguments: data,
      base: baseUrl,
      response: resp,
    };
  } catch (e) {
    console.error(e);

    result = {
      data: e.response?.data,
      isError: true,
      url: url,
      arguments: data,
      base: baseUrl,
      response: e.response,
    };
  }
  return result;
}

const BASE_URL_NEWS = 'https://newsapi.org/';
const BASE_URL_RATES = 'https://www.nbrb.by/';

export const newsSearch = (category) => makeCall(GET, BASE_URL_NEWS, `/v2/top-headlines?country=gb&category=${category}&apiKey=a43c1a8678454235b5a15f2994a118e0`);
export const getExchangeRates = () => makeCall(GET, BASE_URL_RATES, `/api/exrates/rates?periodicity=0`);