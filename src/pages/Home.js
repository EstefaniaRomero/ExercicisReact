import "./Home.css";
import Display from "../exercicis/Comptador/components/display/Display";
import Photo from "../exercicis/Graella/components/photo/Photo";

function Home() {
  return (
    <div className="div_pare">
      <Photo />
      <Display />
    </div>
  );
}

export default Home;
