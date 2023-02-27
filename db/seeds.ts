import db from "./index"
import { SecurePassword } from "@blitzjs/auth"
import {enrolledPersons} from "./enrolledPersons"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */


const users = [
  {
    email: 'avivamiento@gmail.com',
    name: 'alejandro',
    hashedPassword: '12345678',
  }
]

const seed = async () => {
  for(const user of users){
    if(user){
      const password = await SecurePassword.hash(user.hashedPassword)
      await db.user.create({
        data:{
          email: user.email,
          name: user.name,
          hashedPassword: password,
        }
      })
    }
  }

  try{
    await db.enrolledPerson.createMany({
      data: enrolledPersons
    })
  }catch(e){
    console.log(e);
  }
}

export default seed
