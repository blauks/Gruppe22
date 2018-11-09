function buttonHoverHandler(e) {
    let button = document.getElementById(e.id);
    let text = document.getElementById(e.id+'Text');
    let icon = document.getElementById(e.id+'Icon')
    icon.style.transition = 'all 0.7s';
    icon.style.cursor = "pointer";
    button.style.height = '12vh';
    button.style.borderColor = '#02a19c';
    icon.style.color = '#02a19c';
    text.style.filter = 'opacity(1)'
    text.style.transitionDelay = '0.3s';
}

function buttonLeaveHandler(e) {
    button = document.getElementById(e.id);
    text = document.getElementById(e.id+'Text');
    icon = document.getElementById(e.id+'Icon')
    button.style.height = '8vh';
    button.style.borderColor = 'black';
    icon.style.color = 'black';
    text.style.transitionDelay = '0s';
    text.style.filter='opacity(0)'

}

function   clickHandler(e){
    location.href = e.id == 'buttonFaq' ? location.href.replace('CallsForProposals.html','Faq.html'): location.href.replace('CallsForProposals.html', 'ForMiners.html')
}
