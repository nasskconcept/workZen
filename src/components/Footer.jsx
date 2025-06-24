import "./Footer.css";
function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} WorkZen. Tous droits réservés.</p>
        </footer>
    );
}
export default Footer;