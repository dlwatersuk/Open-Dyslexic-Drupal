(function($) {
    $.fn.openDyslexicFontToggle = function() {

        ajax = function(type) {
            $.ajax({
              method: "POST",
              url: '/od/ajax',
              data: {request:type},
              success: function(returnVal) {
                return returnVal;
              }
            });
        }

        add = function() {
            $('body').addClass('opendyslexic');
            ajax('true');
        };

        remove = function() {
            $('body').removeClass('opendyslexic');
            ajax('false');
        };

        $(this).click(function(){
            if (!$('body').hasClass('opendyslexic')) {
                add();
            } else {
                remove();
            }
        });

        if ($(this).data('enabled') != '') {
            add();
        }
    }
})(jQuery);

jQuery(document).ready(function($)
{
   $('#openDyslexicSwitch').openDyslexicFontToggle();
});