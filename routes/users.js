import express from 'express';
import { createUser, deleteUser, foundUser, getUser, UpdateUser } from '../controllers/users.js';


// initializing the router
const router = express.Router();


// * all routes from here are starting from /users
router.get('/',getUser);

//
router.post('/',createUser);

// --> /users/2 => req.params = {id : 2}
router.get("/:id",foundUser);

// deleting
router.delete("/:id",deleteUser);

// updating 
router.patch("/:id",UpdateUser);

// exporting so that we can use it in index.js
export default router;