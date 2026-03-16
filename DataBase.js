"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDB {
    _db = new Map();
    insertUser(data) {
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`);
        }
        this._db.set(data.id, data);
        return data.id;
    }
    updateUser(id, updateData) {
        if (!this._db.has(id))
            throw new Error(`User with ID ${id} does not exists`);
        this._db.set(id, { ...updateData, id });
        return true;
    }
    getUserById(id) {
        if (!this._db.has(id))
            throw new Error(`User with ID ${id} does not exists`);
        return this._db.get(id);
    }
}
const myDb = new InMemoryDB();
myDb.insertUser({
    id: '1',
    fname: 'Soumodip',
    lname: 'Biswas',
    email: 'soumodipbiswas80@gmail.com',
    contact: { mobile: '123498765' },
    address: {
        country: 'India',
        pin: 700065,
        street: 179
    }
});
myDb.updateUser('1', {
    fname: 'Soumodip',
    lname: 'Biswas',
    email: 'soumodipbiswas80@gmail.com',
    contact: { mobile: '123498765' },
    address: {
        country: 'India',
        pin: 700065,
        street: 179
    }
});
//# sourceMappingURL=DataBase.js.map