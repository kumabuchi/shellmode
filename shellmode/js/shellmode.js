(function (e) {
    var t = function (t, n) {
        return e(t).find(".cssConsoleDisplay span").removeClass("selected"), clearInterval(t.cursor), t.cursor_position != e(t).find(".cssConsoleDisplay span").length ? (e(t).find(".cssConsoleCursor").css({
            visibility: "hidden"
        }), e(t).find(".cssConsoleDisplay span").eq(t.cursor_position).addClass("selected"), t.cursor = window.setInterval(function () {
            e(t).find(".cssConsoleDisplay span").eq(t.cursor_position).hasClass("selected") ? e(t).find(".cssConsoleDisplay span").eq(t.cursor_position).removeClass("selected") : e(t).find(".cssConsoleDisplay span").eq(t.cursor_position).addClass("selected")
        }, n)) : (e(t).find(".cssConsoleCursor").css({
            visibility: "visible"
        }), t.cursor = window.setInterval(function () {
            e(t).find(".cssConsoleCursor").css("visibility") === "visible" ? e(t).find(".cssConsoleCursor").css({
                visibility: "hidden"
            }) : e(t).find(".cssConsoleCursor").css({
                visibility: "visible"
            })
        }, n)), t
    }, n = {
        init: function (n) {
            var r = e.extend({
                type: "text",
                inputId: null,
                inputName: null,
                inputValue: null,
                blinkingInterval: 500,
                charLimit: 0,
                preventEnter: !0,
                onEnter: function () {}
            }, n);
            return this.each(function () {
                var n = this,
                    i = e(this);
                n.cursor, n.cursor_position = 0, n.inputVal = "", n.blinkingInterval = r.blinkingInterval, i.addClass("cssConsole"), i.append('<span class="cssConsoleDisplay"></span>'), i.append('<div class="cssConsoleCursor"></div>'), i.append('<input class="cssConsoleInput" type="' + r.type + '" />'), r.inputId && i.find(".cssConsoleInput").attr("id", r.inputId), r.inputName && i.find(".cssConsoleInput").attr("name", r.inputName);
                if (r.inputValue) {
                    r.charLimit > 0 && r.charLimit < r.inputValue.length && (r.inputValue = r.inputValue.substring(0, r.charLimit)), n.cursor_position = r.inputValue.length;
                    for (var s = 0; s < r.inputValue.length; s++) i.find(".cssConsoleDisplay").append("<span>" + r.inputValue.charAt(s) + "</span>");
                    i.find(".cssConsoleInput").val(r.inputValue), n.inputVal = r.inputValue
                }
                return i.on("click", function () {
                    i.find(".cssConsoleInput").focus(), t(n, r.blinkingInterval)
                }), i.find(".cssConsoleInput").on("focus", function () {
                    t(n, r.blinkingInterval)
                }), i.find(".cssConsoleInput").on("blur", function () {
                    clearInterval(n.cursor), n.cursor_position != i.find(".cssConsoleDisplay span").length ? i.find(".cssConsoleDisplay span").removeClass("selected") : i.find(".cssConsoleCursor").css({
                        visibility: "hidden"
                    })
                }), i.find(".cssConsoleInput").on("keydown", function (e) {
                    e.which == 8 ? n.cursor_position > 0 && (i.find(".cssConsoleDisplay span").eq(n.cursor_position - 1).remove(), n.inputVal = n.inputVal.slice(0, n.cursor_position - 1) + n.inputVal.slice(n.cursor_position, n.inputVal.length), n.cursor_position--) : e.which == 13 ? (r.preventEnter && e.preventDefault(), r.onEnter()) : e.which == 46 ? (n.cursor_position < i.find(".cssConsoleDisplay span").length && i.find(".cssConsoleDisplay span").eq(n.cursor_position).remove(), n.inputVal = n.inputVal.slice(0, n.cursor_position) + n.inputVal.slice(n.cursor_position + 1, n.inputVal.length)) : e.which == 35 ? n.cursor_position = i.find(".cssConsoleDisplay span").length : e.which == 36 ? n.cursor_position = 0 : e.which == 37 ? n.cursor_position > 0 && n.cursor_position-- : e.which == 39 && n.cursor_position < i.find(".cssConsoleDisplay span").length && n.cursor_position++, i.find(".cssConsoleInput").is(":focus") && t(n, r.blinkingInterval)
                }), i.find(".cssConsoleInput").on("keyup", function (e) {
                    if (e.which != 8 && e.which != 46 && n.inputVal != i.find(".cssConsoleInput").val()) {
                        i.find(".cssConsoleDisplay").empty();
                        if (n.inputVal.length == i.find(".cssConsoleInput").val().length) for (var s = 0; s < i.find(".cssConsoleInput").val().length; s++) r.type == "password" ? i.find(".cssConsoleDisplay").append("<span>*</span>") : i.find(".cssConsoleDisplay").append("<span>" + i.find(".cssConsoleInput").val().charAt(s) + "</span>");
                        else {
                            r.charLimit > 0 && r.charLimit < i.find(".cssConsoleInput").val().length && i.find(".cssConsoleInput").val(i.find(".cssConsoleInput").val().substring(0, r.charLimit));
                            for (var s = 0; s < i.find(".cssConsoleInput").val().length; s++) r.type == "password" ? i.find(".cssConsoleDisplay").append("<span>*</span>") : i.find(".cssConsoleDisplay").append("<span>" + i.find(".cssConsoleInput").val().charAt(s) + "</span>");
                            n.cursor_position = n.cursor_position + i.find(".cssConsoleInput").val().length - n.inputVal.length
                        }
                        n.inputVal = i.find(".cssConsoleInput").val(), t(n, r.blinkingInterval)
                    }
                }), this
            })
        },
        destroy: function () {
            return this.each(function () {
                var t = this,
                    n = e(this);
                return t.cursor_position = 0, clearInterval(t.cursor), n.find(".cssConsoleInput").val(""), n.empty(), n.removeClass("cssConsole"), this
            })
        },
        reset: function () {
            return this.each(function () {
                var n = this,
                    r = e(this);
                return n.cursor_position = 0, n.cursor_position != r.find(".cssConsoleDisplay span").length && r.find(".cssConsoleDisplay span").removeClass("selected"), r.find(".cssConsoleInput").val(""), n.inputVal = "", r.find(".cssConsoleInput").is(":focus") ? t(r, n.blinkingInterval) : (clearInterval(n.cursor), r.find(".cssConsoleCursor").css({
                    visibility: "hidden"
                })), r.find(".cssConsoleDisplay").empty(), this
            })
        }
    };
    e.fn.cssConsole = function (t) {
        if (n[t]) return n[t].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof t == "object" || !t) return n.init.apply(this, arguments);
        e.error("Method " + t + " does not exist on jQuery.cssConsole")
    }
})(jQuery)
$('#input').cssConsole({
inputName:'console',
charLimit: 100,
onEnter: function(){
addLine("[guest@shellmode "+ currdir  +"]&#36;&#160;"+$('#input').find('input').val());
execCommand($('#input').find('input').val());
$('#input').cssConsole('reset');	
}
});

var lineLimit = 280;

$('html').on('click', function() {
		$('#input').find('input').focus();
		});

function addLine(input, style, color) {
	if($('.console div').length==lineLimit) {
		$('.console div').eq(0).remove();
	}
	style = typeof style !== 'undefined' ? style : 'line';
	color = typeof color !== 'undefined' ? color : 'black';
	$('.console').append('<div class="'+style+' '+color+'">'+input+'</div>');
	window.scrollTo(0,document.documentElement.scrollHeight);
}

function execCommand(command){
	history[history.length] = command;
	histnum = history.length;
	var com = command.split(" ");
	parameter = new Array();
	var cnt = 0;
	for( var i = 1; i<com.length; i++){
		if( com[i] != "" ){
			parameter[cnt] = com[i];
			++cnt;
		}
	} 
	if ( commands[com[0]] ) {
		commands[com[0]]();
		window.scrollTo(0,document.documentElement.scrollHeight);
		return;
	} else {
		if( com[0] != "" )
			addLine("Command '" + com[0] + "' was not found.");
	}
}

var commands = {
ls  : function (){
		var tmpdir = current;
	      if( parameter.length != 0 ){
		      var path = parameter[0].split("/");
		      for( var i in path ){
			      if( path[i] != "" && path[i] != "." ){
				    tmpdir = tmpdir[path[i]];
			      }
		      }
		      if( !(tmpdir instanceof Object) ){
		    	  addLine(path[path.length-1], 'margin', 'green');
		          return;
		      }
	      }
	      for (var i in tmpdir) {
		      if( tmpdir[i] instanceof Object || i == "." ){
			      addLine(i, 'margin', 'blue');
		      }else{
			      addLine(i, 'margin', 'green');}
	      }
      },
cd  : function (){
	      if( parameter.length == 0 ){
		      current = dirs;
	      }else{
		      var path = parameter[0].split("/");
		      var oldcurr = current;
		      var curr = current["."];
		      for( var i in path ){
			      if( path[i] != "" && path[i] != "." ){
				      if( current[path[i]] && current[path[i]] instanceof Object ){
					      current = current[path[i]];
					      curr = current["."];
				      }else if( current[path[i]] ){
					      addLine("Not a directory");
					      current = oldcurr;
					      return;
				      }else{
					      addLine("No such file or directory");
					      current = oldcurr;
					      return ;
				      }
			      }
		      }
	      }
	      if( current == dirs )
		      curr = "~";
	      currdir = curr;
	      $(".label").html("[guest@shellmode "+ curr  +"]&#36;&#160;&#160");
      },
cat : function (){
	      if( parameter.length == 0 ){
			addLine("Missing file name");
			return;
	      }
	      for( var k=0; k<parameter.length; k++){
		      var paths = parameter[k].split("/");
		      var tmpdir = current;
		      for( var i in paths ){
			      if( paths[i] != "" && paths[i] != "." ){
			      if( tmpdir[paths[i]] ){
				      tmpdir = tmpdir[paths[i]];
			      }else{
				      addLine(parameter[k]+" : No such file or directory");
				      return;
			      }
			      }
		      }
		      if( typeof(tmpdir) === "string" ){
			      addLine(tmpdir, 'line', 'choco');
		      }else{
			      addLine(parameter[k]+" is a directory");}
	      }
      },
vi  : function (){
	      commands.cat();
      },
emacs: function (){
	       commands.cat();
       },
less: function (){
	      commands.cat();
      },
exit: function (){
	      window.location.href = exitUrl;
      },
quit: function (){
	      commands.exit();
      },
bye : function (){
	      commands.exit();
      },
clear: function (){
	       $(".console").empty();
       },
help: function (){
	      addLine("Available commands list");
	      addLine("command (function) (aliases)");
	      addLine("ls &#160;&#160;&#160;(list file and directory)", 'margin');
	      addLine("cd &#160;&#160;&#160;(change directory)", 'margin');
	      addLine("cat &#160;&#160;(concatenate files and print on the standard output) (less, vi, emacs)", 'margin');
	      addLine("clear (clear the screen)", 'margin');
	      addLine("exit &#160;(exit shell mode) (quit, bye)", 'margin');
	      addLine("help &#160;(display help text)", 'margin');
      }
}
var current = dirs;
var currdir = dirs["."];
var param = "";
var history = new Array();
var histnum = 0;
$("#input").keydown( function( e ) {
		if( e.which === 9 ){
			if (e.preventDefault) {
				e.preventDefault();
			}else {
				e.returnValue = false;
			}
			var sup = new Queue();
			var lines = $(".cssConsoleDisplay").children();
			var inputs = "";
			var origin = "";
			for(var i=0; i<lines.length; i++){
				if( lines.eq(i).html() == " " ){
					origin += inputs + " ";
					inputs = "";
				}else{
					inputs += lines.eq(i).html();
				}
			}
			var path = inputs.split("/");
		      	var tmpdir = current;
		      	var q = path[path.length-1];
			for( var i=0; i<path.length-1; i++ ){
			      origin += path[i]+"/";
			      if( path[i] != "" && path[i] != "." ){
				      if( tmpdir[path[i]] && tmpdir[path[i]] instanceof Object ){
					      tmpdir = tmpdir[path[i]];
				      }else{
					      return ;
				      }
			      }
		     	}
			if( q === "" ){
				addLine("[guest@shellmode "+ currdir  +"]&#36;&#160;"+$('#input').find('input').val());
				for (var i in tmpdir) {           
					addLine(i, 'margin', 'black');
				}
				return;
			}
			for( var i in tmpdir ){
				if( i.indexOf(q) == 0 ){
					sup.enqueue(i);
				}
			}
			if( sup.size() == 1 ){
				$(".cssConsoleDisplay").empty();
				for (var s = 0; s < origin.length; s++){
					$(".cssConsoleDisplay").append("<span>" + origin.charAt(s) + "</span>");}
				var supdeq = sup.dequeue();
				if( tmpdir[supdeq] instanceof Object ){
					supdeq += "/";
				}
				for( var s = 0; s < supdeq.length; s++){
					$(".cssConsoleDisplay").append("<span>" + supdeq.charAt(s) + "</span>");}
				$(".cssConsoleInput").val(origin+supdeq);
			}else{
				addLine("[guest@shellmode "+ currdir  +"]&#36;&#160;"+$('#input').find('input').val());
				while( sup.size() != 0 ){
					addLine(sup.dequeue(),'margin', 'black');
				}
			}
			return;
		}
		if( e.which === 38 || e.which === 40 ){
			if (e.preventDefault) {
				e.preventDefault();
			}else {
				e.returnValue = false;
			}
			if( e.which === 38 ){
				--histnum;
				if( histnum < 0  ){
					histnum = 0;
					return;
				}
			}
			if( e.which === 40 ){
				++histnum;
				if( histnum >= history.length ){
					histnum = history.length;
					$(".cssConsoleDisplay").empty();
					$(".cssConsoleInput").val("");
					return;
				}
			}
			var histcom = history[histnum];
			$(".cssConsoleDisplay").empty();
			for (var s = 0; s < histcom.length; s++){
				$(".cssConsoleDisplay").append("<span>" + histcom.charAt(s) + "</span>");}
			$(".cssConsoleInput").focus();
			$(".cssConsoleInput").val(histcom);
		}
});

function Queue() {
	this.__a = new Array();
}

Queue.prototype.enqueue = function(o) {
	this.__a.push(o);
}

Queue.prototype.dequeue = function() {
	if( this.__a.length > 0 ) {
		return this.__a.shift();
	}
	return null;
}

Queue.prototype.size = function() {
	return this.__a.length;
} 

Queue.prototype.toString = function() {
	return '[' + this.__a.join(',') + ']';
}
