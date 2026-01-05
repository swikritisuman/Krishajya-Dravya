import React, { useState } from "react";

export default function CropForm({ onAdd }) {
  const [preview, setPreview] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return setPreview("");
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  }

  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const newCrop = {
      id: Date.now(),
      name: data.get("name") || "Unnamed",
      qty: Number(data.get("qty") || 0),
      price: Number(data.get("price") || 0),
      location: data.get("location") || "",
      img: preview,
    };
    onAdd?.(newCrop);
    e.target.reset();
    setPreview("");
  }

  return (
    <section id="add-crop" className="panel">
      <div className="panel-head">
        <h2>Add New Crop</h2>
      </div>

      <form onSubmit={submit} className="form-grid card">
        <input
          name="name"
          type="text"
          placeholder="Crop name (e.g., Tomatoes)"
          required
        />
        <input name="qty" type="number" placeholder="Quantity (kg)" required />
        <input name="price" type="number" placeholder="Price per kg (₹)" />
        <input name="location" type="text" placeholder="Location" />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleFile}
        />
        <div className="preview-wrap">
          {preview && <img src={preview} alt="preview" />}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn primary">
            Add Crop
          </button>
          <button
            type="reset"
            className="btn outline"
            onClick={() => setPreview("")}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
