"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[4664],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(a),p=i,h=d["".concat(s,".").concat(p)]||d[p]||c[p]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},250:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={},s="Cardano Submit Transaction API Tutorial \ud83d\udce6",m={unversionedId:"cardano-developer-guides/cardano-submit-tx-api-tutorial",id:"cardano-developer-guides/cardano-submit-tx-api-tutorial",title:"Cardano Submit Transaction API Tutorial \ud83d\udce6",description:"Why this Guide?",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/cardano-developer-guides/cardano-submit-tx-api-tutorial.md",sourceDirName:"cardano-developer-guides",slug:"/cardano-developer-guides/cardano-submit-tx-api-tutorial",permalink:"/armada-alliance-docusaurus/fi/docs/cardano-developer-guides/cardano-submit-tx-api-tutorial",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/cardano-developer-guides/cardano-submit-tx-api-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano NFT Collection Tutorial \ud83d\udc5b",permalink:"/armada-alliance-docusaurus/fi/docs/cardano-developer-guides/cardano-nft-collection-tutorial-coming-soon"},next:{title:"Create .img file",permalink:"/armada-alliance-docusaurus/fi/docs/cardano-developer-guides/create-.img-file"}},u={},c=[{value:"Why this Guide?",id:"why-this-guide",level:2},{value:"Get the tx-submit-mainnet-config.yaml file from IOG&#39;s github repository",id:"get-the-tx-submit-mainnet-configyaml-file-from-iogs-github-repository",level:2},{value:"Test the Cardano Submit API",id:"test-the-cardano-submit-api",level:2},{value:"Connect the Cardano Submit API with Nami Wallet",id:"connect-the-cardano-submit-api-with-nami-wallet",level:2}],d={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cardano-submit-transaction-api-tutorial-"},"Cardano Submit Transaction API Tutorial \ud83d\udce6"),(0,r.kt)("h2",{id:"why-this-guide"},"Why this Guide?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This guide is intended to show Raspberry-pi/ARM users how to use the Cardano Submit API with their own running Cardano node to watch for successful transaction submissions while using Nami wallet.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"In order to follow this guide you need:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"A raspberry pi 4 or other arm64 based computer"),(0,r.kt)("li",{parentName:"ol"},"Your computer must already have the Cardano Node software actively running and synced to the blockchain"),(0,r.kt)("li",{parentName:"ol"},"You need to install the Nami Wallet google chrome extension from the google app store. :::")),(0,r.kt)("h2",{parentName:"div",id:"download-and-install-cardano-submit-api"},"Download and Install Cardano Submit API"),(0,r.kt)("p",{parentName:"div"},"Download the latest version of the Cardano node, cli, and tx-submit-api from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/armada-alliance/cardano-node-binaries"},"Armada Alliance Github repository"),"."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wget -O 1_33_1.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/1_33_1.zip?raw=true\n")),(0,r.kt)("p",{parentName:"div"},"Unzip the contents of the zip file."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"unzip 1_33_1.zip -d cardano-node-1.33.1\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-node-1.33.1/cardano-node/cardano-submit-api ~/.local/bin/\n")),(0,r.kt)("h2",{parentName:"div",id:"make-a-simple-bash-script-to-run-the-cardano-submit-api"},"Make a simple bash script to run the Cardano Submit API"),(0,r.kt)("p",{parentName:"div"},"You can use whatever text editor you would like and feel free to change the file name if you would like."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"nano ~/.local/bin/tx-submit-service\n")),(0,r.kt)("p",{parentName:"div"},"Next, copy and paste the following into the file:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"#!/bin/bash\n\ncardano-submit-api \\\n  --socket-path /home/ada/pi-pool/db/socket \\\n  --port 8090 \\\n  --config /home/ada/pi-pool/files/tx-submit-mainnet-config.yaml \\\n  --listen-address 0.0.0.0 \\\n  --mainnet\n")))),(0,r.kt)("p",null,"Save and exit. Now we need to give permissions to the file so that it can be executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"chmod +x ~/.local/bin/tx-submit-service\n")),(0,r.kt)("h2",{id:"get-the-tx-submit-mainnet-configyaml-file-from-iogs-github-repository"},"Get the tx-submit-mainnet-config.yaml file from IOG's github repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd ~/pi-pool/files && wget -O tx-submit-mainnet-config.yaml https://raw.githubusercontent.com/input-output-hk/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml\n")),(0,r.kt)("h2",{id:"test-the-cardano-submit-api"},"Test the Cardano Submit API"),(0,r.kt)("p",null,"Create a tmux session for the Cardano Submit API service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"tmux new-session -d -t cardano-submit-api && tmux attach -t cardano-submit-api\n")),(0,r.kt)("p",null,"Run the Cardano Submit API service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"~/.local/bin/tx-submit-service\n")),(0,r.kt)("p",null,"You should see the following output in your terminal:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/armada-alliance/assets/gh-pages/cardano-submit-api.png",alt:null})),(0,r.kt)("h2",{id:"connect-the-cardano-submit-api-with-nami-wallet"},"Connect the Cardano Submit API with Nami Wallet"),(0,r.kt)("p",null,"Now you just need to connect the Cardano Submit API with Nami Wallet. Open your browser with your Nami wallet navigate to settings, select network, switch on custom node mode, then enter in ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/api/submit/tx"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,r.kt)("em",{parentName:"h5"},(0,r.kt)("strong",{parentName:"em"},"If you are using a local network node (i.e. a node running at home in your local network) then you need to enter**")," *",(0,r.kt)("strong",{parentName:"em"},"*",(0,r.kt)("inlineCode",{parentName:"strong"},"http://x.x.x.x:8090/api/submit/tx"),"**")," *",(0,r.kt)("strong",{parentName:"em"},"*and replace the**")," *",(0,r.kt)("strong",{parentName:"em"},"*",(0,r.kt)("inlineCode",{parentName:"strong"},"x.x.x.x"),"**")," *",(0,r.kt)("strong",{parentName:"em"},"*with the IP address of your local network node."))," :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=23SDU4dcJr0%22"},'https://www.youtube.com/watch?v=23SDU4dcJr0"')," %}"),(0,r.kt)("h2",{parentName:"div",id:"test-the-cardano-submit-api-with-nami-wallet"},"Test the Cardano Submit API with Nami Wallet"),(0,r.kt)("p",{parentName:"div"},"Now that that is setup, let's just test this by sending some ada to ourselves using Nami Wallet. Once you get the tx submitted success notification from Nami wallet, head back to the tmux session you created earlier that is running the cardano-submit-api and look to see if your transaction was submitted. It will output the following log message:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/armada-alliance/assets/gh-pages/tx-submit-success.png",alt:null})))))}p.isMDXComponent=!0}}]);