/* Do not modify this file directly. It is compiled from other files. */
!function(){function t(){if(this.complete){var e=this.getAttribute("data-lazy-src");if(e&&this.src!==e)this.addEventListener("onload",t);else{var d=this.width,n=this.height;d&&d>0&&n&&n>0&&(this.setAttribute("width",d),this.setAttribute("height",n),i(this))}}else this.addEventListener("onload",t)}var e=function(){for(var e=document.querySelectorAll("img[data-recalc-dims]"),i=0;i<e.length;i++)t.call(e[i])},i=function(t){t.removeAttribute("data-recalc-dims"),t.removeAttribute("scale")};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()),document.body.addEventListener("post-load",e)}();;
/*! This file is auto-generated */
window.addComment=function(s){var u,f,v,y=s.document,p={commentReplyClass:"comment-reply-link",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=s.MutationObserver||s.WebKitMutationObserver||s.MozMutationObserver,i="querySelector"in y&&"addEventListener"in s,n=!!y.documentElement.dataset;function t(){r(),function(){if(!e)return;new e(d).observe(y.body,{childList:!0,subtree:!0})}()}function r(e){if(i&&(u=I(p.cancelReplyId),f=I(p.commentFormId),u)){u.addEventListener("touchstart",a),u.addEventListener("click",a);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return f.removeEventListener("keydown",t),e.preventDefault(),f.submit.click(),!1};f&&f.addEventListener("keydown",t);for(var n,r=function(e){var t,n=p.commentReplyClass;e&&e.childNodes||(e=y);t=y.getElementsByClassName?e.getElementsByClassName(n):e.querySelectorAll("."+n);return t}(e),d=0,o=r.length;d<o;d++)(n=r[d]).addEventListener("touchstart",l),n.addEventListener("click",l)}}function a(e){var t=I(p.temporaryFormId);t&&v&&(I(p.parentIdFieldId).value="0",t.parentNode.replaceChild(v,t),this.style.display="none",e.preventDefault())}function l(e){var t=this,n=m(t,"belowelement"),r=m(t,"commentid"),d=m(t,"respondelement"),o=m(t,"postid");n&&r&&d&&o&&!1===s.addComment.moveForm(n,r,d,o)&&e.preventDefault()}function d(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void r()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function I(e){return y.getElementById(e)}return i&&"loading"!==y.readyState?t():i&&s.addEventListener("DOMContentLoaded",t,!1),{init:r,moveForm:function(e,t,n,r){var d=I(e);v=I(n);var o,i,a,l=I(p.parentIdFieldId),m=I(p.postIdFieldId);if(d&&v&&l){!function(e){var t=p.temporaryFormId,n=I(t);if(n)return;(n=y.createElement("div")).id=t,n.style.display="none",e.parentNode.insertBefore(n,e)}(v),r&&m&&(m.value=r),l.value=t,u.style.display="",d.parentNode.insertBefore(v,d.nextSibling),u.onclick=function(){return!1};try{for(var c=0;c<f.elements.length;c++)if(o=f.elements[c],i=!1,"getComputedStyle"in s?a=s.getComputedStyle(o):y.documentElement.currentStyle&&(a=o.currentStyle),(o.offsetWidth<=0&&o.offsetHeight<=0||"hidden"===a.visibility)&&(i=!0),"hidden"!==o.type&&!o.disabled&&!i){o.focus();break}}catch(e){}return!1}}}}(window);;
/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 *
 * @version 1.0.1
 */

( function($) {
	var $body, $window, $sidebar, adminbarOffset, top = false,
			bottom = false, windowWidth, windowHeight, lastWindowPos = 0,
			topOffset = 0, bodyHeight, sidebarHeight, resizeTimer,
		secondary, button;

		var direction;
		(document.dir !=undefined)? direction =document.dir : direction =document.getElementsByTagName("html")[0].getAttribute("dir");

	// Add overlay-wrap Div container to be able to close overlay
	$('#masthead').after('<div id="overlay-wrap" class="overlay-wrap cf"></div>');

	// Overlay (main menu + widget area) open/close
	$('.overlay-open').on( 'click', function () {
		$('html').addClass('overlay-show');
		$('body').addClass('overlay-show');
		});

		$('#overlay-close').on( 'click', function () {
		$('html').removeClass('overlay-show');
		$('body').removeClass('overlay-show');
		});

	 // Hide Desktop Off Canvas Menu on Click into main website area
		$('#overlay-wrap').on( 'click', function () {
			$('html').removeClass('overlay-show');
		$('body').removeClass('overlay-show');
		});

		// Mobile Widget Area open/close
		$('#offcanvas-widgets-open').on( 'click', function () {
		$( "#sidebar-offcanvas" ).slideToggle( "fast", function() {
			});
			$('body').toggleClass('offcanvas-widgets-show');
		});

		// Desktio Search open/close
		$('.search-open').on( 'click', function () {
			$( ".desktop-search" ).slideToggle( "fast", function() {
			});
		});


		// Featured Posts Slider
		$(document).ready(function() {
			if (direction=="rtl") {
			$('.featured-slider').slick({
				dots: false,
				slidesToShow: 1,
				autoplay: false,
				cssEase: 'ease',
				draggable: true,
				pauseOnHover: false,
				infinite: true,
				rtl: true
			});
			} else {
			$('.featured-slider').slick({
				dots: false,
				slidesToShow: 1,
				autoplay: false,
				cssEase: 'ease',
				draggable: true,
				pauseOnHover: false,
				infinite: true
			});
			}
	});

	// Fade in Featured Images
	$(document).ready(function() {
		if ( window.innerWidth >= 1060 ) {
			$('body').toggleClass('imgfade-on');
		$('.fadein').viewportChecker({
			classToAdd: 'inview', // Class to add to the elements when they are visible
			offset: 50,
			removeClassAfterAnimation: true
			});
		}
	});

	$( document.body ).on( 'post-load', function () {
		if ( window.innerWidth >= 1060 ) {
			$('body').toggleClass('imgfade-on');
		$('.fadein').viewportChecker({
			classToAdd: 'inview', // Class to add to the elements when they are visible
			offset: 50,
			removeClassAfterAnimation: true
			});
		}
	} );

	// Sticky Desktop Header Bar
	$(function() {
		var stickyheader = $('.sticky-header');
			$(window).scroll(function() {
					var scroll = $(window).scrollTop();

					if (scroll >= 158) {
							$('body').addClass('header-stick');
							stickyheader.removeClass('hidden');
							stickyheader.attr("aria-hidden","false");
					} else {
							$('body').removeClass('header-stick');
							stickyheader.addClass('hidden');
							stickyheader.attr("aria-hidden","true");
					}
			});
	});

	// Sticky Last Sidebar Element
	$(document).ready(function() {
	if ( window.innerWidth >= 1060 ) {
		$(".blog #secondary .widget:last-child").stick_in_parent({
			parent: "#blog-wrap",
			offset_top: 80
		});
	}
	});

	// Sticky Last Sidebar Element - Single Post
	$(document).ready(function() {
	if ( window.innerWidth >= 1060 ) {
	$(".single-post #secondary .widget:last-child").stick_in_parent({
		parent: "#singlepost-wrap",
		offset_top: 80
		});
	}
	});

	// Add dropdown toggle that display child menu items.
	$( '.menu-item-has-children > a' ).after( '<button class="dropdown-toggle" aria-expanded="false">' + screenReaderText.expand + '</button>' );
	$( '.page_item_has_children > a' ).after( '<button class="dropdown-toggle" aria-expanded="false">' + screenReaderText.expand + '</button>' );

	// Toggle buttons and submenu items with active children menu items.
	$( '.current-menu-ancestor > button' ).addClass( 'toggle-on' );
	$( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );
		$( '.current-menu-ancestor > .children' ).addClass( 'toggled-on' );

	$( '.dropdown-toggle' ).click( function( e ) {
		var _this = $( this );
		e.preventDefault();
		_this.toggleClass( 'toggle-on' );
		_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
		_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		_this.html( _this.html() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand );
	} );

	secondary = $( '#secondary' );
	button = $( '.site-branding' ).find( '.secondary-toggle' );

	// Enable menu toggle for small screens.
	( function() {
		var menu, widgets, social;
		if ( ! secondary || ! button ) {
			return;
		}

		// Hide button if there are no widgets and the menus are missing or empty.
		menu    = secondary.find( '.nav-menu' );
		widgets = secondary.find( '#widget-area' );
		social  = secondary.find( '#social-navigation' );
		if ( ! widgets.length && ! social.length && ( ! menu || ! menu.children().length ) ) {
			button.hide();
			return;
		}

		button.on( 'click.nikau', function() {
			secondary.toggleClass( 'toggled-on' );
			secondary.trigger( 'resize' );
			$( this ).toggleClass( 'toggled-on' );
			if ( $( this, secondary ).hasClass( 'toggled-on' ) ) {
				$( this ).attr( 'aria-expanded', 'true' );
				secondary.attr( 'aria-expanded', 'true' );
			} else {
				$( this ).attr( 'aria-expanded', 'false' );
				secondary.attr( 'aria-expanded', 'false' );
			}
		} );
	} )();

} )( jQuery );
;
/* Do not modify this file directly. It is compiled from other files. */
!function(){var e,t,o,i=document.cookie.replace(/(?:(?:^|.*;\s*)eucookielaw\s*\=\s*([^;]*).*$)|^.*$/,"$1"),n=document.getElementById("eu-cookie-law"),s=document.querySelector(".widget_eu_cookie_law_widget");if(e=function(){return Math.abs(document.body.getBoundingClientRect().y)},n.classList.contains("top")&&s.classList.add("top"),n.classList.contains("ads-active")){var a=document.cookie.replace(/(?:(?:^|.*;\s*)personalized-ads-consent\s*\=\s*([^;]*).*$)|^.*$/,"$1");""!==i&&""!==a&&n.parentNode.removeChild(n)}else""!==i&&n.parentNode.removeChild(n);document.body.appendChild(s),n.querySelector("form").addEventListener("submit",d),n.classList.contains("hide-on-scroll")?(t=e(),o=function(){Math.abs(e()-t)>50&&d()},window.addEventListener("scroll",o)):n.classList.contains("hide-on-time")&&setTimeout(d,1e3*n.getAttribute("data-hide-timeout"));var c=!1;function d(e){if(!c){c=!0,e&&e.preventDefault&&e.preventDefault(),n.classList.contains("hide-on-scroll")&&window.removeEventListener("scroll",o);var t=new Date;t.setTime(t.getTime()+24*n.getAttribute("data-consent-expiration")*60*60*1e3),document.cookie="eucookielaw="+t.getTime()+";path=/;expires="+t.toGMTString(),n.classList.contains("ads-active")&&n.classList.contains("hide-on-button")&&(document.cookie="personalized-ads-consent="+t.getTime()+";path=/;expires="+t.toGMTString()),n.classList.add("hide"),setTimeout(function(){n.parentNode.removeChild(n);var e=document.querySelector(".widget.widget_eu_cookie_law_widget");e.parentNode.removeChild(e)},400)}}}();;
/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);;
