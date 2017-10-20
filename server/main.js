import { Meteor } from 'meteor/meteor';

Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    addTask: function (name) {
        if(!Meteor.userId()){
            throw new Meteor.error('No Access!!!');
        }
        Tasks.insert({
            name: name,
            createdAt: new Date(),
            userId: Meteor.userId()
        });
    },
    deleteTask: function (taskId) {
        Tasks.remove(taskId);
    }
});

Meteor.startup(() => {
  // code to run on server at startup
});
