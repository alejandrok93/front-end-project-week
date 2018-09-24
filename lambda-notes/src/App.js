import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

//Import components
import NotesList from "./components/NotesList/NotesList";
import Menu from "./components/Menu/Menu";
import NewNote from "./components/NewNote/NewNote";
import NoteView from "./components/NoteView/NoteView";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "My thoughts...",
          content:
            "This is a note about my thoughts during recent travel adventure"
        },
        {
          id: 1,
          title: "Favorite quotes",
          content:
            "This note includes my favorite quotes from books, movies, songs, etc."
        }
      ]
    };
  }

  addNewNote(note) {
    if (note.title.length > 0) {
      console.log(this.state);
      const notes = [...this.state.notes];
      note.id = this.state.notes.length;
      notes.push(note);
      this.setState(...this.state, { notes });
    }
  }
  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <Menu />
        <div className="container">
          <Route
            exact
            path="/"
            render={() => (
              <NotesList {...this.props} notes={this.state.notes} />
            )}
          />
          <Route
            path="/notes/:id"
            render={props => {
              let id = props.match.params.id;
              return <NoteView note={this.state.notes[id]} />;
            }}
          />
          <Route
            path="/new"
            render={() => <NewNote addNewNote={this.addNewNote.bind(this)} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
