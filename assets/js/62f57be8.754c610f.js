"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[218],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9589:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={},d="Dynamic Build",s={unversionedId:"stake-pool-guides/updating-a-cardano-node/using-dynamic-build",id:"stake-pool-guides/updating-a-cardano-node/using-dynamic-build",title:"Dynamic Build",description:"**We at the Armada Alliance actively build the required software packages needed to run a Cardano stake pool node on ARM-based computers like the Raspberry Pi or Apple's MacMini M1.**",source:"@site/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build.md",sourceDirName:"stake-pool-guides/updating-a-cardano-node",slug:"/stake-pool-guides/updating-a-cardano-node/using-dynamic-build",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updating a Cardano Node",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/updating-a-cardano-node"},next:{title:"Static Build",permalink:"/armada-alliance-docusaurus/docs/stake-pool-guides/updating-a-cardano-node/static-build"}},c={},u=[{value:"Overview :notepad_spiral:",id:"overview-notepad_spiral",level:3},{value:"Building Libsodium",id:"building-libsodium",level:2},{value:"Instructions to install libsodium",id:"instructions-to-install-libsodium",level:3},{value:"Download the cardano-node &amp; cli",id:"download-the-cardano-node--cli",level:2},{value:"Check if cardano-node is running already",id:"check-if-cardano-node-is-running-already",level:3},{value:"Replace the old binaries and config files with the new ones",id:"replace-the-old-binaries-and-config-files-with-the-new-ones",level:2},{value:"Check your cardano-node version",id:"check-your-cardano-node-version",level:3},{value:"Output:",id:"output",level:4},{value:"Check your cardano-cli version",id:"check-your-cardano-cli-version",level:3},{value:"Output:",id:"output-1",level:4},{value:"Replace the Cardano node configuration files",id:"replace-the-cardano-node-configuration-files",level:3},{value:"Download Database snapshot",id:"download-database-snapshot",level:2},{value:"Restart the Cardano Node",id:"restart-the-cardano-node",level:2}],p={toc:u};function m(e){var a=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dynamic-build"},"Dynamic Build"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"We at the Armada Alliance actively build the required software packages needed to run a Cardano stake pool node on ARM-based computers like the Raspberry Pi or Apple's MacMini M1."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"to-use-our-dynamic-arm64-cardano-node-build-you-must-have-libsodium-installed"},"To use our dynamic arm64 cardano-node build you must have ",(0,r.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/libsodium"},"libsodium")," installed."))),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("h4",{parentName:"div",id:"current-official-cardano-node-version-1341"},"Current Official Cardano Node Version: 1.34.1"))),(0,r.kt)("h3",{id:"overview-notepad_spiral"},"Overview :notepad","_","spiral:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check if libsodium is installed on the local machine",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Build libsodium if not installed already"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download Cardano Node Dynamic build & configuration file"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Extract the file's content"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check if you already have Cardano Node service running",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Safely shutdown your Cardano node if it is running"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace the old binaries with the new cardano-node and cardano-cli"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check cardano-node and cli version is updated to the current version"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace old configuration files with new ones (if needed)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Restart your Cardano Node"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that node has started properly")),(0,r.kt)("h2",{id:"building-libsodium"},"Building Libsodium"),(0,r.kt)("p",null,"Check if libsodium is already installed first."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"which libsodium\n")),(0,r.kt)("p",null,"If this returns no output you need to install libsodium."),(0,r.kt)("h3",{id:"instructions-to-install-libsodium"},"Instructions to install libsodium"),(0,r.kt)("p",null,"Create a working directory for your builds:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mkdir -p ~/src\ncd ~/src\n")),(0,r.kt)("p",null,"Download and install libsodium:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"git clone https://github.com/input-output-hk/libsodium\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd libsodium\ngit checkout 66f017f1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"./autogen.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"./configure\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"make\nsudo make install\n")),(0,r.kt)("p",null,"Add the following to your .bashrc file and source it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'echo "export LD_LIBRARY_PATH="/usr/local/lib:$LD_LIBRARY_PATH"" >> ~/.bashrc\n\necho "export PKG_CONFIG_PATH="/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH"" >> ~/.bashrc\n\nsource ~/.bashrc\n')),(0,r.kt)("p",null,"For those who run cardano-node as a systemd service, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ldconfig\n")),(0,r.kt)("p",null,"This ensures the system is aware of libsodium (not just at the user level)."),(0,r.kt)("h2",{id:"download-the-cardano-node--cli"},"Download the cardano-node & cli"),(0,r.kt)("p",null,"Dynamic binaries and Cardano node configuration files provided by ",(0,r.kt)("a",{parentName:"p",href:"https://armada-alliance.com/stake-pools/cc1b1c03798884c636703443a23b8d9e827d6c0417921600394198a0"},"SRN pool "),"\ud83d\ude4f at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/armada-alliance/cardano-node-binaries"},"Github repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wget -O cardano-1_34_1-aarch64-ubuntu_2004.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/dynamic-binaries/1.34.1/cardano-1_34_1-aarch64-ubuntu_2004.zip?raw=true\n")),(0,r.kt)("p",null,"Extract the content from the zip file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"unzip cardano-1_34_1-aarch64-ubuntu_2004.zip?raw=true\n")),(0,r.kt)("h3",{id:"check-if-cardano-node-is-running-already"},"Check if cardano-node is running already"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Now we need to make sure we do not have a cardano-node already running. If we do we must shut it down before proceeding.")))),(0,r.kt)("p",null,"You can check if you have a cardano-node process already running a few ways like using",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," or by checking your systemd service."),(0,r.kt)("p",null,"If you have been following our ",(0,r.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," you can check your cardano-node status and stop it using the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\ncardano-service stop\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use Linux's ",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," service just check for a processing running starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"cardano-node run")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"SIGINT")," to terminate the process."))),(0,r.kt)("h2",{id:"replace-the-old-binaries-and-config-files-with-the-new-ones"},"Replace the old binaries and config files with the new ones"),(0,r.kt)("p",null,"If you are using the ",(0,r.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," and your cardano-node & cli in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.local/bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-1_34_1-aarch64-ubuntu_2004/cardano-node cardano-1_34_1-aarch64-ubuntu_2004/cardano-cli ~/.local/bin\n")),(0,r.kt)("h3",{id:"check-your-cardano-node-version"},"Check your cardano-node version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node --version\n")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node 1.34.1 - linux-aarch64 - ghc-8.10\ngit rev 2cbe363874d0261bc62f52185cf23ed492cf4859\n")),(0,r.kt)("h3",{id:"check-your-cardano-cli-version"},"Check your cardano-cli version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli --version\n")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli 1.34.1 - linux-aarch64 - ghc-8.10\ngit rev 2cbe363874d0261bc62f52185cf23ed492cf4859\n")),(0,r.kt)("h3",{id:"replace-the-cardano-node-configuration-files"},"Replace the Cardano node configuration files"),(0,r.kt)("p",null,"We have already downloaded the configuration files needed for three networks mainnet and testnet."),(0,r.kt)("p",null,'{% tabs %}\n{% tab title="Mainnet Config" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-1_34_1-aarch64-ubuntu_2004/files/mainnet/* ~/pi-pool/files\n")),(0,r.kt)("p",null,"{% endtab %}"),(0,r.kt)("p",null,'{% tab title="Testnet Config" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-1_34_1-aarch64-ubuntu_2004/files/testnet/* ~/pi-pool/files\n")),(0,r.kt)("p",null,"{% endtab %}"),(0,r.kt)("h2",{id:"download-database-snapshot"},"Download Database snapshot"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://armada-alliance.com/stake-pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"},"OTG pool")," for providing an up to date  snapshot of the Cardano blockchain to help speed up sync times for a node dramatically."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cd $NODE_HOME && rm -rf db\nwget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/\n')),(0,r.kt)("h2",{id:"restart-the-cardano-node"},"Restart the Cardano Node"),(0,r.kt)("p",null,"Now we just need to restart our cardano-node service if you are using our ",(0,r.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," use this command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service start\n")),(0,r.kt)("p",null,"Wait a few seconds or so then check the status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\n")))}m.isMDXComponent=!0}}]);