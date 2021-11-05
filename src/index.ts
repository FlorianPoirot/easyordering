import "reflect-metadata";
import {createConnection} from "typeorm";
import User from "./entity/User";

console.log('Hello')

createConnection().then(async _ => {
    console.log("Inserting a new user into the database...");
    const user: any = {
        firstName: "John",
        lastName: "Doe",
        age: 24
    };
    await User.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await User.findOne({ id: 1 });
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
