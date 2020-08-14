import React from "react";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>User Name</h1>
        <p className="setMargin">User Bio Lorem Ipsum Bio</p>
        <p>Lorem IpsumUser Bio Lorem Ipsum</p>
      </div>
      <div>
        <Button>Create New Tweet</Button>
      </div>
    </div>
  );
};
export default Header;
