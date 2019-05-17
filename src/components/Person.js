import React from "react";

const Person = props => {
  return (
    // renders as if react.fragment doesn't exist to avoid useless divs.
    <React.Fragment>
      <h1>{props.person.first_name}</h1>
    </React.Fragment>
  );
};

export default Person;