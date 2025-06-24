import { useState } from "react";
import "./search.css";
import coffeWork from '../assets/coffeWork.jpg';
import bibliwork from '../assets/bibliwork.jpg';
import cowork1 from '../assets/cowork1.jpg';
import buildingWork from '../assets/buildingWork.jpg';
import cowork2 from '../assets/cowork2.jpg';
import coffeSnackWork from '../assets/coffeSnackWork.jpg';

const fakeResults = [
  { id: 1, name: "Café Zen", type: "Café", city: "Lille", img: coffeWork, distance: 0.5, price: 2, equipements: ["Wifi", "Prises", "Terrase"] },
  { id: 2, name: "Bibliothèque Calme", type: "Bibliothèque", city: "Roubaix", img: bibliwork, distance: 1.2, price: 0, equipements: ["Wifi", "Silence", "Salle de lecture"] },
  { id: 3, name: "CoWork Plus", type: "Bureau", city: "Tourcoing", img: cowork1, distance: 0.8, price: 4, equipements: ["Wifi", "Prises", "Café offert"] },
  { id: 4, name: "Bureau Panoramique", type: "Bureau", city: "Lille", img: buildingWork, distance: 0.5, price: 17, equipements: ["Wifi", "Silence", "Prises", "Terrase", "Café offert"] },
  { id: 5, name: "CoWork District", type: "Café", city: "Roubaix", img: cowork2, distance: 1.2, price: 12, equipements: ["Wifi", "Prises", "Terrase", "Café"] },
  { id: 6, name: "Café Snack Work", type: "Café", city: "Marcq", img: coffeSnackWork, distance: 1.5, price: 2, equipements: ["Wifi", "Prises", "Terrase", "Café", "Manger"] },
];

function Search() {
  const [filterType, setFilterType] = useState('');
  const [eqWifi, setEqWifi] = useState(false);
  const [eqPrises, setEqPrises] = useState(false);
  const [eqCalme, setEqCalme] = useState(false);
  const [sortBy, setSortBy] = useState('distance');
  const [results, setResults] = useState(fakeResults);

  function handleFilterApply(e) {
    e.preventDefault();
    let filtered = fakeResults.filter(item =>
      (filterType === "" || item.type === filterType)
      && (!eqWifi || item.equipements.some(eq => eq.toLowerCase().includes("wifi")))
      && (!eqPrises || item.equipements.some(eq => eq.toLowerCase().includes("prise")))
      && (!eqCalme || item.equipements.some(eq => eq.toLowerCase().includes("calme") || eq.toLowerCase().includes("silence")))
    );

    if (sortBy === "distance") {
      filtered = filtered.slice().sort((a, b) => a.distance - b.distance);
    } else if (sortBy === "prix_asc") {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === "prix_desc") {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }

    setResults(filtered);
  }

  return (
    <main className="search">
      <div className="search-container">
        <form className="filters-bar" onSubmit={handleFilterApply}>
          <div className="filters-group">
            <span className="filters-title">Type d’espace</span>
            <label>
              <input type="radio" name="type" value="" checked={filterType === ""} onChange={() => setFilterType("")} /> Tous
            </label>
            <label>
              <input type="radio" name="type" value="Bureau" checked={filterType === "Bureau"} onChange={() => setFilterType("Bureau")} /> Coworking
            </label>
            <label>
              <input type="radio" name="type" value="Bibliothèque" checked={filterType === "Bibliothèque"} onChange={() => setFilterType("Bibliothèque")} /> Bibliothèque
            </label>
            <label>
              <input type="radio" name="type" value="Café" checked={filterType === "Café"} onChange={() => setFilterType("Café")} /> Café
            </label>
          </div>
          <div className="filters-group">
            <span className="filters-title">Équipements</span>
            <label>
              <input type="checkbox" checked={eqWifi} onChange={() => setEqWifi(!eqWifi)} /> Wi-Fi
            </label>
            <label>
              <input type="checkbox" checked={eqPrises} onChange={() => setEqPrises(!eqPrises)} /> Prises électriques
            </label>
            <label>
              <input type="checkbox" checked={eqCalme} onChange={() => setEqCalme(!eqCalme)} /> Calme garanti
            </label>
          </div>
          <div className="filters-group">
            <span className="filters-title">Trier par</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="distance">Distance (près → loin)</option>
              <option value="prix_asc">Prix (moins cher → plus cher)</option>
              <option value="prix_desc">Prix (plus cher → moins cher)</option>
            </select>
            <button className="filters-apply-btn" type="submit">Appliquer</button>
          </div>
        </form>

        <div className="results-scroll">
          {results.length === 0 ? (
            <div className="search-empty">Aucun résultat pour le moment.</div>
          ) : (
            results.map((item) => (
              <div className="result-card" key={item.id}>
                <div className="result-info-col">
                  <span className="result-title">{item.name}</span>
                  <div className="result-infos">
                    <span className="result-type">{item.type}</span>
                    <span className="result-city">{item.city}</span>
                    <span className="result-distance">{item.distance} km</span>
                    <span className="result-price">
                      {item.price === 0 ? "Gratuit" : item.price + " € /heure"}
                    </span>
                  </div>
                  <div className="result-equipements">
                    {item.equipements.map((eq, i) => (
                      <span
                        key={i}
                        className="equipement"
                        data-eq={eq.split(" ")[0]}
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
                <img src={item.img} alt={item.name} className="card-img-horizontal" />
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Search;
