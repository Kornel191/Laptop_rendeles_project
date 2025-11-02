import { useState } from "react";
import "./Profile.css";

export default function Profile() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            alert(" Profil sikeresen létrehozva!");
            console.log("Mentett adatok:", data);

            setForm({
                name: "",
                email: "",
                password: "",
                phone: "",
                address: "",
            });
        } catch (error) {
            console.error(" Hiba a profil mentése közben:", error);
            alert("Hiba történt a mentés során!");
        }
    };

    return (
        <div className="profile">
            <h1>Felhasználói profil</h1>
            <form onSubmit={handleSubmit} className="profile__form">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Név" required />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="E-mail" required />
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Jelszó" required />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Telefonszám" />
                <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Cím" />
                <button type="submit" className="btn btn-success">Profil mentése</button>
            </form>
        </div>
    );
}
