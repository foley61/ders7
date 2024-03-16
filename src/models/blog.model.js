
const mongoose = require("mongoose");

//BLOG CATEGORIES
const blogCategorySchema = new mongoose.Schema({
  
    name: {
        type: String,
        trim: true,
        required: true
    }

},{
     collection:"blogCategory"
     
})
//BLOG POSTS
const blogPostSchema = new mongoose.Schema({

    blogCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory', // bunu buradan aldık mongoose.model('BlogCategory', blogCategorySchema), module exportsta 40.satır
        required: true
    },
    title:{
        type:String,
        trim: true,
        required: true
    },
    content:{
        type:String,
        trim: true,
        required: true
    },
    published: {
        type: Boolean,
        default: true
    }


},{
    collection: "blogPost",
    timestamps: true
})
module.exports={
  BlogCategory : mongoose.model('BlogCategory', blogCategorySchema),
  BlogPost: mongoose.model('BlogPost',blogPostSchema)
}
