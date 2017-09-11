/**
 * This is an auto-generated code by Monaca JS/CSS Components.
 * Please do not edit by hand.
 */

/*** <GENERATED> ***/


/*** <Start:monaca-cordova-loader> ***/
/*** <Start:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
(function(){
  function getDeviceObjectForPreview() {
    var raw_values = window.location.search.substring(1).split('&');
    var values = {};
    var device = { platform: "" };
    
    if (raw_values) {
      for (var key in raw_values) {
        var tmp = raw_values[key].split('=');
        values[tmp[0]] = decodeURIComponent(tmp[1]);
      }
      device.platform = values.platform;
    }
    
    return device;
  }
    
  if (/^https:\/\/preview-.+monaca\.(local||mobi)/.test(location.href)) {
    window.device = getDeviceObjectForPreview();
  }
 
  if ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/iPhone|iPad|iPod/i))) {
    if (typeof location.href === "string") {
      var relativePath = location.href.split("/www")[1];
      var paths = relativePath.split("/");
      var cordovaJsUrl = ""; 
      for (var i = 0; i < paths.length - 2; i++) {
        cordovaJsUrl += "../";
      }
      document.write("<script src=\"" + cordovaJsUrl+ "cordova.js" + "\"></script>");
    }
  } else if ( ((navigator.userAgent.match(/MSIE\s10.0/)) && (navigator.userAgent.match(/Windows\sNT\s6.2/)) ) || navigator.userAgent.match(/MSAppHost/) ) {
    var elm = document.createElement('script');
    elm.setAttribute("src", "cordova.js");
    document.getElementsByTagName("head")[0].appendChild(elm);
  };
})();
/*** <End:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
/*** <End:monaca-cordova-loader> ***/










/*** <Start:monaca-jquery> ***/
/*** <Start:monaca-jquery LoadJs:"components/monaca-jquery/jquery.js"> ***/
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// A central reference to the root jQuery(document)
	rootjQuery,

	// The deferred used on DOM ready
	readyList,

	// Support: IE9
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "2.0.3",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler and self cleanup method
	completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		// Support: Safari <= 5.1 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Support: Firefox <20
		// The try/catch suppresses exceptions thrown when attempting to access
		// the "constructor" property of certain host objects, ie. |window.location|
		// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
		try {
			if ( obj.constructor &&
					!core_hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: JSON.parse,

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data , "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
				indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	trim: function( text ) {
		return text == null ? "" : core_trim.call( text );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : core_indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: Date.now,

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */
(function( window, undefined ) {

var i,
	support,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	outermostContext,
	sortInput,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	hasDuplicate = false,
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rsibling = new RegExp( whitespace + "*[+~]" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent.attachEvent && parent !== parent.top ) {
		parent.attachEvent( "onbeforeunload", function() {
			setDocument();
		});
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Support: Opera 10-12/IE8
			// ^= $= *= and empty values
			// Should not select anything
			// Support: Windows 8 Native Apps
			// The type attribute is restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "t", "" );

			if ( div.querySelectorAll("[t^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

		if ( compare ) {
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		}

		// Not directly comparable, sort on existence of method
		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val === undefined ?
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null :
		val;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] && match[4] !== undefined ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
				}
				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return (val = elem.getAttributeNode( name )) && val.specified ?
				val.value :
				elem[ name ] === true ? name.toLowerCase() : null;
		}
	});
}

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function( support ) {
	var input = document.createElement("input"),
		fragment = document.createDocumentFragment(),
		div = document.createElement("div"),
		select = document.createElement("select"),
		opt = select.appendChild( document.createElement("option") );

	// Finish early in limited environments
	if ( !input.type ) {
		return support;
	}

	input.type = "checkbox";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Will be defined later
	support.reliableMarginRight = true;
	support.boxSizingReliable = true;
	support.pixelPosition = false;

	// Make sure checked status is properly cloned
	// Support: IE9, IE10
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement("input");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment.appendChild( input );

	// Support: Safari 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: Firefox, Chrome, Safari
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	support.focusinBubbles = "onfocusin" in window;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv,
			// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
			divReset = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
			body = document.getElementsByTagName("body")[ 0 ];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		// Check box-sizing and margin behavior.
		body.appendChild( container ).appendChild( div );
		div.innerHTML = "";
		// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
		div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";

		// Workaround failing boxSizing test due to offsetWidth returning wrong value
		// with some non-1 values of body zoom, ticket #13543
		jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
			support.boxSizing = div.offsetWidth === 4;
		});

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		body.removeChild( container );
	});

	return support;
})( {} );

/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var data_user, data_priv,
	rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;

Data.accepts = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType ?
		owner.nodeType === 1 || owner.nodeType === 9 : true;
};

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( core_rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};

// These may be used throughout the jQuery core codebase
data_user = new Data();
data_priv = new Data();


jQuery.extend({
	acceptData: Data.accepts,

	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[ 0 ],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[ i ].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.slice(5) );
							dataAttr( elem, name, data[ name ] );
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return jQuery.access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n\f]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

	jQuery.expr.attrHandle[ name ] = function( elem, name, isXML ) {
		var fn = jQuery.expr.attrHandle[ name ],
			ret = isXML ?
				undefined :
				/* jshint eqeqeq: false */
				// Temporarily disable this handler to check existence
				(jQuery.expr.attrHandle[ name ] = undefined) !=
					getter( elem, name, isXML ) ?

					name.toLowerCase() :
					null;

		// Restore handler
		jQuery.expr.attrHandle[ name ] = fn;

		return ret;
	};
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !jQuery.support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
var rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var isSimple = /^.[^:#\[\.,]*$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},

	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = ( rneedsContext.test( selectors ) || typeof selectors !== "string" ) ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					cur = matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return core_indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return core_indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( core_indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}
var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map( this, function( elem ) {
				return [ elem.nextSibling, elem.parentNode ];
			}),
			i = 0;

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			var next = args[ i++ ],
				parent = args[ i++ ];

			if ( parent ) {
				// Don't use the snapshot next if it has moved (#13810)
				if ( next && next.parentNode !== parent ) {
					next = this.nextSibling;
				}
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		// Allow new content to include elements from the context set
		}, true );

		// Force removal if there was no new content (e.g., from empty arguments)
		return i ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback, allowIntersection ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback, allowIntersection );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because core_push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery._evalUrl( node.src );
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because core_push.apply(_, arraylike) throws
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !jQuery.support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			i = 0,
			l = elems.length,
			fragment = context.createDocumentFragment(),
			nodes = [];

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, events, type, key, j,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( Data.accepts( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					events = Object.keys( data.events || {} );
					if ( events.length ) {
						for ( j = 0; (type = events[j]) !== undefined; j++ ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	},

	_evalUrl: function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	}
});

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var l = elems.length,
		i = 0;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}


function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}
jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
var curCSS, iframe,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
function getStyles( elem ) {
	return window.getComputedStyle( elem, null );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css(elem, "display") );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

curCSS = function( elem, name, _computed ) {
	var width, minWidth, maxWidth,
		computed = _computed || getStyles( elem ),

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
		style = elem.style;

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: Safari 5.1
		// A tribute to the "awesome hack by Dean Edwards"
		// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret;
};


function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	// Support: Android 2.3
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// Support: Android 2.3
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrSupported = jQuery.ajaxSettings.xhr(),
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	// Support: IE9
	// We need to keep track of outbound xhr and abort them manually
	// because IE is not smart enough to do it all by itself
	xhrId = 0,
	xhrCallbacks = {};

if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
		xhrCallbacks = undefined;
	});
}

jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
jQuery.support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;
	// Cross domain only allowed if supported through XMLHttpRequest
	if ( jQuery.support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i, id,
					xhr = options.xhr();
				xhr.open( options.type, options.url, options.async, options.username, options.password );
				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}
				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}
				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}
				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}
				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;
							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file protocol always yields status 0, assume 404
									xhr.status || 404,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// #11426: When requesting binary data, IE9 will throw an exception
									// on any attempt to access responseText
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};
				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");
				// Create the abort callback
				callback = xhrCallbacks[( id = xhrId++ )] = callback("abort");
				// Do send the request
				// This may raise an exception which is actually
				// handled in jQuery.ajax (so no try/catch here)
				xhr.send( options.hasContent && options.data || null );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}


	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		elem = this[ 0 ],
		box = { top: 0, left: 0 },
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top + win.pageYOffset - docElem.clientTop,
		left: box.left + win.pageXOffset - docElem.clientLeft
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) && ( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

// })();
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

// If there is a window object, that at least has a document property,
// define jQuery and $ identifiers
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.jQuery = window.$ = jQuery;
}

})( window );

/*** <End:monaca-jquery LoadJs:"components/monaca-jquery/jquery.js"> ***/
/*** <End:monaca-jquery> ***/

/*** <Start:onsenui> ***/
/*** <Start:onsenui LoadJs:"components/onsenui/js/onsenui.min.js"> ***/
/*! onsenui v2.5.3 - 2017-08-21 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.ons=factory():root.ons=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=159)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_animationOptionsParser=__webpack_require__(55),_animationOptionsParser2=_interopRequireDefault(_animationOptionsParser),util={};util.globals={fabOffset:0},util.prepareQuery=function(query){return query instanceof Function?query:function(element){return util.match(element,query)}},util.match=function(e,s){return(e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector).call(e,s)},util.findChild=function(element,query){for(var match=util.prepareQuery(query),i=0;i<element.childNodes.length;i++){var node=element.childNodes[i];if(node.nodeType===Node.ELEMENT_NODE&&match(node))return node}return null},util.findParent=function(element,query,until){for(var match=util.prepareQuery(query),parent=element.parentNode;;){if(!parent||parent===document||until&&until(parent))return null;if(match(parent))return parent;parent=parent.parentNode}},util.isAttached=function(element){for(;document.documentElement!==element;){if(!element)return!1;element=element.parentNode}return!0},util.hasAnyComponentAsParent=function(element){for(;element&&document.documentElement!==element;)if(element=element.parentNode,element&&element.nodeName.toLowerCase().match(/(ons-navigator|ons-tabbar|ons-modal)/))return!0;return!1},util.isPageControl=function(element){return element.nodeName.match(/^ons-(navigator|splitter|tabbar|page)$/i)},util.propagateAction=function(element,action){for(var i=0;i<element.childNodes.length;i++){var child=element.childNodes[i];child[action]instanceof Function?child[action]():util.propagateAction(child,action)}},util.camelize=function(string){return string.toLowerCase().replace(/-([a-z])/g,function(m,l){return l.toUpperCase()})},util.create=function(){var selector=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",style=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},classList=selector.split("."),element=document.createElement(classList.shift()||"div");return classList.length&&(element.className=classList.join(" ")),util.extend(element.style,style),element},util.createElement=function(html){var wrapper=document.createElement("div");if(html instanceof DocumentFragment?wrapper.appendChild(document.importNode(html,!0)):wrapper.innerHTML=html.trim(),wrapper.children.length>1)throw new Error('"html" must be one wrapper element.');var element=wrapper.children[0];return wrapper.children[0].remove(),element},util.createFragment=function(html){var wrapper=document.createElement("div");wrapper.innerHTML=html;for(var fragment=document.createDocumentFragment();wrapper.firstChild;)fragment.appendChild(wrapper.firstChild);return fragment},util.extend=function(dst){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)args[_key-1]=arguments[_key];for(var i=0;i<args.length;i++)if(args[i])for(var keys=Object.keys(args[i]),j=0;j<keys.length;j++){var key=keys[j];dst[key]=args[i][key]}return dst},util.arrayFrom=function(arrayLike){return Array.prototype.slice.apply(arrayLike)},util.parseJSONObjectSafely=function(jsonString){var failSafe=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var result=JSON.parse(""+jsonString);if("object"===("undefined"==typeof result?"undefined":_typeof(result))&&null!==result)return result}catch(e){return failSafe}return failSafe},util.findFromPath=function(path){path=path.split(".");for(var key,el=window;key=path.shift();)el=el[key];return el},util.getTopPage=function(container){return container&&("ons-page"===container.tagName.toLowerCase()?container:container.topPage)||null},util.findToolbarPage=function(container){var page=util.getTopPage(container);if(page){if(page._canAnimateToolbar())return page;for(var i=0;i<page._contentElement.children.length;i++){var nextPage=util.getTopPage(page._contentElement.children[i]);if(nextPage&&!/ons-tabbar/i.test(page._contentElement.children[i].tagName))return util.findToolbarPage(nextPage)}}return null},util.triggerElementEvent=function(target,eventName){var detail=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},event=new CustomEvent(eventName,{bubbles:!0,cancelable:!0,detail:detail});return Object.keys(detail).forEach(function(key){event[key]=detail[key]}),target.dispatchEvent(event),event},util.hasModifier=function(target,modifierName){return!!target.hasAttribute("modifier")&&RegExp("(^|\\s+)"+modifierName+"($|\\s+)","i").test(target.getAttribute("modifier"))},util.addModifier=function(target,modifierName){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return options.autoStyle&&(modifierName=_autostyle2["default"].mapModifier(modifierName,target,options.forceAutoStyle)),!util.hasModifier(target,modifierName)&&(target.setAttribute("modifier",((target.getAttribute("modifier")||"")+" "+modifierName).trim()),!0)},util.removeModifier=function(target,modifierName){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(options.autoStyle&&(modifierName=_autostyle2["default"].mapModifier(modifierName,target,options.forceAutoStyle)),!target.getAttribute("modifier")||!util.hasModifier(target,modifierName))return!1;var newModifiers=target.getAttribute("modifier").split(/\s+/).filter(function(m){return m&&m!==modifierName});return newModifiers.length?target.setAttribute("modifier",newModifiers.join(" ")):target.removeAttribute("modifier"),!0},util.toggleModifier=function(){var options=arguments.length>2?arguments.length<=2?void 0:arguments[2]:{},force="boolean"==typeof options?options:options.force,toggle="boolean"==typeof force?force:!util.hasModifier.apply(util,arguments);toggle?util.addModifier.apply(util,arguments):util.removeModifier.apply(util,arguments)},util.updateParentPosition=function(el){!el._parentUpdated&&el.parentElement&&("static"===window.getComputedStyle(el.parentElement).getPropertyValue("position")&&(el.parentElement.style.position="relative"),el._parentUpdated=!0)},util.toggleAttribute=function(element,name,value){value?element.setAttribute(name,value):element.removeAttribute(name)},util.bindListeners=function(element,listenerNames){listenerNames.forEach(function(name){var boundName=name.replace(/^_[a-z]/,"_bound"+name[1].toUpperCase());element[boundName]=element[boundName]||element[name].bind(element)})},util.each=function(obj,f){return Object.keys(obj).forEach(function(key){return f(key,obj[key])})},util.updateRipple=function(target,hasRipple){var attrs=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};void 0===hasRipple&&(hasRipple=target.hasAttribute("ripple"));var rippleElement=util.findChild(target,"ons-ripple");if(hasRipple){if(!rippleElement){var element=document.createElement("ons-ripple");Object.keys(attrs).forEach(function(key){return element.setAttribute(key,attrs[key])}),target.insertBefore(element,target.firstChild)}}else rippleElement&&rippleElement.remove()},util.animationOptionsParse=_animationOptionsParser2["default"],util.isInteger=function(value){return"number"==typeof value&&isFinite(value)&&Math.floor(value)===value},util.defer=function(){var deferred={};return deferred.promise=new Promise(function(resolve,reject){deferred.resolve=resolve,deferred.reject=reject}),deferred},util.warn=function(){if(!_internal2["default"].config.warningsDisabled){var _console;(_console=console).warn.apply(_console,arguments)}},util.skipContentScroll=function(gesture){var clickedElement=document.elementFromPoint(gesture.center.clientX,gesture.center.clientY),content=util.findParent(clickedElement,".page__content",function(e){return util.match(e,".page")});if(content){var preventScroll=function(e){return e.preventDefault()};content.addEventListener("touchmove",preventScroll,!0);var clean=function clean(e){content.removeEventListener("touchmove",preventScroll,!0),content.removeEventListener("touchend",clean,!0)};content.addEventListener("touchend",clean,!0)}},exports["default"]=util,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function getElementClass(){if("function"!=typeof HTMLElement){var _BaseElement=function(){};return _BaseElement.prototype=document.createElement("div"),_BaseElement}return HTMLElement}Object.defineProperty(exports,"__esModule",{value:!0});var BaseElement=function(_getElementClass){function BaseElement(){return _classCallCheck(this,BaseElement),_possibleConstructorReturn(this,(BaseElement.__proto__||Object.getPrototypeOf(BaseElement)).call(this))}return _inherits(BaseElement,_getElementClass),BaseElement}(getElementClass());exports["default"]=BaseElement,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function isContentReady(element){return element.childNodes.length>0&&setContentReady(element),readyMap.has(element)}function setContentReady(element){readyMap.set(element,!0)}function addCallback(element,fn){queueMap.has(element)||queueMap.set(element,[]),queueMap.get(element).push(fn)}function consumeQueue(element){var callbacks=queueMap.get(element,[])||[];queueMap["delete"](element),callbacks.forEach(function(callback){return callback()})}function contentReady(element){var fn=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(addCallback(element,fn),isContentReady(element))return void consumeQueue(element);var observer=new MutationObserver(function(changes){setContentReady(element),consumeQueue(element)});observer.observe(element,{childList:!0,characterData:!0}),setImmediate(function(){setContentReady(element),consumeQueue(element)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=contentReady;var readyMap=new WeakMap,queueMap=new WeakMap;module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),ModifierUtil=function(){function ModifierUtil(){_classCallCheck(this,ModifierUtil)}return _createClass(ModifierUtil,null,[{key:"diff",value:function(last,current){function makeDict(modifier){var dict={};return ModifierUtil.split(modifier).forEach(function(token){return dict[token]=token}),dict}last=makeDict((""+last).trim()),current=makeDict((""+current).trim());var removed=Object.keys(last).reduce(function(result,token){return current[token]||result.push(token),result},[]),added=Object.keys(current).reduce(function(result,token){return last[token]||result.push(token),result},[]);return{added:added,removed:removed}}},{key:"applyDiffToClassList",value:function(diff,classList,template){diff.added.map(function(modifier){return template.replace(/\*/g,modifier)}).forEach(function(klass){return klass.split(/\s+/).forEach(function(k){return classList.add(k)})}),diff.removed.map(function(modifier){return template.replace(/\*/g,modifier)}).forEach(function(klass){return klass.split(/\s+/).forEach(function(k){return classList.remove(k)})})}},{key:"applyDiffToElement",value:function(diff,element,scheme){Object.keys(scheme).forEach(function(selector){for(var targetElements=!selector||_util2["default"].match(element,selector)?[element]:element.querySelectorAll(selector),i=0;i<targetElements.length;i++)ModifierUtil.applyDiffToClassList(diff,targetElements[i].classList,scheme[selector])})}},{key:"onModifierChanged",value:function(last,current,element,scheme){return ModifierUtil.applyDiffToElement(ModifierUtil.diff(last,element.getAttribute("modifier")||""),element,scheme),_autostyle2["default"].restore(element)}},{key:"initModifier",value:function(element,scheme){var modifier=element.getAttribute("modifier");"string"==typeof modifier&&ModifierUtil.applyDiffToElement({removed:[],added:ModifierUtil.split(modifier)},element,scheme)}},{key:"split",value:function(modifier){return"string"!=typeof modifier?[]:modifier.trim().split(/ +/).filter(function(token){return""!==token})}},{key:"addModifier",value:function(element,modifierToken){if(element.hasAttribute("modifier")){var tokens=ModifierUtil.split(element.getAttribute("modifier"));tokens.indexOf(modifierToken)==-1&&(tokens.push(modifierToken),element.setAttribute("modifier",tokens.join(" ")))}else element.setAttribute("modifier",modifierToken)}},{key:"removeModifier",value:function(element,modifierToken){if(element.hasAttribute("modifier")){var tokens=ModifierUtil.split(element.getAttribute("modifier")),index=tokens.indexOf(modifierToken);index!==-1&&(tokens.splice(index,1),element.setAttribute("modifier",tokens.join(" ")))}}}]),ModifierUtil}();exports["default"]=ModifierUtil,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),autoStyleEnabled=!0,modifiersMap={quiet:"material--flat",light:"material--flat",outline:"material--flat",cta:"","large--quiet":"material--flat large","large--cta":"large",noborder:"",tappable:""},platforms={};platforms.android=function(element){var elementName=element.tagName.toLowerCase();if(!_util2["default"].hasModifier(element,"material")){var oldModifier=element.getAttribute("modifier")||"",newModifier=oldModifier.trim().split(/\s+/).map(function(e){return modifiersMap.hasOwnProperty(e)?modifiersMap[e]:e});newModifier.unshift("material"),element.setAttribute("modifier",newModifier.join(" ").trim())}var elements=["ons-alert-dialog-button","ons-toolbar-button","ons-back-button","ons-button","ons-list-item","ons-fab","ons-speed-dial","ons-speed-dial-item","ons-tab"];elements.indexOf(elementName)===-1||element.hasAttribute("ripple")||element.querySelector("ons-ripple")||("ons-list-item"===elementName?element.hasAttribute("tappable")&&(element.setAttribute("ripple",""),element.removeAttribute("tappable")):element.setAttribute("ripple",""))},platforms.ios=function(element){_util2["default"].removeModifier(element,"material")&&(_util2["default"].removeModifier(element,"material--flat")&&_util2["default"].addModifier(element,_util2["default"].removeModifier(element,"large")?"large--quiet":"quiet"),element.getAttribute("modifier")||element.removeAttribute("modifier")),element.hasAttribute("ripple")&&("ons-list-item"===element.tagName.toLowerCase()&&element.setAttribute("tappable",""),element.removeAttribute("ripple"))};var unlocked={android:!0},getPlatform=function(element,force){if(autoStyleEnabled&&!element.hasAttribute("disable-auto-styling")){var mobileOS=_platform2["default"].getMobileOS();if(platforms.hasOwnProperty(mobileOS)&&(unlocked.hasOwnProperty(mobileOS)||force))return mobileOS}return null},prepare=function(element,force){var p=getPlatform(element,force);p&&platforms[p](element)},mapModifier=function(modifier,element,force){var p=getPlatform(element,force);return p&&modifiersMap.hasOwnProperty(modifier)?modifiersMap[modifier]:modifier},restore=function(element){return"android"===getPlatform(element)&&_util2["default"].addModifier(element,"material")};exports["default"]={isEnabled:function(){return autoStyleEnabled},enable:function(){return autoStyleEnabled=!0},disable:function(){return autoStyleEnabled=!1},prepare:prepare,mapModifier:mapModifier,getPlatform:getPlatform,restore:restore},module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var TIMEOUT_RATIO=1.4,util={};util.capitalize=function(str){return str.charAt(0).toUpperCase()+str.slice(1)},util.buildTransitionValue=function(params){params.property=params.property||"all",params.duration=params.duration||.4,params.timing=params.timing||"linear";var props=params.property.split(/ +/);return props.map(function(prop){return prop+" "+params.duration+"s "+params.timing}).join(", ")},util.onceOnTransitionEnd=function(element,callback){if(!element)return function(){};var fn=function(event){element==event.target&&(event.stopPropagation(),removeListeners(),callback())},removeListeners=function(){util._transitionEndEvents.forEach(function(eventName){element.removeEventListener(eventName,fn,!1)})};return util._transitionEndEvents.forEach(function(eventName){element.addEventListener(eventName,fn,!1)}),removeListeners},util._transitionEndEvents=function(){return"ontransitionend"in window?["transitionend"]:"onwebkittransitionend"in window?["webkitTransitionEnd"]:"webkit"===util.vendorPrefix||"o"===util.vendorPrefix||"moz"===util.vendorPrefix||"ms"===util.vendorPrefix?[util.vendorPrefix+"TransitionEnd","transitionend"]:[]}(),util._cssPropertyDict=function(){for(var styles=window.getComputedStyle(document.documentElement,""),dict={},a="A".charCodeAt(0),z="z".charCodeAt(0),upper=function(s){return s.substr(1).toUpperCase()},i=0;i<styles.length;i++){var key=styles[i].replace(/^[\-]+/,"").replace(/[\-][a-z]/g,upper).replace(/^moz/,"Moz");a<=key.charCodeAt(0)&&z>=key.charCodeAt(0)&&"cssText"!==key&&"parentText"!==key&&(dict[key]=!0)}return dict}(),util.hasCssProperty=function(name){return name in util._cssPropertyDict},util.vendorPrefix=function(){var styles=window.getComputedStyle(document.documentElement,""),pre=(Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/)||""===styles.OLink&&["","o"])[1];return pre}(),util.forceLayoutAtOnce=function(elements,callback){this.batchImmediate(function(){elements.forEach(function(element){element.offsetHeight}),callback()})},util.batchImmediate=function(){var callbacks=[];return function(callback){0===callbacks.length&&setImmediate(function(){var concreateCallbacks=callbacks.slice(0);callbacks=[],concreateCallbacks.forEach(function(callback){callback()})}),callbacks.push(callback)}}(),util.batchAnimationFrame=function(){var callbacks=[],raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,1e3/60)};return function(callback){0===callbacks.length&&raf(function(){var concreateCallbacks=callbacks.slice(0);callbacks=[],concreateCallbacks.forEach(function(callback){callback()})}),callbacks.push(callback)}}(),util.transitionPropertyName=function(){if(util.hasCssProperty("transitionDuration"))return"transition";if(util.hasCssProperty(util.vendorPrefix+"TransitionDuration"))return util.vendorPrefix+"Transition";throw new Error("Invalid state")}();var Animit=function Animit(element){if(!(this instanceof Animit))return new Animit(element);if(element instanceof HTMLElement)this.elements=[element];else{if("[object Array]"!==Object.prototype.toString.call(element))throw new Error("First argument must be an array or an instance of HTMLElement.");this.elements=element}this.transitionQueue=[],this.lastStyleAttributeDict=[]};Animit.prototype={transitionQueue:void 0,elements:void 0,play:function(callback){return"function"==typeof callback&&this.transitionQueue.push(function(done){callback(),done()}),this.startAnimation(),this},queue:function queue(transition,options){var queue=this.transitionQueue;if(transition&&options&&(options.css=transition,transition=new Animit.Transition(options)),transition instanceof Function||transition instanceof Animit.Transition||(transition=transition.css?new Animit.Transition(transition):new Animit.Transition({css:transition})),transition instanceof Function)queue.push(transition);else{if(!(transition instanceof Animit.Transition))throw new Error("Invalid arguments");queue.push(transition.build())}return this},wait:function(seconds){return seconds>0&&this.transitionQueue.push(function(done){setTimeout(done,1e3*seconds)}),this},saveStyle:function(){return this.transitionQueue.push(function(done){this.elements.forEach(function(element,index){for(var css=this.lastStyleAttributeDict[index]={},i=0;i<element.style.length;i++)css[element.style[i]]=element.style[element.style[i]]}.bind(this)),done()}.bind(this)),this},restoreStyle:function(options){function reset(){self.elements.forEach(function(element,index){element.style[transitionName]="none";var css=self.lastStyleAttributeDict[index];if(!css)throw new Error("restoreStyle(): The style is not saved. Invoke saveStyle() before.");self.lastStyleAttributeDict[index]=void 0;for(var i=0,name="";i<element.style.length;i++)name=element.style[i],"undefined"==typeof css[element.style[i]]&&(css[element.style[i]]="");Object.keys(css).forEach(function(key){element.style[key]=css[key]})})}options=options||{};var self=this;if(options.transition&&!options.duration)throw new Error('"options.duration" is required when "options.transition" is enabled.');var transitionName=util.transitionPropertyName;if(options.transition||options.duration&&options.duration>0){var transitionValue=options.transition||"all "+options.duration+"s "+(options.timing||"linear");this.transitionQueue.push(function(done){var timeoutId,elements=this.elements,clearTransition=function(){elements.forEach(function(element){element.style[transitionName]=""})},removeListeners=util.onceOnTransitionEnd(elements[0],function(){clearTimeout(timeoutId),clearTransition(),done()});timeoutId=setTimeout(function(){removeListeners(),clearTransition(),done()},1e3*options.duration*TIMEOUT_RATIO),elements.forEach(function(element,index){var css=self.lastStyleAttributeDict[index];if(!css)throw new Error("restoreStyle(): The style is not saved. Invoke saveStyle() before.");self.lastStyleAttributeDict[index]=void 0;for(var name,i=0,len=element.style.length;i<len;i++)name=element.style[i],void 0===css[name]&&(css[name]="");element.style[transitionName]=transitionValue,Object.keys(css).forEach(function(key){key!==transitionName&&(element.style[key]=css[key])}),element.style[transitionName]=transitionValue})})}else this.transitionQueue.push(function(done){reset(),done()});return this},startAnimation:function(){return this._dequeueTransition(),this},_dequeueTransition:function(){var transition=this.transitionQueue.shift();if(this._currentTransition)throw new Error("Current transition exists.");this._currentTransition=transition;var self=this,called=!1,done=function(){if(called)throw new Error("Invalid state: This callback is called twice.");called=!0,self._currentTransition=void 0,self._dequeueTransition()};transition&&transition.call(this,done)}},Animit.runAll=function(){for(var i=0;i<arguments.length;i++)arguments[i].play()},Animit.Transition=function(options){this.options=options||{},this.options.duration=this.options.duration||0,this.options.timing=this.options.timing||"linear",this.options.css=this.options.css||{},this.options.property=this.options.property||"all"},Animit.Transition.prototype={build:function(){function createActualCssProps(css){var result={};return Object.keys(css).forEach(function(name){var value=css[name];if(util.hasCssProperty(name))return void(result[name]=value);var prefixed=util.vendorPrefix+util.capitalize(name);util.hasCssProperty(prefixed)?result[prefixed]=value:(result[prefixed]=value,result[name]=value)}),result}if(0===Object.keys(this.options.css).length)throw new Error("options.css is required.");var css=createActualCssProps(this.options.css);if(this.options.duration>0){var transitionValue=util.buildTransitionValue(this.options),self=this;return function(callback){var timeoutId,elements=this.elements,timeout=1e3*self.options.duration*TIMEOUT_RATIO,removeListeners=util.onceOnTransitionEnd(elements[0],function(){clearTimeout(timeoutId),callback()});timeoutId=setTimeout(function(){removeListeners(),callback()},timeout),elements.forEach(function(element){element.style[util.transitionPropertyName]=transitionValue,Object.keys(css).forEach(function(name){element.style[name]=css[name]})})}}if(this.options.duration<=0)return function(callback){var elements=this.elements;elements.forEach(function(element){element.style[util.transitionPropertyName]="",Object.keys(css).forEach(function(name){element.style[name]=css[name]})}),elements.length>0?util.forceLayoutAtOnce(elements,function(){util.batchAnimationFrame(callback)}):util.batchAnimationFrame(callback)}}},exports["default"]=Animit,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Platform=function(){function Platform(){_classCallCheck(this,Platform),this._renderPlatform=null}return _createClass(Platform,[{key:"select",value:function(platform){"string"==typeof platform&&(this._renderPlatform=platform.trim().toLowerCase())}},{key:"isWebView",value:function(){if("loading"===document.readyState||"uninitialized"==document.readyState)throw new Error("isWebView() method is available after dom contents loaded.");return!!(window.cordova||window.phonegap||window.PhoneGap)}},{key:"isIOS",value:function(){return this._renderPlatform?"ios"===this._renderPlatform:"object"!==("undefined"==typeof device?"undefined":_typeof(device))||/browser/i.test(device.platform)?/iPhone|iPad|iPod/i.test(navigator.userAgent):/iOS/i.test(device.platform)}},{key:"isAndroid",value:function(){return this._renderPlatform?"android"===this._renderPlatform:"object"!==("undefined"==typeof device?"undefined":_typeof(device))||/browser/i.test(device.platform)?/Android/i.test(navigator.userAgent):/Android/i.test(device.platform)}},{key:"isAndroidPhone",value:function(){return/Android/i.test(navigator.userAgent)&&/Mobile/i.test(navigator.userAgent)}},{key:"isAndroidTablet",value:function(){return/Android/i.test(navigator.userAgent)&&!/Mobile/i.test(navigator.userAgent)}},{key:"isWP",value:function(){return this._renderPlatform?"wp"===this._renderPlatform:"object"!==("undefined"==typeof device?"undefined":_typeof(device))||/browser/i.test(device.platform)?/Windows Phone|IEMobile|WPDesktop/i.test(navigator.userAgent):/Win32NT|WinCE/i.test(device.platform)}},{key:"isIPhone",value:function(){return/iPhone/i.test(navigator.userAgent)}},{key:"isIPad",value:function(){return/iPad/i.test(navigator.userAgent)}},{key:"isIPod",value:function(){return/iPod/i.test(navigator.userAgent)}},{key:"isBlackBerry",value:function(){return this._renderPlatform?"blackberry"===this._renderPlatform:"object"!==("undefined"==typeof device?"undefined":_typeof(device))||/browser/i.test(device.platform)?/BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent):/BlackBerry/i.test(device.platform)}},{key:"isOpera",value:function(){return this._renderPlatform?"opera"===this._renderPlatform:!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0}},{key:"isFirefox",value:function(){return this._renderPlatform?"firefox"===this._renderPlatform:"undefined"!=typeof InstallTrigger}},{key:"isSafari",value:function(){return this._renderPlatform?"safari"===this._renderPlatform:Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||function(p){return"[object SafariRemoteNotification]"===p.toString()}(!window.safari||safari.pushNotification)}},{key:"isChrome",value:function(){return this._renderPlatform?"chrome"===this._renderPlatform:!(!window.chrome||window.opera||navigator.userAgent.indexOf(" OPR/")>=0||navigator.userAgent.indexOf(" Edge/")>=0)}},{key:"isIE",value:function(){return this._renderPlatform?"ie"===this._renderPlatform:!!document.documentMode}},{key:"isEdge",value:function(){return this._renderPlatform?"edge"===this._renderPlatform:navigator.userAgent.indexOf(" Edge/")>=0}},{key:"isIOS7above",value:function(){if("object"===("undefined"==typeof device?"undefined":_typeof(device))&&!/browser/i.test(device.platform))return/iOS/i.test(device.platform)&&parseInt(device.version.split(".")[0])>=7;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){var ver=(navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[""])[0].replace(/_/g,".");return parseInt(ver.split(".")[0])>=7;
}return!1}},{key:"getMobileOS",value:function(){return this.isAndroid()?"android":this.isIOS()?"ios":this.isWP()?"wp":"other"}},{key:"getIOSDevice",value:function(){return this.isIPhone()?"iphone":this.isIPad()?"ipad":this.isIPod()?"ipod":"na"}}]),Platform}();exports["default"]=new Platform,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _internal=__webpack_require__(151),_internal2=_interopRequireDefault(_internal),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_toastQueue=__webpack_require__(57),_toastQueue2=_interopRequireDefault(_toastQueue),_lazyRepeat=__webpack_require__(56);_internal2["default"].AnimatorFactory=_animatorFactory2["default"],_internal2["default"].ModifierUtil=_modifierUtil2["default"],_internal2["default"].ToastQueue=_toastQueue2["default"],_internal2["default"].LazyRepeatProvider=_lazyRepeat.LazyRepeatProvider,_internal2["default"].LazyRepeatDelegate=_lazyRepeat.LazyRepeatDelegate,exports["default"]=_internal2["default"],module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),AnimatorFactory=function(){function AnimatorFactory(opts){if(_classCallCheck(this,AnimatorFactory),this._animators=opts.animators,this._baseClass=opts.baseClass,this._baseClassName=opts.baseClassName||opts.baseClass.name,this._animation=opts.defaultAnimation||"default",this._animationOptions=opts.defaultAnimationOptions||{},!this._animators[this._animation])throw new Error("No such animation: "+this._animation)}return _createClass(AnimatorFactory,[{key:"setAnimationOptions",value:function(options){this._animationOptions=options}},{key:"newAnimator",value:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},defaultAnimator=arguments[1],animator=null;if(options.animation instanceof this._baseClass)return options.animation;var Animator=null;if("string"==typeof options.animation&&(Animator=this._animators[options.animation]),!Animator&&defaultAnimator)animator=defaultAnimator;else{Animator=Animator||this._animators[this._animation];var animationOpts=_util2["default"].extend({},this._animationOptions,options.animationOptions||{},_internal2["default"].config.animationsDisabled?{duration:0,delay:0}:{});animator=new Animator(animationOpts),"function"==typeof animator&&(animator=new animator(animationOpts))}if(!(animator instanceof this._baseClass))throw new Error('"animator" is not an instance of '+this._baseClassName+".");return animator}}],[{key:"parseAnimationOptionsString",value:function(jsonString){try{if("string"==typeof jsonString){var result=_util2["default"].animationOptionsParse(jsonString);if("object"===("undefined"==typeof result?"undefined":_typeof(result))&&null!==result)return result;console.error('"animation-options" attribute must be a JSON object string: '+jsonString)}return{}}catch(e){return console.error('"animation-options" attribute must be a JSON object string: '+jsonString),{}}}}]),AnimatorFactory}();exports["default"]=AnimatorFactory,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";var store=__webpack_require__(73)("wks"),uid=__webpack_require__(38),_Symbol=__webpack_require__(12).Symbol,USE_SYMBOL="function"==typeof _Symbol,$exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)("Symbol."+name))};$exports.store=store},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),BaseAnimator=function(){function BaseAnimator(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,BaseAnimator),this.timing=options.timing||"linear",this.duration=options.duration||0,this.delay=options.delay||0}return _createClass(BaseAnimator,null,[{key:"extend",value:function(){var properties=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},extendedAnimator=this,newAnimator=function(){extendedAnimator.apply(this,arguments),_util2["default"].extend(this,properties)};return newAnimator.prototype=this.prototype,newAnimator}}]),BaseAnimator}();exports["default"]=BaseAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Utilities=__webpack_require__(15),Utilities=_interopRequireWildcard(_Utilities),_CustomElementState=__webpack_require__(42),_CustomElementState2=_interopRequireDefault(_CustomElementState),CustomElementInternals=function(){function CustomElementInternals(){_classCallCheck(this,CustomElementInternals),this._localNameToDefinition=new Map,this._constructorToDefinition=new Map,this._patches=[],this._hasPatches=!1}return _createClass(CustomElementInternals,[{key:"setDefinition",value:function(localName,definition){this._localNameToDefinition.set(localName,definition),this._constructorToDefinition.set(definition.constructor,definition)}},{key:"localNameToDefinition",value:function(localName){return this._localNameToDefinition.get(localName)}},{key:"constructorToDefinition",value:function(constructor){return this._constructorToDefinition.get(constructor)}},{key:"addPatch",value:function(listener){this._hasPatches=!0,this._patches.push(listener)}},{key:"patchTree",value:function(node){var _this=this;this._hasPatches&&Utilities.walkDeepDescendantElements(node,function(element){return _this.patch(element)})}},{key:"patch",value:function(node){if(this._hasPatches&&!node.__CE_patched){node.__CE_patched=!0;for(var i=0;i<this._patches.length;i++)this._patches[i](node)}}},{key:"connectTree",value:function(root){var elements=[];Utilities.walkDeepDescendantElements(root,function(element){return elements.push(element)});for(var i=0;i<elements.length;i++){var element=elements[i];element.__CE_state===_CustomElementState2["default"].custom?Utilities.isConnected(element)&&this.connectedCallback(element):this.upgradeElement(element)}}},{key:"disconnectTree",value:function(root){var elements=[];Utilities.walkDeepDescendantElements(root,function(element){return elements.push(element)});for(var i=0;i<elements.length;i++){var element=elements[i];element.__CE_state===_CustomElementState2["default"].custom&&this.disconnectedCallback(element)}}},{key:"patchAndUpgradeTree",value:function(root){var _this2=this,visitedImports=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,elements=[],gatherElements=function(element){if("link"===element.localName&&"import"===element.getAttribute("rel")){var importNode=element["import"];importNode instanceof Node&&"complete"===importNode.readyState?(importNode.__CE_isImportDocument=!0,importNode.__CE_hasRegistry=!0):element.addEventListener("load",function(){var importNode=element["import"];if(!importNode.__CE_documentLoadHandled){importNode.__CE_documentLoadHandled=!0,importNode.__CE_isImportDocument=!0,importNode.__CE_hasRegistry=!0;new Set(visitedImports);visitedImports["delete"](importNode),_this2.patchAndUpgradeTree(importNode,visitedImports)}})}else elements.push(element)};if(Utilities.walkDeepDescendantElements(root,gatherElements,visitedImports),this._hasPatches)for(var i=0;i<elements.length;i++)this.patch(elements[i]);for(var _i=0;_i<elements.length;_i++)this.upgradeElement(elements[_i])}},{key:"upgradeElement",value:function(element){var currentState=element.__CE_state;if(void 0===currentState){var definition=this.localNameToDefinition(element.localName);if(definition){definition.constructionStack.push(element);var constructor=definition.constructor;try{try{var result=new constructor;if(result!==element)throw new Error("The custom element constructor did not produce the element being upgraded.")}finally{definition.constructionStack.pop()}}catch(e){throw element.__CE_state=_CustomElementState2["default"].failed,e}if(element.__CE_state=_CustomElementState2["default"].custom,element.__CE_definition=definition,definition.attributeChangedCallback)for(var observedAttributes=definition.observedAttributes,i=0;i<observedAttributes.length;i++){var name=observedAttributes[i],value=element.getAttribute(name);null!==value&&this.attributeChangedCallback(element,name,null,value,null)}Utilities.isConnected(element)&&this.connectedCallback(element)}}}},{key:"connectedCallback",value:function(element){var definition=element.__CE_definition;definition.connectedCallback&&definition.connectedCallback.call(element),element.__CE_isConnectedCallbackCalled=!0}},{key:"disconnectedCallback",value:function(element){element.__CE_isConnectedCallbackCalled||this.connectedCallback(element);var definition=element.__CE_definition;definition.disconnectedCallback&&definition.disconnectedCallback.call(element),element.__CE_isConnectedCallbackCalled=void 0}},{key:"attributeChangedCallback",value:function(element,name,oldValue,newValue,namespace){var definition=element.__CE_definition;definition.attributeChangedCallback&&definition.observedAttributes.indexOf(name)>-1&&definition.attributeChangedCallback.call(element,name,oldValue,newValue,namespace)}}]),CustomElementInternals}();exports["default"]=CustomElementInternals,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";var global=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=global)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),NavigatorTransitionAnimator=function(_BaseAnimator){function NavigatorTransitionAnimator(options){return _classCallCheck(this,NavigatorTransitionAnimator),options=_util2["default"].extend({timing:"linear",duration:"0.4",delay:"0"},options||{}),_possibleConstructorReturn(this,(NavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(NavigatorTransitionAnimator)).call(this,options))}return _inherits(NavigatorTransitionAnimator,_BaseAnimator),_createClass(NavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){callback()}},{key:"pop",value:function(enterPage,leavePage,callback){callback()}},{key:"block",value:function(page){var blocker=_util2["default"].createElement('\n      <div style="position: absolute; background-color: transparent; width: 100%; height: 100%; z-index: 100000"></div>\n    ');return page.parentNode.appendChild(blocker),function(){return blocker.remove()}}}]),NavigatorTransitionAnimator}(_baseAnimator2["default"]);exports["default"]=NavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function setup(){GestureDetector.READY||(Event.determineEventTypes(),Utils.each(GestureDetector.gestures,function(gesture){Detection.register(gesture)}),Event.onTouch(GestureDetector.DOCUMENT,EVENT_MOVE,Detection.detect),Event.onTouch(GestureDetector.DOCUMENT,EVENT_END,Detection.detect),GestureDetector.READY=!0)}Object.defineProperty(exports,"__esModule",{value:!0});var Event,Utils,Detection,PointerEvent,GestureDetector=function GestureDetector(element,options){return new GestureDetector.Instance(element,options||{})};GestureDetector.defaults={behavior:{touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},GestureDetector.DOCUMENT=document,GestureDetector.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,GestureDetector.HAS_TOUCHEVENTS="ontouchstart"in window,GestureDetector.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent),GestureDetector.NO_MOUSEEVENTS=GestureDetector.HAS_TOUCHEVENTS&&GestureDetector.IS_MOBILE||GestureDetector.HAS_POINTEREVENTS,GestureDetector.CALCULATE_INTERVAL=25;var EVENT_TYPES={},DIRECTION_DOWN=GestureDetector.DIRECTION_DOWN="down",DIRECTION_LEFT=GestureDetector.DIRECTION_LEFT="left",DIRECTION_UP=GestureDetector.DIRECTION_UP="up",DIRECTION_RIGHT=GestureDetector.DIRECTION_RIGHT="right",POINTER_MOUSE=GestureDetector.POINTER_MOUSE="mouse",POINTER_TOUCH=GestureDetector.POINTER_TOUCH="touch",POINTER_PEN=GestureDetector.POINTER_PEN="pen",EVENT_START=GestureDetector.EVENT_START="start",EVENT_MOVE=GestureDetector.EVENT_MOVE="move",EVENT_END=GestureDetector.EVENT_END="end",EVENT_RELEASE=GestureDetector.EVENT_RELEASE="release",EVENT_TOUCH=GestureDetector.EVENT_TOUCH="touch";GestureDetector.READY=!1,GestureDetector.plugins=GestureDetector.plugins||{},GestureDetector.gestures=GestureDetector.gestures||{},Utils=GestureDetector.utils={extend:function(dest,src,merge){for(var key in src)!src.hasOwnProperty(key)||void 0!==dest[key]&&merge||(dest[key]=src[key]);return dest},on:function(element,type,handler){element.addEventListener(type,handler,!1)},off:function(element,type,handler){element.removeEventListener(type,handler,!1)},each:function(obj,iterator,context){var i,len;if("forEach"in obj)obj.forEach(iterator,context);else if(void 0!==obj.length){for(i=0,len=obj.length;i<len;i++)if(iterator.call(context,obj[i],i,obj)===!1)return}else for(i in obj)if(obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj)===!1)return},inStr:function(src,find){return src.indexOf(find)>-1},inArray:function(src,find){if(src.indexOf){var index=src.indexOf(find);return index!==-1&&index}for(var i=0,len=src.length;i<len;i++)if(src[i]===find)return i;return!1},toArray:function(obj){return Array.prototype.slice.call(obj,0)},hasParent:function(node,parent){for(;node;){if(node==parent)return!0;node=node.parentNode}return!1},getCenter:function(touches){var pageX=[],pageY=[],clientX=[],clientY=[],min=Math.min,max=Math.max;return 1===touches.length?{pageX:touches[0].pageX,pageY:touches[0].pageY,clientX:touches[0].clientX,clientY:touches[0].clientY}:(Utils.each(touches,function(touch){pageX.push(touch.pageX),pageY.push(touch.pageY),clientX.push(touch.clientX),clientY.push(touch.clientY)}),{pageX:(min.apply(Math,pageX)+max.apply(Math,pageX))/2,pageY:(min.apply(Math,pageY)+max.apply(Math,pageY))/2,clientX:(min.apply(Math,clientX)+max.apply(Math,clientX))/2,clientY:(min.apply(Math,clientY)+max.apply(Math,clientY))/2})},getVelocity:function(deltaTime,deltaX,deltaY){return{x:Math.abs(deltaX/deltaTime)||0,y:Math.abs(deltaY/deltaTime)||0}},getAngle:function(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return 180*Math.atan2(y,x)/Math.PI},getDirection:function(touch1,touch2){var x=Math.abs(touch1.clientX-touch2.clientX),y=Math.abs(touch1.clientY-touch2.clientY);return x>=y?touch1.clientX-touch2.clientX>0?DIRECTION_LEFT:DIRECTION_RIGHT:touch1.clientY-touch2.clientY>0?DIRECTION_UP:DIRECTION_DOWN},getDistance:function(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return Math.sqrt(x*x+y*y)},getScale:function(start,end){return start.length>=2&&end.length>=2?this.getDistance(end[0],end[1])/this.getDistance(start[0],start[1]):1},getRotation:function(start,end){return start.length>=2&&end.length>=2?this.getAngle(end[1],end[0])-this.getAngle(start[1],start[0]):0},isVertical:function(direction){return direction==DIRECTION_UP||direction==DIRECTION_DOWN},setPrefixedCss:function(element,prop,value,toggle){var prefixes=["","Webkit","Moz","O","ms"];prop=Utils.toCamelCase(prop);for(var i=0;i<prefixes.length;i++){var p=prop;if(prefixes[i]&&(p=prefixes[i]+p.slice(0,1).toUpperCase()+p.slice(1)),p in element.style){element.style[p]=(null===toggle||toggle)&&value||"";break}}},toggleBehavior:function(element,props,toggle){if(props&&element&&element.style){Utils.each(props,function(value,prop){Utils.setPrefixedCss(element,prop,value,toggle)});var falseFn=toggle&&function(){return!1};"none"==props.userSelect&&(element.onselectstart=falseFn),"none"==props.userDrag&&(element.ondragstart=falseFn)}},toCamelCase:function(str){return str.replace(/[_-]([a-z])/g,function(s){return s[1].toUpperCase()})}},Event=GestureDetector.event={preventMouseEvents:!1,started:!1,shouldDetect:!1,on:function(element,type,handler,hook){var types=type.split(" ");Utils.each(types,function(type){Utils.on(element,type,handler),hook&&hook(type)})},off:function(element,type,handler,hook){var types=type.split(" ");Utils.each(types,function(type){Utils.off(element,type,handler),hook&&hook(type)})},onTouch:function(element,eventType,handler){var self=this,onTouchHandler=function(ev){var triggerType,srcType=ev.type.toLowerCase(),isPointer=GestureDetector.HAS_POINTEREVENTS,isMouse=Utils.inStr(srcType,"mouse");isMouse&&self.preventMouseEvents||(isMouse&&eventType==EVENT_START&&0===ev.button?(self.preventMouseEvents=!1,self.shouldDetect=!0):isPointer&&eventType==EVENT_START?self.shouldDetect=1===ev.buttons||PointerEvent.matchType(POINTER_TOUCH,ev):isMouse||eventType!=EVENT_START||(self.preventMouseEvents=!0,self.shouldDetect=!0),isPointer&&eventType!=EVENT_END&&PointerEvent.updatePointer(eventType,ev),self.shouldDetect&&(triggerType=self.doDetect.call(self,ev,eventType,element,handler)),triggerType==EVENT_END&&(self.preventMouseEvents=!1,self.shouldDetect=!1,PointerEvent.reset()),isPointer&&eventType==EVENT_END&&PointerEvent.updatePointer(eventType,ev))};return this.on(element,EVENT_TYPES[eventType],onTouchHandler),onTouchHandler},doDetect:function(ev,eventType,element,handler){var touchList=this.getTouchList(ev,eventType),touchListLength=touchList.length,triggerType=eventType,triggerChange=touchList.trigger,changedLength=touchListLength;eventType==EVENT_START?triggerChange=EVENT_TOUCH:eventType==EVENT_END&&(triggerChange=EVENT_RELEASE,changedLength=touchList.length-(ev.changedTouches?ev.changedTouches.length:1)),changedLength>0&&this.started&&(triggerType=EVENT_MOVE),this.started=!0;var evData=this.collectEventData(element,triggerType,touchList,ev);return eventType!=EVENT_END&&handler.call(Detection,evData),triggerChange&&(evData.changedLength=changedLength,evData.eventType=triggerChange,handler.call(Detection,evData),evData.eventType=triggerType,delete evData.changedLength),triggerType==EVENT_END&&(handler.call(Detection,evData),this.started=!1),triggerType},determineEventTypes:function(){var types;return types=GestureDetector.HAS_POINTEREVENTS?window.PointerEvent?["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]:["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]:GestureDetector.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],EVENT_TYPES[EVENT_START]=types[0],EVENT_TYPES[EVENT_MOVE]=types[1],EVENT_TYPES[EVENT_END]=types[2],EVENT_TYPES},getTouchList:function(ev,eventType){if(GestureDetector.HAS_POINTEREVENTS)return PointerEvent.getTouchList();if(ev.touches){if(eventType==EVENT_MOVE)return ev.touches;var identifiers=[],concat=[].concat(Utils.toArray(ev.touches),Utils.toArray(ev.changedTouches)),touchList=[];return Utils.each(concat,function(touch){Utils.inArray(identifiers,touch.identifier)===!1&&touchList.push(touch),identifiers.push(touch.identifier)}),touchList}return ev.identifier=1,[ev]},collectEventData:function(element,eventType,touches,ev){var pointerType=POINTER_TOUCH;return Utils.inStr(ev.type,"mouse")||PointerEvent.matchType(POINTER_MOUSE,ev)?pointerType=POINTER_MOUSE:PointerEvent.matchType(POINTER_PEN,ev)&&(pointerType=POINTER_PEN),{center:Utils.getCenter(touches),timeStamp:Date.now(),target:ev.target,touches:touches,eventType:eventType,pointerType:pointerType,srcEvent:ev,preventDefault:function(){var srcEvent=this.srcEvent;srcEvent.preventManipulation&&srcEvent.preventManipulation(),srcEvent.preventDefault&&srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return Detection.stopDetect()}}}},PointerEvent=GestureDetector.PointerEvent={pointers:{},getTouchList:function(){var touchlist=[];return Utils.each(this.pointers,function(pointer){touchlist.push(pointer)}),touchlist},updatePointer:function(eventType,pointerEvent){eventType==EVENT_END||eventType!=EVENT_END&&1!==pointerEvent.buttons?delete this.pointers[pointerEvent.pointerId]:(pointerEvent.identifier=pointerEvent.pointerId,this.pointers[pointerEvent.pointerId]=pointerEvent)},matchType:function(pointerType,ev){if(!ev.pointerType)return!1;var pt=ev.pointerType,types={};return types[POINTER_MOUSE]=pt===(ev.MSPOINTER_TYPE_MOUSE||POINTER_MOUSE),types[POINTER_TOUCH]=pt===(ev.MSPOINTER_TYPE_TOUCH||POINTER_TOUCH),types[POINTER_PEN]=pt===(ev.MSPOINTER_TYPE_PEN||POINTER_PEN),types[pointerType]},reset:function(){this.pointers={}}},Detection=GestureDetector.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(inst,eventData){this.current||(this.stopped=!1,this.current={inst:inst,startEvent:Utils.extend({},eventData),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(eventData))},detect:function(eventData){if(this.current&&!this.stopped){eventData=this.extendEventData(eventData);var inst=this.current.inst,instOptions=inst.options;return Utils.each(this.gestures,function(gesture){!this.stopped&&inst.enabled&&instOptions[gesture.name]&&gesture.handler.call(gesture,eventData,inst)},this),this.current&&(this.current.lastEvent=eventData),eventData.eventType==EVENT_END&&this.stopDetect(),eventData}},stopDetect:function(){this.previous=Utils.extend({},this.current),this.current=null,this.stopped=!0},getCalculatedData:function(ev,center,deltaTime,deltaX,deltaY){var cur=this.current,recalc=!1,calcEv=cur.lastCalcEvent,calcData=cur.lastCalcData;calcEv&&ev.timeStamp-calcEv.timeStamp>GestureDetector.CALCULATE_INTERVAL&&(center=calcEv.center,deltaTime=ev.timeStamp-calcEv.timeStamp,deltaX=ev.center.clientX-calcEv.center.clientX,deltaY=ev.center.clientY-calcEv.center.clientY,recalc=!0),ev.eventType!=EVENT_TOUCH&&ev.eventType!=EVENT_RELEASE||(cur.futureCalcEvent=ev),cur.lastCalcEvent&&!recalc||(calcData.velocity=Utils.getVelocity(deltaTime,deltaX,deltaY),calcData.angle=Utils.getAngle(center,ev.center),calcData.direction=Utils.getDirection(center,ev.center),cur.lastCalcEvent=cur.futureCalcEvent||ev,cur.futureCalcEvent=ev),ev.velocityX=calcData.velocity.x,ev.velocityY=calcData.velocity.y,ev.interimAngle=calcData.angle,ev.interimDirection=calcData.direction},extendEventData:function(ev){var cur=this.current,startEv=cur.startEvent,lastEv=cur.lastEvent||startEv;ev.eventType!=EVENT_TOUCH&&ev.eventType!=EVENT_RELEASE||(startEv.touches=[],Utils.each(ev.touches,function(touch){startEv.touches.push({clientX:touch.clientX,clientY:touch.clientY})}));var deltaTime=ev.timeStamp-startEv.timeStamp,deltaX=ev.center.clientX-startEv.center.clientX,deltaY=ev.center.clientY-startEv.center.clientY;return this.getCalculatedData(ev,lastEv.center,deltaTime,deltaX,deltaY),Utils.extend(ev,{startEvent:startEv,deltaTime:deltaTime,deltaX:deltaX,deltaY:deltaY,distance:Utils.getDistance(startEv.center,ev.center),angle:Utils.getAngle(startEv.center,ev.center),direction:Utils.getDirection(startEv.center,ev.center),scale:Utils.getScale(startEv.touches,ev.touches),rotation:Utils.getRotation(startEv.touches,ev.touches)}),ev},register:function(gesture){var options=gesture.defaults||{};return void 0===options[gesture.name]&&(options[gesture.name]=!0),Utils.extend(GestureDetector.defaults,options,!0),gesture.index=gesture.index||1e3,this.gestures.push(gesture),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}},GestureDetector.Instance=function(element,options){var self=this;setup(),this.element=element,this.enabled=!0,Utils.each(options,function(value,name){delete options[name],options[Utils.toCamelCase(name)]=value}),this.options=Utils.extend(Utils.extend({},GestureDetector.defaults),options||{}),this.options.behavior&&Utils.toggleBehavior(this.element,this.options.behavior,!0),this.eventStartHandler=Event.onTouch(element,EVENT_START,function(ev){self.enabled&&ev.eventType==EVENT_START?Detection.startDetect(self,ev):ev.eventType==EVENT_TOUCH&&Detection.detect(ev)}),this.eventHandlers=[]},GestureDetector.Instance.prototype={on:function(gestures,handler){var self=this;return Event.on(self.element,gestures,handler,function(type){self.eventHandlers.push({gesture:type,handler:handler})}),self},off:function(gestures,handler){var self=this;return Event.off(self.element,gestures,handler,function(type){var index=Utils.inArray({gesture:type,handler:handler});index!==!1&&self.eventHandlers.splice(index,1)}),self},trigger:function(gesture,eventData){eventData||(eventData={});var event=GestureDetector.DOCUMENT.createEvent("Event");event.initEvent(gesture,!0,!0),event.gesture=eventData;var element=this.element;return Utils.hasParent(eventData.target,element)&&(element=eventData.target),element.dispatchEvent(event),this},enable:function(state){return this.enabled=state,this},dispose:function(){var i,eh;for(Utils.toggleBehavior(this.element,this.options.behavior,!1),i=-1;eh=this.eventHandlers[++i];)Utils.off(this.element,eh.gesture,eh.handler);return this.eventHandlers=[],Event.off(this.element,EVENT_TYPES[EVENT_START],this.eventStartHandler),null}},function(name){function dragGesture(ev,inst){var cur=Detection.current;if(!(inst.options.dragMaxTouches>0&&ev.touches.length>inst.options.dragMaxTouches))switch(ev.eventType){case EVENT_START:triggered=!1;break;case EVENT_MOVE:if(ev.distance<inst.options.dragMinDistance&&cur.name!=name)return;var startCenter=cur.startEvent.center;if(cur.name!=name&&(cur.name=name,inst.options.dragDistanceCorrection&&ev.distance>0)){var factor=Math.abs(inst.options.dragMinDistance/ev.distance);startCenter.pageX+=ev.deltaX*factor,startCenter.pageY+=ev.deltaY*factor,startCenter.clientX+=ev.deltaX*factor,startCenter.clientY+=ev.deltaY*factor,ev=Detection.extendEventData(ev)}(cur.lastEvent.dragLockToAxis||inst.options.dragLockToAxis&&inst.options.dragLockMinDistance<=ev.distance)&&(ev.dragLockToAxis=!0);var lastDirection=cur.lastEvent.direction;ev.dragLockToAxis&&lastDirection!==ev.direction&&(Utils.isVertical(lastDirection)?ev.direction=ev.deltaY<0?DIRECTION_UP:DIRECTION_DOWN:ev.direction=ev.deltaX<0?DIRECTION_LEFT:DIRECTION_RIGHT),triggered||(inst.trigger(name+"start",ev),triggered=!0),inst.trigger(name,ev),inst.trigger(name+ev.direction,ev);var isVertical=Utils.isVertical(ev.direction);(inst.options.dragBlockVertical&&isVertical||inst.options.dragBlockHorizontal&&!isVertical)&&ev.preventDefault();break;case EVENT_RELEASE:triggered&&ev.changedLength<=inst.options.dragMaxTouches&&(inst.trigger(name+"end",ev),triggered=!1);break;case EVENT_END:triggered=!1}}var triggered=!1;GestureDetector.gestures.Drag={name:name,index:50,handler:dragGesture,defaults:{dragMinDistance:10,dragDistanceCorrection:!0,dragMaxTouches:1,dragBlockHorizontal:!1,dragBlockVertical:!1,dragLockToAxis:!1,dragLockMinDistance:25}}}("drag"),GestureDetector.gestures.Gesture={name:"gesture",index:1337,handler:function(ev,inst){inst.trigger(this.name,ev)}},function(name){function holdGesture(ev,inst){var options=inst.options,current=Detection.current;switch(ev.eventType){case EVENT_START:clearTimeout(timer),current.name=name,timer=setTimeout(function(){current&&current.name==name&&inst.trigger(name,ev)},options.holdTimeout);break;case EVENT_MOVE:ev.distance>options.holdThreshold&&clearTimeout(timer);break;case EVENT_RELEASE:clearTimeout(timer)}}var timer;GestureDetector.gestures.Hold={name:name,index:10,
defaults:{holdTimeout:500,holdThreshold:2},handler:holdGesture}}("hold"),GestureDetector.gestures.Release={name:"release",index:1/0,handler:function(ev,inst){ev.eventType==EVENT_RELEASE&&inst.trigger(this.name,ev)}},GestureDetector.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:.6,swipeVelocityY:.6},handler:function(ev,inst){if(ev.eventType==EVENT_RELEASE){var touches=ev.touches.length,options=inst.options;if(touches<options.swipeMinTouches||touches>options.swipeMaxTouches)return;(ev.velocityX>options.swipeVelocityX||ev.velocityY>options.swipeVelocityY)&&(inst.trigger(this.name,ev),inst.trigger(this.name+ev.direction,ev))}}},function(name){function tapGesture(ev,inst){var sincePrev,didDoubleTap,options=inst.options,current=Detection.current,prev=Detection.previous;switch(ev.eventType){case EVENT_START:hasMoved=!1;break;case EVENT_MOVE:hasMoved=hasMoved||ev.distance>options.tapMaxDistance;break;case EVENT_END:!Utils.inStr(ev.srcEvent.type,"cancel")&&ev.deltaTime<options.tapMaxTime&&!hasMoved&&(sincePrev=prev&&prev.lastEvent&&ev.timeStamp-prev.lastEvent.timeStamp,didDoubleTap=!1,prev&&prev.name==name&&sincePrev&&sincePrev<options.doubleTapInterval&&ev.distance<options.doubleTapDistance&&(inst.trigger("doubletap",ev),didDoubleTap=!0),didDoubleTap&&!options.tapAlways||(current.name=name,inst.trigger(current.name,ev)))}}var hasMoved=!1;GestureDetector.gestures.Tap={name:name,index:100,handler:tapGesture,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:!0,doubleTapDistance:20,doubleTapInterval:300}}}("tap"),GestureDetector.gestures.Touch={name:"touch",index:-(1/0),defaults:{preventDefault:!1,preventMouse:!1},handler:function(ev,inst){return inst.options.preventMouse&&ev.pointerType==POINTER_MOUSE?void ev.stopDetect():(inst.options.preventDefault&&ev.preventDefault(),void(ev.eventType==EVENT_TOUCH&&inst.trigger("touch",ev)))}},function(name){function transformGesture(ev,inst){switch(ev.eventType){case EVENT_START:triggered=!1;break;case EVENT_MOVE:if(ev.touches.length<2)return;var scaleThreshold=Math.abs(1-ev.scale),rotationThreshold=Math.abs(ev.rotation);if(scaleThreshold<inst.options.transformMinScale&&rotationThreshold<inst.options.transformMinRotation)return;Detection.current.name=name,triggered||(inst.trigger(name+"start",ev),triggered=!0),inst.trigger(name,ev),rotationThreshold>inst.options.transformMinRotation&&inst.trigger("rotate",ev),scaleThreshold>inst.options.transformMinScale&&(inst.trigger("pinch",ev),inst.trigger("pinch"+(ev.scale<1?"in":"out"),ev));break;case EVENT_RELEASE:triggered&&ev.changedLength<2&&(inst.trigger(name+"end",ev),triggered=!1)}}var triggered=!1;GestureDetector.gestures.Transform={name:name,index:45,defaults:{transformMinScale:.01,transformMinRotation:1},handler:transformGesture}}("transform"),exports["default"]=GestureDetector,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function isValidCustomElementName(localName){var reserved=reservedTagList.has(localName),validForm=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(localName);return!reserved&&validForm}function isConnected(node){var nativeValue=node.isConnected;if(void 0!==nativeValue)return nativeValue;for(var current=node;current&&!(current.__CE_isImportDocument||current instanceof Document);)current=current.parentNode||(window.ShadowRoot&&current instanceof ShadowRoot?current.host:void 0);return!(!current||!(current.__CE_isImportDocument||current instanceof Document))}function nextSiblingOrAncestorSibling(root,start){for(var node=start;node&&node!==root&&!node.nextSibling;)node=node.parentNode;return node&&node!==root?node.nextSibling:null}function nextNode(root,start){return start.firstChild?start.firstChild:nextSiblingOrAncestorSibling(root,start)}function walkDeepDescendantElements(root,callback){for(var visitedImports=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Set,node=root;node;){if(node.nodeType===Node.ELEMENT_NODE){var element=node;callback(element);var localName=element.localName;if("link"===localName&&"import"===element.getAttribute("rel")){var importNode=element["import"];if(importNode instanceof Node&&!visitedImports.has(importNode)){visitedImports.add(importNode);for(var child=importNode.firstChild;child;child=child.nextSibling)walkDeepDescendantElements(child,callback,visitedImports)}node=nextSiblingOrAncestorSibling(root,element);continue}if("template"===localName){node=nextSiblingOrAncestorSibling(root,element);continue}var shadowRoot=element.__CE_shadowRoot;if(shadowRoot)for(var _child=shadowRoot.firstChild;_child;_child=_child.nextSibling)walkDeepDescendantElements(_child,callback,visitedImports)}node=nextNode(root,node)}}function setPropertyUnchecked(destination,name,value){destination[name]=value}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isValidCustomElementName=isValidCustomElementName,exports.isConnected=isConnected,exports.walkDeepDescendantElements=walkDeepDescendantElements,exports.setPropertyUnchecked=setPropertyUnchecked;var reservedTagList=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"])},function(module,exports,__webpack_require__){"use strict";module.exports=!__webpack_require__(36)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(module,exports,__webpack_require__){"use strict";var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key)}},function(module,exports,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};module.exports=function(it){return"object"===("undefined"==typeof it?"undefined":_typeof(it))?null!==it:"function"==typeof it}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_doorlock=__webpack_require__(32),_doorlock2=_interopRequireDefault(_doorlock),_deviceBackButtonDispatcher=__webpack_require__(26),_deviceBackButtonDispatcher2=_interopRequireDefault(_deviceBackButtonDispatcher),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),BaseDialogElement=function(_BaseElement){function BaseDialogElement(){_classCallCheck(this,BaseDialogElement);var _this=_possibleConstructorReturn(this,(BaseDialogElement.__proto__||Object.getPrototypeOf(BaseDialogElement)).call(this));return _this._visible=!1,_this._doorLock=new _doorlock2["default"],_this._boundCancel=function(){return _this._cancel()},_this._selfCamelName=_util2["default"].camelize(_this.tagName.slice(4)),_this._defaultDBB=function(e){return _this.cancelable?_this._cancel():e.callParentHandler()},_this._animatorFactory=_this._updateAnimatorFactory(),_this}return _inherits(BaseDialogElement,_BaseElement),_createClass(BaseDialogElement,[{key:"_updateAnimatorFactory",value:function(){throw new Error("_updateAnimatorFactory method must be implemented.")}},{key:"_toggleStyle",value:function(shouldShow){this.style.display=shouldShow?"block":"none"}},{key:"_scheme",get:function(){throw new Error("_scheme getter must be implemented.")}}]),_createClass(BaseDialogElement,[{key:"_cancel",value:function(){var _this2=this;this.cancelable&&!this._running&&(this._running=!0,this.hide().then(function(){_this2._running=!1,_util2["default"].triggerElementEvent(_this2,"dialog-cancel")},function(){return _this2._running=!1}))}},{key:"show",value:function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return this._setVisible.apply(this,[!0].concat(args))}},{key:"hide",value:function(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return this._setVisible.apply(this,[!1].concat(args))}},{key:"toggle",value:function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];return this._setVisible.apply(this,[!this.visible].concat(args))}},{key:"_setVisible",value:function(shouldShow){var _util$triggerElementE,_this3=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},action=shouldShow?"show":"hide";options=_extends({},options),options.animationOptions=_util2["default"].extend(options.animationOptions||{},_animatorFactory2["default"].parseAnimationOptionsString(this.getAttribute("animation-options")));var canceled=!1;return _util2["default"].triggerElementEvent(this,"pre"+action,(_util$triggerElementE={},_defineProperty(_util$triggerElementE,this._selfCamelName,this),_defineProperty(_util$triggerElementE,"cancel",function(){return canceled=!0}),_util$triggerElementE)),canceled?Promise.reject("Canceled in pre"+action+" event."):new Promise(function(resolve){_this3._doorLock.waitUnlock(function(){var unlock=_this3._doorLock.lock(),animator=_this3._animatorFactory.newAnimator(options);shouldShow&&_this3._toggleStyle(!0,options),(0,_contentReady2["default"])(_this3,function(){animator[action](_this3,function(){!shouldShow&&_this3._toggleStyle(!1,options),_this3._visible=shouldShow,unlock(),_util2["default"].propagateAction(_this3,"_"+action),_util2["default"].triggerElementEvent(_this3,"post"+action,_defineProperty({},_this3._selfCamelName,_this3)),options.callback instanceof Function&&options.callback(_this3),resolve(_this3)})})})})}},{key:"_updateMask",value:function(){var _this4=this;(0,_contentReady2["default"])(this,function(){_this4._mask&&_this4.getAttribute("mask-color")&&(_this4._mask.style.backgroundColor=_this4.getAttribute("mask-color"))})}},{key:"connectedCallback",value:function(){var _this5=this;this.onDeviceBackButton=this._defaultDBB.bind(this),(0,_contentReady2["default"])(this,function(){_this5._mask&&_this5._mask.addEventListener("click",_this5._boundCancel,!1)})}},{key:"disconnectedCallback",value:function(){this._backButtonHandler.destroy(),this._backButtonHandler=null,this._mask&&this._mask.removeEventListener("click",this._boundCancel.bind(this),!1)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,this._scheme);break;case"animation":this._animatorFactory=this._updateAnimatorFactory();break;case"mask-color":this._updateMask()}}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(callback){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=_deviceBackButtonDispatcher2["default"].createHandler(this,callback)}},{key:"visible",get:function(){return this._visible}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}},{key:"cancelable",set:function(value){return _util2["default"].toggleAttribute(this,"cancelable",value)},get:function(){return this.hasAttribute("cancelable")}}],[{key:"observedAttributes",get:function(){return["modifier","animation","mask-color"]}},{key:"events",get:function(){return["preshow","postshow","prehide","posthide","dialog-cancel"]}}]),BaseDialogElement}(_baseElement2["default"]);exports["default"]=BaseDialogElement,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";var isObject=__webpack_require__(18);module.exports=function(it){if(!isObject(it))throw TypeError(it+" is not an object!");return it}},function(module,exports,__webpack_require__){"use strict";var core=module.exports={version:"2.4.0"};"number"==typeof __e&&(__e=core)},function(module,exports,__webpack_require__){"use strict";var dP=__webpack_require__(23),createDesc=__webpack_require__(46);module.exports=__webpack_require__(16)?function(object,key,value){return dP.f(object,key,createDesc(1,value))}:function(object,key,value){return object[key]=value,object}},function(module,exports,__webpack_require__){"use strict";var anObject=__webpack_require__(20),IE8_DOM_DEFINE=__webpack_require__(67),toPrimitive=__webpack_require__(75),dP=Object.defineProperty;exports.f=__webpack_require__(16)?Object.defineProperty:function(O,P,Attributes){if(anObject(O),P=toPrimitive(P,!0),anObject(Attributes),IE8_DOM_DEFINE)try{return dP(O,P,Attributes)}catch(e){}if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported!");return"value"in Attributes&&(O[P]=Attributes.value),O}},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(12),hide=__webpack_require__(22),has=__webpack_require__(17),SRC=__webpack_require__(38)("src"),TO_STRING="toString",$toString=Function[TO_STRING],TPL=(""+$toString).split(TO_STRING);__webpack_require__(21).inspectSource=function(it){return $toString.call(it)},(module.exports=function(O,key,val,safe){var isFunction="function"==typeof val;isFunction&&(has(val,"name")||hide(val,"name",key)),O[key]!==val&&(isFunction&&(has(val,SRC)||hide(val,SRC,O[key]?""+O[key]:TPL.join(String(key)))),O===global?O[key]=val:safe?O[key]?O[key]=val:hide(O,key,val):(delete O[key],hide(O,key,val)))})(Function.prototype,TO_STRING,function(){return"function"==typeof this&&this[SRC]||$toString.call(this)})},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),ToastAnimator=function(_BaseAnimator){function ToastAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;return _classCallCheck(this,ToastAnimator),_possibleConstructorReturn(this,(ToastAnimator.__proto__||Object.getPrototypeOf(ToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(ToastAnimator,_BaseAnimator),_createClass(ToastAnimator,[{key:"show",value:function(modal,callback){callback()}},{key:"hide",value:function(modal,callback){callback()}}]),ToastAnimator}(_baseAnimator2["default"]);exports["default"]=ToastAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),util={_ready:!1,_domContentLoaded:!1,_onDOMContentLoaded:function(){util._domContentLoaded=!0,_platform2["default"].isWebView()?window.document.addEventListener("deviceready",function(){util._ready=!0},!1):util._ready=!0},addBackButtonListener:function(fn){if(!this._domContentLoaded)throw new Error("This method is available after DOMContentLoaded");this._ready?window.document.addEventListener("backbutton",fn,!1):window.document.addEventListener("deviceready",function(){window.document.addEventListener("backbutton",fn,!1)})},removeBackButtonListener:function(fn){if(!this._domContentLoaded)throw new Error("This method is available after DOMContentLoaded");this._ready?window.document.removeEventListener("backbutton",fn,!1):window.document.addEventListener("deviceready",function(){window.document.removeEventListener("backbutton",fn,!1)})}};window.addEventListener("DOMContentLoaded",function(){return util._onDOMContentLoaded()},!1);var HandlerRepository={_store:{},_genId:function(){var i=0;return function(){return i++}}(),set:function(element,handler){element.dataset.deviceBackButtonHandlerId&&this.remove(element);var id=element.dataset.deviceBackButtonHandlerId=HandlerRepository._genId();this._store[id]=handler},remove:function(element){element.dataset.deviceBackButtonHandlerId&&(delete this._store[element.dataset.deviceBackButtonHandlerId],delete element.dataset.deviceBackButtonHandlerId)},get:function(element){if(element.dataset.deviceBackButtonHandlerId){var id=element.dataset.deviceBackButtonHandlerId;if(!this._store[id])throw new Error;return this._store[id]}},has:function(element){if(!element.dataset)return!1;var id=element.dataset.deviceBackButtonHandlerId;return!!this._store[id]}},DeviceBackButtonDispatcher=function(){function DeviceBackButtonDispatcher(){_classCallCheck(this,DeviceBackButtonDispatcher),this._isEnabled=!1,this._boundCallback=this._callback.bind(this)}return _createClass(DeviceBackButtonDispatcher,[{key:"enable",value:function(){this._isEnabled||(util.addBackButtonListener(this._boundCallback),this._isEnabled=!0)}},{key:"disable",value:function(){this._isEnabled&&(util.removeBackButtonListener(this._boundCallback),this._isEnabled=!1)}},{key:"fireDeviceBackButtonEvent",value:function(){var event=document.createEvent("Event");event.initEvent("backbutton",!0,!0),document.dispatchEvent(event)}},{key:"_callback",value:function(){this._dispatchDeviceBackButtonEvent()}},{key:"createHandler",value:function(element,callback){if(!(element instanceof HTMLElement))throw new Error("element must be an instance of HTMLElement");if(!(callback instanceof Function))throw new Error("callback must be an instance of Function");var handler={_callback:callback,_element:element,disable:function(){HandlerRepository.remove(element)},setListener:function(callback){this._callback=callback},enable:function(){HandlerRepository.set(element,this)},isEnabled:function(){return HandlerRepository.get(element)===this},destroy:function(){HandlerRepository.remove(element),this._callback=this._element=null}};return handler.enable(),handler}},{key:"_dispatchDeviceBackButtonEvent",value:function(){function createEvent(element){return{_element:element,callParentHandler:function(){for(var parent=this._element.parentNode;parent;){if(handler=HandlerRepository.get(parent))return handler._callback(createEvent(parent));parent=parent.parentNode}}}}var tree=this._captureTree(),element=this._findHandlerLeafElement(tree),handler=HandlerRepository.get(element);handler._callback(createEvent(element))}},{key:"_captureTree",value:function(){function createTree(element){var tree={element:element,children:Array.prototype.concat.apply([],arrayOf(element.children).map(function(childElement){if("none"===childElement.style.display)return[];if(0===childElement.children.length&&!HandlerRepository.has(childElement))return[];var result=createTree(childElement);return 0!==result.children.length||HandlerRepository.has(result.element)?[result]:[]}))};if(!HandlerRepository.has(tree.element))for(var i=0;i<tree.children.length;i++){var subTree=tree.children[i];if(HandlerRepository.has(subTree.element))return subTree}return tree}function arrayOf(target){for(var result=[],i=0;i<target.length;i++)result.push(target[i]);return result}return createTree(document.body)}},{key:"_findHandlerLeafElement",value:function(tree){function find(node){return 0===node.children.length?node.element:1===node.children.length?find(node.children[0]):node.children.map(function(childNode){return childNode.element}).reduce(function(left,right){if(!left)return right;var leftZ=parseInt(window.getComputedStyle(left,"").zIndex,10),rightZ=parseInt(window.getComputedStyle(right,"").zIndex,10);if(!isNaN(leftZ)&&!isNaN(rightZ))return leftZ>rightZ?left:right;throw new Error("Capturing backbutton-handler is failure.")},null)}return find(tree)}}]),DeviceBackButtonDispatcher}();exports["default"]=new DeviceBackButtonDispatcher,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function loadPage(_ref,done){var page=_ref.page,parent=_ref.parent;_ref.params;_internal2["default"].getPageHTMLAsync(page).then(function(html){var pageElement=_util2["default"].createElement(html);parent.appendChild(pageElement),done(pageElement)})}function unloadPage(element){element._destroy instanceof Function?element._destroy():element.remove()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.instantPageLoader=exports.defaultPageLoader=exports.PageLoader=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),PageLoader=exports.PageLoader=function(){function PageLoader(loader,unloader){_classCallCheck(this,PageLoader),this._loader=loader instanceof Function?loader:loadPage,this._unloader=unloader instanceof Function?unloader:unloadPage}return _createClass(PageLoader,[{key:"load",value:function(_ref2,done){var page=_ref2.page,parent=_ref2.parent,_ref2$params=_ref2.params,params=void 0===_ref2$params?{}:_ref2$params;this._loader({page:page,parent:parent,params:params},function(pageElement){if(!(pageElement instanceof Element))throw Error("pageElement must be an instance of Element.");done(pageElement)})}},{key:"unload",value:function(pageElement){if(!(pageElement instanceof Element))throw Error("pageElement must be an instance of Element.");this._unloader(pageElement)}},{key:"internalLoader",set:function(fn){if(!(fn instanceof Function))throw Error("First parameter must be an instance of Function");this._loader=fn},get:function(){return this._loader}}]),PageLoader}();exports.defaultPageLoader=new PageLoader,exports.instantPageLoader=new PageLoader(function(_ref3,done){var page=_ref3.page,parent=_ref3.parent,element=(_ref3.params,_util2["default"].createElement(page.trim()));parent.appendChild(element),done(element)},unloadPage)},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(12),core=__webpack_require__(21),hide=__webpack_require__(22),redefine=__webpack_require__(24),ctx=__webpack_require__(34),PROTOTYPE="prototype",$export=function $export(type,name,source){var key,own,out,exp,IS_FORCED=type&$export.F,IS_GLOBAL=type&$export.G,IS_STATIC=type&$export.S,IS_PROTO=type&$export.P,IS_BIND=type&$export.B,target=IS_GLOBAL?global:IS_STATIC?global[name]||(global[name]={}):(global[name]||{})[PROTOTYPE],exports=IS_GLOBAL?core:core[name]||(core[name]={}),expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={});IS_GLOBAL&&(source=name);for(key in source)own=!IS_FORCED&&target&&void 0!==target[key],out=(own?target:source)[key],exp=IS_BIND&&own?ctx(out,global):IS_PROTO&&"function"==typeof out?ctx(Function.call,out):out,target&&redefine(target,key,out,type&$export.U),exports[key]!=out&&hide(exports,key,exp),IS_PROTO&&expProto[key]!=out&&(expProto[key]=out)};global.core=core,$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128,module.exports=$export},function(module,exports,__webpack_require__){"use strict";module.exports={}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),INPUT_ATTRIBUTES=["autocapitalize","autocomplete","autocorrect","autofocus","disabled","inputmode","max","maxlength","min","minlength","name","pattern","placeholder","readonly","size","step","validator","value"],BaseInputElement=function(_BaseElement){function BaseInputElement(){_classCallCheck(this,BaseInputElement);var _this=_possibleConstructorReturn(this,(BaseInputElement.__proto__||Object.getPrototypeOf(BaseInputElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this._boundDelegateEvent=_this._delegateEvent.bind(_this),_this}return _inherits(BaseInputElement,_BaseElement),_createClass(BaseInputElement,[{key:"_update",value:function(){}},{key:"_scheme",get:function(){throw new Error("_scheme getter must be implemented.")}},{key:"_template",get:function(){throw new Error("_template getter must be implemented.")}},{key:"type",get:function(){throw new Error("type getter must be implemented.")}}]),_createClass(BaseInputElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this._defaultElementClass&&this.classList.add(this._defaultElementClass),0===this.children.length&&(this.appendChild(_util2["default"].createFragment(this._template).cloneNode(!0)),this._setInputId(),this._updateBoundAttributes(),_modifierUtil2["default"].initModifier(this,this._scheme))}},{key:"_updateBoundAttributes",value:function(){var _this2=this;INPUT_ATTRIBUTES.forEach(function(attr){_this2.hasAttribute(attr)?_this2._input.setAttribute(attr,_this2.getAttribute(attr)):_this2._input.removeAttribute(attr)}),this._update()}},{key:"_delegateEvent",value:function(event){var e=new CustomEvent(event.type,{bubbles:!1,cancelable:!0});return this.dispatchEvent(e)}},{key:"_setInputId",value:function(){this.hasAttribute("input-id")&&(this._input.id=this.getAttribute("input-id"))}},{key:"connectedCallback",value:function(){var _this3=this;(0,_contentReady2["default"])(this,function(){_this3._input.addEventListener("focus",_this3._boundDelegateEvent),_this3._input.addEventListener("blur",_this3._boundDelegateEvent)})}},{key:"disconnectedCallback",value:function(){var _this4=this;(0,_contentReady2["default"])(this,function(){_this4._input.removeEventListener("focus",_this4._boundDelegateEvent),_this4._input.removeEventListener("blur",_this4._boundDelegateEvent)})}},{key:"attributeChangedCallback",value:function(name,last,current){var _this5=this;switch(name){case"modifier":(0,_contentReady2["default"])(this,function(){return _modifierUtil2["default"].onModifierChanged(last,current,_this5,_this5._scheme);
});break;case"input-id":(0,_contentReady2["default"])(this,function(){return _this5._setInputId()});break;case"class":this._defaultElementClass&&!this.classList.contains(this._defaultElementClass)&&(this.className=this._defaultElementClass+" "+current)}INPUT_ATTRIBUTES.indexOf(name)>=0&&(0,_contentReady2["default"])(this,function(){return _this5._updateBoundAttributes()})}},{key:"_defaultElementClass",get:function(){return""}},{key:"_input",get:function(){return this.querySelector("input")}},{key:"value",get:function(){return null===this._input?this.getAttribute("value"):this._input.value},set:function(val){var _this6=this;(0,_contentReady2["default"])(this,function(){val instanceof Date&&(val=val.toISOString().substring(0,10)),_this6._input.value=val,_this6._update()})}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["modifier","input-id","class"].concat(INPUT_ATTRIBUTES)}}]),BaseInputElement}(_baseElement2["default"]);exports["default"]=BaseInputElement,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_animit=__webpack_require__(5),_baseAnimator=(_interopRequireDefault(_animit),__webpack_require__(10)),_baseAnimator2=_interopRequireDefault(_baseAnimator),SplitterAnimator=function(_BaseAnimator){function SplitterAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(.1, .7, .1, 1)":_ref$timing,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.3:_ref$duration,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay;return _classCallCheck(this,SplitterAnimator),_possibleConstructorReturn(this,(SplitterAnimator.__proto__||Object.getPrototypeOf(SplitterAnimator)).call(this,{timing:timing,duration:duration,delay:delay}))}return _inherits(SplitterAnimator,_BaseAnimator),_createClass(SplitterAnimator,[{key:"updateOptions",value:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_util2["default"].extend(this,{timing:this.timing,duration:this.duration,delay:this.delay},options)}},{key:"activate",value:function(sideElement){var _this2=this,splitter=sideElement.parentNode;(0,_contentReady2["default"])(splitter,function(){_this2._side=sideElement,_this2._oppositeSide=splitter.right!==sideElement&&splitter.right||splitter.left!==sideElement&&splitter.left,_this2._content=splitter.content,_this2._mask=splitter.mask})}},{key:"deactivate",value:function(){this.clearTransition(),this._mask&&this.clearMask(),this._content=this._side=this._oppositeSide=this._mask=null}},{key:"clearTransition",value:function(){this._side&&(this._side.style.transform=this._side.style.transition=this._side.style.webkitTransition=""),this._mask&&(this._mask.style.transform=this._mask.style.transition=this._mask.style.webkitTransition=""),this._content&&(this._content.style.transform=this._content.style.transition=this._content.style.webkitTransition="")}},{key:"clearMask",value:function(){this._oppositeSide&&"split"!==this._oppositeSide.mode&&this._oppositeSide.isOpen||(this._mask.style.opacity="",this._mask.style.display="none")}},{key:"translate",value:function(distance){}},{key:"open",value:function(done){done()}},{key:"close",value:function(done){done()}},{key:"minus",get:function(){return"right"===this._side._side?"-":""}}]),SplitterAnimator}(_baseAnimator2["default"]);exports["default"]=SplitterAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),generateId=function(){var i=0;return function(){return i++}}(),DoorLock=function(){function DoorLock(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,DoorLock),this._lockList=[],this._waitList=[],this._log=options.log||function(){}}return _createClass(DoorLock,[{key:"lock",value:function(){var _this=this,unlock=function unlock(){_this._unlock(unlock)};return unlock.id=generateId(),this._lockList.push(unlock),this._log("lock: "+unlock.id),unlock}},{key:"_unlock",value:function(fn){var index=this._lockList.indexOf(fn);if(index===-1)throw new Error("This function is not registered in the lock list.");this._lockList.splice(index,1),this._log("unlock: "+fn.id),this._tryToFreeWaitList()}},{key:"_tryToFreeWaitList",value:function(){for(;!this.isLocked()&&this._waitList.length>0;)this._waitList.shift()()}},{key:"waitUnlock",value:function(callback){if(!(callback instanceof Function))throw new Error("The callback param must be a function.");this.isLocked()?this._waitList.push(callback):callback()}},{key:"isLocked",value:function(){return this._lockList.length>0}}]),DoorLock}();exports["default"]=DoorLock,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]={Document_createElement:window.Document.prototype.createElement,Document_createElementNS:window.Document.prototype.createElementNS,Document_importNode:window.Document.prototype.importNode,Document_prepend:window.Document.prototype.prepend,Document_append:window.Document.prototype.append,Node_cloneNode:window.Node.prototype.cloneNode,Node_appendChild:window.Node.prototype.appendChild,Node_insertBefore:window.Node.prototype.insertBefore,Node_removeChild:window.Node.prototype.removeChild,Node_replaceChild:window.Node.prototype.replaceChild,Node_textContent:Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),Element_attachShadow:window.Element.prototype.attachShadow,Element_innerHTML:Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Element_getAttribute:window.Element.prototype.getAttribute,Element_setAttribute:window.Element.prototype.setAttribute,Element_removeAttribute:window.Element.prototype.removeAttribute,Element_getAttributeNS:window.Element.prototype.getAttributeNS,Element_setAttributeNS:window.Element.prototype.setAttributeNS,Element_removeAttributeNS:window.Element.prototype.removeAttributeNS,Element_insertAdjacentElement:window.Element.prototype.insertAdjacentElement,Element_prepend:window.Element.prototype.prepend,Element_append:window.Element.prototype.append,Element_before:window.Element.prototype.before,Element_after:window.Element.prototype.after,Element_replaceWith:window.Element.prototype.replaceWith,Element_remove:window.Element.prototype.remove,HTMLElement:window.HTMLElement,HTMLElement_innerHTML:Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),HTMLElement_insertAdjacentElement:window.HTMLElement.prototype.insertAdjacentElement},module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";var aFunction=__webpack_require__(176);module.exports=function(fn,that,length){if(aFunction(fn),void 0===that)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}},function(module,exports,__webpack_require__){"use strict";module.exports=function(it){if(void 0==it)throw TypeError("Can't call method on  "+it);return it}},function(module,exports,__webpack_require__){"use strict";module.exports=function(exec){try{return!!exec()}catch(e){return!0}}},function(module,exports,__webpack_require__){"use strict";var IObject=__webpack_require__(182),defined=__webpack_require__(35);module.exports=function(it){return IObject(defined(it))}},function(module,exports,__webpack_require__){"use strict";var id=0,px=Math.random();module.exports=function(key){return"Symbol(".concat(void 0===key?"":key,")_",(++id+px).toString(36))}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_baseInput=__webpack_require__(30),_baseInput2=_interopRequireDefault(_baseInput),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),BaseCheckboxElement=function(_BaseInputElement){function BaseCheckboxElement(){_classCallCheck(this,BaseCheckboxElement);var _this=_possibleConstructorReturn(this,(BaseCheckboxElement.__proto__||Object.getPrototypeOf(BaseCheckboxElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this.attributeChangedCallback("checked",null,_this.getAttribute("checked"))}),_this}return _inherits(BaseCheckboxElement,_BaseInputElement),_createClass(BaseCheckboxElement,[{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"checked":this.checked=null!==current;break;default:_get(BaseCheckboxElement.prototype.__proto__||Object.getPrototypeOf(BaseCheckboxElement.prototype),"attributeChangedCallback",this).call(this,name,last,current)}}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="'+this._defaultElementClass+'__input">\n      <span class="'+this._defaultElementClass+'__checkmark"></span>\n    '}},{key:"_helper",get:function(){return this.querySelector("span")}},{key:"checked",get:function(){return this._input.checked},set:function(val){var _this2=this;(0,_contentReady2["default"])(this,function(){_this2._input.checked=val})}}],[{key:"observedAttributes",get:function(){return[].concat(_toConsumableArray(_get(BaseCheckboxElement.__proto__||Object.getPrototypeOf(BaseCheckboxElement),"observedAttributes",this)),["checked"])}}]),BaseCheckboxElement}(_baseInput2["default"]);exports["default"]=BaseCheckboxElement,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),ModalAnimator=function(_BaseAnimator){function ModalAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;return _classCallCheck(this,ModalAnimator),_possibleConstructorReturn(this,(ModalAnimator.__proto__||Object.getPrototypeOf(ModalAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(ModalAnimator,_BaseAnimator),_createClass(ModalAnimator,[{key:"show",value:function(modal,callback){callback()}},{key:"hide",value:function(modal,callback){callback()}}]),ModalAnimator}(_baseAnimator2["default"]);exports["default"]=ModalAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var create=function(){var obj={_isPortrait:!1,isPortrait:function(){return this._isPortrait()},isLandscape:function(){return!this.isPortrait()},_init:function(){return document.addEventListener("DOMContentLoaded",this._onDOMContentLoaded.bind(this),!1),"orientation"in window?window.addEventListener("orientationchange",this._onOrientationChange.bind(this),!1):window.addEventListener("resize",this._onResize.bind(this),!1),this._isPortrait=function(){return window.innerHeight>window.innerWidth},this},_onDOMContentLoaded:function(){this._installIsPortraitImplementation(),this.emit("change",{isPortrait:this.isPortrait()})},_installIsPortraitImplementation:function(){var isPortrait=window.innerWidth<window.innerHeight;"orientation"in window?window.orientation%180===0?this._isPortrait=function(){return 0===Math.abs(window.orientation%180)?isPortrait:!isPortrait}:this._isPortrait=function(){return 90===Math.abs(window.orientation%180)?isPortrait:!isPortrait}:this._isPortrait=function(){return window.innerHeight>window.innerWidth}},_onOrientationChange:function(){var _this=this,isPortrait=this._isPortrait(),nIter=0,interval=setInterval(function(){nIter++;var w=window.innerWidth,h=window.innerHeight;isPortrait&&w<=h||!isPortrait&&w>=h?(_this.emit("change",{isPortrait:isPortrait}),clearInterval(interval)):50===nIter&&(_this.emit("change",{isPortrait:isPortrait}),clearInterval(interval))},20)},_onResize:function(){this.emit("change",{isPortrait:this.isPortrait()})}};return MicroEvent.mixin(obj),obj};exports["default"]=create()._init(),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var CustomElementState={custom:1,failed:2};exports["default"]=CustomElementState,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";var cof=__webpack_require__(61),TAG=__webpack_require__(9)("toStringTag"),ARG="Arguments"==cof(function(){return arguments}()),tryGet=function(it,key){try{return it[key]}catch(e){}};module.exports=function(it){var O,T,B;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(T=tryGet(O=Object(it),TAG))?T:ARG?cof(O):"Object"==(B=cof(O))&&"function"==typeof O.callee?"Arguments":B}},function(module,exports,__webpack_require__){"use strict";var ctx=__webpack_require__(34),call=__webpack_require__(184),isArrayIter=__webpack_require__(183),anObject=__webpack_require__(20),toLength=__webpack_require__(74),getIterFn=__webpack_require__(198),BREAK={},RETURN={},_exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var length,step,iterator,result,iterFn=ITERATOR?function(){return iterable}:getIterFn(iterable),f=ctx(fn,that,entries?2:1),index=0;if("function"!=typeof iterFn)throw TypeError(iterable+" is not iterable!");if(isArrayIter(iterFn)){for(length=toLength(iterable.length);length>index;index++)if(result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]),result===BREAK||result===RETURN)return result}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;)if(result=call(iterator,f,step.value,entries),result===BREAK||result===RETURN)return result};_exports.BREAK=BREAK,_exports.RETURN=RETURN},function(module,exports,__webpack_require__){"use strict";var LIBRARY=__webpack_require__(187),$export=__webpack_require__(28),redefine=__webpack_require__(24),hide=__webpack_require__(22),has=__webpack_require__(17),Iterators=__webpack_require__(29),$iterCreate=__webpack_require__(185),setToStringTag=__webpack_require__(47),getPrototypeOf=__webpack_require__(190),ITERATOR=__webpack_require__(9)("iterator"),BUGGY=!([].keys&&"next"in[].keys()),FF_ITERATOR="@@iterator",KEYS="keys",VALUES="values",returnThis=function(){return this};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var methods,key,IteratorPrototype,getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function(){return new Constructor(this,kind)};case VALUES:return function(){return new Constructor(this,kind)}}return function(){return new Constructor(this,kind)}},TAG=NAME+" Iterator",DEF_VALUES=DEFAULT==VALUES,VALUES_BUG=!1,proto=Base.prototype,$native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT],$default=$native||getMethod(DEFAULT),$entries=DEFAULT?DEF_VALUES?getMethod("entries"):$default:void 0,$anyNative="Array"==NAME?proto.entries||$native:$native;if($anyNative&&(IteratorPrototype=getPrototypeOf($anyNative.call(new Base)),IteratorPrototype!==Object.prototype&&(setToStringTag(IteratorPrototype,TAG,!0),LIBRARY||has(IteratorPrototype,ITERATOR)||hide(IteratorPrototype,ITERATOR,returnThis))),DEF_VALUES&&$native&&$native.name!==VALUES&&(VALUES_BUG=!0,$default=function(){return $native.call(this)}),LIBRARY&&!FORCED||!BUGGY&&!VALUES_BUG&&proto[ITERATOR]||hide(proto,ITERATOR,$default),Iterators[NAME]=$default,Iterators[TAG]=returnThis,DEFAULT)if(methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries},FORCED)for(key in methods)key in proto||redefine(proto,key,methods[key]);else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);return methods}},function(module,exports,__webpack_require__){"use strict";module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value:value}}},function(module,exports,__webpack_require__){"use strict";var def=__webpack_require__(23).f,has=__webpack_require__(17),TAG=__webpack_require__(9)("toStringTag");module.exports=function(it,tag,stat){it&&!has(it=stat?it:it.prototype,TAG)&&def(it,TAG,{configurable:!0,value:tag})}},function(module,exports,__webpack_require__){"use strict";var shared=__webpack_require__(73)("keys"),uid=__webpack_require__(38);module.exports=function(key){return shared[key]||(shared[key]=uid(key))}},function(module,exports,__webpack_require__){"use strict";var ceil=Math.ceil,floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it)}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_modifierUtil=__webpack_require__(3),_animatorFactory=(_interopRequireDefault(_modifierUtil),__webpack_require__(8)),_overlayAnimator=(_interopRequireDefault(_animatorFactory),__webpack_require__(141)),_overlayAnimator2=_interopRequireDefault(_overlayAnimator),_pushAnimator=__webpack_require__(142),_pushAnimator2=_interopRequireDefault(_pushAnimator),_revealAnimator=__webpack_require__(143),_revealAnimator2=_interopRequireDefault(_revealAnimator),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_deviceBackButtonDispatcher=__webpack_require__(26),_deviceBackButtonDispatcher2=_interopRequireDefault(_deviceBackButtonDispatcher),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_animatorDict={"default":_overlayAnimator2["default"],overlay:_overlayAnimator2["default"],push:_pushAnimator2["default"],reveal:_revealAnimator2["default"]},SplitterElement=function(_BaseElement){function SplitterElement(){_classCallCheck(this,SplitterElement);var _this=_possibleConstructorReturn(this,(SplitterElement.__proto__||Object.getPrototypeOf(SplitterElement)).call(this));return _this._boundOnModeChange=_this._onModeChange.bind(_this),(0,_contentReady2["default"])(_this,function(){_this._compile(),_this._layout()}),_this}return _inherits(SplitterElement,_BaseElement),_createClass(SplitterElement,[{key:"_getSide",value:function(side){var element=_util2["default"].findChild(this,function(e){return _util2["default"].match(e,"ons-splitter-side")&&e.getAttribute("side")===side});return element}},{key:"_onDeviceBackButton",value:function(event){this._sides.some(function(s){return!!s.isOpen&&s.close()})||event.callParentHandler()}},{key:"_onModeChange",value:function(e){var _this2=this;e.target.parentNode&&(0,_contentReady2["default"])(this,function(){_this2._layout()})}},{key:"_layout",value:function(){var _this3=this;this._sides.forEach(function(side){_this3.content&&(_this3.content.style[side.side]="split"===side.mode?side._width:0)})}},{key:"left",get:function(){return this._getSide("left")}},{key:"right",get:function(){return this._getSide("right")}},{key:"side",get:function(){return _util2["default"].findChild(this,"ons-splitter-side")}},{key:"_sides",get:function(){return[this.left,this.right].filter(function(e){return e})}},{key:"content",get:function(){return _util2["default"].findChild(this,"ons-splitter-content")}},{key:"topPage",get:function(){return this.content._content}},{key:"mask",get:function(){return _util2["default"].findChild(this,"ons-splitter-mask")}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(callback){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=_deviceBackButtonDispatcher2["default"].createHandler(this,callback)}}]),_createClass(SplitterElement,[{key:"_compile",value:function(){this.mask||this.appendChild(document.createElement("ons-splitter-mask"))}},{key:"connectedCallback",value:function(){this.onDeviceBackButton=this._onDeviceBackButton.bind(this),this.addEventListener("modechange",this._boundOnModeChange,!1)}},{key:"disconnectedCallback",value:function(){this._backButtonHandler.destroy(),this._backButtonHandler=null,this.removeEventListener("modechange",this._boundOnModeChange,!1)}},{key:"attributeChangedCallback",value:function(name,last,current){}},{key:"_show",value:function(){_util2["default"].propagateAction(this,"_show")}},{key:"_hide",value:function(){_util2["default"].propagateAction(this,"_hide")}},{key:"_destroy",value:function(){_util2["default"].propagateAction(this,"_destroy"),this.remove()}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator instanceof SplitterAnimator))throw new Error("Animator parameter must be an instance of SplitterAnimator.");_animatorDict[name]=Animator}},{key:"SplitterAnimator",get:function(){return SplitterAnimator}},{key:"animators",get:function(){return _animatorDict}}]),SplitterElement}(_baseElement2["default"]);exports["default"]=SplitterElement,customElements.define("ons-splitter",SplitterElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_internal=__webpack_require__(7),_onsTabbar=(_interopRequireDefault(_internal),__webpack_require__(52)),_onsTabbar2=_interopRequireDefault(_onsTabbar),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_pageLoader=__webpack_require__(27),defaultClassName="tabbar__item",scheme={"":"tabbar--*__item",".tabbar__button":"tabbar--*__button"},templateSource=_util2["default"].createElement('\n  <div>\n    <input type="radio" style="display: none">\n    <button class="tabbar__button"></button>\n  </div>\n'),defaultInnerTemplateSource=_util2["default"].createElement('\n  <div>\n    <div class="tabbar__icon">\n      <ons-icon icon="ion-cloud"></ons-icon>\n    </div>\n    <div class="tabbar__label">label</div>\n    <div class="tabbar__badge notification">1</div>\n  </div>\n'),TabElement=function(_BaseElement){function TabElement(){_classCallCheck(this,TabElement);var _this=_possibleConstructorReturn(this,(TabElement.__proto__||Object.getPrototypeOf(TabElement)).call(this));return _this._pageLoader=_pageLoader.defaultPageLoader,_this._page=null,_this.hasAttribute("label")||_this.hasAttribute("icon")||_this.hasAttribute("badge")?_this._compile():(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this._boundOnClick=_this._onClick.bind(_this),_this}return _inherits(TabElement,_BaseElement),_createClass(TabElement,[{key:"_getPageTarget",value:function(){return this.page||this.getAttribute("page")}},{key:"_templateLoaded",value:function(){if(0==this.children.length)return!1;var hasInput="radio"===this._input.getAttribute("type"),hasButton=this._button;return!(!hasInput||!hasButton)}},{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),!this._templateLoaded()){for(var fragment=document.createDocumentFragment(),hasChildren=!1;this.childNodes[0];){var node=this.childNodes[0];this.removeChild(node),fragment.appendChild(node),node.nodeType==Node.ELEMENT_NODE&&(hasChildren=!0)}for(var template=templateSource.cloneNode(!0);template.children[0];)this.appendChild(template.children[0]);
hasChildren?(this._button.appendChild(fragment),this._hasDefaultTemplate=!1):(this._hasDefaultTemplate=!0,this._updateDefaultTemplate())}_modifierUtil2["default"].initModifier(this,scheme),this._updateRipple()}},{key:"_updateRipple",value:function(){_util2["default"].updateRipple(this.querySelector(".tabbar__button"),this.hasAttribute("ripple"))}},{key:"_updateDefaultTemplate",value:function(){if(this._hasDefaultTemplate){var button=this._button,template=defaultInnerTemplateSource.cloneNode(!0);if(0===button.children.length)for(;template.children[0];)button.appendChild(template.children[0]);button.querySelector(".tabbar__icon")||button.insertBefore(template.querySelector(".tabbar__icon"),button.firstChild),button.querySelector(".tabbar__label")||button.appendChild(template.querySelector(".tabbar__label")),button.querySelector(".tabbar__badge")||button.appendChild(template.querySelector(".tabbar__badge"));var icon=this.getAttribute("icon"),label=this.getAttribute("label"),badge=this.getAttribute("badge"),iconElement=button.querySelector(".tabbar__icon").children[0],labelElement=button.querySelector(".tabbar__label"),badgeElement=button.querySelector(".tabbar__badge");if(iconElement)if("string"==typeof icon){var last=iconElement.getAttribute("icon");iconElement.setAttribute("icon",icon),iconElement.attributeChangedCallback("icon",last,icon)}else iconElement.parentElement.remove();labelElement&&("string"==typeof label?labelElement.textContent=label:labelElement.remove()),badgeElement&&("string"==typeof badge?badgeElement.textContent=badge:badgeElement.remove())}}},{key:"_onClick",value:function(){if(this.onClick instanceof Function)this.onClick();else{var tabbar=this._findTabbarElement();tabbar&&tabbar.setActiveTab(this._findTabIndex())}}},{key:"setActive",value:function(){if(this._input.checked=!0,this.classList.add("active"),this.setAttribute("active",""),this.hasAttribute("icon")&&this.hasAttribute("active-icon")){var icon=this.getAttribute("active-icon"),iconElement=this._button.querySelector(".tabbar__icon").children[0];iconElement.setAttribute("icon",icon)}_util2["default"].arrayFrom(this.querySelectorAll("[ons-tab-inactive], ons-tab-inactive")).forEach(function(element){return element.style.display="none"}),_util2["default"].arrayFrom(this.querySelectorAll("[ons-tab-active], ons-tab-active")).forEach(function(element){return element.style.display="inherit"})}},{key:"setInactive",value:function(){if(this._input.checked=!1,this.classList.remove("active"),this.removeAttribute("active"),this.hasAttribute("icon")){var icon=this.getAttribute("icon"),iconElement=this._button.querySelector(".tabbar__icon").children[0];iconElement.setAttribute("icon",icon)}_util2["default"].arrayFrom(this.querySelectorAll("[ons-tab-inactive], ons-tab-inactive")).forEach(function(element){return element.style.display="inherit"}),_util2["default"].arrayFrom(this.querySelectorAll("[ons-tab-active], ons-tab-active")).forEach(function(element){return element.style.display="none"})}},{key:"_loadPageElement",value:function(parent,callback){var _this2=this;if(this._loadedPage||this._getPageTarget())if(this._loadingPage)this._loadingPage.then(function(pageElement){callback(pageElement)});else if(this._loadedPage)callback(this._loadedPage);else{var deferred=_util2["default"].defer();this._loadingPage=deferred.promise,this._pageLoader.load({page:this._getPageTarget(),parent:parent},function(pageElement){_this2._loadedPage=pageElement,deferred.resolve(pageElement),delete _this2._loadingPage,callback(pageElement)})}else{var pages=this._findTabbarElement().pages,index=this._findTabIndex();if(!pages[index])throw Error("Page was not provided to <ons-tab> index "+index);callback(pages[index])}}},{key:"isActive",value:function(){return this.classList.contains("active")}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1),this._loadedPage&&(this._pageLoader.unload(this._loadedPage),this._loadedPage=null)}},{key:"connectedCallback",value:function(){var _this3=this;(0,_contentReady2["default"])(this,function(){_this3._ensureElementPosition();var tabbar=_this3._findTabbarElement();if(tabbar.hasAttribute("modifier")){var prefix=_this3.hasAttribute("modifier")?_this3.getAttribute("modifier")+" ":"";_this3.setAttribute("modifier",prefix+tabbar.getAttribute("modifier"))}var onReady=function(){_this3.hasLoaded||(_this3._getPageTarget()?_this3._loadPageElement(tabbar._contentElement,function(pageElement){pageElement.style.display="none",tabbar._contentElement.appendChild(pageElement)}):tabbar._contentElement.children.length===_this3.parentElement.children.length&&(_this3.pageElement.style.display="none"),_this3.hasLoaded=!0),_this3.hasAttribute("active")&&(_this3._onClick(),!_this3.isActive()&&_this3.setActive())};_onsTabbar2["default"].rewritables.ready(tabbar,onReady),_this3.addEventListener("click",_this3._boundOnClick,!1)})}},{key:"_findTabbarElement",value:function(){return _util2["default"].findParent(this,"ons-tabbar")}},{key:"_findTabIndex",value:function(){for(var elements=this.parentNode.children,i=0;i<elements.length;i++)if(this===elements[i])return i}},{key:"_ensureElementPosition",value:function(){if(!this._findTabbarElement())throw new Error("This ons-tab element is must be child of ons-tabbar element.")}},{key:"attributeChangedCallback",value:function(name,last,current){var _this4=this;switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":(0,_contentReady2["default"])(this,function(){return _modifierUtil2["default"].onModifierChanged(last,current,_this4,scheme)});break;case"ripple":this._templateLoaded()&&(0,_contentReady2["default"])(this,function(){return _this4._updateRipple()});break;case"icon":case"label":case"badge":(0,_contentReady2["default"])(this,function(){return _this4._updateDefaultTemplate()});break;case"page":"string"==typeof current&&(this._page=current)}}},{key:"page",set:function(page){this._page=page},get:function(){return this._page}},{key:"pageLoader",set:function(loader){if(!(loader instanceof _pageLoader.PageLoader))throw Error("First parameter must be an instance of PageLoader.");this._pageLoader=loader},get:function(){return this._pageLoader}},{key:"_input",get:function(){return this.children[0]}},{key:"_button",get:function(){return _util2["default"].findChild(this,".tabbar__button")}},{key:"pageElement",get:function(){if(this._loadedPage)return this._loadedPage;var tabbar=this._findTabbarElement(),index=this._findTabIndex();return tabbar._contentElement.children[index]}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","icon","label","page","badge","class"]}}]),TabElement}(_baseElement2["default"]);exports["default"]=TabElement,customElements.define("ons-tab",TabElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_animator=__webpack_require__(144),_onsTab=__webpack_require__(51),_onsTab2=_interopRequireDefault(_onsTab),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".tabbar__content":"tabbar--*__content",".tabbar":"tabbar--*"},_animatorDict={"default":_animator.TabbarNoneAnimator,fade:_animator.TabbarFadeAnimator,slide:_animator.TabbarSlideAnimator,none:_animator.TabbarNoneAnimator},rewritables={ready:function(tabbarElement,callback){callback()}},generateId=function(){var i=0;return function(){return"ons-tabbar-gen-"+i++}}(),TabbarElement=function(_BaseElement){function TabbarElement(){_classCallCheck(this,TabbarElement);var _this=_possibleConstructorReturn(this,(TabbarElement.__proto__||Object.getPrototypeOf(TabbarElement)).call(this));return _this._tabbarId=generateId(),(0,_contentReady2["default"])(_this,function(){_this._compile();var activeIndex=_this.getAttribute("activeIndex"),tabbar=_this._tabbarElement;activeIndex&&tabbar.children.length>activeIndex&&tabbar.children[activeIndex].setAttribute("active","true"),_autostyle2["default"].prepare(_this),_modifierUtil2["default"].initModifier(_this,scheme),_this._animatorFactory=new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator.TabbarAnimator,baseClassName:"TabbarAnimator",defaultAnimation:_this.getAttribute("animation")})}),_this}return _inherits(TabbarElement,_BaseElement),_createClass(TabbarElement,[{key:"connectedCallback",value:function(){var _this2=this;(0,_contentReady2["default"])(this,function(){return _this2._updatePosition()})}},{key:"_compile",value:function(){if(this._contentElement&&this._tabbarElement){var content=_util2["default"].findChild(this,".tabbar__content"),bar=_util2["default"].findChild(this,".tabbar");content.classList.add("ons-tabbar__content"),bar.classList.add("ons-tabbar__footer")}else{for(var _content=_util2["default"].create(".ons-tabbar__content.tabbar__content"),tabbar=_util2["default"].create(".tabbar.ons-tabbar__footer");this.firstChild;)tabbar.appendChild(this.firstChild);this.appendChild(_content),this.appendChild(tabbar)}}},{key:"_updatePosition",value:function(){var _this3=this,position=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("position"),top=this._top="top"===position||"auto"===position&&_platform2["default"].isAndroid(),action=top?_util2["default"].addModifier:_util2["default"].removeModifier;action(this,"top");var page=_util2["default"].findParent(this,"ons-page");page&&(0,_contentReady2["default"])(page,function(){_this3.style.top=top?window.getComputedStyle(page._getContentElement(),null).getPropertyValue("padding-top"):"",page.children[0]&&_util2["default"].match(page.children[0],"ons-toolbar")&&action(page.children[0],"noshadow")}),_internal2["default"].autoStatusBarFill(function(){var filled=_util2["default"].findParent(_this3,function(e){return e.hasAttribute("status-bar-fill")});_util2["default"].toggleAttribute(_this3,"status-bar-fill",top&&!filled)})}},{key:"_getTabbarElement",value:function(){return _util2["default"].findChild(this,".tabbar")}},{key:"getTabbarId",value:function(){return this._tabbarId}},{key:"_getCurrentPageElement",value:function(){for(var pages=this._contentElement.children,page=null,i=0;i<pages.length;i++)if("none"!==pages[i].style.display){page=pages[i];break}if(page&&"ons-page"!==page.nodeName.toLowerCase())throw new Error('Invalid state: page element must be a "ons-page" element.');return page}},{key:"_switchPage",value:function(element,options){var oldPageElement=this._oldPageElement||_internal2["default"].nullElement;this._oldPageElement=element;var animator=this._animatorFactory.newAnimator(options);return new Promise(function(resolve){oldPageElement!==_internal2["default"].nullElement&&oldPageElement._hide(),animator.apply(element,oldPageElement,options.selectedTabIndex,options.previousTabIndex,function(){oldPageElement!==_internal2["default"].nullElement&&(oldPageElement.style.display="none"),element.style.display="block",element._show(),options.callback instanceof Function&&options.callback(),resolve(element)})})}},{key:"setActiveTab",value:function(index){var _this4=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(options&&"object"!=("undefined"==typeof options?"undefined":_typeof(options)))throw new Error("options must be an object. You supplied "+options);options.animationOptions=_util2["default"].extend(options.animationOptions||{},_animatorFactory2["default"].parseAnimationOptionsString(this.getAttribute("animation-options"))),!options.animation&&this.hasAttribute("animation")&&(options.animation=this.getAttribute("animation"));var previousTab=this._getActiveTabElement(),selectedTab=this._getTabElement(index),previousTabIndex=this.getActiveTabIndex(),selectedTabIndex=index,previousPageElement=this._getCurrentPageElement();if(!selectedTab)return Promise.reject("Specified index does not match any tab.");if(selectedTabIndex===previousTabIndex)return _util2["default"].triggerElementEvent(this,"reactive",{index:selectedTabIndex,tabItem:selectedTab}),Promise.resolve(previousPageElement);var canceled=!1;if(_util2["default"].triggerElementEvent(this,"prechange",{index:selectedTabIndex,tabItem:selectedTab,cancel:function(){return canceled=!0}}),canceled)return selectedTab.setInactive(),previousTab&&previousTab.setActive(),Promise.reject("Canceled in prechange event.");selectedTab.setActive();var params=_extends({},options,{previousTabIndex:previousTabIndex,selectedTabIndex:selectedTabIndex});return previousTab?previousTab.setInactive():params.animation="none",new Promise(function(resolve){selectedTab._loadPageElement(_this4._contentElement,function(pageElement){pageElement.removeAttribute("style"),_this4._switchPage(pageElement,params).then(function(page){return _util2["default"].triggerElementEvent(_this4,"postchange",{index:selectedTabIndex,tabItem:selectedTab}),resolve(page)})})})}},{key:"setTabbarVisibility",value:function(visible){this._contentElement.style[this._top?"top":"bottom"]=visible?"":"0px",this._getTabbarElement().style.display=visible?"":"none"}},{key:"show",value:function(){this.setTabbarVisibility(!0)}},{key:"hide",value:function(){this.setTabbarVisibility(!1)}},{key:"getActiveTabIndex",value:function(){for(var tabs=this._getTabbarElement().children,i=0;i<tabs.length;i++)if(tabs[i]instanceof _onsTab2["default"]&&tabs[i].isActive&&tabs[i].isActive())return i;return-1}},{key:"_getActiveTabElement",value:function(){return this._getTabElement(this.getActiveTabIndex())}},{key:"_getTabElement",value:function(index){return this._getTabbarElement().children[index]}},{key:"disconnectedCallback",value:function(){}},{key:"_show",value:function(){var currentPageElement=this._getCurrentPageElement();currentPageElement&&currentPageElement._show()}},{key:"_hide",value:function(){var currentPageElement=this._getCurrentPageElement();currentPageElement&&currentPageElement._hide()}},{key:"_destroy",value:function(){for(var tabs=this._getTabbarElement().children,i=tabs.length-1;i>=0;i--)tabs[i].remove();this.remove()}},{key:"attributeChangedCallback",value:function(name,last,current){if("modifier"===name){_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);var isTop=function(m){return/(^|\s+)top($|\s+)/i.test(m)};isTop(last)!==isTop(current)&&this._updatePosition()}else"position"===name&&this._updatePosition()}},{key:"_contentElement",get:function(){return _util2["default"].findChild(this,".tabbar__content")}},{key:"_tabbarElement",get:function(){return _util2["default"].findChild(this,".tabbar")}},{key:"topPage",get:function(){return this._getCurrentPageElement()}},{key:"pages",get:function(){return _util2["default"].arrayFrom(this._contentElement.children)}},{key:"visible",get:function(){return"none"!==this._getTabbarElement().style.display}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator.TabbarAnimator))throw new Error('"Animator" param must inherit TabbarElement.TabbarAnimator');_animatorDict[name]=Animator}},{key:"observedAttributes",get:function(){return["modifier","position"]}},{key:"rewritables",get:function(){return rewritables}},{key:"TabbarAnimator",get:function(){return _animator.TabbarAnimator}},{key:"events",get:function(){return["prechange","postchange","reactive"]}},{key:"animators",get:function(){return _animatorDict}}]),TabbarElement}(_baseElement2["default"]);exports["default"]=TabbarElement,customElements.define("ons-tabbar",TabbarElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),defaultClassName="toolbar",scheme={"":"toolbar--*",".toolbar__left":"toolbar--*__left",".toolbar__center":"toolbar--*__center",".toolbar__right":"toolbar--*__right"},ToolbarElement=function(_BaseElement){function ToolbarElement(){_classCallCheck(this,ToolbarElement);var _this=_possibleConstructorReturn(this,(ToolbarElement.__proto__||Object.getPrototypeOf(ToolbarElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this}return _inherits(ToolbarElement,_BaseElement),_createClass(ToolbarElement,[{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}},{key:"_getToolbarLeftItemsElement",value:function(){return this.querySelector(".left")||_internal2["default"].nullElement}},{key:"_getToolbarCenterItemsElement",value:function(){return this.querySelector(".center")||_internal2["default"].nullElement}},{key:"_getToolbarRightItemsElement",value:function(){return this.querySelector(".right")||_internal2["default"].nullElement}},{key:"_getToolbarBackButtonLabelElement",value:function(){return this.querySelector("ons-back-button .back-button__label")||_internal2["default"].nullElement}},{key:"_getToolbarBackButtonIconElement",value:function(){return this.querySelector("ons-back-button .back-button__icon")||_internal2["default"].nullElement}},{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),this._ensureToolbarItemElements(),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_ensureToolbarItemElements",value:function(){for(var i=this.childNodes.length-1;i>=0;i--)1!=this.childNodes[i].nodeType&&this.removeChild(this.childNodes[i]);var center=this._ensureToolbarElement("center");if(center.classList.add("toolbar__title"),1!==this.children.length||!this.children[0].classList.contains("center")){var left=this._ensureToolbarElement("left"),right=this._ensureToolbarElement("right");this.children[0]===left&&this.children[1]===center&&this.children[2]===right||(this.appendChild(left),this.appendChild(center),this.appendChild(right))}}},{key:"_ensureToolbarElement",value:function(name){if(_util2["default"].findChild(this,".toolbar__"+name)){var _element=_util2["default"].findChild(this,".toolbar__"+name);return _element.classList.add(name),_element}var element=_util2["default"].findChild(this,"."+name)||_util2["default"].create("."+name);return element.classList.add("toolbar__"+name),element}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),ToolbarElement}(_baseElement2["default"]);exports["default"]=ToolbarElement,customElements.define("ons-toolbar",ToolbarElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),IOSSlideNavigatorTransitionAnimator=function(_NavigatorTransitionA){function IOSSlideNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(0.3, .4, 0, .9)":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.4:_ref$duration;_classCallCheck(this,IOSSlideNavigatorTransitionAnimator);var _this=_possibleConstructorReturn(this,(IOSSlideNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(IOSSlideNavigatorTransitionAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.backgroundMask=_util2["default"].createElement('\n      <div style="position: absolute; width: 100%; height: 100%;\n        background-color: black; z-index: 2"></div>\n    '),_this}return _inherits(IOSSlideNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(IOSSlideNavigatorTransitionAnimator,[{key:"_decompose",value:function(page){var toolbar=page._getToolbarElement(),left=toolbar._getToolbarLeftItemsElement(),right=toolbar._getToolbarRightItemsElement(),excludeBackButton=function(elements){for(var result=[],i=0;i<elements.length;i++)"ons-back-button"!==elements[i].nodeName.toLowerCase()&&result.push(elements[i]);return result},other=[].concat(0===left.children.length?left:excludeBackButton(left.children)).concat(0===right.children.length?right:excludeBackButton(right.children));return{toolbarCenter:toolbar._getToolbarCenterItemsElement(),backButtonIcon:toolbar._getToolbarBackButtonIconElement(),backButtonLabel:toolbar._getToolbarBackButtonLabelElement(),other:other,content:page._getContentElement(),background:page._getBackgroundElement(),toolbar:toolbar,bottomToolbar:page._getBottomToolbarElement()}}},{key:"_shouldAnimateToolbar",value:function(enterPage,leavePage){var bothPageHasToolbar=enterPage._canAnimateToolbar()&&leavePage._canAnimateToolbar(),noMaterialToolbar=!enterPage._getToolbarElement().classList.contains("toolbar--material")&&!leavePage._getToolbarElement().classList.contains("toolbar--material");return bothPageHasToolbar&&noMaterialToolbar}},{key:"_calculateDelta",value:function(element,decomposition){var title=void 0,label=void 0,pageRect=element.getBoundingClientRect();if(decomposition.backButtonLabel.classList.contains("back-button__label")){var labelRect=decomposition.backButtonLabel.getBoundingClientRect();title=Math.round(pageRect.width/2-labelRect.width/2-labelRect.left)}else title=Math.round(pageRect.width/2*.6);return decomposition.backButtonIcon.classList.contains("back-button__icon")&&(label=decomposition.backButtonIcon.getBoundingClientRect().right-2),{title:title,label:label}}},{key:"push",value:function(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove(),leavePage.parentNode.insertBefore(this.backgroundMask,leavePage);var unblock=_get(IOSSlideNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSSlideNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);(0,_contentReady2["default"])(enterPage,function(){var enterPageTarget=_util2["default"].findToolbarPage(enterPage)||enterPage,leavePageTarget=_util2["default"].findToolbarPage(leavePage)||leavePage,enterPageDecomposition=_this2._decompose(enterPageTarget),leavePageDecomposition=_this2._decompose(leavePageTarget),delta=_this2._calculateDelta(leavePage,enterPageDecomposition),shouldAnimateToolbar=_this2._shouldAnimateToolbar(enterPageTarget,leavePageTarget);shouldAnimateToolbar?_animit2["default"].runAll((0,_animit2["default"])([enterPageDecomposition.content,enterPageDecomposition.bottomToolbar,enterPageDecomposition.background]).saveStyle().queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:_this2.duration,timing:_this2.timing}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.toolbar).saveStyle().queue({css:{opacity:0},duration:0}).queue({css:{opacity:1},duration:_this2.duration,timing:_this2.timing}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.toolbarCenter).saveStyle().queue({css:{transform:"translate3d(125%, 0, 0)",opacity:1},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:_this2.duration,timing:_this2.timing}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.backButtonLabel).saveStyle().queue({css:{transform:"translate3d("+delta.title+"px, 0, 0)",opacity:0},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1,transition:"opacity "+_this2.duration+"s linear, transform "+_this2.duration+"s "+_this2.timing},duration:_this2.duration}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.other).saveStyle().queue({css:{opacity:0},duration:0}).wait(_this2.delay).queue({css:{opacity:1},duration:_this2.duration,timing:"linear"}).restoreStyle(),(0,_animit2["default"])([leavePageDecomposition.content,leavePageDecomposition.bottomToolbar,leavePageDecomposition.background]).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},duration:_this2.duration,timing:_this2.timing}).restoreStyle().queue(function(done){_this2.backgroundMask.remove(),unblock(),callback(),done()}),(0,_animit2["default"])(leavePageDecomposition.toolbarCenter).saveStyle().queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3d(-"+delta.title+"px, 0, 0)",opacity:0,transition:"opacity "+_this2.duration+"s linear, transform "+_this2.duration+"s "+_this2.timing},duration:_this2.duration}).restoreStyle(),(0,_animit2["default"])(leavePageDecomposition.backButtonLabel).saveStyle().queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3d(-"+delta.label+"px, 0, 0)",opacity:0},duration:_this2.duration,timing:_this2.timing}).restoreStyle(),(0,_animit2["default"])(leavePageDecomposition.other).saveStyle().queue({css:{opacity:1},duration:0}).wait(_this2.delay).queue({css:{opacity:0},duration:_this2.duration,timing:"linear"}).restoreStyle()):_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:_this2.duration,timing:_this2.timing}).restoreStyle(),(0,_animit2["default"])(leavePage).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).wait(_this2.delay).queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},duration:_this2.duration,timing:_this2.timing}).restoreStyle().queue(function(done){_this2.backgroundMask.remove(),unblock(),callback(),done()}))})}},{key:"pop",value:function(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove(),
enterPage.parentNode.insertBefore(this.backgroundMask,enterPage);var unblock=_get(IOSSlideNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSSlideNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage),enterPageTarget=_util2["default"].findToolbarPage(enterPage)||enterPage,leavePageTarget=_util2["default"].findToolbarPage(leavePage)||leavePage,enterPageDecomposition=this._decompose(enterPageTarget),leavePageDecomposition=this._decompose(leavePageTarget),delta=this._calculateDelta(leavePage,leavePageDecomposition),shouldAnimateToolbar=this._shouldAnimateToolbar(enterPageTarget,leavePageTarget);shouldAnimateToolbar?_animit2["default"].runAll((0,_animit2["default"])([enterPageDecomposition.content,enterPageDecomposition.bottomToolbar,enterPageDecomposition.background]).saveStyle().queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.toolbarCenter).saveStyle().queue({css:{transform:"translate3d(-"+delta.title+"px, 0, 0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1,transition:"opacity "+this.duration+"s linear, transform "+this.duration+"s "+this.timing},duration:this.duration}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.backButtonLabel).saveStyle().queue({css:{transform:"translate3d(-"+delta.label+"px, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(0, 0, 0)"},duration:this.duration,timing:this.timing}).restoreStyle(),(0,_animit2["default"])(enterPageDecomposition.other).saveStyle().queue({css:{opacity:0},duration:0}).wait(this.delay).queue({css:{opacity:1},duration:this.duration,timing:"linear"}).restoreStyle(),(0,_animit2["default"])([leavePageDecomposition.content,leavePageDecomposition.bottomToolbar,leavePageDecomposition.background]).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:this.duration,timing:this.timing}).wait(0).queue(function(done){_this3.backgroundMask.remove(),unblock(),callback(),done()}),(0,_animit2["default"])(leavePageDecomposition.toolbar).queue({css:{opacity:1},duration:0}).queue({css:{opacity:0},duration:this.duration,timing:this.timing}),(0,_animit2["default"])(leavePageDecomposition.toolbarCenter).queue({css:{transform:"translate3d(0, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(125%, 0, 0)"},duration:this.duration,timing:this.timing}),(0,_animit2["default"])(leavePageDecomposition.backButtonLabel).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3d("+delta.title+"px, 0, 0)",opacity:0,transition:"opacity "+this.duration+"s linear, transform "+this.duration+"s "+this.timing},duration:this.duration})):_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle(),(0,_animit2["default"])(leavePage).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:this.duration,timing:this.timing}).queue(function(done){_this3.backgroundMask.remove(),unblock(),callback(),done()}))}}]),IOSSlideNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=IOSSlideNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var unwrap=function(string){return string.slice(1,-1)},isObjectString=function(string){return string.startsWith("{")&&string.endsWith("}")},isArrayString=function(string){return string.startsWith("[")&&string.endsWith("]")},isQuotedString=function(string){return string.startsWith("'")&&string.endsWith("'")||string.startsWith('"')&&string.endsWith('"')},error=function(token,string,originalString){throw new Error("Unexpected token '"+token+"' at position "+(originalString.length-string.length-1)+" in string: '"+originalString+"'")},processToken=function(token,string,originalString){return"true"===token||"false"===token?"true"===token:isQuotedString(token)?unwrap(token):isNaN(token)?isObjectString(token)?parseObject(unwrap(token)):isArrayString(token)?parseArray(unwrap(token)):void error(token,string,originalString):+token},nextToken=function(string){string=string.trimLeft();var limit=string.length;if(":"===string[0]||","===string[0])limit=1;else if("{"===string[0]||"["===string[0]){for(var c=string.charCodeAt(0),nestedObject=1,i=1;i<string.length;i++)if(string.charCodeAt(i)===c)nestedObject++;else if(string.charCodeAt(i)===c+2&&(nestedObject--,0===nestedObject)){limit=i+1;break}}else if("'"===string[0]||'"'===string[0]){for(var _i=1;_i<string.length;_i++)if(string[_i]===string[0]){limit=_i+1;break}}else for(var _i2=1;_i2<string.length;_i2++)if([" ",",",":"].indexOf(string[_i2])!==-1){limit=_i2;break}return string.slice(0,limit)},parseObject=function(string){var isValidKey=function(key){return/^[A-Z_\$][A-Z0-9_\$]*$/i.test(key)};string=string.trim();for(var originalString=string,object={},readingKey=!0,key=void 0,previousToken=void 0,token=void 0;string.length>0;)if(previousToken=token,token=nextToken(string),string=string.slice(token.length,string.length).trimLeft(),":"===token&&(!readingKey||!previousToken||","===previousToken)||","===token&&readingKey||":"!==token&&","!==token&&previousToken&&","!==previousToken&&":"!==previousToken)error(token,string,originalString);else if(":"===token&&readingKey&&previousToken){if(!isValidKey(previousToken))throw new Error("Invalid key token '"+previousToken+"' at position 0 in string: '"+originalString+"'");key=previousToken,readingKey=!1}else","===token&&!readingKey&&previousToken&&(object[key]=processToken(previousToken,string,originalString),readingKey=!0);return token&&(object[key]=processToken(token,string,originalString)),object},parseArray=function(string){string=string.trim();for(var originalString=string,array=[],previousToken=void 0,token=void 0;string.length>0;)previousToken=token,token=nextToken(string),string=string.slice(token.length,string.length).trimLeft(),","!==token||previousToken&&","!==previousToken?","===token&&array.push(processToken(previousToken,string,originalString)):error(token,string,originalString);return token&&(","!==token?array.push(processToken(token,string,originalString)):error(token,string,originalString)),array},parse=function(string){if(string=string.trim(),isObjectString(string))return parseObject(unwrap(string));if(isArrayString(string))return parseArray(unwrap(string));throw new Error("Provided string must be object or array like: "+string)};exports["default"]=parse,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.LazyRepeatProvider=exports.LazyRepeatDelegate=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),LazyRepeatDelegate=exports.LazyRepeatDelegate=function(){function LazyRepeatDelegate(userDelegate){var templateElement=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(_classCallCheck(this,LazyRepeatDelegate),"object"!==("undefined"==typeof userDelegate?"undefined":_typeof(userDelegate))||null===userDelegate)throw Error('"delegate" parameter must be an object.');if(this._userDelegate=userDelegate,!(templateElement instanceof Element)&&null!==templateElement)throw Error('"templateElement" parameter must be an instance of Element or null.');this._templateElement=templateElement}return _createClass(LazyRepeatDelegate,[{key:"hasRenderFunction",value:function(){return this._userDelegate._render instanceof Function}},{key:"_render",value:function(){this._userDelegate._render.apply(this._userDelegate,arguments)}},{key:"loadItemElement",value:function(index,done){if(this._userDelegate.loadItemElement instanceof Function)this._userDelegate.loadItemElement(index,done);else{var element=this._userDelegate.createItemContent(index,this._templateElement);if(!(element instanceof Element))throw Error("createItemContent() must return an instance of Element.");done({element:element})}}},{key:"countItems",value:function(){var count=this._userDelegate.countItems();if("number"!=typeof count)throw Error("countItems() must return a number.");return count}},{key:"updateItem",value:function(index,item){this._userDelegate.updateItemContent instanceof Function&&this._userDelegate.updateItemContent(index,item)}},{key:"calculateItemHeight",value:function(index){if(this._userDelegate.calculateItemHeight instanceof Function){var height=this._userDelegate.calculateItemHeight(index);if("number"!=typeof height)throw Error("calculateItemHeight() must return a number.");return height}return 0}},{key:"destroyItem",value:function(index,item){this._userDelegate.destroyItem instanceof Function&&this._userDelegate.destroyItem(index,item)}},{key:"destroy",value:function(){this._userDelegate.destroy instanceof Function&&this._userDelegate.destroy(),this._userDelegate=this._templateElement=null}},{key:"itemHeight",get:function(){return this._userDelegate.itemHeight}}]),LazyRepeatDelegate}();exports.LazyRepeatProvider=function(){function LazyRepeatProvider(wrapperElement,delegate){if(_classCallCheck(this,LazyRepeatProvider),!(delegate instanceof LazyRepeatDelegate))throw Error('"delegate" parameter must be an instance of LazyRepeatDelegate.');if(this._wrapperElement=wrapperElement,this._delegate=delegate,this._insertIndex=this._wrapperElement.children[0]&&"ONS-LAZY-REPEAT"===this._wrapperElement.children[0].tagName?1:0,"ons-list"===wrapperElement.tagName.toLowerCase()&&wrapperElement.classList.add("lazy-list"),this._pageContent=this._findPageContentElement(wrapperElement),!this._pageContent)throw new Error("ons-lazy-repeat must be a descendant of an <ons-page> or an element.");this.lastScrollTop=this._pageContent.scrollTop,this.padding=0,this._topPositions=[0],this._renderedItems={},this._delegate.itemHeight||this._delegate.calculateItemHeight(0)||(this._unknownItemHeight=!0),this._addEventListeners(),this._onChange()}return _createClass(LazyRepeatProvider,[{key:"_findPageContentElement",value:function(wrapperElement){var pageContent=_util2["default"].findParent(wrapperElement,".page__content");if(pageContent)return pageContent;var page=_util2["default"].findParent(wrapperElement,"ons-page");if(page){var content=_util2["default"].findChild(page,".content");if(content)return content}return null}},{key:"_checkItemHeight",value:function(callback){var _this=this;this._delegate.loadItemElement(0,function(item){if(!_this._unknownItemHeight)throw Error("Invalid state");_this._wrapperElement.appendChild(item.element);var done=function(){_this._delegate.destroyItem(0,item),item.element&&item.element.remove(),delete _this._unknownItemHeight,callback()};if(_this._itemHeight=item.element.offsetHeight,_this._itemHeight>0)return void done();var lastVisibility=_this._wrapperElement.style.visibility;_this._wrapperElement.style.visibility="hidden",item.element.style.visibility="hidden",setImmediate(function(){if(_this._itemHeight=item.element.offsetHeight,0==_this._itemHeight)throw Error("Invalid state: this._itemHeight must be greater than zero.");_this._wrapperElement.style.visibility=lastVisibility,done()})})}},{key:"_countItems",value:function(){return this._delegate.countItems()}},{key:"_getItemHeight",value:function(i){return this._renderedItems.hasOwnProperty(i)?(this._renderedItems[i].hasOwnProperty("height")||(this._renderedItems[i].height=this._renderedItems[i].element.offsetHeight),this._renderedItems[i].height):this._topPositions[i+1]&&this._topPositions[i]?this._topPositions[i+1]-this._topPositions[i]:this.staticItemHeight||this._delegate.calculateItemHeight(i)}},{key:"_calculateRenderedHeight",value:function(){var _this2=this;return Object.keys(this._renderedItems).reduce(function(a,b){return a+_this2._getItemHeight(+b)},0)}},{key:"_onChange",value:function(){this._render()}},{key:"_lastItemRendered",value:function(){return Math.max.apply(Math,_toConsumableArray(Object.keys(this._renderedItems)))}},{key:"_firstItemRendered",value:function(){return Math.min.apply(Math,_toConsumableArray(Object.keys(this._renderedItems)))}},{key:"refresh",value:function(){var lastItemIndex=Math.min(this._lastItemRendered(),this._countItems()-1),firstItemIndex=this._firstItemRendered();this._wrapperElement.style.height=this._topPositions[firstItemIndex]+this._calculateRenderedHeight()+"px",this.padding=this._topPositions[firstItemIndex],this._removeAllElements(),this._render({forceScrollDown:!0,forceFirstIndex:firstItemIndex,forceLastIndex:lastItemIndex}),this._wrapperElement.style.height="inherit"}},{key:"_render",value:function(){var _this3=this,_ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$forceScrollDown=_ref.forceScrollDown,forceScrollDown=void 0!==_ref$forceScrollDown&&_ref$forceScrollDown,forceFirstIndex=_ref.forceFirstIndex,forceLastIndex=_ref.forceLastIndex;if(this._unknownItemHeight)return this._checkItemHeight(this._render.bind(this,arguments[0]));var isScrollUp=!forceScrollDown&&this.lastScrollTop>this._pageContent.scrollTop;this.lastScrollTop=this._pageContent.scrollTop;for(var keep={},offset=this._wrapperElement.getBoundingClientRect().top,limit=4*window.innerHeight-offset,count=this._countItems(),start=forceFirstIndex||Math.max(0,this._calculateStartIndex(offset)-30),i=start,top=this._topPositions[i];i<count&&top<limit;i++)i>=this._topPositions.length&&(this._topPositions.length+=100),this._topPositions[i]=top,top+=this._getItemHeight(i);if(this._delegate.hasRenderFunction&&this._delegate.hasRenderFunction())return this._delegate._render(start,i,function(){_this3.padding=_this3._topPositions[start]});if(isScrollUp)for(var j=i-1;j>=start;j--)keep[j]=!0,this._renderElement(j,isScrollUp);else for(var lastIndex=forceLastIndex||Math.max.apply(Math,[i-1].concat(_toConsumableArray(Object.keys(this._renderedItems)))),_j=start;_j<=lastIndex;_j++)keep[_j]=!0,this._renderElement(_j,isScrollUp);Object.keys(this._renderedItems).forEach(function(key){return keep[key]||_this3._removeElement(key,isScrollUp)})}},{key:"_renderElement",value:function(index,isScrollUp){var _this4=this,item=this._renderedItems[index];return item?void this._delegate.updateItem(index,item):void this._delegate.loadItemElement(index,function(item){isScrollUp?(_this4._wrapperElement.insertBefore(item.element,_this4._wrapperElement.children[_this4._insertIndex]),_this4.padding=_this4._topPositions[index],item.height=_this4._topPositions[index+1]-_this4._topPositions[index]):_this4._wrapperElement.appendChild(item.element),_this4._renderedItems[index]=item})}},{key:"_removeElement",value:function(index){var isScrollUp=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];index=+index;var item=this._renderedItems[index];this._delegate.destroyItem(index,item),isScrollUp?this._topPositions[index+1]=void 0:this.padding=this.padding+this._getItemHeight(index),item.element.parentElement&&item.element.parentElement.removeChild(item.element),delete this._renderedItems[index]}},{key:"_removeAllElements",value:function(){var _this5=this;Object.keys(this._renderedItems).forEach(function(key){return _this5._removeElement(key)})}},{key:"_recalculateTopPositions",value:function(start,end){for(var i=start;i<=end;i++)this._topPositions[i+1]=this._topPositions[i]+this._getItemHeight(i)}},{key:"_calculateStartIndex",value:function(current){var firstItemIndex=this._firstItemRendered(),lastItemIndex=this._lastItemRendered();this._recalculateTopPositions(firstItemIndex,lastItemIndex);for(var start=0,end=this._countItems()-1;;){var middle=Math.floor((start+end)/2),value=current+this._topPositions[middle];if(end<start)return 0;if(value<=0&&value+this._getItemHeight(middle)>0)return middle;isNaN(value)||value>=0?end=middle-1:start=middle+1}}},{key:"_debounce",value:function(func,wait,immediate){var timeout=void 0;return function(){var _this6=this,_arguments=arguments,callNow=immediate&&!timeout;clearTimeout(timeout),callNow?func.apply(this,arguments):timeout=setTimeout(function(){timeout=null,func.apply(_this6,_arguments)},wait)}}},{key:"_doubleFireOnTouchend",value:function(){this._render(),this._debounce(this._render.bind(this),100)}},{key:"_addEventListeners",value:function(){_util2["default"].bindListeners(this,["_onChange","_doubleFireOnTouchend"]),_platform2["default"].isIOS()&&(this._boundOnChange=this._debounce(this._boundOnChange,30)),this._pageContent.addEventListener("scroll",this._boundOnChange,!0),_platform2["default"].isIOS()&&(this._pageContent.addEventListener("touchmove",this._boundOnChange,!0),this._pageContent.addEventListener("touchend",this._boundDoubleFireOnTouchend,!0)),window.document.addEventListener("resize",this._boundOnChange,!0)}},{key:"_removeEventListeners",value:function(){this._pageContent.removeEventListener("scroll",this._boundOnChange,!0),_platform2["default"].isIOS()&&(this._pageContent.removeEventListener("touchmove",this._boundOnChange,!0),this._pageContent.removeEventListener("touchend",this._boundDoubleFireOnTouchend,!0)),window.document.removeEventListener("resize",this._boundOnChange,!0)}},{key:"destroy",value:function(){this._removeAllElements(),this._delegate.destroy(),this._parentElement=this._delegate=this._renderedItems=null,this._removeEventListeners()}},{key:"padding",get:function(){return parseInt(this._wrapperElement.style.paddingTop,10)},set:function(newValue){this._wrapperElement.style.paddingTop=newValue+"px"}},{key:"staticItemHeight",get:function(){return this._delegate.itemHeight||this._itemHeight}}]),LazyRepeatProvider}()},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),ToastQueue=function(){function ToastQueue(){_classCallCheck(this,ToastQueue),this.queue=[]}return _createClass(ToastQueue,[{key:"add",value:function(fn,promise){var _this=this;this.queue.push(fn),1===this.queue.length&&setImmediate(this.queue[0]),promise.then(function(){_this.queue.shift(),_this.queue.length>0&&setTimeout(_this.queue[0],1e3/30)})}}]),ToastQueue}();exports["default"]=new ToastQueue,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),pageAttributeExpression={_variables:{},defineVariable:function(name,value){var overwrite=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof name)throw new Error("Variable name must be a string.");if("string"!=typeof value&&"function"!=typeof value)throw new Error("Variable value must be a string or a function.");if(this._variables.hasOwnProperty(name)&&!overwrite)throw new Error('"'+name+'" is already defined.');this._variables[name]=value},getVariable:function(name){return this._variables.hasOwnProperty(name)?this._variables[name]:null},removeVariable:function(name){delete this._variables[name]},getAllVariables:function(){return this._variables},_parsePart:function(part){var c=void 0,inInterpolation=!1,currentIndex=0,tokens=[];if(0===part.length)throw new Error("Unable to parse empty string.");for(var i=0;i<part.length;i++)if(c=part.charAt(i),"$"===c&&"{"===part.charAt(i+1)){if(inInterpolation)throw new Error("Nested interpolation not supported.");var token=part.substring(currentIndex,i);token.length>0&&tokens.push(part.substring(currentIndex,i)),currentIndex=i,inInterpolation=!0}else if("}"===c){if(!inInterpolation)throw new Error("} must be preceeded by ${");var _token=part.substring(currentIndex,i+1);_token.length>0&&tokens.push(part.substring(currentIndex,i+1)),currentIndex=i+1,inInterpolation=!1}if(inInterpolation)throw new Error("Unterminated interpolation.");return tokens.push(part.substring(currentIndex,part.length)),tokens},_replaceToken:function(token){var re=/^\${(.*?)}$/,match=token.match(re);if(match){var name=match[1].trim(),variable=this.getVariable(name);if(null===variable)throw new Error('Variable "'+name+'" does not exist.');if("string"==typeof variable)return variable;var rv=variable();if("string"!=typeof rv)throw new Error("Must return a string.");return rv}return token},_replaceTokens:function(tokens){return tokens.map(this._replaceToken.bind(this))},_parseExpression:function(expression){return expression.split(",").map(function(part){return part.trim()}).map(this._parsePart.bind(this)).map(this._replaceTokens.bind(this)).map(function(part){return part.join("")})},evaluate:function(expression){return expression?this._parseExpression(expression):[]}};pageAttributeExpression.defineVariable("mobileOS",_platform2["default"].getMobileOS()),pageAttributeExpression.defineVariable("iOSDevice",_platform2["default"].getIOSDevice()),pageAttributeExpression.defineVariable("runtime",function(){return _platform2["default"].isWebView()?"cordova":"browser"}),exports["default"]=pageAttributeExpression,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(internals,destination,builtIn){destination.prepend=function(){for(var _len=arguments.length,nodes=Array(_len),_key=0;_key<_len;_key++)nodes[_key]=arguments[_key];var connectedBefore=nodes.filter(function(node){return node instanceof Node&&Utilities.isConnected(node)});builtIn.prepend.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++)internals.disconnectTree(connectedBefore[i]);if(Utilities.isConnected(this))for(var _i=0;_i<nodes.length;_i++){var node=nodes[_i];node instanceof Element&&internals.connectTree(node)}},destination.append=function(){for(var _len2=arguments.length,nodes=Array(_len2),_key2=0;_key2<_len2;_key2++)nodes[_key2]=arguments[_key2];var connectedBefore=nodes.filter(function(node){return node instanceof Node&&Utilities.isConnected(node)});builtIn.append.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++)internals.disconnectTree(connectedBefore[i]);if(Utilities.isConnected(this))for(var _i2=0;_i2<nodes.length;_i2++){var node=nodes[_i2];node instanceof Element&&internals.connectTree(node)}}};var _CustomElementInternals=__webpack_require__(11),_Utilities=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(15)),Utilities=_interopRequireWildcard(_Utilities);module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||void 0!==forbiddenField&&forbiddenField in it)throw TypeError(name+": incorrect invocation!");return it}},function(module,exports,__webpack_require__){"use strict";var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1)}},function(module,exports,__webpack_require__){"use strict";var dP=__webpack_require__(23).f,create=__webpack_require__(70),redefineAll=__webpack_require__(71),ctx=__webpack_require__(34),anInstance=__webpack_require__(60),defined=__webpack_require__(35),forOf=__webpack_require__(44),$iterDefine=__webpack_require__(45),step=__webpack_require__(68),setSpecies=__webpack_require__(194),DESCRIPTORS=__webpack_require__(16),fastKey=__webpack_require__(69).fastKey,SIZE=DESCRIPTORS?"_s":"size",getEntry=function(that,key){var entry,index=fastKey(key);if("F"!==index)return that._i[index];for(entry=that._f;entry;entry=entry.n)if(entry.k==key)return entry};module.exports={getConstructor:function(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,"_i"),that._i=create(null),that._f=void 0,that._l=void 0,that[SIZE]=0,void 0!=iterable&&forOf(iterable,IS_MAP,that[ADDER],that)});return redefineAll(C.prototype,{clear:function(){for(var that=this,data=that._i,entry=that._f;entry;entry=entry.n)entry.r=!0,entry.p&&(entry.p=entry.p.n=void 0),delete data[entry.i];that._f=that._l=void 0,that[SIZE]=0},"delete":function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that._i[entry.i],entry.r=!0,prev&&(prev.n=next),next&&(next.p=prev),that._f==entry&&(that._f=next),that._l==entry&&(that._l=prev),that[SIZE]--}return!!entry},forEach:function(callbackfn){anInstance(this,C,"forEach");for(var entry,f=ctx(callbackfn,arguments.length>1?arguments[1]:void 0,3);entry=entry?entry.n:this._f;)for(f(entry.v,entry.k,this);entry&&entry.r;)entry=entry.p},has:function(key){return!!getEntry(this,key)}}),DESCRIPTORS&&dP(C.prototype,"size",{get:function(){return defined(this[SIZE])}}),C},def:function(that,key,value){var prev,index,entry=getEntry(that,key);return entry?entry.v=value:(that._l=entry={i:index=fastKey(key,!0),k:key,v:value,p:prev=that._l,n:void 0,r:!1},that._f||(that._f=entry),prev&&(prev.n=entry),that[SIZE]++,"F"!==index&&(that._i[index]=entry)),that},getEntry:getEntry,setStrong:function(C,NAME,IS_MAP){$iterDefine(C,NAME,function(iterated,kind){this._t=iterated,this._k=kind,this._l=void 0},function(){for(var that=this,kind=that._k,entry=that._l;entry&&entry.r;)entry=entry.p;return that._t&&(that._l=entry=entry?entry.n:that._t._f)?"keys"==kind?step(0,entry.k):"values"==kind?step(0,entry.v):step(0,[entry.k,entry.v]):(that._t=void 0,step(1))},IS_MAP?"entries":"values",!IS_MAP,!0),setSpecies(NAME)}}},function(module,exports,__webpack_require__){"use strict";var classof=__webpack_require__(43),from=__webpack_require__(178);module.exports=function(NAME){return function(){if(classof(this)!=NAME)throw TypeError(NAME+"#toJSON isn't generic");return from(this)}}},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(12),$export=__webpack_require__(28),redefine=__webpack_require__(24),redefineAll=__webpack_require__(71),meta=__webpack_require__(69),forOf=__webpack_require__(44),anInstance=__webpack_require__(60),isObject=__webpack_require__(18),fails=__webpack_require__(36),$iterDetect=__webpack_require__(186),setToStringTag=__webpack_require__(47),inheritIfRequired=__webpack_require__(181);module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME],C=Base,ADDER=IS_MAP?"set":"add",proto=C&&C.prototype,O={},fixMethod=function(KEY){var fn=proto[KEY];redefine(proto,KEY,"delete"==KEY?function(a){return!(IS_WEAK&&!isObject(a))&&fn.call(this,0===a?0:a)}:"has"==KEY?function(a){return!(IS_WEAK&&!isObject(a))&&fn.call(this,0===a?0:a)}:"get"==KEY?function(a){return IS_WEAK&&!isObject(a)?void 0:fn.call(this,0===a?0:a)}:"add"==KEY?function(a){return fn.call(this,0===a?0:a),this}:function(a,b){return fn.call(this,0===a?0:a,b),this})};if("function"==typeof C&&(IS_WEAK||proto.forEach&&!fails(function(){(new C).entries().next()}))){var instance=new C,HASNT_CHAINING=instance[ADDER](IS_WEAK?{}:-0,1)!=instance,THROWS_ON_PRIMITIVES=fails(function(){instance.has(1)}),ACCEPT_ITERABLES=$iterDetect(function(iter){new C(iter)}),BUGGY_ZERO=!IS_WEAK&&fails(function(){for(var $instance=new C,index=5;index--;)$instance[ADDER](index,index);return!$instance.has(-0)});ACCEPT_ITERABLES||(C=wrapper(function(target,iterable){anInstance(target,C,NAME);var that=inheritIfRequired(new Base,target,C);return void 0!=iterable&&forOf(iterable,IS_MAP,that[ADDER],that),that}),C.prototype=proto,proto.constructor=C),(THROWS_ON_PRIMITIVES||BUGGY_ZERO)&&(fixMethod("delete"),fixMethod("has"),IS_MAP&&fixMethod("get")),(BUGGY_ZERO||HASNT_CHAINING)&&fixMethod(ADDER),IS_WEAK&&proto.clear&&delete proto.clear}else C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER),redefineAll(C.prototype,methods),meta.NEED=!0;return setToStringTag(C,NAME),O[NAME]=C,$export($export.G+$export.W+$export.F*(C!=Base),O),IS_WEAK||common.setStrong(C,NAME,IS_MAP),C}},function(module,exports,__webpack_require__){"use strict";var isObject=__webpack_require__(18),document=__webpack_require__(12).document,is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{}}},function(module,exports,__webpack_require__){"use strict";module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(module,exports,__webpack_require__){"use strict";module.exports=!__webpack_require__(16)&&!__webpack_require__(36)(function(){return 7!=Object.defineProperty(__webpack_require__(65)("div"),"a",{get:function(){return 7}}).a})},function(module,exports,__webpack_require__){"use strict";module.exports=function(done,value){return{value:value,done:!!done}}},function(module,exports,__webpack_require__){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},META=__webpack_require__(38)("meta"),isObject=__webpack_require__(18),has=__webpack_require__(17),setDesc=__webpack_require__(23).f,id=0,isExtensible=Object.isExtensible||function(){return!0},FREEZE=!__webpack_require__(36)(function(){return isExtensible(Object.preventExtensions({}))}),setMeta=function(it){setDesc(it,META,{value:{i:"O"+ ++id,w:{}}})},fastKey=function(it,create){if(!isObject(it))return"symbol"==("undefined"==typeof it?"undefined":_typeof(it))?it:("string"==typeof it?"S":"P")+it;if(!has(it,META)){if(!isExtensible(it))return"F";if(!create)return"E";setMeta(it)}return it[META].i},getWeak=function(it,create){
if(!has(it,META)){if(!isExtensible(it))return!0;if(!create)return!1;setMeta(it)}return it[META].w},onFreeze=function(it){return FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META)&&setMeta(it),it},meta=module.exports={KEY:META,NEED:!1,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze}},function(module,exports,__webpack_require__){"use strict";var anObject=__webpack_require__(20),dPs=__webpack_require__(188),enumBugKeys=__webpack_require__(66),IE_PROTO=__webpack_require__(48)("IE_PROTO"),Empty=function(){},PROTOTYPE="prototype",_createDict=function(){var iframeDocument,iframe=__webpack_require__(65)("iframe"),i=enumBugKeys.length,lt="<",gt=">";for(iframe.style.display="none",__webpack_require__(180).appendChild(iframe),iframe.src="javascript:",iframeDocument=iframe.contentWindow.document,iframeDocument.open(),iframeDocument.write(lt+"script"+gt+"document.F=Object"+lt+"/script"+gt),iframeDocument.close(),_createDict=iframeDocument.F;i--;)delete _createDict[PROTOTYPE][enumBugKeys[i]];return _createDict()};module.exports=Object.create||function(O,Properties){var result;return null!==O?(Empty[PROTOTYPE]=anObject(O),result=new Empty,Empty[PROTOTYPE]=null,result[IE_PROTO]=O):result=_createDict(),void 0===Properties?result:dPs(result,Properties)}},function(module,exports,__webpack_require__){"use strict";var redefine=__webpack_require__(24);module.exports=function(target,src,safe){for(var key in src)redefine(target,key,src[key],safe);return target}},function(module,exports,__webpack_require__){"use strict";var isObject=__webpack_require__(18),anObject=__webpack_require__(20),check=function(O,proto){if(anObject(O),!isObject(proto)&&null!==proto)throw TypeError(proto+": can't set as prototype!")};module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(test,buggy,set){try{set=__webpack_require__(34)(Function.call,__webpack_require__(189).f(Object.prototype,"__proto__").set,2),set(test,[]),buggy=!(test instanceof Array)}catch(e){buggy=!0}return function(O,proto){return check(O,proto),buggy?O.__proto__=proto:set(O,proto),O}}({},!1):void 0),check:check}},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(12),SHARED="__core-js_shared__",store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={})}},function(module,exports,__webpack_require__){"use strict";var toInteger=__webpack_require__(49),min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),9007199254740991):0}},function(module,exports,__webpack_require__){"use strict";var isObject=__webpack_require__(18);module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;if("function"==typeof(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(!S&&"function"==typeof(fn=it.toString)&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value")}},function(module,exports,__webpack_require__){"use strict";var classof=__webpack_require__(43),test={};test[__webpack_require__(9)("toStringTag")]="z",test+""!="[object z]"&&__webpack_require__(24)(Object.prototype,"toString",function(){return"[object "+classof(this)+"]"},!0)},function(module,exports,__webpack_require__){"use strict";var $at=__webpack_require__(195)(!0);__webpack_require__(45)(String,"String",function(iterated){this._t=String(iterated),this._i=0},function(){var point,O=this._t,index=this._i;return index>=O.length?{value:void 0,done:!0}:(point=$at(O,index),this._i+=point.length,{value:point,done:!1})})},function(module,exports,__webpack_require__){"use strict";for(var $iterators=__webpack_require__(199),redefine=__webpack_require__(24),global=__webpack_require__(12),hide=__webpack_require__(22),Iterators=__webpack_require__(29),wks=__webpack_require__(9),ITERATOR=wks("iterator"),TO_STRING_TAG=wks("toStringTag"),ArrayValues=Iterators.Array,collections=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],i=0;i<5;i++){var key,NAME=collections[i],Collection=global[NAME],proto=Collection&&Collection.prototype;if(proto){proto[ITERATOR]||hide(proto,ITERATOR,ArrayValues),proto[TO_STRING_TAG]||hide(proto,TO_STRING_TAG,NAME),Iterators[NAME]=ArrayValues;for(key in $iterators)proto[key]||redefine(proto,key,$iterators[key],!0)}}},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="action-sheet-button",scheme={"":"action-sheet-button--*",".action-sheet-icon":"action-sheet-icon--*"},ActionSheetButtonElement=function(_BaseElement){function ActionSheetButtonElement(){_classCallCheck(this,ActionSheetButtonElement);var _this=_possibleConstructorReturn(this,(ActionSheetButtonElement.__proto__||Object.getPrototypeOf(ActionSheetButtonElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(ActionSheetButtonElement,_BaseElement),_createClass(ActionSheetButtonElement,[{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),!this._icon&&this.hasAttribute("icon")){var icon=_util2["default"].createElement('<ons-icon icon="'+this.getAttribute("icon")+'"></ons-icon>');icon.classList.add("action-sheet-icon"),this.insertBefore(icon,this.firstChild)}_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_updateIcon",value:function(){this._icon&&this._icon.setAttribute("icon",this.getAttribute("icon"))}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"icon":this._updateIcon()}}},{key:"_icon",get:function(){return _util2["default"].findChild(this,".action-sheet-icon")}}],[{key:"observedAttributes",get:function(){return["modifier","class","icon"]}}]),ActionSheetButtonElement}(_baseElement2["default"]);exports["default"]=ActionSheetButtonElement,customElements.define("ons-action-sheet-button",ActionSheetButtonElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(127),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseDialog=__webpack_require__(19),_baseDialog2=_interopRequireDefault(_baseDialog),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".action-sheet":"action-sheet--*",".action-sheet-mask":"action-sheet-mask--*",".action-sheet-title":"action-sheet-title--*"},_animatorDict={"default":function(){return _platform2["default"].isAndroid()?_animator.MDActionSheetAnimator:_animator.IOSActionSheetAnimator},none:_animator.ActionSheetAnimator},ActionSheetElement=function(_BaseDialogElement){function ActionSheetElement(){_classCallCheck(this,ActionSheetElement);var _this=_possibleConstructorReturn(this,(ActionSheetElement.__proto__||Object.getPrototypeOf(ActionSheetElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(ActionSheetElement,_BaseDialogElement),_createClass(ActionSheetElement,[{key:"_updateAnimatorFactory",value:function(){return new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator.ActionSheetAnimator,baseClassName:"ActionSheetAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),this.style.display="none",this.style.zIndex=10001,!this._sheet){var sheet=document.createElement("div");for(sheet.classList.add("action-sheet");this.firstChild;)sheet.appendChild(this.firstChild);this.appendChild(sheet)}if(!this._title&&this.hasAttribute("title")){var title=document.createElement("div");title.innerHTML=this.getAttribute("title"),title.classList.add("action-sheet-title"),this._sheet.insertBefore(title,this._sheet.firstChild)}if(!this._mask){var mask=document.createElement("div");mask.classList.add("action-sheet-mask"),this.insertBefore(mask,this.firstChild)}this._sheet.style.zIndex=20001,this._mask.style.zIndex=2e4,_modifierUtil2["default"].initModifier(this,this._scheme)}},{key:"_updateTitle",value:function(){this._title&&(this._title.innerHTML=this.getAttribute("title"))}},{key:"attributeChangedCallback",value:function(name,last,current){"title"===name?this._updateTitle():_get(ActionSheetElement.prototype.__proto__||Object.getPrototypeOf(ActionSheetElement.prototype),"attributeChangedCallback",this).call(this,name,last,current)}},{key:"_scheme",get:function(){return scheme}},{key:"_mask",get:function(){return _util2["default"].findChild(this,".action-sheet-mask")}},{key:"_sheet",get:function(){return _util2["default"].findChild(this,".action-sheet")}},{key:"_title",get:function(){return this.querySelector(".action-sheet-title")}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator.ActionSheetAnimator))throw new Error('"Animator" param must inherit OnsActionSheetElement.ActionSheetAnimator');_animatorDict[name]=Animator}},{key:"observedAttributes",get:function(){return[].concat(_toConsumableArray(_get(ActionSheetElement.__proto__||Object.getPrototypeOf(ActionSheetElement),"observedAttributes",this)),["title"])}},{key:"animators",get:function(){return _animatorDict}},{key:"ActionSheetAnimator",get:function(){return _animator.ActionSheetAnimator}}]),ActionSheetElement}(_baseDialog2["default"]);exports["default"]=ActionSheetElement,customElements.define("ons-action-sheet",ActionSheetElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="alert-dialog-button",scheme={"":"alert-dialog-button--*"},AlertDialogButtonElement=function(_BaseElement){function AlertDialogButtonElement(){_classCallCheck(this,AlertDialogButtonElement);var _this=_possibleConstructorReturn(this,(AlertDialogButtonElement.__proto__||Object.getPrototypeOf(AlertDialogButtonElement)).call(this));return _this._compile(),_this}return _inherits(AlertDialogButtonElement,_BaseElement),_createClass(AlertDialogButtonElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),_util2["default"].updateRipple(this,void 0,{modifier:"light-gray"}),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),AlertDialogButtonElement}(_baseElement2["default"]);exports["default"]=AlertDialogButtonElement,customElements.define("ons-alert-dialog-button",AlertDialogButtonElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(128),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseDialog=__webpack_require__(19),_baseDialog2=_interopRequireDefault(_baseDialog),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".alert-dialog":"alert-dialog--*",".alert-dialog-container":"alert-dialog-container--*",".alert-dialog-title":"alert-dialog-title--*",".alert-dialog-content":"alert-dialog-content--*",".alert-dialog-footer":"alert-dialog-footer--*",".alert-dialog-footer--rowfooter":"alert-dialog-footer--rowfooter--*",".alert-dialog-button--rowfooter":"alert-dialog-button--rowfooter--*",".alert-dialog-button--primal":"alert-dialog-button--primal--*",".alert-dialog-button":"alert-dialog-button--*","ons-alert-dialog-button":"alert-dialog-button--*",".alert-dialog-mask":"alert-dialog-mask--*",".text-input":"text-input--*"},_animatorDict={none:_animator.AlertDialogAnimator,"default":function(){return _platform2["default"].isAndroid()?_animator.AndroidAlertDialogAnimator:_animator.IOSAlertDialogAnimator},fade:function(){return _platform2["default"].isAndroid()?_animator.AndroidAlertDialogAnimator:_animator.IOSAlertDialogAnimator}},AlertDialogElement=function(_BaseDialogElement){function AlertDialogElement(){_classCallCheck(this,AlertDialogElement);var _this=_possibleConstructorReturn(this,(AlertDialogElement.__proto__||Object.getPrototypeOf(AlertDialogElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(AlertDialogElement,_BaseDialogElement),_createClass(AlertDialogElement,[{key:"_updateAnimatorFactory",value:function(){return new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator.AlertDialogAnimator,baseClassName:"AlertDialogAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.style.display="none",this.style.zIndex=10001;var content=document.createDocumentFragment();if(!this._mask&&!this._dialog)for(;this.firstChild;)content.appendChild(this.firstChild);if(!this._mask){var mask=document.createElement("div");mask.classList.add("alert-dialog-mask"),this.insertBefore(mask,this.children[0])}if(!this._dialog){var dialog=document.createElement("div");dialog.classList.add("alert-dialog"),this.insertBefore(dialog,null)}if(!_util2["default"].findChild(this._dialog,".alert-dialog-container")){var container=document.createElement("div");container.classList.add("alert-dialog-container"),this._dialog.appendChild(container)}this._dialog.children[0].appendChild(content),this._dialog.style.zIndex=20001,this._mask.style.zIndex=2e4,_modifierUtil2["default"].initModifier(this,this._scheme)}},{key:"_scheme",get:function(){return scheme}},{key:"_mask",get:function(){return _util2["default"].findChild(this,".alert-dialog-mask")}},{key:"_dialog",get:function(){return _util2["default"].findChild(this,".alert-dialog")}},{key:"_titleElement",get:function(){return _util2["default"].findChild(this._dialog.children[0],".alert-dialog-title")}},{key:"_contentElement",get:function(){return _util2["default"].findChild(this._dialog.children[0],".alert-dialog-content")}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator.AlertDialogAnimator))throw new Error('"Animator" param must inherit OnsAlertDialogElement.AlertDialogAnimator');_animatorDict[name]=Animator}},{key:"animators",get:function(){return _animatorDict}},{key:"AlertDialogAnimator",get:function(){return _animator.AlertDialogAnimator}}]),AlertDialogElement}(_baseDialog2["default"]);exports["default"]=AlertDialogElement,customElements.define("ons-alert-dialog",AlertDialogElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_iosBackButtonIcon=__webpack_require__(206),_iosBackButtonIcon2=_interopRequireDefault(_iosBackButtonIcon),_mdBackButtonIcon=__webpack_require__(207),_mdBackButtonIcon2=_interopRequireDefault(_mdBackButtonIcon),defaultClassName="back-button",scheme={"":"back-button--*",".back-button__icon":"back-button--*__icon",".back-button__label":"back-button--*__label"},BackButtonElement=function(_BaseElement){function BackButtonElement(){_classCallCheck(this,BackButtonElement);var _this=_possibleConstructorReturn(this,(BackButtonElement.__proto__||Object.getPrototypeOf(BackButtonElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this._options={},_this._boundOnClick=_this._onClick.bind(_this),_this}return _inherits(BackButtonElement,_BaseElement),_createClass(BackButtonElement,[{key:"_updateIcon",value:function(){var icon=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_util2["default"].findChild(this,".back-button__icon");icon.innerHTML="android"===_autostyle2["default"].getPlatform(this)||_util2["default"].hasModifier(this,"material")?_mdBackButtonIcon2["default"]:_iosBackButtonIcon2["default"]}},{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),!_util2["default"].findChild(this,".back-button__label")){for(var label=_util2["default"].create("span.back-button__label");this.childNodes[0];)label.appendChild(this.childNodes[0]);this.appendChild(label)}if(!_util2["default"].findChild(this,".back-button__icon")){var icon=_util2["default"].create("span.back-button__icon");this._updateIcon(icon),this.insertBefore(icon,this.children[0])}_util2["default"].updateRipple(this,void 0,{center:"",size:"contain",background:"transparent"}),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_onClick",value:function(){if(this.onClick)this.onClick.apply(this);else{var navigator=_util2["default"].findParent(this,"ons-navigator");navigator&&navigator.popPage(this.options)}}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick,!1)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)&&this._updateIcon()}}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1)}},{key:"show",value:function(){this.style.display="inline-block"}},{key:"hide",value:function(){this.style.display="none"}},{key:"options",get:function(){return this._options},set:function(object){this._options=object}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),BackButtonElement}(_baseElement2["default"]);exports["default"]=BackButtonElement,customElements.define("ons-back-button",BackButtonElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_modifierUtil=(_interopRequireDefault(_autostyle),__webpack_require__(3)),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="bottom-bar",scheme={"":"bottom-bar--*"},BottomToolbarElement=function(_BaseElement){function BottomToolbarElement(){_classCallCheck(this,BottomToolbarElement);var _this=_possibleConstructorReturn(this,(BottomToolbarElement.__proto__||Object.getPrototypeOf(BottomToolbarElement)).call(this));return _this.classList.add(defaultClassName),_modifierUtil2["default"].initModifier(_this,scheme),_this}return _inherits(BottomToolbarElement,_BaseElement),_createClass(BottomToolbarElement,[{key:"connectedCallback",value:function(){_util2["default"].match(this.parentNode,"ons-page")&&this.parentNode.classList.add("page-with-bottom-toolbar")}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),BottomToolbarElement}(_baseElement2["default"]);exports["default"]=BottomToolbarElement,customElements.define("ons-bottom-toolbar",BottomToolbarElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),scheme={
"":"button--*"},defaultClassName="button",ButtonElement=function(_BaseElement){function ButtonElement(){_classCallCheck(this,ButtonElement);var _this=_possibleConstructorReturn(this,(ButtonElement.__proto__||Object.getPrototypeOf(ButtonElement)).call(this));return _this._compile(),_this}return _inherits(ButtonElement,_BaseElement),_createClass(ButtonElement,[{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"ripple":this._updateRipple()}}},{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),this._updateRipple(),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_updateRipple",value:function(){_util2["default"].updateRipple(this)}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","class"]}}]),ButtonElement}(_baseElement2["default"]);exports["default"]=ButtonElement,customElements.define("ons-button",ButtonElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),defaultClassName="card",scheme={"":"card--*",".card__title":"card--*__title",".card__content":"card--*__content"},CardElement=function(_BaseElement){function CardElement(){_classCallCheck(this,CardElement);var _this=_possibleConstructorReturn(this,(CardElement.__proto__||Object.getPrototypeOf(CardElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this}return _inherits(CardElement,_BaseElement),_createClass(CardElement,[{key:"_compile",value:function(){for(var title=void 0,content=void 0,i=0;i<this.children.length;i++){var el=this.children[i];el.classList.contains("title")?(el.classList.add("card__title"),title=el):el.classList.contains("content")&&(el.classList.add("card__content"),content=el)}_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),CardElement}(_baseElement2["default"]);exports["default"]=CardElement,customElements.define("ons-card",CardElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_baseElement=(_interopRequireDefault(_util),__webpack_require__(1)),_baseElement2=_interopRequireDefault(_baseElement),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),scheme={"":"carousel-item--*"},CarouselItemElement=function(_BaseElement){function CarouselItemElement(){_classCallCheck(this,CarouselItemElement);var _this=_possibleConstructorReturn(this,(CarouselItemElement.__proto__||Object.getPrototypeOf(CarouselItemElement)).call(this));return _this.style.width="100%",_modifierUtil2["default"].initModifier(_this,scheme),_this}return _inherits(CarouselItemElement,_BaseElement),_createClass(CarouselItemElement,[{key:"attributeChangedCallback",value:function(name,last,current){if("modifier"===name)return _modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}],[{key:"observedAttributes",get:function(){return["modifier"]}}]),CarouselItemElement}(_baseElement2["default"]);exports["default"]=CarouselItemElement,customElements.define("ons-carousel-item",CarouselItemElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),_doorlock=__webpack_require__(32),_doorlock2=_interopRequireDefault(_doorlock),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),VerticalModeTrait={_getScrollDelta:function(event){return event.gesture.deltaY},_getScrollVelocity:function(event){return event.gesture.velocityY},_getElementSize:function(){if(!this._currentElementSize){var styling=window.getComputedStyle(this,null);this._currentElementSize=this.getBoundingClientRect().height-parseInt(styling.getPropertyValue("border-top-width"))-parseInt(styling.getPropertyValue("border-bottom-width"))}return this._currentElementSize},_generateScrollTransform:function(scroll){return"translate3d(0px, "+-scroll+"px, 0px)"},_updateDimensionData:function(){this._style=window.getComputedStyle(this),this._dimensions=this.getBoundingClientRect()},_updateOffset:function(){if(this.centered){var height=(this._dimensions.height||0)-parseInt(this._style.paddingTop,10)-parseInt(this._style.paddingBottom,10);this._offset=-(height-this._getCarouselItemSize())/2}},_layoutCarouselItems:function(){for(var children=this._getCarouselItemElements(),sizeAttr=this._getCarouselItemSizeAttr(),sizeInfo=this._decomposeSizeString(sizeAttr),i=0;i<children.length;i++)children[i].style.position="absolute",children[i].style.height=sizeAttr,children[i].style.visibility="visible",children[i].style.top=i*sizeInfo.number+sizeInfo.unit},_setup:function(){this._updateDimensionData(),this._updateOffset(),this._layoutCarouselItems()}},HorizontalModeTrait={_getScrollDelta:function(event){return event.gesture.deltaX},_getScrollVelocity:function(event){return event.gesture.velocityX},_getElementSize:function(){if(!this._currentElementSize){var styling=window.getComputedStyle(this,null);this._currentElementSize=this.getBoundingClientRect().width-parseInt(styling.getPropertyValue("border-right-width"))-parseInt(styling.getPropertyValue("border-left-width"))}return this._currentElementSize},_generateScrollTransform:function(scroll){return"translate3d("+-scroll+"px, 0px, 0px)"},_updateDimensionData:function(){this._style=window.getComputedStyle(this),this._dimensions=this.getBoundingClientRect()},_updateOffset:function(){if(this.centered){var width=(this._dimensions.width||0)-parseInt(this._style.paddingLeft,10)-parseInt(this._style.paddingRight,10);this._offset=-(width-this._getCarouselItemSize())/2}},_layoutCarouselItems:function(){for(var children=this._getCarouselItemElements(),sizeAttr=this._getCarouselItemSizeAttr(),sizeInfo=this._decomposeSizeString(sizeAttr),i=0;i<children.length;i++)children[i].style.position="absolute",children[i].style.width=sizeAttr,children[i].style.visibility="visible",children[i].style.left=i*sizeInfo.number+sizeInfo.unit},_setup:function(){this._updateDimensionData(),this._updateOffset(),this._layoutCarouselItems()}},CarouselElement=function(_BaseElement){function CarouselElement(){_classCallCheck(this,CarouselElement);var _this=_possibleConstructorReturn(this,(CarouselElement.__proto__||Object.getPrototypeOf(CarouselElement)).call(this));return _this._doorLock=new _doorlock2["default"],_this._scroll=0,_this._offset=0,_this._lastActiveIndex=0,_this._boundOnDragStart=_this._onDragStart.bind(_this),_this._boundOnDrag=_this._onDrag.bind(_this),_this._boundOnDragEnd=_this._onDragEnd.bind(_this),_this._boundOnResize=_this._onResize.bind(_this),_this._mixin(_this._isVertical()?VerticalModeTrait:HorizontalModeTrait),_this}return _inherits(CarouselElement,_BaseElement),_createClass(CarouselElement,[{key:"_onResize",value:function(){var i=this._scroll/this._currentElementSize;delete this._currentElementSize,this.setActiveIndex(i),this.refresh()}},{key:"_onDirectionChange",value:function(){this._isVertical()?(this.style.overflowX="auto",this.style.overflowY=""):(this.style.overflowX="",this.style.overflowY="auto"),this.refresh()}},{key:"_saveLastState",value:function(){this._lastState={elementSize:this._getCarouselItemSize(),carouselElementCount:this.itemCount,width:this._getCarouselItemSize()*this.itemCount}}},{key:"_getCarouselItemSize",value:function(){var sizeAttr=this._getCarouselItemSizeAttr(),sizeInfo=this._decomposeSizeString(sizeAttr),elementSize=this._getElementSize();if("%"===sizeInfo.unit)return Math.round(sizeInfo.number/100*elementSize);if("px"===sizeInfo.unit)return sizeInfo.number;throw new Error("Invalid state")}},{key:"_getInitialIndex",value:function(){var index=parseInt(this.getAttribute("initial-index"),10);return"number"!=typeof index||isNaN(index)?0:Math.max(Math.min(index,this.itemCount-1),0)}},{key:"_getCarouselItemSizeAttr",value:function(){var attrName="item-"+(this._isVertical()?"height":"width"),itemSizeAttr=(""+this.getAttribute(attrName)).trim();return itemSizeAttr.match(/^\d+(px|%)$/)?itemSizeAttr:"100%"}},{key:"_decomposeSizeString",value:function(size){var matches=size.match(/^(\d+)(px|%)/);return{number:parseInt(matches[1],10),unit:matches[2]}}},{key:"_setupInitialIndex",value:function(){this._scroll=(this._offset||0)+this._getCarouselItemSize()*this._getInitialIndex(),this._lastActiveIndex=this._getInitialIndex(),this._scrollTo(this._scroll)}},{key:"setActiveIndex",value:function(index){var _this2=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(options&&"object"!=("undefined"==typeof options?"undefined":_typeof(options)))throw new Error("options must be an object. You supplied "+options);options.animation=options.animation||this.getAttribute("animation"),options.animationOptions=_util2["default"].extend({duration:.3,timing:"cubic-bezier(.1, .7, .1, 1)"},options.animationOptions||{},this.hasAttribute("animation-options")?_util2["default"].animationOptionsParse(this.getAttribute("animation-options")):{}),index=Math.max(0,Math.min(index,this.itemCount-1));var scroll=(this._offset||0)+this._getCarouselItemSize()*index,max=this._calculateMaxScroll();return this._scroll=Math.max(0,Math.min(max,scroll)),this._scrollTo(this._scroll,options).then(function(){return _this2._tryFirePostChangeEvent(),_this2})}},{key:"getActiveIndex",value:function(){var scroll=this._scroll-(this._offset||0),count=this.itemCount,size=this._getCarouselItemSize();if(scroll<0)return 0;var i=void 0;for(i=0;i<count;i++)if(size*i<=scroll&&size*(i+1)>scroll)return i;return i}},{key:"next",value:function(options){return this.setActiveIndex(this.getActiveIndex()+1,options)}},{key:"prev",value:function(options){return this.setActiveIndex(this.getActiveIndex()-1,options)}},{key:"_isEnabledChangeEvent",value:function(){var elementSize=this._getElementSize(),carouselItemSize=this._getCarouselItemSize();return this.autoScroll&&Math.abs(elementSize-carouselItemSize)<.5}},{key:"_isVertical",value:function(){return"vertical"===this.getAttribute("direction")}},{key:"_show",value:function(){window.addEventListener("resize",this._boundOnResize,!0)}},{key:"_prepareEventListeners",value:function(){var _this3=this;this._gestureDetector=new _gestureDetector2["default"](this,{dragMinDistance:1,dragLockToAxis:!0}),this._mutationObserver=new MutationObserver(function(){return _this3.refresh()}),this._updateSwipeable(),this._updateAutoRefresh(),window.addEventListener("resize",this._boundOnResize,!0)}},{key:"_hide",value:function(){window.removeEventListener("resize",this._boundOnResize,!0)}},{key:"_removeEventListeners",value:function(){this._gestureDetector.dispose(),this._gestureDetector=null,this._mutationObserver.disconnect(),this._mutationObserver=null,window.removeEventListener("resize",this._boundOnResize,!0)}},{key:"_updateSwipeable",value:function(){if(this._gestureDetector){var action=this.swipeable?"on":"off";this._gestureDetector[action]("drag",this._boundOnDrag),this._gestureDetector[action]("dragstart",this._boundOnDragStart),this._gestureDetector[action]("dragend",this._boundOnDragEnd)}}},{key:"_updateAutoRefresh",value:function(){this._mutationObserver&&(this.hasAttribute("auto-refresh")?this._mutationObserver.observe(this,{childList:!0}):this._mutationObserver.disconnect())}},{key:"_tryFirePostChangeEvent",value:function(){var currentIndex=this.getActiveIndex();if(this._lastActiveIndex!==currentIndex){var lastActiveIndex=this._lastActiveIndex;this._lastActiveIndex=currentIndex,_util2["default"].triggerElementEvent(this,"postchange",{carousel:this,activeIndex:currentIndex,lastActiveIndex:lastActiveIndex})}}},{key:"_canConsumeGesture",value:function(gesture){var d=gesture.direction,isFirst=0===this._scroll&&!this.overscrollable,isLast=this._scroll===this._calculateMaxScroll()&&!this.overscrollable;return this._isVertical()?"down"===d&&!isFirst||"up"===d&&!isLast:"right"===d&&!isFirst||"left"===d&&!isLast}},{key:"_onDragStart",value:function(event){var _this4=this;if(this._ignoreDrag=event.consumed,event.gesture&&!this._ignoreDrag){var consume=event.consume;event.consume=function(){consume&&consume(),_this4._ignoreDrag=!0},this._canConsumeGesture(event.gesture)&&(consume&&consume(),event.consumed=!0,this._started=!0)}}},{key:"_onDrag",value:function(event){if(event.gesture&&!this._ignoreDrag&&this._canConsumeGesture(event.gesture)&&this._started){event.stopPropagation(),this._lastDragEvent=event;var scroll=this._scroll-this._getScrollDelta(event);this._scrollTo(scroll),event.gesture.preventDefault(),this._tryFirePostChangeEvent()}}},{key:"_onDragEnd",value:function(event){var _this5=this;if(this._started=!1,event.gesture&&this._lastDragEvent&&!this._ignoreDrag){if(event.stopPropagation(),this._currentElementSize=void 0,this._scroll=this._scroll-this._getScrollDelta(event),this._isOverScroll(this._scroll)){var waitForAction=!1;_util2["default"].triggerElementEvent(this,"overscroll",{carousel:this,activeIndex:this.getActiveIndex(),direction:this._getOverScrollDirection(),waitToReturn:function(promise){waitForAction=!0,promise.then(function(){return _this5._scrollToKillOverScroll()})}}),waitForAction||this._scrollToKillOverScroll()}else this._startMomentumScroll();this._lastDragEvent=null,event.gesture.preventDefault()}}},{key:"_mixin",value:function(trait){Object.keys(trait).forEach(function(key){this[key]=trait[key]}.bind(this))}},{key:"_startMomentumScroll",value:function(){if(this._lastDragEvent){var velocity=this._getScrollVelocity(this._lastDragEvent),duration=.3,scrollDelta=100*duration*velocity,scroll=this._normalizeScrollPosition(this._scroll+(this._getScrollDelta(this._lastDragEvent)>0?-scrollDelta:scrollDelta));this._scroll=scroll,(0,_animit2["default"])(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(this._scroll)},{duration:duration,timing:"cubic-bezier(.1, .7, .1, 1)"}).queue(function(done){done(),this._tryFirePostChangeEvent()}.bind(this)).play()}}},{key:"_normalizeScrollPosition",value:function(scroll){var max=this._calculateMaxScroll();if(!this.autoScroll)return Math.max(0,Math.min(max,scroll));for(var arr=[],size=this._getCarouselItemSize(),nbrOfItems=this.itemCount,i=0;i<nbrOfItems;i++)i*size+this._offset<max&&arr.push(i*size+this._offset);arr.push(max),arr.sort(function(left,right){return left=Math.abs(left-scroll),right=Math.abs(right-scroll),left-right}),arr=arr.filter(function(item,pos){return!pos||item!=arr[pos-1]});var lastScroll=this._lastActiveIndex*size+this._offset,scrollRatio=Math.abs(scroll-lastScroll)/size,result=arr[0];return scrollRatio<=this.autoScrollRatio?result=lastScroll:scrollRatio<1&&arr[0]===lastScroll&&arr.length>1&&(result=arr[1]),Math.max(0,Math.min(max,result))}},{key:"_getCarouselItemElements",value:function(){return _util2["default"].arrayFrom(this.children).filter(function(child){return"ons-carousel-item"===child.nodeName.toLowerCase()})}},{key:"_scrollTo",value:function(scroll){var _this6=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},isOverscrollable=this.overscrollable,normalizeScroll=function(scroll){var ratio=.35;if(scroll<0)return isOverscrollable?Math.round(scroll*ratio):0;var maxScroll=_this6._calculateMaxScroll();return maxScroll<scroll?isOverscrollable?maxScroll+Math.round((scroll-maxScroll)*ratio):maxScroll:scroll};return new Promise(function(resolve){(0,_animit2["default"])(_this6._getCarouselItemElements()).queue({transform:_this6._generateScrollTransform(normalizeScroll(scroll))},"none"!==options.animation?options.animationOptions:{}).play(function(){options.callback instanceof Function&&options.callback(),resolve()})})}},{key:"_calculateMaxScroll",value:function(){var max=this.itemCount*this._getCarouselItemSize()-this._getElementSize();return Math.ceil(max<0?0:max)}},{key:"_isOverScroll",value:function(scroll){return scroll<0||scroll>this._calculateMaxScroll()}},{key:"_getOverScrollDirection",value:function(){return this._isVertical()?this._scroll<=0?"up":"down":this._scroll<=0?"left":"right"}},{key:"_scrollToKillOverScroll",value:function(){var duration=.4;if(this._scroll<0)return(0,_animit2["default"])(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(0)},{duration:duration,timing:"cubic-bezier(.1, .4, .1, 1)"}).queue(function(done){done(),this._tryFirePostChangeEvent()}.bind(this)).play(),void(this._scroll=0);var maxScroll=this._calculateMaxScroll();return maxScroll<this._scroll?((0,_animit2["default"])(this._getCarouselItemElements()).queue({transform:this._generateScrollTransform(maxScroll)},{duration:duration,timing:"cubic-bezier(.1, .4, .1, 1)"}).queue(function(done){done(),this._tryFirePostChangeEvent()}.bind(this)).play(),void(this._scroll=maxScroll)):void 0}},{key:"refresh",value:function(){if(0!==this._getCarouselItemSize()){if(this._mixin(this._isVertical()?VerticalModeTrait:HorizontalModeTrait),this._setup(),this._lastState&&this._lastState.width>0){var scroll=this._scroll;this._isOverScroll(scroll)?this._scrollToKillOverScroll():(this.autoScroll&&(scroll=this._normalizeScrollPosition(scroll)),this._scrollTo(scroll))}this._saveLastState(),_util2["default"].triggerElementEvent(this,"refresh",{carousel:this})}}},{key:"first",value:function(options){return this.setActiveIndex(0,options)}},{key:"last",value:function(options){this.setActiveIndex(Math.max(this.itemCount-1,0),options)}},{key:"connectedCallback",value:function(){var _this7=this;this._prepareEventListeners(),this._setup(),this._setupInitialIndex(),this._saveLastState(),0===this.offsetHeight&&setImmediate(function(){return _this7.refresh()})}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"swipeable":this._updateSwipeable();break;case"auto-refresh":this._updateAutoRefresh();break;case"direction":this._onDirectionChange()}}},{key:"disconnectedCallback",value:function(){this._removeEventListeners()}},{key:"itemCount",get:function(){return this._getCarouselItemElements().length}},{key:"autoScrollRatio",get:function(){var attr=this.getAttribute("auto-scroll-ratio");if(!attr)return.5;var scrollRatio=parseFloat(attr);if(scrollRatio<0||scrollRatio>1)throw new Error("Invalid ratio.");return isNaN(scrollRatio)?.5:scrollRatio},set:function(ratio){if(ratio<0||ratio>1)throw new Error("Invalid ratio.");this.setAttribute("auto-scroll-ratio",ratio)}},{key:"swipeable",get:function(){return this.hasAttribute("swipeable")},set:function(value){return _util2["default"].toggleAttribute(this,"swipeable",value)}},{key:"autoScroll",get:function(){return this.hasAttribute("auto-scroll")},set:function(value){return _util2["default"].toggleAttribute(this,"auto-scroll",value)}},{key:"disabled",get:function(){return this.hasAttribute("disabled")},set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)}},{key:"overscrollable",get:function(){return this.hasAttribute("overscrollable")},set:function(value){return _util2["default"].toggleAttribute(this,"overscrollable",value)}},{key:"centered",get:function(){return this.hasAttribute("centered")},set:function(value){return _util2["default"].toggleAttribute(this,"centered",value)}}],[{key:"observedAttributes",get:function(){return["swipeable","auto-refresh","direction"]}},{key:"events",get:function(){return["postchange","refresh","overscroll"]}}]),CarouselElement}(_baseElement2["default"]);exports["default"]=CarouselElement,customElements.define("ons-carousel",CarouselElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseCheckbox=__webpack_require__(39),_baseCheckbox2=_interopRequireDefault(_baseCheckbox),scheme={".checkbox":"checkbox--*",".checkbox__input":"checkbox--*__input",".checkbox__checkmark":"checkbox--*__checkmark"},CheckboxElement=function(_BaseCheckboxElement){function CheckboxElement(){return _classCallCheck(this,CheckboxElement),_possibleConstructorReturn(this,(CheckboxElement.__proto__||Object.getPrototypeOf(CheckboxElement)).apply(this,arguments))}return _inherits(CheckboxElement,_BaseCheckboxElement),_createClass(CheckboxElement,[{key:"_scheme",get:function(){return scheme}},{key:"_defaultElementClass",get:function(){return"checkbox"}},{key:"type",get:function(){return"checkbox"}}]),CheckboxElement}(_baseCheckbox2["default"]);exports["default"]=CheckboxElement,customElements.define("ons-checkbox",CheckboxElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),ColElement=function(_BaseElement){function ColElement(){_classCallCheck(this,ColElement);var _this=_possibleConstructorReturn(this,(ColElement.__proto__||Object.getPrototypeOf(ColElement)).call(this));return _this.getAttribute("width")&&_this._updateWidth(),_this}return _inherits(ColElement,_BaseElement),_createClass(ColElement,[{key:"attributeChangedCallback",value:function(name,last,current){"width"===name&&this._updateWidth()}},{key:"_updateWidth",value:function(){var width=this.getAttribute("width");"string"==typeof width&&(width=(""+width).trim(),width=width.match(/^\d+$/)?width+"%":width,this.style.webkitBoxFlex="0",this.style.webkitFlex="0 0 "+width,this.style.mozBoxFlex="0",this.style.mozFlex="0 0 "+width,this.style.msFlex="0 0 "+width,this.style.flex="0 0 "+width,this.style.maxWidth=width)}}],[{key:"observedAttributes",get:function(){return["width"]}}]),ColElement}(_baseElement2["default"]);exports["default"]=ColElement,customElements.define("ons-col",ColElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(129),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseDialog=__webpack_require__(19),_baseDialog2=_interopRequireDefault(_baseDialog),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={
".dialog":"dialog--*",".dialog-container":"dialog-container--*",".dialog-mask":"dialog-mask--*"},_animatorDict={"default":function(){return _platform2["default"].isAndroid()?_animator.AndroidDialogAnimator:_animator.IOSDialogAnimator},slide:_animator.SlideDialogAnimator,none:_animator.DialogAnimator},DialogElement=function(_BaseDialogElement){function DialogElement(){_classCallCheck(this,DialogElement);var _this=_possibleConstructorReturn(this,(DialogElement.__proto__||Object.getPrototypeOf(DialogElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(DialogElement,_BaseDialogElement),_createClass(DialogElement,[{key:"_updateAnimatorFactory",value:function(){return new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator.DialogAnimator,baseClassName:"DialogAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),this.style.display="none",this.style.zIndex=10001,!this._dialog){var dialog=document.createElement("div");dialog.classList.add("dialog");var container=document.createElement("div");for(container.classList.add("dialog-container");this.firstChild;)container.appendChild(this.firstChild);dialog.appendChild(container),this.appendChild(dialog)}if(!this._mask){var mask=document.createElement("div");mask.classList.add("dialog-mask"),this.insertBefore(mask,this.firstChild)}this._dialog.style.zIndex=20001,this._mask.style.zIndex=2e4,this.setAttribute("status-bar-fill",""),_modifierUtil2["default"].initModifier(this,this._scheme)}},{key:"_scheme",get:function(){return scheme}},{key:"_mask",get:function(){return _util2["default"].findChild(this,".dialog-mask")}},{key:"_dialog",get:function(){return _util2["default"].findChild(this,".dialog")}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator.DialogAnimator))throw new Error('"Animator" param must inherit OnsDialogElement.DialogAnimator');_animatorDict[name]=Animator}},{key:"animators",get:function(){return _animatorDict}},{key:"DialogAnimator",get:function(){return _animator.DialogAnimator}}]),DialogElement}(_baseDialog2["default"]);exports["default"]=DialogElement,customElements.define("ons-dialog",DialogElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),defaultClassName="fab",scheme={"":"fab--*",".fab__icon":"fab--*__icon"},FabElement=function(_BaseElement){function FabElement(){_classCallCheck(this,FabElement);var _this=_possibleConstructorReturn(this,(FabElement.__proto__||Object.getPrototypeOf(FabElement)).call(this));return _this.hide(),_this.classList.add(defaultClassName),(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this}return _inherits(FabElement,_BaseElement),_createClass(FabElement,[{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),!_util2["default"].findChild(this,".fab__icon")){var content=document.createElement("span");content.classList.add("fab__icon"),_util2["default"].arrayFrom(this.childNodes).forEach(function(element){element.tagName&&"ons-ripple"===element.tagName.toLowerCase()||content.appendChild(element)}),this.appendChild(content)}this._updateRipple(),_modifierUtil2["default"].initModifier(this,scheme),this._updatePosition()}},{key:"connectedCallback",value:function(){var _this2=this;setImmediate(function(){return _this2.show()})}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"ripple":this._updateRipple();break;case"position":this._updatePosition()}}},{key:"_show",value:function(){this.show()}},{key:"_hide",value:function(){var _this3=this;setImmediate(function(){return _this3.hide()})}},{key:"_updateRipple",value:function(){_util2["default"].updateRipple(this)}},{key:"_updatePosition",value:function(){var position=this.getAttribute("position");switch(this.classList.remove("fab--top__left","fab--bottom__right","fab--bottom__left","fab--top__right","fab--top__center","fab--bottom__center"),position){case"top right":case"right top":this.classList.add("fab--top__right");break;case"top left":case"left top":this.classList.add("fab--top__left");break;case"bottom right":case"right bottom":this.classList.add("fab--bottom__right");break;case"bottom left":case"left bottom":this.classList.add("fab--bottom__left");break;case"center top":case"top center":this.classList.add("fab--top__center");break;case"center bottom":case"bottom center":this.classList.add("fab--bottom__center")}}},{key:"_getTranslate",value:function(){var isBottom=(this.getAttribute("position")||"").indexOf("bottom")>=0,translate=isBottom?"translate3d(0px, -"+(_util2["default"].globals.fabOffset||0)+"px, 0px) ":"";return translate}},{key:"show",value:function(){var translate=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this._getTranslate());this.style.transform=translate+"scale(1)",this.style.webkitTransform=translate+"scale(1)"}},{key:"hide",value:function(){var translate=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},this._getTranslate());this.style.transform=translate+"scale(0)",this.style.webkitTransform=translate+"scale(0)"}},{key:"toggle",value:function(){this.visible?this.hide():this.show()}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}},{key:"visible",get:function(){return this.style.transform.indexOf("scale(0)")===-1&&"none"!==this.style.display}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","position","class"]}}]),FabElement}(_baseElement2["default"]);exports["default"]=FabElement,customElements.define("ons-fab",FabElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),GestureDetectorElement=function(_BaseElement){function GestureDetectorElement(){_classCallCheck(this,GestureDetectorElement);var _this=_possibleConstructorReturn(this,(GestureDetectorElement.__proto__||Object.getPrototypeOf(GestureDetectorElement)).call(this));return _this._gestureDetector=new _gestureDetector2["default"](_this),_this}return _inherits(GestureDetectorElement,_BaseElement),GestureDetectorElement}(_baseElement2["default"]);exports["default"]=GestureDetectorElement,customElements.define("ons-gesture-detector",GestureDetectorElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),IconElement=function(_BaseElement){function IconElement(){_classCallCheck(this,IconElement);var _this=_possibleConstructorReturn(this,(IconElement.__proto__||Object.getPrototypeOf(IconElement)).call(this));return _this._compile(),_this}return _inherits(IconElement,_BaseElement),_createClass(IconElement,[{key:"attributeChangedCallback",value:function(name,last,current){this._update()}},{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this._update()}},{key:"_update",value:function(){var _this2=this;this._cleanClassAttribute();var _buildClassAndStyle2=this._buildClassAndStyle(this._getAttribute("icon"),this._getAttribute("size")),classList=_buildClassAndStyle2.classList,style=_buildClassAndStyle2.style;_util2["default"].extend(this.style,style),classList.forEach(function(className){return _this2.classList.add(className)})}},{key:"_getAttribute",value:function(attr){var parts=(this.getAttribute(attr)||"").split(/\s*,\s*/),def=parts[0],md=parts[1];return md=(md||"").split(/\s*:\s*/),(_util2["default"].hasModifier(this,md[0])?md[1]:def)||""}},{key:"_cleanClassAttribute",value:function(){var _this3=this;_util2["default"].arrayFrom(this.classList).filter(function(className){return/^(fa$|fa-|ion-|zmdi-)/.test(className)}).forEach(function(className){return _this3.classList.remove(className)}),this.classList.remove("zmdi"),this.classList.remove("ons-icon--ion")}},{key:"_buildClassAndStyle",value:function(iconName,size){var classList=["ons-icon"],style={};return 0===iconName.indexOf("ion-")?(classList.push(iconName),classList.push("ons-icon--ion")):0===iconName.indexOf("fa-")?(classList.push(iconName),classList.push("fa")):0===iconName.indexOf("md-")?(classList.push("zmdi"),classList.push("zmdi-"+iconName.split(/\-(.+)?/)[1])):(classList.push("fa"),classList.push("fa-"+iconName)),size.match(/^[1-5]x|lg$/)?(classList.push("fa-"+size),this.style.removeProperty("font-size")):style.fontSize=size,{classList:classList,style:style}}}],[{key:"observedAttributes",get:function(){return["icon","size","modifier","class"]}}]),IconElement}(_baseElement2["default"]);exports["default"]=IconElement,customElements.define("ons-icon",IconElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_orientation=__webpack_require__(41),_orientation2=_interopRequireDefault(_orientation),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),IfElement=function(_BaseElement){function IfElement(){_classCallCheck(this,IfElement);var _this=_possibleConstructorReturn(this,(IfElement.__proto__||Object.getPrototypeOf(IfElement)).call(this));return(0,_contentReady2["default"])(_this,function(){if(null!==_platform2["default"]._renderPlatform)_this._platformUpdate();else if(!_this._isAllowedPlatform()){for(;_this.childNodes[0];)_this.childNodes[0].remove();_this._platformUpdate()}}),_this._onOrientationChange(),_this}return _inherits(IfElement,_BaseElement),_createClass(IfElement,[{key:"connectedCallback",value:function(){_orientation2["default"].on("change",this._onOrientationChange.bind(this))}},{key:"attributeChangedCallback",value:function(name){"orientation"===name&&this._onOrientationChange()}},{key:"disconnectedCallback",value:function(){_orientation2["default"].off("change",this._onOrientationChange)}},{key:"_platformUpdate",value:function(){this.style.display=this._isAllowedPlatform()?"":"none"}},{key:"_isAllowedPlatform",value:function(){return!this.getAttribute("platform")||this.getAttribute("platform").split(/\s+/).indexOf(_platform2["default"].getMobileOS())>=0}},{key:"_onOrientationChange",value:function(){if(this.hasAttribute("orientation")&&this._isAllowedPlatform()){var conditionalOrientation=this.getAttribute("orientation").toLowerCase(),currentOrientation=_orientation2["default"].isPortrait()?"portrait":"landscape";this.style.display=conditionalOrientation===currentOrientation?"":"none"}}}],[{key:"observedAttributes",get:function(){return["orientation"]}}]),IfElement}(_baseElement2["default"]);exports["default"]=IfElement,customElements.define("ons-if",IfElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_baseInput=__webpack_require__(30),_baseInput2=_interopRequireDefault(_baseInput),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),scheme={".text-input":"text-input--*",".text-input__label":"text-input--*__label"},InputElement=function(_BaseInputElement){function InputElement(){_classCallCheck(this,InputElement);var _this=_possibleConstructorReturn(this,(InputElement.__proto__||Object.getPrototypeOf(InputElement)).call(this));return _this._boundOnInput=_this._update.bind(_this),_this._boundOnFocusin=_this._update.bind(_this),_this}return _inherits(InputElement,_BaseInputElement),_createClass(InputElement,[{key:"_update",value:function(){this._updateLabel(),this._updateLabelClass()}},{key:"_updateLabel",value:function(){var label=this.getAttribute("placeholder")||"";"undefined"!=typeof this._helper.textContent?this._helper.textContent=label:this._helper.innerText=label}},{key:"_updateLabelClass",value:function(){""===this.value?this._helper.classList.remove("text-input--material__label--active"):this._helper.classList.add("text-input--material__label--active")}},{key:"connectedCallback",value:function(){var _this2=this;_get(InputElement.prototype.__proto__||Object.getPrototypeOf(InputElement.prototype),"connectedCallback",this).call(this),(0,_contentReady2["default"])(this,function(){_this2._input.addEventListener("input",_this2._boundOnInput),_this2._input.addEventListener("focusin",_this2._boundOnFocusin)});var type=this.getAttribute("type");["checkbox","radio"].indexOf(type)>=0&&_util2["default"].warn('Warn: <ons-input type="'+type+'"> is deprecated since v2.4.0. Use <ons-'+type+"> instead.")}},{key:"disconnectedCallback",value:function(){var _this3=this;_get(InputElement.prototype.__proto__||Object.getPrototypeOf(InputElement.prototype),"disconnectedCallback",this).call(this),(0,_contentReady2["default"])(this,function(){_this3._input.removeEventListener("input",_this3._boundOnInput),_this3._input.removeEventListener("focusin",_this3._boundOnFocusin)})}},{key:"attributeChangedCallback",value:function(name,last,current){var _this4=this;switch(name){case"type":(0,_contentReady2["default"])(this,function(){return _this4._input.setAttribute("type",_this4.type)});break;default:_get(InputElement.prototype.__proto__||Object.getPrototypeOf(InputElement.prototype),"attributeChangedCallback",this).call(this,name,last,current)}}},{key:"_scheme",get:function(){return scheme}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="text-input">\n      <span class="text-input__label"></span>\n    '}},{key:"type",get:function(){var type=this.getAttribute("type");return["checkbox","radio"].indexOf(type)<0&&type||"text"}},{key:"_helper",get:function(){return this.querySelector("span")}}],[{key:"observedAttributes",get:function(){return[].concat(_toConsumableArray(_get(InputElement.__proto__||Object.getPrototypeOf(InputElement),"observedAttributes",this)),["type"])}}]),InputElement}(_baseInput2["default"]);exports["default"]=InputElement,customElements.define("ons-input",InputElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_util=__webpack_require__(0),_lazyRepeat=(_interopRequireDefault(_util),__webpack_require__(56)),LazyRepeatElement=function(_BaseElement){function LazyRepeatElement(){return _classCallCheck(this,LazyRepeatElement),_possibleConstructorReturn(this,(LazyRepeatElement.__proto__||Object.getPrototypeOf(LazyRepeatElement)).apply(this,arguments))}return _inherits(LazyRepeatElement,_BaseElement),_createClass(LazyRepeatElement,[{key:"connectedCallback",value:function(){this.hasAttribute("delegate")&&(this.delegate=window[this.getAttribute("delegate")])}},{key:"refresh",value:function(){this._lazyRepeatProvider&&this._lazyRepeatProvider.refresh()}},{key:"attributeChangedCallback",value:function(name,last,current){}},{key:"disconnectedCallback",value:function(){this._lazyRepeatProvider&&(this._lazyRepeatProvider.destroy(),this._lazyRepeatProvider=null)}},{key:"delegate",set:function(userDelegate){this._lazyRepeatProvider&&this._lazyRepeatProvider.destroy(),!this._templateElement&&this.children[0]&&(this._templateElement=this.removeChild(this.children[0]));var delegate=new _lazyRepeat.LazyRepeatDelegate(userDelegate,this._templateElement||null);this._lazyRepeatProvider=new _lazyRepeat.LazyRepeatProvider(this.parentElement,delegate)},get:function(){throw new Error("This property can only be used to set the delegate object.")}}]),LazyRepeatElement}(_baseElement2["default"]);exports["default"]=LazyRepeatElement,customElements.define("ons-lazy-repeat",LazyRepeatElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_autostyle=(_interopRequireDefault(_util),__webpack_require__(4)),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="list-header",scheme={"":"list-header--*"},ListHeaderElement=function(_BaseElement){function ListHeaderElement(){_classCallCheck(this,ListHeaderElement);var _this=_possibleConstructorReturn(this,(ListHeaderElement.__proto__||Object.getPrototypeOf(ListHeaderElement)).call(this));return _this._compile(),_this}return _inherits(ListHeaderElement,_BaseElement),_createClass(ListHeaderElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),ListHeaderElement}(_baseElement2["default"]);exports["default"]=ListHeaderElement,customElements.define("ons-list-header",ListHeaderElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),defaultClassName="list-item",scheme={".list-item":"list-item--*",".list-item__left":"list-item--*__left",".list-item__center":"list-item--*__center",".list-item__right":"list-item--*__right",".list-item__label":"list-item--*__label",".list-item__title":"list-item--*__title",".list-item__subtitle":"list-item--*__subtitle",".list-item__thumbnail":"list-item--*__thumbnail",".list-item__icon":"list-item--*__icon"},ListItemElement=function(_BaseElement){function ListItemElement(){_classCallCheck(this,ListItemElement);var _this=_possibleConstructorReturn(this,(ListItemElement.__proto__||Object.getPrototypeOf(ListItemElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this}return _inherits(ListItemElement,_BaseElement),_createClass(ListItemElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName);for(var left=void 0,center=void 0,right=void 0,i=0;i<this.children.length;i++){var el=this.children[i];el.classList.contains("left")?(el.classList.add("list-item__left"),left=el):el.classList.contains("center")?center=el:el.classList.contains("right")&&(el.classList.add("list-item__right"),right=el)}if(!center){if(center=document.createElement("div"),left||right)for(var _i=this.childNodes.length-1;_i>=0;_i--){var _el=this.childNodes[_i];_el!==left&&_el!==right&&center.insertBefore(_el,center.firstChild)}else for(;this.childNodes[0];)center.appendChild(this.childNodes[0]);this.insertBefore(center,right||null)}center.classList.add("center"),center.classList.add("list-item__center"),this._updateRipple(),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);
break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"ripple":this._updateRipple()}}},{key:"connectedCallback",value:function(){this.addEventListener("drag",this._onDrag),this.addEventListener("touchstart",this._onTouch),this.addEventListener("mousedown",this._onTouch),this.addEventListener("touchend",this._onRelease),this.addEventListener("touchmove",this._onRelease),this.addEventListener("touchcancel",this._onRelease),this.addEventListener("mouseup",this._onRelease),this.addEventListener("mouseout",this._onRelease),this.addEventListener("touchleave",this._onRelease),this._originalBackgroundColor=this.style.backgroundColor,this.tapped=!1}},{key:"disconnectedCallback",value:function(){this.removeEventListener("drag",this._onDrag),this.removeEventListener("touchstart",this._onTouch),this.removeEventListener("mousedown",this._onTouch),this.removeEventListener("touchend",this._onRelease),this.removeEventListener("touchmove",this._onRelease),this.removeEventListener("touchcancel",this._onRelease),this.removeEventListener("mouseup",this._onRelease),this.removeEventListener("mouseout",this._onRelease),this.removeEventListener("touchleave",this._onRelease)}},{key:"_updateRipple",value:function(){_util2["default"].updateRipple(this)}},{key:"_onDrag",value:function(event){var gesture=event.gesture;this._shouldLockOnDrag()&&["left","right"].indexOf(gesture.direction)>-1&&gesture.preventDefault()}},{key:"_onTouch",value:function(){this.tapped||(this.tapped=!0,this.style.transition=this._transition,this.style.webkitTransition=this._transition,this.style.MozTransition=this._transition,this._tappable&&(this.style.backgroundColor&&(this._originalBackgroundColor=this.style.backgroundColor),this.style.backgroundColor=this._tapBackgroundColor,this.style.boxShadow="0px -1px 0px 0px "+this._tapBackgroundColor))}},{key:"_onRelease",value:function(){this.tapped=!1,this.style.transition="",this.style.webkitTransition="",this.style.MozTransition="",this.style.backgroundColor=this._originalBackgroundColor||"",this.style.boxShadow=""}},{key:"_shouldLockOnDrag",value:function(){return this.hasAttribute("lock-on-drag")}},{key:"_transition",get:function(){return"background-color 0.0s linear 0.02s, box-shadow 0.0s linear 0.02s"}},{key:"_tappable",get:function(){return this.hasAttribute("tappable")}},{key:"_tapBackgroundColor",get:function(){return this.getAttribute("tap-background-color")||"#d9d9d9"}}],[{key:"observedAttributes",get:function(){return["modifier","class","ripple"]}}]),ListItemElement}(_baseElement2["default"]);exports["default"]=ListItemElement,customElements.define("ons-list-item",ListItemElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_util=__webpack_require__(0),defaultClassName=(_interopRequireDefault(_util),"list-title"),scheme={"":"list-title--*"},ListTitleElement=function(_BaseElement){function ListTitleElement(){_classCallCheck(this,ListTitleElement);var _this=_possibleConstructorReturn(this,(ListTitleElement.__proto__||Object.getPrototypeOf(ListTitleElement)).call(this));return _this._compile(),_this}return _inherits(ListTitleElement,_BaseElement),_createClass(ListTitleElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),ListTitleElement}(_baseElement2["default"]);exports["default"]=ListTitleElement,customElements.define("ons-list-title",ListTitleElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="list",scheme={"":"list--*"},ListElement=function(_BaseElement){function ListElement(){_classCallCheck(this,ListElement);var _this=_possibleConstructorReturn(this,(ListElement.__proto__||Object.getPrototypeOf(ListElement)).call(this));return _this._compile(),_this}return _inherits(ListElement,_BaseElement),_createClass(ListElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),ListElement}(_baseElement2["default"]);exports["default"]=ListElement,customElements.define("ons-list",ListElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(40),_animator2=_interopRequireDefault(_animator),_fadeAnimator=__webpack_require__(130),_fadeAnimator2=_interopRequireDefault(_fadeAnimator),_liftAnimator=__webpack_require__(131),_liftAnimator2=_interopRequireDefault(_liftAnimator),_platform=__webpack_require__(6),_baseDialog=(_interopRequireDefault(_platform),__webpack_require__(19)),_baseDialog2=_interopRequireDefault(_baseDialog),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={"":"modal--*",modal__content:"modal--*__content"},defaultClassName="modal",_animatorDict={"default":_animator2["default"],fade:_fadeAnimator2["default"],lift:_liftAnimator2["default"],none:_animator2["default"]},ModalElement=function(_BaseDialogElement){function ModalElement(){_classCallCheck(this,ModalElement);var _this=_possibleConstructorReturn(this,(ModalElement.__proto__||Object.getPrototypeOf(ModalElement)).call(this));return _this._defaultDBB=function(){},(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(ModalElement,_BaseDialogElement),_createClass(ModalElement,[{key:"_updateAnimatorFactory",value:function(){return new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator2["default"],baseClassName:"ModalAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){if(this.style.display="none",this.style.zIndex=10001,this.classList.add(defaultClassName),!_util2["default"].findChild(this,".modal__content")){var content=document.createElement("div");for(content.classList.add("modal__content");this.childNodes[0];){var node=this.childNodes[0];this.removeChild(node),content.insertBefore(node,null)}this.appendChild(content)}_modifierUtil2["default"].initModifier(this,this._scheme)}},{key:"_toggleStyle",value:function(shouldShow){this.style.display=shouldShow?"table":"none"}},{key:"attributeChangedCallback",value:function(name,last,current){"class"===name?this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current):_get(ModalElement.prototype.__proto__||Object.getPrototypeOf(ModalElement.prototype),"attributeChangedCallback",this).call(this,name,last,current)}},{key:"_scheme",get:function(){return scheme}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator2["default"]))throw new Error('"Animator" param must inherit OnsModalElement.ModalAnimator');_animatorDict[name]=Animator}},{key:"observedAttributes",get:function(){return[].concat(_toConsumableArray(_get(ModalElement.__proto__||Object.getPrototypeOf(ModalElement),"observedAttributes",this)),["class"])}},{key:"animators",get:function(){return _animatorDict}},{key:"ModalAnimator",get:function(){return _animator2["default"]}}]),ModalElement}(_baseDialog2["default"]);exports["default"]=ModalElement,customElements.define("ons-modal",ModalElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_swipeReveal=__webpack_require__(152),_swipeReveal2=_interopRequireDefault(_swipeReveal),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_iosSlideAnimator=__webpack_require__(54),_iosSlideAnimator2=_interopRequireDefault(_iosSlideAnimator),_iosSwipeAnimator=__webpack_require__(134),_iosSwipeAnimator2=_interopRequireDefault(_iosSwipeAnimator),_iosLiftAnimator=__webpack_require__(133),_iosLiftAnimator2=_interopRequireDefault(_iosLiftAnimator),_iosFadeAnimator=__webpack_require__(132),_iosFadeAnimator2=_interopRequireDefault(_iosFadeAnimator),_mdSlideAnimator=__webpack_require__(137),_mdSlideAnimator2=_interopRequireDefault(_mdSlideAnimator),_mdLiftAnimator=__webpack_require__(136),_mdLiftAnimator2=_interopRequireDefault(_mdLiftAnimator),_mdFadeAnimator=__webpack_require__(135),_mdFadeAnimator2=_interopRequireDefault(_mdFadeAnimator),_noneAnimator=__webpack_require__(138),_noneAnimator2=_interopRequireDefault(_noneAnimator),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_deviceBackButtonDispatcher=__webpack_require__(26),_deviceBackButtonDispatcher2=_interopRequireDefault(_deviceBackButtonDispatcher),_pageLoader=__webpack_require__(27),_animatorDict={"default":function(){return _platform2["default"].isAndroid()?_mdFadeAnimator2["default"]:_iosSlideAnimator2["default"]},slide:function(){return _platform2["default"].isAndroid()?_mdSlideAnimator2["default"]:_iosSlideAnimator2["default"]},lift:function(){return _platform2["default"].isAndroid()?_mdLiftAnimator2["default"]:_iosLiftAnimator2["default"]},fade:function(){return _platform2["default"].isAndroid()?_mdFadeAnimator2["default"]:_iosFadeAnimator2["default"]},"slide-ios":_iosSlideAnimator2["default"],"slide-md":_mdSlideAnimator2["default"],"lift-ios":_iosLiftAnimator2["default"],"lift-md":_mdLiftAnimator2["default"],"fade-ios":_iosFadeAnimator2["default"],"fade-md":_mdFadeAnimator2["default"],none:_noneAnimator2["default"]},rewritables={ready:function(navigatorElement,callback){callback()}},NavigatorElement=function(_BaseElement){function NavigatorElement(){_classCallCheck(this,NavigatorElement);var _this=_possibleConstructorReturn(this,(NavigatorElement.__proto__||Object.getPrototypeOf(NavigatorElement)).call(this));return _this._isRunning=!1,_this._initialized=!1,_this._pageLoader=_pageLoader.defaultPageLoader,_this._pageMap=new WeakMap,_this._updateAnimatorFactory(),_this}return _inherits(NavigatorElement,_BaseElement),_createClass(NavigatorElement,[{key:"animatorFactory",get:function(){return this._animatorFactory}}]),_createClass(NavigatorElement,[{key:"_getPageTarget",value:function(){return this._page||this.getAttribute("page")}},{key:"connectedCallback",value:function(){var _this2=this;this.onDeviceBackButton=this._onDeviceBackButton.bind(this),_platform2["default"].isAndroid()&&"force"!==this.getAttribute("swipeable")||(this._swipe=new _swipeReveal2["default"]({element:this,animator:new _iosSwipeAnimator2["default"],swipeMax:function(animator){return _this2.swipeMax?_this2.swipeMax({animator:animator}):_this2.popPage({animator:animator})},getThreshold:function(){return Math.max(.2,parseFloat(_this2.getAttribute("swipe-threshold"))||0)},getAnimationElements:function(){return[_this2.topPage.previousElementSibling,_this2.topPage]},ignoreSwipe:function(event,distance){if(/ons-back-button/i.test(event.target.tagName)||_util2["default"].findParent(event.target,"ons-back-button",function(p){return/ons-page/i.test(p.tagName)}))return!0;var area=Math.max(20,parseInt(_this2.getAttribute("swipe-target-width"))||0);return"right"!==event.gesture.direction||area<=distance||_this2._isRunning||_this2.children.length<=1}}),this.attributeChangedCallback("swipeable")),this._initialized||(this._initialized=!0,rewritables.ready(this,function(){if(0===_this2.pages.length&&_this2._getPageTarget())_this2.pushPage(_this2._getPageTarget(),{animation:"none"});else if(_this2.pages.length>0){for(var i=0;i<_this2.pages.length;i++)if("ONS-PAGE"!==_this2.pages[i].nodeName)throw new Error("The children of <ons-navigator> need to be of type <ons-page>");_this2.topPage&&(0,_contentReady2["default"])(_this2.topPage,function(){return setTimeout(function(){_this2.topPage._show(),_this2._updateLastPageBackButton()},0)})}else(0,_contentReady2["default"])(_this2,function(){0===_this2.pages.length&&_this2._getPageTarget()&&_this2.pushPage(_this2._getPageTarget(),{animation:"none"})})}))}},{key:"_updateAnimatorFactory",value:function(){this._animatorFactory=new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator2["default"],baseClassName:"NavigatorTransitionAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"disconnectedCallback",value:function(){this._backButtonHandler.destroy(),this._backButtonHandler=null,this._swipe&&this._swipe.dispose(),this._swipe=null}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"animation":this._updateAnimatorFactory();break;case"swipeable":this._swipe&&this._swipe.update()}}},{key:"popPage",value:function(){var _this3=this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_preparePageAndOption=this._preparePageAndOptions(null,options);options=_preparePageAndOption.options;var popUpdate=function(){return new Promise(function(resolve){_this3._pageLoader.unload(_this3.pages[_this3.pages.length-1]),resolve()})};return this._popPage(options,popUpdate)}},{key:"_popPage",value:function(options){var _this4=this,update=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return Promise.resolve()};if(this._isRunning)return Promise.reject("popPage is already running.");if(this.pages.length<=1)return Promise.reject("ons-navigator's page stack is empty.");if(this._emitPrePopEvent())return Promise.reject("Canceled in prepop event.");var length=this.pages.length;return this._isRunning=!0,this.pages[length-2].updateBackButton(length-2>0),new Promise(function(resolve){var leavePage=_this4.pages[length-1],enterPage=_this4.pages[length-2];options.animation=options.animation||(leavePage.pushedOptions?leavePage.pushedOptions.animation:void 0),options.animationOptions=_util2["default"].extend({},leavePage.pushedOptions?leavePage.pushedOptions.animationOptions:{},options.animationOptions||{}),options.data&&(enterPage.data=_util2["default"].extend({},enterPage.data||{},options.data||{}));var callback=function(){update().then(function(){_this4._isRunning=!1,enterPage._show(),_util2["default"].triggerElementEvent(_this4,"postpop",{leavePage:leavePage,enterPage:enterPage,navigator:_this4}),"function"==typeof options.callback&&options.callback(),resolve(enterPage)})};leavePage._hide();var animator=options.animator||_this4._animatorFactory.newAnimator(options);animator.pop(_this4.pages[length-2],_this4.pages[length-1],callback)})["catch"](function(){return _this4._isRunning=!1})}},{key:"pushPage",value:function(page){var _this5=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_preparePageAndOption2=this._preparePageAndOptions(page,options);page=_preparePageAndOption2.page,options=_preparePageAndOption2.options;var prepare=function(pageElement){_this5._verifyPageElement(pageElement),_this5._pageMap.set(pageElement,page),pageElement=_util2["default"].extend(pageElement,{data:options.data}),pageElement.style.visibility="hidden"};return options.pageHTML?this._pushPage(options,function(){return new Promise(function(resolve){_pageLoader.instantPageLoader.load({page:options.pageHTML,parent:_this5,params:options.data},function(pageElement){prepare(pageElement),resolve()})})}):this._pushPage(options,function(){return new Promise(function(resolve){_this5._pageLoader.load({page:page,parent:_this5,params:options.data},function(pageElement){prepare(pageElement),resolve()})})})}},{key:"_pushPage",value:function(){var _this6=this,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},update=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return Promise.resolve()};if(this._isRunning)return Promise.reject("pushPage is already running.");if(this._emitPrePushEvent())return Promise.reject("Canceled in prepush event.");this._isRunning=!0;var animationOptions=_animatorFactory2["default"].parseAnimationOptionsString(this.getAttribute("animation-options"));options=_util2["default"].extend({},this.options||{},{animationOptions:animationOptions},options);var animator=this._animatorFactory.newAnimator(options);return update().then(function(){var pageLength=_this6.pages.length,enterPage=_this6.pages[pageLength-1],leavePage=options.leavePage||_this6.pages[pageLength-2];if("ONS-PAGE"!==enterPage.nodeName)throw new Error("Only elements of type <ons-page> can be pushed to the navigator");return enterPage.updateBackButton(pageLength-1),enterPage.pushedOptions=_util2["default"].extend({},enterPage.pushedOptions||{},options||{}),enterPage.data=_util2["default"].extend({},enterPage.data||{},options.data||{}),enterPage.unload=enterPage.unload||options.unload,new Promise(function(resolve){var done=function(){_this6._isRunning=!1,setImmediate(function(){return enterPage._show()}),_util2["default"].triggerElementEvent(_this6,"postpush",{leavePage:leavePage,enterPage:enterPage,navigator:_this6}),"function"==typeof options.callback&&options.callback(),resolve(enterPage)};enterPage.style.visibility="",leavePage?(leavePage._hide(),animator.push(enterPage,leavePage,done)):done()})})["catch"](function(error){throw _this6._isRunning=!1,error})}},{key:"replacePage",value:function(page){var _this7=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.pushPage(page,options).then(function(resolvedValue){return _this7.pages.length>1&&_this7._pageLoader.unload(_this7.pages[_this7.pages.length-2]),_this7._updateLastPageBackButton(),Promise.resolve(resolvedValue)})}},{key:"insertPage",value:function(index,page){var _this8=this,options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},_preparePageAndOption3=this._preparePageAndOptions(page,options);if(page=_preparePageAndOption3.page,options=_preparePageAndOption3.options,index=this._normalizeIndex(index),index>=this.pages.length)return this.pushPage(page,options);page="string"==typeof options.pageHTML?options.pageHTML:page;var loader="string"==typeof options.pageHTML?_pageLoader.instantPageLoader:this._pageLoader;return new Promise(function(resolve){loader.load({page:page,parent:_this8},function(pageElement){_this8._verifyPageElement(pageElement),_this8._pageMap.set(pageElement,page),pageElement=_util2["default"].extend(pageElement,{data:options.data,pushedOptions:options}),options.animationOptions=_util2["default"].extend({},_animatorFactory2["default"].parseAnimationOptionsString(_this8.getAttribute("animation-options")),options.animationOptions||{}),_this8.insertBefore(pageElement,_this8.pages[index]),_this8.topPage.updateBackButton(!0),setTimeout(function(){pageElement=null,resolve(_this8.pages[index])},1e3/60)})})}},{key:"removePage",value:function(index){var _this9=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return index=this._normalizeIndex(index),index<this.pages.length-1?new Promise(function(resolve){var leavePage=_this9.pages[index],enterPage=_this9.topPage;_this9._pageMap["delete"](leavePage),_this9._pageLoader.unload(leavePage),1===_this9.pages.length&&_this9.topPage.updateBackButton(!1),resolve(enterPage)}):this.popPage(options)}},{key:"resetToPage",value:function(page){var _this10=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_preparePageAndOption4=this._preparePageAndOptions(page,options);page=_preparePageAndOption4.page,options=_preparePageAndOption4.options,options.animator||options.animation||(options.animation="none");var callback=options.callback;return options.callback=function(){for(;_this10.pages.length>1;)_this10._pageLoader.unload(_this10.pages[0]);_this10.pages[0].updateBackButton(!1),callback&&callback()},options.page||options.pageHTML||!this._getPageTarget()||(page=options.page=this._getPageTarget()),this.pushPage(page,options)}},{key:"bringPageTop",value:function(item){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(["number","string"].indexOf("undefined"==typeof item?"undefined":_typeof(item))===-1)throw new Error("First argument must be a page name or the index of an existing page. You supplied "+item);var index="number"==typeof item?this._normalizeIndex(item):this._lastIndexOfPage(item),page=this.pages[index];if(index<0)return this.pushPage(item,options);var _preparePageAndOption5=this._preparePageAndOptions(page,options);if(options=_preparePageAndOption5.options,index===this.pages.length-1)return Promise.resolve(page);if(!page)throw new Error("Failed to find item "+item);return this._isRunning?Promise.reject("pushPage is already running."):this._emitPrePushEvent()?Promise.reject("Canceled in prepush event."):(page.style.visibility="hidden",page.parentNode.appendChild(page),this._pushPage(options))}},{key:"_preparePageAndOptions",value:function(page){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=("undefined"==typeof options?"undefined":_typeof(options)))throw new Error("options must be an object. You supplied "+options);return null!==page&&void 0!==page||!options.page||(page=options.page),options=_util2["default"].extend({},this.options||{},options,{page:page}),{page:page,options:options}}},{key:"_updateLastPageBackButton",value:function(){var index=this.pages.length-1;index>=0&&this.pages[index].updateBackButton(index>0)}},{key:"_normalizeIndex",value:function(index){return index>=0?index:Math.abs(this.pages.length+index)%this.pages.length}},{key:"_onDeviceBackButton",value:function(event){this.pages.length>1?this.popPage():event.callParentHandler()}},{key:"_lastIndexOfPage",value:function(pageName){var index=void 0;for(index=this.pages.length-1;index>=0;index--){if(!this._pageMap.has(this.pages[index]))throw Error("This is bug.");if(pageName===this._pageMap.get(this.pages[index]))break}return index}},{key:"_emitPreEvent",value:function(name){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},isCanceled=!1;return _util2["default"].triggerElementEvent(this,"pre"+name,_util2["default"].extend({navigator:this,currentPage:this.pages[this.pages.length-1],cancel:function(){return isCanceled=!0}},data)),isCanceled}},{key:"_emitPrePushEvent",value:function(){return this._emitPreEvent("push")}},{key:"_emitPrePopEvent",value:function(){var l=this.pages.length;return this._emitPreEvent("pop",{leavePage:this.pages[l-1],enterPage:this.pages[l-2]})}},{key:"_createPageElement",value:function(templateHTML){var pageElement=_util2["default"].createElement(_internal2["default"].normalizePageHTML(templateHTML));return this._verifyPageElement(pageElement),pageElement}},{key:"_verifyPageElement",value:function(element){if("ons-page"!==element.nodeName.toLowerCase())throw new Error('You must supply an "ons-page" element to "ons-navigator".')}},{key:"_show",value:function(){this.topPage&&this.topPage._show()}},{key:"_hide",value:function(){this.topPage&&this.topPage._hide()}},{key:"_destroy",value:function(){for(var i=this.pages.length-1;i>=0;i--)this._pageLoader.unload(this.pages[i]);this.remove()}},{key:"pageLoader",get:function(){return this._pageLoader},set:function(pageLoader){if(!(pageLoader instanceof _pageLoader.PageLoader))throw Error("First parameter must be an instance of PageLoader.");this._pageLoader=pageLoader}},{key:"page",get:function(){return this._page},set:function(page){this._page=page}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(callback){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=_deviceBackButtonDispatcher2["default"].createHandler(this,callback)}},{key:"topPage",get:function(){for(var last=this.lastElementChild;last&&"ONS-PAGE"!==last.tagName;)last=last.previousElementSibling;return last}},{key:"pages",get:function(){return _util2["default"].arrayFrom(this.children).filter(function(element){return"ONS-PAGE"===element.tagName})}},{key:"options",get:function(){return this._options},set:function(object){this._options=object}},{key:"_isRunning",set:function(value){this.setAttribute("_is-running",value?"true":"false");
},get:function(){return JSON.parse(this.getAttribute("_is-running"))}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator2["default"]))throw new Error('"Animator" param must inherit NavigatorElement.NavigatorTransitionAnimator');_animatorDict[name]=Animator}},{key:"observedAttributes",get:function(){return["animation","swipeable"]}},{key:"animators",get:function(){return _animatorDict}},{key:"NavigatorTransitionAnimator",get:function(){return _animator2["default"]}},{key:"events",get:function(){return["prepush","postpush","prepop","postpop"]}},{key:"rewritables",get:function(){return rewritables}}]),NavigatorElement}(_baseElement2["default"]);exports["default"]=NavigatorElement,customElements.define("ons-navigator",NavigatorElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_deviceBackButtonDispatcher=__webpack_require__(26),_deviceBackButtonDispatcher2=_interopRequireDefault(_deviceBackButtonDispatcher),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady);__webpack_require__(53);var defaultClassName="page",scheme={"":"page--*",".page__content":"page--*__content",".page__background":"page--*__background"},nullToolbarElement=document.createElement("ons-toolbar"),PageElement=function(_BaseElement){function PageElement(){_classCallCheck(this,PageElement);var _this=_possibleConstructorReturn(this,(PageElement.__proto__||Object.getPrototypeOf(PageElement)).call(this));return _this._deriveHooks(),_this.classList.add(defaultClassName),_this._initialized=!1,(0,_contentReady2["default"])(_this,function(){_this._compile(),_this._isShown=!1,_this._contentElement=_this._getContentElement(),_this._backgroundElement=_this._getBackgroundElement()}),_this}return _inherits(PageElement,_BaseElement),_createClass(PageElement,[{key:"connectedCallback",value:function(){var _this2=this;this._initialized||(this._initialized=!0,(0,_contentReady2["default"])(this,function(){setImmediate(function(){_this2.onInit&&_this2.onInit(),_util2["default"].triggerElementEvent(_this2,"init")}),_util2["default"].hasAnyComponentAsParent(_this2)||setImmediate(function(){return _this2._show()}),_this2._tryToFillStatusBar(),_this2.hasAttribute("on-infinite-scroll")&&_this2.attributeChangedCallback("on-infinite-scroll",null,_this2.getAttribute("on-infinite-scroll"))}))}},{key:"updateBackButton",value:function(show){this.backButton&&(show?this.backButton.show():this.backButton.hide())}},{key:"_tryToFillStatusBar",value:function(){var _this3=this;_internal2["default"].autoStatusBarFill(function(){var filled=_util2["default"].findParent(_this3,function(e){return e.hasAttribute("status-bar-fill")},function(e){return!e.nodeName.match(/ons-modal/i)});_util2["default"].toggleAttribute(_this3,"status-bar-fill",!filled&&(_this3._canAnimateToolbar()||!_this3._hasAPageControlChild()))})}},{key:"_hasAPageControlChild",value:function(){return _util2["default"].findChild(this._contentElement,_util2["default"].isPageControl)}},{key:"_onScroll",value:function(){var _this4=this,c=this._contentElement,overLimit=(c.scrollTop+c.clientHeight)/c.scrollHeight>=this._infiniteScrollLimit;this._onInfiniteScroll&&!this._loadingContent&&overLimit&&(this._loadingContent=!0,this._onInfiniteScroll(function(){return _this4._loadingContent=!1}))}},{key:"_getContentElement",value:function(){var result=_util2["default"].findChild(this,".page__content");if(result)return result;throw Error('fail to get ".page__content" element.')}},{key:"_canAnimateToolbar",value:function(){return!!_util2["default"].findChild(this,"ons-toolbar")||!!_util2["default"].findChild(this._contentElement,function(el){return _util2["default"].match(el,"ons-toolbar")&&!el.hasAttribute("inline")})}},{key:"_getBackgroundElement",value:function(){var result=_util2["default"].findChild(this,".page__background");if(result)return result;throw Error('fail to get ".page__background" element.')}},{key:"_getBottomToolbarElement",value:function(){return _util2["default"].findChild(this,"ons-bottom-toolbar")||_internal2["default"].nullElement}},{key:"_getToolbarElement",value:function(){return _util2["default"].findChild(this,"ons-toolbar")||nullToolbarElement}},{key:"attributeChangedCallback",value:function(name,last,current){var _this5=this;switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"on-infinite-scroll":null===current?this.onInfiniteScroll=null:this.onInfiniteScroll=function(done){var f=_util2["default"].findFromPath(current);_this5.onInfiniteScroll=f,f(done)}}}},{key:"_compile",value:function(){var _this6=this;_autostyle2["default"].prepare(this);var toolbar=_util2["default"].findChild(this,"ons-toolbar"),background=_util2["default"].findChild(this,".page__background")||_util2["default"].findChild(this,".background")||document.createElement("div");background.classList.add("page__background"),this.insertBefore(background,!toolbar&&this.firstChild||toolbar&&toolbar.nextSibling);var content=_util2["default"].findChild(this,".page__content")||_util2["default"].findChild(this,".content")||document.createElement("div");content.classList.add("page__content"),content.parentElement||_util2["default"].arrayFrom(this.childNodes).forEach(function(node){(1!==node.nodeType||_this6._elementShouldBeMoved(node))&&content.appendChild(node)}),this.insertBefore(content,background.nextSibling),!background.style.backgroundColor&&1===content.children.length&&_util2["default"].isPageControl(content.children[0])&&(background.style.backgroundColor="transparent"),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_elementShouldBeMoved",value:function(el){if(el.classList.contains("page__background"))return!1;var tagName=el.tagName.toLowerCase();if("ons-fab"===tagName)return!el.hasAttribute("position");var fixedElements=["script","ons-toolbar","ons-bottom-toolbar","ons-modal","ons-speed-dial","ons-dialog","ons-alert-dialog","ons-popover","ons-action-sheet"];return el.hasAttribute("inline")||fixedElements.indexOf(tagName)===-1}},{key:"_show",value:function(){!this._isShown&&_util2["default"].isAttached(this)&&(this._isShown=!0,this.onShow&&this.onShow(),_util2["default"].triggerElementEvent(this,"show"),_util2["default"].propagateAction(this,"_show"))}},{key:"_hide",value:function(){this._isShown&&(this._isShown=!1,this.onHide&&this.onHide(),_util2["default"].triggerElementEvent(this,"hide"),_util2["default"].propagateAction(this,"_hide"))}},{key:"_destroy",value:function(){this._hide(),this.onDestroy&&this.onDestroy(),_util2["default"].triggerElementEvent(this,"destroy"),this.onDeviceBackButton&&this.onDeviceBackButton.destroy(),_util2["default"].propagateAction(this,"_destroy"),this.remove()}},{key:"_deriveHooks",value:function(){var _this7=this;this.constructor.events.forEach(function(event){var key="on"+event.charAt(0).toUpperCase()+event.slice(1);Object.defineProperty(_this7,key,{enumerable:!0,get:function(){return _this7["_"+key]},set:function(value){if(!(value instanceof Function))throw new Error(key+" hook must be a function");_this7["_"+key]=value.bind(_this7)}})})}},{key:"name",set:function(str){this.setAttribute("name",str)},get:function(){return this.getAttribute("name")}},{key:"backButton",get:function(){return this.querySelector("ons-back-button")}},{key:"onInfiniteScroll",set:function(value){var _this8=this;if(value&&!(value instanceof Function))throw new Error("onInfiniteScroll must be a function or null");(0,_contentReady2["default"])(this,function(){value?_this8._onInfiniteScroll||(_this8._infiniteScrollLimit=.9,_this8._boundOnScroll=_this8._onScroll.bind(_this8),setImmediate(function(){return _this8._contentElement.addEventListener("scroll",_this8._boundOnScroll)})):_this8._contentElement.removeEventListener("scroll",_this8._boundOnScroll),_this8._onInfiniteScroll=value})},get:function(){return this._onInfiniteScroll}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(callback){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=_deviceBackButtonDispatcher2["default"].createHandler(this,callback)}},{key:"scrollTop",get:function(){return this._contentElement.scrollTop},set:function(newValue){this._contentElement.scrollTop=newValue}}],[{key:"observedAttributes",get:function(){return["modifier","on-infinite-scroll","class"]}},{key:"events",get:function(){return["init","show","hide","destroy"]}}]),PageElement}(_baseElement2["default"]);exports["default"]=PageElement,customElements.define("ons-page",PageElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(139),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseDialog=__webpack_require__(19),_baseDialog2=_interopRequireDefault(_baseDialog),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".popover":"popover--*",".popover-mask":"popover-mask--*",".popover__content":"popover--*__content",".popover__arrow":"popover--*__arrow"},_animatorDict={"default":function(){return _platform2["default"].isAndroid()?_animator.MDFadePopoverAnimator:_animator.IOSFadePopoverAnimator},none:_animator.PopoverAnimator,"fade-ios":_animator.IOSFadePopoverAnimator,"fade-md":_animator.MDFadePopoverAnimator},templateSource=_util2["default"].createFragment('\n  <div class="popover-mask"></div>\n  <div class="popover">\n    <div class="popover__content"></div>\n    <div class="popover__arrow"></div>\n  </div>\n'),positions={up:"bottom",left:"right",down:"top",right:"left"},PopoverElement=(Object.keys(positions),function(_BaseDialogElement){function PopoverElement(){_classCallCheck(this,PopoverElement);var _this=_possibleConstructorReturn(this,(PopoverElement.__proto__||Object.getPrototypeOf(PopoverElement)).call(this));return _this._boundOnChange=_this._onChange.bind(_this),(0,_contentReady2["default"])(_this,function(){_this._compile(),_this.style.display="none"}),_this}return _inherits(PopoverElement,_BaseDialogElement),_createClass(PopoverElement,[{key:"_updateAnimatorFactory",value:function(){return new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator.PopoverAnimator,baseClassName:"PopoverAnimator",defaultAnimation:this.getAttribute("animation")||"default"})}},{key:"_toggleStyle",value:function(shouldShow){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};shouldShow?(this.style.display="block",this._currentTarget=options.target,this._positionPopover(options.target)):(this.style.display="none",this._clearStyles())}},{key:"_positionPopover",value:function(target){var radius=this._radius,contentElement=this._content,margin=this._margin,targetRect=target.getBoundingClientRect(),isMD=_util2["default"].hasModifier(this,"material"),cover=isMD&&this.hasAttribute("cover-target"),targetDistance={top:targetRect.top-margin,left:targetRect.left-margin,right:window.innerWidth-targetRect.right-margin,bottom:window.innerHeight-targetRect.bottom-margin},targetCenterDistanceFrom={top:targetRect.top+Math.round(targetRect.height/2),bottom:window.innerHeight-targetRect.bottom+Math.round(targetRect.height/2),left:targetRect.left+Math.round(targetRect.width/2),right:window.innerWidth-targetRect.right+Math.round(targetRect.width/2)},_calculateDirections2=this._calculateDirections(targetDistance),vertical=_calculateDirections2.vertical,primaryDirection=_calculateDirections2.primary,secondary=_calculateDirections2.secondary;this._currentDirection=primaryDirection,_util2["default"].addModifier(this,primaryDirection);var sizeName=vertical?"width":"height",contentSize=function(style){return{width:parseInt(style.getPropertyValue("width"),10),height:parseInt(style.getPropertyValue("height"),10)}}(window.getComputedStyle(contentElement)),offset=cover?0:(vertical?targetRect.height:targetRect.width)+(isMD?0:14);this._popover.style[primaryDirection]=Math.max(margin,targetDistance[primaryDirection]+offset+margin)+"px";var secondaryOffset=Math.max(margin,margin+targetDistance[secondary]-(contentSize[sizeName]-targetRect[sizeName])/2);this._popover.style[secondary]=secondaryOffset+"px",this._arrow.style[secondary]=Math.max(radius,targetCenterDistanceFrom[secondary]-secondaryOffset)+"px"}},{key:"_calculateDirections",value:function(distance){var options=(this.getAttribute("direction")||"up down left right").split(/\s+/).map(function(e){return positions[e]}),primary=options.sort(function(a,b){return distance[a]-distance[b]})[0],vertical="top"==primary||"bottom"==primary,secondary=void 0;return secondary=vertical?distance.left<distance.right?"left":"right":distance.top<distance.bottom?"top":"bottom",{vertical:vertical,primary:primary,secondary:secondary}}},{key:"_clearStyles",value:function(){var _this2=this;this._currentDirection=null,["top","bottom","left","right"].forEach(function(e){_this2._arrow.style[e]=_this2._content.style[e]=_this2._popover.style[e]="",_util2["default"].removeModifier(_this2,e)})}},{key:"_onChange",value:function(){var _this3=this;setImmediate(function(){_this3._currentTarget&&_this3._positionPopover(_this3._currentTarget)})}},{key:"_compile",value:function(){if(_autostyle2["default"].prepare(this),!this._popover||!this._mask){var hasDefaultContainer=this._popover&&this._content;if(hasDefaultContainer){if(!this._mask){var mask=document.createElement("div");mask.classList.add("popover-mask"),this.insertBefore(mask,this.firstChild)}if(!this._arrow){var arrow=document.createElement("div");arrow.classList.add("popover__arrow"),this._popover.appendChild(arrow)}}else{for(var template=templateSource.cloneNode(!0),content=template.querySelector(".popover__content");this.childNodes[0];)content.appendChild(this.childNodes[0]);this.appendChild(template)}this.hasAttribute("style")&&(this._popover.setAttribute("style",this.getAttribute("style")),this.removeAttribute("style")),_modifierUtil2["default"].initModifier(this,this._scheme)}}},{key:"show",value:function(target){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(options=!target||"object"!==("undefined"==typeof target?"undefined":_typeof(target))||target instanceof Event||target instanceof HTMLElement?_extends({},options,{target:target}):_extends({},target),"string"==typeof options.target?options.target=document.querySelector(options.target):options.target instanceof Event&&(options.target=options.target.target),"undefined"==typeof options.target)throw new Error("A target or options.target argument must be defined for the popover.");if(!(options.target instanceof HTMLElement))throw new Error("Invalid target for popover.");return _get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),"show",this).call(this,options)}},{key:"connectedCallback",value:function(){var _this4=this;_get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),"connectedCallback",this).call(this),window.addEventListener("resize",this._boundOnChange,!1),this._margin=this._margin||parseInt(window.getComputedStyle(this).getPropertyValue("top")),this._margin=this._margin||6,(0,_contentReady2["default"])(this,function(){_this4._radius=parseInt(window.getComputedStyle(_this4._content).getPropertyValue("border-top-left-radius"))})}},{key:"disconnectedCallback",value:function(){_get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("resize",this._boundOnChange,!1)}},{key:"attributeChangedCallback",value:function(name,last,current){return"direction"===name?this._boundOnChange():("modifier"===name&&this._currentDirection&&_util2["default"].addModifier(this,this._currentDirection),void _get(PopoverElement.prototype.__proto__||Object.getPrototypeOf(PopoverElement.prototype),"attributeChangedCallback",this).call(this,name,last,current))}},{key:"_scheme",get:function(){return scheme}},{key:"_mask",get:function(){return _util2["default"].findChild(this,".popover-mask")}},{key:"_popover",get:function(){return _util2["default"].findChild(this,".popover")}},{key:"_content",get:function(){return _util2["default"].findChild(this._popover,".popover__content")}},{key:"_arrow",get:function(){return _util2["default"].findChild(this._popover,".popover__arrow")}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator.PopoverAnimator))throw new Error('"Animator" param must inherit PopoverAnimator');_animatorDict[name]=Animator}},{key:"observedAttributes",get:function(){return[].concat(_toConsumableArray(_get(PopoverElement.__proto__||Object.getPrototypeOf(PopoverElement),"observedAttributes",this)),["direction"])}},{key:"animators",get:function(){return _animatorDict}},{key:"PopoverAnimator",get:function(){return _animator.PopoverAnimator}}]),PopoverElement}(_baseDialog2["default"]));exports["default"]=PopoverElement,customElements.define("ons-popover",PopoverElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".progress-bar":"progress-bar--*",".progress-bar__primary":"progress-bar--*__primary",".progress-bar__secondary":"progress-bar--*__secondary"},template=_util2["default"].createElement('\n  <div class="progress-bar">\n    <div class="progress-bar__secondary"></div>\n    <div class="progress-bar__primary"></div>\n  </div>\n'),INDET="indeterminate",ProgressBarElement=function(_BaseElement){function ProgressBarElement(){_classCallCheck(this,ProgressBarElement);var _this=_possibleConstructorReturn(this,(ProgressBarElement.__proto__||Object.getPrototypeOf(ProgressBarElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(ProgressBarElement,_BaseElement),_createClass(ProgressBarElement,[{key:"_compile",value:function(){this._isCompiled()?this._template=_util2["default"].findChild(this,".progress-bar"):this._template=template.cloneNode(!0),this._primary=_util2["default"].findChild(this._template,".progress-bar__primary"),this._secondary=_util2["default"].findChild(this._template,".progress-bar__secondary"),this._updateDeterminate(),this._updateValue(),this.appendChild(this._template),_autostyle2["default"].prepare(this),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_isCompiled",value:function(){if(!_util2["default"].findChild(this,".progress-bar"))return!1;var barElement=_util2["default"].findChild(this,".progress-bar");return!!_util2["default"].findChild(barElement,".progress-bar__secondary")&&!!_util2["default"].findChild(barElement,".progress-bar__primary")}},{key:"attributeChangedCallback",value:function(name,last,current){"modifier"===name?(_modifierUtil2["default"].onModifierChanged(last,current,this,scheme),this.hasAttribute(INDET)&&this._updateDeterminate()):"value"===name||"secondary-value"===name?this._updateValue():name===INDET&&this._updateDeterminate()}},{key:"_updateDeterminate",value:function(){var _this2=this;(0,_contentReady2["default"])(this,function(){return _util2["default"].toggleModifier(_this2,INDET,{force:_this2.hasAttribute(INDET)})})}},{key:"_updateValue",value:function(){var _this3=this;(0,_contentReady2["default"])(this,function(){_this3._primary.style.width=_this3.hasAttribute("value")?_this3.getAttribute("value")+"%":"0%",_this3._secondary.style.width=_this3.hasAttribute("secondary-value")?_this3.getAttribute("secondary-value")+"%":"0%"})}},{key:"value",set:function(value){if("number"!=typeof value||value<0||value>100)throw new Error("Invalid value");this.setAttribute("value",Math.floor(value))},get:function(){return parseInt(this.getAttribute("value")||"0")}},{key:"secondaryValue",set:function(value){if("number"!=typeof value||value<0||value>100)throw new Error("Invalid value");this.setAttribute("secondary-value",Math.floor(value))},get:function(){return parseInt(this.getAttribute("secondary-value")||"0")}},{key:"indeterminate",set:function(value){value?this.setAttribute(INDET,""):this.removeAttribute(INDET)},get:function(){return this.hasAttribute(INDET)}}],[{key:"observedAttributes",get:function(){return["modifier","value","secondary-value",INDET]}}]),ProgressBarElement}(_baseElement2["default"]);exports["default"]=ProgressBarElement,customElements.define("ons-progress-bar",ProgressBarElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".progress-circular":"progress-circular--*",".progress-circular__background":"progress-circular--*__background",".progress-circular__primary":"progress-circular--*__primary",".progress-circular__secondary":"progress-circular--*__secondary"},template=_util2["default"].createElement('\n  <svg class="progress-circular">\n    <circle class="progress-circular__background" />\n    <circle class="progress-circular__secondary" />\n    <circle class="progress-circular__primary" />\n  </svg>\n'),INDET="indeterminate",ProgressCircularElement=function(_BaseElement){function ProgressCircularElement(){_classCallCheck(this,ProgressCircularElement);var _this=_possibleConstructorReturn(this,(ProgressCircularElement.__proto__||Object.getPrototypeOf(ProgressCircularElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(ProgressCircularElement,_BaseElement),_createClass(ProgressCircularElement,[{key:"attributeChangedCallback",value:function(name,last,current){"modifier"===name?(_modifierUtil2["default"].onModifierChanged(last,current,this,scheme),this.hasAttribute(INDET)&&this._updateDeterminate()):"value"===name||"secondary-value"===name?this._updateValue():name===INDET&&this._updateDeterminate()}},{key:"_updateDeterminate",value:function(){var _this2=this;(0,_contentReady2["default"])(this,function(){return _util2["default"].toggleModifier(_this2,INDET,{force:_this2.hasAttribute(INDET)})})}},{key:"_updateValue",value:function(){var _this3=this;this.hasAttribute("value")&&(0,_contentReady2["default"])(this,function(){var per=Math.ceil(251.32*_this3.getAttribute("value")*.01);_this3._primary.style["stroke-dasharray"]=per+"%, 251.32%"}),this.hasAttribute("secondary-value")?(0,_contentReady2["default"])(this,function(){var per=Math.ceil(251.32*_this3.getAttribute("secondary-value")*.01);_this3._secondary.style.display=null,_this3._secondary.style["stroke-dasharray"]=per+"%, 251.32%"}):(0,_contentReady2["default"])(this,function(){_this3._secondary.style.display="none"})}},{key:"_compile",value:function(){this._isCompiled()?this._template=_util2["default"].findChild(this,".progress-circular"):this._template=template.cloneNode(!0),this._primary=_util2["default"].findChild(this._template,".progress-circular__primary"),this._secondary=_util2["default"].findChild(this._template,".progress-circular__secondary"),this._updateDeterminate(),this._updateValue(),this.appendChild(this._template),_autostyle2["default"].prepare(this),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_isCompiled",value:function(){if(!_util2["default"].findChild(this,".progress-circular"))return!1;var svg=_util2["default"].findChild(this,".progress-circular");return!!_util2["default"].findChild(svg,".progress-circular__secondary")&&!!_util2["default"].findChild(svg,".progress-circular__primary")}},{key:"value",set:function(value){if("number"!=typeof value||value<0||value>100)throw new Error("Invalid value");this.setAttribute("value",Math.floor(value))},get:function(){return parseInt(this.getAttribute("value")||"0")}},{key:"secondaryValue",set:function(value){
if("number"!=typeof value||value<0||value>100)throw new Error("Invalid value");this.setAttribute("secondary-value",Math.floor(value))},get:function(){return parseInt(this.getAttribute("secondary-value")||"0")}},{key:"indeterminate",set:function(value){value?this.setAttribute(INDET,""):this.removeAttribute(INDET)},get:function(){return this.hasAttribute(INDET)}}],[{key:"observedAttributes",get:function(){return["modifier","value","secondary-value",INDET]}}]),ProgressCircularElement}(_baseElement2["default"]);exports["default"]=ProgressCircularElement,customElements.define("ons-progress-circular",ProgressCircularElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),STATE_INITIAL="initial",STATE_PREACTION="preaction",STATE_ACTION="action",removeTransform=function(el){el.style.transform="",el.style.WebkitTransform="",el.style.transition="",el.style.WebkitTransition=""},PullHookElement=function(_BaseElement){function PullHookElement(){_classCallCheck(this,PullHookElement);var _this=_possibleConstructorReturn(this,(PullHookElement.__proto__||Object.getPrototypeOf(PullHookElement)).call(this));return _this._boundOnDrag=_this._onDrag.bind(_this),_this._boundOnDragStart=_this._onDragStart.bind(_this),_this._boundOnDragEnd=_this._onDragEnd.bind(_this),_this._boundOnScroll=_this._onScroll.bind(_this),_this._setState(STATE_INITIAL,!0),_this._hide(),_this}return _inherits(PullHookElement,_BaseElement),_createClass(PullHookElement,[{key:"_setStyle",value:function(){var height=this.height;this.style.height=height+"px",this.style.lineHeight=height+"px"}},{key:"_onScroll",value:function(event){var element=this._pageElement;element.scrollTop<0&&(element.scrollTop=0)}},{key:"_generateTranslationTransform",value:function(scroll){return"translate3d(0px, "+scroll+"px, 0px)"}},{key:"_canConsumeGesture",value:function(gesture){return"up"===gesture.direction||"down"===gesture.direction}},{key:"_onDragStart",value:function(event){var _this2=this;if(event.gesture&&!this.disabled){if(this._ignoreDrag=event.consumed,!this._ignoreDrag){var consume=event.consume;event.consume=function(){consume&&consume(),_this2._ignoreDrag=!0,_this2._hide()},this._canConsumeGesture(event.gesture)&&(consume&&consume(),event.consumed=!0,this._show())}this._startScroll=this._getCurrentScroll()}}},{key:"_onDrag",value:function(event){var _this3=this;if(event.gesture&&!this.disabled&&!this._ignoreDrag&&this._canConsumeGesture(event.gesture)){if("none"===this.style.display&&this._show(),event.stopPropagation(),_platform2["default"].isAndroid()){var element=this._pageElement;element.scrollTop=this._startScroll-event.gesture.deltaY,element.scrollTop<window.innerHeight&&"up"!==event.gesture.direction&&event.gesture.preventDefault()}if(0===this._currentTranslation&&0===this._getCurrentScroll()){this._transitionDragLength=event.gesture.deltaY;var direction=event.gesture.interimDirection;"down"===direction?this._transitionDragLength-=1:this._transitionDragLength+=1}var scroll=Math.max(event.gesture.deltaY-this._startScroll,0);this._thresholdHeightEnabled()&&scroll>=this.thresholdHeight?(event.gesture.stopDetect(),setImmediate(function(){return _this3._finish()})):scroll>=this.height?this._setState(STATE_PREACTION):this._setState(STATE_INITIAL),this._translateTo(scroll)}}},{key:"_onDragEnd",value:function(event){if(event.gesture&&!this.disabled&&!this._ignoreDrag&&(event.stopPropagation(),this._currentTranslation>0)){var scroll=this._currentTranslation;scroll>this.height?this._finish():this._translateTo(0,{animate:!0})}}},{key:"_finish",value:function(){var _this4=this;this._setState(STATE_ACTION),this._translateTo(this.height,{animate:!0});var action=this.onAction||function(done){return done()};action(function(){_this4._translateTo(0,{animate:!0}),_this4._setState(STATE_INITIAL)})}},{key:"_thresholdHeightEnabled",value:function(){var th=this.thresholdHeight;return th>0&&th>=this.height}},{key:"_setState",value:function(state,noEvent){var lastState=this._getState();this.setAttribute("state",state),noEvent||lastState===this._getState()||_util2["default"].triggerElementEvent(this,"changestate",{pullHook:this,state:state,lastState:lastState})}},{key:"_getState",value:function(){return this.getAttribute("state")}},{key:"_getCurrentScroll",value:function(){return this._pageElement.scrollTop}},{key:"_isContentFixed",value:function(){return this.hasAttribute("fixed-content")}},{key:"_getScrollableElement",value:function(){return this._isContentFixed()?this:this._pageElement}},{key:"_show",value:function(){var _this5=this;setImmediate(function(){_this5.style.display="",_this5._pageElement&&(_this5._pageElement.style.marginTop="-"+_this5.height+"px")})}},{key:"_hide",value:function(){this.style.display="none",this._pageElement&&(this._pageElement.style.marginTop="")}},{key:"_translateTo",value:function(scroll){var _this6=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0!=this._currentTranslation||0!=scroll){var done=function(){if(0===scroll){var el=_this6._getScrollableElement();removeTransform(el)}options.callback&&options.callback()};this._currentTranslation=scroll,options.animate?(0,_animit2["default"])(this._getScrollableElement()).queue({transform:this._generateTranslationTransform(scroll)},{duration:.3,timing:"cubic-bezier(.1, .7, .1, 1)"}).play(done):(0,_animit2["default"])(this._getScrollableElement()).queue({transform:this._generateTranslationTransform(scroll)}).play(done)}}},{key:"_disableDragLock",value:function(){this._dragLockDisabled=!0,this._destroyEventListeners(),this._createEventListeners()}},{key:"_createEventListeners",value:function(){this._gestureDetector=new _gestureDetector2["default"](this._pageElement,{dragMinDistance:1,dragDistanceCorrection:!1,dragLockToAxis:!this._dragLockDisabled}),this._gestureDetector.on("drag",this._boundOnDrag),this._gestureDetector.on("dragstart",this._boundOnDragStart),this._gestureDetector.on("dragend",this._boundOnDragEnd),this._pageElement.addEventListener("scroll",this._boundOnScroll,!1)}},{key:"_destroyEventListeners",value:function(){this._gestureDetector&&(this._gestureDetector.off("drag",this._boundOnDrag),this._gestureDetector.off("dragstart",this._boundOnDragStart),this._gestureDetector.off("dragend",this._boundOnDragEnd),this._gestureDetector.dispose(),this._gestureDetector=null),this._pageElement.removeEventListener("scroll",this._boundOnScroll,!1)}},{key:"connectedCallback",value:function(){this._currentTranslation=0,this._pageElement=this.parentNode,this._createEventListeners(),this._setStyle()}},{key:"disconnectedCallback",value:function(){this._hide(),this._destroyEventListeners()}},{key:"attributeChangedCallback",value:function(name,last,current){"height"===name&&this._pageElement&&this._setStyle()}},{key:"onAction",get:function(){return this._onAction},set:function(value){if(!(value instanceof Function)&&null!==value)throw new Error("onAction must be a function or null");this._onAction=value}},{key:"height",set:function(value){if(!_util2["default"].isInteger(value))throw new Error("The height must be an integer");this.setAttribute("height",value+"px")},get:function(){return parseInt(this.getAttribute("height")||"64",10)}},{key:"thresholdHeight",set:function(value){if(!_util2["default"].isInteger(value))throw new Error("The threshold height must be an integer");this.setAttribute("threshold-height",value+"px")},get:function(){return parseInt(this.getAttribute("threshold-height")||"96",10)}},{key:"state",get:function(){return this._getState()}},{key:"pullDistance",get:function(){return this._currentTranslation}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["height"]}},{key:"STATE_INITIAL",get:function(){return STATE_INITIAL}},{key:"STATE_PREACTION",get:function(){return STATE_PREACTION}},{key:"STATE_ACTION",get:function(){return STATE_ACTION}},{key:"events",get:function(){return["changestate"]}}]),PullHookElement}(_baseElement2["default"]);exports["default"]=PullHookElement,customElements.define("ons-pull-hook",PullHookElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseCheckbox=__webpack_require__(39),_baseCheckbox2=_interopRequireDefault(_baseCheckbox),scheme={".radio-button":"radio-button--*",".radio-button__input":"radio-button--*__input",".radio-button__checkmark":"radio-button--*__checkmark"},RadioElement=function(_BaseCheckboxElement){function RadioElement(){return _classCallCheck(this,RadioElement),_possibleConstructorReturn(this,(RadioElement.__proto__||Object.getPrototypeOf(RadioElement)).apply(this,arguments))}return _inherits(RadioElement,_BaseCheckboxElement),_createClass(RadioElement,[{key:"_scheme",get:function(){return scheme}},{key:"_defaultElementClass",get:function(){return"radio-button"}},{key:"type",get:function(){return"radio"}}]),RadioElement}(_baseCheckbox2["default"]);exports["default"]=RadioElement,customElements.define("ons-radio",RadioElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_baseInput=__webpack_require__(30),_baseInput2=_interopRequireDefault(_baseInput),scheme={"":"range--*",".range__input":"range--*__input",".range__focus-ring":"range--*__focus-ring"},activeClassToken="range__input--active",RangeElement=function(_BaseInputElement){function RangeElement(){_classCallCheck(this,RangeElement);var _this=_possibleConstructorReturn(this,(RangeElement.__proto__||Object.getPrototypeOf(RangeElement)).call(this));return _this._boundOnMouseDown=_this._onMouseDown.bind(_this),_this._boundOnMouseUp=_this._onMouseUp.bind(_this),_this._boundOnTouchStart=_this._onTouchStart.bind(_this),_this._boundOnTouchEnd=_this._onTouchEnd.bind(_this),_this._boundOnInput=_this._update.bind(_this),_this._boundOnDragstart=_this._onDragstart.bind(_this),_this._boundOnDragend=_this._onDragend.bind(_this),_this}return _inherits(RangeElement,_BaseInputElement),_createClass(RangeElement,[{key:"_compile",value:function(){_get(RangeElement.prototype.__proto__||Object.getPrototypeOf(RangeElement.prototype),"_compile",this).call(this),this._updateDisabled(this.hasAttribute("disabled"))}},{key:"_update",value:function(){var input=this._input,focusRing=this._focusRing;input.style.backgroundSize=100*this._ratio+"% 2px",focusRing.value=this.value,""===input.min&&"0"===input.value||input.min===input.value?input.setAttribute("_zero",""):input.removeAttribute("_zero"),["min","max"].forEach(function(attr){return focusRing[attr]=input[attr]})}},{key:"_onMouseDown",value:function(e){var _this2=this;this._input.classList.add(activeClassToken),setImmediate(function(){return _this2._input.focus()})}},{key:"_onTouchStart",value:function(e){this._onMouseDown()}},{key:"_onMouseUp",value:function(e){this._input.classList.remove(activeClassToken)}},{key:"_onTouchEnd",value:function(e){this._onMouseUp(e)}},{key:"_onDragstart",value:function(e){e.consumed=!0,e.gesture.stopPropagation(),this._input.classList.add(activeClassToken),this.addEventListener("drag",this._onDrag)}},{key:"_onDrag",value:function(e){e.stopPropagation()}},{key:"_onDragend",value:function(e){this._input.classList.remove(activeClassToken),this.removeEventListener("drag",this._onDrag)}},{key:"attributeChangedCallback",value:function(name,last,current){"disabled"===name&&this._updateDisabled(current),_get(RangeElement.prototype.__proto__||Object.getPrototypeOf(RangeElement.prototype),"attributeChangedCallback",this).call(this,name,last,current)}},{key:"_updateDisabled",value:function(disabled){disabled?this.classList.add("range--disabled"):this.classList.remove("range--disabled")}},{key:"connectedCallback",value:function(){this.addEventListener("mousedown",this._boundOnMouseDown),this.addEventListener("mouseup",this._boundOnMouseUp),this.addEventListener("touchstart",this._boundOnTouchStart),this.addEventListener("touchend",this._boundOnTouchEnd),this.addEventListener("dragstart",this._boundOnDragstart),this.addEventListener("dragend",this._boundOnDragend),this.addEventListener("input",this._boundOnInput)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("mousedown",this._boundOnMouseDown),this.removeEventListener("mouseup",this._boundOnMouseUp),this.removeEventListener("touchstart",this._boundOnTouchStart),this.removeEventListener("touchend",this._boundOnTouchEnd),this.removeEventListener("dragstart",this._boundOnDragstart),this.removeEventListener("dragend",this._boundOnDragend),this.removeEventListener("input",this._boundOnInput)}},{key:"_scheme",get:function(){return scheme}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="'+this._defaultElementClass+'__input">\n      <input type="range" class="range__focus-ring" tabIndex="-1">\n    '}},{key:"_defaultElementClass",get:function(){return"range"}},{key:"type",get:function(){return"range"}},{key:"_focusRing",get:function(){return this.children[1]}},{key:"_ratio",get:function(){var min=""===this._input.min?0:parseInt(this._input.min),max=""===this._input.max?100:parseInt(this._input.max);return(this.value-min)/(max-min)}}],[{key:"observedAttributes",get:function(){return["disabled"].concat(_toConsumableArray(_baseInput2["default"].observedAttributes))}}]),RangeElement}(_baseInput2["default"]);exports["default"]=RangeElement,customElements.define("ons-range",RangeElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_animatorCss=__webpack_require__(140),_animatorCss2=_interopRequireDefault(_animatorCss),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),defaultClassName="ripple",scheme={"":"ripple--*",".ripple__wave":"ripple--*__wave",".ripple__background":"ripple--*__background"},RippleElement=function(_BaseElement){function RippleElement(){_classCallCheck(this,RippleElement);var _this=_possibleConstructorReturn(this,(RippleElement.__proto__||Object.getPrototypeOf(RippleElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this._animator=new _animatorCss2["default"],["color","center","start-radius","background","modifier"].forEach(function(e){_this.attributeChangedCallback(e,null,_this.getAttribute(e))}),_this}return _inherits(RippleElement,_BaseElement),_createClass(RippleElement,[{key:"_compile",value:function(){this.classList.add(defaultClassName),this._wave=this.getElementsByClassName("ripple__wave")[0],this._background=this.getElementsByClassName("ripple__background")[0],this._background&&this._wave||(this._wave=_util2["default"].create(".ripple__wave"),this._background=_util2["default"].create(".ripple__background"),this.appendChild(this._wave),this.appendChild(this._background)),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_getEffectSize",value:function(){var sizes=["cover","contain"];if(this.hasAttribute("size")){var size=this.getAttribute("size");if(sizes.indexOf(size)!==-1)return size}return"cover"}},{key:"_calculateCoords",value:function(e){var x=void 0,y=void 0,h=void 0,w=void 0,r=void 0,b=this.getBoundingClientRect(),size=this._getEffectSize();if(this._center)if(x=b.width/2,y=b.height/2,"cover"===size)r=Math.sqrt(x*x+y*y);else{if("contain"!==size)throw Error("Invalid state. If this errors is shown, leport to GitHub issues.");r=Math.min(x,y)}else if(x=(e.clientX||e.changedTouches[0].clientX)-b.left,y=(e.clientY||e.changedTouches[0].clientY)-b.top,h=Math.max(y,b.height-y),w=Math.max(x,b.width-x),"cover"===size)r=Math.sqrt(h*h+w*w);else{if("contain"!==size)throw Error("Invalid state. If this errors is shown, leport to GitHub issues.");r=Math.min(Math.round(h/2),Math.round(w/2))}return{x:x,y:y,r:r}}},{key:"_rippleAnimation",value:function(e){var duration=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,_animator=this._animator,_wave=this._wave,_background=this._background,_minR=this._minR,_calculateCoords2=this._calculateCoords(e),x=_calculateCoords2.x,y=_calculateCoords2.y,r=_calculateCoords2.r;return _animator.stopAll({stopNext:1}),_animator.animate(_background,{opacity:1},duration),_util2["default"].extend(_wave.style,{opacity:1,top:y-_minR+"px",left:x-_minR+"px",width:2*_minR+"px",height:2*_minR+"px"}),_animator.animate(_wave,{top:y-r,left:x-r,height:2*r,width:2*r},duration)}},{key:"_updateParent",value:function(){if(!this._parentUpdated&&this.parentNode){var computedStyle=window.getComputedStyle(this.parentNode);"static"===computedStyle.getPropertyValue("position")&&(this.parentNode.style.position="relative"),this._parentUpdated=!0}}},{key:"_onTap",value:function(e){var _this2=this;this.disabled||(this._updateParent(),this._rippleAnimation(e.gesture.srcEvent).then(function(){_this2._animator.fade(_this2._wave),_this2._animator.fade(_this2._background)}))}},{key:"_onHold",value:function(e){this.disabled||(this._updateParent(),this._holding=this._rippleAnimation(e.gesture.srcEvent,2e3),document.addEventListener("release",this._boundOnRelease))}},{key:"_onRelease",value:function(e){var _this3=this;this._holding&&(this._holding.speed(300).then(function(){_this3._animator.stopAll({stopNext:!0}),_this3._animator.fade(_this3._wave),_this3._animator.fade(_this3._background)}),this._holding=!1),document.removeEventListener("release",this._boundOnRelease)}},{key:"_onDragStart",value:function(e){return this._holding?this._onRelease(e):void(["left","right"].indexOf(e.gesture.direction)!=-1&&this._onTap(e))}},{key:"connectedCallback",value:function(){this._parentNode=this.parentNode,this._boundOnTap=this._onTap.bind(this),this._boundOnHold=this._onHold.bind(this),this._boundOnDragStart=this._onDragStart.bind(this),this._boundOnRelease=this._onRelease.bind(this),_internal2["default"].config.animationsDisabled?this.disabled=!0:(this._parentNode.addEventListener("tap",this._boundOnTap),this._parentNode.addEventListener("hold",this._boundOnHold),this._parentNode.addEventListener("dragstart",this._boundOnDragStart))}},{key:"disconnectedCallback",value:function(){var pn=this._parentNode||this.parentNode;pn.removeEventListener("tap",this._boundOnTap),pn.removeEventListener("hold",this._boundOnHold),pn.removeEventListener("dragstart",this._boundOnDragStart)}},{key:"attributeChangedCallback",value:function(name,last,current){var _this4=this;switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"start-radius":this._minR=Math.max(0,parseFloat(current)||0);break;case"color":current&&(0,_contentReady2["default"])(this,function(){_this4._wave.style.background=current,_this4.hasAttribute("background")||(_this4._background.style.background=current)});break;case"background":(current||last)&&("none"===current?(0,_contentReady2["default"])(this,function(){_this4._background.setAttribute("disabled","disabled"),_this4._background.style.background="transparent"}):(0,_contentReady2["default"])(this,function(){_this4._background.hasAttribute("disabled")&&_this4._background.removeAttribute("disabled"),_this4._background.style.background=current}));break;case"center":"center"===name&&(this._center=null!=current&&"false"!=current)}}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["start-radius","color","background","center","class","modifier"]}}]),RippleElement}(_baseElement2["default"]);exports["default"]=RippleElement,customElements.define("ons-ripple",RippleElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),RowElement=function(_BaseElement){function RowElement(){return _classCallCheck(this,RowElement),_possibleConstructorReturn(this,(RowElement.__proto__||Object.getPrototypeOf(RowElement)).apply(this,arguments))}return _inherits(RowElement,_BaseElement),RowElement}(_baseElement2["default"]);exports["default"]=RowElement,customElements.define("ons-row",RowElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseInput=__webpack_require__(30),_baseInput2=_interopRequireDefault(_baseInput),scheme={".search-input":"search-input--*"},SearchInputElement=function(_BaseInputElement){function SearchInputElement(){return _classCallCheck(this,SearchInputElement),_possibleConstructorReturn(this,(SearchInputElement.__proto__||Object.getPrototypeOf(SearchInputElement)).apply(this,arguments))}return _inherits(SearchInputElement,_BaseInputElement),_createClass(SearchInputElement,[{key:"_scheme",get:function(){return scheme}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="search-input">\n    '}},{key:"type",get:function(){return"search"}}]),SearchInputElement}(_baseInput2["default"]);exports["default"]=SearchInputElement,customElements.define("ons-search-input",SearchInputElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),
Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={"":"select-*",".select-input":"select-input--*"},defaultClassName="select",INPUT_ATTRIBUTES=["autofocus","disabled","form","multiple","name","required","size"],SelectElement=function(_BaseElement){function SelectElement(){_classCallCheck(this,SelectElement);var _this=_possibleConstructorReturn(this,(SelectElement.__proto__||Object.getPrototypeOf(SelectElement)).call(this));return(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this._deriveGetters(),_this}return _inherits(SelectElement,_BaseElement),_createClass(SelectElement,[{key:"attributeChangedCallback",value:function(name,last,current){var _this2=this;switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}INPUT_ATTRIBUTES.indexOf(name)>=0&&(0,_contentReady2["default"])(this,function(){return _this2._updateBoundAttributes()})}},{key:"_updateBoundAttributes",value:function(){var _this3=this;INPUT_ATTRIBUTES.forEach(function(attr){_this3.hasAttribute(attr)?_this3._select.setAttribute(attr,_this3.getAttribute(attr)):_this3._select.removeAttribute(attr)})}},{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName);var sel=this._select||document.createElement("select");!sel.id&&this.hasAttribute("select-id")&&(sel.id=this.getAttribute("select-id")),sel.classList.add("select-input"),this._select||(_util2["default"].arrayFrom(this.childNodes).forEach(function(element){return sel.appendChild(element)}),this.appendChild(sel)),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"_deriveGetters",value:function(){for(var _this4=this,_loop=function(key){_this4.__defineGetter__(key,function(){return _this4._select[key]}),_this4.__defineSetter__(key,function(value){_this4._select[key]=value})},_arr=["disabled","length","multiple","name","options","selectedIndex","size","value"],_i=0;_i<_arr.length;_i++){var key=_arr[_i];_loop(key)}this.__defineGetter__("form",function(){return _this4._select.form}),this.__defineGetter__("type",function(){return _this4._select.type})}},{key:"add",value:function(option){var index=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._select.add(option,index)}},{key:"remove",value:function(index){this._select.remove(index)}},{key:"_select",get:function(){return this.querySelector("select")}}],[{key:"observedAttributes",get:function(){return["modifier","class"].concat(INPUT_ATTRIBUTES)}}]),SelectElement}(_baseElement2["default"]);exports["default"]=SelectElement,customElements.define("ons-select",SelectElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="fab fab--mini speed-dial__item",scheme={"":"fab--* speed-dial__item--*"},SpeedDialItemElement=function(_BaseElement){function SpeedDialItemElement(){_classCallCheck(this,SpeedDialItemElement);var _this=_possibleConstructorReturn(this,(SpeedDialItemElement.__proto__||Object.getPrototypeOf(SpeedDialItemElement)).call(this));return _this._compile(),_this._boundOnClick=_this._onClick.bind(_this),_this}return _inherits(SpeedDialItemElement,_BaseElement),_createClass(SpeedDialItemElement,[{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this._updateClassName(current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme),_util2["default"].addModifier(this,"mini");break;case"ripple":this._updateRipple()}}},{key:"_updateClassName",value:function(className){var _this2=this;defaultClassName.split(/\s+/).every(function(token){return _this2.classList.contains(token)})||(this.className=defaultClassName+" "+className)}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick,!1)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1)}},{key:"_updateRipple",value:function(){_util2["default"].updateRipple(this)}},{key:"_onClick",value:function(e){e.stopPropagation()}},{key:"_compile",value:function(){var _this3=this;_autostyle2["default"].prepare(this),defaultClassName.split(/\s+/).forEach(function(token){_this3.classList.add(token)}),_util2["default"].addModifier(this,"mini"),this._updateRipple(),_modifierUtil2["default"].initModifier(this,scheme)}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","class"]}}]),SpeedDialItemElement}(_baseElement2["default"]);exports["default"]=SpeedDialItemElement,customElements.define("ons-speed-dial-item",SpeedDialItemElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_styler=__webpack_require__(149),_styler2=_interopRequireDefault(_styler),defaultClassName="speed-dial",scheme={"":"speed-dial--*"},SpeedDialElement=function(_BaseElement){function SpeedDialElement(){_classCallCheck(this,SpeedDialElement);var _this=_possibleConstructorReturn(this,(SpeedDialElement.__proto__||Object.getPrototypeOf(SpeedDialElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this._compile()}),_this._itemShown=!1,_this._boundOnClick=_this._onClick.bind(_this),_this}return _inherits(SpeedDialElement,_BaseElement),_createClass(SpeedDialElement,[{key:"_compile",value:function(){this.classList.add(defaultClassName),_autostyle2["default"].prepare(this),this._updateRipple(),_modifierUtil2["default"].initModifier(this,scheme),this.hasAttribute("direction")?this._updateDirection(this.getAttribute("direction")):this._updateDirection("up"),this._updatePosition()}},{key:"attributeChangedCallback",value:function(name,last,current){var _this2=this;switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme);break;case"ripple":(0,_contentReady2["default"])(this,function(){return _this2._updateRipple()});break;case"direction":(0,_contentReady2["default"])(this,function(){return _this2._updateDirection(current)});break;case"position":(0,_contentReady2["default"])(this,function(){return _this2._updatePosition()})}}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick,!1)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1)}},{key:"_onClick",value:function(e){return this.onClick?(this.onClick.apply(this),Promise.resolve()):!this.disabled&&this.visible?this.toggleItems():void 0}},{key:"_show",value:function(){return this.inline?Promise.resolve():this.show()}},{key:"_hide",value:function(){var _this3=this;return new Promise(function(resolve){_this3.inline?resolve():setImmediate(function(){return _this3.hide().then(resolve)})})}},{key:"_updateRipple",value:function(){this._fab&&(this.hasAttribute("ripple")?this._fab.setAttribute("ripple",""):this._fab.removeAttribute("ripple"))}},{key:"_updateDirection",value:function(direction){for(var children=this.items,i=0;i<children.length;i++)(0,_styler2["default"])(children[i],{transitionDelay:25*i+"ms",bottom:"auto",right:"auto",top:"auto",left:"auto"});switch(direction){case"up":for(var _i=0;_i<children.length;_i++)children[_i].style.bottom=72+56*_i+"px",children[_i].style.right="8px";break;case"down":for(var _i2=0;_i2<children.length;_i2++)children[_i2].style.top=72+56*_i2+"px",children[_i2].style.left="8px";break;case"left":for(var _i3=0;_i3<children.length;_i3++)children[_i3].style.top="8px",children[_i3].style.right=72+56*_i3+"px";break;case"right":for(var _i4=0;_i4<children.length;_i4++)children[_i4].style.top="8px",children[_i4].style.left=72+56*_i4+"px";break;default:throw new Error("Argument must be one of up, down, left or right.")}}},{key:"_updatePosition",value:function(){var position=this.getAttribute("position");switch(this.classList.remove("fab--top__left","fab--bottom__right","fab--bottom__left","fab--top__right","fab--top__center","fab--bottom__center"),position){case"top right":case"right top":this.classList.add("fab--top__right");break;case"top left":case"left top":this.classList.add("fab--top__left");break;case"bottom right":case"right bottom":this.classList.add("fab--bottom__right");break;case"bottom left":case"left bottom":this.classList.add("fab--bottom__left");break;case"center top":case"top center":this.classList.add("fab--top__center");break;case"center bottom":case"bottom center":this.classList.add("fab--bottom__center")}}},{key:"_getTranslate",value:function(){var isBottom=(this.getAttribute("position")||"").indexOf("bottom")>=0,translate=isBottom?"translate3d(0px, -"+(_util2["default"].globals.fabOffset||0)+"px, 0px) ":"";return translate}},{key:"show",value:function(){return this._fab.show(),this.style.webkitTransform=this.style.transform=this._getTranslate(),Promise.resolve()}},{key:"hide",value:function(){var _this4=this;return this.hideItems().then(function(){return _this4._fab.hide()})}},{key:"showItems",value:function(){this.hasAttribute("direction")?this._updateDirection(this.getAttribute("direction")):this._updateDirection("up");var totalDelay=0;if(!this._itemShown){for(var children=this.items,i=0;i<children.length;i++){var delay=25*i;totalDelay+=delay,(0,_styler2["default"])(children[i],{transform:"scale(1)",transitionDelay:delay+"ms"})}totalDelay+=50,this._itemShown=!0,_util2["default"].triggerElementEvent(this,"open")}var deferred=_util2["default"].defer();return setTimeout(deferred.resolve,totalDelay),deferred.promise}},{key:"hideItems",value:function(){var totalDelay=0;if(this._itemShown){for(var children=this.items,i=0;i<children.length;i++){var delay=25*(children.length-i);totalDelay+=delay,(0,_styler2["default"])(children[i],{transform:"scale(0)",transitionDelay:delay+"ms"})}totalDelay+=50,this._itemShown=!1,_util2["default"].triggerElementEvent(this,"close")}var deferred=_util2["default"].defer();return setTimeout(deferred.resolve,totalDelay),deferred.promise}},{key:"isOpen",value:function(){return this._itemShown}},{key:"toggle",value:function(){return this.visible?this.hide():this.show()}},{key:"toggleItems",value:function(){return this.isOpen()?this.hideItems():this.showItems()}},{key:"items",get:function(){return _util2["default"].arrayFrom(this.querySelectorAll("ons-speed-dial-item"))}},{key:"_fab",get:function(){return _util2["default"].findChild(this,"ons-fab")}},{key:"disabled",set:function(value){return value&&this.hideItems(),_util2["default"].arrayFrom(this.children).forEach(function(e){_util2["default"].match(e,".fab")&&_util2["default"].toggleAttribute(e,"disabled",value)}),_util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}},{key:"inline",get:function(){return this.hasAttribute("inline")}},{key:"visible",get:function(){return this._fab.visible&&"none"!==this.style.display}}],[{key:"observedAttributes",get:function(){return["class","modifier","ripple","direction","position"]}},{key:"events",get:function(){return["open","close"]}}]),SpeedDialElement}(_baseElement2["default"]);exports["default"]=SpeedDialElement,customElements.define("ons-speed-dial",SpeedDialElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_internal=__webpack_require__(7),_modifierUtil=(_interopRequireDefault(_internal),__webpack_require__(3)),_baseElement=(_interopRequireDefault(_modifierUtil),__webpack_require__(1)),_baseElement2=_interopRequireDefault(_baseElement),_pageLoader=__webpack_require__(27),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),rewritables={ready:function(element,callback){setImmediate(callback)}},SplitterContentElement=function(_BaseElement){function SplitterContentElement(){_classCallCheck(this,SplitterContentElement);var _this=_possibleConstructorReturn(this,(SplitterContentElement.__proto__||Object.getPrototypeOf(SplitterContentElement)).call(this));return _this._page=null,_this._pageLoader=_pageLoader.defaultPageLoader,(0,_contentReady2["default"])(_this,function(){rewritables.ready(_this,function(){var page=_this._getPageTarget();page&&_this.load(page)})}),_this}return _inherits(SplitterContentElement,_BaseElement),_createClass(SplitterContentElement,[{key:"connectedCallback",value:function(){if(!_util2["default"].match(this.parentNode,"ons-splitter"))throw new Error('"ons-splitter-content" must have "ons-splitter" as parentNode.')}},{key:"_getPageTarget",value:function(){return this._page||this.getAttribute("page")}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(name,last,current){}},{key:"load",value:function(page){var _this2=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._page=page;var callback=options.callback||function(){};return new Promise(function(resolve){var oldContent=_this2._content||null;_this2._pageLoader.load({page:page,parent:_this2},function(pageElement){oldContent&&(_this2._pageLoader.unload(oldContent),oldContent=null),setImmediate(function(){return _this2._show()}),callback(pageElement),resolve(pageElement)})})}},{key:"_show",value:function(){this._content&&this._content._show()}},{key:"_hide",value:function(){this._content&&this._content._hide()}},{key:"_destroy",value:function(){this._content&&this._pageLoader.unload(this._content),this.remove()}},{key:"page",get:function(){return this._page},set:function(page){this._page=page}},{key:"_content",get:function(){return this.children[0]}},{key:"pageLoader",get:function(){return this._pageLoader},set:function(loader){if(!(loader instanceof _pageLoader.PageLoader))throw Error("First parameter must be an instance of PageLoader");this._pageLoader=loader}}],[{key:"observedAttributes",get:function(){return[]}},{key:"rewritables",get:function(){return rewritables}}]),SplitterContentElement}(_baseElement2["default"]);exports["default"]=SplitterContentElement,customElements.define("ons-splitter-content",SplitterContentElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),SplitterMaskElement=function(_BaseElement){function SplitterMaskElement(){_classCallCheck(this,SplitterMaskElement);var _this=_possibleConstructorReturn(this,(SplitterMaskElement.__proto__||Object.getPrototypeOf(SplitterMaskElement)).call(this));return _this._boundOnClick=_this._onClick.bind(_this),(0,_contentReady2["default"])(_this,function(){_this.parentNode._sides.every(function(side){return"split"===side.mode})&&_this.setAttribute("style","display: none !important")}),_this}return _inherits(SplitterMaskElement,_BaseElement),_createClass(SplitterMaskElement,[{key:"_onClick",value:function(event){this.onClick instanceof Function?this.onClick():_util2["default"].match(this.parentNode,"ons-splitter")&&this.parentNode._sides.forEach(function(side){return side.close("left")["catch"](function(){})}),event.stopPropagation()}},{key:"attributeChangedCallback",value:function(name,last,current){}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick)}}],[{key:"observedAttributes",get:function(){return[]}}]),SplitterMaskElement}(_baseElement2["default"]);exports["default"]=SplitterMaskElement,customElements.define("ons-splitter-mask",SplitterMaskElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_orientation=__webpack_require__(41),_orientation2=_interopRequireDefault(_orientation),_internal=__webpack_require__(7),_modifierUtil=(_interopRequireDefault(_internal),__webpack_require__(3)),_baseElement=(_interopRequireDefault(_modifierUtil),__webpack_require__(1)),_baseElement2=_interopRequireDefault(_baseElement),_animator=__webpack_require__(31),_animator2=_interopRequireDefault(_animator),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),_doorlock=__webpack_require__(32),_doorlock2=_interopRequireDefault(_doorlock),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_pageLoader=__webpack_require__(27),_onsSplitter=__webpack_require__(50),_onsSplitter2=_interopRequireDefault(_onsSplitter),SPLIT_MODE="split",COLLAPSE_MODE="collapse",CLOSED_STATE="closed",OPEN_STATE="open",CHANGING_STATE="changing",WATCHED_ATTRIBUTES=["animation","width","side","collapse","swipeable","swipe-target-width","animation-options","open-threshold"],rewritables={ready:function(splitterSideElement,callback){setImmediate(callback)}},CollapseDetection=function(){function CollapseDetection(element,target){_classCallCheck(this,CollapseDetection),this._element=element,this._boundOnChange=this._onChange.bind(this),target&&this.changeTarget(target)}return _createClass(CollapseDetection,[{key:"changeTarget",value:function(target){this.disable(),this._target=target,target&&(this._orientation=["portrait","landscape"].indexOf(target)!==-1,this.activate())}},{key:"_match",value:function(value){return this._orientation?this._target===(value.isPortrait?"portrait":"landscape"):value.matches}},{key:"_onChange",value:function(value){this._element._updateMode(this._match(value)?COLLAPSE_MODE:SPLIT_MODE)}},{key:"activate",value:function(){this._orientation?(_orientation2["default"].on("change",this._boundOnChange),this._onChange({isPortrait:_orientation2["default"].isPortrait()})):(this._queryResult=window.matchMedia(this._target),this._queryResult.addListener(this._boundOnChange),this._onChange(this._queryResult))}},{key:"disable",value:function(){this._orientation?_orientation2["default"].off("change",this._boundOnChange):this._queryResult&&(this._queryResult.removeListener(this._boundOnChange),this._queryResult=null)}}]),CollapseDetection}(),widthToPx=function(width,parent){var _ref=[parseInt(width,10),/px/.test(width)],value=_ref[0],px=_ref[1];return px?value:Math.round(parent.offsetWidth*value/100)},CollapseMode=function(){function CollapseMode(element){_classCallCheck(this,CollapseMode),this._active=!1,this._state=CLOSED_STATE,this._element=element,this._lock=new _doorlock2["default"]}return _createClass(CollapseMode,[{key:"_animator",get:function(){return this._element._animator}}]),_createClass(CollapseMode,[{key:"isOpen",value:function(){return this._active&&this._state!==CLOSED_STATE}},{key:"handleGesture",value:function(e){e.gesture&&this._active&&!this._lock.isLocked()&&!this._isOpenOtherSideMenu()&&("dragstart"===e.type?this._onDragStart(e):this._ignoreDrag||("dragend"===e.type?this._onDragEnd(e):this._onDrag(e)))}},{key:"_canConsumeGesture",value:function(gesture){var _this=this,isOpen=this.isOpen(),validDrag=function(d){return"left"===_this._element._side?"left"===d&&isOpen||"right"===d&&!isOpen:"left"===d&&!isOpen||"right"===d&&isOpen},distance="left"===this._element._side?gesture.center.clientX:window.innerWidth-gesture.center.clientX,area=this._element._swipeTargetWidth;return(validDrag(gesture.direction)||validDrag(gesture.interimDirection))&&!(area&&distance>area&&!isOpen)}},{key:"_onDragStart",value:function(event){this._ignoreDrag=event.consumed||!this._canConsumeGesture(event.gesture),this._ignoreDrag||(event.consume&&event.consume(),event.consumed=!0,this._width=widthToPx(this._element._width,this._element.parentNode),this._startDistance=this._distance=this.isOpen()?this._width:0,_util2["default"].skipContentScroll(event.gesture))}},{key:"_onDrag",value:function(event){event.stopPropagation(),event.gesture.preventDefault();var delta="left"===this._element._side?event.gesture.deltaX:-event.gesture.deltaX,distance=Math.max(0,Math.min(this._width,this._startDistance+delta));distance!==this._distance&&(this._animator.translate(distance),this._distance=distance,this._state=CHANGING_STATE)}},{key:"_onDragEnd",value:function(event){event.stopPropagation();var distance=this._distance,width=this._width,el=this._element,direction=event.gesture.interimDirection,shouldOpen=el._side!==direction&&distance>width*el._threshold;this.executeAction(shouldOpen?"open":"close"),this._ignoreDrag=!0}},{key:"layout",value:function(){this._active&&this._state===OPEN_STATE&&this._animator.open()}},{key:"enterMode",value:function(){this._active||(this._active=!0,this._animator&&this._animator.activate(this._element),this.layout())}},{key:"exitMode",value:function(){this._animator&&this._animator.deactivate(),this._state=CLOSED_STATE,this._active=!1}},{key:"_isOpenOtherSideMenu",value:function(){var _this2=this;return _util2["default"].arrayFrom(this._element.parentElement.children).some(function(e){return _util2["default"].match(e,"ons-splitter-side")&&e!==_this2._element&&e.isOpen})}},{key:"executeAction",value:function(name){var _this3=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},FINAL_STATE="open"===name?OPEN_STATE:CLOSED_STATE;if(!this._active)return Promise.resolve(!1);if(this._state===FINAL_STATE)return Promise.resolve(this._element);if(this._lock.isLocked())return Promise.reject("Splitter side is locked.");if("open"===name&&this._isOpenOtherSideMenu())return Promise.reject("Another menu is already open.");if(this._element._emitEvent("pre"+name))return Promise.reject("Canceled in pre"+name+" event.");var callback=options.callback,unlock=this._lock.lock(),done=function(){_this3._state=FINAL_STATE,_this3.layout(),unlock(),_this3._element._emitEvent("post"+name),callback&&callback()};return options.withoutAnimation?(done(),Promise.resolve(this._element)):(this._state=CHANGING_STATE,new Promise(function(resolve){_this3._animator[name](function(){done(),resolve(_this3._element)})}))}}]),CollapseMode}(),SplitterSideElement=function(_BaseElement){function SplitterSideElement(){_classCallCheck(this,SplitterSideElement);var _this4=_possibleConstructorReturn(this,(SplitterSideElement.__proto__||Object.getPrototypeOf(SplitterSideElement)).call(this));return _this4._page=null,_this4._pageLoader=_pageLoader.defaultPageLoader,_this4._collapseMode=new CollapseMode(_this4),_this4._collapseDetection=new CollapseDetection(_this4),_this4._animatorFactory=new _animatorFactory2["default"]({animators:_onsSplitter2["default"].animators,baseClass:_animator2["default"],baseClassName:"SplitterAnimator",defaultAnimation:_this4.getAttribute("animation")}),_this4._boundHandleGesture=function(e){return _this4._collapseMode.handleGesture(e)},_this4._watchedAttributes=WATCHED_ATTRIBUTES,(0,_contentReady2["default"])(_this4,function(){rewritables.ready(_this4,function(){var page=_this4._getPageTarget();page&&_this4.load(page)})}),_this4}return _inherits(SplitterSideElement,_BaseElement),_createClass(SplitterSideElement,[{key:"connectedCallback",value:function(){var _this5=this;if(!_util2["default"].match(this.parentNode,"ons-splitter"))throw new Error("Parent must be an ons-splitter element.");this._gestureDetector=new _gestureDetector2["default"](this.parentElement,{dragMinDistance:1}),(0,_contentReady2["default"])(this,function(){_this5._watchedAttributes.forEach(function(e){return _this5._update(e)})}),this.hasAttribute("side")||this.setAttribute("side","left")}},{key:"_getPageTarget",
value:function(){return this._page||this.getAttribute("page")}},{key:"disconnectedCallback",value:function(){this._collapseDetection.disable(),this._gestureDetector.dispose(),this._gestureDetector=null}},{key:"attributeChangedCallback",value:function(name,last,current){this.parentNode&&this._update(name,current)}},{key:"_update",value:function(name,value){return name="_update"+name.split("-").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(""),this[name](value)}},{key:"_emitEvent",value:function(name){if("pre"!==name.slice(0,3))return _util2["default"].triggerElementEvent(this,name,{side:this});var isCanceled=!1;return _util2["default"].triggerElementEvent(this,name,{side:this,cancel:function(){return isCanceled=!0}}),isCanceled}},{key:"_updateCollapse",value:function(){var value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("collapse");return null===value||"split"===value?(this._collapseDetection.disable(),this._updateMode(SPLIT_MODE)):""===value||"collapse"===value?(this._collapseDetection.disable(),this._updateMode(COLLAPSE_MODE)):void this._collapseDetection.changeTarget(value)}},{key:"_updateMode",value:function(mode){mode!==this._mode&&(this._mode=mode,this._collapseMode[mode===COLLAPSE_MODE?"enterMode":"exitMode"](),this.setAttribute("mode",mode),_util2["default"].triggerElementEvent(this,"modechange",{side:this,mode:mode}))}},{key:"_updateOpenThreshold",value:function(){var threshold=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("open-threshold");this._threshold=Math.max(0,Math.min(1,parseFloat(threshold)||.3))}},{key:"_updateSwipeable",value:function(){var swipeable=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("swipeable"),action=null===swipeable?"off":"on";this._gestureDetector&&this._gestureDetector[action]("drag dragstart dragend",this._boundHandleGesture)}},{key:"_updateSwipeTargetWidth",value:function(){var value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("swipe-target-width");this._swipeTargetWidth=Math.max(0,parseInt(value)||0)}},{key:"_updateWidth",value:function(){this.style.width=this._width}},{key:"_updateSide",value:function(){var side=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("side");this._side="right"===side?side:"left"}},{key:"_updateAnimation",value:function(){var animation=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("animation");this._animator&&this._animator.deactivate(),this._animator=this._animatorFactory.newAnimator({animation:animation}),this._animator.activate(this)}},{key:"_updateAnimationOptions",value:function(){var value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("animation-options");this._animator.updateOptions(_animatorFactory2["default"].parseAnimationOptionsString(value))}},{key:"open",value:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._collapseMode.executeAction("open",options)}},{key:"close",value:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._collapseMode.executeAction("close",options)}},{key:"toggle",value:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.isOpen?this.close(options):this.open(options)}},{key:"load",value:function(page){var _this6=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._page=page;var callback=options.callback||function(){};return new Promise(function(resolve){var oldContent=_this6._content||null;_this6._pageLoader.load({page:page,parent:_this6},function(pageElement){oldContent&&(_this6._pageLoader.unload(oldContent),oldContent=null),setImmediate(function(){return _this6._show()}),callback(pageElement),resolve(pageElement)})})}},{key:"_show",value:function(){this._content&&this._content._show()}},{key:"_hide",value:function(){this._content&&this._content._hide()}},{key:"_destroy",value:function(){this._content&&this._pageLoader.unload(this._content),this.remove()}},{key:"side",get:function(){return"right"===this.getAttribute("side")?"right":"left"}},{key:"_width",get:function(){var width=this.getAttribute("width");return/^\d+(px|%)$/.test(width)?width:"80%"},set:function(value){this.setAttribute("width",value)}},{key:"page",get:function(){return this._page},set:function(page){this._page=page}},{key:"_content",get:function(){return this.children[0]}},{key:"pageLoader",get:function(){return this._pageLoader},set:function(loader){if(!(loader instanceof _pageLoader.PageLoader))throw Error("First parameter must be an instance of PageLoader.");this._pageLoader=loader}},{key:"mode",get:function(){return this._mode}},{key:"isOpen",get:function(){return this._collapseMode.isOpen()}}],[{key:"observedAttributes",get:function(){return WATCHED_ATTRIBUTES}},{key:"events",get:function(){return["preopen","postopen","preclose","postclose","modechange"]}},{key:"rewritables",get:function(){return rewritables}}]),SplitterSideElement}(_baseElement2["default"]);exports["default"]=SplitterSideElement,customElements.define("ons-splitter-side",SplitterSideElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_modifierUtil=(_interopRequireDefault(_autostyle),__webpack_require__(3)),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseCheckbox=__webpack_require__(39),_baseCheckbox2=_interopRequireDefault(_baseCheckbox),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),scheme={"":"switch--*",".switch__input":"switch--*__input",".switch__handle":"switch--*__handle",".switch__toggle":"switch--*__toggle"},locations={ios:[1,21],material:[0,16]},SwitchElement=function(_BaseCheckboxElement){function SwitchElement(){_classCallCheck(this,SwitchElement);var _this=_possibleConstructorReturn(this,(SwitchElement.__proto__||Object.getPrototypeOf(SwitchElement)).call(this));return(0,_contentReady2["default"])(_this,function(){_this.attributeChangedCallback("modifier",null,_this.getAttribute("modifier"))}),_this._boundOnChange=_this._onChange.bind(_this),_this._boundOnRelease=_this._onRelease.bind(_this),_this}return _inherits(SwitchElement,_BaseCheckboxElement),_createClass(SwitchElement,[{key:"_getPosition",value:function(e){var l=this._locations;return Math.min(l[1],Math.max(l[0],this._startX+e.gesture.deltaX))}},{key:"_emitChangeEvent",value:function(){_util2["default"].triggerElementEvent(this,"change",{value:this.checked,"switch":this,isInteractive:!0})}},{key:"_onChange",value:function(event){event&&event.stopPropagation&&event.stopPropagation(),this._emitChangeEvent()}},{key:"_onClick",value:function(ev){ev.target.classList.contains(this.defaultElementClass+"__touch")&&ev.preventDefault()}},{key:"_onHold",value:function(e){this.disabled||(_modifierUtil2["default"].addModifier(this,"active"),document.addEventListener("release",this._boundOnRelease))}},{key:"_onDragStart",value:function(e){return this.disabled||["left","right"].indexOf(e.gesture.direction)===-1?void _modifierUtil2["default"].removeModifier(this,"active"):(e.consumed=!0,_modifierUtil2["default"].addModifier(this,"active"),this._startX=this._locations[this.checked?1:0],this.addEventListener("drag",this._onDrag),void document.addEventListener("release",this._boundOnRelease))}},{key:"_onDrag",value:function(e){e.stopPropagation(),e.gesture.preventDefault(),this._handle.style.left=this._getPosition(e)+"px"}},{key:"_onRelease",value:function(e){var l=this._locations,position=this._getPosition(e),previousValue=this.checked;this.checked=position>=(l[0]+l[1])/2,this.checked!==previousValue&&this._emitChangeEvent(),this.removeEventListener("drag",this._onDrag),document.removeEventListener("release",this._boundOnRelease),this._handle.style.left="",_modifierUtil2["default"].removeModifier(this,"active")}},{key:"click",value:function(){this.disabled||(this.checked=!this.checked,this._emitChangeEvent())}},{key:"connectedCallback",value:function(){var _this2=this;(0,_contentReady2["default"])(this,function(){_this2._input.addEventListener("change",_this2._boundOnChange)}),this.addEventListener("dragstart",this._onDragStart),this.addEventListener("hold",this._onHold),this.addEventListener("tap",this.click),this.addEventListener("click",this._onClick),this._gestureDetector=new _gestureDetector2["default"](this,{dragMinDistance:1,holdTimeout:251})}},{key:"disconnectedCallback",value:function(){var _this3=this;(0,_contentReady2["default"])(this,function(){_this3._input.removeEventListener("change",_this3._boundOnChange)}),this.removeEventListener("dragstart",this._onDragStart),this.removeEventListener("hold",this._onHold),this.removeEventListener("tap",this.click),this.removeEventListener("click",this._onClick),this._gestureDetector&&this._gestureDetector.dispose()}},{key:"attributeChangedCallback",value:function(name,last,current){if("modifier"===name){var md=(current||"").indexOf("material")!==-1;this._locations=locations[md?"material":"ios"]}_get(SwitchElement.prototype.__proto__||Object.getPrototypeOf(SwitchElement.prototype),"attributeChangedCallback",this).call(this,name,last,current)}},{key:"_scheme",get:function(){return scheme}},{key:"_defaultElementClass",get:function(){return"switch"}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="'+this._defaultElementClass+'__input">\n      <div class="'+this._defaultElementClass+'__toggle">\n        <div class="'+this._defaultElementClass+'__handle">\n          <div class="'+this._defaultElementClass+'__touch"></div>\n        </div>\n      </div>\n    '}},{key:"type",get:function(){return"checkbox"}},{key:"_handle",get:function(){return this.querySelector("."+this._defaultElementClass+"__handle")}},{key:"checkbox",get:function(){return this._input}}],[{key:"observedAttributes",get:function(){return[].concat(_toConsumableArray(_get(SwitchElement.__proto__||Object.getPrototypeOf(SwitchElement),"observedAttributes",this)),["modifier"])}}]),SwitchElement}(_baseCheckbox2["default"]);exports["default"]=SwitchElement,customElements.define("ons-switch",SwitchElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),TemplateElement=function(_BaseElement){function TemplateElement(){_classCallCheck(this,TemplateElement);var _this=_possibleConstructorReturn(this,(TemplateElement.__proto__||Object.getPrototypeOf(TemplateElement)).call(this));for(_this.template=_this.innerHTML;_this.firstChild;)_this.removeChild(_this.firstChild);return _this}return _inherits(TemplateElement,_BaseElement),_createClass(TemplateElement,[{key:"connectedCallback",value:function(){this.parentNode&&this.parentNode!==document.body&&_util2["default"].warn("ons-template (id = "+this.getAttribute("id")+") must be located just under document.body"+(this.parentNode.outerHTML?":\n\n"+this.parentNode.outerHTML:"."));var event=new CustomEvent("_templateloaded",{bubbles:!0,cancelable:!0});event.template=this.template,event.templateId=this.getAttribute("id"),this.dispatchEvent(event)}}]),TemplateElement}(_baseElement2["default"]);exports["default"]=TemplateElement,customElements.define("ons-template",TemplateElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_animatorFactory=__webpack_require__(8),_animatorFactory2=_interopRequireDefault(_animatorFactory),_animator=__webpack_require__(25),_animator2=_interopRequireDefault(_animator),_fadeAnimator=__webpack_require__(146),_fadeAnimator2=_interopRequireDefault(_fadeAnimator),_ascendAnimator=__webpack_require__(145),_ascendAnimator2=_interopRequireDefault(_ascendAnimator),_liftAnimator=__webpack_require__(148),_liftAnimator2=_interopRequireDefault(_liftAnimator),_fallAnimator=__webpack_require__(147),_fallAnimator2=_interopRequireDefault(_fallAnimator),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_baseDialog=__webpack_require__(19),_baseDialog2=_interopRequireDefault(_baseDialog),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),scheme={".toast":"toast--*",".toast__message":"toast--*__message",".toast__button":"toast--*__button"},defaultClassName="toast",_animatorDict={"default":_platform2["default"].isAndroid()?_ascendAnimator2["default"]:_liftAnimator2["default"],fade:_fadeAnimator2["default"],ascend:_ascendAnimator2["default"],lift:_liftAnimator2["default"],fall:_fallAnimator2["default"],none:_animator2["default"]},ToastElement=function(_BaseDialogElement){function ToastElement(){_classCallCheck(this,ToastElement);var _this=_possibleConstructorReturn(this,(ToastElement.__proto__||Object.getPrototypeOf(ToastElement)).call(this));return _this._defaultDBB=function(e){return e.callParentHandler()},(0,_contentReady2["default"])(_this,function(){return _this._compile()}),_this}return _inherits(ToastElement,_BaseDialogElement),_createClass(ToastElement,[{key:"_updateAnimatorFactory",value:function(){return this._toast&&(this._toast.style.top=this._toast.style.bottom=""),new _animatorFactory2["default"]({animators:_animatorDict,baseClass:_animator2["default"],baseClassName:"ToastAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.style.display="none",this.style.zIndex=1e4;var messageClassName="toast__message",buttonClassName="toast__button",toast=_util2["default"].findChild(this,"."+defaultClassName);if(!toast)for(toast=document.createElement("div"),toast.classList.add(defaultClassName);this.childNodes[0];)toast.appendChild(this.childNodes[0]);var button=_util2["default"].findChild(toast,"."+buttonClassName);if(button||(button=_util2["default"].findChild(toast,function(e){return _util2["default"].match(e,".button")||_util2["default"].match(e,"button")}),button&&(button.classList.remove("button"),button.classList.add(buttonClassName),toast.appendChild(button))),!_util2["default"].findChild(toast,"."+messageClassName)){var message=_util2["default"].findChild(toast,".message");if(!message){message=document.createElement("div");for(var i=toast.childNodes.length-1;i>=0;i--)toast.childNodes[i]!==button&&message.insertBefore(toast.childNodes[i],message.firstChild)}message.classList.add(messageClassName),toast.insertBefore(message,toast.firstChild)}toast.parentNode!==this&&this.appendChild(toast),_modifierUtil2["default"].initModifier(this,this._scheme)}},{key:"_scheme",get:function(){return scheme}},{key:"_toast",get:function(){return _util2["default"].findChild(this,"."+defaultClassName)}}],[{key:"registerAnimator",value:function(name,Animator){if(!(Animator.prototype instanceof _animator2["default"]))throw new Error('"Animator" param must inherit OnsToastElement.ToastAnimator');_animatorDict[name]=Animator}},{key:"animators",get:function(){return _animatorDict}},{key:"ToastAnimator",get:function(){return _animator2["default"]}}]),ToastElement}(_baseDialog2["default"]);exports["default"]=ToastElement,customElements.define("ons-toast",ToastElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_modifierUtil=__webpack_require__(3),_modifierUtil2=_interopRequireDefault(_modifierUtil),_baseElement=__webpack_require__(1),_baseElement2=_interopRequireDefault(_baseElement),defaultClassName="toolbar-button",scheme={"":"toolbar-button--*"},ToolbarButtonElement=function(_BaseElement){function ToolbarButtonElement(){_classCallCheck(this,ToolbarButtonElement);var _this=_possibleConstructorReturn(this,(ToolbarButtonElement.__proto__||Object.getPrototypeOf(ToolbarButtonElement)).call(this));return _this._compile(),_this}return _inherits(ToolbarButtonElement,_BaseElement),_createClass(ToolbarButtonElement,[{key:"_compile",value:function(){_autostyle2["default"].prepare(this),this.classList.add(defaultClassName),_util2["default"].updateRipple(this,void 0,{center:"",size:"contain",background:"transparent"}),_modifierUtil2["default"].initModifier(this,scheme)}},{key:"attributeChangedCallback",value:function(name,last,current){switch(name){case"class":this.classList.contains(defaultClassName)||(this.className=defaultClassName+" "+current);break;case"modifier":_modifierUtil2["default"].onModifierChanged(last,current,this,scheme)}}},{key:"disabled",set:function(value){return _util2["default"].toggleAttribute(this,"disabled",value)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),ToolbarButtonElement}(_baseElement2["default"]);exports["default"]=ToolbarButtonElement,customElements.define("ons-toolbar-button",ToolbarButtonElement),module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function waitDeviceReady(){var unlockDeviceReady=ons._readyLock.lock();window.addEventListener("DOMContentLoaded",function(){ons.isWebView()?window.document.addEventListener("deviceready",unlockDeviceReady,!1):unlockDeviceReady()},!1)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_notification=__webpack_require__(154),_notification2=_interopRequireDefault(_notification),_actionSheet=__webpack_require__(150),_actionSheet2=_interopRequireDefault(_actionSheet),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),_orientation=__webpack_require__(41),_orientation2=_interopRequireDefault(_orientation),_modifier=__webpack_require__(153),_modifier2=_interopRequireDefault(_modifier),_softwareKeyboard=__webpack_require__(155),_softwareKeyboard2=_interopRequireDefault(_softwareKeyboard),_pageAttributeExpression=__webpack_require__(58),_pageAttributeExpression2=_interopRequireDefault(_pageAttributeExpression),_deviceBackButtonDispatcher=__webpack_require__(26),_deviceBackButtonDispatcher2=_interopRequireDefault(_deviceBackButtonDispatcher),_animationOptionsParser=__webpack_require__(55),_animationOptionsParser2=_interopRequireDefault(_animationOptionsParser),_autostyle=__webpack_require__(4),_autostyle2=_interopRequireDefault(_autostyle),_doorlock=__webpack_require__(32),_doorlock2=_interopRequireDefault(_doorlock),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_pageLoader=__webpack_require__(27),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),ons={};ons._util=_util2["default"],ons.animit=_animit2["default"],ons._deviceBackButtonDispatcher=_deviceBackButtonDispatcher2["default"],ons._internal=_internal2["default"],ons.GestureDetector=_gestureDetector2["default"],ons.platform=_platform2["default"],ons.softwareKeyboard=_softwareKeyboard2["default"],ons.pageAttributeExpression=_pageAttributeExpression2["default"],ons.orientation=_orientation2["default"],ons.notification=_notification2["default"],ons.modifier=_modifier2["default"],ons._animationOptionsParser=_animationOptionsParser2["default"],ons._autoStyle=_autostyle2["default"],ons._DoorLock=_doorlock2["default"],ons._contentReady=_contentReady2["default"],ons.defaultPageLoader=_pageLoader.defaultPageLoader,ons.PageLoader=_pageLoader.PageLoader,ons._BaseAnimator=_baseAnimator2["default"],ons._readyLock=new _doorlock2["default"],ons.platform.select((window.location.search.match(/platform=([\w-]+)/)||[])[1]),waitDeviceReady(),ons.isReady=function(){return!ons._readyLock.isLocked()},ons.isWebView=ons.platform.isWebView,ons.ready=function(callback){ons.isReady()?callback():ons._readyLock.waitUnlock(callback)},ons.setDefaultDeviceBackButtonListener=function(listener){ons._defaultDeviceBackButtonHandler.setListener(listener)},ons.disableDeviceBackButtonHandler=function(){ons._deviceBackButtonDispatcher.disable()},ons.enableDeviceBackButtonHandler=function(){ons._deviceBackButtonDispatcher.enable()},ons.enableAutoStatusBarFill=function(){if(ons.isReady())throw new Error("This method must be called before ons.isReady() is true.");ons._internal.config.autoStatusBarFill=!0},ons.disableAutoStatusBarFill=function(){if(ons.isReady())throw new Error("This method must be called before ons.isReady() is true.");ons._internal.config.autoStatusBarFill=!1},ons.disableAnimations=function(){ons._internal.config.animationsDisabled=!0},ons.enableAnimations=function(){ons._internal.config.animationsDisabled=!1},ons._disableWarnings=function(){ons._internal.config.warningsDisabled=!0},ons._enableWarnings=function(){ons._internal.config.warningsDisabled=!1},ons.disableAutoStyling=ons._autoStyle.disable,ons.enableAutoStyling=ons._autoStyle.enable,ons.forcePlatformStyling=function(newPlatform){ons.enableAutoStyling(),ons.platform.select(newPlatform||"ios"),ons._util.arrayFrom(document.querySelectorAll("*")).forEach(function(element){"ons-if"===element.tagName.toLowerCase()?element._platformUpdate():element.tagName.match(/^ons-/i)&&(ons._autoStyle.prepare(element,!0),"ons-tabbar"===element.tagName.toLowerCase()&&element._updatePosition())})},ons.preload=function(){var templates=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all((templates instanceof Array?templates:[templates]).map(function(template){if("string"!=typeof template)throw new Error("Expected string arguments but got "+("undefined"==typeof template?"undefined":_typeof(template)));return ons._internal.getTemplateHTMLAsync(template)}))},ons.createElement=function(template){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};template=template.trim();var create=function(html){var element=ons._util.createElement(html);if(element.remove(),options.append){var target=options.append instanceof HTMLElement?options.append:document.body;target.insertBefore(element,options.insertBefore||null),options.link instanceof Function&&options.link(element)}return element};return"<"===template.charAt(0)?create(template):ons._internal.getPageHTMLAsync(template).then(create)},ons.createPopover=ons.createDialog=ons.createAlertDialog=function(template){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ons.createElement(template,_extends({append:!0},options))},ons.openActionSheet=_actionSheet2["default"],ons.resolveLoadingPlaceholder=function(page,link){var elements=ons._util.arrayFrom(window.document.querySelectorAll("[ons-loading-placeholder]"));if(0===elements.length)throw new Error("No ons-loading-placeholder exists.");elements.filter(function(element){return!element.getAttribute("page")}).forEach(function(element){element.setAttribute("ons-loading-placeholder",page),ons._resolveLoadingPlaceholder(element,page,link)})},ons._setupLoadingPlaceHolders=function(){ons.ready(function(){var elements=ons._util.arrayFrom(window.document.querySelectorAll("[ons-loading-placeholder]"));elements.forEach(function(element){var page=element.getAttribute("ons-loading-placeholder");"string"==typeof page&&ons._resolveLoadingPlaceholder(element,page)})})},ons._resolveLoadingPlaceholder=function(element,page,link){link=link||function(element,done){done()},ons._internal.getPageHTMLAsync(page).then(function(html){for(;element.firstChild;)element.removeChild(element.firstChild);var contentElement=ons._util.createElement("<div>"+html+"</div>");contentElement.style.display="none",element.appendChild(contentElement),link(contentElement,function(){contentElement.style.display=""})})["catch"](function(error){throw new Error("Unabled to resolve placeholder: "+error)})};var getCS="currentScript"in document?function(){return document.currentScript}:function(){return document.scripts[document.scripts.length-1]};ons.getScriptPage=function(){return getCS()&&/ons-page/i.test(getCS().parentElement.tagName)&&getCS().parentElement||null},window._superSecretOns=ons,exports["default"]=ons,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";__webpack_require__(157),__webpack_require__(174),__webpack_require__(175),__webpack_require__(173),__webpack_require__(172),__webpack_require__(156),__webpack_require__(158)},function(module,exports,__webpack_require__){"use strict";__webpack_require__(160),__webpack_require__(161),__webpack_require__(162)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){
return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.IOSActionSheetAnimator=exports.MDActionSheetAnimator=exports.ActionSheetAnimator=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),ActionSheetAnimator=exports.ActionSheetAnimator=function(_BaseAnimator){function ActionSheetAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;return _classCallCheck(this,ActionSheetAnimator),_possibleConstructorReturn(this,(ActionSheetAnimator.__proto__||Object.getPrototypeOf(ActionSheetAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(ActionSheetAnimator,_BaseAnimator),_createClass(ActionSheetAnimator,[{key:"show",value:function(dialog,done){done()}},{key:"hide",value:function(dialog,done){done()}}]),ActionSheetAnimator}(_baseAnimator2["default"]);exports.MDActionSheetAnimator=function(_ActionSheetAnimator){function MDActionSheetAnimator(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$timing=_ref2.timing,timing=void 0===_ref2$timing?"ease":_ref2$timing,_ref2$delay=_ref2.delay,delay=void 0===_ref2$delay?0:_ref2$delay,_ref2$duration=_ref2.duration,duration=void 0===_ref2$duration?.4:_ref2$duration;_classCallCheck(this,MDActionSheetAnimator);var _this2=_possibleConstructorReturn(this,(MDActionSheetAnimator.__proto__||Object.getPrototypeOf(MDActionSheetAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this2.maskTiming="linear",_this2.maskDuration=.2,_this2}return _inherits(MDActionSheetAnimator,_ActionSheetAnimator),_createClass(MDActionSheetAnimator,[{key:"show",value:function(dialog,callback){_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.maskDuration,timing:this.maskTiming}),(0,_animit2["default"])(dialog._sheet).saveStyle().queue({css:{transform:"translate3d(0, 80%, 0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}},{key:"hide",value:function(dialog,callback){_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.maskDuration,timing:this.maskTiming}),(0,_animit2["default"])(dialog._sheet).saveStyle().queue({css:{transform:"translate3d(0, 0, 0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(0, 80%, 0)",opacity:0},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}}]),MDActionSheetAnimator}(ActionSheetAnimator),exports.IOSActionSheetAnimator=function(_ActionSheetAnimator2){function IOSActionSheetAnimator(){var _ref3=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref3$timing=_ref3.timing,timing=void 0===_ref3$timing?"ease":_ref3$timing,_ref3$delay=_ref3.delay,delay=void 0===_ref3$delay?0:_ref3$delay,_ref3$duration=_ref3.duration,duration=void 0===_ref3$duration?.3:_ref3$duration;_classCallCheck(this,IOSActionSheetAnimator);var _this3=_possibleConstructorReturn(this,(IOSActionSheetAnimator.__proto__||Object.getPrototypeOf(IOSActionSheetAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this3.maskTiming="linear",_this3.maskDuration=.2,_this3.bodyHeight=document.body.clientHeight,_this3}return _inherits(IOSActionSheetAnimator,_ActionSheetAnimator2),_createClass(IOSActionSheetAnimator,[{key:"show",value:function(dialog,callback){_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.maskDuration,timing:this.maskTiming}),(0,_animit2["default"])(dialog._sheet).saveStyle().queue({css:{transform:"translate3d(0, "+(this.bodyHeight/2-1)+"px, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(0, 0, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}},{key:"hide",value:function(dialog,callback){_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.maskDuration,timing:this.maskTiming}),(0,_animit2["default"])(dialog._sheet).saveStyle().queue({css:{transform:"translate3d(0, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(0, 100%, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}}]),IOSActionSheetAnimator}(ActionSheetAnimator)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.IOSAlertDialogAnimator=exports.AndroidAlertDialogAnimator=exports.AlertDialogAnimator=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),AlertDialogAnimator=exports.AlertDialogAnimator=function(_BaseAnimator){function AlertDialogAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;return _classCallCheck(this,AlertDialogAnimator),_possibleConstructorReturn(this,(AlertDialogAnimator.__proto__||Object.getPrototypeOf(AlertDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(AlertDialogAnimator,_BaseAnimator),_createClass(AlertDialogAnimator,[{key:"show",value:function(dialog,done){done()}},{key:"hide",value:function(dialog,done){done()}}]),AlertDialogAnimator}(_baseAnimator2["default"]);exports.AndroidAlertDialogAnimator=function(_AlertDialogAnimator){function AndroidAlertDialogAnimator(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$timing=_ref2.timing,timing=void 0===_ref2$timing?"cubic-bezier(.1, .7, .4, 1)":_ref2$timing,_ref2$duration=_ref2.duration,duration=void 0===_ref2$duration?.2:_ref2$duration,_ref2$delay=_ref2.delay,delay=void 0===_ref2$delay?0:_ref2$delay;return _classCallCheck(this,AndroidAlertDialogAnimator),_possibleConstructorReturn(this,(AndroidAlertDialogAnimator.__proto__||Object.getPrototypeOf(AndroidAlertDialogAnimator)).call(this,{duration:duration,timing:timing,delay:delay}))}return _inherits(AndroidAlertDialogAnimator,_AlertDialogAnimator),_createClass(AndroidAlertDialogAnimator,[{key:"show",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(0.9, 0.9, 1.0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.0, 1.0, 1.0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}},{key:"hide",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.0, 1.0, 1.0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(0.9, 0.9, 1.0)",opacity:0},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}}]),AndroidAlertDialogAnimator}(AlertDialogAnimator),exports.IOSAlertDialogAnimator=function(_AlertDialogAnimator2){function IOSAlertDialogAnimator(){var _ref3=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref3$timing=_ref3.timing,timing=void 0===_ref3$timing?"cubic-bezier(.1, .7, .4, 1)":_ref3$timing,_ref3$duration=_ref3.duration,duration=void 0===_ref3$duration?.2:_ref3$duration,_ref3$delay=_ref3.delay,delay=void 0===_ref3$delay?0:_ref3$delay;return _classCallCheck(this,IOSAlertDialogAnimator),_possibleConstructorReturn(this,(IOSAlertDialogAnimator.__proto__||Object.getPrototypeOf(IOSAlertDialogAnimator)).call(this,{duration:duration,timing:timing,delay:delay}))}return _inherits(IOSAlertDialogAnimator,_AlertDialogAnimator2),_createClass(IOSAlertDialogAnimator,[{key:"show",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1.0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, -50%, 0) scale3d(1.0, 1.0, 1.0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}},{key:"hide",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{opacity:1},duration:0}).wait(this.delay).queue({css:{opacity:0},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}}]),IOSAlertDialogAnimator}(AlertDialogAnimator)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SlideDialogAnimator=exports.IOSDialogAnimator=exports.AndroidDialogAnimator=exports.DialogAnimator=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),DialogAnimator=exports.DialogAnimator=function(_BaseAnimator){function DialogAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;return _classCallCheck(this,DialogAnimator),_possibleConstructorReturn(this,(DialogAnimator.__proto__||Object.getPrototypeOf(DialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(DialogAnimator,_BaseAnimator),_createClass(DialogAnimator,[{key:"show",value:function(dialog,done){done()}},{key:"hide",value:function(dialog,done){done()}}]),DialogAnimator}(_baseAnimator2["default"]);exports.AndroidDialogAnimator=function(_DialogAnimator){function AndroidDialogAnimator(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$timing=_ref2.timing,timing=void 0===_ref2$timing?"ease-in-out":_ref2$timing,_ref2$delay=_ref2.delay,delay=void 0===_ref2$delay?0:_ref2$delay,_ref2$duration=_ref2.duration,duration=void 0===_ref2$duration?.3:_ref2$duration;return _classCallCheck(this,AndroidDialogAnimator),_possibleConstructorReturn(this,(AndroidDialogAnimator.__proto__||Object.getPrototypeOf(AndroidDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(AndroidDialogAnimator,_DialogAnimator),_createClass(AndroidDialogAnimator,[{key:"show",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, -60%, 0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, -50%, 0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}},{key:"hide",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, -50%, 0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, -60%, 0)",opacity:0},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}}]),AndroidDialogAnimator}(DialogAnimator),exports.IOSDialogAnimator=function(_DialogAnimator2){function IOSDialogAnimator(){var _ref3=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref3$timing=_ref3.timing,timing=void 0===_ref3$timing?"ease-in-out":_ref3$timing,_ref3$delay=_ref3.delay,delay=void 0===_ref3$delay?0:_ref3$delay,_ref3$duration=_ref3.duration,duration=void 0===_ref3$duration?.2:_ref3$duration;_classCallCheck(this,IOSDialogAnimator);var _this3=_possibleConstructorReturn(this,(IOSDialogAnimator.__proto__||Object.getPrototypeOf(IOSDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this3.bodyHeight=document.body.clientHeight,_this3}return _inherits(IOSDialogAnimator,_DialogAnimator2),_createClass(IOSDialogAnimator,[{key:"show",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, "+(this.bodyHeight/2-1)+"px, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, -50%, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}},{key:"hide",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, -50%, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, "+(this.bodyHeight/2-1)+"px, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}}]),IOSDialogAnimator}(DialogAnimator),exports.SlideDialogAnimator=function(_DialogAnimator3){function SlideDialogAnimator(){var _ref4=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref4$timing=_ref4.timing,timing=void 0===_ref4$timing?"cubic-bezier(.1, .7, .4, 1)":_ref4$timing,_ref4$delay=_ref4.delay,delay=void 0===_ref4$delay?0:_ref4$delay,_ref4$duration=_ref4.duration,duration=void 0===_ref4$duration?.2:_ref4$duration;_classCallCheck(this,SlideDialogAnimator);var _this4=_possibleConstructorReturn(this,(SlideDialogAnimator.__proto__||Object.getPrototypeOf(SlideDialogAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this4.bodyHeight=document.body.clientHeight,_this4}return _inherits(SlideDialogAnimator,_DialogAnimator3),_createClass(SlideDialogAnimator,[{key:"show",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3d(-50%, "+(-(this.bodyHeight/2)+1-dialog._dialog.clientHeight)+"px, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(-50%, -50%, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}},{key:"hide",value:function(dialog,callback){callback=callback?callback:function(){},_animit2["default"].runAll((0,_animit2["default"])(dialog._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(dialog._dialog).saveStyle().queue({css:{transform:"translate3D(-50%, -50%, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3d(-50%, "+(-(this.bodyHeight/2)+1-dialog._dialog.clientHeight)+"px, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}))}}]),SlideDialogAnimator}(DialogAnimator)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(40),_animator2=_interopRequireDefault(_animator),FadeModalAnimator=function(_ModalAnimator){function FadeModalAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.3:_ref$duration;return _classCallCheck(this,FadeModalAnimator),_possibleConstructorReturn(this,(FadeModalAnimator.__proto__||Object.getPrototypeOf(FadeModalAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(FadeModalAnimator,_ModalAnimator),_createClass(FadeModalAnimator,[{key:"show",value:function(modal,callback){callback=callback?callback:function(){},(0,_animit2["default"])(modal).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}).queue(function(done){callback(),done()}).play()}},{key:"hide",value:function(modal,callback){callback=callback?callback:function(){},(0,_animit2["default"])(modal).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}).queue(function(done){callback(),done()}).play()}}]),FadeModalAnimator}(_animator2["default"]);exports["default"]=FadeModalAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(40),_animator2=_interopRequireDefault(_animator),LiftModalAnimator=function(_ModalAnimator){function LiftModalAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier( .1, .7, .1, 1)":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.4:_ref$duration;return _classCallCheck(this,LiftModalAnimator),_possibleConstructorReturn(this,(LiftModalAnimator.__proto__||Object.getPrototypeOf(LiftModalAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(LiftModalAnimator,_ModalAnimator),_createClass(LiftModalAnimator,[{key:"show",value:function(modal,callback){callback=callback?callback:function(){},(0,_animit2["default"])(modal).saveStyle().queue({css:{transform:"translate3D(0, 100%, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}).play()}},{key:"hide",value:function(modal,callback){callback=callback?callback:function(){},(0,_animit2["default"])(modal).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 100%, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}).play()}}]),LiftModalAnimator}(_animator2["default"]);exports["default"]=LiftModalAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_util=__webpack_require__(0),_animit=(_interopRequireDefault(_util),__webpack_require__(5)),_animit2=_interopRequireDefault(_animit),IOSFadeNavigatorTransitionAnimator=function(_NavigatorTransitionA){function IOSFadeNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.4:_ref$duration;return _classCallCheck(this,IOSFadeNavigatorTransitionAnimator),_possibleConstructorReturn(this,(IOSFadeNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(IOSFadeNavigatorTransitionAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(IOSFadeNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(IOSFadeNavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){var unblock=_get(IOSFadeNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSFadeNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])([enterPage._getContentElement(),enterPage._getBackgroundElement()]).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){unblock(),callback(),done()}),(0,_animit2["default"])(enterPage._getToolbarElement()).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle())}},{key:"pop",value:function(enterPage,leavePage,callback){var unblock=_get(IOSFadeNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSFadeNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])([leavePage._getContentElement(),leavePage._getBackgroundElement()]).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:this.duration,timing:this.timing}).queue(function(done){unblock(),callback(),done()}),(0,_animit2["default"])(leavePage._getToolbarElement()).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:0},duration:this.duration,timing:this.timing}))}}]),IOSFadeNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=IOSFadeNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function");
}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),IOSLiftNavigatorTransitionAnimator=function(_NavigatorTransitionA){function IOSLiftNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(.1, .7, .1, 1)":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.4:_ref$duration;_classCallCheck(this,IOSLiftNavigatorTransitionAnimator);var _this=_possibleConstructorReturn(this,(IOSLiftNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(IOSLiftNavigatorTransitionAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.backgroundMask=_util2["default"].createElement('\n      <div style="position: absolute; width: 100%; height: 100%;\n        background: linear-gradient(black, white);"></div>\n    '),_this}return _inherits(IOSLiftNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(IOSLiftNavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove(),leavePage.parentNode.insertBefore(this.backgroundMask,leavePage);var unblock=_get(IOSLiftNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSLiftNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(0, 100%, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){_this2.backgroundMask.remove(),unblock(),callback(),done()}),(0,_animit2["default"])(leavePage).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, -10%, 0)",opacity:.9},duration:this.duration,timing:this.timing}).restoreStyle())}},{key:"pop",value:function(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove(),enterPage.parentNode.insertBefore(this.backgroundMask,enterPage);var unblock=_get(IOSLiftNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSLiftNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(0, -43px, 0)",opacity:.9},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){_this3.backgroundMask.remove(),unblock(),callback(),done()}),(0,_animit2["default"])(leavePage).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 100%, 0)"},duration:this.duration,timing:this.timing}).restoreStyle())}}]),IOSLiftNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=IOSLiftNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_iosSlideAnimator=__webpack_require__(54),_iosSlideAnimator2=_interopRequireDefault(_iosSlideAnimator),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),IOSSwipeNavigatorTransitionAnimator=function(_IOSSlideNavigatorTra){function IOSSwipeNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$duration=_ref.duration,duration=void 0===_ref$duration?.15:_ref$duration,_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay;_classCallCheck(this,IOSSwipeNavigatorTransitionAnimator);var _this=_possibleConstructorReturn(this,(IOSSwipeNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(IOSSwipeNavigatorTransitionAnimator)).call(this,{duration:duration,timing:timing,delay:delay}));return _this.durationRestore=.1,_this.swipeShadow=_util2["default"].createElement('\n      <div style="position: absolute; height: 100%; width: 12px; right: 100%; top: 0; bottom: 0; z-index: -1;\n        background: linear-gradient(to right, transparent 0, rgba(0,0,0,.04) 40%, rgba(0,0,0,.12) 80%, rgba(0,0,0,.16) 100%);"></div>\n    '),_this.isDragStart=!0,_this}return _inherits(IOSSwipeNavigatorTransitionAnimator,_IOSSlideNavigatorTra),_createClass(IOSSwipeNavigatorTransitionAnimator,[{key:"_dragStartSetup",value:function(enterPage,leavePage){this.isDragStart=!1,this.unblock=_get(IOSSwipeNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(IOSSwipeNavigatorTransitionAnimator.prototype),"block",this).call(this,leavePage),enterPage.parentElement.insertBefore(this.backgroundMask,enterPage),this.target={enter:_util2["default"].findToolbarPage(enterPage)||enterPage,leave:_util2["default"].findToolbarPage(leavePage)||leavePage},this.decomp={enter:this._decompose(this.target.enter),leave:this._decompose(this.target.leave)},this.delta=this._calculateDelta(leavePage,this.decomp.leave),this.shouldAnimateToolbar=this._shouldAnimateToolbar(this.target.enter,this.target.leave),this.shouldAnimateToolbar?(this.swipeShadow.style.top=this.decomp.leave.toolbar.offsetHeight+"px",this.target.leave.appendChild(this.swipeShadow),this._saveStyle(this.target.enter,this.target.leave)):(leavePage.appendChild(this.swipeShadow),this._saveStyle(enterPage,leavePage)),leavePage.classList.add("overflow-visible"),this.overflowElement=leavePage,this.decomp.leave.content.classList.add("content-swiping")}},{key:"translate",value:function(distance,maxWidth,enterPage,leavePage){this.isDragStart&&(this.maxWidth=maxWidth,this._dragStartSetup(enterPage,leavePage));var swipeRatio=(distance-maxWidth)/maxWidth;this.shouldAnimateToolbar?_animit2["default"].runAll((0,_animit2["default"])([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:"translate3d("+25*swipeRatio+"%, 0, 0)",opacity:1+10*swipeRatio/100}),(0,_animit2["default"])(this.decomp.enter.toolbarCenter).queue({transform:"translate3d("+this.delta.title*swipeRatio+"px, 0, 0)",opacity:1+swipeRatio}),(0,_animit2["default"])(this.decomp.enter.backButtonLabel).queue({opacity:1+10*swipeRatio/100,transform:"translate3d("+this.delta.label*swipeRatio+"px, 0, 0)"}),(0,_animit2["default"])(this.decomp.enter.other).queue({opacity:1+swipeRatio}),(0,_animit2["default"])([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background,this.swipeShadow]).queue({transform:"translate3d("+distance+"px, 0px, 0px)"}),(0,_animit2["default"])(this.decomp.leave.toolbar).queue({opacity:-1*swipeRatio}),(0,_animit2["default"])(this.decomp.leave.toolbarCenter).queue({transform:"translate3d("+125*(1+swipeRatio)+"%, 0, 0)"}),(0,_animit2["default"])(this.decomp.leave.backButtonLabel).queue({opacity:-1*swipeRatio,transform:"translate3d("+this.delta.title*(1+swipeRatio)+"px, 0, 0)"}),(0,_animit2["default"])(this.swipeShadow).queue({opacity:-1*swipeRatio})):_animit2["default"].runAll((0,_animit2["default"])(leavePage).queue({transform:"translate3d("+distance+"px, 0px, 0px)"}),(0,_animit2["default"])(enterPage).queue({transform:"translate3d("+25*swipeRatio+"%, 0, 0)",opacity:1+10*swipeRatio/100}),(0,_animit2["default"])(this.swipeShadow).queue({opacity:-1*swipeRatio}))}},{key:"restore",value:function(enterPage,leavePage,callback){var _this2=this;this.isDragStart||(this.shouldAnimateToolbar?_animit2["default"].runAll((0,_animit2["default"])([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:"translate3d(-25%, 0, 0)",opacity:.9},{timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])(this.decomp.enter.toolbarCenter).queue({transform:"translate3d(-"+this.delta.title+"px, 0, 0)",transition:"opacity "+this.durationRestore+"s linear, transform "+this.durationRestore+"s "+this.timing,opacity:0}),(0,_animit2["default"])(this.decomp.enter.backButtonLabel).queue({transform:"translate3d(-"+this.delta.label+"px, 0, 0)"},{timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])(this.decomp.enter.other).queue({opacity:0},{timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background,this.swipeShadow]).queue({transform:"translate3d(0, 0px, 0px)"},{timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])(this.decomp.leave.toolbar).queue({opacity:1},{timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])(this.decomp.leave.toolbarCenter).queue({transform:"translate3d(0, 0, 0)"},{timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])(this.decomp.leave.backButtonLabel).queue({opacity:1,transform:"translate3d(0, 0, 0)",transition:"opacity "+this.durationRestore+"s linear, transform "+this.durationRestore+"s "+this.timing}),(0,_animit2["default"])(this.swipeShadow).queue({opacity:0},{timing:this.timing,duration:this.durationRestore}).queue(function(done){_this2._reset(_this2.target.enter,_this2.target.leave),callback&&callback(),done()})):_animit2["default"].runAll((0,_animit2["default"])(enterPage).queue({css:{transform:"translate3D(-25%, 0px, 0px)",opacity:.9},timing:this.timing,duration:this.durationRestore}),(0,_animit2["default"])(leavePage).queue({css:{transform:"translate3D(0px, 0px, 0px)"},timing:this.timing,duration:this.durationRestore}).queue(function(done){_this2._reset(enterPage,leavePage),callback&&callback(),done()})))}},{key:"pop",value:function(enterPage,leavePage,callback){var _this3=this;this.isDragStart||(this.shouldAnimateToolbar?_animit2["default"].runAll((0,_animit2["default"])([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:"translate3d(0, 0, 0)",opacity:1},{timing:this.timing,duration:this.duration}),(0,_animit2["default"])(this.decomp.enter.toolbarCenter).queue({transform:"translate3d(0, 0, 0)",transition:"opacity "+this.duration+"s linear, transform "+this.duration+"s "+this.timing,opacity:1}),(0,_animit2["default"])(this.decomp.enter.backButtonLabel).queue({transform:"translate3d(0, 0, 0)"},{timing:this.timing,duration:this.duration}),(0,_animit2["default"])(this.decomp.enter.other).queue({opacity:1},{timing:this.timing,duration:this.duration}),(0,_animit2["default"])([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background]).queue({transform:"translate3d(100%, 0px, 0px)"},{timing:this.timing,duration:this.duration}),(0,_animit2["default"])(this.decomp.leave.toolbar).queue({opacity:0},{timing:this.timing,duration:this.duration}),(0,_animit2["default"])(this.decomp.leave.toolbarCenter).queue({transform:"translate3d(125%, 0, 0)"},{timing:this.timing,duration:this.duration}),(0,_animit2["default"])(this.decomp.leave.backButtonLabel).queue({opacity:0,transform:"translate3d("+this.delta.title+"px, 0, 0)",transition:"opacity "+this.duration+"s linear, transform "+this.duration+"s "+this.timing}),(0,_animit2["default"])(this.swipeShadow).queue({opacity:0,transform:"translate3d("+this.maxWidth+"px, 0px, 0px)"},{timing:this.timing,duration:this.duration}).queue(function(done){_this3._reset(_this3.target.enter,_this3.target.leave),callback&&callback(),done()})):_animit2["default"].runAll((0,_animit2["default"])(enterPage).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:this.duration,timing:this.timing}),(0,_animit2["default"])(leavePage).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:this.duration,timing:this.timing}).queue(function(done){_this3._reset(enterPage,leavePage),callback&&callback(),done()})))}},{key:"_saveStyle",value:function(){var _this4=this;this._savedStyle=new WeakMap;for(var save=function(el){return _this4._savedStyle.set(el,el.getAttribute("style"))},_len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];args.forEach(save),Object.keys(this.decomp).forEach(function(p){Object.keys(_this4.decomp[p]).forEach(function(k){(_this4.decomp[p][k]instanceof Array?_this4.decomp[p][k]:[_this4.decomp[p][k]]).forEach(save)})})}},{key:"_restoreStyle",value:function(){for(var _this5=this,restore=function(el){null===_this5._savedStyle.get(el)?el.removeAttribute("style"):el.setAttribute("style",_this5._savedStyle.get(el)),_this5._savedStyle["delete"](el)},_len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];args.forEach(restore),Object.keys(this.decomp).forEach(function(p){Object.keys(_this5.decomp[p]).forEach(function(k){(_this5.decomp[p][k]instanceof Array?_this5.decomp[p][k]:[_this5.decomp[p][k]]).forEach(restore)})})}},{key:"_reset",value:function(){this._savedStyle&&this._restoreStyle.apply(this,arguments),this.unblock&&this.unblock(),this.swipeShadow.remove(),this.backgroundMask.remove(),this.overflowElement.classList.remove("overflow-visible"),this.decomp.leave.content.classList.remove("content-swiping"),this.decomp=this.target=this.overflowElement=this._savedStyle=null,this.isDragStart=!0}}]),IOSSwipeNavigatorTransitionAnimator}(_iosSlideAnimator2["default"]);exports["default"]=IOSSwipeNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_util=__webpack_require__(0),_animit=(_interopRequireDefault(_util),__webpack_require__(5)),_animit2=_interopRequireDefault(_animit),MDFadeNavigatorTransitionAnimator=function(_NavigatorTransitionA){function MDFadeNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(0.4, 0.0, 0.2, 1)":_ref$timing,_ref$timingOnPop=_ref.timingOnPop,timingOnPop=void 0===_ref$timingOnPop?"cubic-bezier(0.4, 0.0, 1, 1)":_ref$timingOnPop,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;_classCallCheck(this,MDFadeNavigatorTransitionAnimator);var _this=_possibleConstructorReturn(this,(MDFadeNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(MDFadeNavigatorTransitionAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.timingOnPop=timingOnPop,_this}return _inherits(MDFadeNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(MDFadeNavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){var unblock=_get(MDFadeNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(MDFadeNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(0, 42px, 0)",opacity:0},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){unblock(),callback(),done()}))}},{key:"pop",value:function(enterPage,leavePage,callback){var unblock=_get(MDFadeNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(MDFadeNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(leavePage).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:0}).wait(.15).queue({css:{transform:"translate3D(0, 38px, 0)",opacity:0},duration:this.duration,timing:this.timingOnPop}).queue(function(done){unblock(),callback(),done()}))}}]),MDFadeNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=MDFadeNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),MDLiftNavigatorTransitionAnimator=function(_NavigatorTransitionA){function MDLiftNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(.1, .7, .1, 1)":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?.05:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.4:_ref$duration;_classCallCheck(this,MDLiftNavigatorTransitionAnimator);var _this=_possibleConstructorReturn(this,(MDLiftNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(MDLiftNavigatorTransitionAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.backgroundMask=_util2["default"].createElement('\n      <div style="position: absolute; width: 100%; height: 100%;\n        background-color: black;"></div>\n    '),_this}return _inherits(MDLiftNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(MDLiftNavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove(),leavePage.parentNode.insertBefore(this.backgroundMask,leavePage);var unblock=_get(MDLiftNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(MDLiftNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage),maskClear=(0,_animit2["default"])(this.backgroundMask).wait(this.delay+this.duration).queue(function(done){_this2.backgroundMask.remove(),done()});_animit2["default"].runAll(maskClear,(0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(0, 100%, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)"},duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){unblock(),callback(),done()}),(0,_animit2["default"])(leavePage).queue({css:{opacity:1},duration:0}).queue({css:{opacity:.4},duration:this.duration,timing:this.timing}))}},{key:"pop",value:function(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove(),enterPage.parentNode.insertBefore(this.backgroundMask,enterPage);var unblock=_get(MDLiftNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(MDLiftNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(this.backgroundMask).wait(this.delay+this.duration).queue(function(done){_this3.backgroundMask.remove(),done()}),(0,_animit2["default"])(enterPage).queue({css:{transform:"translate3D(0, 0, 0)",opacity:.4},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)",opacity:1},duration:this.duration,timing:this.timing}).queue(function(done){unblock(),callback(),done()}),(0,_animit2["default"])(leavePage).queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 100%, 0)"},duration:this.duration,timing:this.timing}))}}]),MDLiftNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=MDLiftNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),MDSlideNavigatorTransitionAnimator=function(_NavigatorTransitionA){function MDSlideNavigatorTransitionAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(.1, .7, .4, 1)":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.3:_ref$duration;_classCallCheck(this,MDSlideNavigatorTransitionAnimator);var _this=_possibleConstructorReturn(this,(MDSlideNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(MDSlideNavigatorTransitionAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.backgroundMask=_util2["default"].createElement('\n      <div style="position: absolute; width: 100%; height: 100%; z-index: 2;\n        background-color: black; opacity: 0;"></div>\n    '),_this.blackMaskOpacity=.4,_this}return _inherits(MDSlideNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(MDSlideNavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){var _this2=this;this.backgroundMask.remove(),leavePage.parentElement.insertBefore(this.backgroundMask,leavePage.nextSibling);var unblock=_get(MDSlideNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(MDSlideNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(this.backgroundMask).saveStyle().queue({opacity:0,transform:"translate3d(0, 0, 0)"}).wait(this.delay).queue({opacity:this.blackMaskOpacity},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){_this2.backgroundMask.remove(),done()}),(0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(100%, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0, 0, 0)"},duration:this.duration,timing:this.timing}).restoreStyle(),(0,_animit2["default"])(leavePage).saveStyle().queue({css:{transform:"translate3D(0, 0, 0)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(-45%, 0px, 0px)"},duration:this.duration,timing:this.timing}).restoreStyle().wait(.2).queue(function(done){unblock(),callback(),done()}))}},{key:"pop",value:function(enterPage,leavePage,callback){var _this3=this;this.backgroundMask.remove(),enterPage.parentNode.insertBefore(this.backgroundMask,enterPage.nextSibling);var unblock=_get(MDSlideNavigatorTransitionAnimator.prototype.__proto__||Object.getPrototypeOf(MDSlideNavigatorTransitionAnimator.prototype),"block",this).call(this,enterPage);_animit2["default"].runAll((0,_animit2["default"])(this.backgroundMask).saveStyle().queue({opacity:this.blackMaskOpacity,transform:"translate3d(0, 0, 0)"}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){_this3.backgroundMask.remove(),done()}),(0,_animit2["default"])(enterPage).saveStyle().queue({css:{transform:"translate3D(-45%, 0px, 0px)",opacity:.9},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(0px, 0px, 0px)",opacity:1},duration:this.duration,timing:this.timing}).restoreStyle(),(0,_animit2["default"])(leavePage).queue({css:{transform:"translate3D(0px, 0px, 0px)"},duration:0}).wait(this.delay).queue({css:{transform:"translate3D(100%, 0px, 0px)"},duration:this.duration,timing:this.timing}).wait(.2).queue(function(done){unblock(),callback(),done()}))}}]),MDSlideNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=MDSlideNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){
"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animator=__webpack_require__(13),_animator2=_interopRequireDefault(_animator),NoneNavigatorTransitionAnimator=function(_NavigatorTransitionA){function NoneNavigatorTransitionAnimator(options){return _classCallCheck(this,NoneNavigatorTransitionAnimator),_possibleConstructorReturn(this,(NoneNavigatorTransitionAnimator.__proto__||Object.getPrototypeOf(NoneNavigatorTransitionAnimator)).call(this,options))}return _inherits(NoneNavigatorTransitionAnimator,_NavigatorTransitionA),_createClass(NoneNavigatorTransitionAnimator,[{key:"push",value:function(enterPage,leavePage,callback){callback()}},{key:"pop",value:function(enterPage,leavePage,callback){callback()}}]),NoneNavigatorTransitionAnimator}(_animator2["default"]);exports["default"]=NoneNavigatorTransitionAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.IOSFadePopoverAnimator=exports.MDFadePopoverAnimator=exports.PopoverAnimator=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),PopoverAnimator=exports.PopoverAnimator=function(_BaseAnimator){function PopoverAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"cubic-bezier(.1, .7, .4, 1)":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.2:_ref$duration;return _classCallCheck(this,PopoverAnimator),_possibleConstructorReturn(this,(PopoverAnimator.__proto__||Object.getPrototypeOf(PopoverAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(PopoverAnimator,_BaseAnimator),_createClass(PopoverAnimator,[{key:"show",value:function(popover,callback){callback()}},{key:"hide",value:function(popover,callback){callback()}},{key:"_animate",value:function(element,_ref2){var from=_ref2.from,to=_ref2.to,options=_ref2.options,callback=_ref2.callback,_ref2$restore=_ref2.restore,restore=void 0!==_ref2$restore&&_ref2$restore,animation=_ref2.animation;return options=_util2["default"].extend({},this.options,options),animation&&(from=animation.from,to=animation.to),animation=(0,_animit2["default"])(element),restore&&(animation=animation.saveStyle()),animation=animation.queue(from).wait(this.delay).queue({css:to,duration:this.duration,timing:this.timing}),restore&&(animation=animation.restoreStyle()),callback&&(animation=animation.queue(function(done){callback(),done()})),animation}},{key:"_animateAll",value:function(element,animations){var _this2=this;Object.keys(animations).forEach(function(key){return _this2._animate(element[key],animations[key]).play()})}}]),PopoverAnimator}(_baseAnimator2["default"]),fade={out:{from:{opacity:1},to:{opacity:0}},"in":{from:{opacity:0},to:{opacity:1}}},MDFadePopoverAnimator=exports.MDFadePopoverAnimator=function(_PopoverAnimator){function MDFadePopoverAnimator(){return _classCallCheck(this,MDFadePopoverAnimator),_possibleConstructorReturn(this,(MDFadePopoverAnimator.__proto__||Object.getPrototypeOf(MDFadePopoverAnimator)).apply(this,arguments))}return _inherits(MDFadePopoverAnimator,_PopoverAnimator),_createClass(MDFadePopoverAnimator,[{key:"show",value:function(popover,callback){this._animateAll(popover,{_mask:fade["in"],_popover:{animation:fade["in"],restore:!0,callback:callback}})}},{key:"hide",value:function(popover,callback){this._animateAll(popover,{_mask:fade.out,_popover:{animation:fade.out,restore:!0,callback:callback}})}}]),MDFadePopoverAnimator}(PopoverAnimator);exports.IOSFadePopoverAnimator=function(_MDFadePopoverAnimato){function IOSFadePopoverAnimator(){return _classCallCheck(this,IOSFadePopoverAnimator),_possibleConstructorReturn(this,(IOSFadePopoverAnimator.__proto__||Object.getPrototypeOf(IOSFadePopoverAnimator)).apply(this,arguments))}return _inherits(IOSFadePopoverAnimator,_MDFadePopoverAnimato),_createClass(IOSFadePopoverAnimator,[{key:"show",value:function(popover,callback){this._animateAll(popover,{_mask:fade["in"],_popover:{from:{transform:"scale3d(1.3, 1.3, 1.0)",opacity:0},to:{transform:"scale3d(1.0, 1.0,  1.0)",opacity:1},restore:!0,callback:callback}})}}]),IOSFadePopoverAnimator}(MDFadePopoverAnimator)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_internal=__webpack_require__(7),_internal2=_interopRequireDefault(_internal),AnimatorCSS=function(){function AnimatorCSS(){_classCallCheck(this,AnimatorCSS),this._queue=[],this._index=0}return _createClass(AnimatorCSS,[{key:"animate",value:function(el,final){var duration=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,start=(new Date).getTime(),initial={},stopped=!1,next=!1,timeout=!1,properties=Object.keys(final),updateStyles=function(){var s=window.getComputedStyle(el);properties.forEach(s.getPropertyValue.bind(s)),s=el.offsetHeight},result={stop:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};timeout&&clearTimeout(timeout);var k=Math.min(1,((new Date).getTime()-start)/duration);return properties.forEach(function(i){el.style[i]=(1-k)*initial[i]+k*final[i]+("opacity"==i?"":"px")}),el.style.transitionDuration="0s",options.stopNext?next=!1:stopped||(stopped=!0,next&&next()),result},then:function(cb){return next=cb,stopped&&next&&next(),result},speed:function(newDuration){if(_internal2["default"].config.animationsDisabled&&(newDuration=0),!stopped){timeout&&clearTimeout(timeout);var passed=(new Date).getTime()-start,k=passed/duration,remaining=newDuration*(1-k);properties.forEach(function(i){el.style[i]=(1-k)*initial[i]+k*final[i]+("opacity"==i?"":"px")}),updateStyles(),start=el.speedUpTime,duration=remaining,el.style.transitionDuration=duration/1e3+"s",properties.forEach(function(i){el.style[i]=final[i]+("opacity"==i?"":"px")}),timeout=setTimeout(result.stop,remaining)}return result},finish:function(){var milliseconds=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,k=((new Date).getTime()-start)/duration;return result.speed(milliseconds/(1-k)),result}};if(el.hasAttribute("disabled")||stopped||_internal2["default"].config.animationsDisabled)return result;var style=window.getComputedStyle(el);return properties.forEach(function(e){var v=parseFloat(style.getPropertyValue(e));initial[e]=isNaN(v)?0:v}),stopped||(el.style.transitionProperty=properties.join(","),el.style.transitionDuration=duration/1e3+"s",properties.forEach(function(e){el.style[e]=final[e]+("opacity"==e?"":"px")})),timeout=setTimeout(result.stop,duration),this._onStopAnimations(el,result.stop),result}}]),_createClass(AnimatorCSS,[{key:"_onStopAnimations",value:function(el,listener){var queue=this._queue,i=this._index++;queue[el]=queue[el]||[],queue[el][i]=function(options){return delete queue[el][i],queue[el]&&0==queue[el].length&&delete queue[el],listener(options)}}},{key:"stopAnimations",value:function(el){var _this=this,options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Array.isArray(el)?el.forEach(function(el){_this.stopAnimations(el,options)}):void(this._queue[el]||[]).forEach(function(e){e(options||{})})}},{key:"stopAll",value:function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.stopAnimations(Object.keys(this._queue),options)}},{key:"fade",value:function(el){var duration=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return this.animate(el,{opacity:0},duration)}}]),AnimatorCSS}();exports["default"]=AnimatorCSS,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(31),_animator2=_interopRequireDefault(_animator),OverlaySplitterAnimator=function(_SplitterAnimator){function OverlaySplitterAnimator(){return _classCallCheck(this,OverlaySplitterAnimator),_possibleConstructorReturn(this,(OverlaySplitterAnimator.__proto__||Object.getPrototypeOf(OverlaySplitterAnimator)).apply(this,arguments))}return _inherits(OverlaySplitterAnimator,_SplitterAnimator),_createClass(OverlaySplitterAnimator,[{key:"translate",value:function(distance){this._mask.style.display="block",(0,_animit2["default"])(this._side).queue({transform:"translate3d("+(this.minus+distance)+"px, 0px, 0px)"}).play()}},{key:"open",value:function(done){_animit2["default"].runAll((0,_animit2["default"])(this._side).wait(this.delay).queue({transform:"translate3d("+this.minus+"100%, 0px, 0px)"},{duration:this.duration,timing:this.timing}).queue(function(callback){callback(),done&&done()}),(0,_animit2["default"])(this._mask).wait(this.delay).queue({display:"block"}).queue({opacity:"1"},{duration:this.duration,timing:"linear"}))}},{key:"close",value:function(done){_animit2["default"].runAll((0,_animit2["default"])(this._side).wait(this.delay).queue({transform:"translate3d(0px, 0px, 0px)"},{duration:this.duration,timing:this.timing}).queue(function(callback){done&&done(),callback()}),(0,_animit2["default"])(this._mask).wait(this.delay).queue({opacity:"0"},{duration:this.duration,timing:"linear"}).queue({display:"none"}))}}]),OverlaySplitterAnimator}(_animator2["default"]);exports["default"]=OverlaySplitterAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(31),_animator2=_interopRequireDefault(_animator),PushSplitterAnimator=function(_SplitterAnimator){function PushSplitterAnimator(){return _classCallCheck(this,PushSplitterAnimator),_possibleConstructorReturn(this,(PushSplitterAnimator.__proto__||Object.getPrototypeOf(PushSplitterAnimator)).apply(this,arguments))}return _inherits(PushSplitterAnimator,_SplitterAnimator),_createClass(PushSplitterAnimator,[{key:"_getSlidingElements",value:function(){var slidingElements=[this._side,this._content];return this._oppositeSide&&"split"===this._oppositeSide.mode&&slidingElements.push(this._oppositeSide),slidingElements}},{key:"translate",value:function(distance){this._slidingElements||(this._slidingElements=this._getSlidingElements()),this._mask.style.display="block",(0,_animit2["default"])(this._slidingElements).queue({transform:"translate3d("+(this.minus+distance)+"px, 0px, 0px)"}).play()}},{key:"open",value:function(done){var _this2=this,max=this._side.offsetWidth;this._slidingElements=this._getSlidingElements(),_animit2["default"].runAll((0,_animit2["default"])(this._slidingElements).wait(this.delay).queue({transform:"translate3d("+(this.minus+max)+"px, 0px, 0px)"},{duration:this.duration,timing:this.timing}).queue(function(callback){_this2._slidingElements=null,callback(),done&&done()}),(0,_animit2["default"])(this._mask).wait(this.delay).queue({display:"block"}))}},{key:"close",value:function(done){var _this3=this;this._slidingElements=this._getSlidingElements(),_animit2["default"].runAll((0,_animit2["default"])(this._slidingElements).wait(this.delay).queue({transform:"translate3d(0px, 0px, 0px)"},{duration:this.duration,timing:this.timing}).queue(function(callback){_this3._slidingElements=null,_get(PushSplitterAnimator.prototype.__proto__||Object.getPrototypeOf(PushSplitterAnimator.prototype),"clearTransition",_this3).call(_this3),done&&done(),callback()}),(0,_animit2["default"])(this._mask).wait(this.delay).queue({display:"none"}))}}]),PushSplitterAnimator}(_animator2["default"]);exports["default"]=PushSplitterAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(31),_animator2=_interopRequireDefault(_animator),RevealSplitterAnimator=function(_SplitterAnimator){function RevealSplitterAnimator(){return _classCallCheck(this,RevealSplitterAnimator),_possibleConstructorReturn(this,(RevealSplitterAnimator.__proto__||Object.getPrototypeOf(RevealSplitterAnimator)).apply(this,arguments))}return _inherits(RevealSplitterAnimator,_SplitterAnimator),_createClass(RevealSplitterAnimator,[{key:"_getSlidingElements",value:function(){var slidingElements=[this._content,this._mask];return this._oppositeSide&&"split"===this._oppositeSide.mode&&slidingElements.push(this._oppositeSide),slidingElements}},{key:"activate",value:function(sideElement){_get(RevealSplitterAnimator.prototype.__proto__||Object.getPrototypeOf(RevealSplitterAnimator.prototype),"activate",this).call(this,sideElement),this.maxWidth=this._getMaxWidth(),"collapse"===sideElement.mode&&this._setStyles(sideElement)}},{key:"deactivate",value:function(){this._side&&this._unsetStyles(this._side),_get(RevealSplitterAnimator.prototype.__proto__||Object.getPrototypeOf(RevealSplitterAnimator.prototype),"deactivate",this).call(this)}},{key:"_setStyles",value:function(sideElement){sideElement.style.left="right"===sideElement.side?"auto":0,sideElement.style.right="right"===sideElement.side?0:"auto",sideElement.style.zIndex=0,sideElement.style.backgroundColor="black",sideElement.style.transform=this._generateBehindPageStyle(0).container.transform,sideElement.style.display="none";var splitter=sideElement.parentElement;(0,_contentReady2["default"])(splitter,function(){splitter.content&&(splitter.content.style.boxShadow="0 0 12px 0 rgba(0, 0, 0, 0.2)")})}},{key:"_unsetStyles",value:function(sideElement){sideElement.style.left=sideElement.style.right=sideElement.style.zIndex=sideElement.style.backgroundColor=sideElement.style.display="",sideElement._content&&(sideElement._content.style.opacity=""),this._oppositeSide&&"split"!==this._oppositeSide.mode||sideElement.parentElement.content&&(sideElement.parentElement.content.style.boxShadow="")}},{key:"_generateBehindPageStyle",value:function(distance){var max=this.maxWidth,behindDistance=(distance-max)/max*10;behindDistance=isNaN(behindDistance)?0:Math.max(Math.min(behindDistance,0),-10);var behindTransform="translate3d("+(this.minus?-1:1)*behindDistance+"%, 0, 0)",opacity=1+behindDistance/100;return{content:{opacity:opacity},container:{transform:behindTransform}}}},{key:"translate",value:function(distance){this._side.style.display="",this._side.style.zIndex=1,this.maxWidth=this.maxWidth||this._getMaxWidth();var menuStyle=this._generateBehindPageStyle(Math.min(distance,this.maxWidth));this._slidingElements||(this._slidingElements=this._getSlidingElements()),this._mask.style.display="block",_animit2["default"].runAll((0,_animit2["default"])(this._slidingElements).queue({transform:"translate3d("+(this.minus+distance)+"px, 0px, 0px)"}),(0,_animit2["default"])(this._side._content).queue(menuStyle.content),(0,_animit2["default"])(this._side).queue(menuStyle.container))}},{key:"open",value:function(done){var _this2=this;this._side.style.display="",this._side.style.zIndex=1,this.maxWidth=this.maxWidth||this._getMaxWidth();var menuStyle=this._generateBehindPageStyle(this.maxWidth);this._slidingElements=this._getSlidingElements(),_animit2["default"].runAll((0,_animit2["default"])(this._slidingElements).wait(this.delay).queue({transform:"translate3d("+(this.minus+this.maxWidth)+"px, 0px, 0px)"},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(this._mask).wait(this.delay).queue({display:"block"}),(0,_animit2["default"])(this._side._content).wait(this.delay).queue(menuStyle.content,{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(this._side).wait(this.delay).queue(menuStyle.container,{duration:this.duration,timing:this.timing}).queue(function(callback){_this2._slidingElements=null,callback(),done&&done()}))}},{key:"close",value:function(done){var _this3=this,menuStyle=this._generateBehindPageStyle(0);this._slidingElements=this._getSlidingElements(),_animit2["default"].runAll((0,_animit2["default"])(this._slidingElements).wait(this.delay).queue({transform:"translate3d(0px, 0px, 0px)"},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(this._mask).wait(this.delay).queue({display:"none"}),(0,_animit2["default"])(this._side._content).wait(this.delay).queue(menuStyle.content,{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(this._side).wait(this.delay).queue(menuStyle.container,{duration:this.duration,timing:this.timing}).queue(function(callback){_this3._slidingElements=null,_this3._side.style.zIndex=0,_this3._side.style.display="none",_this3._side._content.style.opacity="",done&&done(),callback()}))}},{key:"_getMaxWidth",value:function(){return this._side.offsetWidth}}]),RevealSplitterAnimator}(_animator2["default"]);exports["default"]=RevealSplitterAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.TabbarSlideAnimator=exports.TabbarFadeAnimator=exports.TabbarNoneAnimator=exports.TabbarAnimator=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_animit=(_interopRequireDefault(_util),__webpack_require__(5)),_animit2=_interopRequireDefault(_animit),_baseAnimator=__webpack_require__(10),_baseAnimator2=_interopRequireDefault(_baseAnimator),TabbarAnimator=exports.TabbarAnimator=function(_BaseAnimator){function TabbarAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.4:_ref$duration,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay;return _classCallCheck(this,TabbarAnimator),_possibleConstructorReturn(this,(TabbarAnimator.__proto__||Object.getPrototypeOf(TabbarAnimator)).call(this,{timing:timing,duration:duration,delay:delay}))}return _inherits(TabbarAnimator,_BaseAnimator),_createClass(TabbarAnimator,[{key:"apply",value:function(enterPage,leavePage,enterPageIndex,leavePageIndex,done){throw new Error("This method must be implemented.")}}]),TabbarAnimator}(_baseAnimator2["default"]);exports.TabbarNoneAnimator=function(_TabbarAnimator){function TabbarNoneAnimator(){return _classCallCheck(this,TabbarNoneAnimator),_possibleConstructorReturn(this,(TabbarNoneAnimator.__proto__||Object.getPrototypeOf(TabbarNoneAnimator)).apply(this,arguments))}return _inherits(TabbarNoneAnimator,_TabbarAnimator),_createClass(TabbarNoneAnimator,[{key:"apply",value:function(enterPage,leavePage,enterIndex,leaveIndex,done){setTimeout(done,1e3/60)}}]),TabbarNoneAnimator}(TabbarAnimator),exports.TabbarFadeAnimator=function(_TabbarAnimator2){function TabbarFadeAnimator(){return _classCallCheck(this,TabbarFadeAnimator),_possibleConstructorReturn(this,(TabbarFadeAnimator.__proto__||Object.getPrototypeOf(TabbarFadeAnimator)).apply(this,arguments))}return _inherits(TabbarFadeAnimator,_TabbarAnimator2),_createClass(TabbarFadeAnimator,[{key:"apply",value:function(enterPage,leavePage,enterPageIndex,leavePageIndex,done){_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({transform:"translate3D(0, 0, 0)",opacity:0}).wait(this.delay).queue({transform:"translate3D(0, 0, 0)",opacity:1},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(callback){done(),callback()}),(0,_animit2["default"])(leavePage).queue({transform:"translate3D(0, 0, 0)",opacity:1}).wait(this.delay).queue({transform:"translate3D(0, 0, 0)",opacity:0},{duration:this.duration,timing:this.timing}))}}]),TabbarFadeAnimator}(TabbarAnimator),exports.TabbarSlideAnimator=function(_TabbarAnimator3){function TabbarSlideAnimator(){var _ref2=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref2$timing=_ref2.timing,timing=void 0===_ref2$timing?"ease-in":_ref2$timing,_ref2$duration=_ref2.duration,duration=void 0===_ref2$duration?.15:_ref2$duration,_ref2$delay=_ref2.delay,delay=void 0===_ref2$delay?0:_ref2$delay;return _classCallCheck(this,TabbarSlideAnimator),_possibleConstructorReturn(this,(TabbarSlideAnimator.__proto__||Object.getPrototypeOf(TabbarSlideAnimator)).call(this,{timing:timing,duration:duration,delay:delay}))}return _inherits(TabbarSlideAnimator,_TabbarAnimator3),_createClass(TabbarSlideAnimator,[{key:"apply",value:function(enterPage,leavePage,enterIndex,leaveIndex,done){var sgn=enterIndex>leaveIndex;_animit2["default"].runAll((0,_animit2["default"])(enterPage).saveStyle().queue({transform:"translate3D("+(sgn?"":"-")+"100%, 0, 0)"}).wait(this.delay).queue({transform:"translate3D(0, 0, 0)"},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(callback){done(),callback()}),(0,_animit2["default"])(leavePage).queue({transform:"translate3D(0, 0, 0)"}).wait(this.delay).queue({transform:"translate3D("+(sgn?"-":"")+"100%, 0, 0)"},{duration:this.duration,timing:this.timing}))}}]),TabbarSlideAnimator}(TabbarAnimator)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,
descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_animator=__webpack_require__(25),_animator2=_interopRequireDefault(_animator),AscendToastAnimator=function(_ToastAnimator){function AscendToastAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"ease":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.25:_ref$duration;_classCallCheck(this,AscendToastAnimator);var _this=_possibleConstructorReturn(this,(AscendToastAnimator.__proto__||Object.getPrototypeOf(AscendToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.messageDelay=.4*_this.duration+_this.delay,_this.ascension=_platform2["default"].isAndroid()?48:64,_this}return _inherits(AscendToastAnimator,_ToastAnimator),_createClass(AscendToastAnimator,[{key:"show",value:function(toast,callback){toast=toast._toast,_util2["default"].globals.fabOffset=this.ascension,_animit2["default"].runAll((0,_animit2["default"])(toast).saveStyle().queue({transform:"translate3d(0, "+this.ascension+"px, 0)"}).wait(this.delay).queue({transform:"translate3d(0, 0, 0)"},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}),(0,_animit2["default"])(this._getFabs()).wait(this.delay).queue({transform:"translate3d(0, -"+this.ascension+"px, 0) scale(1)"},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(_util2["default"].arrayFrom(toast.children)).saveStyle().queue({opacity:0}).wait(this.messageDelay).queue({opacity:1},{duration:this.duration,timing:this.timing}).restoreStyle())}},{key:"hide",value:function(toast,callback){toast=toast._toast,_util2["default"].globals.fabOffset=0,_animit2["default"].runAll((0,_animit2["default"])(toast).saveStyle().queue({transform:"translate3d(0, 0, 0)"}).wait(this.delay).queue({transform:"translate3d(0, "+this.ascension+"px, 0)"},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}),(0,_animit2["default"])(this._getFabs()).wait(this.delay).queue({transform:"translate3d(0, 0, 0) scale(1)"},{duration:this.duration,timing:this.timing}),(0,_animit2["default"])(_util2["default"].arrayFrom(toast.children)).saveStyle().queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}).restoreStyle())}},{key:"_getFabs",value:function(){return _util2["default"].arrayFrom(document.querySelectorAll("ons-fab[position~=bottom], ons-speed-dial[position~=bottom]")).filter(function(fab){return fab.visible})}}]),AscendToastAnimator}(_animator2["default"]);exports["default"]=AscendToastAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_animit=__webpack_require__(5),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(25),_animator2=_interopRequireDefault(_animator),FadeToastAnimator=function(_ToastAnimator){function FadeToastAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"linear":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.3:_ref$duration;return _classCallCheck(this,FadeToastAnimator),_possibleConstructorReturn(this,(FadeToastAnimator.__proto__||Object.getPrototypeOf(FadeToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(FadeToastAnimator,_ToastAnimator),_createClass(FadeToastAnimator,[{key:"show",value:function(toast,callback){callback=callback?callback:function(){},(0,_animit2["default"])(toast).saveStyle().queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}).play()}},{key:"hide",value:function(toast,callback){callback=callback?callback:function(){},(0,_animit2["default"])(toast).saveStyle().queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback(),done()}).play()}}]),FadeToastAnimator}(_animator2["default"]);exports["default"]=FadeToastAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_animit=(_interopRequireDefault(_util),__webpack_require__(5)),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(25),_animator2=_interopRequireDefault(_animator),FallToastAnimator=function(_ToastAnimator){function FallToastAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"ease":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.35:_ref$duration;return _classCallCheck(this,FallToastAnimator),_possibleConstructorReturn(this,(FallToastAnimator.__proto__||Object.getPrototypeOf(FallToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}))}return _inherits(FallToastAnimator,_ToastAnimator),_createClass(FallToastAnimator,[{key:"show",value:function(toast,callback){toast=toast._toast,this._updatePosition(toast),_animit2["default"].runAll((0,_animit2["default"])(toast).saveStyle().queue({transform:"translate3d(0, -100%, 0)",opacity:0}).wait(this.delay).queue({transform:"translate3d(0, 0, 0)",opacity:1},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}},{key:"hide",value:function(toast,callback){var _this2=this;toast=toast._toast,this._updatePosition(toast),_animit2["default"].runAll((0,_animit2["default"])(toast).saveStyle().queue({transform:"translate3d(0, 0, 0)",opacity:1}).wait(this.delay).queue({transform:"translate3d(0, -100%, 0)",opacity:0},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){_this2._updatePosition(toast,!0),callback&&callback(),done()}))}},{key:"_updatePosition",value:function(toast,cleanUp){0!==parseInt(toast.style.top,10)&&(toast.style.top=0,toast.style.bottom="initial")}}]),FallToastAnimator}(_animator2["default"]);exports["default"]=FallToastAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_animit=(_interopRequireDefault(_util),__webpack_require__(5)),_animit2=_interopRequireDefault(_animit),_animator=__webpack_require__(25),_animator2=_interopRequireDefault(_animator),LiftToastAnimator=function(_ToastAnimator){function LiftToastAnimator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$timing=_ref.timing,timing=void 0===_ref$timing?"ease":_ref$timing,_ref$delay=_ref.delay,delay=void 0===_ref$delay?0:_ref$delay,_ref$duration=_ref.duration,duration=void 0===_ref$duration?.35:_ref$duration;_classCallCheck(this,LiftToastAnimator);var _this=_possibleConstructorReturn(this,(LiftToastAnimator.__proto__||Object.getPrototypeOf(LiftToastAnimator)).call(this,{timing:timing,delay:delay,duration:duration}));return _this.bodyHeight=document.body.clientHeight,_this}return _inherits(LiftToastAnimator,_ToastAnimator),_createClass(LiftToastAnimator,[{key:"show",value:function(toast,callback){toast=toast._toast,_animit2["default"].runAll((0,_animit2["default"])(toast).saveStyle().queue({transform:"translate3d(0, 100%, 0)",opacity:0}).wait(this.delay).queue({transform:"translate3d(0, 0, 0)",opacity:1},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}},{key:"hide",value:function(toast,callback){toast=toast._toast,_animit2["default"].runAll((0,_animit2["default"])(toast).saveStyle().queue({transform:"translate3d(0, 0, 0)",opacity:1}).wait(this.delay).queue({transform:"translate3d(0, 100%, 0)",opacity:0},{duration:this.duration,timing:this.timing}).restoreStyle().queue(function(done){callback&&callback(),done()}))}},{key:"_updatePosition",value:function(toast){0===parseInt(toast.style.top,10)&&(toast.style.top=toast.style.bottom="")}}]),LiftToastAnimator}(_animator2["default"]);exports["default"]=LiftToastAnimator,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _util=__webpack_require__(0),_util2=_interopRequireDefault(_util),styler=function styler(element,style){return styler.css.apply(styler,arguments)};styler.css=function(element,styles){var keys=Object.keys(styles);return keys.forEach(function(key){key in element.style?element.style[key]=styles[key]:styler._prefix(key)in element.style?element.style[styler._prefix(key)]=styles[key]:_util2["default"].warn("No such style property: "+key)}),element},styler._prefix=function(){var styles=window.getComputedStyle(document.documentElement,""),prefix=(Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/)||""===styles.OLink&&["","o"])[1];return function(name){return prefix+name.substr(0,1).toUpperCase()+name.substr(1)}}(),styler.clear=function(element){styler._clear(element)},styler._clear=function(element){for(var len=element.style.length,style=element.style,keys=[],i=0;i<len;i++)keys.push(style[i]);keys.forEach(function(key){style[key]=""})},exports["default"]=styler,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),checkOptions=function(options){if(!(Object.hasOwnProperty.call(options,"buttons")&&options.buttons instanceof Array))throw new Error('"options.buttons" must be an instance of Array.');if(Object.hasOwnProperty.call(options,"callback")&&!(options.callback instanceof Function))throw new Error('"options.callback" must be an instance of Function.');if(Object.hasOwnProperty.call(options,"compile")&&!(options.compile instanceof Function))throw new Error('"options.compile" must be an instance of Function.');if(Object.hasOwnProperty.call(options,"destroy")&&!(options.destroy instanceof Function))throw new Error('"options.destroy" must be an instance of Function.')};exports["default"]=function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};checkOptions(options);var actionSheet=_util2["default"].createElement("\n    <ons-action-sheet\n      "+(options.title?'title="'+options.title+'"':"")+"\n      "+(options.cancelable?"cancelable":"")+"\n      "+(options.modifier?'modifier="'+options.modifier+'"':"")+"\n      "+(options.maskColor?'mask-color="'+options.maskColor+'"':"")+"\n      "+(options.id?'id="'+options.id+'"':"")+"\n      "+(options["class"]?'class="'+options["class"]+'"':"")+'\n    >\n      <div class="action-sheet"></div>\n    </ons-action-sheet>\n  '),deferred=_util2["default"].defer(),resolver=function resolver(event){var index=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;actionSheet&&(options.destroy&&options.destroy(actionSheet),actionSheet.removeEventListener("dialog-cancel",resolver,!1),actionSheet.remove(),actionSheet=null,options.callback&&options.callback(index),deferred.resolve(index))};actionSheet.addEventListener("dialog-cancel",resolver,!1);var buttons=document.createDocumentFragment();return options.buttons.forEach(function(item,index){var buttonOptions="string"==typeof item?{label:item}:_extends({},item);options.destructive===index&&(buttonOptions.modifier=(buttonOptions.modifier||"")+" destructive");var button=_util2["default"].createElement("\n      <ons-action-sheet-button\n        "+(buttonOptions.icon?'icon="'+buttonOptions.icon+'"':"")+"\n        "+(buttonOptions.modifier?'modifier="'+buttonOptions.modifier+'"':"")+"\n      >\n        "+buttonOptions.label+"\n      </ons-action-sheet-button>\n    ");button.onclick=function(event){return actionSheet.hide().then(function(){return resolver(event,index)})},buttons.appendChild(button)}),_util2["default"].findChild(actionSheet,".action-sheet").appendChild(buttons),document.body.appendChild(actionSheet),options.compile&&options.compile(el.dialog),setImmediate(function(){return actionSheet.show({animation:options.animation,animationOptions:options.animationOptions})}),deferred.promise},module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_platform=__webpack_require__(6),_platform2=_interopRequireDefault(_platform),_pageAttributeExpression=__webpack_require__(58),_pageAttributeExpression2=_interopRequireDefault(_pageAttributeExpression),internal={};internal.config={autoStatusBarFill:!0,animationsDisabled:!1,warningsDisabled:!1},internal.nullElement=window.document.createElement("div"),internal.isEnabledAutoStatusBarFill=function(){return!!internal.config.autoStatusBarFill},internal.normalizePageHTML=function(html){return(""+html).trim()},internal.waitDOMContentLoaded=function(callback){"loading"===window.document.readyState||"uninitialized"==window.document.readyState?window.document.addEventListener("DOMContentLoaded",callback):setImmediate(callback)},internal.autoStatusBarFill=function(action){var onReady=function onReady(){internal.shouldFillStatusBar()&&action(),document.removeEventListener("deviceready",onReady),document.removeEventListener("DOMContentLoaded",onReady)};"object"===("undefined"==typeof device?"undefined":_typeof(device))?document.addEventListener("deviceready",onReady):["complete","interactive"].indexOf(document.readyState)===-1?document.addEventListener("DOMContentLoaded",function(){onReady()}):onReady()},internal.shouldFillStatusBar=function(){return internal.isEnabledAutoStatusBarFill()&&_platform2["default"].isWebView()&&_platform2["default"].isIOS7above()},internal.templateStore={_storage:{},get:function(key){return internal.templateStore._storage[key]||null},set:function(key,template){internal.templateStore._storage[key]=template}},window.document.addEventListener("_templateloaded",function(e){"ons-template"===e.target.nodeName.toLowerCase()&&internal.templateStore.set(e.templateId,e.template)},!1),window.document.addEventListener("DOMContentLoaded",function(){function register(query){for(var templates=window.document.querySelectorAll(query),i=0;i<templates.length;i++)internal.templateStore.set(templates[i].getAttribute("id"),templates[i].textContent||templates[i].content)}register('script[type="text/ons-template"]'),register('script[type="text/template"]'),register('script[type="text/ng-template"]'),register("template")},!1),internal.getTemplateHTMLAsync=function(page){return new Promise(function(resolve,reject){setImmediate(function(){var cache=internal.templateStore.get(page);if(cache){if(cache instanceof DocumentFragment)return resolve(cache);var html="string"==typeof cache?cache:cache[1];return resolve(internal.normalizePageHTML(html))}var local=window.document.getElementById(page);if(local){var _html=local.textContent||local.content;return resolve(_html)}var xhr=new XMLHttpRequest;xhr.open("GET",page,!0),xhr.onload=function(){var html=xhr.responseText;if(xhr.status>=400&&xhr.status<600)reject(html);else{var fragment=_util2["default"].createFragment(html);internal.templateStore.set(page,fragment),resolve(fragment)}},xhr.onerror=function(){throw new Error("The page is not found: "+page)},xhr.send(null)})})},internal.getPageHTMLAsync=function(page){var pages=_pageAttributeExpression2["default"].evaluate(page),getPage=function getPage(page){return"string"!=typeof page?Promise.reject("Must specify a page."):internal.getTemplateHTMLAsync(page)["catch"](function(error){return 0===pages.length?Promise.reject(error):getPage(pages.shift())})};return getPage(pages.shift())},exports["default"]=internal,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_gestureDetector=__webpack_require__(14),_gestureDetector2=_interopRequireDefault(_gestureDetector),widthToPx=function(width){var _ref=[parseInt(width,10),/px/.test(width)],value=_ref[0],px=_ref[1];return px?value:Math.round(document.body.offsetWidth*value/100)},SwipeReveal=function(){function SwipeReveal(params){var _this=this;_classCallCheck(this,SwipeReveal),this.element=params.element,this.elementHandler=params.elementHandler||params.element,this.animator=params.animator,this.getThreshold=params.getThreshold,this.ignoreSwipe=params.ignoreSwipe,this.getAnimationElements=params.getAnimationElements,this.onDragCallback=params.onDrag,this.swipeMax=params.swipeMax,this.swipeMin=params.swipeMin||function(){var _animator;return(_animator=_this.animator).restore.apply(_animator,_toConsumableArray(_this.getAnimationElements()))},this.swipeMid=params.swipeMid||function(){var _animator2;return(_animator2=_this.animator).translate.apply(_animator2,[_this._distance,_this._width].concat(_toConsumableArray(_this.getAnimationElements())))},this.side=params.side||"left",this.boundHandleGesture=this.handleGesture.bind(this)}return _createClass(SwipeReveal,[{key:"update",value:function(){var swipeable=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.element.hasAttribute("swipeable");this.gestureDetector||(this.gestureDetector=new _gestureDetector2["default"](this.elementHandler,{dragMinDistance:1}));var action=swipeable?"on":"off";this.gestureDetector[action]("drag dragstart dragend",this.boundHandleGesture)}},{key:"handleGesture",value:function(e){e.gesture&&("dragstart"===e.type?this.onDragStart(e):this._ignoreDrag||("dragend"===e.type?this.onDragEnd(e):this.onDrag(e)))}},{key:"onDragStart",value:function(event){var scrolling=!/left|right/.test(event.gesture.direction),distance="left"===this.side?event.gesture.center.clientX:window.innerWidth-event.gesture.center.clientX;this._ignoreDrag=scrolling||event.consumed||this.ignoreSwipe(event,distance),this._ignoreDrag||(event.consume&&event.consume(),event.consumed=!0,this._width=widthToPx(this.element._width||"100%"),this._startDistance=this._distance=0,_util2["default"].skipContentScroll(event.gesture))}},{key:"onDrag",value:function(event){event.stopPropagation(),event.gesture.preventDefault();var delta="left"===this.side?event.gesture.deltaX:-event.gesture.deltaX,distance=Math.max(0,Math.min(this._width,this._startDistance+delta));distance!==this._distance&&(this._distance=distance,this.swipeMid(this._distance,this._width),this.onDragCallback&&this.onDragCallback())}},{key:"onDragEnd",value:function(event){event.stopPropagation();var direction=event.gesture.interimDirection,isSwipeMax=this.side!==direction&&this._distance>this._width*this.getThreshold();isSwipeMax?this.swipeMax(this.animator):this.swipeMin(this.animator)}},{key:"dispose",value:function(){this.gestureDetector&&this.gestureDetector.dispose(),this.gestureDetector=this.element=this.elementHandler=this.animator=null}}]),SwipeReveal}();exports["default"]=SwipeReveal,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _util=__webpack_require__(0),_util2=_interopRequireDefault(_util);exports["default"]={add:function(element){for(var _len=arguments.length,modifiers=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)modifiers[_key-1]=arguments[_key];return modifiers.forEach(function(modifier){return _util2["default"].addModifier(element,modifier)})},remove:function(element){for(var _len2=arguments.length,modifiers=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)modifiers[_key2-1]=arguments[_key2];return modifiers.forEach(function(modifier){return _util2["default"].removeModifier(element,modifier)})},contains:_util2["default"].hasModifier,toggle:_util2["default"].toggleModifier},module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_util=__webpack_require__(0),_util2=_interopRequireDefault(_util),_contentReady=__webpack_require__(2),_contentReady2=_interopRequireDefault(_contentReady),_toastQueue=__webpack_require__(57),_toastQueue2=_interopRequireDefault(_toastQueue),_setAttributes=function(element,options){["id","class","animation"].forEach(function(a){return options.hasOwnProperty(a)&&element.setAttribute(a,options[a])}),options.modifier&&_util2["default"].addModifier(element,options.modifier)},notification={};notification._createAlertDialog=function(options){var inputString="";options.isPrompt&&(inputString='\n      <input\n        class="text-input text-input--underbar"\n        type="'+(options.inputType||"text")+'"\n        placeholder="'+(options.placeholder||"")+'"\n        value="'+(options.defaultValue||"")+'"\n        style="width: 100%; margin-top: 10px;"\n      />\n    ');var buttons="";options.buttonLabels.forEach(function(label,index){buttons+='\n      <ons-alert-dialog-button\n        class="\n          '+(index===options.primaryButtonIndex?" alert-dialog-button--primal":"")+"\n          "+(options.buttonLabels.length<=2?" alert-dialog-button--rowfooter":"")+'\n        " \n        style="position: relative;">\n        '+label+"\n      </ons-alert-dialog-button>\n    "});var el={},_destroyDialog=function(){el.dialog.onDialogCancel&&el.dialog.removeEventListener("dialog-cancel",el.dialog.onDialogCancel),Object.keys(el).forEach(function(key){return delete el[key]}),el=null,options.destroy instanceof Function&&options.destroy()};el.dialog=document.createElement("ons-alert-dialog"),el.dialog.innerHTML='\n    <div class="alert-dialog-mask"></div>\n    <div class="alert-dialog">\n      <div class="alert-dialog-container">\n        <div class="alert-dialog-title">\n          '+(options.title||"")+'\n        </div>\n        <div class="alert-dialog-content">\n          '+(options.message||options.messageHTML)+"\n          "+inputString+'\n        </div>\n        <div class="\n          alert-dialog-footer\n          '+(options.buttonLabels.length<=2?" alert-dialog-footer--rowfooter":"")+'\n        ">\n          '+buttons+"\n        </div>\n      </div>\n    </div>\n  ",(0,_contentReady2["default"])(el.dialog),_setAttributes(el.dialog,options);var deferred=_util2["default"].defer();return options.isPrompt&&options.submitOnEnter&&(el.input=el.dialog.querySelector(".text-input"),el.input.onkeypress=function(event){13===event.keyCode&&el.dialog.hide().then(function(){if(el){var resolveValue=el.input.value;_destroyDialog(),options.callback(resolveValue),deferred.resolve(resolveValue)}})}),el.footer=el.dialog.querySelector(".alert-dialog-footer"),_util2["default"].arrayFrom(el.dialog.querySelectorAll(".alert-dialog-button")).forEach(function(buttonElement,index){buttonElement.onclick=function(){el.dialog.hide().then(function(){if(el){var resolveValue=index;options.isPrompt&&(resolveValue=index===options.primaryButtonIndex?el.input.value:null),el.dialog.remove(),_destroyDialog(),options.callback(resolveValue),deferred.resolve(resolveValue)}})},el.footer.appendChild(buttonElement)}),options.cancelable&&(el.dialog.cancelable=!0,el.dialog.onDialogCancel=function(){setImmediate(function(){el.dialog.remove(),_destroyDialog()});var resolveValue=options.isPrompt?null:-1;options.callback(resolveValue),deferred.resolve(resolveValue)},el.dialog.addEventListener("dialog-cancel",el.dialog.onDialogCancel,!1)),document.body.appendChild(el.dialog),options.compile(el.dialog),setImmediate(function(){el.dialog.show().then(function(){el.input&&options.isPrompt&&options.autofocus&&el.input.focus()})}),deferred.promise};var _normalizeArguments=function(message){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},defaults=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(options=_extends({},options),"string"==typeof message?options.message=message:options=message,!options.message&&!options.messageHTML)throw new Error("Notifications must contain a message.");return(options.hasOwnProperty("buttonLabels")||options.hasOwnProperty("buttonLabel"))&&(options.buttonLabels=options.buttonLabels||options.buttonLabel,Array.isArray(options.buttonLabels)||(options.buttonLabels=[options.buttonLabels||""])),_util2["default"].extend({compile:function(param){return param},callback:function(param){return param},animation:"default",cancelable:!1,primaryButtonIndex:(options.buttonLabels||defaults.buttonLabels||[]).length-1},defaults,options)};notification.alert=function(message,options){return options=_normalizeArguments(message,options,{buttonLabels:["OK"],title:"Alert"}),notification._createAlertDialog(options)},notification.confirm=function(message,options){return options=_normalizeArguments(message,options,{buttonLabels:["Cancel","OK"],title:"Confirm"}),notification._createAlertDialog(options)},notification.prompt=function(message,options){return options=_normalizeArguments(message,options,{buttonLabels:["OK"],title:"Alert",isPrompt:!0,autofocus:!0,submitOnEnter:!0}),notification._createAlertDialog(options)},notification.toast=function(message,options){options=_normalizeArguments(message,options,{timeout:0,
force:!1});var toast=_util2["default"].createElement("\n    <ons-toast>\n      "+options.message+"\n      "+(options.buttonLabels?"<button>"+options.buttonLabels[0]+"</button>":"")+"\n    </ons-toast>\n  ");_setAttributes(toast,options);var deferred=_util2["default"].defer(),resolve=function(value){toast&&toast.hide().then(function(){toast&&(toast.remove(),toast=null,options.callback(value),deferred.resolve(value))})};options.buttonLabels&&(_util2["default"].findChild(toast._toast,"button").onclick=function(){return resolve(0)}),document.body.appendChild(toast),options.compile(toast);var show=function(){toast.parentElement&&toast.show(options).then(function(){options.timeout&&setTimeout(function(){return resolve(-1)},options.timeout)})};return options.force?show():_toastQueue2["default"].add(show,deferred.promise),deferred.promise},exports["default"]=notification,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _util=__webpack_require__(0),_util2=_interopRequireDefault(_util),softwareKeyboard=new MicroEvent;softwareKeyboard._visible=!1;var onShow=function(){softwareKeyboard._visible=!0,softwareKeyboard.emit("show")},onHide=function(){softwareKeyboard._visible=!1,softwareKeyboard.emit("hide")},bindEvents=function(){return"undefined"!=typeof Keyboard?(Keyboard.onshow=onShow,Keyboard.onhide=onHide,softwareKeyboard.emit("init",{visible:Keyboard.isVisible}),!0):"undefined"!=typeof cordova.plugins&&"undefined"!=typeof cordova.plugins.Keyboard&&(window.addEventListener("native.keyboardshow",onShow),window.addEventListener("native.keyboardhide",onHide),softwareKeyboard.emit("init",{visible:cordova.plugins.Keyboard.isVisible}),!0)},noPluginError=function(){_util2["default"].warn("ons-keyboard: Cordova Keyboard plugin is not present.")};document.addEventListener("deviceready",function(){bindEvents()||((document.querySelector("[ons-keyboard-active]")||document.querySelector("[ons-keyboard-inactive]"))&&noPluginError(),softwareKeyboard.on=noPluginError)}),exports["default"]=softwareKeyboard,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";"undefined"==typeof WeakMap&&!function(){var defineProperty=Object.defineProperty,counter=Date.now()%1e9,WeakMap=function(){this.name="__st"+(1e9*Math.random()>>>0)+(counter++ +"__")};WeakMap.prototype={set:function(key,value){var entry=key[this.name];return entry&&entry[0]===key?entry[1]=value:defineProperty(key,this.name,{value:[key,value],writable:!0}),this},get:function(key){var entry;return(entry=key[this.name])&&entry[0]===key?entry[1]:void 0},"delete":function(key){var entry=key[this.name];return!(!entry||entry[0]!==key)&&(entry[0]=entry[1]=void 0,!0)},has:function(key){var entry=key[this.name];return!!entry&&entry[0]===key}},window.WeakMap=WeakMap}(),function(global){function scheduleCallback(observer){scheduledObservers.push(observer),isScheduled||(isScheduled=!0,setImmediate(dispatchCallbacks))}function wrapIfNeeded(node){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(node)||node}function dispatchCallbacks(){isScheduled=!1;var observers=scheduledObservers;scheduledObservers=[],observers.sort(function(o1,o2){return o1.uid_-o2.uid_});var anyNonEmpty=!1;observers.forEach(function(observer){var queue=observer.takeRecords();removeTransientObserversFor(observer),queue.length&&(observer.callback_(queue,observer),anyNonEmpty=!0)}),anyNonEmpty&&dispatchCallbacks()}function removeTransientObserversFor(observer){observer.nodes_.forEach(function(node){var registrations=registrationsTable.get(node);registrations&&registrations.forEach(function(registration){registration.observer===observer&&registration.removeTransientObservers()})})}function forEachAncestorAndObserverEnqueueRecord(target,callback){for(var node=target;node;node=node.parentNode){var registrations=registrationsTable.get(node);if(registrations)for(var j=0;j<registrations.length;j++){var registration=registrations[j],options=registration.options;if(node===target||options.subtree){var record=callback(options);record&&registration.enqueue(record)}}}}function JsMutationObserver(callback){this.callback_=callback,this.nodes_=[],this.records_=[],this.uid_=++uidCounter}function MutationRecord(type,target){this.type=type,this.target=target,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function copyMutationRecord(original){var record=new MutationRecord(original.type,original.target);return record.addedNodes=original.addedNodes.slice(),record.removedNodes=original.removedNodes.slice(),record.previousSibling=original.previousSibling,record.nextSibling=original.nextSibling,record.attributeName=original.attributeName,record.attributeNamespace=original.attributeNamespace,record.oldValue=original.oldValue,record}function getRecord(type,target){return currentRecord=new MutationRecord(type,target)}function getRecordWithOldValue(oldValue){return recordWithOldValue?recordWithOldValue:(recordWithOldValue=copyMutationRecord(currentRecord),recordWithOldValue.oldValue=oldValue,recordWithOldValue)}function clearRecords(){currentRecord=recordWithOldValue=void 0}function recordRepresentsCurrentMutation(record){return record===recordWithOldValue||record===currentRecord}function selectRecord(lastRecord,newRecord){return lastRecord===newRecord?lastRecord:recordWithOldValue&&recordRepresentsCurrentMutation(lastRecord)?recordWithOldValue:null}function Registration(observer,target,options){this.observer=observer,this.target=target,this.options=options,this.transientObservedNodes=[]}if(!global.JsMutationObserver){var setImmediate,registrationsTable=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))setImmediate=setTimeout;else if(window.setImmediate)setImmediate=window.setImmediate;else{var setImmediateQueue=[],sentinel=String(Math.random());window.addEventListener("message",function(e){if(e.data===sentinel){var queue=setImmediateQueue;setImmediateQueue=[],queue.forEach(function(func){func()})}}),setImmediate=function(func){setImmediateQueue.push(func),window.postMessage(sentinel,"*")}}var isScheduled=!1,scheduledObservers=[],uidCounter=0;JsMutationObserver.prototype={observe:function(target,options){if(target=wrapIfNeeded(target),!options.childList&&!options.attributes&&!options.characterData||options.attributeOldValue&&!options.attributes||options.attributeFilter&&options.attributeFilter.length&&!options.attributes||options.characterDataOldValue&&!options.characterData)throw new SyntaxError;var registrations=registrationsTable.get(target);registrations||registrationsTable.set(target,registrations=[]);for(var registration,i=0;i<registrations.length;i++)if(registrations[i].observer===this){registration=registrations[i],registration.removeListeners(),registration.options=options;break}registration||(registration=new Registration(this,target,options),registrations.push(registration),this.nodes_.push(target)),registration.addListeners()},disconnect:function(){this.nodes_.forEach(function(node){for(var registrations=registrationsTable.get(node),i=0;i<registrations.length;i++){var registration=registrations[i];if(registration.observer===this){registration.removeListeners(),registrations.splice(i,1);break}}},this),this.records_=[]},takeRecords:function(){var copyOfRecords=this.records_;return this.records_=[],copyOfRecords}};var currentRecord,recordWithOldValue;Registration.prototype={enqueue:function(record){var records=this.observer.records_,length=records.length;if(records.length>0){var lastRecord=records[length-1],recordToReplaceLast=selectRecord(lastRecord,record);if(recordToReplaceLast)return void(records[length-1]=recordToReplaceLast)}else scheduleCallback(this.observer);records[length]=record},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(node){var options=this.options;options.attributes&&node.addEventListener("DOMAttrModified",this,!0),options.characterData&&node.addEventListener("DOMCharacterDataModified",this,!0),options.childList&&node.addEventListener("DOMNodeInserted",this,!0),(options.childList||options.subtree)&&node.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(node){var options=this.options;options.attributes&&node.removeEventListener("DOMAttrModified",this,!0),options.characterData&&node.removeEventListener("DOMCharacterDataModified",this,!0),options.childList&&node.removeEventListener("DOMNodeInserted",this,!0),(options.childList||options.subtree)&&node.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(node){if(node!==this.target){this.addListeners_(node),this.transientObservedNodes.push(node);var registrations=registrationsTable.get(node);registrations||registrationsTable.set(node,registrations=[]),registrations.push(this)}},removeTransientObservers:function(){var transientObservedNodes=this.transientObservedNodes;this.transientObservedNodes=[],transientObservedNodes.forEach(function(node){this.removeListeners_(node);for(var registrations=registrationsTable.get(node),i=0;i<registrations.length;i++)if(registrations[i]===this){registrations.splice(i,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var name=e.attrName,namespace=e.relatedNode.namespaceURI,target=e.target,record=new getRecord("attributes",target);record.attributeName=name,record.attributeNamespace=namespace;var oldValue=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;forEachAncestorAndObserverEnqueueRecord(target,function(options){if(options.attributes&&(!options.attributeFilter||!options.attributeFilter.length||options.attributeFilter.indexOf(name)!==-1||options.attributeFilter.indexOf(namespace)!==-1))return options.attributeOldValue?getRecordWithOldValue(oldValue):record});break;case"DOMCharacterDataModified":var target=e.target,record=getRecord("characterData",target),oldValue=e.prevValue;forEachAncestorAndObserverEnqueueRecord(target,function(options){if(options.characterData)return options.characterDataOldValue?getRecordWithOldValue(oldValue):record});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var addedNodes,removedNodes,changedNode=e.target;"DOMNodeInserted"===e.type?(addedNodes=[changedNode],removedNodes=[]):(addedNodes=[],removedNodes=[changedNode]);var previousSibling=changedNode.previousSibling,nextSibling=changedNode.nextSibling,record=getRecord("childList",e.target.parentNode);record.addedNodes=addedNodes,record.removedNodes=removedNodes,record.previousSibling=previousSibling,record.nextSibling=nextSibling,forEachAncestorAndObserverEnqueueRecord(e.relatedNode,function(options){if(options.childList)return record})}clearRecords()}},global.JsMutationObserver=JsMutationObserver,global.MutationObserver||(global.MutationObserver=JsMutationObserver,JsMutationObserver._isPolyfilled=!0)}}(self)},function(module,exports,__webpack_require__){"use strict";window.customElements&&(window.customElements.forcePolyfill=!0)},function(module,exports,__webpack_require__){"use strict";!function(global,undefined){function addFromSetImmediateArguments(args){return tasksByHandle[nextHandle]=partiallyApplied.apply(undefined,args),nextHandle++}function partiallyApplied(handler){var args=[].slice.call(arguments,1);return function(){"function"==typeof handler?handler.apply(undefined,args):new Function(""+handler)()}}function runIfPresent(handle){if(currentlyRunningATask)setTimeout(partiallyApplied(runIfPresent,handle),0);else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=!0;try{task()}finally{clearImmediate(handle),currentlyRunningATask=!1}}}}function clearImmediate(handle){delete tasksByHandle[handle]}function installNextTickImplementation(){setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return process.nextTick(partiallyApplied(runIfPresent,handle)),handle}}function canUsePostMessage(){if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=!0,oldOnMessage=global.onmessage;return global.onmessage=function(){postMessageIsAsynchronous=!1},global.postMessage("","*"),global.onmessage=oldOnMessage,postMessageIsAsynchronous}}function installPostMessageImplementation(){var messagePrefix="setImmediate$"+Math.random()+"$",onGlobalMessage=function(event){event.source===global&&"string"==typeof event.data&&0===event.data.indexOf(messagePrefix)&&runIfPresent(+event.data.slice(messagePrefix.length))};global.addEventListener?global.addEventListener("message",onGlobalMessage,!1):global.attachEvent("onmessage",onGlobalMessage),setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return global.postMessage(messagePrefix+handle,"*"),handle}}function installMessageChannelImplementation(){var channel=new MessageChannel;channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle)},setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return channel.port2.postMessage(handle),handle}}function installReadyStateChangeImplementation(){var html=doc.documentElement;setImmediate=function(){var handle=addFromSetImmediateArguments(arguments),script=doc.createElement("script");return script.onreadystatechange=function(){runIfPresent(handle),script.onreadystatechange=null,html.removeChild(script),script=null},html.appendChild(script),handle}}function installSetTimeoutImplementation(){setImmediate=function(){var handle=addFromSetImmediateArguments(arguments);return setTimeout(partiallyApplied(runIfPresent,handle),0),handle}}if(!global.setImmediate){var setImmediate,nextHandle=1,tasksByHandle={},currentlyRunningATask=!1,doc=global.document,attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global,"[object process]"==={}.toString.call(global.process)?installNextTickImplementation():canUsePostMessage()?installPostMessageImplementation():global.MessageChannel?installMessageChannelImplementation():doc&&"onreadystatechange"in doc.createElement("script")?installReadyStateChangeImplementation():installSetTimeoutImplementation(),attachTo.setImmediate=setImmediate,attachTo.clearImmediate=clearImmediate}}(self)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(125),__webpack_require__(126);var _ons=__webpack_require__(124),_ons2=_interopRequireDefault(_ons),_onsTemplate=__webpack_require__(121),_onsTemplate2=_interopRequireDefault(_onsTemplate),_onsIf=__webpack_require__(95),_onsIf2=_interopRequireDefault(_onsIf),_onsActionSheet=__webpack_require__(80),_onsActionSheet2=_interopRequireDefault(_onsActionSheet),_onsActionSheetButton=__webpack_require__(79),_onsActionSheetButton2=_interopRequireDefault(_onsActionSheetButton),_onsAlertDialog=__webpack_require__(82),_onsAlertDialog2=_interopRequireDefault(_onsAlertDialog),_onsAlertDialogButton=__webpack_require__(81),_onsAlertDialogButton2=_interopRequireDefault(_onsAlertDialogButton),_onsBackButton=__webpack_require__(83),_onsBackButton2=_interopRequireDefault(_onsBackButton),_onsBottomToolbar=__webpack_require__(84),_onsBottomToolbar2=_interopRequireDefault(_onsBottomToolbar),_onsButton=__webpack_require__(85),_onsButton2=_interopRequireDefault(_onsButton),_onsCarouselItem=__webpack_require__(87),_onsCarouselItem2=_interopRequireDefault(_onsCarouselItem),_onsCarousel=__webpack_require__(88),_onsCarousel2=_interopRequireDefault(_onsCarousel),_onsCol=__webpack_require__(90),_onsCol2=_interopRequireDefault(_onsCol),_onsDialog=__webpack_require__(91),_onsDialog2=_interopRequireDefault(_onsDialog),_onsFab=__webpack_require__(92),_onsFab2=_interopRequireDefault(_onsFab),_onsGestureDetector=__webpack_require__(93),_onsGestureDetector2=_interopRequireDefault(_onsGestureDetector),_onsIcon=__webpack_require__(94),_onsIcon2=_interopRequireDefault(_onsIcon),_onsLazyRepeat=__webpack_require__(97),_onsLazyRepeat2=_interopRequireDefault(_onsLazyRepeat),_onsListHeader=__webpack_require__(98),_onsListHeader2=_interopRequireDefault(_onsListHeader),_onsListTitle=__webpack_require__(100),_onsListTitle2=_interopRequireDefault(_onsListTitle),_onsListItem=__webpack_require__(99),_onsListItem2=_interopRequireDefault(_onsListItem),_onsList=__webpack_require__(101),_onsList2=_interopRequireDefault(_onsList),_onsInput=__webpack_require__(96),_onsInput2=_interopRequireDefault(_onsInput),_onsCheckbox=__webpack_require__(89),_onsCheckbox2=_interopRequireDefault(_onsCheckbox),_onsRadio=__webpack_require__(109),_onsRadio2=_interopRequireDefault(_onsRadio),_onsSearchInput=__webpack_require__(113),_onsSearchInput2=_interopRequireDefault(_onsSearchInput),_onsModal=__webpack_require__(102),_onsModal2=_interopRequireDefault(_onsModal),_onsNavigator=__webpack_require__(103),_onsNavigator2=_interopRequireDefault(_onsNavigator),_onsPage=__webpack_require__(104),_onsPage2=_interopRequireDefault(_onsPage),_onsPopover=__webpack_require__(105),_onsPopover2=_interopRequireDefault(_onsPopover),_onsProgressBar=__webpack_require__(106),_onsProgressBar2=_interopRequireDefault(_onsProgressBar),_onsProgressCircular=__webpack_require__(107),_onsProgressCircular2=_interopRequireDefault(_onsProgressCircular),_onsPullHook=__webpack_require__(108),_onsPullHook2=_interopRequireDefault(_onsPullHook),_onsRipple=__webpack_require__(111),_onsRipple2=_interopRequireDefault(_onsRipple),_onsRow=__webpack_require__(112),_onsRow2=_interopRequireDefault(_onsRow),_onsSelect=__webpack_require__(114),_onsSelect2=_interopRequireDefault(_onsSelect),_onsSpeedDialItem=__webpack_require__(115),_onsSpeedDialItem2=_interopRequireDefault(_onsSpeedDialItem),_onsSpeedDial=__webpack_require__(116),_onsSpeedDial2=_interopRequireDefault(_onsSpeedDial),_onsSplitterContent=__webpack_require__(117),_onsSplitterContent2=_interopRequireDefault(_onsSplitterContent),_onsSplitterMask=__webpack_require__(118),_onsSplitterMask2=_interopRequireDefault(_onsSplitterMask),_onsSplitterSide=__webpack_require__(119),_onsSplitterSide2=_interopRequireDefault(_onsSplitterSide),_onsSplitter=__webpack_require__(50),_onsSplitter2=_interopRequireDefault(_onsSplitter),_onsSwitch=__webpack_require__(120),_onsSwitch2=_interopRequireDefault(_onsSwitch),_onsTab=__webpack_require__(51),_onsTab2=_interopRequireDefault(_onsTab),_onsTabbar=__webpack_require__(52),_onsTabbar2=_interopRequireDefault(_onsTabbar),_onsToast=__webpack_require__(122),_onsToast2=_interopRequireDefault(_onsToast),_onsToolbarButton=__webpack_require__(123),_onsToolbarButton2=_interopRequireDefault(_onsToolbarButton),_onsToolbar=__webpack_require__(53),_onsToolbar2=_interopRequireDefault(_onsToolbar),_onsRange=__webpack_require__(110),_onsRange2=_interopRequireDefault(_onsRange),_onsCard=__webpack_require__(86),_onsCard2=_interopRequireDefault(_onsCard);window.ons&&_ons2["default"]._util.warn("Onsen UI is loaded more than once."),_ons2["default"].TemplateElement=_onsTemplate2["default"],_ons2["default"].IfElement=_onsIf2["default"],_ons2["default"].ActionSheetElement=_onsActionSheet2["default"],_ons2["default"].ActionSheetButtonElement=_onsActionSheetButton2["default"],_ons2["default"].AlertDialogElement=_onsAlertDialog2["default"],_ons2["default"].AlertDialogButtonElement=_onsAlertDialogButton2["default"],_ons2["default"].BackButtonElement=_onsBackButton2["default"],_ons2["default"].BottomToolbarElement=_onsBottomToolbar2["default"],_ons2["default"].ButtonElement=_onsButton2["default"],_ons2["default"].CarouselItemElement=_onsCarouselItem2["default"],_ons2["default"].CarouselElement=_onsCarousel2["default"],_ons2["default"].ColElement=_onsCol2["default"],_ons2["default"].DialogElement=_onsDialog2["default"],_ons2["default"].FabElement=_onsFab2["default"],_ons2["default"].GestureDetectorElement=_onsGestureDetector2["default"],_ons2["default"].IconElement=_onsIcon2["default"],_ons2["default"].LazyRepeatElement=_onsLazyRepeat2["default"],_ons2["default"].ListHeaderElement=_onsListHeader2["default"],_ons2["default"].ListTitleElement=_onsListTitle2["default"],_ons2["default"].ListItemElement=_onsListItem2["default"],_ons2["default"].ListElement=_onsList2["default"],_ons2["default"].InputElement=_onsInput2["default"],_ons2["default"].CheckboxElement=_onsCheckbox2["default"],_ons2["default"].RadioElement=_onsRadio2["default"],_ons2["default"].SearchInputElement=_onsSearchInput2["default"],_ons2["default"].ModalElement=_onsModal2["default"],_ons2["default"].NavigatorElement=_onsNavigator2["default"],_ons2["default"].PageElement=_onsPage2["default"],_ons2["default"].PopoverElement=_onsPopover2["default"],_ons2["default"].ProgressBarElement=_onsProgressBar2["default"],_ons2["default"].ProgressCircularElement=_onsProgressCircular2["default"],_ons2["default"].PullHookElement=_onsPullHook2["default"],_ons2["default"].RippleElement=_onsRipple2["default"],_ons2["default"].RowElement=_onsRow2["default"],_ons2["default"].SelectElement=_onsSelect2["default"],_ons2["default"].SpeedDialItemElement=_onsSpeedDialItem2["default"],_ons2["default"].SpeedDialElement=_onsSpeedDial2["default"],_ons2["default"].SplitterContentElement=_onsSplitterContent2["default"],_ons2["default"].SplitterMaskElement=_onsSplitterMask2["default"],_ons2["default"].SplitterSideElement=_onsSplitterSide2["default"],_ons2["default"].SplitterElement=_onsSplitter2["default"],_ons2["default"].SwitchElement=_onsSwitch2["default"],_ons2["default"].TabElement=_onsTab2["default"],_ons2["default"].TabbarElement=_onsTabbar2["default"],_ons2["default"].ToastElement=_onsToast2["default"],_ons2["default"].ToolbarButtonElement=_onsToolbarButton2["default"],_ons2["default"].ToolbarElement=_onsToolbar2["default"],_ons2["default"].RangeElement=_onsRange2["default"],_ons2["default"].CardElement=_onsCard2["default"],window.addEventListener("load",function(){_ons2["default"].fastClick=FastClick.attach(document.body)},!1),window.addEventListener("DOMContentLoaded",function(){_ons2["default"]._deviceBackButtonDispatcher.enable(),_ons2["default"]._defaultDeviceBackButtonHandler=_ons2["default"]._deviceBackButtonDispatcher.createHandler(window.document.body,function(){Object.hasOwnProperty.call(navigator,"app")?navigator.app.exitApp():console.warn("Could not close the app. Is 'cordova.js' included?\nError: 'window.navigator.app' is undefined.")}),document.body._gestureDetector=new _ons2["default"].GestureDetector(document.body)},!1),_ons2["default"].ready(function(){_ons2["default"]._setupLoadingPlaceHolders(),_ons2["default"].platform.isWebView()||document.body.addEventListener("keydown",function(event){27===event.keyCode&&_ons2["default"]._deviceBackButtonDispatcher.fireDeviceBackButtonEvent()})}),(new Viewport).setup(),exports["default"]=_ons2["default"],module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";!function(){function FastClick(layer,options){function bind(method,context){return function(){return method.apply(context,arguments)}}var oldOnClick;if(options=options||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=options.touchBoundary||10,this.layer=layer,this.tapDelay=options.tapDelay||200,this.tapTimeout=options.tapTimeout||700,!FastClick.notNeeded(layer)){for(var methods=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],context=this,i=0,l=methods.length;i<l;i++)context[methods[i]]=bind(context[methods[i]],context);deviceIsAndroid&&(layer.addEventListener("mouseover",this.onMouse,!0),layer.addEventListener("mousedown",this.onMouse,!0),layer.addEventListener("mouseup",this.onMouse,!0)),layer.addEventListener("click",this.onClick,!0),layer.addEventListener("touchstart",this.onTouchStart,!1),layer.addEventListener("touchmove",this.onTouchMove,!1),layer.addEventListener("touchend",this.onTouchEnd,!1),layer.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;"click"===type?rmv.call(layer,type,callback.hijacked||callback,capture):rmv.call(layer,type,callback,capture)},layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;"click"===type?adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){event.propagationStopped||callback(event)}),capture):adv.call(layer,type,callback,capture)}),"function"==typeof layer.onclick&&(oldOnClick=layer.onclick,layer.addEventListener("click",function(event){oldOnClick(event)},!1),layer.onclick=null)}}var deviceIsWindowsPhone=navigator.userAgent.indexOf("Windows Phone")>=0,deviceIsAndroid=navigator.userAgent.indexOf("Android")>0&&!deviceIsWindowsPhone,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent)&&!deviceIsWindowsPhone,deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS [6-7]_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===target.type||target.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(target.className)},FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}},FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;document.activeElement&&document.activeElement!==targetElement&&document.activeElement.blur(),touch=event.changedTouches[0],clickEvent=document.createEvent("MouseEvents"),clickEvent.initMouseEvent(this.determineEventType(targetElement),!0,!0,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,!1,!1,!1,!1,0,null),clickEvent.forwardedTouchEvent=!0,targetElement.dispatchEvent(clickEvent)},FastClick.prototype.determineEventType=function(targetElement){return deviceIsAndroid&&"select"===targetElement.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(targetElement){var length;deviceIsIOS&&targetElement.setSelectionRange&&0!==targetElement.type.indexOf("date")&&"time"!==targetElement.type&&"month"!==targetElement.type?(length=targetElement.value.length,targetElement.setSelectionRange(length,length)):targetElement.focus()},FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;if(scrollParent=targetElement.fastClickScrollParent,!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement,targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}scrollParent&&(scrollParent.fastClickLastScrollTop=scrollParent.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){return eventTarget.nodeType===Node.TEXT_NODE?eventTarget.parentNode:eventTarget},FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1)return!0;if(targetElement=this.getTargetElementFromEventTarget(event.target),touch=event.targetTouches[0],targetElement.isContentEditable)return!0;if(deviceIsIOS){if(selection=window.getSelection(),selection.rangeCount&&!selection.isCollapsed)return!0;if(!deviceIsIOS4){if(touch.identifier&&touch.identifier===this.lastTouchIdentifier)return event.preventDefault(),!1;this.lastTouchIdentifier=touch.identifier,this.updateScrollParent(targetElement)}}return this.trackingClick=!0,this.trackingClickStart=event.timeStamp,this.targetElement=targetElement,this.touchStartX=touch.pageX,this.touchStartY=touch.pageY,event.timeStamp-this.lastClickTime<this.tapDelay&&event.timeStamp-this.lastClickTime>-1&&event.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;return Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary},FastClick.prototype.onTouchMove=function(event){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(labelElement){return void 0!==labelElement.control?labelElement.control:labelElement.htmlFor?document.getElementById(labelElement.htmlFor):labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick)return!0;if(event.timeStamp-this.lastClickTime<this.tapDelay&&event.timeStamp-this.lastClickTime>-1)return this.cancelNextClick=!0,!0;if(event.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=event.timeStamp,trackingClickStart=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(touch=event.changedTouches[0],targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement,targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent),targetTagName=targetElement.tagName.toLowerCase(),"label"===targetTagName){if(forElement=this.findControl(targetElement)){if(this.focus(targetElement),deviceIsAndroid)return!1;targetElement=forElement}}else if(this.needsFocus(targetElement))return event.timeStamp-trackingClickStart>100||deviceIsIOS&&window.top!==window&&"input"===targetTagName?(this.targetElement=null,!1):(this.focus(targetElement),this.sendClick(targetElement,event),deviceIsIOS&&"select"===targetTagName||(this.targetElement=null,event.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||(scrollParent=targetElement.fastClickScrollParent,!scrollParent||scrollParent.fastClickLastScrollTop===scrollParent.scrollTop))||(this.needsClick(targetElement)||(event.preventDefault(),this.sendClick(targetElement,event)),!1)},FastClick.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(event){return!this.targetElement||(!!event.forwardedTouchEvent||(!event.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(event.stopImmediatePropagation?event.stopImmediatePropagation():event.propagationStopped=!0,event.stopPropagation(),event.preventDefault(),!1))))},FastClick.prototype.onClick=function(event){var permitted;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===event.target.type&&0===event.detail||(permitted=this.onMouse(event),permitted||(this.targetElement=null),permitted)},FastClick.prototype.destroy=function(){var layer=this.layer;deviceIsAndroid&&(layer.removeEventListener("mouseover",this.onMouse,!0),layer.removeEventListener("mousedown",this.onMouse,!0),layer.removeEventListener("mouseup",this.onMouse,!0)),layer.removeEventListener("click",this.onClick,!0),layer.removeEventListener("touchstart",this.onTouchStart,!1),layer.removeEventListener("touchmove",this.onTouchMove,!1),layer.removeEventListener("touchend",this.onTouchEnd,!1),
layer.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(layer){var metaViewport,chromeVersion,blackberryVersion,firefoxVersion;if("undefined"==typeof window.ontouchstart)return!0;if(chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(metaViewport=document.querySelector("meta[name=viewport]")){if(metaViewport.content.indexOf("user-scalable=no")!==-1)return!0;if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),blackberryVersion[1]>=10&&blackberryVersion[2]>=3&&(metaViewport=document.querySelector("meta[name=viewport]")))){if(metaViewport.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===layer.style.msTouchAction||"manipulation"===layer.style.touchAction||(firefoxVersion=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(firefoxVersion>=27&&(metaViewport=document.querySelector("meta[name=viewport]"),metaViewport&&(metaViewport.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===layer.style.touchAction||"manipulation"===layer.style.touchAction))},FastClick.attach=function(layer,options){return new FastClick(layer,options)},window.FastClick=FastClick}()},function(module,exports,__webpack_require__){"use strict";(function(module){var MicroEvent=function(){};MicroEvent.prototype={on:function(event,fct){this._events=this._events||{},this._events[event]=this._events[event]||[],this._events[event].push(fct)},once:function(event,fct){var self=this,wrapper=function wrapper(){return self.off(event,wrapper),fct.apply(null,arguments)};this.on(event,wrapper)},off:function(event,fct){this._events=this._events||{},event in this._events!=!1&&(this._events[event]=this._events[event].filter(function(_fct){return!!fct&&fct!==_fct}))},emit:function(event){if(this._events=this._events||{},event in this._events!=!1)for(var i=0;i<this._events[event].length;i++)this._events[event][i].apply(this,Array.prototype.slice.call(arguments,1))}},MicroEvent.mixin=function(destObject){for(var props=["on","once","off","emit"],i=0;i<props.length;i++)"function"==typeof destObject?destObject.prototype[props[i]]=MicroEvent.prototype[props[i]]:destObject[props[i]]=MicroEvent.prototype[props[i]]},"undefined"!=typeof module&&"exports"in module&&(module.exports=MicroEvent),window.MicroEvent=MicroEvent}).call(exports,__webpack_require__(205)(module))},function(module,exports,__webpack_require__){"use strict";!function(){function Viewport(){return this.PRE_IOS7_VIEWPORT="initial-scale=1, maximum-scale=1, user-scalable=no",this.IOS7_VIEWPORT="initial-scale=1, maximum-scale=1, user-scalable=no",this.DEFAULT_VIEWPORT="initial-scale=1, maximum-scale=1, user-scalable=no",this.ensureViewportElement(),this.platform={},this.platform.name=this.getPlatformName(),this.platform.version=this.getPlatformVersion(),this}Viewport.prototype.ensureViewportElement=function(){this.viewportElement=document.querySelector("meta[name=viewport]"),this.viewportElement||(this.viewportElement=document.createElement("meta"),this.viewportElement.name="viewport",document.head.appendChild(this.viewportElement))},Viewport.prototype.setup=function(){function isWebView(){return!!(window.cordova||window.phonegap||window.PhoneGap)}this.viewportElement&&"true"!=this.viewportElement.getAttribute("data-no-adjust")&&(this.viewportElement.getAttribute("content")||("ios"==this.platform.name?this.platform.version>=7&&isWebView()?this.viewportElement.setAttribute("content",this.IOS7_VIEWPORT):this.viewportElement.setAttribute("content",this.PRE_IOS7_VIEWPORT):this.viewportElement.setAttribute("content",this.DEFAULT_VIEWPORT)))},Viewport.prototype.getPlatformName=function(){return navigator.userAgent.match(/Android/i)?"android":navigator.userAgent.match(/iPhone|iPad|iPod/i)?"ios":void 0},Viewport.prototype.getPlatformVersion=function(){var start=window.navigator.userAgent.indexOf("OS ");return window.Number(window.navigator.userAgent.substr(start+3,3).replace("_","."))},window.Viewport=Viewport}()},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var AlreadyConstructedMarker=function AlreadyConstructedMarker(){_classCallCheck(this,AlreadyConstructedMarker)};exports["default"]=new AlreadyConstructedMarker,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_CustomElementInternals=__webpack_require__(11),_DocumentConstructionObserver=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(166)),_DocumentConstructionObserver2=_interopRequireDefault(_DocumentConstructionObserver),_Deferred=__webpack_require__(165),_Deferred2=_interopRequireDefault(_Deferred),_Utilities=__webpack_require__(15),Utilities=_interopRequireWildcard(_Utilities),CustomElementRegistry=function(){function CustomElementRegistry(internals){_classCallCheck(this,CustomElementRegistry),this._elementDefinitionIsRunning=!1,this._internals=internals,this._whenDefinedDeferred=new Map,this._flushCallback=function(fn){return fn()},this._flushPending=!1,this._unflushedLocalNames=[],this._documentConstructionObserver=new _DocumentConstructionObserver2["default"](internals,document)}return _createClass(CustomElementRegistry,[{key:"define",value:function(localName,constructor){var _this=this;if(!(constructor instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!Utilities.isValidCustomElementName(localName))throw new SyntaxError("The element name '"+localName+"' is not valid.");if(this._internals.localNameToDefinition(localName))throw new Error("A custom element with name '"+localName+"' has already been defined.");if(this._elementDefinitionIsRunning)throw new Error("A custom element is already being defined.");this._elementDefinitionIsRunning=!0;var connectedCallback=void 0,disconnectedCallback=void 0,adoptedCallback=void 0,attributeChangedCallback=void 0,observedAttributes=void 0;try{var getCallback=function(name){var callbackValue=prototype[name];if(void 0!==callbackValue&&!(callbackValue instanceof Function))throw new Error("The '"+name+"' callback must be a function.");return callbackValue},prototype=constructor.prototype;if(!(prototype instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");connectedCallback=getCallback("connectedCallback"),disconnectedCallback=getCallback("disconnectedCallback"),adoptedCallback=getCallback("adoptedCallback"),attributeChangedCallback=getCallback("attributeChangedCallback"),observedAttributes=constructor.observedAttributes||[]}catch(e){return}finally{this._elementDefinitionIsRunning=!1}var definition={localName:localName,constructor:constructor,connectedCallback:connectedCallback,disconnectedCallback:disconnectedCallback,adoptedCallback:adoptedCallback,attributeChangedCallback:attributeChangedCallback,observedAttributes:observedAttributes,constructionStack:[]};this._internals.setDefinition(localName,definition),this._unflushedLocalNames.push(localName),this._flushPending||(this._flushPending=!0,this._flushCallback(function(){return _this._flush()}))}},{key:"_flush",value:function(){if(this._flushPending!==!1)for(this._flushPending=!1,this._internals.patchAndUpgradeTree(document);this._unflushedLocalNames.length>0;){var localName=this._unflushedLocalNames.shift(),deferred=this._whenDefinedDeferred.get(localName);deferred&&deferred.resolve(void 0)}}},{key:"get",value:function(localName){var definition=this._internals.localNameToDefinition(localName);if(definition)return definition.constructor}},{key:"whenDefined",value:function(localName){if(!Utilities.isValidCustomElementName(localName))return Promise.reject(new SyntaxError("'"+localName+"' is not a valid custom element name."));var prior=this._whenDefinedDeferred.get(localName);if(prior)return prior.toPromise();var deferred=new _Deferred2["default"];this._whenDefinedDeferred.set(localName,deferred);var definition=this._internals.localNameToDefinition(localName);return definition&&this._unflushedLocalNames.indexOf(localName)===-1&&deferred.resolve(void 0),deferred.toPromise()}},{key:"polyfillWrapFlushCallback",value:function(outer){this._documentConstructionObserver.disconnect();var inner=this._flushCallback;this._flushCallback=function(flush){return outer(function(){return inner(flush)})}}}]),CustomElementRegistry}();exports["default"]=CustomElementRegistry,window.CustomElementRegistry=CustomElementRegistry,CustomElementRegistry.prototype.define=CustomElementRegistry.prototype.define,CustomElementRegistry.prototype.get=CustomElementRegistry.prototype.get,CustomElementRegistry.prototype.whenDefined=CustomElementRegistry.prototype.whenDefined,CustomElementRegistry.prototype.polyfillWrapFlushCallback=CustomElementRegistry.prototype.polyfillWrapFlushCallback,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Deferred=function(){function Deferred(){var _this=this;_classCallCheck(this,Deferred),this._value=void 0,this._resolve=void 0,this._promise=new Promise(function(resolve){_this._resolve=resolve,_this._value&&resolve(_this._value)})}return _createClass(Deferred,[{key:"resolve",value:function(value){if(this._value)throw new Error("Already resolved.");this._value=value,this._resolve&&this._resolve(value)}},{key:"toPromise",value:function(){return this._promise}}]),Deferred}();exports["default"]=Deferred,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_CustomElementInternals=__webpack_require__(11),DocumentConstructionObserver=(_interopRequireDefault(_CustomElementInternals),function(){function DocumentConstructionObserver(internals,doc){_classCallCheck(this,DocumentConstructionObserver),this._internals=internals,this._document=doc,this._observer=void 0,this._internals.patchAndUpgradeTree(this._document),"loading"===this._document.readyState&&(this._observer=new MutationObserver(this._handleMutations.bind(this)),this._observer.observe(this._document,{childList:!0,subtree:!0}))}return _createClass(DocumentConstructionObserver,[{key:"disconnect",value:function(){this._observer&&this._observer.disconnect()}},{key:"_handleMutations",value:function(mutations){var readyState=this._document.readyState;"interactive"!==readyState&&"complete"!==readyState||this.disconnect();for(var i=0;i<mutations.length;i++)for(var addedNodes=mutations[i].addedNodes,j=0;j<addedNodes.length;j++){var node=addedNodes[j];this._internals.patchAndUpgradeTree(node)}}}]),DocumentConstructionObserver}());exports["default"]=DocumentConstructionObserver,module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(internals){Utilities.setPropertyUnchecked(Document.prototype,"createElement",function(localName){if(this.__CE_hasRegistry){var definition=internals.localNameToDefinition(localName);if(definition)return new definition.constructor}var result=_Native2["default"].Document_createElement.call(this,localName);return internals.patch(result),result}),Utilities.setPropertyUnchecked(Document.prototype,"importNode",function(node,deep){var clone=_Native2["default"].Document_importNode.call(this,node,deep);return this.__CE_hasRegistry?internals.patchAndUpgradeTree(clone):internals.patchTree(clone),clone});var NS_HTML="http://www.w3.org/1999/xhtml";Utilities.setPropertyUnchecked(Document.prototype,"createElementNS",function(namespace,localName){if(this.__CE_hasRegistry&&(null===namespace||namespace===NS_HTML)){var definition=internals.localNameToDefinition(localName);if(definition)return new definition.constructor}var result=_Native2["default"].Document_createElementNS.call(this,namespace,localName);return internals.patch(result),result}),(0,_ParentNode2["default"])(internals,Document.prototype,{prepend:_Native2["default"].Document_prepend,append:_Native2["default"].Document_append})};var _Native=__webpack_require__(33),_Native2=_interopRequireDefault(_Native),_CustomElementInternals=__webpack_require__(11),_Utilities=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(15)),Utilities=_interopRequireWildcard(_Utilities),_ParentNode=__webpack_require__(59),_ParentNode2=_interopRequireDefault(_ParentNode);module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(internals){function patch_innerHTML(destination,baseDescriptor){Object.defineProperty(destination,"innerHTML",{enumerable:baseDescriptor.enumerable,configurable:!0,get:baseDescriptor.get,set:function(htmlString){var _this=this,isConnected=Utilities.isConnected(this),removedElements=void 0;if(isConnected&&(removedElements=[],Utilities.walkDeepDescendantElements(this,function(element){element!==_this&&removedElements.push(element)})),baseDescriptor.set.call(this,htmlString),removedElements)for(var i=0;i<removedElements.length;i++){var element=removedElements[i];element.__CE_state===_CustomElementState2["default"].custom&&internals.disconnectedCallback(element)}return this.ownerDocument.__CE_hasRegistry?internals.patchAndUpgradeTree(this):internals.patchTree(this),htmlString}})}function patch_insertAdjacentElement(destination,baseMethod){Utilities.setPropertyUnchecked(destination,"insertAdjacentElement",function(where,element){var wasConnected=Utilities.isConnected(element),insertedElement=baseMethod.call(this,where,element);return wasConnected&&internals.disconnectTree(element),Utilities.isConnected(insertedElement)&&internals.connectTree(element),insertedElement})}if(_Native2["default"].Element_attachShadow?Utilities.setPropertyUnchecked(Element.prototype,"attachShadow",function(init){var shadowRoot=_Native2["default"].Element_attachShadow.call(this,init);return this.__CE_shadowRoot=shadowRoot,shadowRoot}):console.warn("Custom Elements: `Element#attachShadow` was not patched."),_Native2["default"].Element_innerHTML&&_Native2["default"].Element_innerHTML.get)patch_innerHTML(Element.prototype,_Native2["default"].Element_innerHTML);else if(_Native2["default"].HTMLElement_innerHTML&&_Native2["default"].HTMLElement_innerHTML.get)patch_innerHTML(HTMLElement.prototype,_Native2["default"].HTMLElement_innerHTML);else{var rawDiv=_Native2["default"].Document_createElement.call(document,"div");internals.addPatch(function(element){patch_innerHTML(element,{enumerable:!0,configurable:!0,get:function(){return _Native2["default"].Node_cloneNode.call(this,!0).innerHTML},set:function(assignedValue){var content="template"===this.localName?this.content:this;for(rawDiv.innerHTML=assignedValue;content.childNodes.length>0;)_Native2["default"].Node_removeChild.call(content,content.childNodes[0]);for(;rawDiv.childNodes.length>0;)_Native2["default"].Node_appendChild.call(content,rawDiv.childNodes[0])}})})}Utilities.setPropertyUnchecked(Element.prototype,"setAttribute",function(name,newValue){if(this.__CE_state!==_CustomElementState2["default"].custom)return _Native2["default"].Element_setAttribute.call(this,name,newValue);var oldValue=_Native2["default"].Element_getAttribute.call(this,name);_Native2["default"].Element_setAttribute.call(this,name,newValue),newValue=_Native2["default"].Element_getAttribute.call(this,name),internals.attributeChangedCallback(this,name,oldValue,newValue,null)}),Utilities.setPropertyUnchecked(Element.prototype,"setAttributeNS",function(namespace,name,newValue){if(this.__CE_state!==_CustomElementState2["default"].custom)return _Native2["default"].Element_setAttributeNS.call(this,namespace,name,newValue);var oldValue=_Native2["default"].Element_getAttributeNS.call(this,namespace,name);_Native2["default"].Element_setAttributeNS.call(this,namespace,name,newValue),newValue=_Native2["default"].Element_getAttributeNS.call(this,namespace,name),internals.attributeChangedCallback(this,name,oldValue,newValue,namespace)}),Utilities.setPropertyUnchecked(Element.prototype,"removeAttribute",function(name){if(this.__CE_state!==_CustomElementState2["default"].custom)return _Native2["default"].Element_removeAttribute.call(this,name);var oldValue=_Native2["default"].Element_getAttribute.call(this,name);_Native2["default"].Element_removeAttribute.call(this,name),null!==oldValue&&internals.attributeChangedCallback(this,name,oldValue,null,null)}),Utilities.setPropertyUnchecked(Element.prototype,"removeAttributeNS",function(namespace,name){if(this.__CE_state!==_CustomElementState2["default"].custom)return _Native2["default"].Element_removeAttributeNS.call(this,namespace,name);var oldValue=_Native2["default"].Element_getAttributeNS.call(this,namespace,name);_Native2["default"].Element_removeAttributeNS.call(this,namespace,name);var newValue=_Native2["default"].Element_getAttributeNS.call(this,namespace,name);oldValue!==newValue&&internals.attributeChangedCallback(this,name,oldValue,newValue,namespace)}),_Native2["default"].HTMLElement_insertAdjacentElement?patch_insertAdjacentElement(HTMLElement.prototype,_Native2["default"].HTMLElement_insertAdjacentElement):_Native2["default"].Element_insertAdjacentElement?patch_insertAdjacentElement(Element.prototype,_Native2["default"].Element_insertAdjacentElement):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),(0,_ParentNode2["default"])(internals,Element.prototype,{prepend:_Native2["default"].Element_prepend,append:_Native2["default"].Element_append}),(0,_ChildNode2["default"])(internals,Element.prototype,{before:_Native2["default"].Element_before,after:_Native2["default"].Element_after,replaceWith:_Native2["default"].Element_replaceWith,remove:_Native2["default"].Element_remove})};var _Native=__webpack_require__(33),_Native2=_interopRequireDefault(_Native),_CustomElementInternals=__webpack_require__(11),_CustomElementState=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(42)),_CustomElementState2=_interopRequireDefault(_CustomElementState),_Utilities=__webpack_require__(15),Utilities=_interopRequireWildcard(_Utilities),_ParentNode=__webpack_require__(59),_ParentNode2=_interopRequireDefault(_ParentNode),_ChildNode=__webpack_require__(170),_ChildNode2=_interopRequireDefault(_ChildNode);module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(internals){window.HTMLElement=function(){function HTMLElement(){var constructor=this.constructor,definition=internals.constructorToDefinition(constructor);if(!definition)throw new Error("The custom element being constructed was not registered with `customElements`.");var constructionStack=definition.constructionStack;if(0===constructionStack.length){var _element=_Native2["default"].Document_createElement.call(document,definition.localName);return Object.setPrototypeOf(_element,constructor.prototype),_element.__CE_state=_CustomElementState2["default"].custom,_element.__CE_definition=definition,internals.patch(_element),_element}var lastIndex=constructionStack.length-1,element=constructionStack[lastIndex];if(element===_AlreadyConstructedMarker2["default"])throw new Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return constructionStack[lastIndex]=_AlreadyConstructedMarker2["default"],Object.setPrototypeOf(element,constructor.prototype),internals.patch(element),element}return HTMLElement.prototype=_Native2["default"].HTMLElement.prototype,HTMLElement}()};var _Native=__webpack_require__(33),_Native2=_interopRequireDefault(_Native),_CustomElementInternals=__webpack_require__(11),_CustomElementState=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(42)),_CustomElementState2=_interopRequireDefault(_CustomElementState),_AlreadyConstructedMarker=__webpack_require__(163),_AlreadyConstructedMarker2=_interopRequireDefault(_AlreadyConstructedMarker);module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(internals,destination,builtIn){destination.before=function(){for(var _len=arguments.length,nodes=Array(_len),_key=0;_key<_len;_key++)nodes[_key]=arguments[_key];var connectedBefore=nodes.filter(function(node){return node instanceof Node&&Utilities.isConnected(node)});builtIn.before.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++)internals.disconnectTree(connectedBefore[i]);if(Utilities.isConnected(this))for(var _i=0;_i<nodes.length;_i++){var node=nodes[_i];node instanceof Element&&internals.connectTree(node)}},destination.after=function(){for(var _len2=arguments.length,nodes=Array(_len2),_key2=0;_key2<_len2;_key2++)nodes[_key2]=arguments[_key2];var connectedBefore=nodes.filter(function(node){return node instanceof Node&&Utilities.isConnected(node)});builtIn.after.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++)internals.disconnectTree(connectedBefore[i]);if(Utilities.isConnected(this))for(var _i2=0;_i2<nodes.length;_i2++){var node=nodes[_i2];node instanceof Element&&internals.connectTree(node)}},destination.replaceWith=function(){for(var _len3=arguments.length,nodes=Array(_len3),_key3=0;_key3<_len3;_key3++)nodes[_key3]=arguments[_key3];var connectedBefore=nodes.filter(function(node){return node instanceof Node&&Utilities.isConnected(node)}),wasConnected=Utilities.isConnected(this);builtIn.replaceWith.apply(this,nodes);for(var i=0;i<connectedBefore.length;i++)internals.disconnectTree(connectedBefore[i]);if(wasConnected){internals.disconnectTree(this);for(var _i3=0;_i3<nodes.length;_i3++){var node=nodes[_i3];node instanceof Element&&internals.connectTree(node)}}},destination.remove=function(){var wasConnected=Utilities.isConnected(this);builtIn.remove.call(this),wasConnected&&internals.disconnectTree(this)}};var _CustomElementInternals=__webpack_require__(11),_Utilities=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(15)),Utilities=_interopRequireWildcard(_Utilities);module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(obj){if(obj&&obj.__esModule)return obj;var newObj={};if(null!=obj)for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&(newObj[key]=obj[key]);return newObj["default"]=obj,newObj}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(internals){function patch_textContent(destination,baseDescriptor){Object.defineProperty(destination,"textContent",{enumerable:baseDescriptor.enumerable,configurable:!0,get:baseDescriptor.get,set:function(assignedValue){if(this.nodeType===Node.TEXT_NODE)return void baseDescriptor.set.call(this,assignedValue);var removedNodes=void 0;if(this.firstChild){var childNodes=this.childNodes,childNodesLength=childNodes.length;if(childNodesLength>0&&Utilities.isConnected(this)){removedNodes=new Array(childNodesLength);for(var i=0;i<childNodesLength;i++)removedNodes[i]=childNodes[i]}}if(baseDescriptor.set.call(this,assignedValue),removedNodes)for(var _i=0;_i<removedNodes.length;_i++)internals.disconnectTree(removedNodes[_i])}})}Utilities.setPropertyUnchecked(Node.prototype,"insertBefore",function(node,refNode){if(node instanceof DocumentFragment){var insertedNodes=Array.prototype.slice.apply(node.childNodes),_nativeResult=_Native2["default"].Node_insertBefore.call(this,node,refNode);if(Utilities.isConnected(this))for(var i=0;i<insertedNodes.length;i++)internals.connectTree(insertedNodes[i]);return _nativeResult}var nodeWasConnected=Utilities.isConnected(node),nativeResult=_Native2["default"].Node_insertBefore.call(this,node,refNode);return nodeWasConnected&&internals.disconnectTree(node),Utilities.isConnected(this)&&internals.connectTree(node),nativeResult}),Utilities.setPropertyUnchecked(Node.prototype,"appendChild",function(node){if(node instanceof DocumentFragment){var insertedNodes=Array.prototype.slice.apply(node.childNodes),_nativeResult2=_Native2["default"].Node_appendChild.call(this,node);if(Utilities.isConnected(this))for(var i=0;i<insertedNodes.length;i++)internals.connectTree(insertedNodes[i]);return _nativeResult2}var nodeWasConnected=Utilities.isConnected(node),nativeResult=_Native2["default"].Node_appendChild.call(this,node);return nodeWasConnected&&internals.disconnectTree(node),Utilities.isConnected(this)&&internals.connectTree(node),nativeResult}),Utilities.setPropertyUnchecked(Node.prototype,"cloneNode",function(deep){var clone=_Native2["default"].Node_cloneNode.call(this,deep);return this.ownerDocument.__CE_hasRegistry?internals.patchAndUpgradeTree(clone):internals.patchTree(clone),clone}),Utilities.setPropertyUnchecked(Node.prototype,"removeChild",function(node){var nodeWasConnected=Utilities.isConnected(node),nativeResult=_Native2["default"].Node_removeChild.call(this,node);return nodeWasConnected&&internals.disconnectTree(node),nativeResult}),Utilities.setPropertyUnchecked(Node.prototype,"replaceChild",function(nodeToInsert,nodeToRemove){if(nodeToInsert instanceof DocumentFragment){var insertedNodes=Array.prototype.slice.apply(nodeToInsert.childNodes),_nativeResult3=_Native2["default"].Node_replaceChild.call(this,nodeToInsert,nodeToRemove);if(Utilities.isConnected(this)){internals.disconnectTree(nodeToRemove);for(var i=0;i<insertedNodes.length;i++)internals.connectTree(insertedNodes[i])}return _nativeResult3}var nodeToInsertWasConnected=Utilities.isConnected(nodeToInsert),nativeResult=_Native2["default"].Node_replaceChild.call(this,nodeToInsert,nodeToRemove),thisIsConnected=Utilities.isConnected(this);return thisIsConnected&&internals.disconnectTree(nodeToRemove),nodeToInsertWasConnected&&internals.disconnectTree(nodeToInsert),thisIsConnected&&internals.connectTree(nodeToInsert),nativeResult}),_Native2["default"].Node_textContent&&_Native2["default"].Node_textContent.get?patch_textContent(Node.prototype,_Native2["default"].Node_textContent):internals.addPatch(function(element){patch_textContent(element,{enumerable:!0,configurable:!0,get:function(){for(var parts=[],i=0;i<this.childNodes.length;i++)parts.push(this.childNodes[i].textContent);return parts.join("")},set:function(assignedValue){for(;this.firstChild;)_Native2["default"].Node_removeChild.call(this,this.firstChild);_Native2["default"].Node_appendChild.call(this,document.createTextNode(assignedValue))}})})};var _Native=__webpack_require__(33),_Native2=_interopRequireDefault(_Native),_CustomElementInternals=__webpack_require__(11),_Utilities=(_interopRequireDefault(_CustomElementInternals),__webpack_require__(15)),Utilities=_interopRequireWildcard(_Utilities);module.exports=exports["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _CustomElementInternals=__webpack_require__(11),_CustomElementInternals2=_interopRequireDefault(_CustomElementInternals),_CustomElementRegistry=__webpack_require__(164),_CustomElementRegistry2=_interopRequireDefault(_CustomElementRegistry),_HTMLElement=__webpack_require__(169),_HTMLElement2=_interopRequireDefault(_HTMLElement),_Document=__webpack_require__(167),_Document2=_interopRequireDefault(_Document),_Node=__webpack_require__(171),_Node2=_interopRequireDefault(_Node),_Element=__webpack_require__(168),_Element2=_interopRequireDefault(_Element),priorCustomElements=window.customElements;if(!priorCustomElements||priorCustomElements.forcePolyfill||"function"!=typeof priorCustomElements.define||"function"!=typeof priorCustomElements.get){var internals=new _CustomElementInternals2["default"];(0,_HTMLElement2["default"])(internals),(0,_Document2["default"])(internals),(0,_Node2["default"])(internals),(0,_Element2["default"])(internals),document.__CE_hasRegistry=!0;var customElements=new _CustomElementRegistry2["default"](internals);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})}},function(module,exports,__webpack_require__){"use strict";
__webpack_require__(76),__webpack_require__(77),__webpack_require__(78),__webpack_require__(200),__webpack_require__(203),module.exports=__webpack_require__(21).Map},function(module,exports,__webpack_require__){"use strict";__webpack_require__(201),module.exports=__webpack_require__(21).Object.setPrototypeOf},function(module,exports,__webpack_require__){"use strict";__webpack_require__(76),__webpack_require__(77),__webpack_require__(78),__webpack_require__(202),__webpack_require__(204),module.exports=__webpack_require__(21).Set},function(module,exports,__webpack_require__){"use strict";module.exports=function(it){if("function"!=typeof it)throw TypeError(it+" is not a function!");return it}},function(module,exports,__webpack_require__){"use strict";var UNSCOPABLES=__webpack_require__(9)("unscopables"),ArrayProto=Array.prototype;void 0==ArrayProto[UNSCOPABLES]&&__webpack_require__(22)(ArrayProto,UNSCOPABLES,{}),module.exports=function(key){ArrayProto[UNSCOPABLES][key]=!0}},function(module,exports,__webpack_require__){"use strict";var forOf=__webpack_require__(44);module.exports=function(iter,ITERATOR){var result=[];return forOf(iter,!1,result.push,result,ITERATOR),result}},function(module,exports,__webpack_require__){"use strict";var toIObject=__webpack_require__(37),toLength=__webpack_require__(74),toIndex=__webpack_require__(196);module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var value,O=toIObject($this),length=toLength(O.length),index=toIndex(fromIndex,length);if(IS_INCLUDES&&el!=el){for(;length>index;)if(value=O[index++],value!=value)return!0}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;return!IS_INCLUDES&&-1}}},function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__(12).document&&document.documentElement},function(module,exports,__webpack_require__){"use strict";var isObject=__webpack_require__(18),setPrototypeOf=__webpack_require__(72).set;module.exports=function(that,target,C){var P,S=target.constructor;return S!==C&&"function"==typeof S&&(P=S.prototype)!==C.prototype&&isObject(P)&&setPrototypeOf&&setPrototypeOf(that,P),that}},function(module,exports,__webpack_require__){"use strict";var cof=__webpack_require__(61);module.exports=Object("z").propertyIsEnumerable(0)?Object:function(it){return"String"==cof(it)?it.split(""):Object(it)}},function(module,exports,__webpack_require__){"use strict";var Iterators=__webpack_require__(29),ITERATOR=__webpack_require__(9)("iterator"),ArrayProto=Array.prototype;module.exports=function(it){return void 0!==it&&(Iterators.Array===it||ArrayProto[ITERATOR]===it)}},function(module,exports,__webpack_require__){"use strict";var anObject=__webpack_require__(20);module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value)}catch(e){var ret=iterator["return"];throw void 0!==ret&&anObject(ret.call(iterator)),e}}},function(module,exports,__webpack_require__){"use strict";var create=__webpack_require__(70),descriptor=__webpack_require__(46),setToStringTag=__webpack_require__(47),IteratorPrototype={};__webpack_require__(22)(IteratorPrototype,__webpack_require__(9)("iterator"),function(){return this}),module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)}),setToStringTag(Constructor,NAME+" Iterator")}},function(module,exports,__webpack_require__){"use strict";var ITERATOR=__webpack_require__(9)("iterator"),SAFE_CLOSING=!1;try{var riter=[7][ITERATOR]();riter["return"]=function(){SAFE_CLOSING=!0},Array.from(riter,function(){throw 2})}catch(e){}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return!1;var safe=!1;try{var arr=[7],iter=arr[ITERATOR]();iter.next=function(){return{done:safe=!0}},arr[ITERATOR]=function(){return iter},exec(arr)}catch(e){}return safe}},function(module,exports,__webpack_require__){"use strict";module.exports=!1},function(module,exports,__webpack_require__){"use strict";var dP=__webpack_require__(23),anObject=__webpack_require__(20),getKeys=__webpack_require__(192);module.exports=__webpack_require__(16)?Object.defineProperties:function(O,Properties){anObject(O);for(var P,keys=getKeys(Properties),length=keys.length,i=0;length>i;)dP.f(O,P=keys[i++],Properties[P]);return O}},function(module,exports,__webpack_require__){"use strict";var pIE=__webpack_require__(193),createDesc=__webpack_require__(46),toIObject=__webpack_require__(37),toPrimitive=__webpack_require__(75),has=__webpack_require__(17),IE8_DOM_DEFINE=__webpack_require__(67),gOPD=Object.getOwnPropertyDescriptor;exports.f=__webpack_require__(16)?gOPD:function(O,P){if(O=toIObject(O),P=toPrimitive(P,!0),IE8_DOM_DEFINE)try{return gOPD(O,P)}catch(e){}if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P])}},function(module,exports,__webpack_require__){"use strict";var has=__webpack_require__(17),toObject=__webpack_require__(197),IE_PROTO=__webpack_require__(48)("IE_PROTO"),ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){return O=toObject(O),has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectProto:null}},function(module,exports,__webpack_require__){"use strict";var has=__webpack_require__(17),toIObject=__webpack_require__(37),arrayIndexOf=__webpack_require__(179)(!1),IE_PROTO=__webpack_require__(48)("IE_PROTO");module.exports=function(object,names){var key,O=toIObject(object),i=0,result=[];for(key in O)key!=IE_PROTO&&has(O,key)&&result.push(key);for(;names.length>i;)has(O,key=names[i++])&&(~arrayIndexOf(result,key)||result.push(key));return result}},function(module,exports,__webpack_require__){"use strict";var $keys=__webpack_require__(191),enumBugKeys=__webpack_require__(66);module.exports=Object.keys||function(O){return $keys(O,enumBugKeys)}},function(module,exports,__webpack_require__){"use strict";exports.f={}.propertyIsEnumerable},function(module,exports,__webpack_require__){"use strict";var global=__webpack_require__(12),dP=__webpack_require__(23),DESCRIPTORS=__webpack_require__(16),SPECIES=__webpack_require__(9)("species");module.exports=function(KEY){var C=global[KEY];DESCRIPTORS&&C&&!C[SPECIES]&&dP.f(C,SPECIES,{configurable:!0,get:function(){return this}})}},function(module,exports,__webpack_require__){"use strict";var toInteger=__webpack_require__(49),defined=__webpack_require__(35);module.exports=function(TO_STRING){return function(that,pos){var a,b,s=String(defined(that)),i=toInteger(pos),l=s.length;return i<0||i>=l?TO_STRING?"":void 0:(a=s.charCodeAt(i),a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536)}}},function(module,exports,__webpack_require__){"use strict";var toInteger=__webpack_require__(49),max=Math.max,min=Math.min;module.exports=function(index,length){return index=toInteger(index),index<0?max(index+length,0):min(index,length)}},function(module,exports,__webpack_require__){"use strict";var defined=__webpack_require__(35);module.exports=function(it){return Object(defined(it))}},function(module,exports,__webpack_require__){"use strict";var classof=__webpack_require__(43),ITERATOR=__webpack_require__(9)("iterator"),Iterators=__webpack_require__(29);module.exports=__webpack_require__(21).getIteratorMethod=function(it){if(void 0!=it)return it[ITERATOR]||it["@@iterator"]||Iterators[classof(it)]}},function(module,exports,__webpack_require__){"use strict";var addToUnscopables=__webpack_require__(177),step=__webpack_require__(68),Iterators=__webpack_require__(29),toIObject=__webpack_require__(37);module.exports=__webpack_require__(45)(Array,"Array",function(iterated,kind){this._t=toIObject(iterated),this._i=0,this._k=kind},function(){var O=this._t,kind=this._k,index=this._i++;return!O||index>=O.length?(this._t=void 0,step(1)):"keys"==kind?step(0,index):"values"==kind?step(0,O[index]):step(0,[index,O[index]])},"values"),Iterators.Arguments=Iterators.Array,addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries")},function(module,exports,__webpack_require__){"use strict";var strong=__webpack_require__(62);module.exports=__webpack_require__(64)("Map",function(get){return function(){return get(this,arguments.length>0?arguments[0]:void 0)}},{get:function(key){var entry=strong.getEntry(this,key);return entry&&entry.v},set:function(key,value){return strong.def(this,0===key?0:key,value)}},strong,!0)},function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(28);$export($export.S,"Object",{setPrototypeOf:__webpack_require__(72).set})},function(module,exports,__webpack_require__){"use strict";var strong=__webpack_require__(62);module.exports=__webpack_require__(64)("Set",function(get){return function(){return get(this,arguments.length>0?arguments[0]:void 0)}},{add:function(value){return strong.def(this,value=0===value?0:value,value)}},strong)},function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(28);$export($export.P+$export.R,"Map",{toJSON:__webpack_require__(63)("Map")})},function(module,exports,__webpack_require__){"use strict";var $export=__webpack_require__(28);$export($export.P+$export.R,"Set",{toJSON:__webpack_require__(63)("Set")})},function(module,exports,__webpack_require__){"use strict";module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}},function(module,exports){module.exports='<svg width="13px" height="21px" viewBox="0 0 13 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ios-back-button-icon</title><desc>Created with Sketch.</desc><defs></defs><g id="__3_inCE7__toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="__3_inCE7__ios" transform="translate(-34.000000, -30.000000)"><polygon id="__3_inCE7__ios-back-button-icon" points="34 40.5 44.5 30 46.5 32 38 40.5 46.5 49 44.5 51"></polygon></g></g></svg>'},function(module,exports){module.exports='<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>md-back-button-icon</title><desc>Created with Sketch.</desc><defs></defs><g id="__1KDQIIe__toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="__1KDQIIe__android" transform="translate(-32.000000, -32.000000)" fill-rule="nonzero"><polygon id="__1KDQIIe__md-back-button-icon" points="48 39 35.83 39 41.42 33.41 40 32 32 40 40 48 41.41 46.59 35.83 41 48 41"></polygon></g></g></svg>'}])});
/*** <End:onsenui LoadJs:"components/onsenui/js/onsenui.min.js"> ***/
/*** <End:onsenui> ***/

/*** <Start:monaca-core-utils> ***/
/*** <Start:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/**
 * Monaca Core Utility Library
 * This library requires cordova.js
 *
 * @version 2.0.6
 * @author  Asial Corporation
 */
window.monaca = window.monaca || {};

(function() {
    /*
     * monaca api queue.
     */
    monaca.apiQueue = monaca.apiQueue || {};
    monaca.apiQueue.paramsArray = [];
    monaca.apiQueue.exec = function(a,b,c,d,e){
        if (!monaca.isDeviceReady) {
            monaca.apiQueue.paramsArray.push([a,b,c,d,e]);
        } else {
            window.cordova.exec(a,b,c,d,e);
        }
    };
    monaca.apiQueue.next = function(){
        var params = monaca.apiQueue.paramsArray.shift();
        if (params) {
            window.cordova.exec(
                function(r) {
                  if (typeof params[0] === 'function') params[0](r);
                  monaca.apiQueue.next();
                },
                function(r) {
                  if (typeof params[1] === 'function') params[1](r);
                  monaca.apiQueue.next();
                },
                params[2],
                params[3],
                params[4]
            );
        }
    };

    monaca.isDeviceReady = monaca.isDeviceReady || false;
    document.addEventListener('deviceready', function(){
        window.monaca.isDeviceReady = true;
        monaca.apiQueue.next();
    }, false);

    /**
     * Check User-Agent
     */
    var isAndroid = !!(navigator.userAgent.match(/Android/i));
    var isIOS     = !!(navigator.userAgent.match(/iPhone|iPad|iPod/i));
    monaca.isAndroid = isAndroid;
    monaca.isIOS     = isIOS;

    /**
     * Obtain style property
     */
    monaca.retrieveUIStyle = function() {
        var argsArray = [].slice.apply(arguments);
        monaca.apiQueue.exec(arguments[arguments.length-1], null, "mobi.monaca.nativecomponent", "retrieve", argsArray);
    };

    /**
     * Update style property
     */
    monaca.updateUIStyle = function(id, name, value) {
        if (typeof id == "string") {
            var argsArray = [].slice.apply(arguments);
            monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", argsArray);
        } else {
            for (var i = 0; i < id.length; i++) {
                monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", [id[i], name, value]);
            }
        }
    };

    if (isAndroid) {
        monaca.retrieveUIStyle = function(id, name, success, failure) {
            monaca.apiQueue.exec(
                function(style) { success(style[name]); } || function() { },
                failure || function() { },
                "mobi.monaca.nativecomponent",
                "retrieve",
                [id]
            );
        };

        monaca.updateUIStyle = function(id, name, value, success, failure) {
            var style = {};
            style[name] = value;

            monaca.apiQueue.exec(
                success || function() { },
                failure || function() { },
                "mobi.monaca.nativecomponent",
                "update",
                [id, style]
            );
        };
    }

    /**
     * Spinner handling
     */
    monaca.showSpinner = function (options) {
        options = options || {};
        var src = options.src ? options.src : null;
        var frames = options.frames != null ? options.frames : null;
        var interval = options.interval != null ? options.interval : null;
        var backgroundColor = options.backgroundColor ? options.backgroundColor : null;
        var backgroundOpacity = options.backgroundOpacity != null ? options.backgroundOpacity : null;
        var title = options.title ? options.title : null;
        var titleColor = options.titleColor ? options.titleColor : null;
        var titleFontScale = options.titleFontScale != null ? options.titleFontScale : null;
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showSpinner', [ src, frames, interval, backgroundColor, backgroundOpacity, title, titleColor, titleFontScale, null ]);
    };

    monaca.hideSpinner = function(){
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideSpinner', []);
    };

    monaca.updateSpinnerTitle = function(newTitle){
        if (!newTitle) newTitle = "";
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'updateSpinnerTitle', [ newTitle ]);
    };

    var transitionPluginName = "Transit";

    /**
     * Open new page.
     */
    monaca.pushPage = function(path, options, param) {
        options = options || {};
        var animation = null;
        switch (options.animation) {
        case "lift":
          animation = "modal"; break;
        case "slide":
        case "slideLeft":
          animation = "push"; break;
        case "slideRight":
          animation = "slideRight"; break;
        default:
          animation = "push";
        }
        monaca.apiQueue.exec(null, null, transitionPluginName, animation, [path, options, param]);
    };
    /**
     * Close current page.
     */
    monaca.popPage = function(options) {
        options = options || {};
        var name = options.animation == 'lift' ? 'dismiss' : 'pop';
        monaca.apiQueue.exec(null, null, transitionPluginName, name, [options]);
    };

    /**
     * Open in browser.
     */
    monaca.invokeBrowser = function(url) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "browse", [url]);
    };

    /**
     * Load in current page.
     */
    monaca.load = function(path, options, param) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "link", [path, options, param]);
    };

    /**
     * return to top page.
     */
    monaca.home = function(options) {
        options = options || {};
        monaca.apiQueue.exec(null, null, transitionPluginName, "home", [options]);
    };

    /**
     * Clear stack
     */
    monaca.clearPageStack = function(clearAll) {
        clearAll = clearAll || false;
        monaca.apiQueue.exec(null, null, transitionPluginName, "clearPageStack", [clearAll]);
    };


    /**
     * Console API from independent PhoneGap.
     */
    window.monaca.console = window.monaca.console || {};

    /**
     * base method for send log.
     */
    monaca.console.sendLog = function(level, url, line, char, arguments) {
        var message;
        for (var i=0; i<arguments.length; i++){
            if (typeof arguments[i] == "string") {
                message = arguments[i];
            } else {
                message = JSON.stringify(arguments[i]);
            }

            if (isIOS) {
                // not checked yet  or  confirmed MonacaDebugger
                if (! monaca.isMonacaDebuggerChecked || monaca.isMonacaDebugger ) {
                  var head = message.substr(0, 5);
                  if (window.monaca.isDeviceReady !== true || (head != 'ERROR' && head != 'WARN:')) {
                      var xhr = new XMLHttpRequest();
                      var path = "https://monaca-debugger.local/log?level=" + encodeURIComponent(level) + "&message=" + encodeURIComponent(message) + "&at=" + (new Date()).getTime();
                      xhr.open("GET", path);
                      xhr.send();
                  }
                }
                window.orig_console[level](message);
            } else {
                window.console[level](message);
            }
        }
    }

    /**
     * monaca console methods
     */
    var methods = ["debug", "info", "log", "warn", "error"];
    for (var i=0; i<methods.length; i++) {
        var method = methods[i];
        monaca.console[method] = function(method) {
            return function() {
                monaca.console.sendLog(method, null, null, null, arguments);
            };
        }(method);
    }

    /** Replace window.console if iOS **/
    if (isIOS) {
      window.orig_console = window.console;
      window.console = window.monaca.console;
      window.addEventListener( "error" , function (desc, page, line, char) {
          monaca.console.sendLog("error", null, null, null, [ { "message" : desc.message , "page" : desc.filename , "line" : desc.lineno , "char" : desc.colno   } ]);
      } , false );
      // window.onerror = function (desc, page, line, char) {
      //    monaca.console.sendLog("error", page, line, char, [ { "message" : desc , "page" : page , "line" : line, "char" : char } ] );
      // };
    }
    /* Comment out for now
    window.onerror = function (desc, page, line, char) {
      monaca.console.sendLog("error", page, line, char, [desc]);
    };
    */

    window.monaca.splashScreen = window.monaca.splashScreen || {};
    var splashScreenPluginName = "MonacaSplashScreen";

    /**
     * hide SplashScreen.
     */
    monaca.splashScreen.hide = function() {
        if (isAndroid) {
            monaca.apiQueue.exec(null, null, splashScreenPluginName, "hide", []);
        } else {
            navigator.splashscreen.hide();
        }
    };

    // Set monaca.baseUrl
    if (typeof location.href !== "string") {
        console.warn("Cannot find base url");
        monaca.baseUrl = null;
    } else {
        monaca.baseUrl = location.href.split("/www/")[0] + "/www/";
    }

    /**
     * Get device ID
     */
    monaca.getDeviceId = function(callback) {
        monaca.apiQueue.exec(function(result) { callback(result.deviceId); }, null, "Monaca", "getRuntimeConfiguration", []);
    };

    monaca.getRuntimeConfiguration = function(success,failure) {
        monaca.apiQueue.exec( success , failure , "Monaca" , "getRuntimeConfiguration" , []);
    };

    monaca.isMonacaDebuggerChecked = false;
    monaca.isMonacaDebugger = null;

    monaca.getRuntimeConfiguration( function(result) {
        monaca.isMonacaDebuggerChecked = true;
        monaca.isMonacaDebugger = !! result.isMonacaDebugger;
    });


})();

/**
 * iOS Status Bar Plugin
 *
 * @author Asial Corporation
 * @date   2014/1/15
 */
window.StatusBar = window.StatusBar || {};

(function() {

  /*
    hideStatusBar
    support : iOS6,iOS7
  */
  StatusBar.hideStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideStatusBar', []);
  }

  /*
    showStatusBar
    support : iOS6,iOS7
  */
  StatusBar.showStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showStatusBar', []);
  }

  /*
    statusBarStyleDefault
    support : iOS6,iOS7
  */
  StatusBar.statusBarStyleDefault = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleDefault', []);
  }

  /*
    statusBarStyleLightContent
    support : iOS7
  */
  StatusBar.statusBarStyleLightContent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleLightContent', []);
  }

  /*
    statusBarStyleBlackOpaque
    support : iOS6
  */
  StatusBar.statusBarStyleBlackOpaque = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackOpaque', []);
  }

  /*
    statusBarStyleBlackTranslucent
    support : iOS6
  */
  StatusBar.statusBarStyleBlackTranslucent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackTranslucent', []);
  }

})();

/**
 * Monaca Cloud Functions
 *  Version 1.5.0
 *
 * @author Masahiro TANAKA <info@monaca.mobi>
 * @date   2013/03/17
 */
window.monaca = window.monaca || {};
window.monaca.cloud = window.monaca.cloud || {};

(function() {
    /**
     * Push Notification
     */
    monaca.cloud.Push = {};
    monaca.cloud.Push.callback = null;
    monaca.cloud.Push.callbackData = null;

    monaca.cloud.Push.send = function(data) {
        if (typeof monaca.cloud.Push.callback === "function") {
            monaca.cloud.Push.callback(data);
        } else {
            monaca.cloud.Push.callbackData = data;
        }
    };
    monaca.cloud.Push.setHandler = function(fn) {
        if (typeof fn !== "function") {
            console.warn("Push callback must be a function");
        } else {
            monaca.cloud.Push.callback = fn;
            if (monaca.cloud.Push.callbackData) {
                monaca.cloud.Push.callback(monaca.cloud.Push.callbackData);
                monaca.cloud.Push.callbackData = null;
            }
        }
    };

})();


/*
 * cloud
 */
(function(root) {
  var original$ = root.$;
  var originalZepto = root.Zepto;

  /* Zepto 1.1.3 - zepto event ajax deferred callbacks - zeptojs.com/license */
  var Zepto=function(){function k(t){return null==t?String(t):j[T.call(t)]||"object"}function $(t){return"function"==k(t)}function L(t){return null!=t&&t==t.window}function D(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function F(t){return"object"==k(t)}function Z(t){return F(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function R(t){return s.call(t,function(t){return null!=t})}function _(t){return t.length>0?n.fn.concat.apply([],t):t}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function W(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function z(t,e){return"number"!=typeof e||c[q(t)]?e:e+"px"}function H(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function I(n,i,r){for(e in i)r&&(Z(i[e])||A(i[e]))?(Z(i[e])&&!Z(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),I(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return $(e)?e.call(t,n,i):e}function U(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function X(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),Z(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if($(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=R(e);else if(F(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){I(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return D(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=k,n.isFunction=$,n.isWindow=L,n.isArray=A,n.isPlainObject=Z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if($(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&$(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return F(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!F(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!F(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!D(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=H(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(F(n))for(e in n)U(this,e,n[e]);else U(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&U(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==k(t))i||0===i?a=q(t)+":"+z(t,i):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?a+=q(e)+":"+z(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(X(t))},W(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=X(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&X(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?X(this,""):(i=X(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(W(t)," ")}),void X(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,X(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?L(s)?s["inner"+i]:D(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=k(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var a=t.isFunction(e[i])&&e[i];s[r[1]](function(){var e=a&&a.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=a?[e]:arguments;n[r[0]+"With"](i,s)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),e&&e.call(s,s),s}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,s=0,a=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===a?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>s;++s)r[s]&&t.isFunction(r[s].promise)?r[s].promise().done(h(s,l,r)).fail(u.reject).progress(h(s,c,f)):--a;return a||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto);

  root.$ = original$;
  root.Zepto = originalZepto;
  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};

  monaca.cloud.timeout = 30000;
  monaca.cloud.url = '%%%CLOUD_HOST%%%';
  monaca.cloud.backendId = '%%%BACKEND_ID%%%';
  monaca.cloud.apiKey = '%%%BACKEND_API_KEY%%%';
  monaca.cloud.deviceId = null;
  monaca.cloud.postQueue = [];

  /**
   * @property {jQuery} .
   */
  monaca.cloud.$ = Zepto;

  var MonacaCloudError = (function() {
    function MonacaCloudError(code, message, data) {
      if (typeof data === "undefined") {
        data = {};
      }
      this.code = code;
      this.message = message;
      this.data = data;
    }
    return MonacaCloudError;
  })();

  /**
   * @class
   */
  monaca.cloud.Error = function(code, message, data) {
    return new MonacaCloudError(code, message, data);
  };

  /**
   * @param {Number} msec .
   */
  monaca.cloud.setTimeout = function(msec) {
    this.timeout = msec;
  };

  // Get device id
  document.addEventListener("deviceready", function() {

    cordova.exec(function(result) {
        monaca.cloud.deviceId = new String(result.deviceId);
        monaca.cloud.url = new String(result.url);
        monaca.cloud.backendId = new String(result.backendId);
        monaca.cloud.apiKey = new String(result.apiKey);

        // execute and clear postQueue
        for (var i = 0; i < monaca.cloud.postQueue.length; i++) {
          monaca.cloud._doPost.apply(monaca.cloud, monaca.cloud.postQueue[i]);
        }
        monaca.cloud.postQueue = [];
      }, function(error) {
        console.error(error);
      },

      "Monaca",
      "getRuntimeConfiguration", []
    );

  }, false);

  // Others
  monaca.cloud._post = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    if (monaca.cloud.deviceId == null) {
      monaca.cloud.postQueue.push([method, params, dfd, ajaxOptions, beforeSuccess]);
    } else {
      monaca.cloud._doPost(method, params, dfd, ajaxOptions, beforeSuccess);
    }
  };

  monaca.cloud._doPost = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    var $ = monaca.cloud.$;

    if (typeof(ajaxOptions) === 'undefined') ajaxOptions = {};
    if ((typeof(method) === 'undefined') && (typeof(params) === 'undefined')) {
      throw new Error('Invalid arguments');
    }

    params['__api_key'] = monaca.cloud.apiKey;
    params['__device'] = monaca.cloud.deviceId;
    var sid = monaca.cloud._getSessionId();
    if (sid.length > 0) {
      params['__session'] = sid;
    }
    var data = JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: '1'
    });

    var o = $.extend(true, {
      url: this.url + this.backendId,
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: this.timeout,
      success: function(jsonResponse, status, xhr) {
        var sessionHeader = xhr.getResponseHeader('X-Set-Monaca-Cloud-Session');
        if (sessionHeader) {
          monaca.cloud._setSessionId(sessionHeader);
        }

        if (typeof(jsonResponse.error) !== 'undefined') {
          // has error code
          dfd.reject(jsonResponse.error);
        } else {
          // success
          if (typeof(jsonResponse.result.loginToken) !== 'undefined') {
            localStorage.monacaCloudLoginToken = jsonResponse.result.loginToken;
          }
          if (typeof(beforeSuccess) !== 'undefined') {
            beforeSuccess(jsonResponse, status, xhr, dfd);
          }
          dfd.resolve(jsonResponse.result);
        }
      },
      error: function(xhr, status) {
        switch (status) {
          case 'timeout':
            var err = monaca.cloud.Error(-11, 'Connection timeout');
            break;
          case 'parsererror':
            var err = monaca.cloud.Error(-12, 'Invalid response');
            break;
          default:
            var err = monaca.cloud.Error(-13, 'Invalid status code');
        }
        dfd.reject(err);
      }
    }, ajaxOptions);

    $.ajax(o);
  };

  var _sessionId = '';

  monaca.cloud._getSessionId = function() {
    return _sessionId;
  };

  monaca.cloud._setSessionId = function(id) {
    if (typeof id != 'string') {
      id = '';
    }
    _sessionId = id;
  };

})(window);
/*
 * CollectionItem
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollectionItem = (function() {

    function MonacaCloudCollectionItem(item, collection) {

      /**
       * @property {String} .
       */
      this._id = item._id;

      /**
       * @property {String} .
       */
      this._ownerUserOid = item._ownerUserOid;

      /**
       * @property {Date} .
       */
      this._createdAt = new Date(item._createdAt);

      /**
       * @property {Date} .
       */
      this._updatedAt = new Date(item._updatedAt);

      /**
       * @property {MonacaCloudCollection} .
       */
      this._collection = collection;


      for (var key in item) {
        if (key.substr(0, 1) != '_') {
          this[key] = item[key];
        }
      }
    }

    MonacaCloudCollectionItem.prototype = {

      /**
       * @return {$.Promise} .
       */
      update: function() {
        var dfd = new $.Deferred();
        var col = this._collection;
        var data = {};

        for (var key in this) {
          if (key.indexOf('_') !== 0) {
            data[key] = this[key];
          }
        }

        monaca.cloud._post('Collection.update', {
          collectionName: col.name,
          itemOid: this._id,
          data: data,
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      getPermission: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.getPermission', {
          collectionName: col.name,
          itemOid: this._id
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(permission, options) {
        var dfd = new $.Deferred();
        var col = this._collection;

        if (typeof(options) === 'undefined') {
          options = {};
        }

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: col.name,
          criteria: '_id == ?',
          bindParams: [this._id],
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      remove: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.delete', {
          collectionName: col.name,
          itemOid: this._id,
        }, dfd, {});

        return dfd.promise();
      },

      'delete': function() {
        return this.remove();
      }

    };


    return MonacaCloudCollectionItem;
  })();

  monaca.cloud.CollectionItem = function(item, collection) {
    return new MonacaCloudCollectionItem(item, collection);
  };

})(window);
/*
 * Collection
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollection = (function() {

    function MonacaCloudCollection(name) {
      this.name = name;
    }

    MonacaCloudCollection.prototype = {

      /**
       * @param {Object|Array} items .
       * @return {Array} result .
       */
      _makeCollectionItem: function(items) {
        var result = [];

        if (items instanceof Array) {
          for (var i = 0; i < items.length; i++) {
            result[i] = monaca.cloud.CollectionItem(items[i], this);
          }
        } else {
          result = monaca.cloud.CollectionItem(items, this);
        }

        return result;
      },

      /**
       * @param {Criteria|Array} criteria .
       */
      _validateCriteria: function(criteria) {
        if ((typeof(criteria) === 'undefined') || (typeof(criteria) === 'null')) {
          criteria = monaca.cloud.Criteria('');
        } else if (typeof(criteria) === 'string') {
          criteria = monaca.cloud.Criteria(criteria);
        }

        return criteria;
      },

      /**
       * @param {Object|Array} orderBy .
       * @param {Object} options .
       */
      _validateOptions: function(orderBy, options) {
        //if orderBy is hash, consider it as "options"
        if ((typeof(orderBy) === 'object') && (typeof(orderBy.length) === 'undefined')) {
          options = orderBy;
          if (typeof(options.orderBy) !== 'undefined') {
            orderBy = orderBy.orderBy;
          } else {
            orderBy = null;
          }
        }

        if (orderBy === '') {
          orderBy = null;
        }

        return {
          orderBy: orderBy,
          options: options
        };
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      find: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOne: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOneMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Object} item .
       * @param {Object} [permission] .
       * @return {$.Promise} .
       */
      insert: function(item, permission) {
        var self = this;
        var dfd = new $.Deferred();

        if (typeof(permission) === 'undefined') {
          permission = {};
        }

        monaca.cloud._post('Collection.insert', {
            collectionName: this.name,
            item: item,
            permission: permission
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var item = self._makeCollectionItem(e.result.item);
            dfd.resolve(item);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(criteria, permission, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: this.name,
          criteria: criteria.query,
          bindParams: criteria.bindParams,
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      }
    };

    return MonacaCloudCollection;
  })();


  monaca.cloud.Collection = function(name) {
    return new MonacaCloudCollection(name);
  };

})(window);
/*
 * Criteria
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCriteria = (function() {

    function MonacaCloudCriteria(query, bindParams) {
      this.query = query;
      this.bindParams = (typeof(bindParams) !== 'undefined') ? bindParams : [];
    }

    return MonacaCloudCriteria;
  })();


  monaca.cloud.Criteria = function(query, bindParams) {
    return new MonacaCloudCriteria(query, bindParams);
  };

})(window);
/*
 * Device
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Device = {

    /**
     * @param {String} name .
     * @return {$.Promise} .
     */
    getProperty: function(name) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: [name]
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties[name]);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {Array} names .
     * @return {$.Promise} .
     */
    getProperties: function(names) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: names
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {String} name .
     * @param {String} value .
     * @return {$.Promise} .
     */
    saveProperty: function(name, value) {
      var dfd = new $.Deferred();
      var param = {};

      if ((typeof(name) !== 'undefined') && (typeof(value) !== 'undefined')) {
        param = {
          properties: {}
        };
        param.properties[name] = value;
      }

      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    },

    /**
     * @param {Object} properties .
     * @return {$.Promise} .
     */
    saveProperties: function(properties) {
      var dfd = new $.Deferred();
      var param = {};

      if (typeof(properties) !== 'undefined') param.properties = properties;
      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    }

  };

})(window);
/*
 * Mailer
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Mailer = {

    /**
     * @param {String} userOid .
     * @param {String} templateName .
     * @param {Object} substituteParams .
     * @param {Object} [options] .
     * @return {$.Promise} .
     */
    sendMail: function(userOid, templateName, substituteParams, options) {
      var dfd = new $.Deferred();

      if (typeof(options) === 'undefined') {
        options = {};
      }

      monaca.cloud._post('Mailer.sendMail', {
        userOid: userOid,
        templateName: templateName,
        substituteParams: substituteParams,
        options: options
      }, dfd);

      return dfd.promise();
    }
  };

})(window);
/*
 * User
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.User = (function() {


    return {

      _oid: null,

      /**
       * @return {Boolean} .
       */
      isAuthenticated: function() {
        return (this._oid === null) ? false : true;
      },


      /**
       * @param {String} username .
       * @param {String} password .
       * @param {Object} [properties] .
       * @return {$.Promise} .
       */
      register: function(username, password, properties) {
        var dfd = new $.Deferred();
        var self = this;

        if (typeof(properties) === 'undefined') properties = {};

        monaca.cloud._post('User.register', {
            username: username,
            password: password,
            properties: properties
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );


        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      validate: function(username, properties) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.validate', {
          username: username,
          properties: properties
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} password .
       * @return {$.Promise} .
       */
      unregister: function(password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.unregister', {
            password: password
          }, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} password .
       * @return {$.Promise} .
       */
      login: function(username, password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.login', {
            username: username,
            password: password
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      autoLogin: function() {
        var dfd = new $.Deferred();
        var token = localStorage.monacaCloudLoginToken || '';
        var self = this;

        monaca.cloud._post('User.autoLogin', {
            loginToken: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      logout: function() {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.logout', {}, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} oldPassword .
       * @param {String} newPassword .
       * @return {$.Promise} .
       */
      updatePassword: function(oldPassword, newPassword) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.updatePassword', {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} options .
       * @return {$.Promise} .
       */
      sendPasswordResetToken: function(username, options) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.sendPasswordResetToken', {
          username: username,
          options: options
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} newPassword .
       * @param {String} token .
       * @return {$.Promise} .
       */
      resetPasswordAndLogin: function(username, newPassword, token) {
        var dfd = new $.Deferred();
        var self = this;

        monaca.cloud._post('User.resetPasswordAndLogin', {
            username: username,
            newPassword: newPassword,
            token: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @return {$.Promise} .
       */
      getProperty: function(name) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: [name]
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties[name]);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {Array} names .
       * @return {$.Promise} .
       */
      getProperties: function(names) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: names
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @param {String} value .
       * @return {$.Promise} .
       */
      saveProperty: function(name, value) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(name) !== 'undefined') {
          param = {
            properties: {}
          };
          param.properties[name] = value;
        }

        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      },

      /**
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      saveProperties: function(properties) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(properties) !== 'undefined') param.properties = properties;
        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      }

    };
  })();

})(window);

/*** <End:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/*** <End:monaca-core-utils> ***/