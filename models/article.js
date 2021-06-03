var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({ 
 
title: 
   {type: String, required: true}, 
author: 
   {type: String, required: true},
createdAt:
   {type: Date, default: Date.now},
description:
   {type: String}, 
content:
   {type: String, required: true}
}); 
module.exports = mongoose.model('Article', articleSchema);