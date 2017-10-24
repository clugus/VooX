(function($) {
    var App = {

        /**
         * Init Function
         */
        init: function() {
            App.ScrollBack();
            App.Misc();
        },

        /**
         * ScrollBack
         */
        ScrollBack: function() {
            var btop = '#back-to-top';
            if ($(btop).length) {
                var scrollTrigger = 100, // px
                    backToTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $(btop).addClass('show');
                        } else {
                            $(btop).removeClass('show');
                        }
                    };
                backToTop();
                $(window).on('scroll', function () {
                    backToTop();
                });
                $(btop).on('click', function (e) {
                    e.preventDefault();
                    $('html,body').animate({
                        scrollTop: 0
                    }, 700);
                });
            }

        },

        /**
         * Misc
         */
        Misc: function() {
            /* Page Scroll to id fn call */
            $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
                highlightSelector:"#navigation-menu a",
                offset: 60
            });

            $('.equal-height').matchHeight();

            $('.datepicker').datepicker({
                color: 'red'
            });


            // gets browser dimensions
            // pulled from http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
            var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

            //if (x > 767) {
            //    $(".call-page").css("height", y);
            //} else {
            //    $(".call-page").css("height", 'auto');
            //}

            $("#sidemenu").mmenu({
                offCanvas: {
                    position  : "right",
                    zposition : "front"
                },
                navbar: {
                    add: false,
                    title : ""
                }
            });
            var API = $("#sidemenu").data( "mmenu" );
            $('.toggle-panel').click(function(){
                API.open();
            });
            $('.close-panel').click(function(){
                API.close();
            });
        }

    };

    $(function() {
        App.init();
    });

})(jQuery);