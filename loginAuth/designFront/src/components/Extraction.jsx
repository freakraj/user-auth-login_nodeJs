import logo from "../assets/no-results.png";
import './Extraction.css'

function Extraction() {
  return (
    <div className="card" style={{cursor:"pointer"}}>
      <img src={logo} alt="Card Image" className="card-image" />
      <div className="card-content" style={{marginLeft:"20px"}}>
        <h2 className="card-title">Extraction</h2>
        <p className="card-description">This is a sample card description.</p>
      </div>
    </div>
  );
}

export default Extraction;
