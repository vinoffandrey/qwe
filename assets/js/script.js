const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		var rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}

/*=====================================Меню-бургер==============================*/
$(document).ready(function () {
	$('.menu__link, .menu__burger').click(function (event) {
		$('.menu__link, .top__submenu_container, .top__section, .top__container').toggleClass('active');
		$('body').toggleClass('lock')
	});
});
$(document).ready(function () {
	$('.menu__burger_close').click(function (event) {
		$('.menu__link, .top__submenu_container, .top__section, .top__container').removeClass('active');
		$('body').removeClass('lock')
	});
});

/*================================Табы в боковом меню===================================*/

$(document).ready(function () {
	$('.top__submenu_title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

/*================================Табы в футере===================================*/

$(document).ready(function () {
	$('.main__left_title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

/*================================Убираем надписи в боковом меню===================================*/

$(".top__submenu_title").click(function () {
	$(".top__submenu_text").removeClass('active');
	$('.top__submenu_text').addClass('active');
});



