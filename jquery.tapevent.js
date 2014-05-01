(function( $ ){
    $.event.special.tap = {
        setup: function() {
            var $elem = $(this);
            $elem.bind('touchstart', $.event.special.tap.handler)
                 .bind('touchmove', $.event.special.tap.handler)
                 .bind('touchend', $.event.special.tap.handler);
        },

        teardown: function() {
            var $elem = $(this);
            $elem.unbind('touchstart', $.event.special.tap.handler)
                 .unbind('touchmove', $.event.special.tap.handler)
                 .unbind('touchend', $.event.special.tap.handler);
        },

        handler: function(event) {
            var $elem = $(this);
            $elem.data(event.type, 1);
            if (event.type === 'touchend' && !$elem.data('touchmove')) {
                event.type = 'tap';
                $.event.dispatch.call(this, event);
            } else if ($elem.data('touchend')) {
                $elem.removeData('touchstart touchmove touchend');
            }
        }
    };
})( jQuery );