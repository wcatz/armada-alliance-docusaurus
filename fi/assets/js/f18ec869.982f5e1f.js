"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[95],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4206:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={description:"Quickly bootstrap a synced configured node in a few hours."},s="Pi-Node (Quick Start)",d={unversionedId:"stake-pool-guides/pi-pool-tutorial/pi-node",id:"stake-pool-guides/pi-pool-tutorial/pi-node",title:"Pi-Node (Quick Start)",description:"Quickly bootstrap a synced configured node in a few hours.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/stake-pool-guides/pi-pool-tutorial/pi-node.md",sourceDirName:"stake-pool-guides/pi-pool-tutorial",slug:"/stake-pool-guides/pi-pool-tutorial/pi-node",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/pi-node",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/pi-pool-tutorial/pi-node.md",tags:[],version:"current",frontMatter:{description:"Quickly bootstrap a synced configured node in a few hours."},sidebar:"tutorialSidebar",previous:{title:"Environment Setup",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide/environment-setup"},next:{title:"Pi-Relay",permalink:"/armada-alliance-docusaurus/fi/docs/stake-pool-guides/pi-pool-tutorial/pi-relay"}},u={},p=[{value:"Choose testnet or mainnet. <strong>Defaults to testnet</strong>.",id:"choose-testnet-or-mainnet-defaults-to-testnet",level:2},{value:"Retrieve node files",id:"retrieve-node-files",level:3},{value:"3. Enter the pi-pool folder.",id:"3-enter-the-pi-pool-folder",level:3},{value:"4. Download database snapshot.",id:"4-download-database-snapshot",level:3},{value:"5. Enable &amp; start the cardano-service.",id:"5-enable--start-the-cardano-service",level:3},{value:"6. Enable &amp; start the cardano-monitor.",id:"6-enable--start-the-cardano-monitor",level:3},{value:"7. Confirm they are running.",id:"7-confirm-they-are-running",level:3},{value:"8. gliveview.sh",id:"8-gliveviewsh",level:3},{value:"9. Grafana.",id:"9-grafana",level:3},{value:"Dashboards can be found here.",id:"dashboards-can-be-found-here",level:4}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pi-node-quick-start"},"Pi-Node (Quick Start)"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"After booting the image it will take about 30 minutes to download the chain and another couple hours or so to sync to the tip. You will not be able to do much until your node has synced with the tip of the block chain.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It can take anywhere from 2 to 60 minutes to sync after a reboot depending how the node was shut down or restarted. Check if process is running with htop. If it is, use gLiveView.sh or go for walk. It will sync and the socket will be created."),(0,o.kt)("p",{parentName:"div"},"It is best to just leave it running. \ud83c\udfc3\u2640 :::"),(0,o.kt)("h3",{parentName:"div",id:"1-download-and-flash-the-pi-nodeimggz"},(0,o.kt)("strong",{parentName:"h3"},"1. Download and flash the")," ",(0,o.kt)("a",{parentName:"h3",href:"https://mainnet.adamantium.online/Pi-Node.img.gz"},(0,o.kt)("strong",{parentName:"a"},"Pi-Node.img.gz")),(0,o.kt)("strong",{parentName:"h3"},".")),(0,o.kt)("h3",{parentName:"div",id:"2-ssh-into-the-server"},"2. ssh into the server."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"ssh ada@<pi-node private IPv4>\n")),(0,o.kt)("p",{parentName:"div"},"Default credentials = ",(0,o.kt)("strong",{parentName:"p"},"ada:lovelace")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node version\n")),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"choose-testnet-or-mainnet-defaults-to-testnet"},"Choose testnet or mainnet. ",(0,o.kt)("strong",{parentName:"h2"},"Defaults to testnet"),"."),(0,o.kt)("p",null,"Switch between testnet & mainnet, for mainnet issue.. Config file path /home/ada/.adaenv"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'sed -i .adaenv -e "s/NODE_CONFIG=testnet/NODE_CONFIG=mainnet/g"; source .adaenv\n')),(0,o.kt)("h3",{id:"retrieve-node-files"},"Retrieve node files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-config.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-byron-genesis.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-shelley-genesis.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-alonzo-genesis.json\nwget -N https://hydra.iohk.io/build/${NODE_BUILD_NUM}/download/1/${NODE_CONFIG}-topology.json\nwget -N https://raw.githubusercontent.com/input-output-hk/cardano-node/master/cardano-submit-api/config/tx-submit-mainnet-config.yaml\n")),(0,o.kt)("p",null,'Run the following to modify ${NODE_CONFIG}-config.json and update TraceBlockFetchDecisions to "true" & listen on all interfaces with Prometheus Node Exporter.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'sed -i ${NODE_CONFIG}-config.json \\\n    -e "s/TraceBlockFetchDecisions\\": false/TraceBlockFetchDecisions\\": true/g" \\\n    -e "s/127.0.0.1/0.0.0.0/g"\n')),(0,o.kt)("h3",{id:"3-enter-the-pi-pool-folder"},"3. Enter the pi-pool folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd /home/ada/pi-pool\n")),(0,o.kt)("h3",{id:"4-download-database-snapshot"},"4. Download database snapshot."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'wget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/\n')),(0,o.kt)("h3",{id:"5-enable--start-the-cardano-service"},"5. Enable & start the cardano-service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service enable\ncardano-service start\n")),(0,o.kt)("h3",{id:"6-enable--start-the-cardano-monitor"},"6. Enable & start the cardano-monitor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-monitor enable\ncardano-monitor start\n")),(0,o.kt)("h3",{id:"7-confirm-they-are-running"},"7. Confirm they are running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\ncardano-monitor status\n")),(0,o.kt)("p",null,"Follow journal output or syslog"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo journalctl --unit=cardano-node --follow\nsudo tail -f /var/log/syslog\n")),(0,o.kt)("h3",{id:"8-gliveviewsh"},"8. gliveview.sh"),(0,o.kt)("p",null,"allow these files to update if they wish to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_HOME/scripts\n./gLiveView.sh\n")),(0,o.kt)("h3",{id:"9-grafana"},"9. Grafana."),(0,o.kt)("p",null,"Enter your Node's IPv4 address in your browser."),(0,o.kt)("p",null,"Default credentials = ",(0,o.kt)("strong",{parentName:"p"},"admin:admin")),(0,o.kt)("h4",{id:"dashboards-can-be-found-here"},"Dashboards can be found here."),(0,o.kt)("p",null,'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://github.com/armada-alliance/dashboards%22"},'https://github.com/armada-alliance/dashboards"')," %}"),(0,o.kt)("p",null,'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://api.pooldata.live/%22"},'https://api.pooldata.live/"')," %}"),(0,o.kt)("p",null,":::info The following guide builds out the image, use it as a reference and please feel free to ask for clarification in our Telegram channel. ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/armada_alli"},"https://t.me/armada","_","alli")," :::"))}m.isMDXComponent=!0}}]);