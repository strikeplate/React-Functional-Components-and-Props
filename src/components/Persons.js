import React, { Component } from "react";
import Person from "./Person";

class Persons extends Component {
  // Initializing State for Persons Component
  state = {
    persons: [
      {
        id: 1,
        first_name: "Kalie",
        last_name: "Poundsford",
        email: "kpoundsford0@reference.com",
        gender: "Female"
      },
      {
        id: 2,
        first_name: "Joe",
        last_name: "Reynoollds",
        email: "jreynoollds1@mlb.com",
        gender: "Male"
      },
      {
        id: 3,
        first_name: "Amalea",
        last_name: "O'Cahsedy",
        email: "aocahsedy2@bing.com",
        gender: "Female"
      },
      {
        id: 4,
        first_name: "Lindsey",
        last_name: "Niblock",
        email: "lniblock3@google.com.hk",
        gender: "Female"
      },
      {
        id: 5,
        first_name: "Greer",
        last_name: "Dwight",
        email: "gdwight4@eepurl.com",
        gender: "Female"
      }
    ],
    mappedPerson: []
  };

  // Run when the Component first mounts
  componentDidMount() {
    this.showPersons();
  }

  // Set state.mappedPerson to an Array of "Person"s
  showPersons = () => {
    this.setState({
      mappedPerson: this.state.persons.map(this.mapPerson)
    });
  };

  // Returns element Person which has been passed a prop "person"
  mapPerson = person => <Person person={person} />;

  render() {
    // Render the full Array of Person elements which were each passed a different person by .map(mapPerson)
    return <div>{this.state.mappedPerson}</div>;
  }
}

export default Persons;
