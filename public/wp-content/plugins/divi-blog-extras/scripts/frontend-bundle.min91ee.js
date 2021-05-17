!function(e){var t={};function o(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="index.html",o(o.s=9)}([function(e,t,o){"use strict";function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,n;return t=e,n=[{key:"getResponsiveValues",value:function(e,t){var o={};if(e[t]||e[t+"_tablet"]||e[t+"_phone"]){var a=e[t+"_last_edited"]&&e[t+"_last_edited"].startsWith("on");o.desktop=e[t],o.tablet=a&&e[t+"_tablet"]?e[t+"_tablet"]:"",o.phone=a&&e[t+"_phone"]?e[t+"_phone"]:""}return o}},{key:"getHoverValue",value:function(t,o){var a="";return e.isHoverEnabled(t,o)&&t[o+"__hover"]&&(a=t[o+"__hover"]),a}},{key:"getMarginPaddingCss",value:function(t,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"margin",i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(arguments.length>4&&void 0!==arguments[4]&&arguments[4]){var n=e.getHoverValue(t,o);return e.processMarginPaddingStyle(n,a,i)}var r=window.ET_Builder.API.Utils._,l=e.getResponsiveValues(t,o),d={};return r.isEmpty(l)||(d.desktop=e.processMarginPaddingStyle(l.desktop,a,i),d.tablet=e.processMarginPaddingStyle(l.tablet,a,i),d.phone=e.processMarginPaddingStyle(l.phone,a,i)),d}},{key:"processMarginPaddingStyle",value:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"margin",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i="",n=t.split("|"),r=window.ET_Builder.API.Utils._;if(!r.isEmpty(n)){var l="";n=n.map(r.trim);r.forEach(["top","right","bottom","left"],function(t,i){if(n[i]&&""!==n[i]){var r=a?" !important":"";l+=o+"-"+t+":"+e.processMarginPaddingValue(n[i],o)+r+";"}}),i+=r.trimEnd(l)}return i}},{key:"processMarginPaddingValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e=window.ET_Builder.API.Utils._.trim(e);var o=parseFloat(e),a=e.replace(o,""),i="";return""!==t&&-1!=={margin:["auto","inherit","initial","unset"],padding:["inherit","initial","unset"]}[t].indexOf(e)?i=e:(""===a&&(a="px"),i=o+a),i}},{key:"getGradient",value:function(e){var t=window.ET_Builder.API.Utils._,o={gradientType:"linear",linearDirection:"180deg",radialDirection:"center",startColor:"#2b87da",endColor:"#29c4a9",startPosition:"0%",endPosition:"100%"};t.forEach(e,function(e,a){""===e||t.isUndefined(e)||(o[a]=e)});var a="linear"===o.gradientType?o.linearDirection:"circle at "+o.radialDirection;return o.gradientType+"-gradient( "+a+", "+o.startColor+" "+o.startPosition+", "+o.endColor+" "+o.endPosition+" )"}},{key:"get",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=window.ET_Builder.API.Utils._,n=t+("desktop"!==o?"_"+o:"");return i.isUndefined(e[n])||""===e[n]?a:e[n]}},{key:"getDefaultValue",value:function(t,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if("desktop"===a)return i;var n=e.get(t,o,"desktop",i);if("tablet"===a)return n;var r=e.get(t,o,"tablet",n);return"phone"===a?r:i}},{key:"getAnyValue",value:function(t,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desktop",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=e.get(t,o,a,""),l=e.getDefaultValue(t,o,a,i);return n?""!==r?r:l:r===l?"":r}},{key:"getInheritedValue",value:function(e,t,o,i){var n,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=window.ET_Builder.API.Utils._,d=r,s=(a(n={},i+"_color",i+"_enable_color"),a(n,i+"_use_color_gradient",i+"_enable_use_color_gradient"),a(n,i+"_image",i+"_enable_image"),n),c={desktop:[""],hover:["__hover",""],tablet:["_tablet",""],phone:["_phone","_tablet",""]};if(""===(l.isUndefined(s[t])?"":s[t])||l.isUndefined(c[o]))return d;d="";var p=!0,f=!1,g=void 0;try{for(var u,b=c[o].values()[Symbol.iterator]();!(p=(u=b.next()).done);p=!0){var _=u.value;if(i+"_color"===t||i+"_image"===t){var m=t.replace(i+"_",""),y=l.isUndefined(e[i+"_enable_"+m+_])?"":e[i+"_enable_"+m+_],h=l.isUndefined(e[i+"_"+m+_])?"":e[i+"_"+m+_],v="off"!==y;if(""!==h&&v){d=h;break}if(!v){d="";break}}else if(i+"_use_color_gradient"===t){d="off";var x=a({},i+"_use_color_gradient",{value:i+"_use_color_gradient"+_,start:i+"_color_gradient_start"+_,end:i+"_color_gradient_end"+_}),k=l.isUndefined(x[t].value)?"":x[t].value,j=l.isUndefined(x[t].start)?"":x[t].start,T=l.isUndefined(x[t].end)?"":x[t].end,w=l.isUndefined(e[k])?"":e[k],z=l.isUndefined(e[j])?"":e[j],L=l.isUndefined(e[T])?"":e[T],B="off"!==w;if((""!==z||""!==L)&&B){d="on";break}if(!B){d="off";break}}}}catch(e){f=!0,g=e}finally{try{p||null==b.return||b.return()}finally{if(f)throw g}}return d}},{key:"getHoverRawValue",value:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return window.ET_Builder.API.Utils._.isUndefined(e[t+"__hover"])?o:e[t+"__hover"]}},{key:"isHoverEnabled",value:function(e,t){var o=window.ET_Builder.API.Utils._;return!(o.isEmpty(e[t+"__hover_enabled"])||!o.isString(e[t+"__hover_enabled"]))&&!!e[t+"__hover_enabled"].startsWith("on")}},{key:"isResponsiveEnabled",value:function(e,t){var o=window.ET_Builder.API.Utils._;return!(o.isEmpty(e[t+"_last_edited"])||!o.isString(e[t+"_last_edited"]))&&!!e[t+"_last_edited"].startsWith("on")}},{key:"generateBackgroundCss",value:function(t,o,a){var i=window.ET_Builder.API.Utils._,n=a.normal,r={};i.forEach(n,function(a,n){var r=a;i.isArray(a)&&(r=a.join(","));var l=n,d="",s="",c="",p={desktop:!1,tablet:!1,phone:!1},f=!0,g=!1,u=void 0;try{for(var b,_=["desktop","tablet","phone"].values()[Symbol.iterator]();!(f=(b=_.next()).done);f=!0){var m=b.value,y="",h="",v="",x=!1,k=!1,j=!1,T=!1,w=!1,z=[],L="off",B="desktop"===m;if(B||e.isResponsiveEnabled(o,l+"_color")){var E=e.getInheritedValue(o,l+"_use_color_gradient",m,l);if("on"===E){L=e.getAnyValue(o,l+"_color_gradient_overlays_image",m,"",!0);var R={startColor:e.getAnyValue(o,l+"_color_gradient_start",m,"",!0),endColor:e.getAnyValue(o,l+"_color_gradient_end",m,"",!0),gradientType:e.getAnyValue(o,l+"_color_gradient_type",m,"",!0),linearDirection:e.getAnyValue(o,l+"_color_gradient_direction",m,"",!0),radialDirection:e.getAnyValue(o,l+"_color_gradient_direction_radial",m,"",!0),startPosition:e.getAnyValue(o,l+"_color_gradient_start_position",m,"",!0),endPosition:e.getAnyValue(o,l+"_color_gradient_end_position",m,"",!0)},V=e.getGradient(R);x=!0,z.push(V)}else"off"===E&&(T=!0);var P=e.getInheritedValue(o,l+"_image",m,l),D=""!==P;if(p[m]=D,D){k=!0;var A=!0;B||(A="tablet"===m?p.desktop:p.tablet);var I=e.getAnyValue(o,l+"_size",m,"",!A);""!==I&&(y+="background-size: "+I+";");var C=e.getAnyValue(o,l+"_position",m,"",!A);""!==C&&(y+="background-position: "+C.replace("_"," ")+";");var H=e.getAnyValue(o,l+"_repeat",m,"",!A);""!==H&&(y+="background-repeat: "+H+";");var M=e.getAnyValue(o,l+"_blend",m,"",!A),U=e.getAnyValue(o,l+"_blend",m,"",!0);""!==U&&(""!==M&&(y+="background-blend-mode: "+M+";"),x&&k&&"normal"!==U&&(j=!0,y+="background-color: initial;",h="initial"),c=M),z.push("url("+P+")")}else""===P&&(""!==c&&(y+="background-blend-mode: normal;",c=""),w=!0);if(i.isEmpty(z)?!B&&T&&w&&(v="initial",y+="background-image: initial !important;"):("on"!==L&&(z=z.reverse()),d!==(v=z.join(", "))&&(y+="background-image: "+v+" !important;")),d=v,!j){var S="off"!==e.getInheritedValue(o,l+"_enable_color",m,l)||B?"":"initial";""!==e.getInheritedValue(o,l+"_color",m,l)&&(S=e.getInheritedValue(o,l+"_color",m,l)),h=S,""!==S&&s!==S&&(y+="background-color: "+S+";")}s=h,""!==y&&t.push([{selector:"".concat(r),declaration:"".concat(y),device:"".concat(m)}])}}}catch(e){g=!0,u=e}finally{try{f||null==_.return||_.return()}finally{if(g)throw u}}}),a.hover?r=a.hover:(r=a.normal,i.forEach(r,function(e,t){i.isArray(e)?(i.forEach(e,function(t,o){e[o]=t+":hover"}),r[t]=e):r[t]=e+":hover"})),i.forEach(r,function(a,n){var r=a;i.isArray(a)&&(r=a.join(","));var l=n,d=e.getAnyValue(o,l+"_color_gradient_overlays_image","desktop","off",!0),s={startColor:e.getAnyValue(o,l+"_color_gradient_start","desktop","",!0),endColor:e.getAnyValue(o,l+"_color_gradient_end","desktop","",!0),gradientType:e.getAnyValue(o,l+"_color_gradient_type","desktop","",!0),linearDirection:e.getAnyValue(o,l+"_color_gradient_direction","desktop","",!0),radialDirection:e.getAnyValue(o,l+"_color_gradient_direction_radial","desktop","",!0),startPosition:e.getAnyValue(o,l+"_color_gradient_start_position","desktop","",!0),endPosition:e.getAnyValue(o,l+"_color_gradient_end_position","desktop","",!0)};if(e.isHoverEnabled(o,l+"_color")){var c=[],p="",f=!1,g=!1,u=!1,b=!1,_=!1,m="off",y=e.getInheritedValue(o,l+"_use_color_gradient","hover",l);if("on"===y){var h=s.gradientType,v=s.linearDirection,x=s.radialDirection,k=s.startColor,j=s.endColor,T=s.startPosition,w=s.endPosition,z=e.getHoverRawValue(o,l+"_color_gradient_type",h),L=e.getHoverRawValue(o,l+"_color_gradient_direction",v),B=e.getHoverRawValue(o,l+"_color_gradient_direction_radial",x),E=e.getHoverRawValue(o,l+"_color_gradient_start",k),R=e.getHoverRawValue(o,l+"_color_gradient_end",j),V=e.getHoverRawValue(o,l+"_color_gradient_start_position",T),P=e.getHoverRawValue(o,l+"_color_gradient_end_position",w),D={startColor:""!==E?E:k,endColor:""!==R?R:j,gradientType:""!==z?z:h,linearDirection:""!==L?L:v,radialDirection:""!==B?B:x,startPosition:""!==V?V:T,endPosition:""!==P?P:w};m=e.getHoverRawValue(o,l+"_color_gradient_overlays_image",d);var A=e.getGradient(D);f=!0,c.push(A)}else"off"===y&&(b=!0);var I=e.getInheritedValue(o,l+"_image","hover",l);if(""!==I&&null!==I){g=!0;var C=e.getHoverRawValue(o,l+"_size"),H=i.isUndefined(o[l+"_size"])?"":o[l+"_size"],M=C===H;i.isEmpty(C)&&!i.isEmpty(H)&&(C=H),i.isEmpty(C)||M||(p+="background-size: "+C+";");var U=e.getHoverRawValue(o,l+"_position"),S=i.isUndefined(o[l+"_position"])?"":o[l+"_position"],Q=U===S;i.isEmpty(U)&&!i.isEmpty(S)&&(U=S),i.isEmpty(U)||Q||(p+="background-position: "+U.replace("_"," ")+";");var O=e.getHoverRawValue(o,l+"_repeat"),F=i.isUndefined(o[l+"_repeat"])?"":o[l+"_repeat"],W=O===F;i.isEmpty(O)&&!i.isEmpty(F)&&(O=F),i.isEmpty(O)||W||(p+="background-repeat: "+O+";");var G=e.getHoverRawValue(o,l+"_blend"),$=i.isUndefined(o[l+"_blend"])?"":o[l+"_blend"],q=G===$;i.isEmpty(G)&&!i.isEmpty($)&&(G=$),i.isEmpty(G)||(q||(p+="background-blend-mode: "+G+";"),f&&g&&"normal"!==G&&(u=!0,p+="background-color: initial !important;")),c.push("url("+I+")")}else""===I&&(_=!0);if(i.isEmpty(c)?b&&_&&(p+="background-image: initial !important;"):("on"!==m&&(c=c.reverse()),p+="background-image: "+c.join(", ")+" !important;"),!u){var J=e.getInheritedValue(o,l+"_color","hover",l);""!==(J=""!==J?J:"transparent")&&(p+="background-color: "+J+" !important; ")}""!==p&&t.push([{selector:"".concat(r),declaration:"".concat(p),device:"".concat("hover")}])}})}}],(o=null)&&i(t.prototype,o),n&&i(t,n),e}();t.default=n},function(e,t){},,,,,,,,function(e,t,o){o(1),o(10),o(11),e.exports=o(0)},function(e,t){},function(e,t,o){function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){var t=["et_animated","infinite","et-waypoint","fade","fadeTop","fadeRight","fadeBottom","fadeLeft","slide","slideTop","slideRight","slideBottom","slideLeft","bounce","bounceTop","bounceRight","bounceBottom","bounceLeft","zoom","zoomTop","zoomRight","zoomBottom","zoomLeft","flip","flipTop","flipRight","flipBottom","flipLeft","fold","foldTop","foldRight","foldBottom","foldLeft","roll","rollTop","rollRight","rollBottom","rollLeft","transformAnim"];e.removeClass(t.join(" ")),e.css({"animation-delay":"","animation-duration":"","animation-timing-function":"",opacity:"",transform:""}),e.addClass("et_had_animation"),e.find(".et_pb_post_extra").each(function(){jQuery(this).removeClass(t.join(" ")),jQuery(this).css({"animation-delay":"","animation-duration":"","animation-timing-function":"",opacity:"",transform:""}),jQuery(this).addClass("et_had_animation")})}function n(e){var t=new RegExp("[?&]paged=([^&#]*)","i").exec(e);return t?t[1]:1}jQuery(document).ready(function(e){var t=!0;"undefined"!==typeof window.et_builder_utils_params?"undefined"!==typeof window.et_builder_utils_params.builderType&&"fe"!==window.et_builder_utils_params.builderType&&(t=!1):t=!("object"===a(window.ET_Builder));e("body").find(".el-term-color-field").length>0&&e(".el-term-color-field").wpColorPicker(),e("body").on("click",".el-blog-widget-tabs li:not(.active)",function(){var t=e(this).index();e(this).parent(".el-blog-widget-tabs").find("li").removeClass("active"),e(this).addClass("active"),e(this).parents(".el-blog-widget").find(".el-blog-widget-tabbed-posts .blog-widget-tab-content").removeClass("active"),e(this).parents(".el-blog-widget").find(".el-blog-widget-tabbed-posts .blog-widget-tab-content").eq(t).addClass("active")}),e(".el-dbe-blog-extra").find(".el-isotope-container").length>0&&(e(".el-dbe-blog-extra .el-isotope-container").isotope({itemSelector:".el-isotope-item",layoutMode:"masonry",percentPosition:!0,resize:!0}),e(".el-dbe-blog-extra .el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){e(".el-dbe-blog-extra .el-isotope-container").isotope("layout")})),e("body").on("click",".el-dbe-category-mobile-menu, .el-dbe-mobile-active-category",function(){e(this).parents(".el-dbe-filterable-categories").find(".el-dbe-post-categories").slideToggle()}),e("body").on("click",".el-dbe-filterable-categories.active .el-dbe-post-categories li",function(){e(this).parents(".el-dbe-post-categories").slideToggle()}),t?(e("body").on("click",".el-dbe-post-categories a",function(t){if(t.preventDefault(),e(this).hasClass("el-dbe-active-category")||e(this).hasClass("el-dbe-disabled"))return!1;var o,a=e(this),n=a.parents(".et_pb_blog_extras").find(".el-dbe-blog-extra"),r=a.attr("href"),l=parseInt(a.data("term-id")),d=(window.location.href,a.closest(".et_pb_module").attr("class").split(" ")),s="",c=["et_animated","infinite","et-waypoint","fade","fadeTop","fadeRight","fadeBottom","fadeLeft","slide","slideTop","slideRight","slideBottom","slideLeft","bounce","bounceTop","bounceRight","bounceBottom","bounceLeft","zoom","zoomTop","zoomRight","zoomBottom","zoomLeft","flip","flipTop","flipRight","flipBottom","flipLeft","fold","foldTop","foldRight","foldBottom","foldLeft","roll","rollTop","rollRight","rollBottom","rollLeft","transformAnim"];a.parents(".el-dbe-filterable-categories").find(".el-dbe-mobile-active-category").text(a.text()),a.parents(".el-dbe-post-categories").find("a").removeClass("el-dbe-active-category"),a.addClass("el-dbe-active-category"),a.parents(".el-dbe-post-categories").find("a").addClass("el-dbe-disabled"),e.each(d,function(t,o){-1===e.inArray(o,c)&&"et_had_animation"!==o&&""!==o.trim()&&(s+="."+o)}),i(o=e(s)),n.fadeTo("300",.2,function(){jQuery.ajax({type:"POST",url:r,data:{post_category:l,el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce},success:function(t){var i=jQuery(t),r=i.find(s+" .el-dbe-blog-extra").html();"undefined"==typeof r&&(r=i.find(s+" .entry")),o.find(".el-dbe-blog-extra").html(r),o.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule(),o.find(".el-dbe-blog-extra .el-isotope-container").length>0&&(o.find(".el-dbe-blog-extra .el-isotope-container").isotope({itemSelector:".el-isotope-item",layoutMode:"masonry",percentPosition:!0,resize:!0}),o.find(".el-dbe-blog-extra .el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){o.find(".el-dbe-blog-extra .el-isotope-container").isotope("layout")})),n.fadeTo("300",1),a.parents(".el-dbe-post-categories").find("a").removeClass("el-dbe-disabled"),e("html, body").animate({scrollTop:o.offset().top-(e("#main-header").innerHeight()+e("#top-header").innerHeight()+50)})},error:function(e){404===e.status&&jQuery("body.error404").length}})})}),e("body").on("click",".el-load-more",function(t){t.preventDefault();var o,a=e(this),n=a.parents(".el-dbe-blog-extra"),r=a.attr("href"),l=(window.location.href,a.closest(".et_pb_module").attr("class").split(" ")),d="",s=a.css("color"),c=["et_animated","infinite","et-waypoint","fade","fadeTop","fadeRight","fadeBottom","fadeLeft","slide","slideTop","slideRight","slideBottom","slideLeft","bounce","bounceTop","bounceRight","bounceBottom","bounceLeft","zoom","zoomTop","zoomRight","zoomBottom","zoomLeft","flip","flipTop","flipRight","flipBottom","flipLeft","fold","foldTop","foldRight","foldBottom","foldLeft","roll","rollTop","rollRight","rollBottom","rollLeft","transformAnim"],p=0;a.remove(),n.parents(".et_pb_blog_extras").find(".el-dbe-active-category").length>0&&(p=parseInt(n.parents(".et_pb_blog_extras").find(".el-dbe-active-category").data("term-id"))),n.find(".ajax-pagination").append('<span class="el-loader" style="color: '+s+';">Loading...</span>'),e.each(l,function(t,o){-1===e.inArray(o,c)&&"et_had_animation"!==o&&""!==o.trim()&&(d+="."+o)}),i(o=e(d));return jQuery.ajax({type:"POST",url:r,data:{post_category:p,el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce},success:function(e){var t=jQuery(e),a="";if(n.find(".el-loader").fadeOut("1500"),n.find(".ajax-pagination").remove(),t.find(d+" .el-dbe-blog-extra .el-isotope-container").length>0){var i=jQuery(t.find(d+" .el-dbe-blog-extra .el-isotope-container").html()),r='<div class="ajax-pagination">'+t.find(d+" .el-dbe-blog-extra .ajax-pagination").html()+"</div>";n.find(".el-isotope-container").append(i).isotope("appended",i),n.find(".el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){n.find(".el-isotope-container").isotope("layout")}),n.append(r),o.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()}else a=t.find(d+" .el-dbe-blog-extra").html(),o.find(".el-dbe-blog-extra").append(a),o.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()},error:function(e){404===e.status&&jQuery("body.error404").length}}),!1}),e("body").on("click",".el-show-less",function(t){t.preventDefault();var o,a=e(this),n=a.parents(".el-dbe-blog-extra"),r=a.attr("href"),l=(window.location.href,a.closest(".et_pb_module").attr("class").split(" ")),d="",s=a.css("color"),c=["et_animated","infinite","et-waypoint","fade","fadeTop","fadeRight","fadeBottom","fadeLeft","slide","slideTop","slideRight","slideBottom","slideLeft","bounce","bounceTop","bounceRight","bounceBottom","bounceLeft","zoom","zoomTop","zoomRight","zoomBottom","zoomLeft","flip","flipTop","flipRight","flipBottom","flipLeft","fold","foldTop","foldRight","foldBottom","foldLeft","roll","rollTop","rollRight","rollBottom","rollLeft","transformAnim"],p=0;return a.remove(),n.parents(".et_pb_blog_extras").find(".el-dbe-active-category").length>0&&(p=parseInt(n.parents(".et_pb_blog_extras").find(".el-dbe-active-category").data("term-id"))),n.find(".ajax-pagination").append('<span class="el-loader" style="color: '+s+';">Loading...</span>'),e.each(l,function(t,o){-1===e.inArray(o,c)&&"et_had_animation"!==o&&""!==o.trim()&&(d+="."+o)}),i(o=e(d)),o.fadeTo("300",.2,function(){jQuery.ajax({type:"POST",url:r,data:{post_category:p,el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce},success:function(t){var a=jQuery(t).find(d+" .el-dbe-blog-extra");o.find(".el-dbe-blog-extra").replaceWith(a),o.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule(),o.find(".el-dbe-blog-extra .el-isotope-container").length>0&&(o.find(".el-dbe-blog-extra .el-isotope-container").isotope({itemSelector:".el-isotope-item",layoutMode:"masonry",percentPosition:!0,resize:!0}),o.find(".el-dbe-blog-extra .el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){o.find(".el-dbe-blog-extra .el-isotope-container").isotope("layout")})),o.fadeTo("300",1),e("html, body").animate({scrollTop:o.offset().top-(e("#main-header").innerHeight()+e("#top-header").innerHeight()+50)})},error:function(e){404===e.status&&jQuery("body.error404").length}})}),!1}),e("body").on("click",".el-blog-pagination .wp-pagenavi a,.el-blog-pagination a",function(t){t.preventDefault();var o,a=e(this),n=a.attr("href"),r=(window.location.href,a.closest(".et_pb_module").attr("class").split(" ")),l="",d=["et_animated","infinite","et-waypoint","fade","fadeTop","fadeRight","fadeBottom","fadeLeft","slide","slideTop","slideRight","slideBottom","slideLeft","bounce","bounceTop","bounceRight","bounceBottom","bounceLeft","zoom","zoomTop","zoomRight","zoomBottom","zoomLeft","flip","flipTop","flipRight","flipBottom","flipLeft","fold","foldTop","foldRight","foldBottom","foldLeft","roll","rollTop","rollRight","rollBottom","rollLeft","transformAnim"],s=0;return a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").length>0&&(s=parseInt(a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").data("term-id"))),e.each(r,function(t,o){-1===e.inArray(o,d)&&"et_had_animation"!==o&&""!==o.trim()&&(l+="."+o)}),i(o=e(l)),o.fadeTo("300",.2,function(){jQuery.ajax({type:"POST",url:n,data:{post_category:s,el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce},success:function(t){var a=jQuery(t),n=a.filter("#et-builder-module-design-cached-inline-styles"),r=a.find(l+" .el-dbe-blog-extra").prepend(n);i(r),o.find(".el-dbe-blog-extra").replaceWith(r),o.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule(),o.find(".el-isotope-container").length>0&&(o.find(".el-isotope-container").isotope({itemSelector:".el-isotope-item",layoutMode:"masonry",percentPosition:!0,resize:!0}),o.find(".el-dbe-blog-extra .el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){o.find(".el-dbe-blog-extra .el-isotope-container").isotope("layout")})),o.fadeTo("300",1),e("html, body").animate({scrollTop:o.offset().top-(e("#main-header").innerHeight()+e("#top-header").innerHeight()+50)})},error:function(e){404===e.status&&jQuery("body.error404").length}})}),!1})):(e("body").on("click",".el-dbe-post-categories a",function(t){if(t.preventDefault(),e(this).hasClass("el-dbe-active-category")||e(this).hasClass("el-dbe-disabled"))return!1;var o=e(this),a=o.parents().find(".el-dbe-blog-extra");$termId=o.data("category"),blogProps=a.next(".el-blog-params").find(".divi-blog-extras-props").val(),o.parents(".el-dbe-filterable-categories").find(".el-dbe-mobile-active-category").text(o.text()),o.parents(".el-dbe-post-categories").find("a").removeClass("el-dbe-active-category"),o.addClass("el-dbe-active-category"),o.parents(".el-dbe-post-categories").find("a").addClass("el-dbe-disabled"),a.fadeTo("300",.2,function(){e.ajax({type:"POST",url:DiviBlogExtrasFrontendData.ajaxurl,data:{action:"el_load_posts",el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce,props:blogProps,post_category:$termId},success:function(t){if(""!=t){if(o.parents(".el-dbe-post-categories").find("a").removeClass("el-dbe-active-category"),o.parents(".el-dbe-post-categories").find("a").removeClass("el-dbe-disabled"),o.addClass("el-dbe-active-category"),a.find(".el-isotope-container").length>0){var i=e(t[0]);a.find(".el-isotope-container").html(i),a.find(".el-isotope-container").html(i).isotope("layout").isotope("reloadItems"),a.find(".el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){a.find(".el-isotope-container").isotope("layout")}),a.find(".el-blog-pagination").remove(),a.find(".ajax-pagination").remove(),a.append(t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()}else a.html(t[0]+t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule();a.fadeTo("300",1)}},error:function(){}})})}),e("body").on("click",".el-load-more",function(t){t.preventDefault();var o=e(this),a=o.parents(".el-dbe-blog-extra"),i=n(o.attr("href")),r=a.next(".el-blog-params").find(".divi-blog-extras-props").val(),l='<span class="el-loader" style="color:'+o.css("color")+';">Loading...</span>',d=0;a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").length>0&&(d=a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").data("category")),o.remove(),a.find(".ajax-pagination").append(l),jQuery.ajax({type:"POST",url:DiviBlogExtrasFrontendData.ajaxurl,data:{action:"el_load_posts",el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce,current_page:i,props:r,post_category:d},success:function(t){if(a.find(".el-loader").fadeOut("1500"),a.find(".ajax-pagination").remove(),a.find(".el-isotope-container").length>0){var o=e(t[0]);a.find(".el-isotope-container").append(o).isotope("appended",o),a.find(".el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){a.find(".el-isotope-container").isotope("layout")}),a.append(t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()}else a.append(t[0]+t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()},error:function(e){location.reload()}})}),e("body").on("click",".el-show-less",function(t){t.preventDefault();var o=e(this),a=o.parents(".el-dbe-blog-extra"),i=n(o.attr("href")),r=a.next(".el-blog-params").find(".divi-blog-extras-props").val(),l='<span class="el-loader" style="color:'+o.css("color")+';">Loading...</span>',d=0;a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").length>0&&(d=a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").data("category")),o.remove(),a.find(".ajax-pagination").append(l),jQuery.ajax({type:"POST",url:DiviBlogExtrasFrontendData.ajaxurl,data:{action:"el_load_posts",el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce,current_page:i,props:r,post_category:d},success:function(t){if(a.find(".el-loader").fadeOut("1500"),a.find(".ajax-pagination").remove(),a.find(".el-isotope-container").length>0){var o=e(t[0]);a.find(".el-isotope-container").html(o),a.find(".el-isotope-container").isotope("layout").isotope("reloadItems"),a.find(".el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){a.find(".el-isotope-container").isotope("layout")}),a.append(t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()}else a.html(t[0]+t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule();e("html, body").animate({scrollTop:a.offset().top-(e("#main-header").innerHeight()+e("#top-header").innerHeight())})},error:function(e){location.reload()}})}),e("body").on("click",".el-blog-pagination .wp-pagenavi a,.el-blog-pagination a",function(t){t.preventDefault();var o=e(this),a=o.parents(".el-dbe-blog-extra"),i=n(o.attr("href")),r=a.next(".el-blog-params").find(".divi-blog-extras-props").val(),l=o.closest(".et_pb_module"),d=0;return a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").length>0&&(d=a.parents(".et_pb_blog_extras").find(".el-dbe-active-category").data("category")),l.fadeTo("300",.2,function(){jQuery.ajax({type:"POST",url:DiviBlogExtrasFrontendData.ajaxurl,data:{action:"el_load_posts",el_dbe_nonce:DiviBlogExtrasFrontendData.ajax_nonce,current_page:i,props:r,post_category:d},success:function(t){if(a.find(".el-blog-pagination").remove(),a.find(".el-isotope-container").length>0){var o=e(t[0]);a.find(".el-isotope-container").html(o),a.find(".el-isotope-container").html(o).isotope("layout").isotope("reloadItems"),a.find(".el-isotope-container").imagesLoaded({background:".post-media"}).progress(function(){a.find(".el-isotope-container").isotope("layout")}),a.append(t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule()}else a.html(t[0]+t[1]),a.find(".jetpack-lazy-image").length>0&&jetpackLazyImagesModule();l.fadeTo("300",1),e("html, body").animate({scrollTop:l.offset().top-(e("#main-header").innerHeight()+e("#top-header").innerHeight())})},error:function(e){location.reload()}})}),!1})),e("body").find(".el-dbe-blog-extra .post-categories a").each(function(){e(this).data("color-hover")&&(e(this).on("mouseenter",function(){var t=e(this).data("color-hover").trim(),o=e(this).data("bgcolor-hover").trim(),a="";"undefined"!==typeof t&&""!==t&&(a+="color:"+(t+=" !important;")),"undefined"!==typeof o&&""!==o&&(a+="background-color:"+(o+=" !important;"),e(this).parents(".et_pb_post_extra").hasClass("el_dbe_block_extended")&&(a+="border-color:"+o)),e(this).attr("style",a)}),e(this).on("mouseout",function(){var t=e(this).data("color").trim(),o=e(this).data("bgcolor").trim(),a="";"undefined"!==typeof t&&""!==t&&(a+="color:"+(t+=" !important;")),"undefined"!==typeof o&&""!==o&&(a+="background-color:"+(o+=" !important;"),e(this).parents(".et_pb_post_extra").hasClass("el_dbe_block_extended")&&(a+="border-color:"+o)),e(this).attr("style",a)}))}),e(window).resize(function(){e(this).width()>980?e(".el-dbe-filterable-categories").each(function(){e(this).find(".el-dbe-post-categories").css("display","block")}):e(".el-dbe-filterable-categories").each(function(){e(this).find(".el-dbe-post-categories").css("display","none")})})})}]);