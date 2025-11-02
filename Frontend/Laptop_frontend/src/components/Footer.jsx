import "./Footer.css";

export default function Footer() {

    const PHONE = "+36 20 284 1207";
    const EMAIL = "info@laptoparuhaz.hu";
    const ADDRESS_TEXT = "1051 Budapest, Fő utca 1.";
    const ADDRESS_MAPS =
        "https://www.google.com/maps?q=1051+Budapest,+Fő+utca+1";

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__brand">Laptop Áruház</div>

                <div className="footer__grid">
                    <div className="footer__block">
                        <div className="footer__heading">Elérhetőség</div>
                        <a className="footer__link" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                            {PHONE}
                        </a>
                        <a className="footer__link" href={`mailto:${EMAIL}`}>
                            {EMAIL}
                        </a>
                    </div>

                    <div className="footer__block">
                        <div className="footer__heading">Helyszín</div>
                        <a
                            className="footer__link"
                            href={ADDRESS_MAPS}
                            target="_blank"
                            rel="noreferrer"
                            title="Megnyitás Google Térképen"
                        >
                            {ADDRESS_TEXT}
                        </a>
                    </div>
                </div>

                <div className="footer__copy">
                    {new Date().getFullYear()} Laptop Áruház - Minden jog fenntartva
                </div>
            </div>
        </footer>
    );
}
