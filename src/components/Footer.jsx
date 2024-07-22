import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-4 sm:p-6 md:p-8 lg:p-12">
        <aside className="max-w-md">
          <div className="w-[50px] h-[50px]">
            <img src={logo} alt="logo" className="h-full w-full" />
          </div>
          <p className="text-base">
            We have an exceptional range of services to help you. Keeping in
            view various necessities of our honoured clients, we provide
            creative designing services. We give our best efforts to design your
            dreams.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">SERVICES</h6>
          <Link to={"/"} className="link link-hover text-base">
            Interior Design
          </Link>
          <Link to={"/"} className="link link-hover text-base">
            Architecture Design
          </Link>
          <Link to={"/"} className="link link-hover text-base">
            Space Planning
          </Link>
          <Link to={"/"} className="link link-hover text-base">
            Design Consultation
          </Link>
          <Link to={"/"} className="link link-hover text-base">
            Renovation and Remodeling
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">FOLLOW US</h6>
          <Link to={"/"} className="link link-hover text-base">
            Facebook
          </Link>
          <Link to={"/"} className="link link-hover text-base">
            Instagram
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">LEGAL</h6>
          <Link to={"/"} className="link link-hover text-base">
            Privacy policy
          </Link>
          <Link to={"/"} className="link link-hover text-base">
            Cookie policy
          </Link>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-200 text-base-content p-4 border-t-2">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mansha Interiors
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
