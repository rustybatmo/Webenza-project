import react from "react";
import "./content.styles.css";

const FriendsContent = () => {
  return (
    <div className="content">
      <h1 className="heading1">Friends Content</h1>
      <div className="paragraph">
        This example is a quick exercise to illustrate how the default, static
        and fixed to top navbar work. It includes the responsive CSS and HTML,
        so it also adapts to your viewport and device.
      </div>
      <div className="paragraph">
        To see the difference between static and fixed top navbars, just scroll.
      </div>
      <button>View navbar docs </button>
    </div>
  );
};

export default FriendsContent;
