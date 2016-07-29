angular.module('hackathonApp')
  .filter('formatDateTimeFilter', function() {

    return function(input) {
      return moment.unix(input).format('(YYYY) MMM DD hh:mm a');
    };
  });
