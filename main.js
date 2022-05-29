var modal = document.getElementById('style-modal');

var btnBuyTickets = document.getElementsByClassName('js-buy-ticket');
for(let i = 0; i < btnBuyTickets.length; i++) {
    btnBuyTickets[i].onclick = () => {
        modal.style.display = 'block';
    }
}

modal.querySelector('.modal .header .button-close').onclick = () => {
    modal.style.display = 'none';
}
modal.querySelector('.modal .footer .close').onclick = () => {
    modal.style.display = 'none';
}