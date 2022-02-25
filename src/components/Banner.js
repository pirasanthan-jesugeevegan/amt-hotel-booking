import React from 'react';
//import Hero from "../components/Hero";

export default function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1 data-testid="banner-title">{title}</h1>
      <div></div>
      <p data-testid="banner-subtitle">{subtitle}</p>
      {children}
    </div>
  );
}
