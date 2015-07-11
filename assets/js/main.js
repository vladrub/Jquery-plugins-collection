$(document).ready(function(){
    $('body').scrollspy({
        target: '.bs-docs-sidebar',
        offset: 40
    });

    $(function(){
        window.prettyPrint && prettyPrint()
    });

    $('.modalBox.active').modalBox("open");

    $(document).on('click', "a.modal-box.test1", function(e){
        e.preventDefault();

        $( $(this).attr("href") ).modalBox("open", {
            //animationShowEffect: 'lightSpeedIn',
            //animationHideEffect: 'lightSpeedOut'
        });
    });

    $(document).on('click', "a.modal-box.test2", function(e){
        e.preventDefault();

        $( $(this).attr("href") ).modalBox("open", {
            animationShowEffect: 'rotateIn',
            animationHideEffect: 'rotateOut'
        });
    });

    $(document).on('click', "a.modal-box.test3", function(e){
        e.preventDefault();

        $( $(this).attr("href") ).modalBox("open", {
            animationShowEffect: 'zoomIn',
            animationHideEffect: 'zoomOut' // Можно комбинировать
        });
    });

    $(document).on('click', "a.modal-box.test4", function(e){
        e.preventDefault();

        $( $(this).attr("href") ).modalBox("open", {
            animationShowEffect: 'rollIn',
            animationHideEffect: 'rollOut'
        });
    });

});