modules.define('i-glue-field', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: 'i-glue-field_type_input', baseBlock: 'i-glue-field' }, {

    onSetMod: {
        js: {
            inited: function() {
                this.__base();
                this.input = this.findBlockOn('input');
            }
        }
    },

    init: function() {
        this.__base.apply(this, arguments);

        this.input
            .on('change', function() {
                this.model.set(this.name, this.input.getVal());
            }, this)
            .on('blur', function() {
                this.input.setVal(this.model.get(this.name, 'format'));
            }, this);
    },

    set: function(value) {
        this.__base();
        this.input.setVal(value);
    },

    onFieldChange: function(e, data) {
        this.input.hasMod('focused') || this.input.setVal(data.value);
    }

}));

});
