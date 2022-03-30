"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[7426],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,R=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return a?r.createElement(R,o(o({ref:t},c),{},{components:a})):r.createElement(R,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7462),n=a(7294),l=a(2389),o=a(5979),u=a(6010),i="tabItem_LplD";function s(e){var t,a,l,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,R=e.className,w=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),E=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var m=null===d?d:null!=(t=null!=d?d:null==(a=w.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=w[0])?void 0:l.props.value;if(null!==m&&!g.some((function(e){return e.value===m})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+m+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=(0,o.UB)(),v=A.tabGroupChoices,b=A.setTabGroupChoices,k=(0,n.useState)(m),y=k[0],h=k[1],C=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=v[f];null!=N&&N!==y&&g.some((function(e){return e.value===N}))&&h(N)}var B=function(e){var t=e.currentTarget,a=C.indexOf(t),r=g[a].value;r!==y&&(D(t),h(r),null!=f&&b(f,r))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;a=C[r]||C[0];break;case"ArrowLeft":var n=C.indexOf(e.currentTarget)-1;a=C[n]||C[C.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},R)},g.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:B,onClick:B},l,{className:(0,u.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function c(e){var t=(0,l.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},5064:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return w},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=a(9877),u=a(8215),i=["components"],s={description:"Put your ADA to work today!"},c="How to delegate ADA",d={unversionedId:"delegate/how-to-delegate-ada",id:"delegate/how-to-delegate-ada",title:"How to delegate ADA",description:"Put your ADA to work today!",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/delegate/how-to-delegate-ada.md",sourceDirName:"delegate",slug:"/delegate/how-to-delegate-ada",permalink:"/armada-alliance-docusaurus/es/docs/delegate/how-to-delegate-ada",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/delegate/how-to-delegate-ada.md",tags:[],version:"current",frontMatter:{description:"Put your ADA to work today!"}},p={},f=[{value:"Staking your ADA",id:"staking-your-ada",level:2},{value:"Staking with Daedalus Wallet",id:"staking-with-daedalus-wallet",level:3},{value:"Staking with Yoroi Wallet",id:"staking-with-yoroi-wallet",level:3}],R={toc:f};function w(e){var t=e.components,s=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},R,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-delegate-ada"},"How to delegate ADA"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Before we start")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"See this link for an explanation on delegation:  ",(0,l.kt)("a",{parentName:"li",href:"https://cardano.org/stake-pool-delegation/"},(0,l.kt)("strong",{parentName:"a"},"https://cardano.org/stake-pool-delegation/"))),(0,l.kt)("li",{parentName:"ul"},"You always maintain full control of your ADA in your own wallet when you delegate. ::: The first step to delegating your ADA is to download one of the official Cardano wallets.")),(0,l.kt)("h2",{parentName:"div",id:"cardano-wallets"},"Cardano Wallets"),(0,l.kt)("p",{parentName:"div"},"Yoroi is a light mobile wallet available for Android and Apple devices as well as browser extension."),(0,l.kt)("p",{parentName:"div"},"Daedalus is not a mobile wallet but a full node wallet."),(0,l.kt)("table",{parentName:"div"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"https://daedaluswallet.io/"},"Daedalus")),(0,l.kt)("th",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"th",href:"https://yoroi-wallet.com/"},"Yoroi")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("img",{alt:"https://daedaluswallet.io/",src:a(4630).Z,width:"250",height:"195"})),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("img",{alt:"https://yoroi-wallet.com",src:a(7070).Z,width:"275",height:"275"}))))))),(0,l.kt)("p",null," Beware of fake wallets! If you have questions, check ",(0,l.kt)("a",{parentName:"p",href:"https://cardano.org/stake-pool-delegation#wallets"},"cardano.org"),"."),(0,l.kt)("p",null,":::"),(0,l.kt)("h2",{id:"staking-your-ada"},"Staking your ADA"),(0,l.kt)(o.Z,{defaultValue:"daedalus",values:[{label:"Daedalus Wallet",value:"daedalus"},{label:"Yoroi Lightweight Wallet and Mobile App",value:"yoroi"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"daedalus",mdxType:"TabItem"},(0,l.kt)("p",null,"   We have included some video walkthroughs for using Daedalus Wallet and how to delegate / stake your ADA below:"),(0,l.kt)("h3",{id:"staking-with-daedalus-wallet"},"Staking with Daedalus Wallet"),(0,l.kt)("iframe",{width:"100%",height:"450",src:"https://www.youtube-nocookie.com/embed/mVr0bvBouaw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,l.kt)(u.Z,{value:"yoroi",mdxType:"TabItem"},(0,l.kt)("p",null,"  The video below will walk you through using the Yoroi Wallet and how to delegate your ADA."),(0,l.kt)("h3",{id:"staking-with-yoroi-wallet"},"Staking with Yoroi Wallet"),(0,l.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube-nocookie.com/embed/3ypcYjjJNns",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))}w.isMDXComponent=!0},4630:function(e,t,a){t.Z=a.p+"assets/images/daedalus-logo-e43e53ccf6fc6faaf5cefbc132b1a103.png"},7070:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAETCAYAAAAVqeK4AAAXYklEQVR42u3dd5hV1bnH8e8+ZxrMMMMMM46gIFItF1BBRTSaiJGIyo0FC3qJiNiisSSWXL3kGlu8xmhiCbERYwuWFPUaY4glMWJ77O2iKKJYQFGKMDAtf6w1VyLDOOXMedc65/d5nvP3zNl7nXevvda73hdEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREpHslAf9vewB7Gf2Pi1Kp1OympqZ6DRH5kgrgRKDU4G83AfcCT+s2dCTKJUkpcDHwKdCc5U8TcAcwuHfv3onuhhQUFKSBkcCjBuOxGfgEOCdJkhLdjU5IpVIFwD7Aw0CjQUB5CfhOkiQ9dDfyWjXwQ2CRQRCpBx4E9vIBTbpoE2C20RNhNTArlUoV6TbkpVr/MKs3Gn8XJklSoduQQUVFRQlwOPCawSylGXge2CuVShXrbuTFa3YFMB342GCsNQDPAPvqTnSTkpKSFLAt8Gv/GpLtm/whcIneW3PeIOAuYJXBGFsHXAVsWV5ervW6LJkOLDWaer4MbFtcXJzSbcipNbpCYD/gM6Nx9Q4wUXciywoLC1PAWOA+H82zfePfBk5KkqRcdyMnDAauBFYYjKWVwG+A7SoqKjQbMX63PRVYbjAI1uBW2ofrTkRtfz/btHh1XgJM0Y5hWMYDLxjNUt4EJiRJUqbbEIfS0tIE6AucD9Rhs0v4IDBUdyNMmwEX+huV7cGxFrgOGKjbEIW9sEtAWwKcoi3fwPkdn52B97HJnH0X2FF3ItjX4mLgx9jljTwO1JaVlWltJCIDgRuNZimr/ICt1W0Iw3oL9vfg8jgs0gouTJKkWncjzqdQL+Ag4C2j1555uAOLYjsOSnHp8O8azVYfA3bxW88SuS2Bh/wPPNuDaRkwww9oyf5spB9wNzZZ0yuBWVobyc1Zyvdx+SEWWY1zgDFKdMva/e4JzAAWGM1G5gEH+mMgkmv8qcsRwItGi2+LgIN1J7pdJfA7XB6QRSC5Dqjp2bOnAkkePLWKgJ/gtugsBtssYMuamhoNtgzyJ7u/jcv7sXhYvIo7jCp5NvCK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QLcNboH1XKCvRpKIt17r0pVGs5TFwJSYrlkqlSqKLNNXJKtG4w7uWTULvwkYVlxcrB+pSA6oBs4wDCgvAlMiK2QtIm0YBLyATaJbM64yvxpcSbsoxThsn+LqbiS4BcdsH9zbHtgVWJJKpRY2Nzc36ZaIRMz3IN7Dz1IsZiifAZfEtIUsIm3rD/wOlx9iEVQeBUZGVtFNRFqTJEkRMJXuq/vRnopuZ8VUK0VENqKioiLBVXT7i1FAacRVx1eymEiOzFIKgdOAhUZB5W1gWky1UkRkI3ytlFG4AskWp5BX4FqAqm6ISI7MUnoCF2HTbqMZeAvYM5VKFeluiMQ/S0kD43HVySxal64ALiOiurMi0rZq4KdGM5QGXDr+droNIrljEnbp+PW48gA1ug0ikfOtI4bi2nBavPbUAXf6XScRyREHAR+R3R7I84ExuvQiOaR3794tFd3upvUaqpn8LPOzoS105UVylD+sNwP4pJsCySLgQN9IS0TywEhcIeZMNVhfDdyLUuxF8lIfXBvOria6vQecqBIFInnM9+DdGnilk4HkYaC2qKhINWNFBHAd/q4ClrcziHwAXKCmVyKyAX/6dyLwHG1v+f4N2M237RQR2ahNcYupX16cXQ3MBip0iUSkXfys4xjgNR9IngEm+w6EIiLtV1hYmMal458P9FNjLhEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZHo/RO/gBunYihP/QAAAABJRU5ErkJggg=="}}]);