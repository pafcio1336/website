import Button from "../Button/Button";
import "./Navigation.scss";
function Navigation() {
  return (
    <div className="nav">
      <div className="nav__name">
        <span className="nav__name nav__name-color">Paweł</span>
        <span className="nav__name nav__name-white">Leszczyński</span>
      </div>
      <Button navTitle="Home" />
      <Button navTitle="About me" />
      <Button navTitle="Skill" />
      <Button navTitle="Projects" />
      <Button navTitle="Contact" />
    </div>
  );
}
export default Navigation;
