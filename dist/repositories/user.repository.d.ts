import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.empid, UserRelations> {
    constructor(dataSource: PostgresDataSource);
}
