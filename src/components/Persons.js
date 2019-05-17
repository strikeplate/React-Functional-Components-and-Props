import React, { Component } from "react";
import Person from "./Person";

class Persons extends Component {
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

  componentDidMount() {
    this.showPersons();
  }

  showPersons = () => {
    this.setState({
      mappedPerson: this.state.persons.map(this.mapPerson)
    });
  };

  mapPerson = person => <Person person={person} />;

  render() {
    return <div>{this.state.mappedPerson}</div>;
  }
}

export default Persons;
