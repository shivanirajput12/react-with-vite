import React from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";

//functional component

// const About = () => {
//   return (
//     <div className='about'>
//       <h1>About</h1>
//       <h2>hellooo about</h2>
//       <User name={"Shivani Rajput (function)"}/>
//       <UserClass name={"Shivani Rajput (class)"} location={"Indore"} contact={"shivi#234"}/>
//     </div>
//   )
// }

// export default About

// class based component

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log(" parent Render");
    return (
      <div className="about">
        <h1>About</h1>

        <h2>hellooo about</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Shivani Rajput (class)"}
          location={"Indore"}
          contact={"shivi#234"}
        />
        <User />
      </div>
    );
  }
}
export default About;
