(function(window, undefined){  //确保undefined是真的未定义，因为在IE,chrome,opera下undefined都能被赋值改变，只有firefox下是不能改变的
	var jQuery = function(selector,context){
		return new jQuery.fn.init(selector,context,rootjQuery);
	}
	jQuery.fn = jQuery.prototype;
	jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype

	jQuery.fn = {
		init : function(){

		},
		//...基本函数...
	}
	//jQuery.fn.xx上的方法与jQuery.xx的区别在于：fn上的，也即原型链上的方法jQuery对象可以直接引用，如$('div')可以使用jQuery.fn上的方法，不能使用JQuery.xx的方法
	jQuery.fn.extend = function(){}  //大部分的函数都通过extend函数来拓展到jQuery对象上面去（extend方法默认将对象的属性拓展到jQuery对象）

	jQuery.extend({
		//...拓展的工具函数，包括parseHTML,parseJSON,isFunction等...
	});

	jQuery.ready.promise = function(){}  //保证DOMContentLoaded

	rootjQuery = jQuery(document);  //这个很重要，所有的JQuery对象最终都会指向的最顶级的document对应的JQuery对象


	(function(window, undefined){   //再搞个子调用匿名函数
		             //利用开源项目sizzle(http://sizzlejs.com/)来处理JQuery的选择器
	})(window);

	jQuery.Callbacks = function( options ){}      //定义一个callback list供下面的 ‘异步队列Deferred’ 使用(By default a callback list will act like an event callback list and can be "fired" multiple times.)
	//?这里在看的过程中有个疑问：为什么有一些jQuery的方法是通过extend来添加的，一些是直接挂在jQuery上的？
	jQuery.extend({
		Deferred : function( func ){},  //异步队列Deferred实现函数
		when : function( subordinate /* , ..., subordinateN */ ){}  //异步队列Deferred 的支持函数
	})

	//浏览器支持，做了一部分属性兼容的工作
	jQuery.support = (function(support){ support.xx = xx; ...  return support; })({});  //这里确保传进去的support是一个空对象（为什么要这样？有点困惑）

	//队列的实现
	jQuery.extend({
		queue : function(){},
		dequeue : function(){}
	})
	jQuery.fn.extend({
		queue : function(){},
		dequeue : function(){},
		delay : function(){}
	})

	//一些常用的api
	jQuery.fn.extend({
		attr : function(){},
		removeAttr : function(){},
		addClass : function(){}
		//...
	})

	//Helper functions for managing events -- not part of the public interface
	jQuery.event = {
		global : {},
		add : function(){}
		//...
	}
	//对外的api，利用上面的helper functions来实现
	jQuery.fn.extend({
		on : function(){},
		trigger : function(){}
	})

	//一些常用api
	jQuery.fn.extend({
		find : function( selector ){},
		has : function(){}
		//...
	})

	//css相关，兼容性处理
	jQuery.fn.extend({
		css : function(){}
		//...
	})

	//ajax相关
	jQuery.extend({
		ajaxSettings : {},
		ajaxSetup : function(){}
	})

	//动画
	function Animation(){}
	jQuery.Animation = jQuery.extend(Animation,{
		tweener : function(){}
		//...
	})

	
	window.$ = window.jQuery = jQuery;
})(window);