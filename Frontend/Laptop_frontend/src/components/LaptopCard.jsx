import React from "react";

const LaptopCard = ({ laptop }) => {
    return (
        <div
            className="laptop-card"
            style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "1rem",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "0.2s",
                backgroundColor: "#fff",
            }}
        >
            <img
                src={laptop.image}
                alt={`${laptop.brand} ${laptop.model}`}
                width="220"
                height="160"
                style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    marginBottom: "10px",
                }}
            />

            <h3 style={{ margin: "0.5rem 0" }}>
                {laptop.brand} {laptop.model}
            </h3>

            <p style={{ margin: "0.2rem 0" }}>
                💰 <strong>{laptop.price.toLocaleString()} Ft</strong>
            </p>

            <p style={{ margin: "0.2rem 0", color: laptop.stock > 0 ? "green" : "red" }}>
                {laptop.stock > 0
                    ? `${laptop.stock} db raktáron`
                    : "Nincs készleten"}
            </p>

            <button
                disabled={laptop.stock === 0}
                style={{
                    marginTop: "10px",
                    padding: "8px 16px",
                    backgroundColor: laptop.stock === 0 ? "#aaa" : "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: laptop.stock === 0 ? "not-allowed" : "pointer",
                    transition: "0.2s",
                }}
            >
                Kosárba
            </button>
        </div>
    );
};

export default LaptopCard;
