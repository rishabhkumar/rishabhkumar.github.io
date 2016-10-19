/**
 * Created by rishabh on 18/10/16.
 */




$(function () {
    initCSS()
    $('.ramu').click(function (event) {
        $('#me_left').attr('class', 'collection-item')
        $('#cont_left').attr('class', 'collection-item')
        $('#skills_left').attr('class', 'collection-item')
        $('#dev_left').attr('class', 'collection-item')
        $(event.target).attr('class', 'collection-item active')
        let tempID = '#' + event.target.id.split('_')[0] + 'Content';
        $('.cont').hide()
        $(tempID).show()
    })
})

function initCSS() {
    $('.cont').hide()
    let h = 680, h1 = 250, w1 = 250, w2 = 15;
    $('.leftPanel').css({'width' : '15%', 'height' : '90%'})
    $('.centerPanel').css({'width': '80%', 'margin_right': '3%'})
    if(screen.width < 400) {
        h = 200
        h1 = 125
        w1 = 100
        w2 = 35
        $('.leftPanel').css({'width' : '30%'})
        $('.centerPanel').css({'width': '63%', 'margin_right': '2%'})
    }
    $('#rk').css({'height': h1,'width': w1})
    $('.slider').slider({full_width: true, height: h});
}







