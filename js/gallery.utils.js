'use strict'
function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}
$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        var name = document.getElementById('inputName')
        var email = document.getElementById('inputEmail')
        var subject = document.getElementById('inputSubject')
        var message = document.getElementById('inputMessage')

        if (!name.value || !email.value || !message.value || !subject.value) {
            sendSuccess(false)
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: 'https://formspree.io/mrgyqbjy',
                data: $('#contact-form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            sendSuccess()
        }
    });
});
function sendSuccess(sent = true){
    var $elForm = $('#contact')
    var $textContainer = $('.send-status')
    $elForm.hide()
    if (sent) $textContainer.text('Your message sent!')
    else $textContainer.text('Please check your entries')
    $textContainer.show()
    setTimeout(function(){
        $textContainer.hide()
        $elForm.show()
    }, 3000)    
}
function getDate(timeStamp){
    var date = new Date(timeStamp*1000);
    var dateForDisplay = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    return dateForDisplay;
}