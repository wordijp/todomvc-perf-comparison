
var Immutable = require('immutable');

var createMixin = function() {

  var Mixin = {
    prevPropsMap: undefined,
    prevStateMap: undefined,

    getInitialState: function() {
      this.prevPropsMap = Immutable.Map()
      this.prevStateMap = Immutable.Map()

      return {};
    },

    shouldComponentUpdate: function(nextProps, nextState) {
      var nextPropsMap = Immutable.Map(nextProps)
      var nextStateMap = Immutable.Map(nextState)

      if (!Immutable.is(nextPropsMap, this.prevPropsMap) ||
          !Immutable.is(nextStateMap, this.prevStateMap)) {

        this.prevPropsMap = nextPropsMap
        this.prevStateMap = nextStateMap
        return true
      }

      return false
    }
  };
  return Mixin;
}

module.exports.createMixin = createMixin;
