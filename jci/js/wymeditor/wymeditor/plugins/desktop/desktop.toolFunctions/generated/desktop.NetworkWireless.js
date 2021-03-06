/*
 * Desktop plugin for WYMeditor : what you see is What You Mean web-based editor
 * Copyright (c) 2011  Calvin Schwenzfeier
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 *
 * File Authors:
 *      Calvin Schwenzfeier (calvin DOT schwenzfeier A~T gmail dotCOM)
 */

WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless = new Object();

/*
 *################################## WARNING ###################################
 *##                                                                          ##
 *##   File is generated by the .../scripts/create_tool_defaults.pl script!   ##
 *##                                                                          ##
 *##  To disable auto-generation of this file, place a multi-line comment in  ##
 *##  the space before the tool entry in the .availableTools() method in the  ##
 *##  jquery.wymeditor.desktop.js file.                                       ##
 *##                                                                          ##
 *##############################################################################
 */

/**
 * Set the parent object for this NetworkWireless object.
 * 
 * @param parentObj  A reference to the parent object of this NetworkWireless object.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.setParent = function(parentObj) {
    this.parent = parentObj;
};

/**
 * Default event handler for 'blur' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.blur = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'blur' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'change' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.change = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'change' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'click' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.click = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'click' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'dblclick' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.dblclick = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'dblclick' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'error' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.error = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected an 'error' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focus' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.focus = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'focus' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focusin' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.focusin = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'focusin' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focusout' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.focusout = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'focusout' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'hover' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.hover = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'hover' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keydown' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.keydown = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'keydown' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keypress' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.keypress = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'keypress' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keyup' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.keyup = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'keyup' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'load' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.load = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'load' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mousedown' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mousedown = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mousedown' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseenter' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mouseenter = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mouseenter' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseleave' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mouseleave = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mouseleave' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mousemove' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mousemove = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mousemove' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseout' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mouseout = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mouseout' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseover' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mouseover = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mouseover' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseup' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.mouseup = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'mouseup' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'ready' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.ready = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'ready' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'resize' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.resize = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'resize' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'scroll' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.scroll = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'scroll' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'select' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.select = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'select' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'submit' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.submit = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected a 'submit' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'toggle' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.toggle = [
    function(eventObj) {
        if( (this.selfObject.parent.DEBUG != undefined) &&
            (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
            this.selfObject.parent.DEBUG ) {
            console.log("The NetworkWireless tool detected a 'toggle' event (click one).");
            console.log(eventObj);
        }
    },
    function(eventObj) {
        if( (this.selfObject.parent.DEBUG != undefined) &&
            (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
            this.selfObject.parent.DEBUG ) {
            console.log("The NetworkWireless tool detected a 'toggle' event (click two).");
            console.log(eventObj);
        }
    }
];

/**
 * Default event handler for 'unload' events on the NetworkWireless tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.NetworkWireless.unload = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The NetworkWireless tool detected an 'unload' event.");
        console.log(eventObj);
    }
};

