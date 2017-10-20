import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Tasks = new Mongo.Collection('tasks');

Template.tasks.helpers({
    tasks: function () {
        return Tasks.find({},{sort:{createdAt:-1}});
    }
});

Template.tasks.events({

    "submit .add-task" : function(event) {
        event.preventDefault();
        var name = event.target.name.value;

        Meteor.call('addTask',name);
        console.log(name);

        event.target.name.value = '';
        return false;
    },
    "click .delete-task" : function (event) {
        if(confirm('Delete Task?')){
            Meteor.call('deleteTask',thid._id);
            //Tasks.remove(this._id);
        }
        return false;
    }
});