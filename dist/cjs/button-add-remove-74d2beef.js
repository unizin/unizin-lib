"use strict";function _interopDefault(n){return n&&"object"==typeof n&&"default"in n?n.default:n}var __chunk_1=require("./chunk-54837f9c.js"),React=require("react"),React__default=_interopDefault(React),styled=_interopDefault(require("styled-components")),classnames=__chunk_1.createCommonjsModule(function(n){!function(){var e={}.hasOwnProperty;function t(){for(var n=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var o=typeof r;if("string"===o||"number"===o)n.push(r);else if(Array.isArray(r)&&r.length){var s=t.apply(null,r);s&&n.push(s)}else if("object"===o)for(var i in r)e.call(r,i)&&r[i]&&n.push(i)}}return n.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t}()}),_templateObject=__chunk_1.taggedTemplateLiteral(["\n    width: ","px;\n    height: ","px;\n    background: #0365a8;\n    border-radius: 50%;\n    border: none;\n    position: relative;\n    transition: all 0.25s;\n    cursor: pointer;\n\n    &.is-small {\n        width: ","px;\n        height: ","px;\n\n        &:before,\n        &:after {\n            height: ","px;\n        }\n    }\n\n    &.is-danger {\n        background: #df204a;\n        transform: rotate(45deg);\n    }\n\n    .cross {\n        display: inline-block;\n\n        &:before,\n        &:after {\n            content: ' ';\n            width: 50%;\n            height: ","px;\n            background: #fff;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            display: block;\n        }\n\n        &:after {\n            transform: translate(-50%, -50%) rotate(90deg);\n        }\n    }\n"],["\n    width: ","px;\n    height: ","px;\n    background: #0365a8;\n    border-radius: 50%;\n    border: none;\n    position: relative;\n    transition: all 0.25s;\n    cursor: pointer;\n\n    &.is-small {\n        width: ","px;\n        height: ","px;\n\n        &:before,\n        &:after {\n            height: ","px;\n        }\n    }\n\n    &.is-danger {\n        background: #df204a;\n        transform: rotate(45deg);\n    }\n\n    .cross {\n        display: inline-block;\n\n        &:before,\n        &:after {\n            content: ' ';\n            width: 50%;\n            height: ","px;\n            background: #fff;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            display: block;\n        }\n\n        &:after {\n            transform: translate(-50%, -50%) rotate(90deg);\n        }\n    }\n"]),ButtonAddRemove=function(n){var e=n.triggerBoolean,t=n.handleOnClick,a=n.isSmall,r=n.title,o=classnames({"is-small":a},{"is-danger":e},{"is-primary":!e});return React__default.createElement(Button,{className:o,onClick:t},React__default.createElement("span",{className:"cross"}),React__default.createElement("span",{className:"aural"},e?"Remove":"Add"," ",r))},buttonSize=22,smallButtonSize=18,Button=styled.button(_templateObject,buttonSize,buttonSize,smallButtonSize,smallButtonSize,smallButtonSize/6,buttonSize/6),buttonAddRemove=Object.freeze({default:ButtonAddRemove});exports.ButtonAddRemove=ButtonAddRemove,exports.buttonAddRemove=buttonAddRemove;
