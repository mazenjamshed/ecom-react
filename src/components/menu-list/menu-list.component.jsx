import MenuItem from "../menu-item/menu-item.component";
import "./menu-list.styles.scss";

const MenuList = ({ sections }) => {
  return (
    <div className="menu__list">
      {sections.map(({  id,...otherProps }) => (
        <MenuItem subtitle="shop now"  key={id} {...otherProps}></MenuItem>
      ))}
    </div>
  );
};

export default MenuList;
