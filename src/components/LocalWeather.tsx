import { ReactElement, useEffect, useRef, useState } from "react";
import { queryCityByIp, queryCityWeather } from "../api";

export default function LocalWeather(): ReactElement {
  const [city, setCity] = useState<string>();
  const [adcode, setAdcode] = useState<string>();
  //ref永远可以获取当前值的最新值
  const adcodeRef = useRef(adcode)
  useEffect(() => {
    async function main() {
      const res = await queryCityByIp();
        setCity(res.data.city);
        setAdcode(res.data.adcode);
        adcodeRef.current = res.data.adcode
        const weather = await queryCityWeather(adcodeRef.current as string);
        console.log(weather, 123);
    }
    main();
  }, []);
  return (
    <div className="flex gap-4 items-center">
      <h4 className="text-lg">{city}</h4>
      <span className="text-sm">实时天气:{adcode}</span>
      <span className="text-sm">风力</span>
    </div>
  );
}
