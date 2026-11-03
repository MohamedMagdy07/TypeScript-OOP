abstract class Account {
    // I will leave a couple of none sensitive information as public
    // I used constructor here with parameters inside ,both do same exact just here a bit cleaner
    protected constructor(
        public readonly id: number,
        public name: string,
        public email: string,
        protected password: string,
        protected phone: string,
        public noteBooks: NoteBook[]
    ) {}

    public displayInfo(): void {
        console.log(`User ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }

    public addNotebook(noteBook: NoteBook): void {
        this.noteBooks.push(noteBook);
    }
}


class User extends Account {
    // we can make age private tho since it's not that big deal I will leave it be
    private readonly age: number

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number, noteBooks: NoteBook[]) {
        super(id,name,email,password,phone,noteBooks)

        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this.age = age;
    }

    public override displayInfo(): void {
        super.displayInfo();
        console.log(`Age: ${this.age}`);
    }


}

class Admin extends User {
    protected role: string = "admin";

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number, noteBooks: NoteBook[]) {
        super(id, name, email, password, phone, age,noteBooks);
    }

    public manageNotes(): void {
        console.log("Delete this at once")
    }
}

class Note {
    // I used constructor here with parameters outside ,both do same exact just here a bit longer
    public readonly id: number;
    public title: string;
    public content: string
    public userId: number; // References an instance of the User class

    constructor(id: number, title: string, content: string, userId: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    public preview(): void {
        let shortPreview: string = this.content.slice(0, 10);
        console.log("just a brief of the note : ");
        console.log(shortPreview + " ...");
    }

}

class NoteBook {
    public readonly id: number;
    public notes: Note[];

    constructor(id: number, notes: Note[]) {
        this.id = id;
        this.notes = notes;
    }

    public addNote(note:Note): void {
        this.notes.push(note);
    }

    public deleteNote(id: number): boolean {
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
            this.notes.splice(index, 1);
            return true;
        }
        return false;
    }
}

class MyStorage<T>{
    public readonly id: number;
    public items: T[];
    constructor(id: number, items: T[]) {
        this.id = id;
        this.items = items;
    }
    public addItem(item: T): void {
        this.items.push(item);
    }
    public deleteItem(value: T): boolean {
        const index = this.items.indexOf(value);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    public getAllItems():void {
        console.log(this.items);
    }
}

// I did use a package to create the diagram ,please have mercy😢