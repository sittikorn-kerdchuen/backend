const express = require('express');
const quote = require('inspirational-quotes');
const db  = require('../model/db')


exports.Index = async (req,res) =>{
    res.send(quote.getQuote());
}

exports.Register = async (req, res, next) => {
    try {
      const usernames = await db.find().exec();
      res.json(usernames);
    } catch (err) {
      next(err);
    }
  };