// Creating an In Memory Database

interface User {
    id: number
    fname: string
    lname: string
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
    private _db: Map<User['id'], User>
    constructor() {
        
    }
    public insertUser(data: User): Promise<>{
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`);
            
        }
        this._db(data.id, data)
    }
}