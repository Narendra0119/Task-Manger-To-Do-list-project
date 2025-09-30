const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req,res,next){
  const token = req.header('Authorization');
  if(!token) return res.status(401).json({ message: 'No token' });
  try{
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.id;
    next();
  }catch(err){
    res.status(401).json({ message: 'Invalid token' });
  }
}

router.get('/', auth, async (req,res)=>{
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

router.post('/', auth, async (req,res)=>{
  const { title, description, status } = req.body;
  const task = new Task({ title, description, status, user: req.user });
  await task.save();
  res.json(task);
});

router.put('/:id', auth, async (req,res)=>{
  const { title, description, status } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status }, { new:true });
  res.json(task);
});

router.delete('/:id', auth, async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
