
import './App.css';
import Header from "./views/Layout";
import Hero from "./views/Hero";
import Story from "./views/Story";
import Events from "./views/Events";
import Location from "./views/Location";
import RSVP from "./views/RSVP";
import Footer from "./views/Footer";
import { weddingData } from "./models/weddingModel";
import Layout from './views/Layout';



export default function App() {
  return (
    <div className="font-[Playfair_Display] text-gray-800">
      <Layout couple={weddingData.couple} />
      <Hero date={weddingData.date} city={weddingData.city} />
      <Story story={weddingData.story} />
      <Events events={weddingData.events} />
      <Location />
      <RSVP />
      <Footer couple={weddingData.couple} />
    </div>
  );
}