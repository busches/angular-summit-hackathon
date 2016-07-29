angular.module('hackathonApp')
  .filter('formatDurationFilter', function() {

    return function(from, to) {
      return moment.utc(moment.unix(to).diff(moment.unix(from))).format('H:mm');
    };
  });
