class Account {
    id;
    name;
    email;
    password;
    phone;
    noteBooks;
    // I will leave a couple of none sensitive information as public
    // I used constructor here with parameters inside ,both do same exact just here a bit cleaner
    constructor(id, name, email, password, phone, noteBooks) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.noteBooks = noteBooks;
    }
    displayInfo() {
        console.log(`User ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }
    addNotebook(noteBook) {
        this.noteBooks.push(noteBook);
    }
}
class User extends Account {
    // we can make age private tho since it's not that big deal I will leave it be
    age;
    constructor(id, name, email, password, phone, age, noteBooks) {
        super(id, name, email, password, phone, noteBooks);
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this.age = age;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Age: ${this.age}`);
    }
}
class Admin extends User {
    role = "admin";
    constructor(id, name, email, password, phone, age, noteBooks) {
        super(id, name, email, password, phone, age, noteBooks);
    }
    manageNotes() {
        console.log("Delete this at once");
    }
}
class Note {
    // I used constructor here with parameters outside ,both do same exact just here a bit longer
    id;
    title;
    content;
    userId; // References an instance of the User class
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        let shortPreview = this.content.slice(0, 10);
        console.log("just a brief of the note : ");
        console.log(shortPreview + " ...");
    }
}
class NoteBook {
    id;
    notes;
    constructor(id, notes) {
        this.id = id;
        this.notes = notes;
    }
    addNote(note) {
        this.notes.push(note);
    }
    deleteNote(id) {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
            return true;
        }
        return false;
    }
}
class MyStorage {
    id;
    items;
    constructor(id, items) {
        this.id = id;
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    deleteItem(value) {
        const index = this.items.indexOf(value);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    getAllItems() {
        console.log(this.items);
    }
}
export {};
