class User {

    // I will leave a couple of none sensitive information as public
    // we can make age private tho since it's not that big deal I will leave it be ( it's
    protected id: number;
    public name: string;
    public email: string;
    protected password: string;
    protected phone: string;
    private readonly age: number;

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone

        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this.age = age;
    }

    public displayInfo(): void {
        console.log(`User ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }
}

class Admin extends User {
    protected role:string = "admin";
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age);
    }

    public manageNotes(): void {
        console.log("Delete this at once")
    }
}

class Note {
    protected id: number;
    public title: string;
    public content: string
    public userId: User; // References an instance of the User class

    constructor(id: number, title: string, content: string, userId: User) {
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
    class NoteBook{
        public id: number;
        public notes: Note[];
        constructor(id: number, notes: Note[]) {
            this.id = id;
            this.notes = notes;
        }
    }