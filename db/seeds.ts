import db from "./index"
import { SecurePassword } from "@blitzjs/auth"
import {enrolledPersons} from "./enrolledPersons"
import {enrolledPersons2} from "./enrolledPersons2"
import { enrolledPersonsVip } from "./enrolledPersonsVip"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */



interface User { 
  email:string;
  name:string;
  hashedPassword:string;
}

const users: User[] = [
  {
    email: 'yohanoliva@gmail.com',
    name: 'yohan',
    hashedPassword: '12345678',
  },
  {
    email: 'sebastianmolina@gmail.com',
    name: 'sebastian',
    hashedPassword: '12345678',
  },
  {
    email: 'mauriciocespedesm83@gmail.com',
    name: 'mauricio',
    hashedPassword: '12345678',
  },
  {
    email: 'camilachacon@gmail.com',
    name: 'camila',
    hashedPassword: '12345678',
  },
  {
    email: 'rooneyinofuentes@gmail.com',
    name: 'rooney',
    hashedPassword: '12345678',
  },
  {
    email: 'alejandromontero1551@gmail.com',
    name: 'alejandro',
    hashedPassword: '12345678',
  },
  {
    email: 'nayelirodriguez@gmail.com',
    name: 'nayeli',
    hashedPassword: '12345678'
  },
  {
    email: 'sandravillagran@gmail.com',
    name: 'sandra',
    hashedPassword: '12345678',
  },
  {
    email: 'paola@gmail.com',
    name: 'paola',
    hashedPassword: '12345678',
  },
  {
    email: 'alejandracanido@gmail.com',
    name: 'alejandra',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario1@gmail.com',
    name: 'usuario1',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario2@gmail.com',
    name: 'usuario2',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario3@gmail.com',
    name: 'usuario3',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario4@gmail.com',
    name: 'usuario4',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario5@gmail.com',
    name: 'usuario5',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario6@gmail.com',
    name: 'usuario6',
    hashedPassword: '12345678',
  },
  {
    email: 'usuario7@gmail.com',
    name: 'usuario7',
    hashedPassword: '12345678',
  }
]

const seed = async () => {

  await db.user.deleteMany();
  users.forEach(async (user) => {
    let password = await SecurePassword.hash(user.hashedPassword);
    await db.user.create({
      data: {
        email: user.email,
        name: user.name,
        hashedPassword: password,
      }
    })
  })

  try{
    await db.enrolledPerson.deleteMany();

    await db.enrolledPerson.createMany({
      data: enrolledPersonsVip
    })

    await db.enrolledPerson.createMany({
      data: enrolledPersons
    })

    await db.enrolledPerson.createMany({
      data: enrolledPersons2
    })

  }catch(e){
    console.log(e);
  }
}

export default seed
