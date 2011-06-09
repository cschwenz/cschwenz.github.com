/*
 * Desktop plugin for WYMeditor : what you see is What You Mean web-based editor
 * Copyright (c) 2011  Calvin Schwenzfeier
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 *
 * File Authors:
 *      Calvin Schwenzfeier (calvin DOT schwenzfeier A~T gmail dotCOM)
 */

WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread = new Object();

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
 * Set the parent object for this MailUnread object.
 * 
 * @param parentObj  A reference to the parent object of this MailUnread object.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.setParent = function(parentObj) {
    this.parent = parentObj;
};

/**
 * Default event handler for 'blur' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.blur = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'blur' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'change' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.change = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'change' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'click' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.click = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'click' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'dblclick' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.dblclick = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'dblclick' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'error' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.error = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected an 'error' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focus' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.focus = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'focus' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focusin' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.focusin = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'focusin' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'focusout' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.focusout = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'focusout' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'hover' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.hover = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'hover' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keydown' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.keydown = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'keydown' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keypress' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.keypress = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'keypress' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'keyup' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.keyup = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'keyup' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'load' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.load = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'load' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mousedown' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mousedown = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mousedown' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseenter' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mouseenter = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mouseenter' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseleave' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mouseleave = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mouseleave' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mousemove' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mousemove = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mousemove' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseout' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mouseout = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mouseout' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseover' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mouseover = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mouseover' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'mouseup' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.mouseup = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'mouseup' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'ready' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.ready = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'ready' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'resize' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.resize = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'resize' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'scroll' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.scroll = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'scroll' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'select' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.select = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'select' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'submit' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.submit = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected a 'submit' event.");
        console.log(eventObj);
    }
};

/**
 * Default event handler for 'toggle' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.toggle = [
    function(eventObj) {
        if( (this.selfObject.parent.DEBUG != undefined) &&
            (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
            this.selfObject.parent.DEBUG ) {
            console.log("The MailUnread tool detected a 'toggle' event (click one).");
            console.log(eventObj);
        }
    },
    function(eventObj) {
        if( (this.selfObject.parent.DEBUG != undefined) &&
            (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
            this.selfObject.parent.DEBUG ) {
            console.log("The MailUnread tool detected a 'toggle' event (click two).");
            console.log(eventObj);
        }
    }
];

/**
 * Default event handler for 'unload' events on the MailUnread tool.
 */
WYMeditor.editor.prototype.desktop.toolFunctions.MailUnread.unload = function(eventObj) {
    if( (this.selfObject.parent.DEBUG != undefined) &&
        (typeof(this.selfObject.parent.DEBUG) == "boolean") &&
        this.selfObject.parent.DEBUG ) {
        console.log("The MailUnread tool detected an 'unload' event.");
        console.log(eventObj);
    }
};

