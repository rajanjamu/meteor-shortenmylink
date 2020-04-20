import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

const middleware = ConnectRoute(function(router) {
  router.get('/:token', (req, res, next) => {

    const link = Links.findOne({ token: req.params.token });

    if (link) {
      Links.update(link, { $inc: { clicks: 1 } });

      res.writeHead(307, { 'Location': link.url });
      res.end();
    } else {
      next();
    }

    console.log(url);
  })
});

WebApp.connectHandlers.use(middleware);
