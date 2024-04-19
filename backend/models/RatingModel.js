const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    
    totalRating:{
        type:int,
        defualt:0
    },
    Rated: {
        type:Boolean,
        default: false,
      },
      day: {
        type: String,
        required: true
    },

      RatedUser: [{
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        Rated: {
          type: Boolean,
          default: false,
        },
       
        day: {
            type: String,
            required: true
        },
      }],
});

const RateUs = mongoose.model("Rateus", RatingSchema);

module.exports = RateUs;
