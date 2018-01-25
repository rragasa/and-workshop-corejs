it('should print the name of the person objects', () => {
  const john = { 
    name: 'John' 
  };
  
  const getName = function() {
    return this.name;
  };

 //const newVar = getName.bind(john);

  
  expect(getName.bind(john)()).toBe('John'); // USE bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
  expect(getName.call(john)).toEqual('John'); // USE call https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  expect(getName.apply(john)).toEqual('John'); // USE apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
});

it('should print the name of the person objects', () => {
  
  
  function Person() {
   this.name = 'John';
   this.age = 28;
  //  this.isFine = function() {
  //   return true;
  //  }
    this.isFine = () => {
      return true;
    }
  }

  const john = new Person('John');

  expect(john.age).toBe(28);
  expect(john.name).toEqual('John');
  expect(john.isFine()).toBe(true);
});

it('should return the maximu number in an array', () => {
  //don't google it, try it first! hint: use apply and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const numbers = [1, 99, 34, 1000, 123];

  // var max = numbers.reduce(function(a, b) {
  //   return Math.max(a, b);
  // });
  var max = Math.max.apply(null, numbers); 

  expect(max).toBe(1000);
});

it('should return the maximu number in an array', () => {
  const leaderBoard = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function() {
      let sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
        return prev + cur;
      });
      this.avgScore = sumOfScores / this.scores.length;
    },
    obj: {
      avg: function() {
        let sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
          return prev + cur;
        });
        this.avgScore = sumOfScores / this.scores.length;
      }
    }
  };

  const anotherleaderBoard = {
    scores: [8, 10, 8, 9, 10, 9],
    avgScore: null
  };


  function foo() {
    let sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
      return prev + cur;
    });
    this.avgScore = sumOfScores / this.scores.length;
  }

  //foo.call(anotherleaderBoard)
  leaderBoard.obj.avg.call(anotherleaderBoard)

  expect(anotherleaderBoard.avgScore).toBe(9);
});
