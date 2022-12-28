import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Dropdown from "../../components/dropdown";
import "./style.css";

function FeatureCarousel() {
  return <section className="featureCarousel"></section>;
}
export default function UserAuth() {
  const changeLanguage = () => {};
  return (
    <main className="userAuthPage">
      <section className="authFormContainer">
        <header>
          <Logo width={30} height={30} />
          <div className="pageActions">
            <Link to="/auth/guest">Guest</Link>
            <Dropdown
              defaultIndex={0}
              options={["English", "French", "Spanish"]}
              onChange={changeLanguage}
            />
          </div>
        </header>
        <Outlet />
      </section>
      <FeatureCarousel />
    </main>
  );
}
