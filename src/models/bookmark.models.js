const mongoose = require('mongoose');

// bookmark model 
const bookmarkSchema = mongoose.Schema({
    // user field
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // user id
    id: {
        type: Number,
        required: true
    },
    // title field
    title: {
        type: String,
        required: true
    },
    // image field
    image: {
        type: String,
        required: true,
    },
    // isAdult field
    isAdult: {
        type: Boolean,
        required: true
    },
    // media type field
    mediaType: {
        type: String,
        enum: ['movie', 'tv'],
        required: true
    },
    // release data field basically this field will store the data and time when a bookmark created
    releaseDate: {
        type: Date,
        required: true
    }
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = { Bookmark };
