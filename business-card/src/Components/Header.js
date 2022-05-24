import React from "react";
import profile from "../profile.jpg";
import "../style.css";

export default function Header() {
  return (
    <div>
      <img src={profile} className="profile-img" />
    </div>
  )
}
