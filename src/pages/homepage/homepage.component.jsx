import MenuList from "../../components/menu-list/menu-list.component";
import "./homepage.styles.scss";
import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
          size: "",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
          size: "",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
          size: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          linkUrl: "shop/womens",
          size: "large",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          linkUrl: "shop/mens",
          size: "large",
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="homepage">
        <MenuList sections={sections}></MenuList>
      </div>
    );
  }
}

export default HomePage;
