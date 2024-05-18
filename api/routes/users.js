import express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUSer } from "../utils/verifyToken.js";

const router = express.Router();
/*
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user you are logged In")
})

router.get("/checkuser/:id", verifyUSer , (req,res,next)=>{
    res.send("hello user you are logged In and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin , (req,res,next)=>{
    res.send("hello admin you are logged In and you can delete all accounts")
})
*/

//update
router.put("/:id",verifyUSer, updateUser);
//delete
router.delete("/:id",verifyUSer, deleteUser);
//get
router.get("/:id",verifyUSer, getUser);
//get all
router.get("/",verifyAdmin ,getUsers);

export default router ;