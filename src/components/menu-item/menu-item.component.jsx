import './menu-item.styles.scss';

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <h3 className='subtitle'>{subtitle.toUpperCase()}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
