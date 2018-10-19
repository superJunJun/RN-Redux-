/* @flow */

export function isUndefined(value) {return typeof value === 'undefined';}


export function isDefined(value) {return typeof value !== 'undefined';}


export function isObject(value) {
  return value !== null && typeof value === 'object';
}

export function isBlankObject(value) {
  return value !== null && typeof value === 'object' && !getPrototypeOf(value);
}

export function isString(value) {return typeof value === 'string';}

export function isNumber(value) {return typeof value === 'number';}

export function isDate(value) {
  return toString.call(value) === '[object Date]';
}

export var isArray = Array.isArray;

export function isFunction(value) {return typeof value === 'function';}

export function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

export function isWindow(obj) {
  return obj && obj.window === obj;
}

export function isFile(obj) {
  return toString.call(obj) === '[object File]';
}

export function isFormData(obj) {
  return toString.call(obj) === '[object FormData]';
}

export function isBlob(obj) {
  return toString.call(obj) === '[object Blob]';
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isPromiseLike(obj) {
  return obj && isFunction(obj.then);
}

export function isElement(node) {
  return !!(node &&
    (node.nodeName  // we are a direct element
    || (node.prop && node.attr && node.find)));  // we have an on and find method part of jQuery API
}
