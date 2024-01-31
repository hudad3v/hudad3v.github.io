
/*------------------------ [Pre-Loader] ------------------------*/

jQuery(window).on("load", function() {
	jQuery(".overlay").css({'display':'none'});
});

jQuery(document).ready(function() {

	"use strict";


	/*------------------------ [Weekend Mode Button] ------------------------*/

	jQuery(".salva-switch-btn input:checkbox").on('click', function() {
		jQuery(this).parents(".salva-weekend-mode").toggleClass("checked");
		if($('.salva-switch-btn input:checkbox:checked').length){
			jQuery('.salva-project-detail, .salva-portfolio-content, .salva-image-page, .salva-soundcloud-page, .salva-vimeo-content, .salva-youtube-video-page, .salva-home-main-content, .weekend-mode-hide, .salva-slider-page').addClass("hidepage");
			jQuery('.salva-project-detail, .salva-portfolio-content, .salva-image-page, .salva-soundcloud-page, .salva-vimeo-content, .salva-youtube-video-page, .salva-home-main-content, .weekend-mode-hide, .salva-single-news-content, .salva-slider-page').removeClass("showpage");
		} else {
			jQuery('.salva-project-detail, .salva-single-news-content').removeClass('showpage');
			jQuery('.salva-portfolio-content, .salva-home-main-content, .weekend-mode-hide').removeClass('hidepage');
		}
		jQuery(".salva-weekend-mode, .salva-home-image").toggleClass("showpage");
		jQuery(".salva-weekend-image").toggleClass("visible-img");
	});

	jQuery(".salv-burger").on('click', function() {
		jQuery('.salva-about-wrap, .salva-home-wrap').toggleClass("border-none");
	});

	jQuery(".salv-burger").on('click', function() {
		jQuery('.salv-burger').toggleClass("click");
	});



	/*------------------------ [Portfolio Tab] ------------------------*/

	var links = document.querySelectorAll('.salv-tab-filters ul li a');
	var content = document.querySelectorAll('div.content');
	var lis = document.querySelectorAll('.salv-tab-filters ul li');

	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(e){
			e.preventDefault();
			var activLinks = document.querySelector('.salv-tab-filters ul li a.activ');
			var activContent = document.querySelector('.salv-tab-content-box>div.activ');

			activLinks.classList.remove('activ');
			activContent.classList.remove('activ');

			this.classList.add('activ');
			var attr = this.getAttribute('href');

			var activ = document.querySelector(attr);

			activ.classList.add('activ');

			var lisLength = lis.length;
			var lisWidth = 100 / lisLength;
			var position = i*lisWidth;

		});
	}


	/*------------------------ [Tab on click] ------------------------*/

	jQuery(".all-content-wrap.detail-page").click(function() {
		jQuery('.salva-project-detail').toggleClass("showpage");
		jQuery('.salva-portfolio-content').toggleClass("hidepage");
	});
	jQuery(".close").click(function() {
		jQuery('.salva-portfolio-content').removeClass("hidepage");
		jQuery('.salva-project-detail').removeClass("showpage");
	});

	jQuery(".all-content-wrap.image-page").click(function() {
		jQuery('.salva-image-page').toggleClass("showpage");
		jQuery('.salva-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.salva-portfolio-content').removeClass("hidepage");
		jQuery('.salva-image-page').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.slider-page").click(function() {
		jQuery('.salva-slider-page').toggleClass("showpage");
		jQuery('.salva-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.salva-portfolio-content').removeClass("hidepage");
		jQuery('.salva-slider-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.soundcloud-page").click(function() {
		jQuery('.salva-soundcloud-page').toggleClass("showpage");
		jQuery('.salva-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.salva-portfolio-content').removeClass("hidepage");
		jQuery('.salva-soundcloud-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.vimeo-video-page").click(function() {
		jQuery('.salva-vimeo-content').toggleClass("showpage");
		jQuery('.salva-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.salva-portfolio-content').removeClass("hidepage");
		jQuery('.salva-vimeo-content').removeClass("showpage");
	});

	jQuery(".all-content-wrap.youtube-video-page").click(function() {
		jQuery('.salva-youtube-video-page').toggleClass("showpage");
		jQuery('.salva-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.salva-portfolio-content').removeClass("hidepage");
		jQuery('.salva-youtube-video-page').removeClass("showpage");
	});

	jQuery(".salv-blog-wrap").click(function() {
		jQuery('.salva-single-news-content').toggleClass("showpage");
		jQuery('.salva-news-content').toggleClass("hidepage");
	});
	jQuery(".blog-back-btn").click(function() {
		jQuery('.salva-news-content').removeClass("hidepage");
		jQuery('.salva-single-news-content').removeClass("showpage");
	});


	/*------------------------ [Read More] ------------------------*/

	var limit = 3;
	$(".slv-blog-list .salv-blog-card").slice(0, limit).show();
	$(document).on('click','#load_more',function(e){
		limit += 3;
		e.preventDefault();
		$(".slv-blog-list .salv-blog-card").slice(0, limit).show();
	});	
	
});


/*------------------------ [Cursor Script] ------------------------*/

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

	// Listeners
	document.body.addEventListener('mousemove', onMouseMove);
	for (let i = 0; i < $hoverables.length; i++) {
		$hoverables[i].addEventListener('mouseenter', onMouseHover);
		$hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	// Move the cursor
	function onMouseMove(e) {
		TweenMax.to($bigBall, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15
		})
		TweenMax.to($smallBall, .1, {
			x: e.pageX - 5,
			y: e.pageY - 7
		})
	}

	// Hover an element
	function onMouseHover() {
		TweenMax.to($bigBall, .3, {
			scale: 4
		})
	}
	function onMouseHoverOut() {
		TweenMax.to($bigBall, .3, {
			scale: 1
		})
	}

/*------------------------ [Menu hide during weekend mode] ------------------------*/
$(".salva-switch-btn input").click(function(){
  $("body").toggleClass("menu-hide-wrap");
});