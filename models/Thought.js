const { Schema, model } = require('mongoose');
// require utils for date format here

const ThoughtSchema = new Schema ({
    // schema here
    thoughtText: {
        type: String,
        required: true,
        minLength: 4,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: createdAtVal => dateFormat(createdAtVal)
        // getter method
    },
    username: {
        type: String,
        required: true
    },
    //  reactions: [ReactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
})

// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
// });

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;