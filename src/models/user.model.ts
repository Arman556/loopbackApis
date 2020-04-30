import {Entity, model, property} from '@loopback/repository';
@model({
  settings: {
    postgresql: {
      table: 'user',
    },
  },
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  empid?: number;
  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'firstname',
      dataType: 'varchar(30)',
    },
  })
  firstname: string;
  @property({
    type: 'string',
    postgresql: {
      columnName: 'middlename',
      dataType: 'varchar(30)',
    },
  })
  middlename?: string;
  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'lastname',
      dataType: 'varchar(30)',
    },
  })
  lastname: string;
  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      format: 'email',
      errorMessage: 'Invalid Email',
    },
    postgresql: {
      columnName: 'email',
      dataType: 'varchar(50)',
    },
  })
  email: string;
  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'phoneno',
      dataType: 'varchar(20)',
    },
  })
  phoneno: string;

  @property({
    type: 'number',
    required: true,
  })
  role: number;

  @property({
    type: 'string',
    required: true,
  })
  address: string;
  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
