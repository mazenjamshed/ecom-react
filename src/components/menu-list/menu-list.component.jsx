import MenuItem from "../menu-item/menu-item.component";
import "./menu-list.styles.scss";

const MenuList = ({ sections }) => {
  return (
    <div className="menu__list">
      {sections.map(({ title, subtitle, id }) => (
        <MenuItem title={title} subtitle={subtitle} key={id}></MenuItem>
      ))}
    </div>
  );
};

export default MenuList;
