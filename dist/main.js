class User {
    // I will leave a couple of none sensitive information as public
    // we can make age private tho since it's not that big deal I will leave it be ( it's
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60.");
        }
        this.age = age;
    }
    displayInfo() {
        console.log(`User ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Age: ${this.age}`);
    }
}
class Admin extends User {
    role = "admin";
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log("Delete this at once");
    }
}
class Note {
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
}
export {};
