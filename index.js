/**
 * Created by rishabh on 18/10/16.
 */




$(function () {
    $('.slider').slider({full_width: true, height: 500});
    alert('hey')
    $('.ramu').click(function (event) {
        $('#me_left').attr('class', 'collection-item')
        $('#cont_left').attr('class', 'collection-item')
        $('#skills_left').attr('class', 'collection-item')
        $('#dev_left').attr('class', 'collection-item')
        $(event.target).attr('class', 'collection-item active')
        if(event.target.id == 'me_left') {
            $('.lol2').show()
            $('.slider').slider({full_width: true, height: 500});
        }
        else if(event.target.id == 'skills_left') {
            $('.lol2').hide()
        }
    })
})

// function lol() {
//     alert('loliy' + $(this).attr('id'))
//     $('#me_left').attr('class', 'collection-item')
//     $('#cont_left').attr('class', 'collection-item')
//     $('#skills_left').attr('class', 'collection-item')
//     $('#dev_left').attr('class', 'collection-item')
//     $(this).attr('class', 'collection-item active')
// }
