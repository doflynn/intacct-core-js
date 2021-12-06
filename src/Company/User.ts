/**
 * @module Intacct/Core/Company
 */

export enum USER_TYPES {
    BUSINESS = "business user",
    EMPLOYEE = "employee user",
}

export enum USER_FIELDS {
    RECORDNO = "RECORDNO",
    LOGINID = "LOGINID",
    DESCRIPTION = "DESCRIPTION",
    ADMIN = "ADMIN",
    USERTYPE = "USERTYPE",
    VISIBLE = "VISIBLE",
    STATUS = "STATUS",
    CONTACTNAME = "CONTACTINFO.CONTACTNAME",
    PRINTAS = "CONTACTINFO.PRINTAS",
    FIRSTNAME = "CONTACTINFO.FIRSTNAME",
    LASTNAME = "CONTACTINFO.LASTNAME",
    EMAIL1 = "CONTACTINFO.EMAIL1",
}

/**
 * @interface
 */
export interface IUser {
    username: string;
    recordno: number;
    lastname: string;
    firstname: string;
    description: string;
    usertype: string;
    contactname: string;
    status: string;
}

/**
 * User represents a user account within Sage Intacct.
 *
 */
export class User implements IUser {
    /** @private */
    _username: string;
    get username(): string {
        return this._username;
    }
    set username(name: string) {
        this._username = name;
    }
    /** @private */
    _recordno: number;
    get recordno() {
        return this._recordno;
    }
    set recordno(num: number) {
        this._recordno = num;
    }
    /** @private */
    _status: string;
    get status() {
        return this._status;
    }
    set status(status: string) {
        this._status = status;
    }
    /** @private */
    _lastname: string;
    get lastname(): string {
        return this._lastname;
    }
    set lastname(name: string) {
        this._lastname = name;
    }
    /** @private */
    _firstname: string;
    get firstname(): string {
        return this._firstname;
    }
    set firstname(name: string) {
        this._firstname = name;
    }
    /** @private */
    _description: string;
    get description(): string {
        return this._description;
    }
    set description(desc: string) {
        this._description = desc;
    }
    /** @private */
    _usertype: string;
    get usertype() {
        return this._usertype;
    }
    set usertype(type: string) {
        let valid = false;
        this._usertype = type;
    }
    /** @private */
    _contactname: string;
    get contactname() {
        return this._contactname;
    }
    set contactname(name: string) {
        this._contactname = name;
    }

    /**
     *
     */
    constructor(user: IUser) {
        this.username = user.username;
        this.lastname = user.lastname;
        this.firstname = user.firstname;
        this.description = user.description;
        this.contactname = user.contactname;
        this.usertype = user.usertype;
        this.recordno = user.recordno;
        this.status = user.status;
    }

    // toJSON(): string {
    //     return JSON.stringify(this);
    // }
}
