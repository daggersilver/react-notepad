import './App.css';
import react from "react";
import Navbar from './components/Navbar';
import CreateNew from './components/CreateNew';
import NoteBox from './components/NoteBox';
import Edit from './components/Edit';
import Footer from './components/Footer';
class App extends react.Component {
	constructor(props){
		super(props);

		this.state = {
			ids: 0,
			notes: [],
			createNew: false,
			edit: false,
			currEdit: null,
			color: ["rgb(6, 112, 6)",
					 "rgb(13, 23, 173)",
					 "rgb(42, 45, 85)",
					 "rgb(1, 117, 108)",
					 "rgb(212, 139, 4)",
					 "rgb(212, 4, 4)",
					 "rgb(182, 8, 138)",
					 "rgb(90, 5, 69)"
					]
		}

		this.createNew = this.createNew.bind(this);
		this.addNote = this.addNote.bind(this);
		this.updateStore = this.updateStore.bind(this);
		this.editNote = this.editNote.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.updateNote = this.updateNote.bind(this);
	}

	componentDidMount (){
		if(!localStorage.getItem("z-notes")){
			localStorage.setItem("z-notes", JSON.stringify([0, []]));
		}
		let info = JSON.parse(localStorage.getItem("z-notes"));

		this.setState({
			ids: info[0],
			notes: info[1]
		});
	}

	createNew (){
		this.setState((state)=>({
			createNew: !state.createNew
		}))
	}

	addNote(data){
		let note = {id: this.state.ids, content: data, color: this.state.color[Math.floor(Math.random() * this.state.color.length)]};
		this.setState((state)=>({
			ids: state.ids + 1,
			notes: [...state.notes, note],
		}), this.updateStore)
		
	}

	editNote(id, text){
		this.setState((state)=>({
			edit: !state.edit,
			currEdit: {
				id: id,
				text: text
			}
		}))
	}

	updateNote(id, text){
		let updated = this.state.notes.map((obj)=>{
			if(obj.id === id){
				let newObj = obj;
				newObj.content = text;
				return newObj
			}
			return obj;
		});
		this.setState((state)=>({
			notes: updated
		}), this.updateStore);
		
		this.setState((state)=>({
			edit: !state.edit,
			currEdit: null
		}))
	}

	deleteNote(id){
		let updated = this.state.notes.filter((obj)=>{
			return obj.id !== id;
		})
		this.setState((state)=>({
			notes: updated
		}), this.updateStore)

		this.setState((state)=>({
			edit: !state.edit,
			currEdit: null
		}))
	}

	updateStore(){
		localStorage.setItem("z-notes", JSON.stringify([this.state.ids,this.state.notes]));
	}

	render(){
		return (
			<div className="App">
				<Navbar createNew={this.createNew} />
				{this.state.createNew ? <CreateNew 
											createNew={this.createNew}
											addNote={this.addNote}
											/> : 
				this.state.edit ? <Edit
										id={this.state.currEdit.id}
										updateNote={this.updateNote}
										deleteNote={this.deleteNote}
										text={this.state.currEdit.text}
										/> : null}
				<NoteBox notes={this.state.notes} editNote={this.editNote} />
				<Footer />
			</div>
		);
	} 
}

export default App;
