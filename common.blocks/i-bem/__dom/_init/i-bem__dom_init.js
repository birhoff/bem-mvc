/**
 * @module i-bem__dom_init
 */

modules.define('i-bem__dom_init', ['jquery'], function(provide, $, prev) {

    provide(
        function() {
            var nodes = $('.i-model');

            if (nodes.length) nodes.bem('i-model');

            return prev.apply(this, arguments);
        });
});
