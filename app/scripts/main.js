'use strict';
console.log('\'Allo \'Allo!'), $(document).ready(function() {
    $('.popup').magnificPopup(),
        $('.myMenu ul li ').hover(function() {
            $(this).children('ul').stop(!0, !1, !0).fadeToggle(400)
        }),

        $('form').submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: 'POST',
                url: '/mail.php', //Change
                data: th.serialize()
            }).done(function() {
                SweetAlert2({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    type: 'error',
                    confirmButtonText: 'Cool'
                });
                setTimeout(function() {
                    // Done Functions
                    th.trigger('reset');
                }, 1000);
            });
            return false;
        });

    $('header-video').parallax({
        'elements': [{
            'selector': '.outer',
            'properties': {
                'x': {
                    'background-position-x': {
                        'initial': 50,
                        'multiplier': 0.01,
                        'unit': '%',
                    }
                },
                'y': {
                    'background-position-y': {
                        'initial': 150,
                        'multiplier': 0.01,
                        'unit': '%',
                    }
                }

            }
        }, {
            'selector': '.wrapper-outer',
            'properties': {
                'x': {
                    'background-position-x': {
                        'initial': -50,
                        'multiplier': 0.001,
                        'unit': '%',
                        'invert': true

                    }
                }
                // 'y': {
                //     'background-position-y': {
                //         'initial': 100,
                //         'multiplier': 0.01,
                //         'unit': '%'

                //     }
                // }
            }
        }, {
            'selector': '.wrapper-inner',
            'properties': {
                'x': {
                    'background-position-x': {
                        'initial': 30,
                        'multiplier': 0.01,
                        'unit': '%',

                    }
                },
                // 'y': {
                //     'background-position-y': {
                //         'initial': 65,
                //         'multiplier': 0.01,
                //         'unit': '%',
                //     }
                // }

            }
        }]
    });


}), (new WOW).init();
