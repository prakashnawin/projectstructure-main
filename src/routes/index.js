import { Router } from 'express';

/**
 * Contains all API routes for the application.
 */

const router = Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// For Get one User
router.get('/user/:id',(req, res)=>{
  let id=req.params.id;
  res.status(200).json({message:`get user id ${id}`})
})

//For Get All Users
router.get('/users',(req,res)=>{
  res.status(200).json({message:"get all users"})
})

//For Create User
router.post('/user', (req, res) => {
  res.status(200).json({message:'user created'})
})

//For Delete User
router.delete('/user/:id', (req, res) => {
  res.status(200).json({message:`delete user id ${req.params.id}`})
})

//For update user
router.put('/user/:id', (req, res) => {
  res.status(200).json({message:`update user id ${req.params.id}`})
})
module.exports = router;