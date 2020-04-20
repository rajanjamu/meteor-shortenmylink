import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url) {
        // Check if valid URL. If not, throw error
        check(url, Match.Where(url => validUrl.isUri(url)));

        // Generate a 5 digit token
        const token = Math.random().toString(36).slice(-5);

        // Save to mongo database
        Links.insert({ url, token, clicks: 0 });
    }
});

export const Links = new Mongo.Collection('links');