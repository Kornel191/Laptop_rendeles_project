import "./Reviews.css";

export default function Reviews() {
    const reviews = [
        {
            name: "Kovács Bence",
            rating: 5,
            text: "Nagyon elégedett vagyok a rendeléssel! Gyors szállítás és hibátlan laptop.",
            date: "2025-10-22"
        },
        {
            name: "Nagy Eszter",
            rating: 4,
            text: "Szép dizájn, jó teljesítmény. Egyetlen hátrány, hogy a csomag kissé késve érkezett.",
            date: "2025-09-12"
        },
        {
            name: "Tóth Márton",
            rating: 5,
            text: "A MacBook Air fantasztikus, teljesen megérte az árát!",
            date: "2025-08-30"
        },
        {
            name: "Farkas Dóra",
            rating: 3,
            text: "Az ügyfélszolgálat segítőkész volt, de a laptopon előre telepített szoftverek hiányoztak.",
            date: "2025-08-10"
        },
        {
            name: "Horváth Gábor",
            rating: 5,
            text: "Kiváló webáruház, a Razer laptop brutál erős! Csak ajánlani tudom.",
            date: "2025-07-15"
        },
    ];

    return (
        <div className="reviews">
            <h1>Vásárlói értékelések</h1>

            <div className="reviews__list">
                {reviews.map((review, index) => (
                    <div key={index} className="review__card">
                        <div className="review__header">
                            <strong>{review.name}</strong>
                            <span className="review__rating">
                                {"⭐".repeat(review.rating)}
                                {"☆".repeat(5 - review.rating)}
                            </span>
                        </div>
                        <p className="review__text">{review.text}</p>
                        <small className="review__date">{review.date}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
