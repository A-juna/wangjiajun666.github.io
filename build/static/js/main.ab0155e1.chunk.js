(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{117:function(e,t,a){e.exports=a(241)},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},168:function(e,t,a){},173:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},225:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(14),r=a.n(i),c=(a(122),a(123),a(7)),l=a(8),s=a(10),u=a(9),m=a(11),h=a(249),p=a(116),d=a(250),f=a(248),g=(a(124),a(78),a(54)),b=a.n(g),v=(a(91),a(27)),E=a.n(v),y=(a(168),a(251)),k=(a(169),a(105)),j=a.n(k),O=(a(40),a(26)),w=a.n(O),S=(a(173),new(a(21).a)),L=(a(92),a(22)),x=a.n(L),C=a(32),N=a.n(C),F="http://47.93.241.71:3000/",W="";N.a.defaults.baseURL=F,N.a.defaults.headers.common.token=W,N.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",N.a.interceptors.request.use((function(e){return W=sessionStorage.token?sessionStorage.token:"",e.headers.token=W,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25---\u7f51\u7edc\u9519\u8bef!",x.a.offline(t,1),Promise.reject(e)})),N.a.interceptors.response.use((function(e){return console.log(e),setTimeout((function(){var t;t=e.data.msg,x.a.hide(),x.a.success(t,1)})),e.data.code,e}),(function(e){var t;return t="\u670d\u52a1\u5668error-\u54cd\u5e94\u5931\u8d25!!!",x.a.hide(),x.a.fail(t,1),Promise.reject(e)}));var M,A,D,z,P,T,q,I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).goSearch=function(){S.push("/search")},e.gofanhui=function(){S.go(-1)},e.state={isFanhui:!1,isSearch:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=location.hash.split("#/")[1];"search"!=e&&"login"!=e||this.setState({isFanhui:!0,isSearch:!1}),"ilike"!=e&&"ishoucang"!=e||this.setState({isFanhui:!0})}},{key:"render",value:function(){var e=this.props,t=e.title,a=(e.show,this.state),n=a.isFanhui,i=a.isSearch;return o.a.createElement("div",null,o.a.createElement(j.a,{mode:"light",icon:n&&o.a.createElement(w.a,{type:"left",onClick:this.gofanhui}),onLeftClick:function(){return console.log("onLeftClick")},rightContent:[i&&o.a.createElement(w.a,{onClick:this.goSearch,key:"0",type:"search",style:{marginRight:"16px"}})]},t))}}]),t}(n.Component),U=a(41),B=a(44),J=a(45),R=(a(193),a(12)),$=new(M=function e(){Object(c.a)(this,e),Object(B.a)(this,"booksList",A,this),Object(B.a)(this,"wordsList",D,this),Object(B.a)(this,"getBookList",z,this),Object(B.a)(this,"getWordList",P,this)},A=Object(J.a)(M.prototype,"booksList",[R.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=Object(J.a)(M.prototype,"wordsList",[R.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),z=Object(J.a)(M.prototype,"getBookList",[R.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){N.a.post("/react/getWords",{id:t}).then((function(t){e.booksList=t.data.result}))}}}),P=Object(J.a)(M.prototype,"getWordList",[R.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){N.a.post("/react/getWordList",{}).then((function(t){e.wordsList=t.data.result}))}}}),M),H=Object(U.a)(T=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={words:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){!$.wordsList.lenght>0&&$.getWordList(),console.log($.wordsList.lenght)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(I,{title:"\u9996\u9875",show:!0}),o.a.createElement(E.a,{size:"xl"}),o.a.createElement(b.a,{className:"space-carousel",autoplay:!1,infinite:!1,frameOverflow:"hidden",cellSpacing:10,slideWidth:.8,dots:!1},$.wordsList.map((function(e,t){return o.a.createElement(y.a,{to:"/detail/"+e.id,key:t,style:{display:"block",position:"relative",height:"10rem",width:"100%",boxShadow:"2px 1px 1px rgba(0, 0, 0, 0.2)"}},o.a.createElement("img",{src:e.img,alt:"",style:{width:"100%",height:"3rem"}}),o.a.createElement("div",{style:{background:"#fff",height:"7rem",color:"#000"}},o.a.createElement("section",{className:"hitokoto"},e.hitokoto),o.a.createElement("h2",{className:"from"},"-\u300a",e.from,"\u300b-"),o.a.createElement("p",{className:"text"},"#",e.type.text),o.a.createElement("p",{className:"book-info"},o.a.createElement("span",null,e.creator),o.a.createElement("span",null,"\u6458\u6284\u4e8e"),o.a.createElement("span",null,e.from))))}))))}}]),t}(n.Component))||T,G=(a(195),a(108)),K=a.n(G),Q=(a(203),a(204),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.conentList;return o.a.createElement("div",{style:{paddingTop:40}},e.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement(b.a,{className:"space-carousel",autoplay:!1,infinite:!1,frameOverflow:"hidden",cellSpacing:10,slideWidth:.8,dots:!1},o.a.createElement(y.a,{to:"/detail/"+e.id,style:{display:"block",position:"relative",height:"6rem",width:"100%",boxShadow:"2px 1px 1px rgba(0, 0, 0, 0.2)"}},o.a.createElement("header",{style:{color:"#000",margin:-5,width:311,transform:"translate3d(4.5px, 5px, 0px)",boxShadow:"rgba(3, 0, 0, 0.2) 6px 1px -2px"},className:"head"},o.a.createElement("img",{className:"touxiang",style:{width:"100%",height:"4rem"},src:e.img,alt:""}),o.a.createElement("span",null,e.creator)),o.a.createElement("img",{src:e.img,alt:"",style:{width:"100%",height:"3rem"},className:"list-img"}),o.a.createElement("div",{className:"list-box-contenet",style:{background:"#fff",height:"6rem",color:"#000"}},o.a.createElement("section",{className:"list-hitokoto"},e.hitokoto),o.a.createElement("h2",{className:"list-from"},"-\u300a",e.from,"\u300b-"),o.a.createElement("p",{className:"list-text"},"#",e.type.text)))))})))}}]),t}(n.Component)),V=[{title:"\u52a8\u753b"},{title:"\u6f2b\u753b"},{title:"\u6e38\u620f"},{title:"\u5c0f\u8bf4"}],X=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={tabs:V,wordList:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/react/getWordList",{}).then((function(t){var a=t.data.result;e.setState({wordList:a})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(I,{title:"\u793e\u533a",show:!0,style:{borderBottom:"1px solid #000"}}),o.a.createElement(K.a,{tabs:V,initalPage:"t2"},V.map((function(t,a){return o.a.createElement(Q,{key:a,type:t.title,conentList:e.state.wordList.filter((function(e){return e.type.text==t.title}))})}))))}}]),t}(n.Component),Y=(a(205),a(110)),Z=a.n(Y),_=(a(208),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={wordList:[],refreshing:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/react/tuijianbook",{}).then((function(t){var a=t.data.result;e.setState({wordList:a})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(I,{title:"\u5708\u5b50",show:!0}),o.a.createElement(Z.a,{damping:60,ref:function(t){return e.ptr=t},style:{height:this.state.height,overflow:"auto"},indicator:{deactivate:"\u4e0a\u62c9\u53ef\u4ee5\u5237\u65b0"},direction:"down",refreshing:this.state.refreshing,onRefresh:function(){e.setState({refreshing:!0}),console.log("\u4e0b\u62c9\u5237\u65b0..."),setTimeout((function(){N.a.get("/react/tuijianbook",{}).then((function(t){var a=t.data.result;e.setState({wordList:a})})),e.setState({refreshing:!1})}),600)}},o.a.createElement(Q,{conentList:this.state.wordList})),o.a.createElement("div",{className:"bottom-txt"},"\u6211\u4e5f\u662f\u6709\u5e95\u7ebf\u7684"))}}]),t}(n.Component)),ee=(a(103),a(42)),te=a.n(ee),ae=(a(210),a(111)),ne=(a(211),a(112)),oe=a.n(ne),ie=(a(74),a(38)),re=a.n(ie),ce=(a(218),re.a.Item),le=oe.a.alert,se="http://47.93.241.71/Ajun/img/login-title.c0354687.jpg",ue=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).quitLogin=function(){sessionStorage.token="",S.push("/login")},e.showAlert=function(){var t=le("","\u662f\u5426\u9000\u51fa\u767b\u5f55",[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")},style:"default"},{text:"\u786e\u5b9a",onPress:function(){return e.quitLogin()}}]);setTimeout((function(){console.log("auto close"),t.close()}),5e5)},e.getPic=function(){N.a.post("/react/getAvatarPic").then((function(t){t.data.type?e.setState({imgUrl:t.data.path.replace("public",F)}):e.setState({imgUrl:se})}))},e.startSend=function(){e.file.click()},e.uploadFile=function(){console.log("start upload");var t=e.file.files[0],a=new FormData;a.append("avatar",t),N()({url:"/react/uploadavatar",method:"POST",data:a}).then((function(t){e.setState({imgUrl:t.data.path.replace("public",F)}),localStorage.imgUrl=t.data.path.replace("public",F)}))},e.state={txt:"",imgUrl:se},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("userInfo");e?(Object(ae.a)("userInfo"),(e=JSON.parse(e)).mobile==sessionStorage.mobile?this.setState({imgUrl:e.path}):this.getPic()):this.getPic()}},{key:"render",value:function(){var e=this;console.log(S);var t=this.props.txt;return o.a.createElement("div",null,o.a.createElement("div",{className:"user-info"},o.a.createElement("div",{className:"avatar"},o.a.createElement("img",{onClick:this.startSend,style:{width:90,height:90},src:this.state.imgUrl,alt:""}),o.a.createElement("input",{type:"file",onChange:this.uploadFile,ref:function(t){return e.file=t},style:{display:"none"}}),o.a.createElement("p",{style:{color:"#1E1E1E",fontWeight:700}},"\u6b22\u8fce\u56de\u6765\uff1a",t))),o.a.createElement(re.a,{renderHeader:function(){return"\u6211\u7684"},className:"my-list"},o.a.createElement(ce,{arrow:"horizontal",platform:"android",multipleLine:!0,onClick:function(){S.push("/ilike")}},"\u6211\u559c\u6b22\u7684"),o.a.createElement(ce,{arrow:"horizontal",multipleLine:!0,onClick:function(){S.push("/ishoucang")},platform:"android"},"\u6211\u6536\u85cf\u7684")),o.a.createElement(re.a,{renderHeader:function(){return"\u64cd\u4f5c"},className:"my-list"},o.a.createElement(ce,{arrow:"horizontal",platform:"android",multipleLine:!0,onClick:function(){}},"\u6e05\u9664\u7f13\u5b58"),o.a.createElement(ce,{arrow:"horizontal",multipleLine:!0,onClick:this.showAlert,platform:"android"},"\u9000\u51fa\u767b\u5f55")))}}]),t}(n.Component),me=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).goLogin=function(){console.log(111),S.push("/login")},e.state={userinfoFalg:!!sessionStorage.token},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.post("react/getMobile").then((function(t){t.data.type&&e.setState({mobile:t.data.result})}))}},{key:"render",value:function(){var e=this.state.userinfoFalg;return o.a.createElement("div",null,o.a.createElement(I,{title:"\u4e2a\u4eba\u4e2d\u5fc3",show:!0}),!e&&o.a.createElement("div",{className:"my-box"},o.a.createElement("h2",{className:"title"},"\u767b\u5f55\u540e\uff0c\u5448\u73b0\u66f4\u591a\u7cbe\u5f69\u5185\u5bb9"),o.a.createElement(te.a,{onClick:this.goLogin,className:"go-login",type:"primary",inline:!0,style:{marginRight:"4px"}},"\u53bb\u767b\u5f55")),e&&o.a.createElement(ue,{txt:this.state.mobile}))}}]),t}(n.Component),he=(a(219),[{path:"/main/home",name:"home",icon:"icon-home"},{path:"/main/shequ",name:"shequ",icon:"icon-svgclassifyselect"},{path:"/main/swop",name:"swop",icon:"icon-loading"},{path:"/main/my",name:"my",icon:"icon-minefill"}]),pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={foots:he},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,this.state.foots.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement(y.a,{to:e.path,activeClassName:"nav-active"},o.a.createElement("i",{className:"iconfont "+e.icon})))})))}}]),t}(n.Component),de=(a(113),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(p.a,{path:"/main",exact:!0,render:function(){return o.a.createElement(f.a,{to:"/main/home"})}}),o.a.createElement(p.a,{path:"/main/home",component:H}),o.a.createElement(p.a,{path:"/main/shequ",component:X}),o.a.createElement(p.a,{path:"/main/swop",component:_}),o.a.createElement(p.a,{path:"/main/my/",component:me}),o.a.createElement(p.a,{render:function(){return o.a.createElement(f.a,{to:"/main/home"})}})),o.a.createElement(pe,null))}}]),t}(n.Component)),fe=(a(220),a(114)),ge=a.n(fe),be=(a(225),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",wordsList:[]},a.onChange=function(e){a.setState({value:e})},a.onSubmit=function(e){var t=e.replace(/\s/g,"");t&&N.a.get("/react/getWordList",{params:{keyword:t}}).then((function(e){var t=e.data.result;a.setState({wordsList:t})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.wordsList.length),o.a.createElement("div",null,o.a.createElement(I,{title:"\u641c\u7d22",show:!0}),o.a.createElement(ge.a,{value:this.state.value,placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u5b57",onChange:this.onChange,onSubmit:function(t){return e.onSubmit(t)}}),o.a.createElement(Q,{conentList:this.state.wordsList}),o.a.createElement("p",{style:{display:this.state.wordsList.length>0?"none":"block"},className:"search-content"},"\u6682\u65f6\u6ca1\u6709\u60a8\u8981\u7684\u5185\u5bb9\u54e6\uff01"))}}]),t}(n.Component)),ve=(a(226),a(115)),Ee=a.n(ve),ye=(a(228),a(76)),ke=a.n(ye),je=(a(236),/^1(3|5|7|8|9)\d{9}$/),Oe=/^\d{4}$/,we=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).checkMobile=function(t){e.state.toggle&&e.setState({mobileFlag:je.test(t),loginFlag:Oe.test(e.code.state.value)&&je.test(t)})},e.checkCode=function(t){e.setState({loginFlag:Oe.test(t)&&je.test(e.mobile.state.value)})},e.todoLogin=function(){N.a.post("react/checkCode",{mobile:e.mobile.state.value,code:e.code.state.value}).then((function(t){t.data.type?(sessionStorage.token=t.data.token,sessionStorage.mobile=e.mobile.state.value,S.push("/main/home")):sessionStorage.token=""}))},e.sendCode=function(){N.a.post("/react/sendCode",{mobile:e.mobile.state.value}).then((function(e){})),e.compoutedTime()},e.compoutedTime=function(){e.setState({count:--e.state.count,txt:"\u5012\u8ba1\u65f6".concat(e.state.count," S"),mobileFlag:!1});var t=setInterval((function(){e.state.count>0?e.setState({count:--e.state.count,txt:"\u5012\u8ba1\u65f6".concat(e.state.count," S"),mobileFlag:!1,toggle:!1}):(clearInterval(t),e.setState({count:60,txt:"\u53d1\u9001\u9a8c\u8bc1\u7801",mobileFlag:!0,toggle:!0}))}),1e3)},e.state={count:60,txt:"\u53d1\u9001\u9a8c\u8bc1\u7801",mobileFlag:!1,loginFlag:!1,toggle:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.txt,n=t.mobileFlag,i=t.loginFlag;return o.a.createElement("div",{className:"login-box"},o.a.createElement(I,{title:"\u767b\u5f55",show:!0}),o.a.createElement("div",{className:"login-centent"},o.a.createElement(E.a,null),o.a.createElement(Ee.a,null,o.a.createElement(re.a,null,o.a.createElement(E.a,null),o.a.createElement(ke.a,{type:"tel",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",clear:!0,ref:function(t){return e.mobile=t},onChange:this.checkMobile},"\u624b\u673a\u53f7"),o.a.createElement(E.a,null),o.a.createElement(ke.a,{type:"number",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",ref:function(t){return e.code=t},onChange:this.checkCode},"\u9a8c\u8bc1\u7801"),o.a.createElement(te.a,{style:{height:42},onClick:this.sendCode,disabled:!n,type:"warning",className:"l-btn",size:"large",inline:!0},a),o.a.createElement(E.a,null)),o.a.createElement(E.a,null),o.a.createElement(te.a,{type:"primary",onClick:this.todoLogin,disabled:!i},"\u767b\u5f55"))))}}]),t}(n.Component),Se=(a(237),[{path:"",name:"",icon:"icon-xihuan"},{path:"",name:"",icon:"icon-xiaoxi"},{path:"",name:"",icon:"icon-shuqian"}]),Le=Object(U.a)(q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={foots:Se,likeFalg:!0,wid:"",typeFlag:0,typeShoucang:0},a.myWord=function(e){a.setState({typeFlag:e})},a.myShoucang=function(e){a.setState({typeShoucang:e})},a.fanhui=function(){S.go(-1)},a.like=function(e){var t=a.state.wid;N.a.get(e,{params:{id:t,word:$.booksList}}).then((function(t){var n=t.data.type;console.log(t.data.msg),"/react/getLike"==e?a.myWord(n):a.myShoucang(n)}))},a.clickType=function(){a.like("/react/getLike")},a.clicShoucang=function(){a.like("/react/getShoucang")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.setState({wid:t}),!$.booksList.length>0&&$.getBookList(t),N.a.get("/react/ilike",{params:{id:t}}).then((function(t){var a=t.data.type;e.myWord(a)})),N.a.post("/react/ishoucang",{id:t}).then((function(t){var a=t.data.type;e.myShoucang(a)}))}},{key:"render",value:function(){var e=this,t=$.booksList;return o.a.createElement("div",null,o.a.createElement("header",{className:"head"},o.a.createElement("img",{className:"touxiang",style:{width:"100%",height:"4rem"},src:t.img,alt:""}),o.a.createElement("span",null,t.creator)),o.a.createElement("div",{className:"content"},o.a.createElement("img",{className:"content-img",src:t.img,alt:""}),o.a.createElement("section",null,o.a.createElement("p",null,t.hitokoto),o.a.createElement("h2",null,"-\u300a",t.from,"\u300b-"))),o.a.createElement("div",{className:"detail-foot"},o.a.createElement(w.a,{onClick:this.fanhui,style:{margin:"12 0 0 5"},type:"left"}),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("i",{style:{color:this.state.typeFlag?"#000":"dimgray"},onClick:function(){return e.clickType()},className:"iconfont icon-xihuan"}))),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("i",{className:"iconfont icon-xiaoxi"}))),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("i",{style:{color:this.state.typeShoucang?"#000":"dimgray"},onClick:function(){return e.clicShoucang()},className:"iconfont icon-shuqian"})))))}}]),t}(n.Component))||q,xe=(a(238),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={ilikes:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];N.a.post("/react/getWordInfo").then((function(a){for(var n=0;n<a.data.result.length;n++)t.push(JSON.parse(a.data.result[n].word));e.setState({ilikes:t})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(I,{title:"\u6211\u559c\u6b22\u7684"}),o.a.createElement(Q,{conentList:this.state.ilikes}))}}]),t}(n.Component)),Ce=(a(239),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={iShouCang:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];N.a.post("/react/getWordShou").then((function(a){for(var n=0;n<a.data.result.length;n++)t.push(JSON.parse(a.data.result[n].word));e.setState({iShouCang:t})}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(I,{title:"\u6211\u7684\u6536\u85cf"}),o.a.createElement(Q,{conentList:this.state.iShouCang}))}}]),t}(n.Component)),Ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,{path:"/main",component:de}),o.a.createElement(p.a,{path:"/search",component:be}),o.a.createElement(p.a,{path:"/login",component:we}),o.a.createElement(p.a,{path:"/detail/:id?",component:Le}),o.a.createElement(p.a,{path:"/ilike",component:xe}),o.a.createElement(p.a,{path:"/ishoucang",component:Ce}),o.a.createElement(p.a,{render:function(){return o.a.createElement(f.a,{to:"main/home"})}}))}}]),t}(n.Component),Fe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{basename:""},o.a.createElement(p.a,{component:Ne}))}}]),t}(n.Component);var We=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(240);r.a.render(o.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[117,1,2]]]);
//# sourceMappingURL=main.ab0155e1.chunk.js.map