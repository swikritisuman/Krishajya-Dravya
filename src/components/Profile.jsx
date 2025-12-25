import React, { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("farmerProfile")) || {}
  );

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem("farmerProfile", JSON.stringify(profile));
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  // If saved → hide form
  if (saved) {
    return (
      <section className="panel">
        <h2>Profile Saved ✅</h2>
        <p>Welcome, {profile.name}</p>
      </section>
    );
  }

  return (
    <section id="profile" className="panel">
      <div className="panel-head">
        <h2>My Profile</h2>
      </div>

      <form onSubmit={handleSubmit} className="card form-grid">
        <input
          value={profile.name || ""}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          placeholder="Full name"
        />

        <input
          value={profile.farm || ""}
          onChange={(e) => setProfile({ ...profile, farm: e.target.value })}
          placeholder="Farm name / Address"
        />

        <input
          value={profile.contact || ""}
          onChange={(e) =>
            setProfile({ ...profile, contact: e.target.value })
          }
          placeholder="Contact number"
        />

        <input
          value={profile.region || ""}
          onChange={(e) =>
            setProfile({ ...profile, region: e.target.value })
          }
          placeholder="Region / State"
        />

        <div className="form-actions">
          <button type="submit" className="btn primary">
            Save Profile
          </button>
        </div>
      </form>
    </section>
  );
}
