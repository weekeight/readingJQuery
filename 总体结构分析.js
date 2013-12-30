(function(window, undefined){  //确保undefined是真的未定义，因为在IE,chrome,opera下undefined都能被赋值改变，只有firefox下是不能改变的
	var jQuery = function(selector,context){
		return new jQuery.fn.init(selector,context,rootjQuery);
	}
	jQuery.fn = jQuery.prototype;
	jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype

	jQuery.fn = {
		init : function(){

		},
		...基本函数...
	}

	jQuery.fn.extend = function(){}  很重要的拓展函数的定义

	jQuery.fn.extend({
		...拓展的工具函数，包括parseHTML,parseJSON,isFunction等...
	});

	jQuery.ready.promise = function(){}  //保证DOMContentLoaded

	rootjQuery = jQuery(document);  //这个很重要，所有的JQuery对象最终都会指向的最顶级的document对应的JQuery对象


	(function(window, undefined){
		             //利用开源项目sizzle(http://sizzlejs.com/)来处理JQuery的选择器
	})(window);







	window.$ = window.jQuery = jQuery;
})(window);