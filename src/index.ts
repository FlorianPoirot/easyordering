import 'reflect-metadata';
import User from './entity/User';
import { createConnection } from 'typeorm';

createConnection()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const user: any = {
      firstName: 'John',
      lastName: 'Doe',
    };
    await User.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await User.findOne({ id: 1 });
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch((error) => console.log(error));
