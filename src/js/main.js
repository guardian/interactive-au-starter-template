define([
    'text!templates/appTemplate.html',
    'jquery'
    // Your required plugins etc
], function(
    templateHTML,
    $
    // Variables for your plugins etc
) {
	'use strict';

    function init(el, context, config, mediator) {
        // DEBUG: What we get given on boot
        console.log(el, context, config, mediator);

        // DOM template example
        el.innerHTML = templateHTML;

	    // Your scripts go here
        $(document).ready(function(){
        	var $interactive = $('#project-name-interactive-container');

	        // Loading overlay
			function onReady(callback) {
				var intervalID = window.setInterval(checkReady, 1000);

				function checkReady() {
					if (document.getElementById('bubble-wrapper') !== undefined) {
						window.clearInterval(intervalID);
						callback.call(this);
					}
				}
			}

			onReady(function () {
				setTimeout(function(){
					$interactive.addClass('loaded');
				}, 1000);
			});
		});
    }

    return {
        init: init
    };
});
