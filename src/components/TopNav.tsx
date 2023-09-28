import { ReactElement } from "react";
import LocalWeather from "./LocalWeather";

export default function TopNav(): ReactElement {
  return (
    <div className="bg-weather-primary shadow-lg sticky top-0 z-10">
      <nav className="container flex flex-row items-center gap-4 text-white py-6">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-sun text-2xl"></i>
          <p className="text-2xl">新中地天气</p>
        </div>
        <LocalWeather/>
      </nav>
    </div>
  );
}
