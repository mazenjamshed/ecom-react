import MenuList from "../../components/menu-list/menu-list.component";
import "./homepage.styles.scss";
import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "men",
          id: 1,
          subtitle: "Shop Now",
        },
        {
          title: "women",
          id: 2,
          subtitle: "Shop Now",
        },
        {
          title: "hats",
          id: 3,
          subtitle: "Shop Now",
        },
        {
          title: "jackets",
          id: 4,
          subtitle: "Shop Now",
        },
        {
          title: "sneakers",
          id: 5,
          subtitle: "Shop Now",
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return <MenuList sections={sections}></MenuList>;
  }
}

export default HomePage;
