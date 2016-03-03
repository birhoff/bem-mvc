BEM.MODEL.decl('todos', {

    list: {
        type: 'collection',
        modelName: 'todo-item'
    },

    show: 'string',

    allDone: {
        type: 'boolean',
        calculate: function() {
            return this.get('itemsLeft') === 0;
        },
        dependsFrom: 'list'
    },

    itemsCompleted: {
        type: 'string',
        calculate: function() {
            return this.get('list', 'raw').filter(function(todo) {
                return todo.get('done');
            }).length;
        },
        dependsFrom: 'list'
    },

    hasCompleted: {
        type: 'boolean',
        calculate: function() {
            return this.get('itemsCompleted') !== 0;
        },
        dependsFrom: 'itemsCompleted'
    },

    itemsLeft: {
        type: 'string',
        calculate: function() {
            return this.get('list', 'raw').filter(function(todo) {
                return !todo.get('done');
            }).length;
        },
        dependsFrom: 'list'
    }

});

BEM.MODEL.decl('todo-item', {
    text: 'string',
    done: 'boolean'
});
