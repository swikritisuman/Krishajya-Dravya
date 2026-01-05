import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CropForm from "./components/CropForm";
import Profile from "./components/Profile";
import ExploreSeason from "./components/ExploreSeason";




export default function App() {
  const [crops, setCrops] = useState(
    JSON.parse(localStorage.getItem("crops") || "[]")
  );

  function addCrop(newCrop) {
    const updated = [...crops, newCrop];
    setCrops(updated);
    localStorage.setItem("crops", JSON.stringify(updated));
  }

  return (
    <>
      <Header />
      <main className="container">
        <Dashboard crops={crops} />
        <CropForm onAdd={addCrop} />
        <ExploreSeason />
        <Profile />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Krishi Dravya — built for Farmers.</p>
        </div>
      </footer>
    </>
  );
}
