var numberOfItemsToAdd = 100;
var Suites = [];

Suites.push({
    name: 'Backbone',
    url: 'todomvc/backbone/index.html',
    version: '1.1.2',
    prepare: function (runner, contentWindow, contentDocument) {
    contentWindow.Backbone.sync = function () {};
        return runner.waitForElement('#new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            var appView = contentWindow.appView;
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var keypressEvent = document.createEvent('Event');
                keypressEvent.initEvent('keypress', true, true);
                keypressEvent.which = 13;
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(keypressEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelectorAll('.toggle')[i].click();
            }
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelector('.destroy').click();
            }
        })
    ]
});

Suites.push({
    name: 'Backbone(Full Rerender)',
    url: 'todomvc/backbone2/index.html',
    version: '1.1.2',
    prepare: function (runner, contentWindow, contentDocument) {
    contentWindow.Backbone.sync = function () {};
        return runner.waitForElement('#new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            var appView = contentWindow.appView;
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var keypressEvent = document.createEvent('Event');
                keypressEvent.initEvent('keypress', true, true);
                keypressEvent.which = 13;
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(keypressEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelectorAll('.toggle')[i].click();
            }
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelector('.destroy').click();
            }
        })
    ]
});

Suites.push({
    name: 'React',
    url: 'todomvc/react/index.html',
    version: '0.12.2',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var keydownEvent = document.createEvent('Event');
                keydownEvent.initEvent('keydown', true, true);
                keydownEvent.which = 13; // VK_ENTER
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(keydownEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelectorAll('.toggle')[i].click();
            }
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelector('.destroy').click();
            }
        })
    ]
});

Suites.push({
    name: 'React (Manual Tuning)',
    url: 'todomvc/react2/index.html',
    version: '0.12.2',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var keydownEvent = document.createEvent('Event');
                keydownEvent.initEvent('keydown', true, true);
                keydownEvent.which = 13; // VK_ENTER
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(keydownEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelectorAll('.toggle')[i].click();
            }
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelector('.destroy').click();
            }
        })
    ]
});

Suites.push({
    name: 'React (using mixin tuner)',
    url: 'todomvc/react3/index.html',
    version: '0.12.2',
    prepare: function (runner, contentWindow, contentDocument) {
        return runner.waitForElement('#new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var keydownEvent = document.createEvent('Event');
                keydownEvent.initEvent('keydown', true, true);
                keydownEvent.which = 13; // VK_ENTER
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(keydownEvent);
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelectorAll('.toggle')[i].click();
            }
        }),
        new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
              contentDocument.querySelector('.destroy').click();
            }
        })
    ]
});
