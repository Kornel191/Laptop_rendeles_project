import "./LaptopCard.css";

export default function LaptopCard({ laptop, addToCart }) {
    return (
        <div className="card">
            <img
                className="card__img"
                src={`http://localhost:8000/${laptop.image}`}
                alt={`${laptop.brand} ${laptop.model}`}
            />
            <div className="card__body">
                <h3 className="card__title">{laptop.brand} {laptop.model}</h3>
                <div className="card__price">{Number(laptop.price).toLocaleString()} Ft</div>
                <div className={`card__stock ${laptop.stock > 0 ? "in" : "out"}`}>
                    {laptop.stock > 0 ? `${laptop.stock} db raktáron` : "Nincs készleten"}
                </div>
                <button
                    className="btn btn-primary card__btn"
                    disabled={laptop.stock === 0}
                    onClick={() => addToCart(laptop)}
                >
                    Kosárba
                </button>
            </div>
        </div>
    );
}
