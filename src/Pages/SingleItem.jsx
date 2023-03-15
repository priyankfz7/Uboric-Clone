import React from "react";

const SingleItem = ({ image, name, price }) => {
  return (
    <div
      style={{
        textAlign: "justify",
        cursor: "pointer",
        padding: "12px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", marginBottom: "12px", height: "300px" }}
      />
      <div style={{ marginBottom: "12px", margin: "auto", fontSize: "14px" }}>
        <p>{name}</p>
      </div>
      <h2 style={{ color: "red" }}>{`₹${price}`}</h2>
    </div>
  );
};

export default SingleItem;
