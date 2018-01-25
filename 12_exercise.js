/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

function filter(data, filters) {
  var out = [];
  var hasOptions;
  var freshGrad = false;
  var availableImmediately = false;
  const FRESH_GRAD = 'FRESH_GRAD';
  const AVAILABLE_IMMEDIATELY = 'AVAILABLE_IMMEDIATELY';
  
  filters.includes(AVAILABLE_IMMEDIATELY) ? availableImmediately = true : freshGrad = filters.includes(FRESH_GRAD);
  
  if (filters.length !== 0) {

     for (var i = data.length; i--; ) {
      hasOptions = data[i].options && data[i].options.length > 0; //has.options

      if (data[i].options) {
        for (var k = filters.length; k--; ) {
          // loop through filters
          var hasFilter = false;
          for (var j = data[i].options.length; j--; ) {
            if (!availableImmediately && !freshGrad) {
              if (filters[k] == data[i].options[j].code) {
                hasFilter = true;
              }
            } else if (
              availableImmediately &&
              data[i].options[j].code === AVAILABLE_IMMEDIATELY
            ) {
              hasFilter = true;
            } else if (
              freshGrad &&
              data[i].options[j].code === FRESH_GRAD
            ) {
              hasFilter = true;
            }
          }
          hasOptions = hasOptions && hasFilter;
        }
      }
      if (hasOptions) {
        out.unshift(data[i]);
      }
    }
  } else {
    out = data;
  }
  return out;
}

module.exports = filter;
