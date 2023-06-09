const { User, Thought } = require('../models');

module.exports = {
    // GET all users
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // GET a single user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // POST (create) a new user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },

     // PUT (update) a user
     async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body},
            { runValidators: true, new: true }
          );

          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }

          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

    // DELETE a user and associated thoughts
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: 'User and associated thoughts deleted!' })
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // POST (add) a new friend
    async addFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          );

          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }

          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

       // DELETE a friend
    async deleteFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
  };