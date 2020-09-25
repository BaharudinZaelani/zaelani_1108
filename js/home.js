window.addEventListener('scroll', function(){
    let a = window.scrollY

    if ( a > 20 ) {
    	// bawah
    	$('header').css('height', '60px')
    	$('.menu-mobile').css('opacity', '1')
    	$('.top-button').css('opacity', '1')
    }else {
    	// atas
    	$('header').css('height', '120px')
    	$('.menu-mobile').css('opacity', '0')
    	$('.top-button').css('opacity', '0')
    }
})

let widthSecreen = window.innerWidth
console.log(widthSecreen)
if ( widthSecreen < 530 ) {
    setTimeout(function(){
        $('.zawtea').css('opacity', '0')
        $('.zawtea').css('height', '0vh')
    }, 3000)
}