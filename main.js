var style_modal = document.getElementById('style-modal');
var modal = style_modal.querySelector('.modal');

var btnBuyTickets = document.getElementsByClassName('js-buy-ticket');
for(let i = 0; i < btnBuyTickets.length; i++) {
    btnBuyTickets[i].onclick = () => {
        style_modal.style.display = 'block';
    }
}

style_modal.querySelector('.modal .header .button-close').onclick = () => {
    style_modal.style.display = 'none';
}
style_modal.querySelector('.modal .footer .close').onclick = () => {
    style_modal.style.display = 'none';
}
style_modal.onclick = function(e) {
    if(e.target == style_modal) {
        style_modal.style.display = 'none';
    }    
}