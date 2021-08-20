import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((_, i) => i < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
