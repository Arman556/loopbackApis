import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    empid?: number;
    firstname: string;
    middlename?: string;
    lastname: string;
    email: string;
    phoneno: string;
    role: number;
    address: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
