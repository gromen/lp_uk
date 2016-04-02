$(document).ready(function() {

    $('#material-tabs nav-tabs a').click(function(e){
        e.preventDefault();
        $(this).tab('show');
    });


});