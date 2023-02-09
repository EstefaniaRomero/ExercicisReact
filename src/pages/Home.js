import "./Home.css";
import Display from "../exercicis/Comptador/components/display/Display";
import Photo from "../exercicis/Graella/components/photo/Photo";
import Counter from "../exercicis/counter/Counter";
import Ping from "../exercicis/ping/Ping";
import Server from "../exercicis/Server/Server";

function Home() {
  return (
    <div className="div_pare">
      <Photo />
      <Display />
      <Counter />
      <Ping />
      <Server />
    </div>
  );
}

export default Home;
