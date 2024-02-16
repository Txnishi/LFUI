import { c as commonjsGlobal, _ as _assertThisInitialized, a as _setPrototypeOf } from "./index-ad4c0016.js";
var check = function(it) {
  return it && it.Math === Math && it;
};
var global$r = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Function("return this")()
);
var objectGetOwnPropertyDescriptor = {};
var fails$A = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$z = fails$A;
var descriptors = !fails$z(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var fails$y = fails$A;
var functionBindNative = !fails$y(function() {
  var test2 = function() {
  }.bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$4 = functionBindNative;
var call$n = Function.prototype.call;
var functionCall = NATIVE_BIND$4 ? call$n.bind(call$n) : function() {
  return call$n.apply(call$n, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$5(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;
var createPropertyDescriptor$5 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var NATIVE_BIND$3 = functionBindNative;
var FunctionPrototype$3 = Function.prototype;
var call$m = FunctionPrototype$3.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$m, call$m);
var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$m.apply(fn, arguments);
  };
};
var uncurryThis$z = functionUncurryThis;
var toString$f = uncurryThis$z({}.toString);
var stringSlice$9 = uncurryThis$z("".slice);
var classofRaw$2 = function(it) {
  return stringSlice$9(toString$f(it), 8, -1);
};
var uncurryThis$y = functionUncurryThis;
var fails$x = fails$A;
var classof$c = classofRaw$2;
var $Object$4 = Object;
var split = uncurryThis$y("".split);
var indexedObject = fails$x(function() {
  return !$Object$4("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$c(it) === "String" ? split(it, "") : $Object$4(it);
} : $Object$4;
var isNullOrUndefined$9 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$8 = isNullOrUndefined$9;
var $TypeError$g = TypeError;
var requireObjectCoercible$9 = function(it) {
  if (isNullOrUndefined$8(it))
    throw new $TypeError$g("Can't call method on " + it);
  return it;
};
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$8 = requireObjectCoercible$9;
var toIndexedObject$b = function(it) {
  return IndexedObject$3(requireObjectCoercible$8(it));
};
var documentAll = typeof document == "object" && document.all;
var isCallable$q = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
  return typeof argument == "function" || argument === documentAll;
} : function(argument) {
  return typeof argument == "function";
};
var isCallable$p = isCallable$q;
var isObject$j = function(it) {
  return typeof it == "object" ? it !== null : isCallable$p(it);
};
var global$q = global$r;
var isCallable$o = isCallable$q;
var aFunction = function(argument) {
  return isCallable$o(argument) ? argument : void 0;
};
var getBuiltIn$b = function(namespace, method) {
  return arguments.length < 2 ? aFunction(global$q[namespace]) : global$q[namespace] && global$q[namespace][method];
};
var uncurryThis$x = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$x({}.isPrototypeOf);
var engineUserAgent = typeof navigator != "undefined" && String(navigator.userAgent) || "";
var global$p = global$r;
var userAgent$3 = engineUserAgent;
var process$4 = global$p.process;
var Deno$1 = global$p.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match)
      version = +match[1];
  }
}
var engineV8Version = version;
var V8_VERSION$3 = engineV8Version;
var fails$w = fails$A;
var global$o = global$r;
var $String$6 = global$o.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$w(function() {
  var symbol = Symbol("symbol detection");
  return !$String$6(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});
var NATIVE_SYMBOL$6 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$6 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var getBuiltIn$a = getBuiltIn$b;
var isCallable$n = isCallable$q;
var isPrototypeOf$6 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol2 = getBuiltIn$a("Symbol");
  return isCallable$n($Symbol2) && isPrototypeOf$6($Symbol2.prototype, $Object$3(it));
};
var $String$5 = String;
var tryToString$5 = function(argument) {
  try {
    return $String$5(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$m = isCallable$q;
var tryToString$4 = tryToString$5;
var $TypeError$f = TypeError;
var aCallable$b = function(argument) {
  if (isCallable$m(argument))
    return argument;
  throw new $TypeError$f(tryToString$4(argument) + " is not a function");
};
var aCallable$a = aCallable$b;
var isNullOrUndefined$7 = isNullOrUndefined$9;
var getMethod$6 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined$7(func) ? void 0 : aCallable$a(func);
};
var call$l = functionCall;
var isCallable$l = isCallable$q;
var isObject$i = isObject$j;
var $TypeError$e = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$l(fn = input.toString) && !isObject$i(val = call$l(fn, input)))
    return val;
  if (isCallable$l(fn = input.valueOf) && !isObject$i(val = call$l(fn, input)))
    return val;
  if (pref !== "string" && isCallable$l(fn = input.toString) && !isObject$i(val = call$l(fn, input)))
    return val;
  throw new $TypeError$e("Can't convert object to primitive value");
};
var sharedExports = {};
var shared$7 = {
  get exports() {
    return sharedExports;
  },
  set exports(v) {
    sharedExports = v;
  }
};
var isPure = false;
var global$n = global$r;
var defineProperty$8 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$8(global$n, key, { value, configurable: true, writable: true });
  } catch (error) {
    global$n[key] = value;
  }
  return value;
};
var global$m = global$r;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = global$m[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$7.exports = function(key, value) {
  return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: "3.35.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var requireObjectCoercible$7 = requireObjectCoercible$9;
var $Object$2 = Object;
var toObject$a = function(argument) {
  return $Object$2(requireObjectCoercible$7(argument));
};
var uncurryThis$w = functionUncurryThis;
var toObject$9 = toObject$a;
var hasOwnProperty = uncurryThis$w({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$9(it), key);
};
var uncurryThis$v = functionUncurryThis;
var id$2 = 0;
var postfix = Math.random();
var toString$e = uncurryThis$v(1 .toString);
var uid$4 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$e(++id$2 + postfix, 36);
};
var global$l = global$r;
var shared$6 = sharedExports;
var hasOwn$i = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL$5 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$l.Symbol;
var WellKnownSymbolsStore$1 = shared$6("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1["for"] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;
var wellKnownSymbol$p = function(name) {
  if (!hasOwn$i(WellKnownSymbolsStore$1, name)) {
    WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$5 && hasOwn$i(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore$1[name];
};
var call$k = functionCall;
var isObject$h = isObject$j;
var isSymbol$4 = isSymbol$5;
var getMethod$5 = getMethod$6;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$o = wellKnownSymbol$p;
var $TypeError$d = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$o("toPrimitive");
var toPrimitive$3 = function(input, pref) {
  if (!isObject$h(input) || isSymbol$4(input))
    return input;
  var exoticToPrim = getMethod$5(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$k(exoticToPrim, input, pref);
    if (!isObject$h(result) || isSymbol$4(result))
      return result;
    throw new $TypeError$d("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive$2 = toPrimitive$3;
var isSymbol$3 = isSymbol$5;
var toPropertyKey$5 = function(argument) {
  var key = toPrimitive$2(argument, "string");
  return isSymbol$3(key) ? key : key + "";
};
var global$k = global$r;
var isObject$g = isObject$j;
var document$3 = global$k.document;
var EXISTS$1 = isObject$g(document$3) && isObject$g(document$3.createElement);
var documentCreateElement$2 = function(it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};
var DESCRIPTORS$h = descriptors;
var fails$v = fails$A;
var createElement$1 = documentCreateElement$2;
var ie8DomDefine = !DESCRIPTORS$h && !fails$v(function() {
  return Object.defineProperty(createElement$1("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$g = descriptors;
var call$j = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;
var toIndexedObject$a = toIndexedObject$b;
var toPropertyKey$4 = toPropertyKey$5;
var hasOwn$h = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$a(O);
  P = toPropertyKey$4(P);
  if (IE8_DOM_DEFINE$1)
    try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {
    }
  if (hasOwn$h(O, P))
    return createPropertyDescriptor$4(!call$j(propertyIsEnumerableModule$1.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$f = descriptors;
var fails$u = fails$A;
var v8PrototypeDefineBug = DESCRIPTORS$f && fails$u(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$f = isObject$j;
var $String$4 = String;
var $TypeError$c = TypeError;
var anObject$m = function(argument) {
  if (isObject$f(argument))
    return argument;
  throw new $TypeError$c($String$4(argument) + " is not an object");
};
var DESCRIPTORS$e = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$l = anObject$m;
var toPropertyKey$3 = toPropertyKey$5;
var $TypeError$b = TypeError;
var $defineProperty$1 = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$e ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$l(O);
  P = toPropertyKey$3(P);
  anObject$l(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty2(O, P, Attributes) {
  anObject$l(O);
  P = toPropertyKey$3(P);
  anObject$l(Attributes);
  if (IE8_DOM_DEFINE)
    try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw new $TypeError$b("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$d = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var createNonEnumerableProperty$6 = DESCRIPTORS$d ? function(object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$3(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var makeBuiltInExports = {};
var makeBuiltIn$3 = {
  get exports() {
    return makeBuiltInExports;
  },
  set exports(v) {
    makeBuiltInExports = v;
  }
};
var DESCRIPTORS$c = descriptors;
var hasOwn$g = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype;
var getDescriptor = DESCRIPTORS$c && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$g(FunctionPrototype$2, "name");
var PROPER = EXISTS && function something() {
}.name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$c || DESCRIPTORS$c && getDescriptor(FunctionPrototype$2, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$u = functionUncurryThis;
var isCallable$k = isCallable$q;
var store$1 = sharedStore;
var functionToString$1 = uncurryThis$u(Function.toString);
if (!isCallable$k(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString$1(it);
  };
}
var inspectSource$3 = store$1.inspectSource;
var global$j = global$r;
var isCallable$j = isCallable$q;
var WeakMap$1 = global$j.WeakMap;
var weakMapBasicDetection = isCallable$j(WeakMap$1) && /native code/.test(String(WeakMap$1));
var shared$5 = sharedExports;
var uid$2 = uid$4;
var keys = shared$5("keys");
var sharedKey$4 = function(key) {
  return keys[key] || (keys[key] = uid$2(key));
};
var hiddenKeys$6 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$i = global$r;
var isObject$e = isObject$j;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$f = hasOwnProperty_1;
var shared$4 = sharedStore;
var sharedKey$3 = sharedKey$4;
var hiddenKeys$5 = hiddenKeys$6;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$4 = global$i.TypeError;
var WeakMap = global$i.WeakMap;
var set$1, get, has;
var enforce = function(it) {
  return has(it) ? get(it) : set$1(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$e(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$4("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared$4.state) {
  var store = shared$4.state || (shared$4.state = new WeakMap());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set$1 = function(it, metadata) {
    if (store.has(it))
      throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function(it) {
    return store.get(it) || {};
  };
  has = function(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$3("state");
  hiddenKeys$5[STATE] = true;
  set$1 = function(it, metadata) {
    if (hasOwn$f(it, STATE))
      throw new TypeError$4(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$f(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$f(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get,
  has,
  enforce,
  getterFor
};
var uncurryThis$t = functionUncurryThis;
var fails$t = fails$A;
var isCallable$i = isCallable$q;
var hasOwn$e = hasOwnProperty_1;
var DESCRIPTORS$b = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$5 = internalState;
var enforceInternalState = InternalStateModule$5.enforce;
var getInternalState$4 = InternalStateModule$5.get;
var $String$3 = String;
var defineProperty$7 = Object.defineProperty;
var stringSlice$8 = uncurryThis$t("".slice);
var replace$5 = uncurryThis$t("".replace);
var join$1 = uncurryThis$t([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$b && !fails$t(function() {
  return defineProperty$7(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice$8($String$3(name), 0, 7) === "Symbol(") {
    name = "[" + replace$5($String$3(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
  }
  if (options && options.getter)
    name = "get " + name;
  if (options && options.setter)
    name = "set " + name;
  if (!hasOwn$e(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$b)
      defineProperty$7(value, "name", { value: name, configurable: true });
    else
      value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$e(options, "arity") && value.length !== options.arity) {
    defineProperty$7(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$e(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$b)
        defineProperty$7(value, "prototype", { writable: false });
    } else if (value.prototype)
      value.prototype = void 0;
  } catch (error) {
  }
  var state = enforceInternalState(value);
  if (!hasOwn$e(state, "source")) {
    state.source = join$1(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$i(this) && getInternalState$4(this).source || inspectSource$2(this);
}, "toString");
var isCallable$h = isCallable$q;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$c = function(O, key, value, options) {
  if (!options)
    options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$h(value))
    makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple)
      O[key] = value;
    else
      defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe)
        delete O[key];
      else if (O[key])
        simple = true;
    } catch (error) {
    }
    if (simple)
      O[key] = value;
    else
      definePropertyModule$4.f(O, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
  }
  return O;
};
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor$1 = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$4 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max$2 = Math.max;
var min$4 = Math.min;
var toAbsoluteIndex$3 = function(index2, length) {
  var integer = toIntegerOrInfinity$3(index2);
  return integer < 0 ? max$2(integer + length, 0) : min$4(integer, length);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min$3 = Math.min;
var toLength$5 = function(argument) {
  var len = toIntegerOrInfinity$2(argument);
  return len > 0 ? min$3(len, 9007199254740991) : 0;
};
var toLength$4 = toLength$5;
var lengthOfArrayLike$8 = function(obj) {
  return toLength$4(obj.length);
};
var toIndexedObject$9 = toIndexedObject$b;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$7 = lengthOfArrayLike$8;
var createMethod$4 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$9($this);
    var length = lengthOfArrayLike$7(O);
    var index2 = toAbsoluteIndex$2(fromIndex, length);
    var value;
    if (IS_INCLUDES && el !== el)
      while (length > index2) {
        value = O[index2++];
        if (value !== value)
          return true;
      }
    else
      for (; length > index2; index2++) {
        if ((IS_INCLUDES || index2 in O) && O[index2] === el)
          return IS_INCLUDES || index2 || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$4(false)
};
var uncurryThis$s = functionUncurryThis;
var hasOwn$d = hasOwnProperty_1;
var toIndexedObject$8 = toIndexedObject$b;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$6;
var push$6 = uncurryThis$s([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$8(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$d(hiddenKeys$4, key) && hasOwn$d(O, key) && push$6(result, key);
  while (names.length > i)
    if (hasOwn$d(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$6(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$3 = enumBugKeys$2.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$3);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$9 = getBuiltIn$b;
var uncurryThis$r = functionUncurryThis;
var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
var anObject$k = anObject$m;
var concat$2 = uncurryThis$r([].concat);
var ownKeys$4 = getBuiltIn$9("Reflect", "ownKeys") || function ownKeys(it) {
  var keys4 = getOwnPropertyNamesModule$2.f(anObject$k(it));
  var getOwnPropertySymbols2 = getOwnPropertySymbolsModule$2.f;
  return getOwnPropertySymbols2 ? concat$2(keys4, getOwnPropertySymbols2(it)) : keys4;
};
var hasOwn$c = hasOwnProperty_1;
var ownKeys$3 = ownKeys$4;
var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;
var copyConstructorProperties$3 = function(target, source, exceptions) {
  var keys4 = ownKeys$3(source);
  var defineProperty5 = definePropertyModule$3.f;
  var getOwnPropertyDescriptor5 = getOwnPropertyDescriptorModule$2.f;
  for (var i = 0; i < keys4.length; i++) {
    var key = keys4[i];
    if (!hasOwn$c(target, key) && !(exceptions && hasOwn$c(exceptions, key))) {
      defineProperty5(target, key, getOwnPropertyDescriptor5(source, key));
    }
  }
};
var fails$s = fails$A;
var isCallable$g = isCallable$q;
var replacement = /#|\.prototype\./;
var isForced$4 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$g(detection) ? fails$s(detection) : !!detection;
};
var normalize = isForced$4.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$4.data = {};
var NATIVE = isForced$4.NATIVE = "N";
var POLYFILL = isForced$4.POLYFILL = "P";
var isForced_1 = isForced$4;
var global$h = global$r;
var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$b = defineBuiltIn$c;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$3 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$h;
  } else if (STATIC) {
    target = global$h[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global$h[TARGET] && global$h[TARGET].prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$4(target, key);
        targetProperty = descriptor && descriptor.value;
      } else
        targetProperty = target[key];
      FORCED2 = isForced$3(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED2 && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty)
          continue;
        copyConstructorProperties$2(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$4(sourceProperty, "sham", true);
      }
      defineBuiltIn$b(target, key, sourceProperty, options);
    }
};
var classofRaw$1 = classofRaw$2;
var uncurryThis$q = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw$1(fn) === "Function")
    return uncurryThis$q(fn);
};
var uncurryThis$p = functionUncurryThisClause;
var aCallable$9 = aCallable$b;
var NATIVE_BIND$2 = functionBindNative;
var bind$8 = uncurryThis$p(uncurryThis$p.bind);
var functionBindContext = function(fn, that) {
  aCallable$9(fn);
  return that === void 0 ? fn : NATIVE_BIND$2 ? bind$8(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var classof$b = classofRaw$2;
var isArray$5 = Array.isArray || function isArray(argument) {
  return classof$b(argument) === "Array";
};
var wellKnownSymbol$n = wellKnownSymbol$p;
var TO_STRING_TAG$2 = wellKnownSymbol$n("toStringTag");
var test$1 = {};
test$1[TO_STRING_TAG$2] = "z";
var toStringTagSupport = String(test$1) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$f = isCallable$q;
var classofRaw = classofRaw$2;
var wellKnownSymbol$m = wellKnownSymbol$p;
var TO_STRING_TAG$1 = wellKnownSymbol$m("toStringTag");
var $Object$1 = Object;
var CORRECT_ARGUMENTS = classofRaw(function() {
  return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$a = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable$f(O.callee) ? "Arguments" : result;
};
var uncurryThis$o = functionUncurryThis;
var fails$r = fails$A;
var isCallable$e = isCallable$q;
var classof$9 = classof$a;
var getBuiltIn$8 = getBuiltIn$b;
var inspectSource$1 = inspectSource$3;
var noop$1 = function() {
};
var construct$1 = getBuiltIn$8("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$o(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop$1);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$e(argument))
    return false;
  try {
    construct$1(noop$1, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$e(argument))
    return false;
  switch (classof$9(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$4 = !construct$1 || fails$r(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var isArray$4 = isArray$5;
var isConstructor$3 = isConstructor$4;
var isObject$d = isObject$j;
var wellKnownSymbol$l = wellKnownSymbol$p;
var SPECIES$6 = wellKnownSymbol$l("species");
var $Array$2 = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C;
  if (isArray$4(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor$3(C) && (C === $Array$2 || isArray$4(C.prototype)))
      C = void 0;
    else if (isObject$d(C)) {
      C = C[SPECIES$6];
      if (C === null)
        C = void 0;
    }
  }
  return C === void 0 ? $Array$2 : C;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$2 = function(originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};
var bind$7 = functionBindContext;
var uncurryThis$n = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toObject$8 = toObject$a;
var lengthOfArrayLike$6 = lengthOfArrayLike$8;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;
var push$5 = uncurryThis$n([].push);
var createMethod$3 = function(TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject$8($this);
    var self2 = IndexedObject$2(O);
    var length = lengthOfArrayLike$6(self2);
    var boundFunction = bind$7(callbackfn, that);
    var index2 = 0;
    var create4 = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create4($this, length) : IS_FILTER || IS_FILTER_REJECT ? create4($this, 0) : void 0;
    var value, result;
    for (; length > index2; index2++)
      if (NO_HOLES || index2 in self2) {
        value = self2[index2];
        result = boundFunction(value, index2, O);
        if (TYPE) {
          if (IS_MAP)
            target[index2] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index2;
              case 2:
                push$5(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push$5(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$3(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$3(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$3(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$3(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$3(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$3(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$3(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$3(7)
};
var fails$q = fails$A;
var wellKnownSymbol$k = wellKnownSymbol$p;
var V8_VERSION$2 = engineV8Version;
var SPECIES$5 = wellKnownSymbol$k("species");
var arrayMethodHasSpeciesSupport$4 = function(METHOD_NAME) {
  return V8_VERSION$2 >= 51 || !fails$q(function() {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$5] = function() {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};
var $$E = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$4;
var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3("map");
$$E({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  map: function map(callbackfn) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var classof$8 = classof$a;
var $String$2 = String;
var toString$d = function(argument) {
  if (classof$8(argument) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return $String$2(argument);
};
var anObject$j = anObject$m;
var regexpFlags$1 = function() {
  var that = anObject$j(this);
  var result = "";
  if (that.hasIndices)
    result += "d";
  if (that.global)
    result += "g";
  if (that.ignoreCase)
    result += "i";
  if (that.multiline)
    result += "m";
  if (that.dotAll)
    result += "s";
  if (that.unicode)
    result += "u";
  if (that.unicodeSets)
    result += "v";
  if (that.sticky)
    result += "y";
  return result;
};
var fails$p = fails$A;
var global$g = global$r;
var $RegExp$2 = global$g.RegExp;
var UNSUPPORTED_Y$2 = fails$p(function() {
  var re = $RegExp$2("a", "y");
  re.lastIndex = 2;
  return re.exec("abcd") !== null;
});
var MISSED_STICKY = UNSUPPORTED_Y$2 || fails$p(function() {
  return !$RegExp$2("a", "y").sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$p(function() {
  var re = $RegExp$2("^r", "gy");
  re.lastIndex = 2;
  return re.exec("str") !== null;
});
var regexpStickyHelpers = {
  BROKEN_CARET,
  MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};
var objectDefineProperties = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;
var objectKeys$2 = Object.keys || function keys2(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};
var DESCRIPTORS$a = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$i = anObject$m;
var toIndexedObject$7 = toIndexedObject$b;
var objectKeys$1 = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS$a && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$i(O);
  var props = toIndexedObject$7(Properties);
  var keys4 = objectKeys$1(Properties);
  var length = keys4.length;
  var index2 = 0;
  var key;
  while (length > index2)
    definePropertyModule$2.f(O, key = keys4[index2++], props[key]);
  return O;
};
var getBuiltIn$7 = getBuiltIn$b;
var html$2 = getBuiltIn$7("document", "documentElement");
var anObject$h = anObject$m;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$6;
var html$1 = html$2;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$4;
var GT = ">";
var LT = "<";
var PROTOTYPE$1 = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$2("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement$1("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html$1.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys$2[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$h(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule$1.f(result, Properties);
};
var fails$o = fails$A;
var global$f = global$r;
var $RegExp$1 = global$f.RegExp;
var regexpUnsupportedDotAll = fails$o(function() {
  var re = $RegExp$1(".", "s");
  return !(re.dotAll && re.test("\n") && re.flags === "s");
});
var fails$n = fails$A;
var global$e = global$r;
var $RegExp = global$e.RegExp;
var regexpUnsupportedNcg = fails$n(function() {
  var re = $RegExp("(?<a>b)", "g");
  return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
});
var call$i = functionCall;
var uncurryThis$m = functionUncurryThis;
var toString$c = toString$d;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared$3 = sharedExports;
var create$4 = objectCreate;
var getInternalState$3 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared$3("native-string-replace", String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$5 = uncurryThis$m("".charAt);
var indexOf = uncurryThis$m("".indexOf);
var replace$4 = uncurryThis$m("".replace);
var stringSlice$7 = uncurryThis$m("".slice);
var UPDATES_LAST_INDEX_WRONG = function() {
  var re1 = /a/;
  var re2 = /b*/g;
  call$i(nativeExec, re1, "a");
  call$i(nativeExec, re2, "a");
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;
var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) {
  patchedExec = function exec2(string) {
    var re = this;
    var state = getInternalState$3(re);
    var str = toString$c(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match2, i, object, group;
    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$i(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }
    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$i(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
      flags = replace$4(flags, "y", "");
      if (indexOf(flags, "g") === -1) {
        flags += "g";
      }
      strCopy = stringSlice$7(str, re.lastIndex);
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$5(str, re.lastIndex - 1) !== "\n")) {
        source = "(?: " + source + ")";
        strCopy = " " + strCopy;
        charsAdded++;
      }
      reCopy = new RegExp("^(?:" + source + ")", flags);
    }
    if (NPCG_INCLUDED) {
      reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
    }
    if (UPDATES_LAST_INDEX_WRONG)
      lastIndex = re.lastIndex;
    match2 = call$i(nativeExec, sticky ? reCopy : re, strCopy);
    if (sticky) {
      if (match2) {
        match2.input = stringSlice$7(match2.input, charsAdded);
        match2[0] = stringSlice$7(match2[0], charsAdded);
        match2.index = re.lastIndex;
        re.lastIndex += match2[0].length;
      } else
        re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match2) {
      re.lastIndex = re.global ? match2.index + match2[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match2 && match2.length > 1) {
      call$i(nativeReplace, match2[0], reCopy, function() {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === void 0)
            match2[i] = void 0;
        }
      });
    }
    if (match2 && groups) {
      match2.groups = object = create$4(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match2[group[1]];
      }
    }
    return match2;
  };
}
var regexpExec$2 = patchedExec;
var $$D = _export;
var exec$1 = regexpExec$2;
$$D({ target: "RegExp", proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});
var call$h = functionCall;
var defineBuiltIn$a = defineBuiltIn$c;
var regexpExec$1 = regexpExec$2;
var fails$m = fails$A;
var wellKnownSymbol$j = wellKnownSymbol$p;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var SPECIES$4 = wellKnownSymbol$j("species");
var RegExpPrototype$2 = RegExp.prototype;
var fixRegexpWellKnownSymbolLogic = function(KEY, exec2, FORCED2, SHAM) {
  var SYMBOL2 = wellKnownSymbol$j(KEY);
  var DELEGATES_TO_SYMBOL = !fails$m(function() {
    var O = {};
    O[SYMBOL2] = function() {
      return 7;
    };
    return ""[KEY](O) !== 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$m(function() {
    var execCalled = false;
    var re = /a/;
    if (KEY === "split") {
      re = {};
      re.constructor = {};
      re.constructor[SPECIES$4] = function() {
        return re;
      };
      re.flags = "";
      re[SYMBOL2] = /./[SYMBOL2];
    }
    re.exec = function() {
      execCalled = true;
      return null;
    };
    re[SYMBOL2]("");
    return !execCalled;
  });
  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED2) {
    var nativeRegExpMethod = /./[SYMBOL2];
    var methods = exec2(SYMBOL2, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          return { done: true, value: call$h(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call$h(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });
    defineBuiltIn$a(String.prototype, KEY, methods[0]);
    defineBuiltIn$a(RegExpPrototype$2, SYMBOL2, methods[1]);
  }
  if (SHAM)
    createNonEnumerableProperty$3(RegExpPrototype$2[SYMBOL2], "sham", true);
};
var uncurryThis$l = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$b = toString$d;
var requireObjectCoercible$6 = requireObjectCoercible$9;
var charAt$4 = uncurryThis$l("".charAt);
var charCodeAt$2 = uncurryThis$l("".charCodeAt);
var stringSlice$6 = uncurryThis$l("".slice);
var createMethod$2 = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$b(requireObjectCoercible$6($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size)
      return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt$2(S, position);
    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt$2(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$4(S, position) : first : CONVERT_TO_STRING ? stringSlice$6(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};
var charAt$3 = stringMultibyte.charAt;
var advanceStringIndex$3 = function(S, index2, unicode) {
  return index2 + (unicode ? charAt$3(S, index2).length : 1);
};
var call$g = functionCall;
var anObject$g = anObject$m;
var isCallable$d = isCallable$q;
var classof$7 = classofRaw$2;
var regexpExec = regexpExec$2;
var $TypeError$a = TypeError;
var regexpExecAbstract = function(R, S) {
  var exec2 = R.exec;
  if (isCallable$d(exec2)) {
    var result = call$g(exec2, R, S);
    if (result !== null)
      anObject$g(result);
    return result;
  }
  if (classof$7(R) === "RegExp")
    return call$g(regexpExec, R, S);
  throw new $TypeError$a("RegExp#exec called on incompatible receiver");
};
var call$f = functionCall;
var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
var anObject$f = anObject$m;
var isNullOrUndefined$6 = isNullOrUndefined$9;
var toLength$3 = toLength$5;
var toString$a = toString$d;
var requireObjectCoercible$5 = requireObjectCoercible$9;
var getMethod$4 = getMethod$6;
var advanceStringIndex$2 = advanceStringIndex$3;
var regExpExec$3 = regexpExecAbstract;
fixRegExpWellKnownSymbolLogic$2("match", function(MATCH2, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match2(regexp) {
      var O = requireObjectCoercible$5(this);
      var matcher = isNullOrUndefined$6(regexp) ? void 0 : getMethod$4(regexp, MATCH2);
      return matcher ? call$f(matcher, regexp, O) : new RegExp(regexp)[MATCH2](toString$a(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(string) {
      var rx = anObject$f(this);
      var S = toString$a(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done)
        return res.value;
      if (!rx.global)
        return regExpExec$3(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$3(rx, S)) !== null) {
        var matchStr = toString$a(result[0]);
        A[n] = matchStr;
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex$2(S, toLength$3(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});
var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var apply$4 = FunctionPrototype$1.apply;
var call$e = FunctionPrototype$1.call;
var functionApply$1 = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND$1 ? call$e.bind(apply$4) : function() {
  return call$e.apply(apply$4, arguments);
});
var uncurryThis$k = functionUncurryThis;
var toObject$7 = toObject$a;
var floor = Math.floor;
var charAt$2 = uncurryThis$k("".charAt);
var replace$3 = uncurryThis$k("".replace);
var stringSlice$5 = uncurryThis$k("".slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
var getSubstitution$1 = function(matched, str, position, captures, namedCaptures, replacement2) {
  var tailPos = position + matched.length;
  var m2 = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== void 0) {
    namedCaptures = toObject$7(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace$3(replacement2, symbols, function(match2, ch) {
    var capture;
    switch (charAt$2(ch, 0)) {
      case "$":
        return "$";
      case "&":
        return matched;
      case "`":
        return stringSlice$5(str, 0, position);
      case "'":
        return stringSlice$5(str, tailPos);
      case "<":
        capture = namedCaptures[stringSlice$5(ch, 1, -1)];
        break;
      default:
        var n = +ch;
        if (n === 0)
          return match2;
        if (n > m2) {
          var f = floor(n / 10);
          if (f === 0)
            return match2;
          if (f <= m2)
            return captures[f - 1] === void 0 ? charAt$2(ch, 1) : captures[f - 1] + charAt$2(ch, 1);
          return match2;
        }
        capture = captures[n - 1];
    }
    return capture === void 0 ? "" : capture;
  });
};
var apply$3 = functionApply$1;
var call$d = functionCall;
var uncurryThis$j = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var fails$l = fails$A;
var anObject$e = anObject$m;
var isCallable$c = isCallable$q;
var isNullOrUndefined$5 = isNullOrUndefined$9;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength$2 = toLength$5;
var toString$9 = toString$d;
var requireObjectCoercible$4 = requireObjectCoercible$9;
var advanceStringIndex$1 = advanceStringIndex$3;
var getMethod$3 = getMethod$6;
var getSubstitution = getSubstitution$1;
var regExpExec$2 = regexpExecAbstract;
var wellKnownSymbol$i = wellKnownSymbol$p;
var REPLACE = wellKnownSymbol$i("replace");
var max$1 = Math.max;
var min$2 = Math.min;
var concat$1 = uncurryThis$j([].concat);
var push$4 = uncurryThis$j([].push);
var stringIndexOf$1 = uncurryThis$j("".indexOf);
var stringSlice$4 = uncurryThis$j("".slice);
var maybeToString = function(it) {
  return it === void 0 ? it : String(it);
};
var REPLACE_KEEPS_$0 = function() {
  return "a".replace(/./, "$0") === "$0";
}();
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
  if (/./[REPLACE]) {
    return /./[REPLACE]("a", "$0") === "";
  }
  return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$l(function() {
  var re = /./;
  re.exec = function() {
    var result = [];
    result.groups = { a: "7" };
    return result;
  };
  return "".replace(re, "$<a>") !== "7";
});
fixRegExpWellKnownSymbolLogic$1("replace", function(_, nativeReplace2, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$4(this);
      var replacer = isNullOrUndefined$5(searchValue) ? void 0 : getMethod$3(searchValue, REPLACE);
      return replacer ? call$d(replacer, searchValue, O, replaceValue) : call$d(nativeReplace2, toString$9(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(string, replaceValue) {
      var rx = anObject$e(this);
      var S = toString$9(string);
      if (typeof replaceValue == "string" && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, "$<") === -1) {
        var res = maybeCallNative(nativeReplace2, rx, S, replaceValue);
        if (res.done)
          return res.value;
      }
      var functionalReplace = isCallable$c(replaceValue);
      if (!functionalReplace)
        replaceValue = toString$9(replaceValue);
      var global2 = rx.global;
      var fullUnicode;
      if (global2) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      var result;
      while (true) {
        result = regExpExec$2(rx, S);
        if (result === null)
          break;
        push$4(results, result);
        if (!global2)
          break;
        var matchStr = toString$9(result[0]);
        if (matchStr === "")
          rx.lastIndex = advanceStringIndex$1(S, toLength$2(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = "";
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$9(result[0]);
        var position = max$1(min$2(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement2;
        for (var j = 1; j < result.length; j++)
          push$4(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat$1([matched], captures, position, S);
          if (namedCaptures !== void 0)
            push$4(replacerArgs, namedCaptures);
          replacement2 = toString$9(apply$3(replaceValue, void 0, replacerArgs));
        } else {
          replacement2 = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$4(S, nextSourcePosition, position) + replacement2;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$4(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
var isObject$c = isObject$j;
var classof$6 = classofRaw$2;
var wellKnownSymbol$h = wellKnownSymbol$p;
var MATCH$1 = wellKnownSymbol$h("match");
var isRegexp = function(it) {
  var isRegExp2;
  return isObject$c(it) && ((isRegExp2 = it[MATCH$1]) !== void 0 ? !!isRegExp2 : classof$6(it) === "RegExp");
};
var isRegExp = isRegexp;
var $TypeError$9 = TypeError;
var notARegexp = function(it) {
  if (isRegExp(it)) {
    throw new $TypeError$9("The method doesn't accept regular expressions");
  }
  return it;
};
var wellKnownSymbol$g = wellKnownSymbol$p;
var MATCH = wellKnownSymbol$g("match");
var correctIsRegexpLogic = function(METHOD_NAME) {
  var regexp = /./;
  try {
    "/./"[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return "/./"[METHOD_NAME](regexp);
    } catch (error2) {
    }
  }
  return false;
};
var $$C = _export;
var uncurryThis$i = functionUncurryThisClause;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var toLength$1 = toLength$5;
var toString$8 = toString$d;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$3 = requireObjectCoercible$9;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;
var stringSlice$3 = uncurryThis$i("".slice);
var min$1 = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic$1("startsWith");
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function() {
  var descriptor = getOwnPropertyDescriptor$3(String.prototype, "startsWith");
  return descriptor && !descriptor.writable;
}();
$$C({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString) {
    var that = toString$8(requireObjectCoercible$3(this));
    notARegExp$1(searchString);
    var index2 = toLength$1(min$1(arguments.length > 1 ? arguments[1] : void 0, that.length));
    var search = toString$8(searchString);
    return stringSlice$3(that, index2, index2 + search.length) === search;
  }
});
var fails$k = fails$A;
var arrayMethodIsStrict$6 = function(METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$k(function() {
    method.call(null, argument || function() {
      return 1;
    }, 1);
  });
};
var $$B = _export;
var uncurryThis$h = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toIndexedObject$6 = toIndexedObject$b;
var arrayMethodIsStrict$5 = arrayMethodIsStrict$6;
var nativeJoin = uncurryThis$h([].join);
var ES3_STRINGS = IndexedObject$1 !== Object;
var FORCED$7 = ES3_STRINGS || !arrayMethodIsStrict$5("join", ",");
$$B({ target: "Array", proto: true, forced: FORCED$7 }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject$6(this), separator === void 0 ? "," : separator);
  }
});
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}
var objectGetOwnPropertyNamesExternal = {};
var uncurryThis$g = functionUncurryThis;
var arraySlice$4 = uncurryThis$g([].slice);
var classof$5 = classofRaw$2;
var toIndexedObject$5 = toIndexedObject$b;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$3 = arraySlice$4;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$3(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$5(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$5(it));
};
var makeBuiltIn = makeBuiltInExports;
var defineProperty$6 = objectDefineProperty;
var defineBuiltInAccessor$5 = function(target, name, descriptor) {
  if (descriptor.get)
    makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set)
    makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$6.f(target, name, descriptor);
};
var wellKnownSymbolWrapped = {};
var wellKnownSymbol$f = wellKnownSymbol$p;
wellKnownSymbolWrapped.f = wellKnownSymbol$f;
var global$d = global$r;
var path$2 = global$d;
var path$1 = path$2;
var hasOwn$b = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$5 = objectDefineProperty.f;
var wellKnownSymbolDefine = function(NAME2) {
  var Symbol2 = path$1.Symbol || (path$1.Symbol = {});
  if (!hasOwn$b(Symbol2, NAME2))
    defineProperty$5(Symbol2, NAME2, {
      value: wrappedWellKnownSymbolModule$1.f(NAME2)
    });
};
var call$c = functionCall;
var getBuiltIn$6 = getBuiltIn$b;
var wellKnownSymbol$e = wellKnownSymbol$p;
var defineBuiltIn$9 = defineBuiltIn$c;
var symbolDefineToPrimitive = function() {
  var Symbol2 = getBuiltIn$6("Symbol");
  var SymbolPrototype2 = Symbol2 && Symbol2.prototype;
  var valueOf = SymbolPrototype2 && SymbolPrototype2.valueOf;
  var TO_PRIMITIVE2 = wellKnownSymbol$e("toPrimitive");
  if (SymbolPrototype2 && !SymbolPrototype2[TO_PRIMITIVE2]) {
    defineBuiltIn$9(SymbolPrototype2, TO_PRIMITIVE2, function(hint) {
      return call$c(valueOf, this);
    }, { arity: 1 });
  }
};
var defineProperty$4 = objectDefineProperty.f;
var hasOwn$a = hasOwnProperty_1;
var wellKnownSymbol$d = wellKnownSymbol$p;
var TO_STRING_TAG = wellKnownSymbol$d("toStringTag");
var setToStringTag$6 = function(target, TAG, STATIC) {
  if (target && !STATIC)
    target = target.prototype;
  if (target && !hasOwn$a(target, TO_STRING_TAG)) {
    defineProperty$4(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};
var $$A = _export;
var global$c = global$r;
var call$b = functionCall;
var uncurryThis$f = functionUncurryThis;
var DESCRIPTORS$9 = descriptors;
var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var fails$j = fails$A;
var hasOwn$9 = hasOwnProperty_1;
var isPrototypeOf$5 = objectIsPrototypeOf;
var anObject$d = anObject$m;
var toIndexedObject$4 = toIndexedObject$b;
var toPropertyKey$2 = toPropertyKey$5;
var $toString$1 = toString$d;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var nativeObjectCreate = objectCreate;
var objectKeys = objectKeys$2;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var defineBuiltIn$8 = defineBuiltIn$c;
var defineBuiltInAccessor$4 = defineBuiltInAccessor$5;
var shared$2 = sharedExports;
var sharedKey$1 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$6;
var uid$1 = uid$4;
var wellKnownSymbol$c = wellKnownSymbol$p;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
var defineSymbolToPrimitive = symbolDefineToPrimitive;
var setToStringTag$5 = setToStringTag$6;
var InternalStateModule$4 = internalState;
var $forEach$1 = arrayIteration.forEach;
var HIDDEN = sharedKey$1("hidden");
var SYMBOL = "Symbol";
var PROTOTYPE = "prototype";
var setInternalState$4 = InternalStateModule$4.set;
var getInternalState$2 = InternalStateModule$4.getterFor(SYMBOL);
var ObjectPrototype$2 = Object[PROTOTYPE];
var $Symbol = global$c.Symbol;
var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
var RangeError = global$c.RangeError;
var TypeError$3 = global$c.TypeError;
var QObject = global$c.QObject;
var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
var nativeDefineProperty = definePropertyModule$1.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push$3 = uncurryThis$f([].push);
var AllSymbols = shared$2("symbols");
var ObjectPrototypeSymbols = shared$2("op-symbols");
var WellKnownSymbolsStore = shared$2("wks");
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var fallbackDefineProperty = function(O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$2, P);
  if (ObjectPrototypeDescriptor)
    delete ObjectPrototype$2[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
    nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
  }
};
var setSymbolDescriptor = DESCRIPTORS$9 && fails$j(function() {
  return nativeObjectCreate(nativeDefineProperty({}, "a", {
    get: function() {
      return nativeDefineProperty(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;
var wrap = function(tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
  setInternalState$4(symbol, {
    type: SYMBOL,
    tag,
    description
  });
  if (!DESCRIPTORS$9)
    symbol.description = description;
  return symbol;
};
var $defineProperty = function defineProperty3(O, P, Attributes) {
  if (O === ObjectPrototype$2)
    $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$d(O);
  var key = toPropertyKey$2(P);
  anObject$d(Attributes);
  if (hasOwn$9(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$9(O, HIDDEN))
        nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$2(1, nativeObjectCreate(null)));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$9(O, HIDDEN) && O[HIDDEN][key])
        O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$2(0, false) });
    }
    return setSymbolDescriptor(O, key, Attributes);
  }
  return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties2(O, Properties) {
  anObject$d(O);
  var properties = toIndexedObject$4(Properties);
  var keys4 = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys4, function(key) {
    if (!DESCRIPTORS$9 || call$b($propertyIsEnumerable, properties, key))
      $defineProperty(O, key, properties[key]);
  });
  return O;
};
var $create = function create2(O, Properties) {
  return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable2(V) {
  var P = toPropertyKey$2(V);
  var enumerable = call$b(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$2 && hasOwn$9(AllSymbols, P) && !hasOwn$9(ObjectPrototypeSymbols, P))
    return false;
  return enumerable || !hasOwn$9(this, P) || !hasOwn$9(AllSymbols, P) || hasOwn$9(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor2(O, P) {
  var it = toIndexedObject$4(O);
  var key = toPropertyKey$2(P);
  if (it === ObjectPrototype$2 && hasOwn$9(AllSymbols, key) && !hasOwn$9(ObjectPrototypeSymbols, key))
    return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && hasOwn$9(AllSymbols, key) && !(hasOwn$9(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames3(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
  var result = [];
  $forEach$1(names, function(key) {
    if (!hasOwn$9(AllSymbols, key) && !hasOwn$9(hiddenKeys$1, key))
      push$3(result, key);
  });
  return result;
};
var $getOwnPropertySymbols = function(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
  var result = [];
  $forEach$1(names, function(key) {
    if (hasOwn$9(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$9(ObjectPrototype$2, key))) {
      push$3(result, AllSymbols[key]);
    }
  });
  return result;
};
if (!NATIVE_SYMBOL$4) {
  $Symbol = function Symbol2() {
    if (isPrototypeOf$5(SymbolPrototype$1, this))
      throw new TypeError$3("Symbol is not a constructor");
    var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString$1(arguments[0]);
    var tag = uid$1(description);
    var setter = function(value) {
      var $this = this === void 0 ? global$c : this;
      if ($this === ObjectPrototype$2)
        call$b(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$9($this, HIDDEN) && hasOwn$9($this[HIDDEN], tag))
        $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor$2(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError))
          throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS$9 && USE_SETTER)
      setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };
  SymbolPrototype$1 = $Symbol[PROTOTYPE];
  defineBuiltIn$8(SymbolPrototype$1, "toString", function toString4() {
    return getInternalState$2(this).tag;
  });
  defineBuiltIn$8($Symbol, "withoutSetter", function(description) {
    return wrap(uid$1(description), description);
  });
  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule$1.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;
  wrappedWellKnownSymbolModule.f = function(name) {
    return wrap(wellKnownSymbol$c(name), name);
  };
  if (DESCRIPTORS$9) {
    defineBuiltInAccessor$4(SymbolPrototype$1, "description", {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
    {
      defineBuiltIn$8(ObjectPrototype$2, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
    }
  }
}
$$A({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$4, sham: !NATIVE_SYMBOL$4 }, {
  Symbol: $Symbol
});
$forEach$1(objectKeys(WellKnownSymbolsStore), function(name) {
  defineWellKnownSymbol$1(name);
});
$$A({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$4 }, {
  useSetter: function() {
    USE_SETTER = true;
  },
  useSimple: function() {
    USE_SETTER = false;
  }
});
$$A({ target: "Object", stat: true, forced: !NATIVE_SYMBOL$4, sham: !DESCRIPTORS$9 }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$$A({ target: "Object", stat: true, forced: !NATIVE_SYMBOL$4 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});
defineSymbolToPrimitive();
setToStringTag$5($Symbol, SYMBOL);
hiddenKeys$1[HIDDEN] = true;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var symbolRegistryDetection = NATIVE_SYMBOL$3 && !!Symbol["for"] && !!Symbol.keyFor;
var $$z = _export;
var getBuiltIn$5 = getBuiltIn$b;
var hasOwn$8 = hasOwnProperty_1;
var toString$7 = toString$d;
var shared$1 = sharedExports;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
var StringToSymbolRegistry = shared$1("string-to-symbol-registry");
var SymbolToStringRegistry$1 = shared$1("symbol-to-string-registry");
$$z({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  "for": function(key) {
    var string = toString$7(key);
    if (hasOwn$8(StringToSymbolRegistry, string))
      return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$5("Symbol")(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});
var $$y = _export;
var hasOwn$7 = hasOwnProperty_1;
var isSymbol$2 = isSymbol$5;
var tryToString$3 = tryToString$5;
var shared = sharedExports;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
var SymbolToStringRegistry = shared("symbol-to-string-registry");
$$y({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$2(sym))
      throw new TypeError(tryToString$3(sym) + " is not a symbol");
    if (hasOwn$7(SymbolToStringRegistry, sym))
      return SymbolToStringRegistry[sym];
  }
});
var uncurryThis$e = functionUncurryThis;
var isArray$3 = isArray$5;
var isCallable$b = isCallable$q;
var classof$4 = classofRaw$2;
var toString$6 = toString$d;
var push$2 = uncurryThis$e([].push);
var getJsonReplacerFunction = function(replacer) {
  if (isCallable$b(replacer))
    return replacer;
  if (!isArray$3(replacer))
    return;
  var rawLength = replacer.length;
  var keys4 = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == "string")
      push$2(keys4, element);
    else if (typeof element == "number" || classof$4(element) === "Number" || classof$4(element) === "String")
      push$2(keys4, toString$6(element));
  }
  var keysLength = keys4.length;
  var root2 = true;
  return function(key, value) {
    if (root2) {
      root2 = false;
      return value;
    }
    if (isArray$3(this))
      return value;
    for (var j = 0; j < keysLength; j++)
      if (keys4[j] === key)
        return value;
  };
};
var $$x = _export;
var getBuiltIn$4 = getBuiltIn$b;
var apply$2 = functionApply$1;
var call$a = functionCall;
var uncurryThis$d = functionUncurryThis;
var fails$i = fails$A;
var isCallable$a = isCallable$q;
var isSymbol$1 = isSymbol$5;
var arraySlice$2 = arraySlice$4;
var getReplacerFunction = getJsonReplacerFunction;
var NATIVE_SYMBOL$2 = symbolConstructorDetection;
var $String$1 = String;
var $stringify = getBuiltIn$4("JSON", "stringify");
var exec = uncurryThis$d(/./.exec);
var charAt$1 = uncurryThis$d("".charAt);
var charCodeAt$1 = uncurryThis$d("".charCodeAt);
var replace$2 = uncurryThis$d("".replace);
var numberToString = uncurryThis$d(1 .toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$i(function() {
  var symbol = getBuiltIn$4("Symbol")("stringify detection");
  return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
});
var ILL_FORMED_UNICODE = fails$i(function() {
  return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
});
var stringifyWithSymbolsFix = function(it, replacer) {
  var args = arraySlice$2(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable$a($replacer) && (it === void 0 || isSymbol$1(it)))
    return;
  args[1] = function(key, value) {
    if (isCallable$a($replacer))
      value = call$a($replacer, this, $String$1(key), value);
    if (!isSymbol$1(value))
      return value;
  };
  return apply$2($stringify, null, args);
};
var fixIllFormed = function(match2, offset, string) {
  var prev = charAt$1(string, offset - 1);
  var next2 = charAt$1(string, offset + 1);
  if (exec(low, match2) && !exec(hi, next2) || exec(hi, match2) && !exec(low, prev)) {
    return "\\u" + numberToString(charCodeAt$1(match2, 0), 16);
  }
  return match2;
};
if ($stringify) {
  $$x({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$2(arguments);
      var result = apply$2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == "string" ? replace$2(result, tester, fixIllFormed) : result;
    }
  });
}
var $$w = _export;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var fails$h = fails$A;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var toObject$6 = toObject$a;
var FORCED$6 = !NATIVE_SYMBOL$1 || fails$h(function() {
  getOwnPropertySymbolsModule.f(1);
});
$$w({ target: "Object", stat: true, forced: FORCED$6 }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols2 = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols2 ? $getOwnPropertySymbols2(toObject$6(it)) : [];
  }
});
var $$v = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$4;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2("filter");
$$v({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  filter: function filter(callbackfn) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$4 = arrayMethodIsStrict$6;
var STRICT_METHOD$2 = arrayMethodIsStrict$4("forEach");
var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
} : [].forEach;
var $$u = _export;
var forEach$1 = arrayForEach;
$$u({ target: "Array", proto: true, forced: [].forEach !== forEach$1 }, {
  forEach: forEach$1
});
var $$t = _export;
var fails$g = fails$A;
var toIndexedObject$3 = toIndexedObject$b;
var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var DESCRIPTORS$8 = descriptors;
var FORCED$5 = !DESCRIPTORS$8 || fails$g(function() {
  nativeGetOwnPropertyDescriptor(1);
});
$$t({ target: "Object", stat: true, forced: FORCED$5, sham: !DESCRIPTORS$8 }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor3(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject$3(it), key);
  }
});
var toPropertyKey$1 = toPropertyKey$5;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;
var createProperty$4 = function(object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object)
    definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else
    object[propertyKey] = value;
};
var $$s = _export;
var DESCRIPTORS$7 = descriptors;
var ownKeys$2 = ownKeys$4;
var toIndexedObject$2 = toIndexedObject$b;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var createProperty$3 = createProperty$4;
$$s({ target: "Object", stat: true, sham: !DESCRIPTORS$7 }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject$2(object);
    var getOwnPropertyDescriptor5 = getOwnPropertyDescriptorModule.f;
    var keys4 = ownKeys$2(O);
    var result = {};
    var index2 = 0;
    var key, descriptor;
    while (keys4.length > index2) {
      descriptor = getOwnPropertyDescriptor5(O, key = keys4[index2++]);
      if (descriptor !== void 0)
        createProperty$3(result, key, descriptor);
    }
    return result;
  }
});
var $$r = _export;
var toObject$5 = toObject$a;
var nativeKeys = objectKeys$2;
var fails$f = fails$A;
var FAILS_ON_PRIMITIVES$1 = fails$f(function() {
  nativeKeys(1);
});
$$r({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys3(it) {
    return nativeKeys(toObject$5(it));
  }
});
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
var documentCreateElement = documentCreateElement$2;
var classList = documentCreateElement("span").classList;
var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;
var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? void 0 : DOMTokenListPrototype$2;
var global$b = global$r;
var DOMIterables$1 = domIterables;
var DOMTokenListPrototype$1 = domTokenListPrototype;
var forEach2 = arrayForEach;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var handlePrototype$1 = function(CollectionPrototype) {
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach2)
    try {
      createNonEnumerableProperty$2(CollectionPrototype, "forEach", forEach2);
    } catch (error) {
      CollectionPrototype.forEach = forEach2;
    }
};
for (var COLLECTION_NAME$1 in DOMIterables$1) {
  if (DOMIterables$1[COLLECTION_NAME$1]) {
    handlePrototype$1(global$b[COLLECTION_NAME$1] && global$b[COLLECTION_NAME$1].prototype);
  }
}
handlePrototype$1(DOMTokenListPrototype$1);
var regeneratorRuntimeExports = {};
var regeneratorRuntime$1 = {
  get exports() {
    return regeneratorRuntimeExports;
  },
  set exports(v) {
    regeneratorRuntimeExports = v;
  }
};
var _typeofExports = {};
var _typeof$2 = {
  get exports() {
    return _typeofExports;
  },
  set exports(v) {
    _typeofExports = v;
  }
};
(function(module) {
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof$2);
(function(module) {
  var _typeof2 = _typeofExports["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
      return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
      t2[e2] = r2.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t2, e2, r2) {
      return Object.defineProperty(t2, e2, {
        value: r2,
        enumerable: true,
        configurable: true,
        writable: true
      }), t2[e2];
    }
    try {
      define({}, "");
    } catch (t2) {
      define = function define2(t3, e2, r2) {
        return t3[e2] = r2;
      };
    }
    function wrap2(t2, e2, r2, n2) {
      var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c3 = new Context(n2 || []);
      return o(a2, "_invoke", {
        value: makeInvokeMethod(t2, r2, c3)
      }), a2;
    }
    function tryCatch(t2, e2, r2) {
      try {
        return {
          type: "normal",
          arg: t2.call(e2, r2)
        };
      } catch (t3) {
        return {
          type: "throw",
          arg: t3
        };
      }
    }
    e.wrap = wrap2;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p = {};
    define(p, a, function() {
      return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values2([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t2) {
      ["next", "throw", "return"].forEach(function(e2) {
        define(t2, e2, function(t3) {
          return this._invoke(e2, t3);
        });
      });
    }
    function AsyncIterator(t2, e2) {
      function invoke(r3, o2, i2, a2) {
        var c3 = tryCatch(t2[r3], t2, o2);
        if ("throw" !== c3.type) {
          var u2 = c3.arg, h2 = u2.value;
          return h2 && "object" == _typeof2(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
            invoke("next", t3, i2, a2);
          }, function(t3) {
            invoke("throw", t3, i2, a2);
          }) : e2.resolve(h2).then(function(t3) {
            u2.value = t3, i2(u2);
          }, function(t3) {
            return invoke("throw", t3, i2, a2);
          });
        }
        a2(c3.arg);
      }
      var r2;
      o(this, "_invoke", {
        value: function value(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e2, r2, n2) {
      var o2 = h;
      return function(i2, a2) {
        if (o2 === f)
          throw new Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2)
            throw a2;
          return {
            value: t,
            done: true
          };
        }
        for (n2.method = i2, n2.arg = a2; ; ) {
          var c3 = n2.delegate;
          if (c3) {
            var u2 = maybeInvokeDelegate(c3, n2);
            if (u2) {
              if (u2 === y)
                continue;
              return u2;
            }
          }
          if ("next" === n2.method)
            n2.sent = n2._sent = n2.arg;
          else if ("throw" === n2.method) {
            if (o2 === h)
              throw o2 = s, n2.arg;
            n2.dispatchException(n2.arg);
          } else
            "return" === n2.method && n2.abrupt("return", n2.arg);
          o2 = f;
          var p2 = tryCatch(e2, r2, n2);
          if ("normal" === p2.type) {
            if (o2 = n2.done ? s : l, p2.arg === y)
              continue;
            return {
              value: p2.arg,
              done: n2.done
            };
          }
          "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
        }
      };
    }
    function maybeInvokeDelegate(e2, r2) {
      var n2 = r2.method, o2 = e2.iterator[n2];
      if (o2 === t)
        return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
      var i2 = tryCatch(o2, e2.iterator, r2.arg);
      if ("throw" === i2.type)
        return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
      var a2 = i2.arg;
      return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
    }
    function pushTryEntry(t2) {
      var e2 = {
        tryLoc: t2[0]
      };
      1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
    }
    function resetTryEntry(t2) {
      var e2 = t2.completion || {};
      e2.type = "normal", delete e2.arg, t2.completion = e2;
    }
    function Context(t2) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t2.forEach(pushTryEntry, this), this.reset(true);
    }
    function values2(e2) {
      if (e2 || "" === e2) {
        var r2 = e2[a];
        if (r2)
          return r2.call(e2);
        if ("function" == typeof e2.next)
          return e2;
        if (!isNaN(e2.length)) {
          var o2 = -1, i2 = function next2() {
            for (; ++o2 < e2.length; )
              if (n.call(e2, o2))
                return next2.value = e2[o2], next2.done = false, next2;
            return next2.value = t, next2.done = true, next2;
          };
          return i2.next = i2;
        }
      }
      throw new TypeError(_typeof2(e2) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
      var e2 = "function" == typeof t2 && t2.constructor;
      return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
    }, e.mark = function(t2) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
    }, e.awrap = function(t2) {
      return {
        __await: t2
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new AsyncIterator(wrap2(t2, r2, n2, o2), i2);
      return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
        return t3.done ? t3.value : a2.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
      return this;
    }), define(g, "toString", function() {
      return "[object Generator]";
    }), e.keys = function(t2) {
      var e2 = Object(t2), r2 = [];
      for (var n2 in e2)
        r2.push(n2);
      return r2.reverse(), function next2() {
        for (; r2.length; ) {
          var t3 = r2.pop();
          if (t3 in e2)
            return next2.value = t3, next2.done = false, next2;
        }
        return next2.done = true, next2;
      };
    }, e.values = values2, Context.prototype = {
      constructor: Context,
      reset: function reset(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      },
      stop: function stop() {
        this.done = true;
        var t2 = this.tryEntries[0].completion;
        if ("throw" === t2.type)
          throw t2.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc)
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c3 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c3 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c3) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      },
      complete: function complete(t2, e2) {
        if ("throw" === t2.type)
          throw t2.arg;
        return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
      },
      finish: function finish(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      },
      "catch": function _catch(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if ("throw" === n2.type) {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e2, r2, n2) {
        return this.delegate = {
          iterator: values2(e2),
          resultName: r2,
          nextLoc: n2
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var runtime = regeneratorRuntimeExports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
function asyncGeneratorStep(gen, resolve2, reject2, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject2(error);
    return;
  }
  if (info.done) {
    resolve2(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve2, reject2) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve2, reject2, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve2, reject2, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var $TypeError$8 = TypeError;
var MAX_SAFE_INTEGER = 9007199254740991;
var doesNotExceedSafeInteger$1 = function(it) {
  if (it > MAX_SAFE_INTEGER)
    throw $TypeError$8("Maximum allowed index exceeded");
  return it;
};
var $$q = _export;
var fails$e = fails$A;
var isArray$2 = isArray$5;
var isObject$b = isObject$j;
var toObject$4 = toObject$a;
var lengthOfArrayLike$5 = lengthOfArrayLike$8;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var createProperty$2 = createProperty$4;
var arraySpeciesCreate = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$4;
var wellKnownSymbol$b = wellKnownSymbol$p;
var V8_VERSION$1 = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$b("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$e(function() {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O) {
  if (!isObject$b(O))
    return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray$2(O);
};
var FORCED$4 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$1("concat");
$$q({ target: "Array", proto: true, arity: 1, forced: FORCED$4 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$4(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$5(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++)
          if (k in E)
            createProperty$2(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty$2(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});
var $$p = _export;
var $every = arrayIteration.every;
var arrayMethodIsStrict$3 = arrayMethodIsStrict$6;
var STRICT_METHOD$1 = arrayMethodIsStrict$3("every");
$$p({ target: "Array", proto: true, forced: !STRICT_METHOD$1 }, {
  every: function every(callbackfn) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var aCallable$8 = aCallable$b;
var toObject$3 = toObject$a;
var IndexedObject = indexedObject;
var lengthOfArrayLike$4 = lengthOfArrayLike$8;
var $TypeError$7 = TypeError;
var createMethod$1 = function(IS_RIGHT) {
  return function(that, callbackfn, argumentsLength, memo) {
    var O = toObject$3(that);
    var self2 = IndexedObject(O);
    var length = lengthOfArrayLike$4(O);
    aCallable$8(callbackfn);
    var index2 = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2)
      while (true) {
        if (index2 in self2) {
          memo = self2[index2];
          index2 += i;
          break;
        }
        index2 += i;
        if (IS_RIGHT ? index2 < 0 : length <= index2) {
          throw new $TypeError$7("Reduce of empty array with no initial value");
        }
      }
    for (; IS_RIGHT ? index2 >= 0 : length > index2; index2 += i)
      if (index2 in self2) {
        memo = callbackfn(memo, self2[index2], index2, O);
      }
    return memo;
  };
};
var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod$1(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod$1(true)
};
var global$a = global$r;
var classof$3 = classofRaw$2;
var engineIsNode = classof$3(global$a.process) === "process";
var $$o = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$6;
var CHROME_VERSION = engineV8Version;
var IS_NODE$4 = engineIsNode;
var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$3 = CHROME_BUG || !arrayMethodIsStrict$2("reduce");
$$o({ target: "Array", proto: true, forced: FORCED$3 }, {
  reduce: function reduce(callbackfn) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
  }
});
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$2 = classof$a;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString2() {
  return "[object " + classof$2(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$7 = defineBuiltIn$c;
var toString$5 = objectToString;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$7(Object.prototype, "toString", toString$5, { unsafe: true });
}
var uncurryThis$c = functionUncurryThis;
var aCallable$7 = aCallable$b;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$c(aCallable$7(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) {
  }
};
var isObject$a = isObject$j;
var isPossiblePrototype$1 = function(argument) {
  return isObject$a(argument) || argument === null;
};
var isPossiblePrototype = isPossiblePrototype$1;
var $String = String;
var $TypeError$6 = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (isPossiblePrototype(argument))
    return argument;
  throw new $TypeError$6("Can't set " + $String(argument) + " as a prototype");
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$c = anObject$m;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    anObject$c(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var getBuiltIn$3 = getBuiltIn$b;
var defineBuiltInAccessor$3 = defineBuiltInAccessor$5;
var wellKnownSymbol$a = wellKnownSymbol$p;
var DESCRIPTORS$6 = descriptors;
var SPECIES$3 = wellKnownSymbol$a("species");
var setSpecies$2 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$6 && Constructor && !Constructor[SPECIES$3]) {
    defineBuiltInAccessor$3(Constructor, SPECIES$3, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var isPrototypeOf$4 = objectIsPrototypeOf;
var $TypeError$5 = TypeError;
var anInstance$3 = function(it, Prototype) {
  if (isPrototypeOf$4(Prototype, it))
    return it;
  throw new $TypeError$5("Incorrect invocation");
};
var isConstructor$2 = isConstructor$4;
var tryToString$2 = tryToString$5;
var $TypeError$4 = TypeError;
var aConstructor$2 = function(argument) {
  if (isConstructor$2(argument))
    return argument;
  throw new $TypeError$4(tryToString$2(argument) + " is not a constructor");
};
var anObject$b = anObject$m;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$4 = isNullOrUndefined$9;
var wellKnownSymbol$9 = wellKnownSymbol$p;
var SPECIES$2 = wellKnownSymbol$9("species");
var speciesConstructor$2 = function(O, defaultConstructor) {
  var C = anObject$b(O).constructor;
  var S;
  return C === void 0 || isNullOrUndefined$4(S = anObject$b(C)[SPECIES$2]) ? defaultConstructor : aConstructor$1(S);
};
var $TypeError$3 = TypeError;
var validateArgumentsLength$1 = function(passed, required) {
  if (passed < required)
    throw new $TypeError$3("Not enough arguments");
  return passed;
};
var userAgent$2 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);
var global$9 = global$r;
var apply$1 = functionApply$1;
var bind$6 = functionBindContext;
var isCallable$9 = isCallable$q;
var hasOwn$6 = hasOwnProperty_1;
var fails$d = fails$A;
var html = html$2;
var arraySlice$1 = arraySlice$4;
var createElement = documentCreateElement$2;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;
var set = global$9.setImmediate;
var clear = global$9.clearImmediate;
var process$3 = global$9.process;
var Dispatch = global$9.Dispatch;
var Function$1 = global$9.Function;
var MessageChannel = global$9.MessageChannel;
var String$1 = global$9.String;
var counter = 0;
var queue$3 = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails$d(function() {
  $location = global$9.location;
});
var run = function(id2) {
  if (hasOwn$6(queue$3, id2)) {
    var fn = queue$3[id2];
    delete queue$3[id2];
    fn();
  }
};
var runner = function(id2) {
  return function() {
    run(id2);
  };
};
var eventListener = function(event2) {
  run(event2.data);
};
var globalPostMessageDefer = function(id2) {
  global$9.postMessage(String$1(id2), $location.protocol + "//" + $location.host);
};
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$9(handler) ? handler : Function$1(handler);
    var args = arraySlice$1(arguments, 1);
    queue$3[++counter] = function() {
      apply$1(fn, void 0, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id2) {
    delete queue$3[id2];
  };
  if (IS_NODE$3) {
    defer = function(id2) {
      process$3.nextTick(runner(id2));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function(id2) {
      Dispatch.now(runner(id2));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$6(port.postMessage, port);
  } else if (global$9.addEventListener && isCallable$9(global$9.postMessage) && !global$9.importScripts && $location && $location.protocol !== "file:" && !fails$d(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$9.addEventListener("message", eventListener, false);
  } else if (ONREADYSTATECHANGE in createElement("script")) {
    defer = function(id2) {
      html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
        html.removeChild(this);
        run(id2);
      };
    };
  } else {
    defer = function(id2) {
      setTimeout(runner(id2), 0);
    };
  }
}
var task$1 = {
  set,
  clear
};
var global$8 = global$r;
var DESCRIPTORS$5 = descriptors;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var safeGetBuiltIn$1 = function(name) {
  if (!DESCRIPTORS$5)
    return global$8[name];
  var descriptor = getOwnPropertyDescriptor$2(global$8, name);
  return descriptor && descriptor.value;
};
var Queue$2 = function() {
  this.head = null;
  this.tail = null;
};
Queue$2.prototype = {
  add: function(item) {
    var entry = { item, next: null };
    var tail = this.tail;
    if (tail)
      tail.next = entry;
    else
      this.head = entry;
    this.tail = entry;
  },
  get: function() {
    var entry = this.head;
    if (entry) {
      var next2 = this.head = entry.next;
      if (next2 === null)
        this.tail = null;
      return entry.item;
    }
  }
};
var queue$2 = Queue$2;
var userAgent$1 = engineUserAgent;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != "undefined";
var userAgent = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
var global$7 = global$r;
var safeGetBuiltIn = safeGetBuiltIn$1;
var bind$5 = functionBindContext;
var macrotask = task$1.set;
var Queue$1 = queue$2;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;
var MutationObserver = global$7.MutationObserver || global$7.WebKitMutationObserver;
var document$2 = global$7.document;
var process$2 = global$7.process;
var Promise$1 = global$7.Promise;
var microtask$1 = safeGetBuiltIn("queueMicrotask");
var notify$1, toggle, node$1, promise, then;
if (!microtask$1) {
  var queue$1 = new Queue$1();
  var flush = function() {
    var parent, fn;
    if (IS_NODE$2 && (parent = process$2.domain))
      parent.exit();
    while (fn = queue$1.get())
      try {
        fn();
      } catch (error) {
        if (queue$1.head)
          notify$1();
        throw error;
      }
    if (parent)
      parent.enter();
  };
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node$1 = document$2.createTextNode("");
    new MutationObserver(flush).observe(node$1, { characterData: true });
    notify$1 = function() {
      node$1.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    promise = Promise$1.resolve(void 0);
    promise.constructor = Promise$1;
    then = bind$5(promise.then, promise);
    notify$1 = function() {
      then(flush);
    };
  } else if (IS_NODE$2) {
    notify$1 = function() {
      process$2.nextTick(flush);
    };
  } else {
    macrotask = bind$5(macrotask, global$7);
    notify$1 = function() {
      macrotask(flush);
    };
  }
  microtask$1 = function(fn) {
    if (!queue$1.head)
      notify$1();
    queue$1.add(fn);
  };
}
var microtask_1 = microtask$1;
var hostReportErrors$1 = function(a, b) {
  try {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) {
  }
};
var perform$3 = function(exec2) {
  try {
    return { error: false, value: exec2() };
  } catch (error) {
    return { error: true, value: error };
  }
};
var global$6 = global$r;
var promiseNativeConstructor = global$6.Promise;
var engineIsDeno = typeof Deno == "object" && Deno && typeof Deno.version == "object";
var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == "object" && typeof document == "object";
var global$5 = global$r;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$8 = isCallable$q;
var isForced$2 = isForced_1;
var inspectSource = inspectSource$3;
var wellKnownSymbol$8 = wellKnownSymbol$p;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;
NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$8("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$8(global$5.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$2("Promise", function() {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
    return true;
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    var promise2 = new NativePromiseConstructor$3(function(resolve2) {
      resolve2(1);
    });
    var FakePromise = function(exec2) {
      exec2(function() {
      }, function() {
      });
    };
    var constructor = promise2.constructor = {};
    constructor[SPECIES$1] = FakePromise;
    SUBCLASSING = promise2.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING)
      return true;
  }
  return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING
};
var newPromiseCapability$2 = {};
var aCallable$6 = aCallable$b;
var $TypeError$2 = TypeError;
var PromiseCapability = function(C) {
  var resolve2, reject2;
  this.promise = new C(function($$resolve, $$reject) {
    if (resolve2 !== void 0 || reject2 !== void 0)
      throw new $TypeError$2("Bad Promise constructor");
    resolve2 = $$resolve;
    reject2 = $$reject;
  });
  this.resolve = aCallable$6(resolve2);
  this.reject = aCallable$6(reject2);
};
newPromiseCapability$2.f = function(C) {
  return new PromiseCapability(C);
};
var $$n = _export;
var IS_NODE = engineIsNode;
var global$4 = global$r;
var call$9 = functionCall;
var defineBuiltIn$6 = defineBuiltIn$c;
var setPrototypeOf$2 = objectSetPrototypeOf;
var setToStringTag$4 = setToStringTag$6;
var setSpecies$1 = setSpecies$2;
var aCallable$5 = aCallable$b;
var isCallable$7 = isCallable$q;
var isObject$9 = isObject$j;
var anInstance$2 = anInstance$3;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue$2;
var InternalStateModule$3 = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$3.getterFor(PROMISE);
var setInternalState$3 = InternalStateModule$3.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$2 = global$4.TypeError;
var document$1 = global$4.document;
var process$1 = global$4.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$4.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var isThenable = function(it) {
  var then2;
  return isObject$9(it) && isCallable$7(then2 = it.then) ? then2 : false;
};
var callReaction = function(reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve2 = reaction.resolve;
  var reject2 = reaction.reject;
  var domain = reaction.domain;
  var result, then2, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED)
          onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true)
        result = value;
      else {
        if (domain)
          domain.enter();
        result = handler(value);
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject2(new TypeError$2("Promise-chain cycle"));
      } else if (then2 = isThenable(result)) {
        call$9(then2, result, resolve2, reject2);
      } else
        resolve2(result);
    } else
      reject2(value);
  } catch (error) {
    if (domain && !exited)
      domain.exit();
    reject2(error);
  }
};
var notify = function(state, isReject) {
  if (state.notified)
    return;
  state.notified = true;
  microtask(function() {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection)
      onUnhandled(state);
  });
};
var dispatchEvent = function(name, promise2, reason) {
  var event2, handler;
  if (DISPATCH_EVENT) {
    event2 = document$1.createEvent("Event");
    event2.promise = promise2;
    event2.reason = reason;
    event2.initEvent(name, false, true);
    global$4.dispatchEvent(event2);
  } else
    event2 = { promise: promise2, reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$4["on" + name]))
    handler(event2);
  else if (name === UNHANDLED_REJECTION)
    hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function(state) {
  call$9(task, global$4, function() {
    var promise2 = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function() {
        if (IS_NODE) {
          process$1.emit("unhandledRejection", value, promise2);
        } else
          dispatchEvent(UNHANDLED_REJECTION, promise2, value);
      });
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error)
        throw result.value;
    }
  });
};
var isUnhandled = function(state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
  call$9(task, global$4, function() {
    var promise2 = state.facade;
    if (IS_NODE) {
      process$1.emit("rejectionHandled", promise2);
    } else
      dispatchEvent(REJECTION_HANDLED, promise2, state.value);
  });
};
var bind$4 = function(fn, state, unwrap) {
  return function(value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function(state, value, unwrap) {
  if (state.done)
    return;
  state.done = true;
  if (unwrap)
    state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
  if (state.done)
    return;
  state.done = true;
  if (unwrap)
    state = unwrap;
  try {
    if (state.facade === value)
      throw new TypeError$2("Promise can't be resolved itself");
    var then2 = isThenable(value);
    if (then2) {
      microtask(function() {
        var wrapper = { done: false };
        try {
          call$9(
            then2,
            value,
            bind$4(internalResolve, wrapper, state),
            bind$4(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  PromiseConstructor = function Promise2(executor) {
    anInstance$2(this, PromisePrototype);
    aCallable$5(executor);
    call$9(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$4(internalResolve, state), bind$4(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise2(executor) {
    setInternalState$3(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: void 0
    });
  };
  Internal.prototype = defineBuiltIn$6(PromisePrototype, "then", function then2(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$7(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$7(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process$1.domain : void 0;
    if (state.state === PENDING)
      state.reactions.add(reaction);
    else
      microtask(function() {
        callReaction(reaction, state);
      });
    return reaction.promise;
  });
  OwnPromiseCapability = function() {
    var promise2 = new Internal();
    var state = getInternalPromiseState(promise2);
    this.promise = promise2;
    this.resolve = bind$4(internalResolve, state);
    this.reject = bind$4(internalReject, state);
  };
  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function(C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
  if (isCallable$7(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;
    if (!NATIVE_PROMISE_SUBCLASSING) {
      defineBuiltIn$6(NativePromisePrototype$1, "then", function then2(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function(resolve2, reject2) {
          call$9(nativeThen, that, resolve2, reject2);
        }).then(onFulfilled, onRejected);
      }, { unsafe: true });
    }
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) {
    }
    if (setPrototypeOf$2) {
      setPrototypeOf$2(NativePromisePrototype$1, PromisePrototype);
    }
  }
}
$$n({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});
setToStringTag$4(PromiseConstructor, PROMISE, false);
setSpecies$1(PROMISE);
var iterators = {};
var wellKnownSymbol$7 = wellKnownSymbol$p;
var Iterators$4 = iterators;
var ITERATOR$5 = wellKnownSymbol$7("iterator");
var ArrayPrototype$1 = Array.prototype;
var isArrayIteratorMethod$2 = function(it) {
  return it !== void 0 && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
};
var classof$1 = classof$a;
var getMethod$2 = getMethod$6;
var isNullOrUndefined$3 = isNullOrUndefined$9;
var Iterators$3 = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$p;
var ITERATOR$4 = wellKnownSymbol$6("iterator");
var getIteratorMethod$3 = function(it) {
  if (!isNullOrUndefined$3(it))
    return getMethod$2(it, ITERATOR$4) || getMethod$2(it, "@@iterator") || Iterators$3[classof$1(it)];
};
var call$8 = functionCall;
var aCallable$4 = aCallable$b;
var anObject$a = anObject$m;
var tryToString$1 = tryToString$5;
var getIteratorMethod$2 = getIteratorMethod$3;
var $TypeError$1 = TypeError;
var getIterator$2 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable$4(iteratorMethod))
    return anObject$a(call$8(iteratorMethod, argument));
  throw new $TypeError$1(tryToString$1(argument) + " is not iterable");
};
var call$7 = functionCall;
var anObject$9 = anObject$m;
var getMethod$1 = getMethod$6;
var iteratorClose$2 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$9(iterator);
  try {
    innerResult = getMethod$1(iterator, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$7(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$9(innerResult);
  return value;
};
var bind$3 = functionBindContext;
var call$6 = functionCall;
var anObject$8 = anObject$m;
var tryToString = tryToString$5;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$8;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;
var iteratorClose$1 = iteratorClose$2;
var $TypeError = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$4 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index2, length, result, next2, step;
  var stop = function(condition) {
    if (iterator)
      iteratorClose$1(iterator, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$8(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$1(iterable);
    if (!iterFn)
      throw new $TypeError(tryToString(iterable) + " is not iterable");
    if (isArrayIteratorMethod$1(iterFn)) {
      for (index2 = 0, length = lengthOfArrayLike$3(iterable); length > index2; index2++) {
        result = callFn(iterable[index2]);
        if (result && isPrototypeOf$3(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    }
    iterator = getIterator$1(iterable, iterFn);
  }
  next2 = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$6(next2, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$1(iterator, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf$3(ResultPrototype, result))
      return result;
  }
  return new Result(false);
};
var wellKnownSymbol$5 = wellKnownSymbol$p;
var ITERATOR$3 = wellKnownSymbol$5("iterator");
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$3] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var checkCorrectnessOfIteration$3 = function(exec2, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING)
      return false;
  } catch (error) {
    return false;
  }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$3] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$2(function(iterable) {
  NativePromiseConstructor$1.all(iterable).then(void 0, function() {
  });
});
var $$m = _export;
var call$5 = functionCall;
var aCallable$3 = aCallable$b;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$3 = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
$$m({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$1(function() {
      var $promiseResolve = aCallable$3(C.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$3(iterable, function(promise2) {
        var index2 = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$5($promiseResolve, C, promise2).then(function(value) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index2] = value;
          --remaining || resolve2(values2);
        }, reject2);
      });
      --remaining || resolve2(values2);
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$l = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$2 = getBuiltIn$b;
var isCallable$6 = isCallable$q;
var defineBuiltIn$5 = defineBuiltIn$c;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
$$l({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  "catch": function(onRejected) {
    return this.then(void 0, onRejected);
  }
});
if (isCallable$6(NativePromiseConstructor)) {
  var method = getBuiltIn$2("Promise").prototype["catch"];
  if (NativePromisePrototype["catch"] !== method) {
    defineBuiltIn$5(NativePromisePrototype, "catch", method, { unsafe: true });
  }
}
var $$k = _export;
var call$4 = functionCall;
var aCallable$2 = aCallable$b;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate$2 = iterate$4;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
$$k({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject2 = capability.reject;
    var result = perform(function() {
      var $promiseResolve = aCallable$2(C.resolve);
      iterate$2(iterable, function(promise2) {
        call$4($promiseResolve, C, promise2).then(capability.resolve, reject2);
      });
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$j = _export;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
$$j({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    var capabilityReject = capability.reject;
    capabilityReject(r);
    return capability.promise;
  }
});
var anObject$7 = anObject$m;
var isObject$8 = isObject$j;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$1 = function(C, x) {
  anObject$7(C);
  if (isObject$8(x) && x.constructor === C)
    return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve2 = promiseCapability.resolve;
  resolve2(x);
  return promiseCapability.promise;
};
var $$i = _export;
var getBuiltIn$1 = getBuiltIn$b;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;
getBuiltIn$1("Promise");
$$i({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});
var call$3 = functionCall;
var uncurryThis$b = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var anObject$6 = anObject$m;
var isNullOrUndefined$2 = isNullOrUndefined$9;
var requireObjectCoercible$2 = requireObjectCoercible$9;
var speciesConstructor = speciesConstructor$2;
var advanceStringIndex = advanceStringIndex$3;
var toLength = toLength$5;
var toString$4 = toString$d;
var getMethod = getMethod$6;
var regExpExec$1 = regexpExecAbstract;
var stickyHelpers = regexpStickyHelpers;
var fails$c = fails$A;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 4294967295;
var min = Math.min;
var push$1 = uncurryThis$b([].push);
var stringSlice$2 = uncurryThis$b("".slice);
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$c(function() {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function() {
    return originalExec.apply(this, arguments);
  };
  var result = "ab".split(re);
  return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
});
var BUGGY = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
fixRegExpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = "0".split(void 0, 0).length ? function(separator, limit) {
    return separator === void 0 && limit === 0 ? [] : call$3(nativeSplit, this, separator, limit);
  } : nativeSplit;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split2(separator, limit) {
      var O = requireObjectCoercible$2(this);
      var splitter = isNullOrUndefined$2(separator) ? void 0 : getMethod(separator, SPLIT);
      return splitter ? call$3(splitter, separator, O, limit) : call$3(internalSplit, toString$4(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(string, limit) {
      var rx = anObject$6(this);
      var S = toString$4(string);
      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done)
          return res.value;
      }
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
      var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
      var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
      if (lim === 0)
        return [];
      if (S.length === 0)
        return regExpExec$1(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec$1(splitter, UNSUPPORTED_Y ? stringSlice$2(S, q) : S);
        var e;
        if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$1(A, stringSlice$2(S, p, q));
          if (A.length === lim)
            return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$1(A, z[i]);
            if (A.length === lim)
              return A;
          }
          q = p = e;
        }
      }
      push$1(A, stringSlice$2(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
var rafExports = {};
var raf$1 = {
  get exports() {
    return rafExports;
  },
  set exports(v) {
    rafExports = v;
  }
};
var performanceNowExports = {};
var performanceNow = {
  get exports() {
    return performanceNowExports;
  },
  set exports(v) {
    performanceNowExports = v;
  }
};
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    performanceNow.exports = function() {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    performanceNow.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    performanceNow.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    performanceNow.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(commonjsGlobal);
var now = performanceNowExports, root = typeof window === "undefined" ? commonjsGlobal : window, vendors = ["moz", "webkit"], suffix = "AnimationFrame", raf = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + "Request" + suffix];
  caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
}
if (!raf || !caf) {
  var last = 0, id$1 = 0, queue = [], frameDuration = 1e3 / 60;
  raf = function(callback) {
    if (queue.length === 0) {
      var _now = now(), next2 = Math.max(0, frameDuration - (_now - last));
      last = next2 + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function() {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next2));
    }
    queue.push({
      handle: ++id$1,
      callback,
      cancelled: false
    });
    return id$1;
  };
  caf = function(handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
raf$1.exports = function(fn) {
  return raf.call(root, fn);
};
rafExports.cancel = function() {
  caf.apply(root, arguments);
};
rafExports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
var DESCRIPTORS$4 = descriptors;
var FUNCTION_NAME_EXISTS = functionName.EXISTS;
var uncurryThis$a = functionUncurryThis;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$5;
var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis$a(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis$a(nameRE.exec);
var NAME = "name";
if (DESCRIPTORS$4 && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor$2(FunctionPrototype, NAME, {
    configurable: true,
    get: function() {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return "";
      }
    }
  });
}
var rgbcolor = function(color_string) {
  this.ok = false;
  this.alpha = 1;
  if (color_string.charAt(0) == "#") {
    color_string = color_string.substr(1, 6);
  }
  color_string = color_string.replace(/ /g, "");
  color_string = color_string.toLowerCase();
  var simple_colors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  color_string = simple_colors[color_string] || color_string;
  var color_defs = [
    {
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(bits2) {
        return [
          parseInt(bits2[1]),
          parseInt(bits2[2]),
          parseInt(bits2[3]),
          parseFloat(bits2[4])
        ];
      }
    },
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(bits2) {
        return [
          parseInt(bits2[1]),
          parseInt(bits2[2]),
          parseInt(bits2[3])
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(bits2) {
        return [
          parseInt(bits2[1], 16),
          parseInt(bits2[2], 16),
          parseInt(bits2[3], 16)
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(bits2) {
        return [
          parseInt(bits2[1] + bits2[1], 16),
          parseInt(bits2[2] + bits2[2], 16),
          parseInt(bits2[3] + bits2[3], 16)
        ];
      }
    }
  ];
  for (var i = 0; i < color_defs.length; i++) {
    var re = color_defs[i].re;
    var processor = color_defs[i].process;
    var bits = re.exec(color_string);
    if (bits) {
      var channels = processor(bits);
      this.r = channels[0];
      this.g = channels[1];
      this.b = channels[2];
      if (channels.length > 3) {
        this.alpha = channels[3];
      }
      this.ok = true;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
  this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
  this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
  this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha;
  this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  };
  this.toRGBA = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
  };
  this.toHex = function() {
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    return "#" + r + g + b;
  };
  this.getHelpXML = function() {
    var examples = new Array();
    for (var i2 = 0; i2 < color_defs.length; i2++) {
      var example = color_defs[i2].example;
      for (var j = 0; j < example.length; j++) {
        examples[examples.length] = example[j];
      }
    }
    for (var sc in simple_colors) {
      examples[examples.length] = sc;
    }
    var xml = document.createElement("ul");
    xml.setAttribute("id", "rgbcolor-examples");
    for (var i2 = 0; i2 < examples.length; i2++) {
      try {
        var list_item = document.createElement("li");
        var list_color = new RGBColor(examples[i2]);
        var example_div = document.createElement("div");
        example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + "; color:" + list_color.toHex();
        example_div.appendChild(document.createTextNode("test"));
        var list_item_value = document.createTextNode(
          " " + examples[i2] + " -> " + list_color.toRGB() + " -> " + list_color.toHex()
        );
        list_item.appendChild(example_div);
        list_item.appendChild(list_item_value);
        xml.appendChild(list_item);
      } catch (e) {
      }
    }
    return xml;
  };
};
var uncurryThis$9 = functionUncurryThis;
var aCallable$1 = aCallable$b;
var isObject$7 = isObject$j;
var hasOwn$5 = hasOwnProperty_1;
var arraySlice = arraySlice$4;
var NATIVE_BIND = functionBindNative;
var $Function = Function;
var concat2 = uncurryThis$9([].concat);
var join2 = uncurryThis$9([].join);
var factories = {};
var construct = function(C, argsLength, args) {
  if (!hasOwn$5(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++)
      list[i] = "a[" + i + "]";
    factories[argsLength] = $Function("C,a", "return new C(" + join2(list, ",") + ")");
  }
  return factories[argsLength](C, args);
};
var functionBind = NATIVE_BIND ? $Function.bind : function bind(that) {
  var F = aCallable$1(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound() {
    var args = concat2(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject$7(Prototype))
    boundFunction.prototype = Prototype;
  return boundFunction;
};
var $$h = _export;
var getBuiltIn = getBuiltIn$b;
var apply = functionApply$1;
var bind$2 = functionBind;
var aConstructor = aConstructor$2;
var anObject$5 = anObject$m;
var isObject$6 = isObject$j;
var create$3 = objectCreate;
var fails$b = fails$A;
var nativeConstruct = getBuiltIn("Reflect", "construct");
var ObjectPrototype$1 = Object.prototype;
var push = [].push;
var NEW_TARGET_BUG = fails$b(function() {
  function F() {
  }
  return !(nativeConstruct(function() {
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails$b(function() {
  nativeConstruct(function() {
  });
});
var FORCED$2 = NEW_TARGET_BUG || ARGS_BUG;
$$h({ target: "Reflect", stat: true, forced: FORCED$2, sham: FORCED$2 }, {
  construct: function construct2(Target, args) {
    aConstructor(Target);
    anObject$5(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG)
      return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind$2, Target, $args))();
    }
    var proto = newTarget.prototype;
    var instance = create$3(isObject$6(proto) ? proto : ObjectPrototype$1);
    var result = apply(Target, instance, args);
    return isObject$6(result) ? result : instance;
  }
});
var call$2 = functionCall;
var hasOwn$4 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;
var RegExpPrototype$1 = RegExp.prototype;
var regexpGetFlags = function(R) {
  var flags = R.flags;
  return flags === void 0 && !("flags" in RegExpPrototype$1) && !hasOwn$4(R, "flags") && isPrototypeOf$2(RegExpPrototype$1, R) ? call$2(regExpFlags, R) : flags;
};
var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
var defineBuiltIn$4 = defineBuiltIn$c;
var anObject$4 = anObject$m;
var $toString = toString$d;
var fails$a = fails$A;
var getRegExpFlags = regexpGetFlags;
var TO_STRING = "toString";
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];
var NOT_GENERIC = fails$a(function() {
  return nativeToString.call({ source: "a", flags: "b" }) !== "/a/b";
});
var INCORRECT_NAME = PROPER_FUNCTION_NAME$2 && nativeToString.name !== TO_STRING;
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$4(RegExpPrototype, TO_STRING, function toString4() {
    var R = anObject$4(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return "/" + pattern + "/" + flags;
  }, { unsafe: true });
}
function _possibleConstructorReturn(self2, call2) {
  if (call2 && (_typeof$1(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
var anObject$3 = anObject$m;
var iteratorClose = iteratorClose$2;
var callWithSafeIterationClosing$1 = function(iterator, fn, value, ENTRIES2) {
  try {
    return ENTRIES2 ? fn(anObject$3(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, "throw", error);
  }
};
var bind$1 = functionBindContext;
var call$1 = functionCall;
var toObject$2 = toObject$a;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var isConstructor$1 = isConstructor$4;
var lengthOfArrayLike$2 = lengthOfArrayLike$8;
var createProperty$1 = createProperty$4;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var $Array$1 = Array;
var arrayFrom = function from(arrayLike) {
  var O = toObject$2(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$1(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
  var mapping = mapfn !== void 0;
  if (mapping)
    mapfn = bind$1(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
  var iteratorMethod = getIteratorMethod(O);
  var index2 = 0;
  var length, result, step, iterator, next2, value;
  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next2 = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (; !(step = call$1(next2, iterator)).done; index2++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
      createProperty$1(result, index2, value);
    }
  } else {
    length = lengthOfArrayLike$2(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
    for (; length > index2; index2++) {
      value = mapping ? mapfn(O[index2], index2) : O[index2];
      createProperty$1(result, index2, value);
    }
  }
  result.length = index2;
  return result;
};
var $$g = _export;
var from2 = arrayFrom;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$3;
var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function(iterable) {
  Array.from(iterable);
});
$$g({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from: from2
});
var wellKnownSymbol$4 = wellKnownSymbol$p;
var create$2 = objectCreate;
var defineProperty$3 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$4("unscopables");
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] === void 0) {
  defineProperty$3(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$2(null)
  });
}
var addToUnscopables$3 = function(key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};
var $$f = _export;
var $includes = arrayIncludes.includes;
var fails$9 = fails$A;
var addToUnscopables$2 = addToUnscopables$3;
var BROKEN_ON_SPARSE = fails$9(function() {
  return !Array(1).includes();
});
$$f({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables$2("includes");
var $$e = _export;
var $some = arrayIteration.some;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$6;
var STRICT_METHOD = arrayMethodIsStrict$1("some");
$$e({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var $$d = _export;
var uncurryThis$8 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$9;
var toString$3 = toString$d;
var correctIsRegExpLogic = correctIsRegexpLogic;
var stringIndexOf = uncurryThis$8("".indexOf);
$$d({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
  includes: function includes2(searchString) {
    return !!~stringIndexOf(
      toString$3(requireObjectCoercible$1(this)),
      toString$3(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var fails$8 = fails$A;
var correctPrototypeGetter = !fails$8(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$3 = hasOwnProperty_1;
var isCallable$5 = isCallable$q;
var toObject$1 = toObject$a;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function(O) {
  var object = toObject$1(O);
  if (hasOwn$3(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$5(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};
var fails$7 = fails$A;
var isCallable$4 = isCallable$q;
var isObject$5 = isObject$j;
var getPrototypeOf$1 = objectGetPrototypeOf$1;
var defineBuiltIn$3 = defineBuiltIn$c;
var wellKnownSymbol$3 = wellKnownSymbol$p;
var ITERATOR$2 = wellKnownSymbol$3("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$5(IteratorPrototype$2) || fails$7(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$2].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$2 = {};
if (!isCallable$4(IteratorPrototype$2[ITERATOR$2])) {
  defineBuiltIn$3(IteratorPrototype$2, ITERATOR$2, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var setToStringTag$3 = setToStringTag$6;
var Iterators$2 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME2, next2, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME2 + " Iterator";
  IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next2) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$2[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var $$c = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable$3 = isCallable$q;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf$1;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$6;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var defineBuiltIn$2 = defineBuiltIn$c;
var wellKnownSymbol$2 = wellKnownSymbol$p;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol$2("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME2, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED2) {
  createIteratorConstructor(IteratorConstructor, NAME2, next2);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys4() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME2 + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME2 === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$1])) {
          defineBuiltIn$2(CurrentIteratorPrototype, ITERATOR$1, returnThis);
        }
      }
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME$1 && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED2)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $$c({ target: NAME2, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
    defineBuiltIn$2(IterablePrototype, ITERATOR$1, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME2] = defaultIterator;
  return methods;
};
var createIterResultObject$3 = function(value, done) {
  return { value, done };
};
var charAt = stringMultibyte.charAt;
var toString$2 = toString$d;
var InternalStateModule$2 = internalState;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var STRING_ITERATOR = "String Iterator";
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$1 = InternalStateModule$2.getterFor(STRING_ITERATOR);
defineIterator$2(String, "String", function(iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: toString$2(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index2 = state.index;
  var point;
  if (index2 >= string.length)
    return createIterResultObject$2(void 0, true);
  point = charAt(string, index2);
  state.index += point.length;
  return createIterResultObject$2(point, false);
});
var whitespaces$2 = "	\n\v\f\r                　\u2028\u2029\uFEFF";
var uncurryThis$7 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$9;
var toString$1 = toString$d;
var whitespaces$1 = whitespaces$2;
var replace$1 = uncurryThis$7("".replace);
var ltrim = RegExp("^[" + whitespaces$1 + "]+");
var rtrim = RegExp("(^|[^" + whitespaces$1 + "])[" + whitespaces$1 + "]+$");
var createMethod = function(TYPE) {
  return function($this) {
    var string = toString$1(requireObjectCoercible($this));
    if (TYPE & 1)
      string = replace$1(string, ltrim, "");
    if (TYPE & 2)
      string = replace$1(string, rtrim, "$1");
    return string;
  };
};
var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};
var PROPER_FUNCTION_NAME = functionName.PROPER;
var fails$6 = fails$A;
var whitespaces = whitespaces$2;
var non = "​᠎";
var stringTrimForced = function(METHOD_NAME) {
  return fails$6(function() {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};
var $$b = _export;
var $trim = stringTrim.trim;
var forcedStringTrimMethod = stringTrimForced;
$$b({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
  trim: function trim() {
    return $trim(this);
  }
});
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}
var $$a = _export;
var uncurryThis$6 = functionUncurryThisClause;
var $indexOf = arrayIncludes.indexOf;
var arrayMethodIsStrict = arrayMethodIsStrict$6;
var nativeIndexOf = uncurryThis$6([].indexOf);
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED$1 = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
$$a({ target: "Array", proto: true, forced: FORCED$1 }, {
  indexOf: function indexOf2(searchElement) {
    var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
    return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
  }
});
var $$9 = _export;
var uncurryThis$5 = functionUncurryThis;
var isArray$1 = isArray$5;
var nativeReverse = uncurryThis$5([].reverse);
var test = [1, 2];
$$9({ target: "Array", proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    if (isArray$1(this))
      this.length = this.length;
    return nativeReverse(this);
  }
});
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
var isCallable$2 = isCallable$q;
var isObject$4 = isObject$j;
var setPrototypeOf = objectSetPrototypeOf;
var inheritIfRequired$2 = function($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$4(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
  )
    setPrototypeOf($this, NewTargetPrototype);
  return $this;
};
var uncurryThis$4 = functionUncurryThis;
var thisNumberValue$1 = uncurryThis$4(1 .valueOf);
var $$8 = _export;
var IS_PURE = isPure;
var DESCRIPTORS$3 = descriptors;
var global$3 = global$r;
var path = path$2;
var uncurryThis$3 = functionUncurryThis;
var isForced$1 = isForced_1;
var hasOwn$2 = hasOwnProperty_1;
var inheritIfRequired$1 = inheritIfRequired$2;
var isPrototypeOf$1 = objectIsPrototypeOf;
var isSymbol = isSymbol$5;
var toPrimitive = toPrimitive$3;
var fails$5 = fails$A;
var getOwnPropertyNames4 = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var defineProperty$2 = objectDefineProperty.f;
var thisNumberValue = thisNumberValue$1;
var trim2 = stringTrim.trim;
var NUMBER = "Number";
var NativeNumber = global$3[NUMBER];
path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError$1 = global$3.TypeError;
var stringSlice$1 = uncurryThis$3("".slice);
var charCodeAt = uncurryThis$3("".charCodeAt);
var toNumeric = function(value) {
  var primValue = toPrimitive(value, "number");
  return typeof primValue == "bigint" ? primValue : toNumber(primValue);
};
var toNumber = function(argument) {
  var it = toPrimitive(argument, "number");
  var first, third, radix, maxCode, digits, length, index2, code;
  if (isSymbol(it))
    throw new TypeError$1("Cannot convert a Symbol value to a number");
  if (typeof it == "string" && it.length > 2) {
    it = trim2(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120)
        return NaN;
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice$1(it, 2);
      length = digits.length;
      for (index2 = 0; index2 < length; index2++) {
        code = charCodeAt(digits, index2);
        if (code < 48 || code > maxCode)
          return NaN;
      }
      return parseInt(digits, radix);
    }
  }
  return +it;
};
var FORCED = isForced$1(NUMBER, !NativeNumber(" 0o1") || !NativeNumber("0b1") || NativeNumber("+0x1"));
var calledWithNew = function(dummy) {
  return isPrototypeOf$1(NumberPrototype, dummy) && fails$5(function() {
    thisNumberValue(dummy);
  });
};
var NumberWrapper = function Number2(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired$1(Object(n), this, NumberWrapper) : n;
};
NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE)
  NumberPrototype.constructor = NumberWrapper;
$$8({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});
var copyConstructorProperties$1 = function(target, source) {
  for (var keys4 = DESCRIPTORS$3 ? getOwnPropertyNames4(source) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(",")
  ), j = 0, key; keys4.length > j; j++) {
    if (hasOwn$2(source, key = keys4[j]) && !hasOwn$2(target, key)) {
      defineProperty$2(target, key, getOwnPropertyDescriptor$1(source, key));
    }
  }
};
if (FORCED || IS_PURE)
  copyConstructorProperties$1(path[NUMBER], NativeNumber);
var toObject = toObject$a;
var toAbsoluteIndex$1 = toAbsoluteIndex$3;
var lengthOfArrayLike$1 = lengthOfArrayLike$8;
var arrayFill = function fill(value) {
  var O = toObject(this);
  var length = lengthOfArrayLike$1(O);
  var argumentsLength = arguments.length;
  var index2 = toAbsoluteIndex$1(argumentsLength > 1 ? arguments[1] : void 0, length);
  var end = argumentsLength > 2 ? arguments[2] : void 0;
  var endPos = end === void 0 ? length : toAbsoluteIndex$1(end, length);
  while (endPos > index2)
    O[index2++] = value;
  return O;
};
var $$7 = _export;
var fill2 = arrayFill;
var addToUnscopables$1 = addToUnscopables$3;
$$7({ target: "Array", proto: true }, {
  fill: fill2
});
addToUnscopables$1("fill");
var $$6 = _export;
var anObject$2 = anObject$m;
var getOwnPropertyDescriptor4 = objectGetOwnPropertyDescriptor.f;
$$6({ target: "Reflect", stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor4(anObject$2(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});
var toIndexedObject$1 = toIndexedObject$b;
var addToUnscopables = addToUnscopables$3;
var Iterators = iterators;
var InternalStateModule$1 = internalState;
var defineProperty$1 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;
var DESCRIPTORS$2 = descriptors;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState = InternalStateModule$1.getterFor(ARRAY_ITERATOR);
var es_array_iterator = defineIterator$1(Array, "Array", function(iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated),
    // target
    index: 0,
    // next index
    kind
    // kind
  });
}, function() {
  var state = getInternalState(this);
  var target = state.target;
  var index2 = state.index++;
  if (!target || index2 >= target.length) {
    state.target = void 0;
    return createIterResultObject$1(void 0, true);
  }
  switch (state.kind) {
    case "keys":
      return createIterResultObject$1(index2, false);
    case "values":
      return createIterResultObject$1(target[index2], false);
  }
  return createIterResultObject$1([index2, target[index2]], false);
}, "values");
var values = Iterators.Arguments = Iterators.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
if (DESCRIPTORS$2 && values.name !== "values")
  try {
    defineProperty$1(values, "name", { value: "values" });
  } catch (error) {
  }
var global$2 = global$r;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty = createNonEnumerableProperty$6;
var setToStringTag$1 = setToStringTag$6;
var wellKnownSymbol$1 = wellKnownSymbol$p;
var ITERATOR = wellKnownSymbol$1("iterator");
var ArrayValues = ArrayIteratorMethods.values;
var handlePrototype = function(CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    if (CollectionPrototype[ITERATOR] !== ArrayValues)
      try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
    setToStringTag$1(CollectionPrototype, COLLECTION_NAME, true);
    if (DOMIterables[COLLECTION_NAME])
      for (var METHOD_NAME in ArrayIteratorMethods) {
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
          try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
          }
      }
  }
};
for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$2[COLLECTION_NAME] && global$2[COLLECTION_NAME].prototype, COLLECTION_NAME);
}
handlePrototype(DOMTokenListPrototype, "DOMTokenList");
var $$5 = _export;
var DESCRIPTORS$1 = descriptors;
var global$1 = global$r;
var uncurryThis$2 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var isCallable$1 = isCallable$q;
var isPrototypeOf = objectIsPrototypeOf;
var toString3 = toString$d;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$5;
var copyConstructorProperties = copyConstructorProperties$3;
var NativeSymbol = global$1.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
if (DESCRIPTORS$1 && isCallable$1(NativeSymbol) && (!("description" in SymbolPrototype) || // Safari 12 bug
NativeSymbol().description !== void 0)) {
  var EmptyStringDescriptionStore = {};
  var SymbolWrapper = function Symbol2() {
    var description = arguments.length < 1 || arguments[0] === void 0 ? void 0 : toString3(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) : description === void 0 ? NativeSymbol() : NativeSymbol(description);
    if (description === "")
      EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;
  var NATIVE_SYMBOL = String(NativeSymbol("description detection")) === "Symbol(description detection)";
  var thisSymbolValue = uncurryThis$2(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis$2(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis$2("".replace);
  var stringSlice = uncurryThis$2("".slice);
  defineBuiltInAccessor$1(SymbolPrototype, "description", {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn$1(EmptyStringDescriptionStore, symbol))
        return "";
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, "$1");
      return desc === "" ? void 0 : desc;
    }
  });
  $$5({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}
var defineWellKnownSymbol = wellKnownSymbolDefine;
defineWellKnownSymbol("iterator");
var $$4 = _export;
var isArray2 = isArray$5;
var isConstructor3 = isConstructor$4;
var isObject$3 = isObject$j;
var toAbsoluteIndex = toAbsoluteIndex$3;
var lengthOfArrayLike = lengthOfArrayLike$8;
var toIndexedObject = toIndexedObject$b;
var createProperty = createProperty$4;
var wellKnownSymbol = wellKnownSymbol$p;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$4;
var nativeSlice = arraySlice$4;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
var SPECIES = wellKnownSymbol("species");
var $Array = Array;
var max = Math.max;
$$4({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
    var Constructor, result, n;
    if (isArray2(O)) {
      Constructor = O.constructor;
      if (isConstructor3(Constructor) && (Constructor === $Array || isArray2(Constructor.prototype))) {
        Constructor = void 0;
      } else if (isObject$3(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null)
          Constructor = void 0;
      }
      if (Constructor === $Array || Constructor === void 0) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === void 0 ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++)
      if (k in O)
        createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});
var internalMetadataExports = {};
var internalMetadata = {
  get exports() {
    return internalMetadataExports;
  },
  set exports(v) {
    internalMetadataExports = v;
  }
};
var fails$4 = fails$A;
var arrayBufferNonExtensible = fails$4(function() {
  if (typeof ArrayBuffer == "function") {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer))
      Object.defineProperty(buffer, "a", { value: 8 });
  }
});
var fails$3 = fails$A;
var isObject$2 = isObject$j;
var classof = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$3(function() {
  $isExtensible(1);
});
var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$2(it))
    return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === "ArrayBuffer")
    return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;
var fails$2 = fails$A;
var freezing = !fails$2(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $$3 = _export;
var uncurryThis$1 = functionUncurryThis;
var hiddenKeys = hiddenKeys$6;
var isObject$1 = isObject$j;
var hasOwn2 = hasOwnProperty_1;
var defineProperty4 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible2 = objectIsExtensible;
var uid = uid$4;
var FREEZING = freezing;
var REQUIRED = false;
var METADATA = uid("meta");
var id = 0;
var setMetadata = function(it) {
  defineProperty4(it, METADATA, { value: {
    objectID: "O" + id++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
};
var fastKey$1 = function(it, create4) {
  if (!isObject$1(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!hasOwn2(it, METADATA)) {
    if (!isExtensible2(it))
      return "F";
    if (!create4)
      return "E";
    setMetadata(it);
  }
  return it[METADATA].objectID;
};
var getWeakData = function(it, create4) {
  if (!hasOwn2(it, METADATA)) {
    if (!isExtensible2(it))
      return true;
    if (!create4)
      return false;
    setMetadata(it);
  }
  return it[METADATA].weakData;
};
var onFreeze = function(it) {
  if (FREEZING && REQUIRED && isExtensible2(it) && !hasOwn2(it, METADATA))
    setMetadata(it);
  return it;
};
var enable = function() {
  meta.enable = function() {
  };
  REQUIRED = true;
  var getOwnPropertyNames5 = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$1([].splice);
  var test2 = {};
  test2[METADATA] = 1;
  if (getOwnPropertyNames5(test2).length) {
    getOwnPropertyNamesModule.f = function(it) {
      var result = getOwnPropertyNames5(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      }
      return result;
    };
    $$3({ target: "Object", stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = internalMetadata.exports = {
  enable,
  fastKey: fastKey$1,
  getWeakData,
  onFreeze
};
hiddenKeys[METADATA] = true;
var $$2 = _export;
var global = global$r;
var uncurryThis = functionUncurryThis;
var isForced = isForced_1;
var defineBuiltIn$1 = defineBuiltIn$c;
var InternalMetadataModule = internalMetadataExports;
var iterate$1 = iterate$4;
var anInstance$1 = anInstance$3;
var isCallable = isCallable$q;
var isNullOrUndefined$1 = isNullOrUndefined$9;
var isObject = isObject$j;
var fails$1 = fails$A;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$3;
var setToStringTag = setToStringTag$6;
var inheritIfRequired = inheritIfRequired$2;
var collection$1 = function(CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
  var ADDER = IS_MAP ? "set" : "add";
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};
  var fixMethod = function(KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn$1(
      NativePrototype,
      KEY,
      KEY === "add" ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === "delete" ? function(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === "get" ? function get2(key) {
        return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === "has" ? function has2(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set2(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };
  var REPLACE2 = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$1(function() {
      new NativeConstructor().entries().next();
    }))
  );
  if (REPLACE2) {
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    var THROWS_ON_PRIMITIVES = fails$1(function() {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
      new NativeConstructor(iterable);
    });
    var BUGGY_ZERO = !IS_WEAK && fails$1(function() {
      var $instance = new NativeConstructor();
      var index2 = 5;
      while (index2--)
        $instance[ADDER](index2, index2);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function(dummy, iterable) {
        anInstance$1(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined$1(iterable))
          iterate$1(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod("delete");
      fixMethod("has");
      IS_MAP && fixMethod("get");
    }
    if (BUGGY_ZERO || HASNT_CHAINING)
      fixMethod(ADDER);
    if (IS_WEAK && NativePrototype.clear)
      delete NativePrototype.clear;
  }
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$2({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK)
    common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};
var defineBuiltIn = defineBuiltIn$c;
var defineBuiltIns$1 = function(target, src, options) {
  for (var key in src)
    defineBuiltIn(target, key, src[key], options);
  return target;
};
var create3 = objectCreate;
var defineBuiltInAccessor = defineBuiltInAccessor$5;
var defineBuiltIns = defineBuiltIns$1;
var bind2 = functionBindContext;
var anInstance = anInstance$3;
var isNullOrUndefined = isNullOrUndefined$9;
var iterate = iterate$4;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var setSpecies = setSpecies$2;
var DESCRIPTORS = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule = internalState;
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var collectionStrong$1 = {
  getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function(that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create3(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!DESCRIPTORS)
        that.size = 0;
      if (!isNullOrUndefined(iterable))
        iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var entry = getEntry(that, key);
      var previous, index2;
      if (entry) {
        entry.value = value;
      } else {
        state.last = entry = {
          index: index2 = fastKey(key, true),
          key,
          value,
          previous: previous = state.last,
          next: void 0,
          removed: false
        };
        if (!state.first)
          state.first = entry;
        if (previous)
          previous.next = entry;
        if (DESCRIPTORS)
          state.size++;
        else
          that.size++;
        if (index2 !== "F")
          state.index[index2] = entry;
      }
      return that;
    };
    var getEntry = function(that, key) {
      var state = getInternalState2(that);
      var index2 = fastKey(key);
      var entry;
      if (index2 !== "F")
        return state.index[index2];
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key)
          return entry;
      }
    };
    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear2() {
        var that = this;
        var state = getInternalState2(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous)
            entry.previous = entry.previous.next = void 0;
          entry = entry.next;
        }
        state.first = state.last = void 0;
        state.index = create3(null);
        if (DESCRIPTORS)
          state.size = 0;
        else
          that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      "delete": function(key) {
        var that = this;
        var state = getInternalState2(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next2 = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev)
            prev.next = next2;
          if (next2)
            next2.previous = prev;
          if (state.first === entry)
            state.first = next2;
          if (state.last === entry)
            state.last = prev;
          if (DESCRIPTORS)
            state.size--;
          else
            that.size--;
        }
        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach3(callbackfn) {
        var state = getInternalState2(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          while (entry && entry.removed)
            entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has2(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get2(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set2(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS)
      defineBuiltInAccessor(Prototype, "size", {
        configurable: true,
        get: function() {
          return getInternalState2(this).size;
        }
      });
    return Constructor;
  },
  setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind,
        last: void 0
      });
    }, function() {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      while (entry && entry.removed)
        entry = entry.previous;
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      if (kind === "keys")
        return createIterResultObject(entry.key, false);
      if (kind === "values")
        return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};
var collection = collection$1;
var collectionStrong = collectionStrong$1;
collection("Map", function(init) {
  return function Map2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong);
var $$1 = _export;
var functionApply = functionApply$1;
var aCallable = aCallable$b;
var anObject$1 = anObject$m;
var fails = fails$A;
var OPTIONAL_ARGUMENTS_LIST = !fails(function() {
  Reflect.apply(function() {
  });
});
$$1({ target: "Reflect", stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply2(target, thisArgument, argumentsList) {
    return functionApply(aCallable(target), thisArgument, anObject$1(argumentsList));
  }
});
var $ = _export;
var anObject = anObject$m;
var objectGetPrototypeOf = objectGetPrototypeOf$1;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
$({ target: "Reflect", stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf2(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === "string") {
    canvas = document.getElementById(canvas);
  }
  if (!canvas || _typeof(canvas) !== "object" || !("getContext" in canvas)) {
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  }
  var context = canvas.getContext("2d");
  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error("unable to access image data: " + e);
  }
}
function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }
  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext("2d").putImageData(imageData, topX, topY);
}
function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var div = 2 * radius + 1;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;
  for (var i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  var stackIn = null, stackOut = null, yw = 0, yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];
  for (var y = 0; y < height; y++) {
    stack = stackStart;
    var pr = pixels[yi], pg = pixels[yi + 1], pb = pixels[yi + 2], pa = pixels[yi + 3];
    for (var _i = 0; _i < radiusPlus1; _i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }
    var rInSum = 0, gInSum = 0, bInSum = 0, aInSum = 0, rOutSum = radiusPlus1 * pr, gOutSum = radiusPlus1 * pg, bOutSum = radiusPlus1 * pb, aOutSum = radiusPlus1 * pa, rSum = sumFactor * pr, gSum = sumFactor * pg, bSum = sumFactor * pb, aSum = sumFactor * pa;
    for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
      var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
      var r = pixels[p], g = pixels[p + 1], b = pixels[p + 2], a = pixels[p + 3];
      var rbs = radiusPlus1 - _i2;
      rSum += (stack.r = r) * rbs;
      gSum += (stack.g = g) * rbs;
      bSum += (stack.b = b) * rbs;
      aSum += (stack.a = a) * rbs;
      rInSum += r;
      gInSum += g;
      bInSum += b;
      aInSum += a;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (var x = 0; x < width; x++) {
      var paInitial = aSum * mulSum >> shgSum;
      pixels[yi + 3] = paInitial;
      if (paInitial !== 0) {
        var _a2 = 255 / paInitial;
        pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
        pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
        pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      var _p = x + radius + 1;
      _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[_p];
      gInSum += stackIn.g = pixels[_p + 1];
      bInSum += stackIn.b = pixels[_p + 2];
      aInSum += stackIn.a = pixels[_p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      var _stackOut = stackOut, _r = _stackOut.r, _g = _stackOut.g, _b = _stackOut.b, _a = _stackOut.a;
      rOutSum += _r;
      gOutSum += _g;
      bOutSum += _b;
      aOutSum += _a;
      rInSum -= _r;
      gInSum -= _g;
      bInSum -= _b;
      aInSum -= _a;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (var _x = 0; _x < width; _x++) {
    yi = _x << 2;
    var _pr = pixels[yi], _pg = pixels[yi + 1], _pb = pixels[yi + 2], _pa = pixels[yi + 3], _rOutSum = radiusPlus1 * _pr, _gOutSum = radiusPlus1 * _pg, _bOutSum = radiusPlus1 * _pb, _aOutSum = radiusPlus1 * _pa, _rSum = sumFactor * _pr, _gSum = sumFactor * _pg, _bSum = sumFactor * _pb, _aSum = sumFactor * _pa;
    stack = stackStart;
    for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
      stack.r = _pr;
      stack.g = _pg;
      stack.b = _pb;
      stack.a = _pa;
      stack = stack.next;
    }
    var yp = width;
    var _gInSum = 0, _bInSum = 0, _aInSum = 0, _rInSum = 0;
    for (var _i4 = 1; _i4 <= radius; _i4++) {
      yi = yp + _x << 2;
      var _rbs = radiusPlus1 - _i4;
      _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
      _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
      _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
      _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
      _rInSum += _pr;
      _gInSum += _pg;
      _bInSum += _pb;
      _aInSum += _pa;
      stack = stack.next;
      if (_i4 < heightMinus1) {
        yp += width;
      }
    }
    yi = _x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (var _y = 0; _y < height; _y++) {
      var _p2 = yi << 2;
      pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;
      if (_pa > 0) {
        _pa = 255 / _pa;
        pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
        pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
        pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
      } else {
        pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
      }
      _rSum -= _rOutSum;
      _gSum -= _gOutSum;
      _bSum -= _bOutSum;
      _aSum -= _aOutSum;
      _rOutSum -= stackIn.r;
      _gOutSum -= stackIn.g;
      _bOutSum -= stackIn.b;
      _aOutSum -= stackIn.a;
      _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
      _rSum += _rInSum += stackIn.r = pixels[_p2];
      _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
      _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
      _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
      stackIn = stackIn.next;
      _rOutSum += _pr = stackOut.r;
      _gOutSum += _pg = stackOut.g;
      _bOutSum += _pb = stackOut.b;
      _aOutSum += _pa = stackOut.a;
      _rInSum -= _pr;
      _gInSum -= _pg;
      _bInSum -= _pb;
      _aInSum -= _pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }
  return imageData;
}
var BlurStack = (
  /**
   * Set properties.
   */
  function BlurStack2() {
    _classCallCheck(this, BlurStack2);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
  }
);
function compressSpaces(str) {
  return str.replace(/(?!\u3000)\s+/gm, " ");
}
function trimLeft(str) {
  return str.replace(/^[\n \t]+/, "");
}
function trimRight(str) {
  return str.replace(/[\n \t]+$/, "");
}
function toNumbers(str) {
  var matches = (str || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return matches.map(parseFloat);
}
var allUppercase = /^[A-Z-]+$/;
function normalizeAttributeName(name) {
  if (allUppercase.test(name)) {
    return name.toLowerCase();
  }
  return name;
}
function parseExternalUrl(url) {
  var urlMatch = url.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
  return urlMatch[2] || urlMatch[3] || urlMatch[4];
}
function normalizeColor(color) {
  if (!color.startsWith("rgb")) {
    return color;
  }
  var rgbParts = 3;
  var normalizedColor = color.replace(/\d+(\.\d+)?/g, function(num, isFloat) {
    return rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num;
  });
  return normalizedColor;
}
var attributeRegex = /(\[[^\]]+\])/g;
var idRegex = /(#[^\s\+>~\.\[:]+)/g;
var classRegex = /(\.[^\s\+>~\.\[:]+)/g;
var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
var elementRegex = /([^\s\+>~\.\[:]+)/g;
function findSelectorMatch(selector, regex) {
  var matches = selector.match(regex);
  if (!matches) {
    return [selector, 0];
  }
  return [selector.replace(regex, " "), matches.length];
}
function getSelectorSpecificity(selector) {
  var specificity = [0, 0, 0];
  var currentSelector = selector.replace(/:not\(([^\)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " ");
  var delta = 0;
  var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);
  var _findSelectorMatch2 = _slicedToArray(_findSelectorMatch, 2);
  currentSelector = _findSelectorMatch2[0];
  delta = _findSelectorMatch2[1];
  specificity[1] += delta;
  var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);
  var _findSelectorMatch4 = _slicedToArray(_findSelectorMatch3, 2);
  currentSelector = _findSelectorMatch4[0];
  delta = _findSelectorMatch4[1];
  specificity[0] += delta;
  var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);
  var _findSelectorMatch6 = _slicedToArray(_findSelectorMatch5, 2);
  currentSelector = _findSelectorMatch6[0];
  delta = _findSelectorMatch6[1];
  specificity[1] += delta;
  var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);
  var _findSelectorMatch8 = _slicedToArray(_findSelectorMatch7, 2);
  currentSelector = _findSelectorMatch8[0];
  delta = _findSelectorMatch8[1];
  specificity[2] += delta;
  var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
  var _findSelectorMatch10 = _slicedToArray(_findSelectorMatch9, 2);
  currentSelector = _findSelectorMatch10[0];
  delta = _findSelectorMatch10[1];
  specificity[1] += delta;
  var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);
  var _findSelectorMatch12 = _slicedToArray(_findSelectorMatch11, 2);
  currentSelector = _findSelectorMatch12[0];
  delta = _findSelectorMatch12[1];
  specificity[1] += delta;
  currentSelector = currentSelector.replace(/[\*\s\+>~]/g, " ").replace(/[#\.]/g, " ");
  var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);
  var _findSelectorMatch14 = _slicedToArray(_findSelectorMatch13, 2);
  currentSelector = _findSelectorMatch14[0];
  delta = _findSelectorMatch14[1];
  specificity[2] += delta;
  return specificity.join("");
}
var PSEUDO_ZERO = 1e-8;
function vectorMagnitude(v) {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}
function vectorsRatio(u, v) {
  return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
}
function vectorsAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
}
function CB1(t) {
  return t * t * t;
}
function CB2(t) {
  return 3 * t * t * (1 - t);
}
function CB3(t) {
  return 3 * t * (1 - t) * (1 - t);
}
function CB4(t) {
  return (1 - t) * (1 - t) * (1 - t);
}
function QB1(t) {
  return t * t;
}
function QB2(t) {
  return 2 * t * (1 - t);
}
function QB3(t) {
  return (1 - t) * (1 - t);
}
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
createCommonjsModule(function(module) {
  var runtime2 = function(exports) {
    var Op = Object.prototype;
    var hasOwn3 = Op.hasOwnProperty;
    var undefined$1;
    var $Symbol2 = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol2.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol2.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol2.toStringTag || "@@toStringTag";
    function wrap2(innerFn, outerFn, self2, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);
      generator._invoke = makeInvokeMethod(innerFn, self2, context);
      return generator;
    }
    exports.wrap = wrap2;
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype2 = {};
    IteratorPrototype2[iteratorSymbol] = function() {
      return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values2([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn3.call(NativeIteratorPrototype, iteratorSymbol)) {
      IteratorPrototype2 = NativeIteratorPrototype;
    }
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype2);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        prototype[method] = function(arg) {
          return this._invoke(method, arg);
        };
      });
    }
    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };
    exports.awrap = function(arg) {
      return {
        __await: arg
      };
    };
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve2, reject2) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject2(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value && typeof value === "object" && hasOwn3.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value2) {
              invoke("next", value2, resolve2, reject2);
            }, function(err) {
              invoke("throw", err, resolve2, reject2);
            });
          }
          return PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped;
            resolve2(result);
          }, function(error) {
            return invoke("throw", error, resolve2, reject2);
          });
        }
      }
      var previousPromise;
      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve2, reject2) {
            invoke(method, arg, resolve2, reject2);
          });
        }
        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
      }
      this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;
    exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0)
        PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap2(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    };
    function makeInvokeMethod(innerFn, self2, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }
        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }
          return doneResult();
        }
        context.method = method;
        context.arg = arg;
        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel)
                continue;
              return delegateResult;
            }
          }
          if (context.method === "next") {
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }
            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }
          state = GenStateExecuting;
          var record = tryCatch(innerFn, self2, context);
          if (record.type === "normal") {
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;
            if (record.arg === ContinueSentinel) {
              continue;
            }
            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        context.delegate = null;
        if (context.method === "throw") {
          if (delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }
      var info = record.arg;
      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }
      if (info.done) {
        context[delegate.resultName] = info.value;
        context.next = delegate.nextLoc;
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        return info;
      }
      context.delegate = null;
      return ContinueSentinel;
    }
    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator";
    Gp[iteratorSymbol] = function() {
      return this;
    };
    Gp.toString = function() {
      return "[object Generator]";
    };
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      if (1 in locs) {
        entry.catchLoc = locs[1];
      }
      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }
      this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }
    exports.keys = function(object) {
      var keys4 = [];
      for (var key in object) {
        keys4.push(key);
      }
      keys4.reverse();
      return function next2() {
        while (keys4.length) {
          var key2 = keys4.pop();
          if (key2 in object) {
            next2.value = key2;
            next2.done = false;
            return next2;
          }
        }
        next2.done = true;
        return next2;
      };
    };
    function values2(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }
        if (typeof iterable.next === "function") {
          return iterable;
        }
        if (!isNaN(iterable.length)) {
          var i = -1, next2 = function next3() {
            while (++i < iterable.length) {
              if (hasOwn3.call(iterable, i)) {
                next3.value = iterable[i];
                next3.done = false;
                return next3;
              }
            }
            next3.value = undefined$1;
            next3.done = true;
            return next3;
          };
          return next2.next = next2;
        }
      }
      return {
        next: doneResult
      };
    }
    exports.values = values2;
    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }
    Context.prototype = {
      constructor: Context,
      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);
        if (!skipTempReset) {
          for (var name in this) {
            if (name.charAt(0) === "t" && hasOwn3.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }
        return this.rval;
      },
      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }
        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          if (caught) {
            context.method = "next";
            context.arg = undefined$1;
          }
          return !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if (entry.tryLoc === "root") {
            return handle("end");
          }
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn3.call(entry, "catchLoc");
            var hasFinally = hasOwn3.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn3.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          finallyEntry = null;
        }
        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;
        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }
        return this.complete(record);
      },
      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }
        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
        return ContinueSentinel;
      },
      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values2(iterable),
          resultName,
          nextLoc
        };
        if (this.method === "next") {
          this.arg = undefined$1;
        }
        return ContinueSentinel;
      }
    };
    return exports;
  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports
  );
  try {
    regeneratorRuntime = runtime2;
  } catch (accidentalStrictMode) {
    Function("r", "regeneratorRuntime = r")(runtime2);
  }
});
var Property = /* @__PURE__ */ function() {
  function Property2(document2, name, value) {
    _classCallCheck$1(this, Property2);
    this.document = document2;
    this.name = name;
    this.value = value;
    this.isNormalizedColor = false;
  }
  _createClass(Property2, [{
    key: "hasValue",
    value: function hasValue() {
      var value = this.value;
      return value !== null && value !== "" && value !== 0 && typeof value !== "undefined";
    }
  }, {
    key: "isString",
    value: function isString(regexp) {
      var value = this.value;
      var result = typeof value === "string";
      if (!result || !regexp) {
        return result;
      }
      return regexp.test(value);
    }
  }, {
    key: "isUrlDefinition",
    value: function isUrlDefinition() {
      return this.isString(/^url\(/);
    }
  }, {
    key: "isPixels",
    value: function isPixels() {
      if (!this.hasValue()) {
        return false;
      }
      var asString = this.getString();
      switch (true) {
        case /px$/.test(asString):
        case /^[0-9]+$/.test(asString):
          return true;
        default:
          return false;
      }
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      return this;
    }
  }, {
    key: "getValue",
    value: function getValue(def) {
      if (typeof def === "undefined" || this.hasValue()) {
        return this.value;
      }
      return def;
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      if (!this.hasValue()) {
        if (typeof def === "undefined") {
          return 0;
        }
        return parseFloat(def);
      }
      var value = this.value;
      var n = parseFloat(value);
      if (this.isString(/%$/)) {
        n = n / 100;
      }
      return n;
    }
  }, {
    key: "getString",
    value: function getString(def) {
      if (typeof def === "undefined" || this.hasValue()) {
        return typeof this.value === "undefined" ? "" : String(this.value);
      }
      return String(def);
    }
  }, {
    key: "getColor",
    value: function getColor(def) {
      var color = this.getString(def);
      if (this.isNormalizedColor) {
        return color;
      }
      this.isNormalizedColor = true;
      color = normalizeColor(color);
      this.value = color;
      return color;
    }
  }, {
    key: "getDpi",
    value: function getDpi() {
      return 96;
    }
  }, {
    key: "getRem",
    value: function getRem() {
      return this.document.rootEmSize;
    }
  }, {
    key: "getEm",
    value: function getEm() {
      return this.document.emSize;
    }
  }, {
    key: "getUnits",
    value: function getUnits() {
      return this.getString().replace(/[0-9\.\-]/g, "");
    }
  }, {
    key: "getPixels",
    value: function getPixels(axisOrIsFontSize) {
      var processPercent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!this.hasValue()) {
        return 0;
      }
      var _ref = typeof axisOrIsFontSize === "boolean" ? [void 0, axisOrIsFontSize] : [axisOrIsFontSize], _ref2 = _slicedToArray(_ref, 2), axis = _ref2[0], isFontSize = _ref2[1];
      var viewPort = this.document.screen.viewPort;
      switch (true) {
        case this.isString(/vmin$/):
          return this.getNumber() / 100 * Math.min(viewPort.computeSize("x"), viewPort.computeSize("y"));
        case this.isString(/vmax$/):
          return this.getNumber() / 100 * Math.max(viewPort.computeSize("x"), viewPort.computeSize("y"));
        case this.isString(/vw$/):
          return this.getNumber() / 100 * viewPort.computeSize("x");
        case this.isString(/vh$/):
          return this.getNumber() / 100 * viewPort.computeSize("y");
        case this.isString(/rem$/):
          return this.getNumber() * this.getRem();
        case this.isString(/em$/):
          return this.getNumber() * this.getEm();
        case this.isString(/ex$/):
          return this.getNumber() * this.getEm() / 2;
        case this.isString(/px$/):
          return this.getNumber();
        case this.isString(/pt$/):
          return this.getNumber() * this.getDpi() * (1 / 72);
        case this.isString(/pc$/):
          return this.getNumber() * 15;
        case this.isString(/cm$/):
          return this.getNumber() * this.getDpi() / 2.54;
        case this.isString(/mm$/):
          return this.getNumber() * this.getDpi() / 25.4;
        case this.isString(/in$/):
          return this.getNumber() * this.getDpi();
        case (this.isString(/%$/) && isFontSize):
          return this.getNumber() * this.getEm();
        case this.isString(/%$/):
          return this.getNumber() * viewPort.computeSize(axis);
        default: {
          var n = this.getNumber();
          if (processPercent && n < 1) {
            return n * viewPort.computeSize(axis);
          }
          return n;
        }
      }
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      if (!this.hasValue()) {
        return 0;
      }
      if (this.isString(/ms$/)) {
        return this.getNumber();
      }
      return this.getNumber() * 1e3;
    }
  }, {
    key: "getRadians",
    value: function getRadians() {
      if (!this.hasValue()) {
        return 0;
      }
      switch (true) {
        case this.isString(/deg$/):
          return this.getNumber() * (Math.PI / 180);
        case this.isString(/grad$/):
          return this.getNumber() * (Math.PI / 200);
        case this.isString(/rad$/):
          return this.getNumber();
        default:
          return this.getNumber() * (Math.PI / 180);
      }
    }
  }, {
    key: "getDefinition",
    value: function getDefinition() {
      var asString = this.getString();
      var name = asString.match(/#([^\)'"]+)/);
      if (name) {
        name = name[1];
      }
      if (!name) {
        name = asString;
      }
      return this.document.definitions[name];
    }
  }, {
    key: "getFillStyleDefinition",
    value: function getFillStyleDefinition(element, opacity) {
      var def = this.getDefinition();
      if (!def) {
        return null;
      }
      if (typeof def.createGradient === "function") {
        return def.createGradient(this.document.ctx, element, opacity);
      }
      if (typeof def.createPattern === "function") {
        if (def.getHrefAttribute().hasValue()) {
          var patternTransform = def.getAttribute("patternTransform");
          def = def.getHrefAttribute().getDefinition();
          if (patternTransform.hasValue()) {
            def.getAttribute("patternTransform", true).setValue(patternTransform.value);
          }
        }
        return def.createPattern(this.document.ctx, element, opacity);
      }
      return null;
    }
  }, {
    key: "getTextBaseline",
    value: function getTextBaseline() {
      if (!this.hasValue()) {
        return null;
      }
      return Property2.textBaselineMapping[this.getString()];
    }
  }, {
    key: "addOpacity",
    value: function addOpacity(opacity) {
      var value = this.getColor();
      var len = value.length;
      var commas = 0;
      for (var i = 0; i < len; i++) {
        if (value[i] === ",") {
          commas++;
        }
        if (commas === 3) {
          break;
        }
      }
      if (opacity.hasValue() && this.isString() && commas !== 3) {
        var color = new rgbcolor(value);
        if (color.ok) {
          color.alpha = opacity.getNumber();
          value = color.toRGBA();
        }
      }
      return new Property2(this.document, this.name, value);
    }
  }], [{
    key: "empty",
    value: function empty(document2) {
      return new Property2(document2, "EMPTY", "");
    }
  }]);
  return Property2;
}();
Property.textBaselineMapping = {
  "baseline": "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  "middle": "middle",
  "central": "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  "ideographic": "ideographic",
  "alphabetic": "alphabetic",
  "hanging": "hanging",
  "mathematical": "alphabetic"
};
var ViewPort = /* @__PURE__ */ function() {
  function ViewPort2() {
    _classCallCheck$1(this, ViewPort2);
    this.viewPorts = [];
  }
  _createClass(ViewPort2, [{
    key: "clear",
    value: function clear2() {
      this.viewPorts = [];
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(width, height) {
      this.viewPorts.push({
        width,
        height
      });
    }
  }, {
    key: "removeCurrent",
    value: function removeCurrent() {
      this.viewPorts.pop();
    }
  }, {
    key: "getCurrent",
    value: function getCurrent() {
      var viewPorts = this.viewPorts;
      return viewPorts[viewPorts.length - 1];
    }
  }, {
    key: "computeSize",
    value: function computeSize(d) {
      if (typeof d === "number") {
        return d;
      }
      if (d === "x") {
        return this.width;
      }
      if (d === "y") {
        return this.height;
      }
      return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
    }
  }, {
    key: "width",
    get: function get2() {
      return this.getCurrent().width;
    }
  }, {
    key: "height",
    get: function get2() {
      return this.getCurrent().height;
    }
  }]);
  return ViewPort2;
}();
var Point = /* @__PURE__ */ function() {
  function Point2(x, y) {
    _classCallCheck$1(this, Point2);
    this.x = x;
    this.y = y;
  }
  _createClass(Point2, [{
    key: "angleTo",
    value: function angleTo(point) {
      return Math.atan2(point.y - this.y, point.x - this.x);
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      var x = this.x, y = this.y;
      var xp = x * transform[0] + y * transform[2] + transform[4];
      var yp = x * transform[1] + y * transform[3] + transform[5];
      this.x = xp;
      this.y = yp;
    }
  }], [{
    key: "parse",
    value: function parse(point) {
      var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var _toNumbers = toNumbers(point), _toNumbers2 = _slicedToArray(_toNumbers, 2), _toNumbers2$ = _toNumbers2[0], x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$, _toNumbers2$2 = _toNumbers2[1], y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;
      return new Point2(x, y);
    }
  }, {
    key: "parseScale",
    value: function parseScale(scale) {
      var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      var _toNumbers3 = toNumbers(scale), _toNumbers4 = _slicedToArray(_toNumbers3, 2), _toNumbers4$ = _toNumbers4[0], x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$, _toNumbers4$2 = _toNumbers4[1], y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;
      return new Point2(x, y);
    }
  }, {
    key: "parsePath",
    value: function parsePath(path2) {
      var points = toNumbers(path2);
      var len = points.length;
      var pathPoints = [];
      for (var i = 0; i < len; i += 2) {
        pathPoints.push(new Point2(points[i], points[i + 1]));
      }
      return pathPoints;
    }
  }]);
  return Point2;
}();
var Mouse = /* @__PURE__ */ function() {
  function Mouse2(screen) {
    _classCallCheck$1(this, Mouse2);
    this.screen = screen;
    this.working = false;
    this.events = [];
    this.eventElements = [];
    this.onClick = this.onClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  _createClass(Mouse2, [{
    key: "isWorking",
    value: function isWorking() {
      return this.working;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.working) {
        return;
      }
      var screen = this.screen, onClick = this.onClick, onMouseMove = this.onMouseMove;
      var canvas = screen.ctx.canvas;
      canvas.onclick = onClick;
      canvas.onmousemove = onMouseMove;
      this.working = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.working) {
        return;
      }
      var canvas = this.screen.ctx.canvas;
      this.working = false;
      canvas.onclick = null;
      canvas.onmousemove = null;
    }
  }, {
    key: "hasEvents",
    value: function hasEvents() {
      return this.working && this.events.length > 0;
    }
  }, {
    key: "runEvents",
    value: function runEvents() {
      if (!this.working) {
        return;
      }
      var document2 = this.screen, events = this.events, eventElements = this.eventElements;
      var style = document2.ctx.canvas.style;
      if (style) {
        style.cursor = "";
      }
      events.forEach(function(_ref, i) {
        var run2 = _ref.run;
        var element = eventElements[i];
        while (element) {
          run2(element);
          element = element.parent;
        }
      });
      this.events = [];
      this.eventElements = [];
    }
  }, {
    key: "checkPath",
    value: function checkPath(element, ctx) {
      if (!this.working || !ctx) {
        return;
      }
      var events = this.events, eventElements = this.eventElements;
      events.forEach(function(_ref2, i) {
        var x = _ref2.x, y = _ref2.y;
        if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) {
          eventElements[i] = element;
        }
      });
    }
  }, {
    key: "checkBoundingBox",
    value: function checkBoundingBox(element, boundingBox) {
      if (!this.working || !boundingBox) {
        return;
      }
      var events = this.events, eventElements = this.eventElements;
      events.forEach(function(_ref3, i) {
        var x = _ref3.x, y = _ref3.y;
        if (!eventElements[i] && boundingBox.isPointInBox(x, y)) {
          eventElements[i] = element;
        }
      });
    }
  }, {
    key: "mapXY",
    value: function mapXY(x, y) {
      var _this$screen = this.screen, window2 = _this$screen.window, ctx = _this$screen.ctx;
      var point = new Point(x, y);
      var element = ctx.canvas;
      while (element) {
        point.x -= element.offsetLeft;
        point.y -= element.offsetTop;
        element = element.offsetParent;
      }
      if (window2.scrollX) {
        point.x += window2.scrollX;
      }
      if (window2.scrollY) {
        point.y += window2.scrollY;
      }
      return point;
    }
  }, {
    key: "onClick",
    value: function onClick(evt) {
      var _this$mapXY = this.mapXY((evt || event).clientX, (evt || event).clientY), x = _this$mapXY.x, y = _this$mapXY.y;
      this.events.push({
        type: "onclick",
        x,
        y,
        run: function run2(event2) {
          if (event2.onClick) {
            event2.onClick();
          }
        }
      });
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(evt) {
      var _this$mapXY2 = this.mapXY((evt || event).clientX, (evt || event).clientY), x = _this$mapXY2.x, y = _this$mapXY2.y;
      this.events.push({
        type: "onmousemove",
        x,
        y,
        run: function run2(event2) {
          if (event2.onMouseMove) {
            event2.onMouseMove();
          }
        }
      });
    }
  }]);
  return Mouse2;
}();
var defaultWindow = typeof window !== "undefined" ? window : null;
var defaultFetch = typeof fetch !== "undefined" ? fetch.bind(void 0) : null;
var Screen = /* @__PURE__ */ function() {
  function Screen2(ctx) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$fetch = _ref.fetch, fetch2 = _ref$fetch === void 0 ? defaultFetch : _ref$fetch, _ref$window = _ref.window, window2 = _ref$window === void 0 ? defaultWindow : _ref$window;
    _classCallCheck$1(this, Screen2);
    this.ctx = ctx;
    this.FRAMERATE = 30;
    this.MAX_VIRTUAL_PIXELS = 3e4;
    this.CLIENT_WIDTH = 800;
    this.CLIENT_HEIGHT = 600;
    this.viewPort = new ViewPort();
    this.mouse = new Mouse(this);
    this.animations = [];
    this.waits = [];
    this.frameDuration = 0;
    this.isReadyLock = false;
    this.isFirstRender = true;
    this.intervalId = null;
    this.window = window2;
    this.fetch = fetch2;
  }
  _createClass(Screen2, [{
    key: "wait",
    value: function wait(checker) {
      this.waits.push(checker);
    }
  }, {
    key: "ready",
    value: function ready() {
      if (!this.readyPromise) {
        return Promise.resolve();
      }
      return this.readyPromise;
    }
  }, {
    key: "isReady",
    value: function isReady() {
      if (this.isReadyLock) {
        return true;
      }
      var isReadyLock = this.waits.every(function(_) {
        return _();
      });
      if (isReadyLock) {
        this.waits = [];
        if (this.resolveReady) {
          this.resolveReady();
        }
      }
      this.isReadyLock = isReadyLock;
      return isReadyLock;
    }
  }, {
    key: "setDefaults",
    value: function setDefaults(ctx) {
      ctx.strokeStyle = "rgba(0,0,0,0)";
      ctx.lineCap = "butt";
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4;
    }
  }, {
    key: "setViewBox",
    value: function setViewBox(_ref2) {
      var document2 = _ref2.document, ctx = _ref2.ctx, aspectRatio = _ref2.aspectRatio, width = _ref2.width, desiredWidth = _ref2.desiredWidth, height = _ref2.height, desiredHeight = _ref2.desiredHeight, _ref2$minX = _ref2.minX, minX = _ref2$minX === void 0 ? 0 : _ref2$minX, _ref2$minY = _ref2.minY, minY = _ref2$minY === void 0 ? 0 : _ref2$minY, refX = _ref2.refX, refY = _ref2.refY, _ref2$clip = _ref2.clip, clip = _ref2$clip === void 0 ? false : _ref2$clip, _ref2$clipX = _ref2.clipX, clipX = _ref2$clipX === void 0 ? 0 : _ref2$clipX, _ref2$clipY = _ref2.clipY, clipY = _ref2$clipY === void 0 ? 0 : _ref2$clipY;
      var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, "");
      var _cleanAspectRatio$spl = cleanAspectRatio.split(" "), _cleanAspectRatio$spl2 = _slicedToArray(_cleanAspectRatio$spl, 2), aspectRatioAlign = _cleanAspectRatio$spl2[0], aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];
      var align = aspectRatioAlign || "xMidYMid";
      var meetOrSlice = aspectRatioMeetOrSlice || "meet";
      var scaleX = width / desiredWidth;
      var scaleY = height / desiredHeight;
      var scaleMin = Math.min(scaleX, scaleY);
      var scaleMax = Math.max(scaleX, scaleY);
      var finalDesiredWidth = desiredWidth;
      var finalDesiredHeight = desiredHeight;
      if (meetOrSlice === "meet") {
        finalDesiredWidth *= scaleMin;
        finalDesiredHeight *= scaleMin;
      }
      if (meetOrSlice === "slice") {
        finalDesiredWidth *= scaleMax;
        finalDesiredHeight *= scaleMax;
      }
      var refXProp = new Property(document2, "refX", refX);
      var refYProp = new Property(document2, "refY", refY);
      var hasRefs = refXProp.hasValue() && refYProp.hasValue();
      if (hasRefs) {
        ctx.translate(-scaleMin * refXProp.getPixels("x"), -scaleMin * refYProp.getPixels("y"));
      }
      if (clip) {
        var scaledClipX = scaleMin * clipX;
        var scaledClipY = scaleMin * clipY;
        ctx.beginPath();
        ctx.moveTo(scaledClipX, scaledClipY);
        ctx.lineTo(width, scaledClipY);
        ctx.lineTo(width, height);
        ctx.lineTo(scaledClipX, height);
        ctx.closePath();
        ctx.clip();
      }
      if (!hasRefs) {
        var isMeetMinY = meetOrSlice === "meet" && scaleMin === scaleY;
        var isSliceMaxY = meetOrSlice === "slice" && scaleMax === scaleY;
        var isMeetMinX = meetOrSlice === "meet" && scaleMin === scaleX;
        var isSliceMaxX = meetOrSlice === "slice" && scaleMax === scaleX;
        if (/^xMid/.test(align) && (isMeetMinY || isSliceMaxY)) {
          ctx.translate(width / 2 - finalDesiredWidth / 2, 0);
        }
        if (/YMid$/.test(align) && (isMeetMinX || isSliceMaxX)) {
          ctx.translate(0, height / 2 - finalDesiredHeight / 2);
        }
        if (/^xMax/.test(align) && (isMeetMinY || isSliceMaxY)) {
          ctx.translate(width - finalDesiredWidth, 0);
        }
        if (/YMax$/.test(align) && (isMeetMinX || isSliceMaxX)) {
          ctx.translate(0, height - finalDesiredHeight);
        }
      }
      switch (true) {
        case align === "none":
          ctx.scale(scaleX, scaleY);
          break;
        case meetOrSlice === "meet":
          ctx.scale(scaleMin, scaleMin);
          break;
        case meetOrSlice === "slice":
          ctx.scale(scaleMax, scaleMax);
          break;
      }
      ctx.translate(-minX, -minY);
    }
  }, {
    key: "start",
    value: function start(element) {
      var _this = this;
      var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$enableRedraw = _ref3.enableRedraw, enableRedraw = _ref3$enableRedraw === void 0 ? false : _ref3$enableRedraw, _ref3$ignoreMouse = _ref3.ignoreMouse, ignoreMouse = _ref3$ignoreMouse === void 0 ? false : _ref3$ignoreMouse, _ref3$ignoreAnimation = _ref3.ignoreAnimation, ignoreAnimation = _ref3$ignoreAnimation === void 0 ? false : _ref3$ignoreAnimation, _ref3$ignoreDimension = _ref3.ignoreDimensions, ignoreDimensions = _ref3$ignoreDimension === void 0 ? false : _ref3$ignoreDimension, _ref3$ignoreClear = _ref3.ignoreClear, ignoreClear = _ref3$ignoreClear === void 0 ? false : _ref3$ignoreClear, forceRedraw = _ref3.forceRedraw, scaleWidth = _ref3.scaleWidth, scaleHeight = _ref3.scaleHeight, offsetX = _ref3.offsetX, offsetY = _ref3.offsetY;
      var FRAMERATE = this.FRAMERATE, mouse = this.mouse;
      var frameDuration = 1e3 / FRAMERATE;
      this.frameDuration = frameDuration;
      this.readyPromise = new Promise(function(resolve2) {
        _this.resolveReady = resolve2;
      });
      if (this.isReady()) {
        this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
      }
      if (!enableRedraw) {
        return;
      }
      var now2 = Date.now();
      var then2 = now2;
      var delta = 0;
      var tick = function tick2() {
        now2 = Date.now();
        delta = now2 - then2;
        if (delta >= frameDuration) {
          then2 = now2 - delta % frameDuration;
          if (_this.shouldUpdate(ignoreAnimation, forceRedraw)) {
            _this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
            mouse.runEvents();
          }
        }
        _this.intervalId = rafExports(tick2);
      };
      if (!ignoreMouse) {
        mouse.start();
      }
      this.intervalId = rafExports(tick);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.intervalId) {
        rafExports.cancel(this.intervalId);
        this.intervalId = null;
      }
      this.mouse.stop();
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(ignoreAnimation, forceRedraw) {
      if (!ignoreAnimation) {
        var frameDuration = this.frameDuration;
        var shouldUpdate2 = this.animations.reduce(function(shouldUpdate3, animation) {
          return animation.update(frameDuration) || shouldUpdate3;
        }, false);
        if (shouldUpdate2) {
          return true;
        }
      }
      if (typeof forceRedraw === "function" && forceRedraw()) {
        return true;
      }
      if (!this.isReadyLock && this.isReady()) {
        return true;
      }
      if (this.mouse.hasEvents()) {
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
      var CLIENT_WIDTH = this.CLIENT_WIDTH, CLIENT_HEIGHT = this.CLIENT_HEIGHT, viewPort = this.viewPort, ctx = this.ctx, isFirstRender = this.isFirstRender;
      var canvas = ctx.canvas;
      viewPort.clear();
      if (canvas.width && canvas.height) {
        viewPort.setCurrent(canvas.width, canvas.height);
      } else {
        viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
      }
      var widthStyle = element.getStyle("width");
      var heightStyle = element.getStyle("height");
      if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== "number" && typeof scaleHeight !== "number")) {
        if (widthStyle.hasValue()) {
          canvas.width = widthStyle.getPixels("x");
          if (canvas.style) {
            canvas.style.width = "".concat(canvas.width, "px");
          }
        }
        if (heightStyle.hasValue()) {
          canvas.height = heightStyle.getPixels("y");
          if (canvas.style) {
            canvas.style.height = "".concat(canvas.height, "px");
          }
        }
      }
      var cWidth = canvas.clientWidth || canvas.width;
      var cHeight = canvas.clientHeight || canvas.height;
      if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
        cWidth = widthStyle.getPixels("x");
        cHeight = heightStyle.getPixels("y");
      }
      viewPort.setCurrent(cWidth, cHeight);
      if (typeof offsetX === "number") {
        element.getAttribute("x", true).setValue(offsetX);
      }
      if (typeof offsetY === "number") {
        element.getAttribute("y", true).setValue(offsetY);
      }
      if (typeof scaleWidth === "number" || typeof scaleHeight === "number") {
        var viewBox = toNumbers(element.getAttribute("viewBox").getString());
        var xRatio = 0;
        var yRatio = 0;
        if (typeof scaleWidth === "number") {
          var _widthStyle = element.getStyle("width");
          if (_widthStyle.hasValue()) {
            xRatio = _widthStyle.getPixels("x") / scaleWidth;
          } else if (!isNaN(viewBox[2])) {
            xRatio = viewBox[2] / scaleWidth;
          }
        }
        if (typeof scaleHeight === "number") {
          var _heightStyle = element.getStyle("height");
          if (_heightStyle.hasValue()) {
            yRatio = _heightStyle.getPixels("y") / scaleHeight;
          } else if (!isNaN(viewBox[3])) {
            yRatio = viewBox[3] / scaleHeight;
          }
        }
        if (!xRatio) {
          xRatio = yRatio;
        }
        if (!yRatio) {
          yRatio = xRatio;
        }
        element.getAttribute("width", true).setValue(scaleWidth);
        element.getAttribute("height", true).setValue(scaleHeight);
        var transformStyle = element.getStyle("transform", true, true);
        transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1 / xRatio, ", ").concat(1 / yRatio, ")"));
      }
      if (!ignoreClear) {
        ctx.clearRect(0, 0, cWidth, cHeight);
      }
      element.render(ctx);
      if (isFirstRender) {
        this.isFirstRender = false;
      }
    }
  }]);
  return Screen2;
}();
Screen.defaultWindow = defaultWindow;
Screen.defaultFetch = defaultFetch;
var defaultFetch$1 = Screen.defaultFetch;
var DefaultDOMParser = typeof DOMParser !== "undefined" ? DOMParser : null;
var Parser = /* @__PURE__ */ function() {
  function Parser2() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$fetch = _ref.fetch, fetch2 = _ref$fetch === void 0 ? defaultFetch$1 : _ref$fetch, _ref$DOMParser = _ref.DOMParser, DOMParser2 = _ref$DOMParser === void 0 ? DefaultDOMParser : _ref$DOMParser;
    _classCallCheck$1(this, Parser2);
    this.fetch = fetch2;
    this.DOMParser = DOMParser2;
  }
  _createClass(Parser2, [{
    key: "parse",
    value: function() {
      var _parse = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(resource) {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!/^</.test(resource)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", this.parseFromString(resource));
              case 2:
                return _context.abrupt("return", this.load(resource));
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function parse(_x) {
        return _parse.apply(this, arguments);
      }
      return parse;
    }()
  }, {
    key: "parseFromString",
    value: function parseFromString(xml) {
      var parser = new this.DOMParser();
      try {
        return this.checkDocument(parser.parseFromString(xml, "image/svg+xml"));
      } catch (err) {
        return this.checkDocument(parser.parseFromString(xml, "text/xml"));
      }
    }
  }, {
    key: "checkDocument",
    value: function checkDocument(document2) {
      var parserError = document2.getElementsByTagName("parsererror")[0];
      if (parserError) {
        throw new Error(parserError.textContent);
      }
      return document2;
    }
  }, {
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(url) {
        var response, xml;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetch(url);
              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.text();
              case 5:
                xml = _context2.sent;
                return _context2.abrupt("return", this.parseFromString(xml));
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function load(_x2) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }]);
  return Parser2;
}();
var Translate = /* @__PURE__ */ function() {
  function Translate2(_, point) {
    _classCallCheck$1(this, Translate2);
    this.type = "translate";
    this.point = null;
    this.point = Point.parse(point);
  }
  _createClass(Translate2, [{
    key: "apply",
    value: function apply3(ctx) {
      var _this$point = this.point, x = _this$point.x, y = _this$point.y;
      ctx.translate(x || 0, y || 0);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var _this$point2 = this.point, x = _this$point2.x, y = _this$point2.y;
      ctx.translate(-1 * x || 0, -1 * y || 0);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var _this$point3 = this.point, x = _this$point3.x, y = _this$point3.y;
      point.applyTransform([1, 0, 0, 1, x || 0, y || 0]);
    }
  }]);
  return Translate2;
}();
var Rotate = /* @__PURE__ */ function() {
  function Rotate2(document2, rotate) {
    var transformOrigin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    _classCallCheck$1(this, Rotate2);
    this.type = "rotate";
    this.angle = null;
    this.cx = 0;
    this.cy = 0;
    var numbers = toNumbers(rotate);
    this.angle = new Property(document2, "angle", numbers[0]);
    this.cx = (numbers[1] || 0) + (transformOrigin[0] || 0);
    this.cy = (numbers[2] || 0) + (transformOrigin[1] || 0);
  }
  _createClass(Rotate2, [{
    key: "apply",
    value: function apply3(ctx) {
      var cx = this.cx, cy = this.cy, angle = this.angle;
      ctx.translate(cx, cy);
      ctx.rotate(angle.getRadians());
      ctx.translate(-cx, -cy);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var cx = this.cx, cy = this.cy, angle = this.angle;
      ctx.translate(cx, cy);
      ctx.rotate(-1 * angle.getRadians());
      ctx.translate(-cx, -cy);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var cx = this.cx, cy = this.cy, angle = this.angle;
      var rad = angle.getRadians();
      point.applyTransform([
        1,
        0,
        0,
        1,
        cx || 0,
        cy || 0
        // this.p.y
      ]);
      point.applyTransform([Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0]);
      point.applyTransform([
        1,
        0,
        0,
        1,
        -cx || 0,
        -cy || 0
        // -this.p.y
      ]);
    }
  }]);
  return Rotate2;
}();
var Scale = /* @__PURE__ */ function() {
  function Scale2(_, scale) {
    _classCallCheck$1(this, Scale2);
    this.type = "scale";
    this.scale = null;
    var scaleSize = Point.parseScale(scale);
    if (scaleSize.x === 0 || scaleSize.y === 0) {
      scaleSize.x = PSEUDO_ZERO;
      scaleSize.y = PSEUDO_ZERO;
    }
    this.scale = scaleSize;
  }
  _createClass(Scale2, [{
    key: "apply",
    value: function apply3(ctx) {
      var _this$scale = this.scale, x = _this$scale.x, y = _this$scale.y;
      ctx.scale(x, y || x);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var _this$scale2 = this.scale, x = _this$scale2.x, y = _this$scale2.y;
      ctx.scale(1 / x, 1 / y || x);
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var _this$scale3 = this.scale, x = _this$scale3.x, y = _this$scale3.y;
      point.applyTransform([x || 0, 0, 0, y || 0, 0, 0]);
    }
  }]);
  return Scale2;
}();
var Matrix = /* @__PURE__ */ function() {
  function Matrix2(_, matrix) {
    _classCallCheck$1(this, Matrix2);
    this.type = "matrix";
    this.matrix = [];
    this.matrix = toNumbers(matrix);
  }
  _createClass(Matrix2, [{
    key: "apply",
    value: function apply3(ctx) {
      var matrix = this.matrix;
      ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var matrix = this.matrix;
      var a = matrix[0];
      var b = matrix[2];
      var c2 = matrix[4];
      var d = matrix[1];
      var e = matrix[3];
      var f = matrix[5];
      var g = 0;
      var h = 0;
      var i = 1;
      var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c2 * (d * h - e * g));
      ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c2 * h - b * i), det * (a * i - c2 * g), det * (b * f - c2 * e), det * (c2 * d - a * f));
    }
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      point.applyTransform(this.matrix);
    }
  }]);
  return Matrix2;
}();
function _createSuper(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var Skew = /* @__PURE__ */ function(_Matrix) {
  _inherits(Skew2, _Matrix);
  var _super = _createSuper(Skew2);
  function Skew2(document2, skew) {
    var _this;
    _classCallCheck$1(this, Skew2);
    _this = _super.call(this, document2, skew);
    _this.type = "skew";
    _this.angle = null;
    _this.angle = new Property(document2, "angle", skew);
    return _this;
  }
  return Skew2;
}(Matrix);
function _createSuper$1(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$1()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SkewX = /* @__PURE__ */ function(_Skew) {
  _inherits(SkewX2, _Skew);
  var _super = _createSuper$1(SkewX2);
  function SkewX2(document2, skew) {
    var _this;
    _classCallCheck$1(this, SkewX2);
    _this = _super.call(this, document2, skew);
    _this.type = "skewX";
    _this.matrix = [1, 0, Math.tan(_this.angle.getRadians()), 1, 0, 0];
    return _this;
  }
  return SkewX2;
}(Skew);
function _createSuper$2(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$2()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SkewY = /* @__PURE__ */ function(_Skew) {
  _inherits(SkewY2, _Skew);
  var _super = _createSuper$2(SkewY2);
  function SkewY2(document2, skew) {
    var _this;
    _classCallCheck$1(this, SkewY2);
    _this = _super.call(this, document2, skew);
    _this.type = "skewY";
    _this.matrix = [1, Math.tan(_this.angle.getRadians()), 0, 1, 0, 0];
    return _this;
  }
  return SkewY2;
}(Skew);
function parseTransforms(transform) {
  return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function parseTransform(transform) {
  var _transform$split = transform.split("("), _transform$split2 = _slicedToArray(_transform$split, 2), type = _transform$split2[0], value = _transform$split2[1];
  return [type.trim(), value.trim().replace(")", "")];
}
var Transform = /* @__PURE__ */ function() {
  function Transform2(document2, transform, transformOrigin) {
    var _this = this;
    _classCallCheck$1(this, Transform2);
    this.document = document2;
    this.transforms = [];
    var data2 = parseTransforms(transform);
    var originCoords = transformOrigin ? toNumbers(transformOrigin) : [];
    data2.forEach(function(transform2) {
      if (transform2 === "none") {
        return;
      }
      var _parseTransform = parseTransform(transform2), _parseTransform2 = _slicedToArray(_parseTransform, 2), type = _parseTransform2[0], value = _parseTransform2[1];
      var TransformType = Transform2.transformTypes[type];
      if (typeof TransformType !== "undefined") {
        _this.transforms.push(new TransformType(_this.document, value, originCoords));
      }
    });
  }
  _createClass(Transform2, [{
    key: "apply",
    value: function apply3(ctx) {
      var transforms = this.transforms;
      var len = transforms.length;
      for (var i = 0; i < len; i++) {
        transforms[i].apply(ctx);
      }
    }
  }, {
    key: "unapply",
    value: function unapply(ctx) {
      var transforms = this.transforms;
      var len = transforms.length;
      for (var i = len - 1; i >= 0; i--) {
        transforms[i].unapply(ctx);
      }
    }
    // TODO: applyToPoint unused ... remove?
  }, {
    key: "applyToPoint",
    value: function applyToPoint(point) {
      var transforms = this.transforms;
      var len = transforms.length;
      for (var i = 0; i < len; i++) {
        transforms[i].applyToPoint(point);
      }
    }
  }], [{
    key: "fromElement",
    value: function fromElement(document2, element) {
      var transformStyle = element.getStyle("transform", false, true);
      var transformOriginStyle = element.getStyle("transform-origin", false, true);
      if (transformStyle.hasValue()) {
        return new Transform2(document2, transformStyle.getString(), transformOriginStyle.getString());
      }
      return null;
    }
  }]);
  return Transform2;
}();
Transform.transformTypes = {
  translate: Translate,
  rotate: Rotate,
  scale: Scale,
  matrix: Matrix,
  skewX: SkewX,
  skewY: SkewY
};
var Element = /* @__PURE__ */ function() {
  function Element2(document2, node2) {
    var _this = this;
    var captureTextNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    _classCallCheck$1(this, Element2);
    this.document = document2;
    this.node = node2;
    this.captureTextNodes = captureTextNodes;
    this.attributes = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.animationFrozen = false;
    this.animationFrozenValue = "";
    this.parent = null;
    this.children = [];
    if (!node2 || node2.nodeType !== 1) {
      return;
    }
    Array.from(node2.attributes).forEach(function(attribute) {
      var nodeName = normalizeAttributeName(attribute.nodeName);
      _this.attributes[nodeName] = new Property(document2, nodeName, attribute.value);
    });
    this.addStylesFromStyleDefinition();
    if (this.getAttribute("style").hasValue()) {
      var styles = this.getAttribute("style").getString().split(";").map(function(_) {
        return _.trim();
      });
      styles.forEach(function(style) {
        if (!style) {
          return;
        }
        var _style$split$map = style.split(":").map(function(_) {
          return _.trim();
        }), _style$split$map2 = _slicedToArray(_style$split$map, 2), name = _style$split$map2[0], value = _style$split$map2[1];
        _this.styles[name] = new Property(document2, name, value);
      });
    }
    var definitions = document2.definitions;
    var id2 = this.getAttribute("id");
    if (id2.hasValue()) {
      if (!definitions[id2.getValue()]) {
        definitions[id2.getValue()] = this;
      }
    }
    Array.from(node2.childNodes).forEach(function(childNode) {
      if (childNode.nodeType === 1) {
        _this.addChild(childNode);
      } else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
        var textNode = document2.createTextNode(childNode);
        if (textNode.getText().length > 0) {
          _this.addChild(textNode);
        }
      }
    });
  }
  _createClass(Element2, [{
    key: "getAttribute",
    value: function getAttribute(name) {
      var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var attr = this.attributes[name];
      if (!attr && createIfNotExists) {
        var _attr = new Property(this.document, name, "");
        this.attributes[name] = _attr;
        return _attr;
      }
      return attr || Property.empty(this.document);
    }
  }, {
    key: "getHrefAttribute",
    value: function getHrefAttribute() {
      for (var key in this.attributes) {
        if (key === "href" || /:href$/.test(key)) {
          return this.attributes[key];
        }
      }
      return Property.empty(this.document);
    }
  }, {
    key: "getStyle",
    value: function getStyle(name) {
      var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var skipAncestors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var style = this.styles[name];
      if (style) {
        return style;
      }
      var attr = this.getAttribute(name);
      if (attr && attr.hasValue()) {
        this.styles[name] = attr;
        return attr;
      }
      if (!skipAncestors) {
        var parent = this.parent;
        if (parent) {
          var parentStyle = parent.getStyle(name);
          if (parentStyle && parentStyle.hasValue()) {
            return parentStyle;
          }
        }
      }
      if (createIfNotExists) {
        var _style = new Property(this.document, name, "");
        this.styles[name] = _style;
        return _style;
      }
      return style || Property.empty(this.document);
    }
  }, {
    key: "render",
    value: function render(ctx) {
      if (this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden") {
        return;
      }
      ctx.save();
      if (this.getStyle("mask").hasValue()) {
        var mask = this.getStyle("mask").getDefinition();
        if (mask) {
          this.applyEffects(ctx);
          mask.apply(ctx, this);
        }
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var filter2 = this.getStyle("filter").getDefinition();
        if (filter2) {
          this.applyEffects(ctx);
          filter2.apply(ctx, this);
        }
      } else {
        this.setContext(ctx);
        this.renderChildren(ctx);
        this.clearContext(ctx);
      }
      ctx.restore();
    }
  }, {
    key: "setContext",
    value: function setContext(_) {
    }
  }, {
    key: "applyEffects",
    value: function applyEffects(ctx) {
      var transform = Transform.fromElement(this.document, this);
      if (transform) {
        transform.apply(ctx);
      }
      var clipPathStyleProp = this.getStyle("clip-path", false, true);
      if (clipPathStyleProp.hasValue()) {
        var clip = clipPathStyleProp.getDefinition();
        if (clip) {
          clip.apply(ctx);
        }
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(_) {
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.children.forEach(function(child) {
        child.render(ctx);
      });
    }
  }, {
    key: "addChild",
    value: function addChild(childNode) {
      var child = childNode instanceof Element2 ? childNode : this.document.createElement(childNode);
      child.parent = this;
      if (!Element2.ignoreChildTypes.includes(child.type)) {
        this.children.push(child);
      }
    }
  }, {
    key: "matchesSelector",
    value: function matchesSelector(selector) {
      var node2 = this.node;
      if (typeof node2.matches === "function") {
        return node2.matches(selector);
      }
      var styleClasses = node2.getAttribute("class");
      if (!styleClasses || styleClasses === "") {
        return false;
      }
      return styleClasses.split(" ").some(function(styleClass) {
        if (".".concat(styleClass) === selector) {
          return true;
        }
      });
    }
  }, {
    key: "addStylesFromStyleDefinition",
    value: function addStylesFromStyleDefinition() {
      var _this$document = this.document, styles = _this$document.styles, stylesSpecificity = _this$document.stylesSpecificity;
      for (var selector in styles) {
        if (selector[0] !== "@" && this.matchesSelector(selector)) {
          var style = styles[selector];
          var specificity = stylesSpecificity[selector];
          if (style) {
            for (var name in style) {
              var existingSpecificity = this.stylesSpecificity[name];
              if (typeof existingSpecificity === "undefined") {
                existingSpecificity = "000";
              }
              if (specificity >= existingSpecificity) {
                this.styles[name] = style[name];
                this.stylesSpecificity[name] = specificity;
              }
            }
          }
        }
      }
    }
  }, {
    key: "removeStyles",
    value: function removeStyles(element, ignoreStyles) {
      var toRestore = ignoreStyles.reduce(function(toRestore2, name) {
        var styleProp = element.getStyle(name);
        if (!styleProp.hasValue()) {
          return toRestore2;
        }
        var value = styleProp.getString();
        styleProp.setValue("");
        return [].concat(_toConsumableArray(toRestore2), [[name, value]]);
      }, []);
      return toRestore;
    }
  }, {
    key: "restoreStyles",
    value: function restoreStyles(element, styles) {
      styles.forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], value = _ref2[1];
        element.getStyle(name, true).setValue(value);
      });
    }
  }]);
  return Element2;
}();
Element.ignoreChildTypes = ["title"];
function _createSuper$3(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$3()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var UnknownElement = /* @__PURE__ */ function(_Element) {
  _inherits(UnknownElement2, _Element);
  var _super = _createSuper$3(UnknownElement2);
  function UnknownElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, UnknownElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    return _this;
  }
  return UnknownElement2;
}(Element);
function wrapFontFamily(fontFamily) {
  var trimmed = fontFamily.trim();
  return /^('|")/.test(trimmed) ? trimmed : '"'.concat(trimmed, '"');
}
function prepareFontFamily(fontFamily) {
  return typeof process === "undefined" ? fontFamily : fontFamily.trim().split(",").map(wrapFontFamily).join(",");
}
function prepareFontStyle(fontStyle) {
  if (!fontStyle) {
    return "";
  }
  var targetFontStyle = fontStyle.trim().toLowerCase();
  switch (targetFontStyle) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return targetFontStyle;
    default:
      if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) {
        return targetFontStyle;
      }
      return "";
  }
}
function prepareFontWeight(fontWeight) {
  if (!fontWeight) {
    return "";
  }
  var targetFontWeight = fontWeight.trim().toLowerCase();
  switch (targetFontWeight) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return targetFontWeight;
    default:
      if (/^[\d.]+$/.test(targetFontWeight)) {
        return targetFontWeight;
      }
      return "";
  }
}
var Font = /* @__PURE__ */ function() {
  function Font2(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
    _classCallCheck$1(this, Font2);
    var inheritFont = inherit ? typeof inherit === "string" ? Font2.parse(inherit) : inherit : {};
    this.fontFamily = fontFamily || inheritFont.fontFamily;
    this.fontSize = fontSize || inheritFont.fontSize;
    this.fontStyle = fontStyle || inheritFont.fontStyle;
    this.fontWeight = fontWeight || inheritFont.fontWeight;
    this.fontVariant = fontVariant || inheritFont.fontVariant;
  }
  _createClass(Font2, [{
    key: "toString",
    value: function toString4() {
      return [
        prepareFontStyle(this.fontStyle),
        this.fontVariant,
        prepareFontWeight(this.fontWeight),
        this.fontSize,
        // Wrap fontFamily only on nodejs and only for canvas.ctx
        prepareFontFamily(this.fontFamily)
      ].join(" ").trim();
    }
  }], [{
    key: "parse",
    value: function parse() {
      var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var inherit = arguments.length > 1 ? arguments[1] : void 0;
      var fontStyle = "";
      var fontVariant = "";
      var fontWeight = "";
      var fontSize = "";
      var fontFamily = "";
      var parts = compressSpaces(font).trim().split(" ");
      var set2 = {
        fontSize: false,
        fontStyle: false,
        fontWeight: false,
        fontVariant: false
      };
      parts.forEach(function(part) {
        switch (true) {
          case (!set2.fontStyle && Font2.styles.includes(part)):
            if (part !== "inherit") {
              fontStyle = part;
            }
            set2.fontStyle = true;
            break;
          case (!set2.fontVariant && Font2.variants.includes(part)):
            if (part !== "inherit") {
              fontVariant = part;
            }
            set2.fontStyle = true;
            set2.fontVariant = true;
            break;
          case (!set2.fontWeight && Font2.weights.includes(part)):
            if (part !== "inherit") {
              fontWeight = part;
            }
            set2.fontStyle = true;
            set2.fontVariant = true;
            set2.fontWeight = true;
            break;
          case !set2.fontSize:
            if (part !== "inherit") {
              var _part$split = part.split("/");
              var _part$split2 = _slicedToArray(_part$split, 1);
              fontSize = _part$split2[0];
            }
            set2.fontStyle = true;
            set2.fontVariant = true;
            set2.fontWeight = true;
            set2.fontSize = true;
            break;
          default:
            if (part !== "inherit") {
              fontFamily += part;
            }
        }
      });
      return new Font2(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
    }
  }]);
  return Font2;
}();
Font.styles = "normal|italic|oblique|inherit";
Font.variants = "normal|small-caps|inherit";
Font.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
var BoundingBox = /* @__PURE__ */ function() {
  function BoundingBox2() {
    var x1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN;
    var y1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN;
    var x2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN;
    var y2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    _classCallCheck$1(this, BoundingBox2);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.addPoint(x1, y1);
    this.addPoint(x2, y2);
  }
  _createClass(BoundingBox2, [{
    key: "addPoint",
    value: function addPoint(x, y) {
      if (typeof x !== "undefined") {
        if (isNaN(this.x1) || isNaN(this.x2)) {
          this.x1 = x;
          this.x2 = x;
        }
        if (x < this.x1) {
          this.x1 = x;
        }
        if (x > this.x2) {
          this.x2 = x;
        }
      }
      if (typeof y !== "undefined") {
        if (isNaN(this.y1) || isNaN(this.y2)) {
          this.y1 = y;
          this.y2 = y;
        }
        if (y < this.y1) {
          this.y1 = y;
        }
        if (y > this.y2) {
          this.y2 = y;
        }
      }
    }
  }, {
    key: "addX",
    value: function addX(x) {
      this.addPoint(x, null);
    }
  }, {
    key: "addY",
    value: function addY(y) {
      this.addPoint(null, y);
    }
  }, {
    key: "addBoundingBox",
    value: function addBoundingBox(boundingBox) {
      if (!boundingBox) {
        return;
      }
      var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2;
      this.addPoint(x1, y1);
      this.addPoint(x2, y2);
    }
  }, {
    key: "sumCubic",
    value: function sumCubic(t, p0, p1, p2, p3) {
      return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
    }
  }, {
    key: "bezierCurveAdd",
    value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
      var b = 6 * p0 - 12 * p1 + 6 * p2;
      var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
      var c2 = 3 * p1 - 3 * p0;
      if (a === 0) {
        if (b === 0) {
          return;
        }
        var t = -c2 / b;
        if (0 < t && t < 1) {
          if (forX) {
            this.addX(this.sumCubic(t, p0, p1, p2, p3));
          } else {
            this.addY(this.sumCubic(t, p0, p1, p2, p3));
          }
        }
        return;
      }
      var b2ac = Math.pow(b, 2) - 4 * c2 * a;
      if (b2ac < 0) {
        return;
      }
      var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
      if (0 < t1 && t1 < 1) {
        if (forX) {
          this.addX(this.sumCubic(t1, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t1, p0, p1, p2, p3));
        }
      }
      var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
      if (0 < t2 && t2 < 1) {
        if (forX) {
          this.addX(this.sumCubic(t2, p0, p1, p2, p3));
        } else {
          this.addY(this.sumCubic(t2, p0, p1, p2, p3));
        }
      }
    }
    // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  }, {
    key: "addBezierCurve",
    value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
      this.addPoint(p0x, p0y);
      this.addPoint(p3x, p3y);
      this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
      this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
    }
  }, {
    key: "addQuadraticCurve",
    value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
      var cp1x = p0x + 2 / 3 * (p1x - p0x);
      var cp1y = p0y + 2 / 3 * (p1y - p0y);
      var cp2x = cp1x + 1 / 3 * (p2x - p0x);
      var cp2y = cp1y + 1 / 3 * (p2y - p0y);
      this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
    }
  }, {
    key: "isPointInBox",
    value: function isPointInBox(x, y) {
      var x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2;
      return x1 <= x && x <= x2 && y1 <= y && y <= y2;
    }
  }, {
    key: "x",
    get: function get2() {
      return this.x1;
    }
  }, {
    key: "y",
    get: function get2() {
      return this.y1;
    }
  }, {
    key: "width",
    get: function get2() {
      return this.x2 - this.x1;
    }
  }, {
    key: "height",
    get: function get2() {
      return this.y2 - this.y1;
    }
  }]);
  return BoundingBox2;
}();
function _createSuper$4(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$4()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$4() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var RenderedElement = /* @__PURE__ */ function(_Element) {
  _inherits(RenderedElement2, _Element);
  var _super = _createSuper$4(RenderedElement2);
  function RenderedElement2() {
    var _this;
    _classCallCheck$1(this, RenderedElement2);
    _this = _super.apply(this, arguments);
    _this.modifiedEmSizeStack = false;
    return _this;
  }
  _createClass(RenderedElement2, [{
    key: "calculateOpacity",
    value: function calculateOpacity() {
      var opacity = 1;
      var element = this;
      while (element) {
        var opacityStyle = element.getStyle("opacity", false, true);
        if (opacityStyle.hasValue()) {
          opacity *= opacityStyle.getNumber();
        }
        element = element.parent;
      }
      return opacity;
    }
  }, {
    key: "setContext",
    value: function setContext(ctx) {
      var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!fromMeasure) {
        var fillStyleProp = this.getStyle("fill");
        var fillOpacityStyleProp = this.getStyle("fill-opacity");
        var strokeStyleProp = this.getStyle("stroke");
        var strokeOpacityProp = this.getStyle("stroke-opacity");
        if (fillStyleProp.isUrlDefinition()) {
          var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
          if (fillStyle) {
            ctx.fillStyle = fillStyle;
          }
        } else if (fillStyleProp.hasValue()) {
          if (fillStyleProp.getString() === "currentColor") {
            fillStyleProp.setValue(this.getStyle("color").getColor());
          }
          var _fillStyle = fillStyleProp.getColor();
          if (_fillStyle !== "inherit") {
            ctx.fillStyle = _fillStyle === "none" ? "rgba(0,0,0,0)" : _fillStyle;
          }
        }
        if (fillOpacityStyleProp.hasValue()) {
          var _fillStyle2 = new Property(this.document, "fill", ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
          ctx.fillStyle = _fillStyle2;
        }
        if (strokeStyleProp.isUrlDefinition()) {
          var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
          if (strokeStyle) {
            ctx.strokeStyle = strokeStyle;
          }
        } else if (strokeStyleProp.hasValue()) {
          if (strokeStyleProp.getString() === "currentColor") {
            strokeStyleProp.setValue(this.getStyle("color").getColor());
          }
          var _strokeStyle = strokeStyleProp.getString();
          if (_strokeStyle !== "inherit") {
            ctx.strokeStyle = _strokeStyle === "none" ? "rgba(0,0,0,0)" : _strokeStyle;
          }
        }
        if (strokeOpacityProp.hasValue()) {
          var _strokeStyle2 = new Property(this.document, "stroke", ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
          ctx.strokeStyle = _strokeStyle2;
        }
        var strokeWidthStyleProp = this.getStyle("stroke-width");
        if (strokeWidthStyleProp.hasValue()) {
          var newLineWidth = strokeWidthStyleProp.getPixels();
          ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO : newLineWidth;
        }
        var strokeLinecapStyleProp = this.getStyle("stroke-linecap");
        var strokeLinejoinStyleProp = this.getStyle("stroke-linejoin");
        var strokeMiterlimitProp = this.getStyle("stroke-miterlimit");
        var pointOrderStyleProp = this.getStyle("paint-order");
        var strokeDasharrayStyleProp = this.getStyle("stroke-dasharray");
        var strokeDashoffsetProp = this.getStyle("stroke-dashoffset");
        if (strokeLinecapStyleProp.hasValue()) {
          ctx.lineCap = strokeLinecapStyleProp.getString();
        }
        if (strokeLinejoinStyleProp.hasValue()) {
          ctx.lineJoin = strokeLinejoinStyleProp.getString();
        }
        if (strokeMiterlimitProp.hasValue()) {
          ctx.miterLimit = strokeMiterlimitProp.getNumber();
        }
        if (pointOrderStyleProp.hasValue()) {
          ctx.paintOrder = pointOrderStyleProp.getValue();
        }
        if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== "none") {
          var gaps = toNumbers(strokeDasharrayStyleProp.getString());
          if (typeof ctx.setLineDash !== "undefined") {
            ctx.setLineDash(gaps);
          } else if (typeof ctx.webkitLineDash !== "undefined") {
            ctx.webkitLineDash = gaps;
          } else if (typeof ctx.mozDash !== "undefined" && !(gaps.length === 1 && gaps[0] === 0)) {
            ctx.mozDash = gaps;
          }
          var offset = strokeDashoffsetProp.getPixels();
          if (typeof ctx.lineDashOffset !== "undefined") {
            ctx.lineDashOffset = offset;
          } else if (typeof ctx.webkitLineDashOffset !== "undefined") {
            ctx.webkitLineDashOffset = offset;
          } else if (typeof ctx.mozDashOffset !== "undefined") {
            ctx.mozDashOffset = offset;
          }
        }
      }
      this.modifiedEmSizeStack = false;
      if (typeof ctx.font !== "undefined") {
        var fontStyleProp = this.getStyle("font");
        var fontStyleStyleProp = this.getStyle("font-style");
        var fontVariantStyleProp = this.getStyle("font-variant");
        var fontWeightStyleProp = this.getStyle("font-weight");
        var fontSizeStyleProp = this.getStyle("font-size");
        var fontFamilyStyleProp = this.getStyle("font-family");
        var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : "", fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
        fontStyleStyleProp.setValue(font.fontStyle);
        fontVariantStyleProp.setValue(font.fontVariant);
        fontWeightStyleProp.setValue(font.fontWeight);
        fontSizeStyleProp.setValue(font.fontSize);
        fontFamilyStyleProp.setValue(font.fontFamily);
        ctx.font = font.toString();
        if (fontSizeStyleProp.isPixels()) {
          this.document.emSize = fontSizeStyleProp.getPixels();
          this.modifiedEmSizeStack = true;
        }
      }
      if (!fromMeasure) {
        this.applyEffects(ctx);
        ctx.globalAlpha = this.calculateOpacity();
      }
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      _get(_getPrototypeOf(RenderedElement2.prototype), "clearContext", this).call(this, ctx);
      if (this.modifiedEmSizeStack) {
        this.document.popEmSize();
      }
    }
  }]);
  return RenderedElement2;
}(Element);
function _createSuper$5(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$5()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$5() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TextElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(TextElement2, _RenderedElement);
  var _super = _createSuper$5(TextElement2);
  function TextElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, TextElement2);
    _this = _super.call(this, document2, node2, (this instanceof TextElement2 ? this.constructor : void 0) === TextElement2 ? true : captureTextNodes);
    _this.type = "text";
    _this.x = 0;
    _this.y = 0;
    _this.measureCache = -1;
    return _this;
  }
  _createClass(TextElement2, [{
    key: "setContext",
    value: function setContext(ctx) {
      var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      _get(_getPrototypeOf(TextElement2.prototype), "setContext", this).call(this, ctx, fromMeasure);
      var textBaseline = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
      if (textBaseline) {
        ctx.textBaseline = textBaseline;
      }
    }
  }, {
    key: "initializeCoordinates",
    value: function initializeCoordinates(ctx) {
      this.x = this.getAttribute("x").getPixels("x");
      this.y = this.getAttribute("y").getPixels("y");
      var dxAttr = this.getAttribute("dx");
      var dyAttr = this.getAttribute("dy");
      if (dxAttr.hasValue()) {
        this.x += dxAttr.getPixels("x");
      }
      if (dyAttr.hasValue()) {
        this.y += dyAttr.getPixels("y");
      }
      this.x += this.getAnchorDelta(ctx, this, 0);
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var _this2 = this;
      if (this.type !== "text") {
        return this.getTElementBoundingBox(ctx);
      }
      this.initializeCoordinates(ctx);
      var boundingBox = null;
      this.children.forEach(function(_, i) {
        var childBoundingBox = _this2.getChildBoundingBox(ctx, _this2, _this2, i);
        if (!boundingBox) {
          boundingBox = childBoundingBox;
        } else {
          boundingBox.addBoundingBox(childBoundingBox);
        }
      });
      return boundingBox;
    }
  }, {
    key: "getFontSize",
    value: function getFontSize() {
      var document2 = this.document, parent = this.parent;
      var inheritFontSize = Font.parse(document2.ctx.font).fontSize;
      var fontSize = parent.getStyle("font-size").getNumber(inheritFontSize);
      return fontSize;
    }
  }, {
    key: "getTElementBoundingBox",
    value: function getTElementBoundingBox(ctx) {
      var fontSize = this.getFontSize();
      return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
    }
  }, {
    key: "getGlyph",
    value: function getGlyph(font, text, i) {
      var char = text[i];
      var glyph = null;
      if (font.isArabic) {
        var len = text.length;
        var prevChar = text[i - 1];
        var nextChar = text[i + 1];
        var arabicForm = "isolated";
        if ((i === 0 || prevChar === " ") && i < len - 2 && nextChar !== " ") {
          arabicForm = "terminal";
        }
        if (i > 0 && prevChar !== " " && i < len - 2 && nextChar !== " ") {
          arabicForm = "medial";
        }
        if (i > 0 && prevChar !== " " && (i === len - 1 || nextChar === " ")) {
          arabicForm = "initial";
        }
        if (typeof font.glyphs[char] !== "undefined") {
          glyph = font.glyphs[char][arabicForm];
          if (!glyph && font.glyphs[char].type === "glyph") {
            glyph = font.glyphs[char];
          }
        }
      } else {
        glyph = font.glyphs[char];
      }
      if (!glyph) {
        glyph = font.missingGlyph;
      }
      return glyph;
    }
  }, {
    key: "getText",
    value: function getText() {
      return "";
    }
  }, {
    key: "getTextFromNode",
    value: function getTextFromNode(node2) {
      var textNode = node2 || this.node;
      var childNodes = Array.from(textNode.parentNode.childNodes);
      var index2 = childNodes.indexOf(textNode);
      var lastIndex = childNodes.length - 1;
      var text = compressSpaces(textNode.value || textNode.text || textNode.textContent || "");
      if (index2 === 0) {
        text = trimLeft(text);
      }
      if (index2 === lastIndex) {
        text = trimRight(text);
      }
      return text;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var _this3 = this;
      if (this.type !== "text") {
        this.renderTElementChildren(ctx);
        return;
      }
      this.initializeCoordinates(ctx);
      this.children.forEach(function(_, i) {
        _this3.renderChild(ctx, _this3, _this3, i);
      });
      var mouse = this.document.screen.mouse;
      if (mouse.isWorking()) {
        mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
      }
    }
  }, {
    key: "renderTElementChildren",
    value: function renderTElementChildren(ctx) {
      var document2 = this.document, parent = this.parent;
      var renderText = this.getText();
      var customFont = parent.getStyle("font-family").getDefinition();
      if (customFont) {
        var unitsPerEm = customFont.fontFace.unitsPerEm;
        var ctxFont = Font.parse(document2.ctx.font);
        var fontSize = parent.getStyle("font-size").getNumber(ctxFont.fontSize);
        var fontStyle = parent.getStyle("font-style").getString(ctxFont.fontStyle);
        var scale = fontSize / unitsPerEm;
        var text = customFont.isRTL ? renderText.split("").reverse().join("") : renderText;
        var dx = toNumbers(parent.getAttribute("dx").getString());
        var len = text.length;
        for (var i = 0; i < len; i++) {
          var glyph = this.getGlyph(customFont, text, i);
          ctx.translate(this.x, this.y);
          ctx.scale(scale, -scale);
          var lw = ctx.lineWidth;
          ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
          if (fontStyle === "italic") {
            ctx.transform(1, 0, 0.4, 1, 0, 0);
          }
          glyph.render(ctx);
          if (fontStyle === "italic") {
            ctx.transform(1, 0, -0.4, 1, 0, 0);
          }
          ctx.lineWidth = lw;
          ctx.scale(1 / scale, -1 / scale);
          ctx.translate(-this.x, -this.y);
          this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
          if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) {
            this.x += dx[i];
          }
        }
        return;
      }
      var x = this.x, y = this.y;
      if (ctx.paintOrder === "stroke") {
        if (ctx.strokeStyle) {
          ctx.strokeText(renderText, x, y);
        }
        if (ctx.fillStyle) {
          ctx.fillText(renderText, x, y);
        }
      } else {
        if (ctx.fillStyle) {
          ctx.fillText(renderText, x, y);
        }
        if (ctx.strokeStyle) {
          ctx.strokeText(renderText, x, y);
        }
      }
    }
  }, {
    key: "getAnchorDelta",
    value: function getAnchorDelta(ctx, parent, startI) {
      var textAnchor = this.getStyle("text-anchor").getString("start");
      if (textAnchor !== "start") {
        var children = parent.children;
        var len = children.length;
        var child = null;
        var width = 0;
        for (var i = startI; i < len; i++) {
          child = children[i];
          if (i > startI && child.getAttribute("x").hasValue() || child.getAttribute("text-anchor").hasValue()) {
            break;
          }
          width += child.measureTextRecursive(ctx);
        }
        return -1 * (textAnchor === "end" ? width : width / 2);
      }
      return 0;
    }
  }, {
    key: "adjustChildCoordinates",
    value: function adjustChildCoordinates(ctx, textParent, parent, i) {
      var child = parent.children[i];
      if (typeof child.measureText !== "function") {
        return child;
      }
      ctx.save();
      child.setContext(ctx, true);
      var xAttr = child.getAttribute("x");
      var yAttr = child.getAttribute("y");
      var dxAttr = child.getAttribute("dx");
      var dyAttr = child.getAttribute("dy");
      var textAnchor = child.getAttribute("text-anchor").getString("start");
      if (i === 0 && child.type !== "textNode") {
        if (!xAttr.hasValue()) {
          xAttr.setValue(textParent.getAttribute("x").getValue("0"));
        }
        if (!yAttr.hasValue()) {
          yAttr.setValue(textParent.getAttribute("y").getValue("0"));
        }
        if (!dxAttr.hasValue()) {
          dxAttr.setValue(textParent.getAttribute("dx").getValue("0"));
        }
        if (!dyAttr.hasValue()) {
          dyAttr.setValue(textParent.getAttribute("dy").getValue("0"));
        }
      }
      if (xAttr.hasValue()) {
        child.x = xAttr.getPixels("x") + textParent.getAnchorDelta(ctx, parent, i);
        if (textAnchor !== "start") {
          var width = child.measureTextRecursive(ctx);
          child.x += -1 * (textAnchor === "end" ? width : width / 2);
        }
        if (dxAttr.hasValue()) {
          child.x += dxAttr.getPixels("x");
        }
      } else {
        if (textAnchor !== "start") {
          var _width = child.measureTextRecursive(ctx);
          textParent.x += -1 * (textAnchor === "end" ? _width : _width / 2);
        }
        if (dxAttr.hasValue()) {
          textParent.x += dxAttr.getPixels("x");
        }
        child.x = textParent.x;
      }
      textParent.x = child.x + child.measureText(ctx);
      if (yAttr.hasValue()) {
        child.y = yAttr.getPixels("y");
        if (dyAttr.hasValue()) {
          child.y += dyAttr.getPixels("y");
        }
      } else {
        if (dyAttr.hasValue()) {
          textParent.y += dyAttr.getPixels("y");
        }
        child.y = textParent.y;
      }
      textParent.y = child.y;
      child.clearContext(ctx);
      ctx.restore();
      return child;
    }
  }, {
    key: "getChildBoundingBox",
    value: function getChildBoundingBox(ctx, textParent, parent, i) {
      var child = this.adjustChildCoordinates(ctx, textParent, parent, i);
      var boundingBox = child.getBoundingBox(ctx);
      if (!boundingBox) {
        return null;
      }
      child.children.forEach(function(_, i2) {
        var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i2);
        boundingBox.addBoundingBox(childBoundingBox);
      });
      return boundingBox;
    }
  }, {
    key: "renderChild",
    value: function renderChild(ctx, textParent, parent, i) {
      var child = this.adjustChildCoordinates(ctx, textParent, parent, i);
      child.render(ctx);
      child.children.forEach(function(_, i2) {
        textParent.renderChild(ctx, textParent, child, i2);
      });
    }
  }, {
    key: "measureTextRecursive",
    value: function measureTextRecursive(ctx) {
      var width = this.children.reduce(function(width2, child) {
        return width2 + child.measureTextRecursive(ctx);
      }, this.measureText(ctx));
      return width;
    }
  }, {
    key: "measureText",
    value: function measureText(ctx) {
      var measureCache = this.measureCache;
      if (~measureCache) {
        return measureCache;
      }
      var renderText = this.getText();
      var measure = this.measureTargetText(ctx, renderText);
      this.measureCache = measure;
      return measure;
    }
  }, {
    key: "measureTargetText",
    value: function measureTargetText(ctx, targetText) {
      if (!targetText.length) {
        return 0;
      }
      var parent = this.parent;
      var customFont = parent.getStyle("font-family").getDefinition();
      if (customFont) {
        var fontSize = this.getFontSize();
        var text = customFont.isRTL ? targetText.split("").reverse().join("") : targetText;
        var dx = toNumbers(parent.getAttribute("dx").getString());
        var len = text.length;
        var _measure = 0;
        for (var i = 0; i < len; i++) {
          var glyph = this.getGlyph(customFont, text, i);
          _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
          if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) {
            _measure += dx[i];
          }
        }
        return _measure;
      }
      if (!ctx.measureText) {
        return targetText.length * 10;
      }
      ctx.save();
      this.setContext(ctx, true);
      var _ctx$measureText = ctx.measureText(targetText), measure = _ctx$measureText.width;
      this.clearContext(ctx);
      ctx.restore();
      return measure;
    }
  }]);
  return TextElement2;
}(RenderedElement);
function _createSuper$6(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$6()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$6() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TSpanElement = /* @__PURE__ */ function(_TextElement) {
  _inherits(TSpanElement2, _TextElement);
  var _super = _createSuper$6(TSpanElement2);
  function TSpanElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, TSpanElement2);
    _this = _super.call(this, document2, node2, (this instanceof TSpanElement2 ? this.constructor : void 0) === TSpanElement2 ? true : captureTextNodes);
    _this.type = "tspan";
    _this.text = _this.children.length > 0 ? "" : _this.getTextFromNode();
    return _this;
  }
  _createClass(TSpanElement2, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }]);
  return TSpanElement2;
}(TextElement);
function _createSuper$7(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$7()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$7() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TextNode = /* @__PURE__ */ function(_TSpanElement) {
  _inherits(TextNode2, _TSpanElement);
  var _super = _createSuper$7(TextNode2);
  function TextNode2() {
    var _this;
    _classCallCheck$1(this, TextNode2);
    _this = _super.apply(this, arguments);
    _this.type = "textNode";
    return _this;
  }
  return TextNode2;
}(TSpanElement);
function preparePath(path2) {
  var d = path2.replace(/,/gm, " ").replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2").replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2").replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2").replace(/([0-9])([+\-])/gm, "$1 $2").replace(/(\.[0-9]*)(\.)/gm, "$1 $2").replace(/(\.[0-9]*)(\.)/gm, "$1 $2").replace(/([Aa](?:\s+(?:[0-9]*\.)?[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $2 $3 ");
  return compressSpaces(d).trim();
}
var PathParser = /* @__PURE__ */ function() {
  function PathParser2(path2) {
    _classCallCheck$1(this, PathParser2);
    this.control = null;
    this.start = null;
    this.current = null;
    this.command = "";
    this.tokens = [];
    this.i = -1;
    this.previousCommand = "";
    this.points = [];
    this.angles = [];
    this.tokens = preparePath(path2).split(" ");
  }
  _createClass(PathParser2, [{
    key: "reset",
    value: function reset() {
      this.i = -1;
      this.command = "";
      this.previousCommand = "";
      this.start = new Point(0, 0);
      this.control = new Point(0, 0);
      this.current = new Point(0, 0);
      this.points = [];
      this.angles = [];
    }
  }, {
    key: "isEnd",
    value: function isEnd() {
      var i = this.i, tokens = this.tokens;
      return i >= tokens.length - 1;
    }
  }, {
    key: "isCommandOrEnd",
    value: function isCommandOrEnd() {
      if (this.isEnd()) {
        return true;
      }
      var i = this.i, tokens = this.tokens;
      return /^[A-Za-z]$/.test(tokens[i + 1]);
    }
  }, {
    key: "isRelativeCommand",
    value: function isRelativeCommand() {
      switch (this.command) {
        case "m":
        case "l":
        case "h":
        case "v":
        case "c":
        case "s":
        case "q":
        case "t":
        case "a":
        case "z":
          return true;
        default:
          return false;
      }
    }
  }, {
    key: "getToken",
    value: function getToken() {
      this.i++;
      return this.tokens[this.i];
    }
  }, {
    key: "getScalar",
    value: function getScalar() {
      return parseFloat(this.getToken());
    }
  }, {
    key: "nextCommand",
    value: function nextCommand() {
      this.previousCommand = this.command;
      this.command = this.getToken();
    }
  }, {
    key: "getPoint",
    value: function getPoint() {
      var point = new Point(this.getScalar(), this.getScalar());
      return this.makeAbsolute(point);
    }
  }, {
    key: "getAsControlPoint",
    value: function getAsControlPoint() {
      var point = this.getPoint();
      this.control = point;
      return point;
    }
  }, {
    key: "getAsCurrentPoint",
    value: function getAsCurrentPoint() {
      var point = this.getPoint();
      this.current = point;
      return point;
    }
  }, {
    key: "getReflectedControlPoint",
    value: function getReflectedControlPoint() {
      var previousCommand = this.previousCommand.toLowerCase();
      if (previousCommand !== "c" && previousCommand !== "s" && previousCommand !== "q" && previousCommand !== "t") {
        return this.current;
      }
      var _this$current = this.current, cx = _this$current.x, cy = _this$current.y, _this$control = this.control, ox = _this$control.x, oy = _this$control.y;
      var point = new Point(2 * cx - ox, 2 * cy - oy);
      return point;
    }
  }, {
    key: "makeAbsolute",
    value: function makeAbsolute(point) {
      if (this.isRelativeCommand()) {
        var _this$current2 = this.current, x = _this$current2.x, y = _this$current2.y;
        point.x += x;
        point.y += y;
      }
      return point;
    }
  }, {
    key: "addMarker",
    value: function addMarker(point, from3, priorTo) {
      var points = this.points, angles = this.angles;
      if (priorTo && angles.length > 0 && !angles[angles.length - 1]) {
        angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
      }
      this.addMarkerAngle(point, from3 ? from3.angleTo(point) : null);
    }
  }, {
    key: "addMarkerAngle",
    value: function addMarkerAngle(point, angle) {
      this.points.push(point);
      this.angles.push(angle);
    }
  }, {
    key: "getMarkerPoints",
    value: function getMarkerPoints() {
      return this.points;
    }
  }, {
    key: "getMarkerAngles",
    value: function getMarkerAngles() {
      var angles = this.angles;
      var len = angles.length;
      for (var i = 0; i < len; i++) {
        if (!angles[i]) {
          for (var j = i + 1; j < len; j++) {
            if (angles[j]) {
              angles[i] = angles[j];
              break;
            }
          }
        }
      }
      return angles;
    }
  }]);
  return PathParser2;
}();
function _createSuper$8(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$8()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$8() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var PathElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(PathElement2, _RenderedElement);
  var _super = _createSuper$8(PathElement2);
  function PathElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, PathElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "path";
    _this.pathParser = null;
    _this.pathParser = new PathParser(_this.getAttribute("d").getString());
    return _this;
  }
  _createClass(PathElement2, [{
    key: "path",
    value: function path2(ctx) {
      var pathParser = this.pathParser;
      var boundingBox = new BoundingBox();
      pathParser.reset();
      if (ctx) {
        ctx.beginPath();
      }
      while (!pathParser.isEnd()) {
        pathParser.nextCommand();
        switch (pathParser.command) {
          case "M":
          case "m":
            this.pathM(ctx, boundingBox);
            break;
          case "L":
          case "l":
            this.pathL(ctx, boundingBox);
            break;
          case "H":
          case "h":
            this.pathH(ctx, boundingBox);
            break;
          case "V":
          case "v":
            this.pathV(ctx, boundingBox);
            break;
          case "C":
          case "c":
            this.pathC(ctx, boundingBox);
            break;
          case "S":
          case "s":
            this.pathS(ctx, boundingBox);
            break;
          case "Q":
          case "q":
            this.pathQ(ctx, boundingBox);
            break;
          case "T":
          case "t":
            this.pathT(ctx, boundingBox);
            break;
          case "A":
          case "a":
            this.pathA(ctx, boundingBox);
            break;
          case "Z":
          case "z":
            this.pathZ(ctx, boundingBox);
            break;
        }
      }
      return boundingBox;
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(_) {
      return this.path();
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var pathParser = this.pathParser;
      var points = pathParser.getMarkerPoints();
      var angles = pathParser.getMarkerAngles();
      var markers = points.map(function(point, i) {
        return [point, angles[i]];
      });
      return markers;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.path(ctx);
      this.document.screen.mouse.checkPath(this, ctx);
      var fillRuleStyleProp = this.getStyle("fill-rule");
      if (ctx.fillStyle !== "") {
        if (fillRuleStyleProp.getString("inherit") !== "inherit") {
          ctx.fill(fillRuleStyleProp.getString());
        } else {
          ctx.fill();
        }
      }
      if (ctx.strokeStyle !== "") {
        ctx.stroke();
      }
      var markers = this.getMarkers();
      if (markers) {
        var markersLastIndex = markers.length - 1;
        var markerStartStyleProp = this.getStyle("marker-start");
        var markerMidStyleProp = this.getStyle("marker-mid");
        var markerEndStyleProp = this.getStyle("marker-end");
        if (markerStartStyleProp.isUrlDefinition()) {
          var marker = markerStartStyleProp.getDefinition();
          var _markers$ = _slicedToArray(markers[0], 2), point = _markers$[0], angle = _markers$[1];
          marker.render(ctx, point, angle);
        }
        if (markerMidStyleProp.isUrlDefinition()) {
          var _marker = markerMidStyleProp.getDefinition();
          for (var i = 1; i < markersLastIndex; i++) {
            var _markers$i = _slicedToArray(markers[i], 2), _point = _markers$i[0], _angle = _markers$i[1];
            _marker.render(ctx, _point, _angle);
          }
        }
        if (markerEndStyleProp.isUrlDefinition()) {
          var _marker2 = markerEndStyleProp.getDefinition();
          var _markers$markersLastI = _slicedToArray(markers[markersLastIndex], 2), _point2 = _markers$markersLastI[0], _angle2 = _markers$markersLastI[1];
          _marker2.render(ctx, _point2, _angle2);
        }
      }
    }
  }, {
    key: "pathM",
    value: function pathM(ctx, boundingBox) {
      var pathParser = this.pathParser;
      var point = pathParser.getAsCurrentPoint();
      var x = point.x, y = point.y;
      pathParser.addMarker(point);
      boundingBox.addPoint(x, y);
      if (ctx) {
        ctx.moveTo(x, y);
      }
      pathParser.start = pathParser.current;
      while (!pathParser.isCommandOrEnd()) {
        var _point3 = pathParser.getAsCurrentPoint();
        var _x = _point3.x, _y = _point3.y;
        pathParser.addMarker(_point3, pathParser.start);
        boundingBox.addPoint(_x, _y);
        if (ctx) {
          ctx.lineTo(_x, _y);
        }
      }
    }
  }, {
    key: "pathL",
    value: function pathL(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = pathParser.getAsCurrentPoint();
        var x = point.x, y = point.y;
        pathParser.addMarker(point, current);
        boundingBox.addPoint(x, y);
        if (ctx) {
          ctx.lineTo(x, y);
        }
      }
    }
  }, {
    key: "pathH",
    value: function pathH(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = new Point((pathParser.isRelativeCommand() ? current.x : 0) + pathParser.getScalar(), current.y);
        pathParser.addMarker(point, current);
        pathParser.current = point;
        boundingBox.addPoint(point.x, point.y);
        if (ctx) {
          ctx.lineTo(point.x, point.y);
        }
      }
    }
  }, {
    key: "pathV",
    value: function pathV(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = new Point(current.x, (pathParser.isRelativeCommand() ? current.y : 0) + pathParser.getScalar());
        pathParser.addMarker(point, current);
        pathParser.current = point;
        boundingBox.addPoint(point.x, point.y);
        if (ctx) {
          ctx.lineTo(point.x, point.y);
        }
      }
    }
  }, {
    key: "pathC",
    value: function pathC(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = pathParser.getPoint();
        var controlPoint = pathParser.getAsControlPoint();
        var currentPoint = pathParser.getAsCurrentPoint();
        pathParser.addMarker(currentPoint, controlPoint, point);
        boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) {
          ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        }
      }
    }
  }, {
    key: "pathS",
    value: function pathS(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = pathParser.getReflectedControlPoint();
        var controlPoint = pathParser.getAsControlPoint();
        var currentPoint = pathParser.getAsCurrentPoint();
        pathParser.addMarker(currentPoint, controlPoint, point);
        boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) {
          ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        }
      }
    }
  }, {
    key: "pathQ",
    value: function pathQ(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var controlPoint = pathParser.getAsControlPoint();
        var currentPoint = pathParser.getAsCurrentPoint();
        pathParser.addMarker(currentPoint, controlPoint, controlPoint);
        boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) {
          ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        }
      }
    }
  }, {
    key: "pathT",
    value: function pathT(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var controlPoint = pathParser.getReflectedControlPoint();
        pathParser.control = controlPoint;
        var currentPoint = pathParser.getAsCurrentPoint();
        pathParser.addMarker(currentPoint, controlPoint, controlPoint);
        boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        if (ctx) {
          ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        }
      }
    }
  }, {
    key: "pathA",
    value: function pathA(ctx, boundingBox) {
      var pathParser = this.pathParser;
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var rx = pathParser.getScalar();
        var ry = pathParser.getScalar();
        var xAxisRotation = pathParser.getScalar() * (Math.PI / 180);
        var largeArcFlag = pathParser.getScalar();
        var sweepFlag = pathParser.getScalar();
        var currentPoint = pathParser.getAsCurrentPoint();
        var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2);
        var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
        if (l > 1) {
          rx *= Math.sqrt(l);
          ry *= Math.sqrt(l);
        }
        var s = (largeArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
        if (isNaN(s)) {
          s = 0;
        }
        var cpp = new Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
        var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
        var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]);
        var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
        var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
        var ad = vectorsAngle(u, v);
        if (vectorsRatio(u, v) <= -1) {
          ad = Math.PI;
        }
        if (vectorsRatio(u, v) >= 1) {
          ad = 0;
        }
        var dir = 1 - sweepFlag ? 1 : -1;
        var ah = a1 + dir * (ad / 2);
        var halfWay = new Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
        pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
        pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
        boundingBox.addPoint(currentPoint.x, currentPoint.y);
        if (ctx && !isNaN(a1) && !isNaN(ad)) {
          var r = rx > ry ? rx : ry;
          var sx = rx > ry ? 1 : rx / ry;
          var sy = rx > ry ? ry / rx : 1;
          ctx.translate(centp.x, centp.y);
          ctx.rotate(xAxisRotation);
          ctx.scale(sx, sy);
          ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
          ctx.scale(1 / sx, 1 / sy);
          ctx.rotate(-xAxisRotation);
          ctx.translate(-centp.x, -centp.y);
        }
      }
    }
  }, {
    key: "pathZ",
    value: function pathZ(ctx, boundingBox) {
      var pathParser = this.pathParser;
      if (ctx) {
        if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) {
          ctx.closePath();
        }
      }
      pathParser.current = pathParser.start;
    }
  }]);
  return PathElement2;
}(RenderedElement);
function _createSuper$9(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$9()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$9() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SVGElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(SVGElement2, _RenderedElement);
  var _super = _createSuper$9(SVGElement2);
  function SVGElement2() {
    var _this;
    _classCallCheck$1(this, SVGElement2);
    _this = _super.apply(this, arguments);
    _this.type = "svg";
    _this.root = false;
    return _this;
  }
  _createClass(SVGElement2, [{
    key: "clearContext",
    value: function clearContext(ctx) {
      _get(_getPrototypeOf(SVGElement2.prototype), "clearContext", this).call(this, ctx);
      this.document.screen.viewPort.removeCurrent();
    }
  }, {
    key: "setContext",
    value: function setContext(ctx) {
      var document2 = this.document;
      var screen = document2.screen, window2 = document2.window;
      var canvas = ctx.canvas;
      screen.setDefaults(ctx);
      if (canvas.style && typeof ctx.font !== "undefined" && window2 && typeof window2.getComputedStyle !== "undefined") {
        ctx.font = window2.getComputedStyle(canvas).getPropertyValue("font");
        var fontSizeProp = new Property(document2, "fontSize", Font.parse(ctx.font).fontSize);
        if (fontSizeProp.hasValue()) {
          document2.rootEmSize = fontSizeProp.getPixels("y");
          document2.emSize = document2.rootEmSize;
        }
      }
      _get(_getPrototypeOf(SVGElement2.prototype), "setContext", this).call(this, ctx);
      if (!this.getAttribute("x").hasValue()) {
        this.getAttribute("x", true).setValue(0);
      }
      if (!this.getAttribute("y").hasValue()) {
        this.getAttribute("y", true).setValue(0);
      }
      ctx.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
      var _screen$viewPort = screen.viewPort, width = _screen$viewPort.width, height = _screen$viewPort.height;
      if (!this.getStyle("width").hasValue()) {
        this.getStyle("width", true).setValue("100%");
      }
      if (!this.getStyle("height").hasValue()) {
        this.getStyle("height", true).setValue("100%");
      }
      if (!this.getStyle("color").hasValue()) {
        this.getStyle("color", true).setValue("black");
      }
      var refXAttr = this.getAttribute("refX");
      var refYAttr = this.getAttribute("refY");
      var viewBoxAttr = this.getAttribute("viewBox");
      var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
      var clip = !this.root && this.getAttribute("overflow").getValue("hidden") !== "visible";
      var minX = 0;
      var minY = 0;
      var clipX = 0;
      var clipY = 0;
      if (viewBox) {
        minX = viewBox[0];
        minY = viewBox[1];
      }
      if (!this.root) {
        width = this.getStyle("width").getPixels("x");
        height = this.getStyle("height").getPixels("y");
        if (this.type === "marker") {
          clipX = minX;
          clipY = minY;
          minX = 0;
          minY = 0;
        }
      }
      screen.viewPort.setCurrent(width, height);
      if (viewBox) {
        width = viewBox[2];
        height = viewBox[3];
      }
      document2.setViewBox({
        ctx,
        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
        width: screen.viewPort.width,
        desiredWidth: width,
        height: screen.viewPort.height,
        desiredHeight: height,
        minX,
        minY,
        refX: refXAttr.getValue(),
        refY: refYAttr.getValue(),
        clip,
        clipX,
        clipY
      });
      if (viewBox) {
        screen.viewPort.removeCurrent();
        screen.viewPort.setCurrent(width, height);
      }
    }
    /**
     * Resize SVG to fit in given size.
     * @param width
     * @param height
     * @param preserveAspectRatio
     */
  }, {
    key: "resize",
    value: function resize(width) {
      var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
      var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var widthAttr = this.getAttribute("width", true);
      var heightAttr = this.getAttribute("height", true);
      var viewBoxAttr = this.getAttribute("viewBox");
      var styleAttr = this.getAttribute("style");
      var originWidth = widthAttr.getNumber(0);
      var originHeight = heightAttr.getNumber(0);
      if (preserveAspectRatio) {
        if (typeof preserveAspectRatio === "string") {
          this.getAttribute("preserveAspectRatio", true).setValue(preserveAspectRatio);
        } else {
          var preserveAspectRatioAttr = this.getAttribute("preserveAspectRatio");
          if (preserveAspectRatioAttr.hasValue()) {
            preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
          }
        }
      }
      widthAttr.setValue(width);
      heightAttr.setValue(height);
      if (!viewBoxAttr.hasValue()) {
        viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
      }
      if (styleAttr.hasValue()) {
        var widthStyle = this.getStyle("width");
        var heightStyle = this.getStyle("height");
        if (widthStyle.hasValue()) {
          widthStyle.setValue("".concat(width, "px"));
        }
        if (heightStyle.hasValue()) {
          heightStyle.setValue("".concat(height, "px"));
        }
      }
    }
  }]);
  return SVGElement2;
}(RenderedElement);
function _createSuper$a(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$a()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$a() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var RectElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(RectElement2, _PathElement);
  var _super = _createSuper$a(RectElement2);
  function RectElement2() {
    var _this;
    _classCallCheck$1(this, RectElement2);
    _this = _super.apply(this, arguments);
    _this.type = "rect";
    return _this;
  }
  _createClass(RectElement2, [{
    key: "path",
    value: function path2(ctx) {
      var x = this.getAttribute("x").getPixels("x");
      var y = this.getAttribute("y").getPixels("y");
      var width = this.getStyle("width").getPixels("x");
      var height = this.getStyle("height").getPixels("y");
      var rxAttr = this.getAttribute("rx");
      var ryAttr = this.getAttribute("ry");
      var rx = rxAttr.getPixels("x");
      var ry = ryAttr.getPixels("y");
      if (rxAttr.hasValue() && !ryAttr.hasValue()) {
        ry = rx;
      }
      if (ryAttr.hasValue() && !rxAttr.hasValue()) {
        rx = ry;
      }
      rx = Math.min(rx, width / 2);
      ry = Math.min(ry, height / 2);
      if (ctx) {
        var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
        ctx.beginPath();
        if (height > 0 && width > 0) {
          ctx.moveTo(x + rx, y);
          ctx.lineTo(x + width - rx, y);
          ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
          ctx.lineTo(x + width, y + height - ry);
          ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
          ctx.lineTo(x + rx, y + height);
          ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
          ctx.lineTo(x, y + ry);
          ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
          ctx.closePath();
        }
      }
      return new BoundingBox(x, y, x + width, y + height);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);
  return RectElement2;
}(PathElement);
function _createSuper$b(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$b()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$b() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var CircleElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(CircleElement2, _PathElement);
  var _super = _createSuper$b(CircleElement2);
  function CircleElement2() {
    var _this;
    _classCallCheck$1(this, CircleElement2);
    _this = _super.apply(this, arguments);
    _this.type = "circle";
    return _this;
  }
  _createClass(CircleElement2, [{
    key: "path",
    value: function path2(ctx) {
      var cx = this.getAttribute("cx").getPixels("x");
      var cy = this.getAttribute("cy").getPixels("y");
      var r = this.getAttribute("r").getPixels();
      if (ctx && r > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
        ctx.closePath();
      }
      return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);
  return CircleElement2;
}(PathElement);
function _createSuper$c(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$c()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$c() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var EllipseElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(EllipseElement2, _PathElement);
  var _super = _createSuper$c(EllipseElement2);
  function EllipseElement2() {
    var _this;
    _classCallCheck$1(this, EllipseElement2);
    _this = _super.apply(this, arguments);
    _this.type = "ellipse";
    return _this;
  }
  _createClass(EllipseElement2, [{
    key: "path",
    value: function path2(ctx) {
      var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
      var rx = this.getAttribute("rx").getPixels("x");
      var ry = this.getAttribute("ry").getPixels("y");
      var cx = this.getAttribute("cx").getPixels("x");
      var cy = this.getAttribute("cy").getPixels("y");
      if (ctx && rx > 0 && ry > 0) {
        ctx.beginPath();
        ctx.moveTo(cx + rx, cy);
        ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
        ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
        ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
        ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
        ctx.closePath();
      }
      return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      return null;
    }
  }]);
  return EllipseElement2;
}(PathElement);
function _createSuper$d(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$d()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$d() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var LineElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(LineElement2, _PathElement);
  var _super = _createSuper$d(LineElement2);
  function LineElement2() {
    var _this;
    _classCallCheck$1(this, LineElement2);
    _this = _super.apply(this, arguments);
    _this.type = "line";
    return _this;
  }
  _createClass(LineElement2, [{
    key: "getPoints",
    value: function getPoints() {
      return [new Point(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new Point(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
    }
  }, {
    key: "path",
    value: function path2(ctx) {
      var _this$getPoints = this.getPoints(), _this$getPoints2 = _slicedToArray(_this$getPoints, 2), _this$getPoints2$ = _this$getPoints2[0], x0 = _this$getPoints2$.x, y0 = _this$getPoints2$.y, _this$getPoints2$2 = _this$getPoints2[1], x1 = _this$getPoints2$2.x, y1 = _this$getPoints2$2.y;
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
      }
      return new BoundingBox(x0, y0, x1, y1);
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var _this$getPoints3 = this.getPoints(), _this$getPoints4 = _slicedToArray(_this$getPoints3, 2), p0 = _this$getPoints4[0], p1 = _this$getPoints4[1];
      var a = p0.angleTo(p1);
      return [[p0, a], [p1, a]];
    }
  }]);
  return LineElement2;
}(PathElement);
function _createSuper$e(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$e()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$e() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var PolylineElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(PolylineElement2, _PathElement);
  var _super = _createSuper$e(PolylineElement2);
  function PolylineElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, PolylineElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "polyline";
    _this.points = [];
    _this.points = Point.parsePath(_this.getAttribute("points").getString());
    return _this;
  }
  _createClass(PolylineElement2, [{
    key: "path",
    value: function path2(ctx) {
      var points = this.points;
      var _points = _slicedToArray(points, 1), _points$ = _points[0], x0 = _points$.x, y0 = _points$.y;
      var boundingBox = new BoundingBox(x0, y0);
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
      }
      points.forEach(function(_ref) {
        var x = _ref.x, y = _ref.y;
        boundingBox.addPoint(x, y);
        if (ctx) {
          ctx.lineTo(x, y);
        }
      });
      return boundingBox;
    }
  }, {
    key: "getMarkers",
    value: function getMarkers() {
      var points = this.points;
      var lastIndex = points.length - 1;
      var markers = [];
      points.forEach(function(point, i) {
        if (i === lastIndex) {
          return;
        }
        markers.push([point, point.angleTo(points[i + 1])]);
      });
      if (markers.length > 0) {
        markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
      }
      return markers;
    }
  }]);
  return PolylineElement2;
}(PathElement);
function _createSuper$f(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$f()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$f() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var PolygonElement = /* @__PURE__ */ function(_PolylineElement) {
  _inherits(PolygonElement2, _PolylineElement);
  var _super = _createSuper$f(PolygonElement2);
  function PolygonElement2() {
    var _this;
    _classCallCheck$1(this, PolygonElement2);
    _this = _super.apply(this, arguments);
    _this.type = "polygon";
    return _this;
  }
  _createClass(PolygonElement2, [{
    key: "path",
    value: function path2(ctx) {
      var boundingBox = _get(_getPrototypeOf(PolygonElement2.prototype), "path", this).call(this, ctx);
      var _this$points = _slicedToArray(this.points, 1), _this$points$ = _this$points[0], x = _this$points$.x, y = _this$points$.y;
      if (ctx) {
        ctx.lineTo(x, y);
        ctx.closePath();
      }
      return boundingBox;
    }
  }]);
  return PolygonElement2;
}(PolylineElement);
function _createSuper$g(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$g()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$g() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var PatternElement = /* @__PURE__ */ function(_Element) {
  _inherits(PatternElement2, _Element);
  var _super = _createSuper$g(PatternElement2);
  function PatternElement2() {
    var _this;
    _classCallCheck$1(this, PatternElement2);
    _this = _super.apply(this, arguments);
    _this.type = "pattern";
    return _this;
  }
  _createClass(PatternElement2, [{
    key: "createPattern",
    value: function createPattern(ctx, _, parentOpacityProp) {
      var width = this.getStyle("width").getPixels("x", true);
      var height = this.getStyle("height").getPixels("y", true);
      var patternSvg = new SVGElement(this.document, null);
      patternSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
      patternSvg.attributes.width = new Property(this.document, "width", "".concat(width, "px"));
      patternSvg.attributes.height = new Property(this.document, "height", "".concat(height, "px"));
      patternSvg.attributes.transform = new Property(this.document, "transform", this.getAttribute("patternTransform").getValue());
      patternSvg.children = this.children;
      var patternCanvas = this.document.createCanvas(width, height);
      var patternCtx = patternCanvas.getContext("2d");
      var xAttr = this.getAttribute("x");
      var yAttr = this.getAttribute("y");
      if (xAttr.hasValue() && yAttr.hasValue()) {
        patternCtx.translate(xAttr.getPixels("x", true), yAttr.getPixels("y", true));
      }
      if (parentOpacityProp.hasValue()) {
        this.styles["fill-opacity"] = parentOpacityProp;
      } else {
        Reflect.deleteProperty(this.styles, "fill-opacity");
      }
      for (var x = -1; x <= 1; x++) {
        for (var y = -1; y <= 1; y++) {
          patternCtx.save();
          patternSvg.attributes.x = new Property(this.document, "x", x * patternCanvas.width);
          patternSvg.attributes.y = new Property(this.document, "y", y * patternCanvas.height);
          patternSvg.render(patternCtx);
          patternCtx.restore();
        }
      }
      var pattern = ctx.createPattern(patternCanvas, "repeat");
      return pattern;
    }
  }]);
  return PatternElement2;
}(Element);
function _createSuper$h(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$h()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$h() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var MarkerElement = /* @__PURE__ */ function(_Element) {
  _inherits(MarkerElement2, _Element);
  var _super = _createSuper$h(MarkerElement2);
  function MarkerElement2() {
    var _this;
    _classCallCheck$1(this, MarkerElement2);
    _this = _super.apply(this, arguments);
    _this.type = "marker";
    return _this;
  }
  _createClass(MarkerElement2, [{
    key: "render",
    value: function render(ctx, point, angle) {
      if (!point) {
        return;
      }
      var x = point.x, y = point.y;
      var orient = this.getAttribute("orient").getValue("auto");
      var markerUnits = this.getAttribute("markerUnits").getValue("strokeWidth");
      ctx.translate(x, y);
      if (orient === "auto") {
        ctx.rotate(angle);
      }
      if (markerUnits === "strokeWidth") {
        ctx.scale(ctx.lineWidth, ctx.lineWidth);
      }
      ctx.save();
      var markerSvg = new SVGElement(this.document, null);
      markerSvg.type = this.type;
      markerSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
      markerSvg.attributes.refX = new Property(this.document, "refX", this.getAttribute("refX").getValue());
      markerSvg.attributes.refY = new Property(this.document, "refY", this.getAttribute("refY").getValue());
      markerSvg.attributes.width = new Property(this.document, "width", this.getAttribute("markerWidth").getValue());
      markerSvg.attributes.height = new Property(this.document, "height", this.getAttribute("markerHeight").getValue());
      markerSvg.attributes.overflow = new Property(this.document, "overflow", this.getAttribute("overflow").getValue());
      markerSvg.attributes.fill = new Property(this.document, "fill", this.getAttribute("fill").getColor("black"));
      markerSvg.attributes.stroke = new Property(this.document, "stroke", this.getAttribute("stroke").getValue("none"));
      markerSvg.children = this.children;
      markerSvg.render(ctx);
      ctx.restore();
      if (markerUnits === "strokeWidth") {
        ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
      }
      if (orient === "auto") {
        ctx.rotate(-angle);
      }
      ctx.translate(-x, -y);
    }
  }]);
  return MarkerElement2;
}(Element);
function _createSuper$i(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$i()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$i() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var DefsElement = /* @__PURE__ */ function(_Element) {
  _inherits(DefsElement2, _Element);
  var _super = _createSuper$i(DefsElement2);
  function DefsElement2() {
    var _this;
    _classCallCheck$1(this, DefsElement2);
    _this = _super.apply(this, arguments);
    _this.type = "defs";
    return _this;
  }
  _createClass(DefsElement2, [{
    key: "render",
    value: function render() {
    }
  }]);
  return DefsElement2;
}(Element);
function _createSuper$j(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$j()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$j() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var GElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(GElement2, _RenderedElement);
  var _super = _createSuper$j(GElement2);
  function GElement2() {
    var _this;
    _classCallCheck$1(this, GElement2);
    _this = _super.apply(this, arguments);
    _this.type = "g";
    return _this;
  }
  _createClass(GElement2, [{
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var boundingBox = new BoundingBox();
      this.children.forEach(function(child) {
        boundingBox.addBoundingBox(child.getBoundingBox(ctx));
      });
      return boundingBox;
    }
  }]);
  return GElement2;
}(RenderedElement);
function _createSuper$k(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$k()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$k() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var GradientElement = /* @__PURE__ */ function(_Element) {
  _inherits(GradientElement2, _Element);
  var _super = _createSuper$k(GradientElement2);
  function GradientElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, GradientElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.attributesToInherit = ["gradientUnits"];
    _this.stops = [];
    var _assertThisInitialize = _assertThisInitialized(_this), stops = _assertThisInitialize.stops, children = _assertThisInitialize.children;
    children.forEach(function(child) {
      if (child.type === "stop") {
        stops.push(child);
      }
    });
    return _this;
  }
  _createClass(GradientElement2, [{
    key: "getGradientUnits",
    value: function getGradientUnits() {
      return this.getAttribute("gradientUnits").getString("objectBoundingBox");
    }
  }, {
    key: "createGradient",
    value: function createGradient(ctx, element, parentOpacityProp) {
      var _this2 = this;
      var stopsContainer = this;
      if (this.getHrefAttribute().hasValue()) {
        stopsContainer = this.getHrefAttribute().getDefinition();
        this.inheritStopContainer(stopsContainer);
      }
      var _stopsContainer = stopsContainer, stops = _stopsContainer.stops;
      var gradient = this.getGradient(ctx, element);
      if (!gradient) {
        return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
      }
      stops.forEach(function(stop) {
        gradient.addColorStop(stop.offset, _this2.addParentOpacity(parentOpacityProp, stop.color));
      });
      if (this.getAttribute("gradientTransform").hasValue()) {
        var document2 = this.document;
        var _document$screen = document2.screen, MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS, viewPort = _document$screen.viewPort;
        var _viewPort$viewPorts = _slicedToArray(viewPort.viewPorts, 1), rootView = _viewPort$viewPorts[0];
        var rect = new RectElement(document2, null);
        rect.attributes.x = new Property(document2, "x", -MAX_VIRTUAL_PIXELS / 3);
        rect.attributes.y = new Property(document2, "y", -MAX_VIRTUAL_PIXELS / 3);
        rect.attributes.width = new Property(document2, "width", MAX_VIRTUAL_PIXELS);
        rect.attributes.height = new Property(document2, "height", MAX_VIRTUAL_PIXELS);
        var group = new GElement(document2, null);
        group.attributes.transform = new Property(document2, "transform", this.getAttribute("gradientTransform").getValue());
        group.children = [rect];
        var patternSvg = new SVGElement(document2, null);
        patternSvg.attributes.x = new Property(document2, "x", 0);
        patternSvg.attributes.y = new Property(document2, "y", 0);
        patternSvg.attributes.width = new Property(document2, "width", rootView.width);
        patternSvg.attributes.height = new Property(document2, "height", rootView.height);
        patternSvg.children = [group];
        var patternCanvas = document2.createCanvas(rootView.width, rootView.height);
        var patternCtx = patternCanvas.getContext("2d");
        patternCtx.fillStyle = gradient;
        patternSvg.render(patternCtx);
        return patternCtx.createPattern(patternCanvas, "no-repeat");
      }
      return gradient;
    }
  }, {
    key: "inheritStopContainer",
    value: function inheritStopContainer(stopsContainer) {
      var _this3 = this;
      this.attributesToInherit.forEach(function(attributeToInherit) {
        if (!_this3.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) {
          _this3.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
        }
      });
    }
  }, {
    key: "addParentOpacity",
    value: function addParentOpacity(parentOpacityProp, color) {
      if (parentOpacityProp.hasValue()) {
        var colorProp = new Property(this.document, "color", color);
        return colorProp.addOpacity(parentOpacityProp).getColor();
      }
      return color;
    }
  }]);
  return GradientElement2;
}(Element);
function _createSuper$l(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$l()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$l() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var LinearGradientElement = /* @__PURE__ */ function(_GradientElement) {
  _inherits(LinearGradientElement2, _GradientElement);
  var _super = _createSuper$l(LinearGradientElement2);
  function LinearGradientElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, LinearGradientElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "linearGradient";
    _this.attributesToInherit.push("x1", "y1", "x2", "y2");
    return _this;
  }
  _createClass(LinearGradientElement2, [{
    key: "getGradient",
    value: function getGradient(ctx, element) {
      var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
      var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
      if (isBoundingBoxUnits && !boundingBox) {
        return null;
      }
      if (!this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue()) {
        this.getAttribute("x1", true).setValue(0);
        this.getAttribute("y1", true).setValue(0);
        this.getAttribute("x2", true).setValue(1);
        this.getAttribute("y2", true).setValue(0);
      }
      var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x");
      var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y");
      var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x");
      var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
      if (x1 === x2 && y1 === y2) {
        return null;
      }
      return ctx.createLinearGradient(x1, y1, x2, y2);
    }
  }]);
  return LinearGradientElement2;
}(GradientElement);
function _createSuper$m(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$m()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$m() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var RadialGradientElement = /* @__PURE__ */ function(_GradientElement) {
  _inherits(RadialGradientElement2, _GradientElement);
  var _super = _createSuper$m(RadialGradientElement2);
  function RadialGradientElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, RadialGradientElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "radialGradient";
    _this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
    return _this;
  }
  _createClass(RadialGradientElement2, [{
    key: "getGradient",
    value: function getGradient(ctx, element) {
      var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
      var boundingBox = element.getBoundingBox(ctx);
      if (isBoundingBoxUnits && !boundingBox) {
        return null;
      }
      if (!this.getAttribute("cx").hasValue()) {
        this.getAttribute("cx", true).setValue("50%");
      }
      if (!this.getAttribute("cy").hasValue()) {
        this.getAttribute("cy", true).setValue("50%");
      }
      if (!this.getAttribute("r").hasValue()) {
        this.getAttribute("r", true).setValue("50%");
      }
      var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x");
      var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y");
      var fx = cx;
      var fy = cy;
      if (this.getAttribute("fx").hasValue()) {
        fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x");
      }
      if (this.getAttribute("fy").hasValue()) {
        fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y");
      }
      var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels();
      var fr = this.getAttribute("fr").getPixels();
      return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
    }
  }]);
  return RadialGradientElement2;
}(GradientElement);
function _createSuper$n(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$n()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$n() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var StopElement = /* @__PURE__ */ function(_Element) {
  _inherits(StopElement2, _Element);
  var _super = _createSuper$n(StopElement2);
  function StopElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, StopElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "stop";
    var offset = Math.max(0, Math.min(1, _this.getAttribute("offset").getNumber()));
    var stopOpacity = _this.getStyle("stop-opacity");
    var stopColor = _this.getStyle("stop-color", true);
    if (stopColor.getString() === "") {
      stopColor.setValue("#000");
    }
    if (stopOpacity.hasValue()) {
      stopColor = stopColor.addOpacity(stopOpacity);
    }
    _this.offset = offset;
    _this.color = stopColor.getColor();
    return _this;
  }
  return StopElement2;
}(Element);
function _createSuper$o(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$o()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$o() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AnimateElement = /* @__PURE__ */ function(_Element) {
  _inherits(AnimateElement2, _Element);
  var _super = _createSuper$o(AnimateElement2);
  function AnimateElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, AnimateElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "animate";
    _this.duration = 0;
    _this.initialValue = null;
    _this.initialUnits = "";
    _this.removed = false;
    _this.frozen = false;
    document2.screen.animations.push(_assertThisInitialized(_this));
    _this.begin = _this.getAttribute("begin").getMilliseconds();
    _this.maxDuration = _this.begin + _this.getAttribute("dur").getMilliseconds();
    _this.from = _this.getAttribute("from");
    _this.to = _this.getAttribute("to");
    _this.values = _this.getAttribute("values");
    if (_this.values.hasValue()) {
      _this.values.setValue(_this.values.getString().split(";"));
    }
    return _this;
  }
  _createClass(AnimateElement2, [{
    key: "getProperty",
    value: function getProperty() {
      var attributeType = this.getAttribute("attributeType").getString();
      var attributeName = this.getAttribute("attributeName").getString();
      if (attributeType === "CSS") {
        return this.parent.getStyle(attributeName, true);
      }
      return this.parent.getAttribute(attributeName, true);
    }
  }, {
    key: "calcValue",
    value: function calcValue() {
      var initialUnits = this.initialUnits;
      var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from3 = _this$getProgress.from, to = _this$getProgress.to;
      var newValue = from3.getNumber() + (to.getNumber() - from3.getNumber()) * progress;
      if (initialUnits === "%") {
        newValue *= 100;
      }
      return "".concat(newValue).concat(initialUnits);
    }
  }, {
    key: "update",
    value: function update(delta) {
      var parent = this.parent;
      var prop = this.getProperty();
      if (!this.initialValue) {
        this.initialValue = prop.getString();
        this.initialUnits = prop.getUnits();
      }
      if (this.duration > this.maxDuration) {
        var fill3 = this.getAttribute("fill").getString("remove");
        if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") {
          this.duration = 0;
        } else if (fill3 === "freeze" && !this.frozen) {
          this.frozen = true;
          parent.animationFrozen = true;
          parent.animationFrozenValue = prop.getString();
        } else if (fill3 === "remove" && !this.removed) {
          this.removed = true;
          prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
          return true;
        }
        return false;
      }
      this.duration += delta;
      var updated = false;
      if (this.begin < this.duration) {
        var newValue = this.calcValue();
        var typeAttr = this.getAttribute("type");
        if (typeAttr.hasValue()) {
          var type = typeAttr.getString();
          newValue = "".concat(type, "(").concat(newValue, ")");
        }
        prop.setValue(newValue);
        updated = true;
      }
      return updated;
    }
  }, {
    key: "getProgress",
    value: function getProgress() {
      var document2 = this.document, values2 = this.values;
      var result = {
        progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
      };
      if (values2.hasValue()) {
        var p = result.progress * (values2.getValue().length - 1);
        var lb = Math.floor(p);
        var ub = Math.ceil(p);
        result.from = new Property(document2, "from", parseFloat(values2.getValue()[lb]));
        result.to = new Property(document2, "to", parseFloat(values2.getValue()[ub]));
        result.progress = (p - lb) / (ub - lb);
      } else {
        result.from = this.from;
        result.to = this.to;
      }
      return result;
    }
  }]);
  return AnimateElement2;
}(Element);
function _createSuper$p(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$p()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$p() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AnimateColorElement = /* @__PURE__ */ function(_AnimateElement) {
  _inherits(AnimateColorElement2, _AnimateElement);
  var _super = _createSuper$p(AnimateColorElement2);
  function AnimateColorElement2() {
    var _this;
    _classCallCheck$1(this, AnimateColorElement2);
    _this = _super.apply(this, arguments);
    _this.type = "animateColor";
    return _this;
  }
  _createClass(AnimateColorElement2, [{
    key: "calcValue",
    value: function calcValue() {
      var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from3 = _this$getProgress.from, to = _this$getProgress.to;
      var colorFrom = new rgbcolor(from3.getColor());
      var colorTo = new rgbcolor(to.getColor());
      if (colorFrom.ok && colorTo.ok) {
        var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
        var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
        var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress;
        return "rgb(".concat(parseInt(r, 10), ", ").concat(parseInt(g, 10), ", ").concat(parseInt(b, 10), ")");
      }
      return this.getAttribute("from").getColor();
    }
  }]);
  return AnimateColorElement2;
}(AnimateElement);
function _createSuper$q(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$q()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$q() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AnimateTransformElement = /* @__PURE__ */ function(_AnimateElement) {
  _inherits(AnimateTransformElement2, _AnimateElement);
  var _super = _createSuper$q(AnimateTransformElement2);
  function AnimateTransformElement2() {
    var _this;
    _classCallCheck$1(this, AnimateTransformElement2);
    _this = _super.apply(this, arguments);
    _this.type = "animateTransform";
    return _this;
  }
  _createClass(AnimateTransformElement2, [{
    key: "calcValue",
    value: function calcValue() {
      var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from3 = _this$getProgress.from, to = _this$getProgress.to;
      var transformFrom = toNumbers(from3.getString());
      var transformTo = toNumbers(to.getString());
      var newValue = transformFrom.map(function(from4, i) {
        var to2 = transformTo[i];
        return from4 + (to2 - from4) * progress;
      }).join(" ");
      return newValue;
    }
  }]);
  return AnimateTransformElement2;
}(AnimateElement);
function _createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var it, normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _createSuper$r(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$r()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$r() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FontElement = /* @__PURE__ */ function(_Element) {
  _inherits(FontElement2, _Element);
  var _super = _createSuper$r(FontElement2);
  function FontElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, FontElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "font";
    _this.glyphs = {};
    _this.horizAdvX = _this.getAttribute("horiz-adv-x").getNumber();
    var definitions = document2.definitions;
    var _assertThisInitialize = _assertThisInitialized(_this), children = _assertThisInitialize.children;
    var _iterator = _createForOfIteratorHelper(children), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var child = _step.value;
        switch (child.type) {
          case "font-face": {
            _this.fontFace = child;
            var fontFamilyStyle = child.getStyle("font-family");
            if (fontFamilyStyle.hasValue()) {
              definitions[fontFamilyStyle.getString()] = _assertThisInitialized(_this);
            }
            break;
          }
          case "missing-glyph":
            _this.missingGlyph = child;
            break;
          case "glyph": {
            var glyph = child;
            if (glyph.arabicForm) {
              _this.isRTL = true;
              _this.isArabic = true;
              if (typeof _this.glyphs[glyph.unicode] === "undefined") {
                _this.glyphs[glyph.unicode] = {};
              }
              _this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
            } else {
              _this.glyphs[glyph.unicode] = glyph;
            }
            break;
          }
          default:
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _this;
  }
  _createClass(FontElement2, [{
    key: "render",
    value: function render() {
    }
  }]);
  return FontElement2;
}(Element);
function _createSuper$s(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$s()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$s() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FontFaceElement = /* @__PURE__ */ function(_Element) {
  _inherits(FontFaceElement2, _Element);
  var _super = _createSuper$s(FontFaceElement2);
  function FontFaceElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, FontFaceElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "font-face";
    _this.ascent = _this.getAttribute("ascent").getNumber();
    _this.descent = _this.getAttribute("descent").getNumber();
    _this.unitsPerEm = _this.getAttribute("units-per-em").getNumber();
    return _this;
  }
  return FontFaceElement2;
}(Element);
function _createSuper$t(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$t()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$t() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var MissingGlyphElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(MissingGlyphElement2, _PathElement);
  var _super = _createSuper$t(MissingGlyphElement2);
  function MissingGlyphElement2() {
    var _this;
    _classCallCheck$1(this, MissingGlyphElement2);
    _this = _super.apply(this, arguments);
    _this.type = "missing-glyph";
    _this.horizAdvX = 0;
    return _this;
  }
  return MissingGlyphElement2;
}(PathElement);
function _createSuper$u(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$u()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$u() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var GlyphElement = /* @__PURE__ */ function(_PathElement) {
  _inherits(GlyphElement2, _PathElement);
  var _super = _createSuper$u(GlyphElement2);
  function GlyphElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, GlyphElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "glyph";
    _this.horizAdvX = _this.getAttribute("horiz-adv-x").getNumber();
    _this.unicode = _this.getAttribute("unicode").getString();
    _this.arabicForm = _this.getAttribute("arabic-form").getString();
    return _this;
  }
  return GlyphElement2;
}(PathElement);
function _createSuper$v(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$v()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$v() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TRefElement = /* @__PURE__ */ function(_TextElement) {
  _inherits(TRefElement2, _TextElement);
  var _super = _createSuper$v(TRefElement2);
  function TRefElement2() {
    var _this;
    _classCallCheck$1(this, TRefElement2);
    _this = _super.apply(this, arguments);
    _this.type = "tref";
    return _this;
  }
  _createClass(TRefElement2, [{
    key: "getText",
    value: function getText() {
      var element = this.getHrefAttribute().getDefinition();
      if (element) {
        var firstChild = element.children[0];
        if (firstChild) {
          return firstChild.getText();
        }
      }
      return "";
    }
  }]);
  return TRefElement2;
}(TextElement);
function _createSuper$w(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$w()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$w() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AElement = /* @__PURE__ */ function(_TextElement) {
  _inherits(AElement2, _TextElement);
  var _super = _createSuper$w(AElement2);
  function AElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, AElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "a";
    var childNodes = node2.childNodes;
    var firstChild = childNodes[0];
    var hasText = childNodes.length > 0 && Array.from(childNodes).every(function(node3) {
      return node3.nodeType === 3;
    });
    _this.hasText = hasText;
    _this.text = hasText ? _this.getTextFromNode(firstChild) : "";
    return _this;
  }
  _createClass(AElement2, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      if (this.hasText) {
        _get(_getPrototypeOf(AElement2.prototype), "renderChildren", this).call(this, ctx);
        var document2 = this.document, x = this.x, y = this.y;
        var mouse = document2.screen.mouse;
        var fontSize = new Property(document2, "fontSize", Font.parse(document2.ctx.font).fontSize);
        if (mouse.isWorking()) {
          mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels("y"), x + this.measureText(ctx), y));
        }
      } else if (this.children.length > 0) {
        var g = new GElement(this.document, null);
        g.children = this.children;
        g.parent = this;
        g.render(ctx);
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var window2 = this.document.window;
      if (window2) {
        window2.open(this.getHrefAttribute().getString());
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove() {
      var ctx = this.document.ctx;
      ctx.canvas.style.cursor = "pointer";
    }
  }]);
  return AElement2;
}(TextElement);
function _createForOfIteratorHelper$1(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray$1(o))) {
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var it, normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = o[Symbol.iterator]();
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _createSuper$x(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$x()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$x() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TextPathElement = /* @__PURE__ */ function(_TextElement) {
  _inherits(TextPathElement2, _TextElement);
  var _super = _createSuper$x(TextPathElement2);
  function TextPathElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, TextPathElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "textPath";
    _this.textWidth = 0;
    _this.textHeight = 0;
    _this.pathLength = -1;
    _this.glyphInfo = null;
    _this.letterSpacingCache = [];
    _this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var pathElement = _this.getHrefAttribute().getDefinition();
    _this.text = _this.getTextFromNode();
    _this.dataArray = _this.parsePathData(pathElement);
    return _this;
  }
  _createClass(TextPathElement2, [{
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "path",
    value: function path2(ctx) {
      var dataArray = this.dataArray;
      if (ctx) {
        ctx.beginPath();
      }
      dataArray.forEach(function(_ref) {
        var command = _ref.command, points = _ref.points;
        switch (command) {
          case "L":
            if (ctx) {
              ctx.lineTo(points[0], points[1]);
            }
            break;
          case "M":
            if (ctx) {
              ctx.moveTo(points[0], points[1]);
            }
            break;
          case "C":
            if (ctx) {
              ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
            }
            break;
          case "Q":
            if (ctx) {
              ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
            }
            break;
          case "A": {
            var cx = points[0];
            var cy = points[1];
            var rx = points[2];
            var ry = points[3];
            var theta = points[4];
            var dTheta = points[5];
            var psi = points[6];
            var fs = points[7];
            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;
            if (ctx) {
              ctx.translate(cx, cy);
              ctx.rotate(psi);
              ctx.scale(scaleX, scaleY);
              ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
              ctx.scale(1 / scaleX, 1 / scaleY);
              ctx.rotate(-psi);
              ctx.translate(-cx, -cy);
            }
            break;
          }
          case "z":
            if (ctx) {
              ctx.closePath();
            }
            break;
        }
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      this.setTextData(ctx);
      ctx.save();
      var textDecoration = this.parent.getStyle("text-decoration").getString();
      var fontSize = this.getFontSize();
      var glyphInfo = this.glyphInfo;
      var fill3 = ctx.fillStyle;
      if (textDecoration === "underline") {
        ctx.beginPath();
      }
      glyphInfo.forEach(function(glyph, i) {
        var p0 = glyph.p0, p1 = glyph.p1, partialText = glyph.text;
        ctx.save();
        ctx.translate(p0.x, p0.y);
        ctx.rotate(glyphInfo[i].rotation);
        if (ctx.fillStyle) {
          ctx.fillText(partialText, 0, 0);
        }
        if (ctx.strokeStyle) {
          ctx.strokeText(partialText, 0, 0);
        }
        ctx.restore();
        if (textDecoration === "underline") {
          if (i === 0) {
            ctx.moveTo(p0.x, p0.y + fontSize / 8);
          }
          ctx.lineTo(p1.x, p1.y + fontSize / 5);
        }
      });
      if (textDecoration === "underline") {
        ctx.lineWidth = fontSize / 20;
        ctx.strokeStyle = fill3;
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
    }
  }, {
    key: "getLetterSpacingAt",
    value: function getLetterSpacingAt() {
      var idx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return this.letterSpacingCache[idx] || 0;
    }
  }, {
    key: "findSegmentToFitChar",
    value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, c2, charI) {
      var offset = inputOffset;
      var glyphWidth = this.measureText(ctx, c2);
      if (c2 === " " && anchor === "justify" && textFullWidth < fullPathWidth) {
        glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
      }
      if (charI > -1) {
        offset += this.getLetterSpacingAt(charI);
      }
      var splineStep = this.textHeight / 20;
      var segment = {
        p0: this.getEquidistantPointOnPath(offset, splineStep),
        p1: this.getEquidistantPointOnPath(offset + glyphWidth, splineStep)
      };
      offset += glyphWidth;
      return {
        offset,
        segment
      };
    }
  }, {
    key: "measureText",
    value: function measureText(ctx, text) {
      var measuresCache = this.measuresCache;
      var targetText = text || this.getText();
      if (measuresCache.has(targetText)) {
        return measuresCache.get(targetText);
      }
      var measure = this.measureTargetText(ctx, targetText);
      measuresCache.set(targetText, measure);
      return measure;
    }
    // This method supposes what all custom fonts already loaded.
    // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
    // You need to call this method manually to update glyphs cache.
  }, {
    key: "setTextData",
    value: function setTextData(ctx) {
      var _this2 = this;
      if (this.glyphInfo) {
        return;
      }
      var renderText = this.getText();
      var chars = renderText.split("");
      var spacesNumber = renderText.split(" ").length - 1;
      var dx = toNumbers(this.parent.getAttribute("dx").getString("0"));
      var anchor = this.parent.getStyle("text-anchor").getString("start");
      var thisSpacing = this.getStyle("letter-spacing");
      var parentSpacing = this.parent.getStyle("letter-spacing");
      var letterSpacing = 0;
      if (!thisSpacing.hasValue() || thisSpacing.getValue() === "inherit") {
        letterSpacing = parentSpacing.getPixels();
      } else if (thisSpacing.hasValue()) {
        if (thisSpacing.getValue() !== "initial" && thisSpacing.getValue() !== "unset") {
          letterSpacing = thisSpacing.getPixels();
        }
      }
      var letterSpacingCache = [];
      var textLen = renderText.length;
      this.letterSpacingCache = letterSpacingCache;
      for (var i = 0; i < textLen; i++) {
        letterSpacingCache.push(typeof dx[i] !== "undefined" ? dx[i] : letterSpacing);
      }
      var dxSum = letterSpacingCache.reduce(function(acc, cur) {
        return acc + cur || 0;
      }, 0);
      this.textWidth = this.measureText(ctx);
      this.textHeight = this.getFontSize();
      var textFullWidth = Math.max(this.textWidth + dxSum, 0);
      this.glyphInfo = [];
      var fullPathWidth = this.getPathLength();
      var startOffset = this.getStyle("startOffset").getNumber(0) * fullPathWidth;
      var offset = 0;
      if (anchor === "middle" || anchor === "center") {
        offset = -textFullWidth / 2;
      }
      if (anchor === "end" || anchor === "right") {
        offset = -textFullWidth;
      }
      offset += startOffset;
      chars.forEach(function(char, i2) {
        var _this2$findSegmentToF = _this2.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, char, i2), nextOffset = _this2$findSegmentToF.offset, segment = _this2$findSegmentToF.segment;
        offset = nextOffset;
        if (!segment.p0 || !segment.p1) {
          return;
        }
        var width = _this2.getLineLength(segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y);
        var kern = 0;
        var midpoint = _this2.getPointOnLine(kern + width / 2, segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y);
        var rotation = Math.atan2(segment.p1.y - segment.p0.y, segment.p1.x - segment.p0.x);
        _this2.glyphInfo.push({
          transposeX: midpoint.x,
          transposeY: midpoint.y,
          text: chars[i2],
          p0: segment.p0,
          p1: segment.p1,
          rotation
        });
      });
    }
  }, {
    key: "parsePathData",
    value: function parsePathData(path2) {
      this.pathLength = -1;
      if (!path2) {
        return [];
      }
      var pathCommands = [];
      var pathParser = path2.pathParser;
      pathParser.reset();
      while (!pathParser.isEnd()) {
        var current = pathParser.current;
        var startX = current ? current.x : 0;
        var startY = current ? current.y : 0;
        var cmd = "";
        var points = [];
        pathParser.nextCommand();
        var upperCommand = pathParser.command.toUpperCase();
        switch (pathParser.command) {
          case "M":
          case "m":
            cmd = this.pathM(pathParser, points);
            break;
          case "L":
          case "l":
            cmd = this.pathL(pathParser, points);
            break;
          case "H":
          case "h":
            cmd = this.pathH(pathParser, points);
            break;
          case "V":
          case "v":
            cmd = this.pathV(pathParser, points);
            break;
          case "C":
          case "c":
            this.pathC(pathParser, points);
            break;
          case "S":
          case "s":
            cmd = this.pathS(pathParser, points);
            break;
          case "Q":
          case "q":
            this.pathQ(pathParser, points);
            break;
          case "T":
          case "t":
            cmd = this.pathT(pathParser, points);
            break;
          case "A":
          case "a":
            points = this.pathA(pathParser);
            break;
          case "Z":
          case "z":
            pathParser.current = pathParser.start;
            break;
        }
        if (upperCommand !== "Z") {
          pathCommands.push({
            command: cmd || upperCommand,
            points,
            start: {
              x: startX,
              y: startY
            },
            pathLength: this.calcLength(startX, startY, cmd || upperCommand, points)
          });
        } else {
          pathCommands.push({
            command: "z",
            points: [],
            pathLength: 0
          });
        }
      }
      return pathCommands;
    }
  }, {
    key: "pathM",
    value: function pathM(pathParser, points) {
      var p = pathParser.getAsCurrentPoint();
      points.push(p.x, p.y);
      pathParser.start = pathParser.current;
      while (!pathParser.isCommandOrEnd()) {
        var _p = pathParser.getAsCurrentPoint();
        points.push(_p.x, _p.y);
        return "L";
      }
    }
  }, {
    key: "pathL",
    value: function pathL(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var p = pathParser.getAsCurrentPoint();
        points.push(p.x, p.y);
      }
      return "L";
    }
  }, {
    key: "pathH",
    value: function pathH(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = new Point((pathParser.isRelativeCommand() ? current.x : 0) + pathParser.getScalar(), current.y);
        points.push(point.x, point.y);
        pathParser.current = point;
      }
      return "L";
    }
  }, {
    key: "pathV",
    value: function pathV(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var point = new Point(current.x, (pathParser.isRelativeCommand() ? current.y : 0) + pathParser.getScalar());
        points.push(point.x, point.y);
        pathParser.current = point;
      }
      return "L";
    }
  }, {
    key: "pathC",
    value: function pathC(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var point = pathParser.getPoint();
        var controlPoint = pathParser.getAsControlPoint();
        var currentPoint = pathParser.getAsCurrentPoint();
        points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathS",
    value: function pathS(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var point = pathParser.getReflectedControlPoint();
        var controlPoint = pathParser.getAsControlPoint();
        var currentPoint = pathParser.getAsCurrentPoint();
        points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
      return "C";
    }
  }, {
    key: "pathQ",
    value: function pathQ(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var controlPoint = pathParser.getAsControlPoint();
        var currentPoint = pathParser.getAsCurrentPoint();
        points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
    }
  }, {
    key: "pathT",
    value: function pathT(pathParser, points) {
      while (!pathParser.isCommandOrEnd()) {
        var controlPoint = pathParser.getReflectedControlPoint();
        pathParser.control = controlPoint;
        var currentPoint = pathParser.getAsCurrentPoint();
        points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
      }
      return "Q";
    }
  }, {
    key: "pathA",
    value: function pathA(pathParser) {
      while (!pathParser.isCommandOrEnd()) {
        var current = pathParser.current;
        var rx = pathParser.getScalar();
        var ry = pathParser.getScalar();
        var xAxisRotation = pathParser.getScalar() * (Math.PI / 180);
        var largeArcFlag = pathParser.getScalar();
        var sweepFlag = pathParser.getScalar();
        var currentPoint = pathParser.getAsCurrentPoint();
        var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2);
        var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
        if (l > 1) {
          rx *= Math.sqrt(l);
          ry *= Math.sqrt(l);
        }
        var s = (largeArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
        if (isNaN(s)) {
          s = 0;
        }
        var cpp = new Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
        var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
        var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]);
        var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
        var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
        var ad = vectorsAngle(u, v);
        if (vectorsRatio(u, v) <= -1) {
          ad = Math.PI;
        }
        if (vectorsRatio(u, v) >= 1) {
          ad = 0;
        }
        if (sweepFlag === 0 && ad > 0) {
          ad = ad - 2 * Math.PI;
        }
        if (sweepFlag === 1 && ad < 0) {
          ad = ad + 2 * Math.PI;
        }
        return [centp.x, centp.y, rx, ry, a1, ad, xAxisRotation, sweepFlag];
      }
    }
  }, {
    key: "calcLength",
    value: function calcLength(x, y, cmd, points) {
      var len = 0;
      var p1 = null;
      var p2 = null;
      var t = 0;
      switch (cmd) {
        case "L":
          return this.getLineLength(x, y, points[0], points[1]);
        case "C":
          len = 0;
          p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
          for (t = 0.01; t <= 1; t += 0.01) {
            p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
          return len;
        case "Q":
          len = 0;
          p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
          for (t = 0.01; t <= 1; t += 0.01) {
            p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
            len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
          return len;
        case "A":
          len = 0;
          var start = points[4];
          var dTheta = points[5];
          var end = points[4] + dTheta;
          var inc = Math.PI / 180;
          if (Math.abs(start - end) < inc) {
            inc = Math.abs(start - end);
          }
          p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
          if (dTheta < 0) {
            for (t = start - inc; t > end; t -= inc) {
              p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
              len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
              p1 = p2;
            }
          } else {
            for (t = start + inc; t < end; t += inc) {
              p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
              len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
              p1 = p2;
            }
          }
          p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
          len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
          return len;
      }
      return 0;
    }
  }, {
    key: "getPointOnLine",
    value: function getPointOnLine(dist, P1x, P1y, P2x, P2y) {
      var fromX = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : P1x;
      var fromY = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : P1y;
      var m2 = (P2y - P1y) / (P2x - P1x + PSEUDO_ZERO);
      var run2 = Math.sqrt(dist * dist / (1 + m2 * m2));
      if (P2x < P1x) {
        run2 *= -1;
      }
      var rise = m2 * run2;
      var pt = null;
      if (P2x === P1x) {
        pt = {
          x: fromX,
          y: fromY + rise
        };
      } else if ((fromY - P1y) / (fromX - P1x + PSEUDO_ZERO) === m2) {
        pt = {
          x: fromX + run2,
          y: fromY + rise
        };
      } else {
        var ix = 0;
        var iy = 0;
        var len = this.getLineLength(P1x, P1y, P2x, P2y);
        if (len < PSEUDO_ZERO) {
          return null;
        }
        var u = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
        u = u / (len * len);
        ix = P1x + u * (P2x - P1x);
        iy = P1y + u * (P2y - P1y);
        var pRise = this.getLineLength(fromX, fromY, ix, iy);
        var pRun = Math.sqrt(dist * dist - pRise * pRise);
        run2 = Math.sqrt(pRun * pRun / (1 + m2 * m2));
        if (P2x < P1x) {
          run2 *= -1;
        }
        rise = m2 * run2;
        pt = {
          x: ix + run2,
          y: iy + rise
        };
      }
      return pt;
    }
  }, {
    key: "getPointOnPath",
    value: function getPointOnPath(distance) {
      var fullLen = this.getPathLength();
      var cumulativePathLength = 0;
      var p = null;
      if (distance < -5e-5 || distance - 5e-5 > fullLen) {
        return null;
      }
      var dataArray = this.dataArray;
      var _iterator = _createForOfIteratorHelper$1(dataArray), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var pathCmd = _step.value;
          if (pathCmd && (pathCmd.pathLength < 5e-5 || cumulativePathLength + pathCmd.pathLength + 5e-5 < distance)) {
            cumulativePathLength += pathCmd.pathLength;
            continue;
          }
          var delta = distance - cumulativePathLength;
          var currentT = 0;
          switch (pathCmd.command) {
            case "L":
              p = this.getPointOnLine(delta, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.start.x, pathCmd.start.y);
              break;
            case "A":
              var start = pathCmd.points[4];
              var dTheta = pathCmd.points[5];
              var end = pathCmd.points[4] + dTheta;
              currentT = start + delta / pathCmd.pathLength * dTheta;
              if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                break;
              }
              p = this.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
              break;
            case "C":
              currentT = delta / pathCmd.pathLength;
              if (currentT > 1) {
                currentT = 1;
              }
              p = this.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
              break;
            case "Q":
              currentT = delta / pathCmd.pathLength;
              if (currentT > 1) {
                currentT = 1;
              }
              p = this.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
              break;
            default:
          }
          if (p) {
            return p;
          }
          break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "getLineLength",
    value: function getLineLength(x1, y1, x2, y2) {
      return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
  }, {
    key: "getPathLength",
    value: function getPathLength() {
      if (this.pathLength === -1) {
        this.pathLength = this.dataArray.reduce(function(length, command) {
          return command.pathLength > 0 ? length + command.pathLength : length;
        }, 0);
      }
      return this.pathLength;
    }
  }, {
    key: "getPointOnCubicBezier",
    value: function getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
      var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
      var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
      return {
        x,
        y
      };
    }
  }, {
    key: "getPointOnQuadraticBezier",
    value: function getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
      var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
      var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
      return {
        x,
        y
      };
    }
  }, {
    key: "getPointOnEllipticalArc",
    value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
      var cosPsi = Math.cos(psi);
      var sinPsi = Math.sin(psi);
      var pt = {
        x: rx * Math.cos(theta),
        y: ry * Math.sin(theta)
      };
      return {
        x: cx + (pt.x * cosPsi - pt.y * sinPsi),
        y: cy + (pt.x * sinPsi + pt.y * cosPsi)
      };
    }
    // TODO need some optimisations. possibly build cache only for curved segments?
  }, {
    key: "buildEquidistantCache",
    value: function buildEquidistantCache(inputStep, inputPrecision) {
      var fullLen = this.getPathLength();
      var precision = inputPrecision || 0.25;
      var step = inputStep || fullLen / 100;
      if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
        this.equidistantCache = {
          step,
          precision,
          points: []
        };
        var s = 0;
        for (var l = 0; l <= fullLen; l += precision) {
          var p0 = this.getPointOnPath(l);
          var p1 = this.getPointOnPath(l + precision);
          if (!p0 || !p1) {
            continue;
          }
          s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
          if (s >= step) {
            this.equidistantCache.points.push({
              x: p0.x,
              y: p0.y,
              distance: l
            });
            s -= step;
          }
        }
      }
    }
  }, {
    key: "getEquidistantPointOnPath",
    value: function getEquidistantPointOnPath(targetDistance, step, precision) {
      this.buildEquidistantCache(step, precision);
      if (targetDistance < 0 || targetDistance - this.getPathLength() > 5e-5) {
        return null;
      }
      var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
      return this.equidistantCache.points[idx] || null;
    }
  }]);
  return TextPathElement2;
}(TextElement);
function _createSuper$y(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$y()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$y() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var ImageElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(ImageElement2, _RenderedElement);
  var _super = _createSuper$y(ImageElement2);
  function ImageElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, ImageElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "image";
    _this.loaded = false;
    var href = _this.getHrefAttribute().getString();
    if (!href) {
      return _possibleConstructorReturn(_this);
    }
    var isSvg = /\.svg$/.test(href);
    document2.images.push(_assertThisInitialized(_this));
    if (!isSvg) {
      _this.loadImage(href);
    } else {
      _this.loadSvg(href);
    }
    _this.isSvg = isSvg;
    return _this;
  }
  _createClass(ImageElement2, [{
    key: "loadImage",
    value: function() {
      var _loadImage = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(href) {
        var image;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.document.createImage(href);
              case 3:
                image = _context.sent;
                this.image = image;
                _context.next = 10;
                break;
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error('Error while loading image "'.concat(href, '":'), _context.t0);
              case 10:
                this.loaded = true;
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));
      function loadImage(_x) {
        return _loadImage.apply(this, arguments);
      }
      return loadImage;
    }()
  }, {
    key: "loadSvg",
    value: function() {
      var _loadSvg = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(href) {
        var response, svg;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.document.fetch(href);
              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.text();
              case 6:
                svg = _context2.sent;
                this.image = svg;
                _context2.next = 13;
                break;
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.error('Error while loading image "'.concat(href, '":'), _context2.t0);
              case 13:
                this.loaded = true;
              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));
      function loadSvg(_x2) {
        return _loadSvg.apply(this, arguments);
      }
      return loadSvg;
    }()
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var document2 = this.document, image = this.image, loaded = this.loaded;
      var x = this.getAttribute("x").getPixels("x");
      var y = this.getAttribute("y").getPixels("y");
      var width = this.getStyle("width").getPixels("x");
      var height = this.getStyle("height").getPixels("y");
      if (!loaded || !image || !width || !height) {
        return;
      }
      ctx.save();
      if (this.isSvg) {
        document2.canvg.forkString(ctx, this.image, {
          ignoreMouse: true,
          ignoreAnimation: true,
          ignoreDimensions: true,
          ignoreClear: true,
          offsetX: x,
          offsetY: y,
          scaleWidth: width,
          scaleHeight: height
        }).render();
      } else {
        var _image = this.image;
        ctx.translate(x, y);
        document2.setViewBox({
          ctx,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width,
          desiredWidth: _image.width,
          height,
          desiredHeight: _image.height
        });
        if (this.loaded) {
          if (typeof _image.complete === "undefined" || _image.complete) {
            ctx.drawImage(_image, 0, 0);
          }
        }
      }
      ctx.restore();
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox() {
      var x = this.getAttribute("x").getPixels("x");
      var y = this.getAttribute("y").getPixels("y");
      var width = this.getStyle("width").getPixels("x");
      var height = this.getStyle("height").getPixels("y");
      return new BoundingBox(x, y, x + width, y + height);
    }
  }]);
  return ImageElement2;
}(RenderedElement);
function _createSuper$z(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$z()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$z() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SymbolElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(SymbolElement2, _RenderedElement);
  var _super = _createSuper$z(SymbolElement2);
  function SymbolElement2() {
    var _this;
    _classCallCheck$1(this, SymbolElement2);
    _this = _super.apply(this, arguments);
    _this.type = "symbol";
    return _this;
  }
  _createClass(SymbolElement2, [{
    key: "render",
    value: function render(_) {
    }
  }]);
  return SymbolElement2;
}(RenderedElement);
var SVGFontLoader = /* @__PURE__ */ function() {
  function SVGFontLoader2(document2) {
    _classCallCheck$1(this, SVGFontLoader2);
    this.document = document2;
    this.loaded = false;
    document2.fonts.push(this);
  }
  _createClass(SVGFontLoader2, [{
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(fontFamily, url) {
        var document2, svgDocument, fonts;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                document2 = this.document;
                _context.next = 4;
                return document2.canvg.parser.load(url);
              case 4:
                svgDocument = _context.sent;
                fonts = svgDocument.getElementsByTagName("font");
                Array.from(fonts).forEach(function(fontNode) {
                  var font = document2.createElement(fontNode);
                  document2.definitions[fontFamily] = font;
                });
                _context.next = 12;
                break;
              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.error('Error while loading font "'.concat(url, '":'), _context.t0);
              case 12:
                this.loaded = true;
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));
      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }]);
  return SVGFontLoader2;
}();
function _createSuper$A(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$A()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$A() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var StyleElement = /* @__PURE__ */ function(_Element) {
  _inherits(StyleElement2, _Element);
  var _super = _createSuper$A(StyleElement2);
  function StyleElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, StyleElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "style";
    var css = compressSpaces(
      Array.from(node2.childNodes).map(function(_) {
        return _.data;
      }).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    );
    var cssDefs = css.split("}");
    cssDefs.forEach(function(_) {
      var def = _.trim();
      if (!def) {
        return;
      }
      var cssParts = def.split("{");
      var cssClasses = cssParts[0].split(",");
      var cssProps = cssParts[1].split(";");
      cssClasses.forEach(function(_2) {
        var cssClass = _2.trim();
        if (!cssClass) {
          return;
        }
        var props = document2.styles[cssClass] || {};
        cssProps.forEach(function(cssProp) {
          var prop = cssProp.indexOf(":");
          var name = cssProp.substr(0, prop).trim();
          var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
          if (name && value) {
            props[name] = new Property(document2, name, value);
          }
        });
        document2.styles[cssClass] = props;
        document2.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
        if (cssClass === "@font-face") {
          var fontFamily = props["font-family"].getString().replace(/"|'/g, "");
          var srcs = props.src.getString().split(",");
          srcs.forEach(function(src) {
            if (src.indexOf('format("svg")') > 0) {
              var url = parseExternalUrl(src);
              if (url) {
                new SVGFontLoader(document2).load(fontFamily, url);
              }
            }
          });
        }
      });
    });
    return _this;
  }
  return StyleElement2;
}(Element);
StyleElement.parseExternalUrl = parseExternalUrl;
function _createSuper$B(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$B()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$B() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var UseElement = /* @__PURE__ */ function(_RenderedElement) {
  _inherits(UseElement2, _RenderedElement);
  var _super = _createSuper$B(UseElement2);
  function UseElement2() {
    var _this;
    _classCallCheck$1(this, UseElement2);
    _this = _super.apply(this, arguments);
    _this.type = "use";
    return _this;
  }
  _createClass(UseElement2, [{
    key: "setContext",
    value: function setContext(ctx) {
      _get(_getPrototypeOf(UseElement2.prototype), "setContext", this).call(this, ctx);
      var xAttr = this.getAttribute("x");
      var yAttr = this.getAttribute("y");
      if (xAttr.hasValue()) {
        ctx.translate(xAttr.getPixels("x"), 0);
      }
      if (yAttr.hasValue()) {
        ctx.translate(0, yAttr.getPixels("y"));
      }
    }
  }, {
    key: "path",
    value: function path2(ctx) {
      var element = this.element;
      if (element) {
        element.path(ctx);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(ctx) {
      var document2 = this.document, element = this.element;
      if (element) {
        var tempSvg = element;
        if (element.type === "symbol") {
          tempSvg = new SVGElement(document2, null);
          tempSvg.attributes.viewBox = new Property(document2, "viewBox", element.getAttribute("viewBox").getString());
          tempSvg.attributes.preserveAspectRatio = new Property(document2, "preserveAspectRatio", element.getAttribute("preserveAspectRatio").getString());
          tempSvg.attributes.overflow = new Property(document2, "overflow", element.getAttribute("overflow").getString());
          tempSvg.children = element.children;
        }
        if (tempSvg.type === "svg") {
          var widthStyle = this.getStyle("width", false, true);
          var heightStyle = this.getStyle("height", false, true);
          if (widthStyle.hasValue()) {
            tempSvg.attributes.width = new Property(document2, "width", widthStyle.getString());
          }
          if (heightStyle.hasValue()) {
            tempSvg.attributes.height = new Property(document2, "height", heightStyle.getString());
          }
        }
        var oldParent = tempSvg.parent;
        tempSvg.parent = this;
        tempSvg.render(ctx);
        tempSvg.parent = oldParent;
      }
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox(ctx) {
      var element = this.element;
      if (element) {
        return element.getBoundingBox(ctx);
      }
      return null;
    }
  }, {
    key: "elementTransform",
    value: function elementTransform() {
      var document2 = this.document, element = this.element;
      return Transform.fromElement(document2, element);
    }
  }, {
    key: "element",
    get: function get2() {
      if (!this._element) {
        this._element = this.getHrefAttribute().getDefinition();
      }
      return this._element;
    }
  }]);
  return UseElement2;
}(RenderedElement);
function _createSuper$C(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$C()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$C() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function imGet(img, x, y, width, _, rgba) {
  return img[y * width * 4 + x * 4 + rgba];
}
function imSet(img, x, y, width, _, rgba, val) {
  img[y * width * 4 + x * 4 + rgba] = val;
}
function m(matrix, i, v) {
  var mi = matrix[i];
  return mi * (mi < 0 ? v - 255 : v);
}
function c(a, m1, m2, m3) {
  return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
}
var FeColorMatrixElement = /* @__PURE__ */ function(_Element) {
  _inherits(FeColorMatrixElement2, _Element);
  var _super = _createSuper$C(FeColorMatrixElement2);
  function FeColorMatrixElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, FeColorMatrixElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "feColorMatrix";
    var matrix = toNumbers(_this.getAttribute("values").getString());
    switch (_this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var s = matrix[0];
        matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var a = matrix[0] * Math.PI / 180;
        matrix = [c(a, 0.213, 0.787, -0.213), c(a, 0.715, -0.715, -0.715), c(a, 0.072, -0.072, 0.928), 0, 0, c(a, 0.213, -0.213, 0.143), c(a, 0.715, 0.285, 0.14), c(a, 0.072, -0.072, -0.283), 0, 0, c(a, 0.213, -0.213, -0.787), c(a, 0.715, -0.715, 0.715), c(a, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    _this.matrix = matrix;
    _this.includeOpacity = _this.getAttribute("includeOpacity").hasValue();
    return _this;
  }
  _createClass(FeColorMatrixElement2, [{
    key: "apply",
    value: function apply3(ctx, _, __, width, height) {
      var includeOpacity = this.includeOpacity, matrix = this.matrix;
      var srcData = ctx.getImageData(0, 0, width, height);
      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var r = imGet(srcData.data, x, y, width, height, 0);
          var g = imGet(srcData.data, x, y, width, height, 1);
          var b = imGet(srcData.data, x, y, width, height, 2);
          var a = imGet(srcData.data, x, y, width, height, 3);
          var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
          var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
          var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
          var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);
          if (includeOpacity) {
            nr = ng = nb = 0;
            na *= a / 255;
          }
          imSet(srcData.data, x, y, width, height, 0, nr);
          imSet(srcData.data, x, y, width, height, 1, ng);
          imSet(srcData.data, x, y, width, height, 2, nb);
          imSet(srcData.data, x, y, width, height, 3, na);
        }
      }
      ctx.clearRect(0, 0, width, height);
      ctx.putImageData(srcData, 0, 0);
    }
  }]);
  return FeColorMatrixElement2;
}(Element);
function _createSuper$D(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$D()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$D() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var MaskElement = /* @__PURE__ */ function(_Element) {
  _inherits(MaskElement2, _Element);
  var _super = _createSuper$D(MaskElement2);
  function MaskElement2() {
    var _this;
    _classCallCheck$1(this, MaskElement2);
    _this = _super.apply(this, arguments);
    _this.type = "mask";
    return _this;
  }
  _createClass(MaskElement2, [{
    key: "apply",
    value: function apply3(ctx, element) {
      var document2 = this.document;
      var x = this.getAttribute("x").getPixels("x");
      var y = this.getAttribute("y").getPixels("y");
      var width = this.getStyle("width").getPixels("x");
      var height = this.getStyle("height").getPixels("y");
      if (!width && !height) {
        var boundingBox = new BoundingBox();
        this.children.forEach(function(child) {
          boundingBox.addBoundingBox(child.getBoundingBox(ctx));
        });
        x = Math.floor(boundingBox.x1);
        y = Math.floor(boundingBox.y1);
        width = Math.floor(boundingBox.width);
        height = Math.floor(boundingBox.height);
      }
      var ignoredStyles = this.removeStyles(element, MaskElement2.ignoreStyles);
      var maskCanvas = document2.createCanvas(x + width, y + height);
      var maskCtx = maskCanvas.getContext("2d");
      document2.screen.setDefaults(maskCtx);
      this.renderChildren(maskCtx);
      new FeColorMatrixElement(document2, {
        nodeType: 1,
        childNodes: [],
        attributes: [{
          nodeName: "type",
          value: "luminanceToAlpha"
        }, {
          nodeName: "includeOpacity",
          value: "true"
        }]
      }).apply(maskCtx, 0, 0, x + width, y + height);
      var tmpCanvas = document2.createCanvas(x + width, y + height);
      var tmpCtx = tmpCanvas.getContext("2d");
      document2.screen.setDefaults(tmpCtx);
      element.render(tmpCtx);
      tmpCtx.globalCompositeOperation = "destination-in";
      tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, "no-repeat");
      tmpCtx.fillRect(0, 0, x + width, y + height);
      ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, "no-repeat");
      ctx.fillRect(0, 0, x + width, y + height);
      this.restoreStyles(element, ignoredStyles);
    }
  }, {
    key: "render",
    value: function render(_) {
    }
  }]);
  return MaskElement2;
}(Element);
MaskElement.ignoreStyles = ["mask", "transform", "clip-path"];
function _createSuper$E(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$E()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$E() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var noop = function noop2() {
};
var ClipPathElement = /* @__PURE__ */ function(_Element) {
  _inherits(ClipPathElement2, _Element);
  var _super = _createSuper$E(ClipPathElement2);
  function ClipPathElement2() {
    var _this;
    _classCallCheck$1(this, ClipPathElement2);
    _this = _super.apply(this, arguments);
    _this.type = "clipPath";
    return _this;
  }
  _createClass(ClipPathElement2, [{
    key: "apply",
    value: function apply3(ctx) {
      var document2 = this.document;
      var contextProto = Reflect.getPrototypeOf(ctx);
      var beginPath = ctx.beginPath, closePath = ctx.closePath;
      if (contextProto) {
        contextProto.beginPath = noop;
        contextProto.closePath = noop;
      }
      Reflect.apply(beginPath, ctx, []);
      this.children.forEach(function(child) {
        if (typeof child.path === "undefined") {
          return;
        }
        var transform = typeof child.elementTransform !== "undefined" ? child.elementTransform() : null;
        if (!transform) {
          transform = Transform.fromElement(document2, child);
        }
        if (transform) {
          transform.apply(ctx);
        }
        child.path(ctx);
        if (contextProto) {
          contextProto.closePath = closePath;
        }
        if (transform) {
          transform.unapply(ctx);
        }
      });
      Reflect.apply(closePath, ctx, []);
      ctx.clip();
      if (contextProto) {
        contextProto.beginPath = beginPath;
        contextProto.closePath = closePath;
      }
    }
  }, {
    key: "render",
    value: function render(_) {
    }
  }]);
  return ClipPathElement2;
}(Element);
function _createSuper$F(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$F()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$F() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FilterElement = /* @__PURE__ */ function(_Element) {
  _inherits(FilterElement2, _Element);
  var _super = _createSuper$F(FilterElement2);
  function FilterElement2() {
    var _this;
    _classCallCheck$1(this, FilterElement2);
    _this = _super.apply(this, arguments);
    _this.type = "filter";
    return _this;
  }
  _createClass(FilterElement2, [{
    key: "apply",
    value: function apply3(ctx, element) {
      var document2 = this.document, children = this.children;
      var boundingBox = element.getBoundingBox(ctx);
      if (!boundingBox) {
        return;
      }
      var px = 0;
      var py = 0;
      children.forEach(function(child) {
        var efd = child.extraFilterDistance || 0;
        px = Math.max(px, efd);
        py = Math.max(py, efd);
      });
      var width = Math.floor(boundingBox.width);
      var height = Math.floor(boundingBox.height);
      var tmpCanvasWidth = width + 2 * px;
      var tmpCanvasHeight = height + 2 * py;
      if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) {
        return;
      }
      var x = Math.floor(boundingBox.x);
      var y = Math.floor(boundingBox.y);
      var ignoredStyles = this.removeStyles(element, FilterElement2.ignoreStyles);
      var tmpCanvas = document2.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
      var tmpCtx = tmpCanvas.getContext("2d");
      document2.screen.setDefaults(tmpCtx);
      tmpCtx.translate(-x + px, -y + py);
      element.render(tmpCtx);
      children.forEach(function(child) {
        if (typeof child.apply === "function") {
          child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
        }
      });
      ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
      this.restoreStyles(element, ignoredStyles);
    }
  }, {
    key: "render",
    value: function render(_) {
    }
  }]);
  return FilterElement2;
}(Element);
FilterElement.ignoreStyles = ["filter", "transform", "clip-path"];
function _createSuper$G(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$G()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$G() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FeDropShadowElement = /* @__PURE__ */ function(_Element) {
  _inherits(FeDropShadowElement2, _Element);
  var _super = _createSuper$G(FeDropShadowElement2);
  function FeDropShadowElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, FeDropShadowElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "feDropShadow";
    _this.addStylesFromStyleDefinition();
    return _this;
  }
  _createClass(FeDropShadowElement2, [{
    key: "apply",
    value: function apply3(_, __, ___, ____, _____) {
    }
  }]);
  return FeDropShadowElement2;
}(Element);
function _createSuper$H(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$H()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$H() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FeMorphologyElement = /* @__PURE__ */ function(_Element) {
  _inherits(FeMorphologyElement2, _Element);
  var _super = _createSuper$H(FeMorphologyElement2);
  function FeMorphologyElement2() {
    var _this;
    _classCallCheck$1(this, FeMorphologyElement2);
    _this = _super.apply(this, arguments);
    _this.type = "feMorphology";
    return _this;
  }
  _createClass(FeMorphologyElement2, [{
    key: "apply",
    value: function apply3(_, __, ___, ____, _____) {
    }
  }]);
  return FeMorphologyElement2;
}(Element);
function _createSuper$I(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$I()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$I() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FeCompositeElement = /* @__PURE__ */ function(_Element) {
  _inherits(FeCompositeElement2, _Element);
  var _super = _createSuper$I(FeCompositeElement2);
  function FeCompositeElement2() {
    var _this;
    _classCallCheck$1(this, FeCompositeElement2);
    _this = _super.apply(this, arguments);
    _this.type = "feComposite";
    return _this;
  }
  _createClass(FeCompositeElement2, [{
    key: "apply",
    value: function apply3(_, __, ___, ____, _____) {
    }
  }]);
  return FeCompositeElement2;
}(Element);
function _createSuper$J(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$J()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$J() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var FeGaussianBlurElement = /* @__PURE__ */ function(_Element) {
  _inherits(FeGaussianBlurElement2, _Element);
  var _super = _createSuper$J(FeGaussianBlurElement2);
  function FeGaussianBlurElement2(document2, node2, captureTextNodes) {
    var _this;
    _classCallCheck$1(this, FeGaussianBlurElement2);
    _this = _super.call(this, document2, node2, captureTextNodes);
    _this.type = "feGaussianBlur";
    _this.blurRadius = Math.floor(_this.getAttribute("stdDeviation").getNumber());
    _this.extraFilterDistance = _this.blurRadius;
    return _this;
  }
  _createClass(FeGaussianBlurElement2, [{
    key: "apply",
    value: function apply3(ctx, x, y, width, height) {
      var document2 = this.document, blurRadius = this.blurRadius;
      var body = document2.window ? document2.window.document.body : null;
      var canvas = ctx.canvas;
      canvas.id = document2.getUniqueId();
      if (body) {
        canvas.style.display = "none";
        body.appendChild(canvas);
      }
      processCanvasRGBA(canvas, x, y, width, height, blurRadius);
      if (body) {
        body.removeChild(canvas);
      }
    }
  }]);
  return FeGaussianBlurElement2;
}(Element);
function _createSuper$K(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$K()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$K() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TitleElement = /* @__PURE__ */ function(_Element) {
  _inherits(TitleElement2, _Element);
  var _super = _createSuper$K(TitleElement2);
  function TitleElement2() {
    var _this;
    _classCallCheck$1(this, TitleElement2);
    _this = _super.apply(this, arguments);
    _this.type = "title";
    return _this;
  }
  return TitleElement2;
}(Element);
function _createSuper$L(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (_isNativeReflectConstruct$L()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$L() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var DescElement = /* @__PURE__ */ function(_Element) {
  _inherits(DescElement2, _Element);
  var _super = _createSuper$L(DescElement2);
  function DescElement2() {
    var _this;
    _classCallCheck$1(this, DescElement2);
    _this = _super.apply(this, arguments);
    _this.type = "desc";
    return _this;
  }
  return DescElement2;
}(Element);
var elementTypes = {
  "svg": SVGElement,
  "rect": RectElement,
  "circle": CircleElement,
  "ellipse": EllipseElement,
  "line": LineElement,
  "polyline": PolylineElement,
  "polygon": PolygonElement,
  "path": PathElement,
  "pattern": PatternElement,
  "marker": MarkerElement,
  "defs": DefsElement,
  "linearGradient": LinearGradientElement,
  "radialGradient": RadialGradientElement,
  "stop": StopElement,
  "animate": AnimateElement,
  "animateColor": AnimateColorElement,
  "animateTransform": AnimateTransformElement,
  "font": FontElement,
  "font-face": FontFaceElement,
  "missing-glyph": MissingGlyphElement,
  "glyph": GlyphElement,
  "text": TextElement,
  "tspan": TSpanElement,
  "tref": TRefElement,
  "a": AElement,
  "textPath": TextPathElement,
  "image": ImageElement,
  "g": GElement,
  "symbol": SymbolElement,
  "style": StyleElement,
  "use": UseElement,
  "mask": MaskElement,
  "clipPath": ClipPathElement,
  "filter": FilterElement,
  "feDropShadow": FeDropShadowElement,
  "feMorphology": FeMorphologyElement,
  "feComposite": FeCompositeElement,
  "feColorMatrix": FeColorMatrixElement,
  "feGaussianBlur": FeGaussianBlurElement,
  "title": TitleElement,
  "desc": DescElement
};
function ownKeys2(object, enumerableOnly) {
  var keys4 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys4.push.apply(keys4, symbols);
  }
  return keys4;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function createCanvas(width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
function createImage(_x) {
  return _createImage.apply(this, arguments);
}
function _createImage() {
  _createImage = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(src) {
    var anonymousCrossOrigin, image, _args = arguments;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            anonymousCrossOrigin = _args.length > 1 && _args[1] !== void 0 ? _args[1] : false;
            image = document.createElement("img");
            if (anonymousCrossOrigin) {
              image.crossOrigin = "Anonymous";
            }
            return _context.abrupt("return", new Promise(function(resolve2, reject2) {
              image.onload = function() {
                resolve2(image);
              };
              image.onerror = function() {
                reject2();
              };
              image.src = src;
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createImage.apply(this, arguments);
}
var Document = /* @__PURE__ */ function() {
  function Document2(canvg) {
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$rootEmSize = _ref.rootEmSize, rootEmSize = _ref$rootEmSize === void 0 ? 12 : _ref$rootEmSize, _ref$emSize = _ref.emSize, emSize = _ref$emSize === void 0 ? 12 : _ref$emSize, _ref$createCanvas = _ref.createCanvas, createCanvas2 = _ref$createCanvas === void 0 ? Document2.createCanvas : _ref$createCanvas, _ref$createImage = _ref.createImage, createImage2 = _ref$createImage === void 0 ? Document2.createImage : _ref$createImage, anonymousCrossOrigin = _ref.anonymousCrossOrigin;
    _classCallCheck$1(this, Document2);
    this.canvg = canvg;
    this.definitions = {};
    this.styles = {};
    this.stylesSpecificity = {};
    this.images = [];
    this.fonts = [];
    this.emSizeStack = [];
    this.uniqueId = 0;
    this.screen = canvg.screen;
    this.rootEmSize = rootEmSize;
    this.emSize = emSize;
    this.createCanvas = createCanvas2;
    this.createImage = this.bindCreateImage(createImage2, anonymousCrossOrigin);
    this.screen.wait(this.isImagesLoaded.bind(this));
    this.screen.wait(this.isFontsLoaded.bind(this));
  }
  _createClass(Document2, [{
    key: "bindCreateImage",
    value: function bindCreateImage(createImage2, anonymousCrossOrigin) {
      if (typeof anonymousCrossOrigin === "boolean") {
        return function(source, forceAnonymousCrossOrigin) {
          return createImage2(source, typeof forceAnonymousCrossOrigin === "boolean" ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
        };
      }
      return createImage2;
    }
  }, {
    key: "popEmSize",
    value: function popEmSize() {
      var emSizeStack = this.emSizeStack;
      emSizeStack.pop();
    }
  }, {
    key: "getUniqueId",
    value: function getUniqueId() {
      return "canvg".concat(++this.uniqueId);
    }
  }, {
    key: "isImagesLoaded",
    value: function isImagesLoaded() {
      return this.images.every(function(_) {
        return _.loaded;
      });
    }
  }, {
    key: "isFontsLoaded",
    value: function isFontsLoaded() {
      return this.fonts.every(function(_) {
        return _.loaded;
      });
    }
  }, {
    key: "createDocumentElement",
    value: function createDocumentElement(document2) {
      var documentElement = this.createElement(document2.documentElement);
      documentElement.root = true;
      documentElement.addStylesFromStyleDefinition();
      this.documentElement = documentElement;
      return documentElement;
    }
  }, {
    key: "createElement",
    value: function createElement2(node2) {
      var elementType = node2.nodeName.replace(/^[^:]+:/, "");
      var ElementType = Document2.elementTypes[elementType];
      if (typeof ElementType !== "undefined") {
        return new ElementType(this, node2);
      }
      return new UnknownElement(this, node2);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(node2) {
      return new TextNode(this, node2);
    }
  }, {
    key: "setViewBox",
    value: function setViewBox(config) {
      this.screen.setViewBox(_objectSpread({
        document: this
      }, config));
    }
  }, {
    key: "window",
    get: function get2() {
      return this.screen.window;
    }
  }, {
    key: "fetch",
    get: function get2() {
      return this.screen.fetch;
    }
  }, {
    key: "ctx",
    get: function get2() {
      return this.screen.ctx;
    }
  }, {
    key: "emSize",
    get: function get2() {
      var emSizeStack = this.emSizeStack;
      return emSizeStack[emSizeStack.length - 1];
    },
    set: function set2(value) {
      var emSizeStack = this.emSizeStack;
      emSizeStack.push(value);
    }
  }]);
  return Document2;
}();
Document.createCanvas = createCanvas;
Document.createImage = createImage;
Document.elementTypes = elementTypes;
function ownKeys$1(object, enumerableOnly) {
  var keys4 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys4.push.apply(keys4, symbols);
  }
  return keys4;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var Canvg = /* @__PURE__ */ function() {
  function Canvg2(ctx, svg) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck$1(this, Canvg2);
    this.parser = new Parser(options);
    this.screen = new Screen(ctx, options);
    this.options = options;
    var document2 = new Document(this, options);
    var documentElement = document2.createDocumentElement(svg);
    this.document = document2;
    this.documentElement = documentElement;
  }
  _createClass(Canvg2, [{
    key: "fork",
    /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string or URL.
     * @param options - Rendering options.
     */
    value: function fork(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Canvg2.from(ctx, svg, _objectSpread$1({}, this.options, {}, options));
    }
    /**
     * Create new Canvg instance with inherited options.
     * @param ctx - Rendering context.
     * @param svg - SVG source string.
     * @param options - Rendering options.
     */
  }, {
    key: "forkString",
    value: function forkString(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Canvg2.fromString(ctx, svg, _objectSpread$1({}, this.options, {}, options));
    }
    /**
     * Document is ready promise.
     */
  }, {
    key: "ready",
    value: function ready() {
      return this.screen.ready();
    }
    /**
     * Document is ready value.
     */
  }, {
    key: "isReady",
    value: function isReady() {
      return this.screen.isReady();
    }
    /**
     * Render only first frame, ignoring animations and mouse.
     * @param options - Rendering options.
     */
  }, {
    key: "render",
    value: function() {
      var _render = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee() {
        var options, _args = arguments;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {};
                this.start(_objectSpread$1({
                  enableRedraw: true,
                  ignoreAnimation: true,
                  ignoreMouse: true
                }, options));
                _context.next = 4;
                return this.ready();
              case 4:
                this.stop();
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function render() {
        return _render.apply(this, arguments);
      }
      return render;
    }()
    /**
     * Start rendering.
     * @param options - Render options.
     */
  }, {
    key: "start",
    value: function start() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var documentElement = this.documentElement, screen = this.screen, baseOptions = this.options;
      screen.start(documentElement, _objectSpread$1({
        enableRedraw: true
      }, baseOptions, {}, options));
    }
    /**
     * Stop rendering.
     */
  }, {
    key: "stop",
    value: function stop() {
      this.screen.stop();
    }
    /**
     * Resize SVG to fit in given size.
     * @param width
     * @param height
     * @param preserveAspectRatio
     */
  }, {
    key: "resize",
    value: function resize(width) {
      var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
      var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      this.documentElement.resize(width, height, preserveAspectRatio);
    }
  }], [{
    key: "from",
    value: function() {
      var _from = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(ctx, svg) {
        var options, parser, svgDocument, _args2 = arguments;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 2 && _args2[2] !== void 0 ? _args2[2] : {};
                parser = new Parser(options);
                _context2.next = 4;
                return parser.parse(svg);
              case 4:
                svgDocument = _context2.sent;
                return _context2.abrupt("return", new Canvg2(ctx, svgDocument, options));
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function from3(_x, _x2) {
        return _from.apply(this, arguments);
      }
      return from3;
    }()
    /**
     * Create Canvg isntance from SVG source string.
     * @param ctx - Rendering context.
     * @param svg - SVG source string.
     * @param options - Rendering options.
     */
  }, {
    key: "fromString",
    value: function fromString(ctx, svg) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parser = new Parser(options);
      var svgDocument = parser.parseFromString(svg);
      return new Canvg2(ctx, svgDocument, options);
    }
  }]);
  return Canvg2;
}();
function offscreen() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, DOMParserFallback = _ref.DOMParser;
  var preset = {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParserFallback,
    createCanvas: function createCanvas2(width, height) {
      return new OffscreenCanvas(width, height);
    },
    createImage: function createImage2(url) {
      return _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee() {
        var response, blob, img;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(url);
              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.blob();
              case 5:
                blob = _context.sent;
                _context.next = 8;
                return createImageBitmap(blob);
              case 8:
                img = _context.sent;
                return _context.abrupt("return", img);
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
  if (typeof DOMParser !== "undefined" || typeof DOMParserFallback === "undefined") {
    Reflect.deleteProperty(preset, "DOMParser");
  }
  return preset;
}
function node(_ref) {
  var DOMParser2 = _ref.DOMParser, canvas = _ref.canvas, fetch2 = _ref.fetch;
  return {
    window: null,
    ignoreAnimation: true,
    ignoreMouse: true,
    DOMParser: DOMParser2,
    fetch: fetch2,
    createCanvas: canvas.createCanvas,
    createImage: canvas.loadImage
  };
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen,
  node
});
export {
  AElement,
  AnimateColorElement,
  AnimateElement,
  AnimateTransformElement,
  BoundingBox,
  CB1,
  CB2,
  CB3,
  CB4,
  Canvg,
  CircleElement,
  ClipPathElement,
  DefsElement,
  DescElement,
  Document,
  Element,
  EllipseElement,
  FeColorMatrixElement,
  FeCompositeElement,
  FeDropShadowElement,
  FeGaussianBlurElement,
  FeMorphologyElement,
  FilterElement,
  Font,
  FontElement,
  FontFaceElement,
  GElement,
  GlyphElement,
  GradientElement,
  ImageElement,
  LineElement,
  LinearGradientElement,
  MarkerElement,
  MaskElement,
  Matrix,
  MissingGlyphElement,
  Mouse,
  PSEUDO_ZERO,
  Parser,
  PathElement,
  PathParser,
  PatternElement,
  Point,
  PolygonElement,
  PolylineElement,
  Property,
  QB1,
  QB2,
  QB3,
  RadialGradientElement,
  RectElement,
  RenderedElement,
  Rotate,
  SVGElement,
  SVGFontLoader,
  Scale,
  Screen,
  Skew,
  SkewX,
  SkewY,
  StopElement,
  StyleElement,
  SymbolElement,
  TRefElement,
  TSpanElement,
  TextElement,
  TextPathElement,
  TitleElement,
  Transform,
  Translate,
  UnknownElement,
  UseElement,
  ViewPort,
  compressSpaces,
  Canvg as default,
  getSelectorSpecificity,
  normalizeAttributeName,
  normalizeColor,
  parseExternalUrl,
  index as presets,
  toNumbers,
  trimLeft,
  trimRight,
  vectorMagnitude,
  vectorsAngle,
  vectorsRatio
};
