import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
