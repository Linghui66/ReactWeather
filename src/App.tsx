import TopNav from "./components/TopNav";
import Router from "./router";

export default function App() {
  return (
    <div className='min-h-screen bg-weather-primary'>
      <TopNav></TopNav>
      <Router/>
    </div>
  )
}
