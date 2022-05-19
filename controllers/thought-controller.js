const { Thought, User } = require('../models');

const thoughtController = {

  // GET all thoughts
  getAllThought(req, res) {
    Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  // GET thought by id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(400).json({ message: 'No thought found with this id.' })
        }
        res.json(dbThoughtData)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  // POST new thought
  addThought({ params, body }, res) {
    console.log(params);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id.' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  // POST new reaction to thought
  addReaction({ params, body }, res) {
    console.log(params)
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id.' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  // UPDATE thought by id
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id }, 
      body, 
      { new: true, runValidators: true }
      )
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(400).json({ message: 'No thought found with this id.' })
        }
        res.json(dbThoughtData)
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  // DELETE thought by id
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No thought with this id.' });
        }
        return User.findOneAndUpdate(
          { thoughts: params.id },
          { $pull: { thoughts: params.id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id.' });
          return;
        }
        console.log(dbUserData)
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  },

  // DELETE reaction from thought
  removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err)
        res.status(400).json(err)
      })
  }

}

module.exports = thoughtController;