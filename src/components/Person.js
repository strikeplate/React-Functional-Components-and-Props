import React from "react";

const Person = props => {
  return (
    // <React.Fragment> can be used as a container that isn't rendered with the rest of the html to help avoid valleys of useless <div>'s
    <React.Fragment>
      {/* props is passed down by the parent element (Persons in this case) when the functional component is called */}
      {/* In this case, the props that got passed included the person object, so here we get the first_name of that person for rendering */}
      <h1>{props.person.first_name}</h1>
    </React.Fragment>
  );
};

export default Person;
