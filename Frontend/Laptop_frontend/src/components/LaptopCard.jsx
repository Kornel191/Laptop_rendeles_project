import React from "react";

const LaptopCard = ({ laptop, addToCart }) => {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "1rem",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
            }}
        >
            <img
                src={laptop.image}
                alt={`${laptop.brand} ${laptop.model}`}
                style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "10px",
                }}
            />
            <h3>{laptop.brand} {laptop.model}</h3>
            <p> {laptop.price.toLocaleString()} Ft</p>
            <p style={{ color: laptop.stock > 0 ? "green" : "red" }}>
                {laptop.stock > 0 ? `${laptop.stock} db raktáron` : "Nincs készleten"}
            </p>
            <button
                onClick={() => addToCart(laptop)}
                disabled={laptop.stock === 0}
                style={{
                    padding: "8px 16px",
                    backgroundColor: laptop.stock === 0 ? "#aaa" : "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: laptop.stock === 0 ? "not-allowed" : "pointer",
                }}
            >
                Kosárba
            </button>
        </div>
    );
};

export default LaptopCard;
