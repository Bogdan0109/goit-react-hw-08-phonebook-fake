"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[511],{511:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r,a=n(791),s=n(434),c=function(e){return e.contacts.isLoading},i=function(e){return e.contacts.contacts},o=n(168),l=n(444).ZP.section(r||(r=(0,o.Z)(["\n  padding: 4em;\n"]))),u=n(184),d=function(e){var t=e.title,n=e.children;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:"Title",children:t}),n]})},m=n(165),h=n(861),p=n(634);function f(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(),t=(0,s.I0)(),n=(0,s.v9)(i),r=function(){var e=(0,h.Z)((0,m.Z)().mark((function e(r){var a,s,c;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a=r.currentTarget,s=a.elements.name.value,c=a.elements.number.value,n){e.next=6;break}return e.abrupt("return");case 6:if(!n.find((function(e){return e.name.toLowerCase()===s.toLowerCase()}))){e.next=8;break}return e.abrupt("return",alert("".concat(s," is alredy in contacts")));case 8:t((0,p.el)({name:s,number:c})),a.reset();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsxs)("form",{className:"Form",onSubmit:r,children:[(0,u.jsxs)("label",{htmlFor:e,className:"Form__label",children:["Name",(0,u.jsx)("input",{className:"Form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{htmlFor:e,className:"Form__label",children:["Number",(0,u.jsx)("input",{className:"Form__input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{className:"Form__btn",type:"submit",children:"Add contact"})]})}var x=n(825),_=function(){var e=(0,s.I0)();return(0,u.jsxs)("label",{className:"Filter__label",children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",(0,u.jsx)("input",{className:"Filter__input",type:"text",onChange:function(t){return e((0,x.M)(t.target.value))}})]})},b=function(e){return e.filters.filter},j=function(){var e=(0,s.v9)(b),t=(0,s.v9)(i),n=(0,s.I0)(),r=(0,s.v9)(c);if(t){var a=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return console.log("\ud83d\ude80 ~ file: ContactList.jsx:18 ~ ContactList ~ filteredContacts",a),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:"ContactList",children:a.map((function(e){var t=e.id,a=e.name,s=e.number;return(0,u.jsxs)("li",{className:"ContactList__item",children:[(0,u.jsxs)("p",{className:"ContactList__text",children:[a,":"]}),(0,u.jsx)("span",{className:"ContactList__span",children:s}),(0,u.jsx)("button",{type:"button",className:"ContactList__btn",onClick:function(){return n((0,p._f)(t))},disabled:r,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}))})})}};function v(){var e=(0,s.I0)(),t=(0,s.v9)(c);return(0,a.useEffect)((function(){e((0,p.yF)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("title",{children:"Your contacts"}),(0,u.jsxs)(l,{className:"Reviews",children:[(0,u.jsx)(d,{title:"Phonebook",children:(0,u.jsx)(f,{})}),(0,u.jsxs)(d,{title:"Contacts",children:[(0,u.jsx)(_,{}),t&&(0,u.jsx)("div",{children:"Request in progress..."}),(0,u.jsx)(j,{})]})]})]})}}}]);
//# sourceMappingURL=511.5b8dae32.chunk.js.map