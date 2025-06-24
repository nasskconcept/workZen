import './favorites.css';
import bibliwork from '../assets/bibliwork.jpg';
import cowork1 from '../assets/cowork1.jpg';

const favoritesData = [
  {
    id: 1,
    name: "Coworking Lille Centre",
    type: "Coworking",
    city: "Lille",
    distance: 0.5,
    price: 15,
    equipements: ["Prise", "Calme", "wifi", "Payant"],
    img: cowork1
  },
  {
    id: 2,
    name: "Bibliothèque Publique",
    type: "Bibliothèque",
    city: "Lille",
    distance: 1.3,
    price: 0,
    equipements: ["Prise", "Calme", "wifi"],
    img: bibliwork
  }
];

function Favoris() {
  return (
    <main className="favorites">
      <h1 className="favorites-title">Favoris</h1>
      <div className="favorites-list">
        {favoritesData.map(item => (
          <div className="favorites-card" key={item.id}>
            <div className="favorites-info">
              <span className="favorites-card-title">{item.name}</span>
              <div className="favorites-infos">
                <span className="favorites-type">Type&nbsp;: {item.type}</span>
                <span className="favorites-distance">Distance&nbsp;: {item.distance} km</span>
                <span className="favorites-price">
                  Prix&nbsp;: {item.price === 0 ? "0 €" : item.price + " €"}/heure
                </span>
                <span className="favorites-eqs-label">Équipements&nbsp;:</span>
                <div className="favorites-equipements">
                  {item.equipements.map((eq, i) => (
                    <span
                      key={i}
                      className="eq-badge"
                      data-eq={eq}
                    >{eq}</span>
                  ))}
                </div>
              </div>
            </div>
            <img src={item.img} alt={item.name} className="favorites-img" />
          </div>
        ))}
      </div>
      <button className="favorites-delete-btn">Supprimer</button>
    </main>
  );
}

export default Favoris;
