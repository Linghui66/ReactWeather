import { Config } from "../enum";
import request from "./axios";
import { AxiosResponse } from "axios";
//通过ip地址查询城市和adcode
export const queryCityByIp: () => Promise<AxiosResponse> = () => {
  return request.get(`/ip?key=${Config.WEATHER_KEY}`);
};
//通过adcode查询城市天气
export const queryCityWeather: (adcode: string) => Promise<AxiosResponse> = (
  adcode: string
) => {
  return request.get(
    `/weather/weatherInfo?key=${Config.WEATHER_KEY}&city=${adcode}`
  );
};
//...
