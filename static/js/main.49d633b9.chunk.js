(this["webpackJsonpchatbox-app"]=this["webpackJsonpchatbox-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(50)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(11),r=a.n(o),c=(a(33),a(27)),i=a(5),l=a(6),u=a(8),m=a(7),p=(a(34),a(35),a(51)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={message:"",length:e.props.length,connect:!0},e.createMessage=function(){var t=e.props,a=t.addMessage,n=t.pseudo,s=t.length;a({pseudo:n,message:e.state.message}),e.setState({message:"",length:s})},e.handelChange=function(t){var a=t.target.value,n=e.props.length-a.length;e.setState({message:a,length:n})},e.handelKeyUp=function(t){"Enter"===t.key&&e.createMessage()},e.handelSubmit=function(t){t.preventDefault(),e.createMessage()},e.deconnection=function(){e.setState({connect:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){return this.state.connect?s.a.createElement("div",null,s.a.createElement("form",{className:"form",onSubmit:this.handelSubmit},s.a.createElement("textarea",{value:this.state.message,onKeyUp:this.handelKeyUp,required:!0,maxLength:this.props.length,onChange:this.handelChange}),s.a.createElement("div",{className:"info"},this.state.length),s.a.createElement("button",{type:"submit"},"Envoyer!")),s.a.createElement("button",{type:"submit",onClick:this.deconnection},"Deconnecter")):s.a.createElement(p.a,{push:!0,to:"/chatbox-app/"})}}]),a}(n.Component),d=function(e){var t=e.pseudo,a=e.message;return(0,e.isUser)(t)?s.a.createElement("p",{className:"user-message"},a):s.a.createElement("p",{className:"not-user-message"},s.a.createElement("strong",null,t,": ",s.a.createElement("br",null)),a)},g=a(26),f=a.n(g),b=a(13),v=a.n(b),E=(a(41),v.a.initializeApp({apiKey:"AIzaSyBV1iXIlSe3eE1nWu-Ulz7HVPWYgAqQkUA",authDomain:"chatbox-1-65fbf.firebaseapp.com",databaseURL:"https://chatbox-1-65fbf.firebaseio.com"}),f.a.createClass(v.a.database())),y=a(16),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={messages:{},pseudo:e.props.match.params.pseudo},e.messagesRef=Object(n.createRef)(),e.addMessage=function(t){var a=Object(c.a)({},e.state.messages),n="message"+Date.now();a[n]=t,Object.keys(a).slice(0,-10).forEach((function(e){a[e]=null})),e.setState({messages:a})},e.isUser=function(t){return t===e.state.pseudo},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){E.syncState("/chatbox-app/",{context:this,state:"messages"})}},{key:"componentDidUpdate",value:function(){var e=this.messagesRef.current;e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.messages).map((function(t){return s.a.createElement(y.CSSTransition,{timeout:200,classNames:"fade",key:t},s.a.createElement(d,{isUser:e.isUser,message:e.state.messages[t].message,pseudo:e.state.messages[t].pseudo}))}));return s.a.createElement("div",{className:"box"},s.a.createElement("div",null,s.a.createElement("div",{className:"messages",ref:this.messagesRef},s.a.createElement(y.TransitionGroup,{className:"message"},t))),s.a.createElement(h,{length:140,pseudo:this.state.pseudo,addMessage:this.addMessage}))}}]),a}(n.Component),S=function(){return s.a.createElement("h2",{className:"notFound"},"y'a rien ici !")},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={pseudo:"",goToChat:!1},e.handleChange=function(t){var a=t.target.value;e.setState({pseudo:a})},e.handleSubmit=function(t){t.preventDefault(),e.setState({goToChat:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){if(this.state.goToChat){var e="/chatbox-app/pseudo/"+this.state.pseudo;return s.a.createElement(p.a,{push:!0,to:e})}return s.a.createElement("div",{className:"connexionBox"},s.a.createElement("form",{className:"connexion",onSubmit:this.handleSubmit},s.a.createElement("input",{value:this.state.pseudo,onChange:this.handleChange,placeholder:"pseudo",type:"text",required:!0}),s.a.createElement("button",{type:"submit"},"Connexion")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(52),O=a(53),k=a(54),w=function(){return s.a.createElement(C.a,null,s.a.createElement(O.a,null,s.a.createElement(k.a,{exact:!0,path:"/chatbox-app/",component:j}),s.a.createElement(k.a,{exact:!0,path:"/chatbox-app/pseudo/:pseudo",component:x}),s.a.createElement(k.a,{component:S})))};r.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.49d633b9.chunk.js.map