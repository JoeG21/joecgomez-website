import React from "react";
import FooterCard from "./FooterCard";
import footerData from '../data/footerData'

const Footer = () => {
    return (
        <footer>
            <div className="footer-nav">
                <a href="/"> Home </a>
                <a href="/#about"> About </a>
                <a href="/projects"> Projects </a>
                <a href="/blogs"> Blogs </a>
                <a href="/contact"> Contact </a>
            </div>

            {footerData.map(data => <FooterCard key={data.id} data={data} />)}
        </footer>
    )
}

export default Footer