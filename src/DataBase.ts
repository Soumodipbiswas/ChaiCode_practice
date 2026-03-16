// Creating an In Memory Database
type UserID = string;
interface User {
    id: UserID
    fname: string
    lname?: string
    email: string
    contact: {
        mobile: string
    }
    address: {
        street: number
        pin: number
        country: string
    }
}

class InMemoryDB {
    private _db: Map<UserID, User> = new Map<UserID, User>();
    public insertUser(data: User): UserID {
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`);
            
        }
        this._db.set(data.id, data);
        return data.id;
    }

    public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean {
        if (!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`)
        this._db.set(id, {...updateData, id});
        return true;
    }

    public getUserById(id: UserID): User {
        if (!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`)
        return this._db.get(id)!
    }
}

const myDb = new InMemoryDB()
myDb.insertUser ({
    id: '1',
    fname: 'Soumodip',
    lname: 'Biswas',
    email: 'soumodipbiswas80@gmail.com',
    contact: { mobile: '123498765'},
    address: {
        country: 'India',
        pin: 700065,
        street: 179
    }
});
myDb.updateUser ('1', {
    fname: 'Soumodip',
    lname: 'Biswas',
    email: 'soumodipbiswas80@gmail.com',
    contact: { mobile: '123498765'},
    address: {
        country: 'India',
        pin: 700065,
        street: 179
    }
});