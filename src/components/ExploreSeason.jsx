import { useState } from "react";
import "./ExploreSeason.css";

export default function ExploreSeason({ crops = [] }) {
  const [season, setSeason] = useState("Kharif");

  const filtered = crops.filter(
    crop => crop.season === season
  );

  return (
    <div className="explore">
      <h2>Explore Crops by Season</h2>

      <div className="season-tabs">
        {["Kharif", "Rabi", "Zaid"].map(s => (
          <button
            key={s}
            className={season === s ? "active" : ""}
            onClick={() => setSeason(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="crop-grid">
        {filtered.length === 0 ? (
          <p>No crops available for {season}</p>
        ) : (
          filtered.map(crop => (
            <div className="crop-card" key={crop.id}>
              <img src={crop.img} alt={crop.cropName} />
              <h3>{crop.cropName}</h3>
              <p>₹{crop.price}</p>
              <p>{crop.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
