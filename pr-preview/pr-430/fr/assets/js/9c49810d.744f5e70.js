"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8836],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return x}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),x=n,f=d["".concat(p,".").concat(x)]||d[x]||u[x]||l;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function x(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3345:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var r=a(3117),n=(a(7294),a(3905));const l={sidebar_label:"Wallet With Celestia App"},i="Create a Wallet with Celestia App",o={unversionedId:"developers/celestia-app-wallet",id:"developers/celestia-app-wallet",title:"Create a Wallet with Celestia App",description:"For this guide, we will go over how you can generate a Celestia",source:"@site/docs/developers/celestia-app-wallet.md",sourceDirName:"developers",slug:"/developers/celestia-app-wallet",permalink:"/pr-preview/pr-430/fr/developers/celestia-app-wallet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app-wallet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet With Celestia App"},sidebar:"developers",previous:{title:"Keplr Integration",permalink:"/pr-preview/pr-430/fr/developers/keplr"},next:{title:"Wallet with Celestia Node",permalink:"/pr-preview/pr-430/fr/developers/celestia-node-key"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Wallet",id:"create-a-wallet",level:2},{value:"Fund a Wallet",id:"fund-a-wallet",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-wallet-with-celestia-app"},"Create a Wallet with Celestia App"),(0,n.kt)("p",null,"For this guide, we will go over how you can generate a Celestia\nwallet using ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-app"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-430/fr/nodes/quick-start"},"Gone through Quick Start and Installed Celestia App"))),(0,n.kt)("p",null,"Note, you do not need to install Celestia Node for this tutorial."),(0,n.kt)("h2",{id:"create-a-wallet"},"Create a Wallet"),(0,n.kt)("p",null,"First, create an application CLI configuration file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,n.kt)("p",null,'You can pick whatever wallet name you want.\nFor our example we used "validator" as the wallet name:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys add validator\n")),(0,n.kt)("p",null,"Save the mnemonic output as this is the only way to\nrecover your validator wallet in case you lose it!"),(0,n.kt)("p",null,"To check all your wallets you can run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys list\n")),(0,n.kt)("h2",{id:"fund-a-wallet"},"Fund a Wallet"),(0,n.kt)("p",null,"For the public celestia address, you can fund the\npreviously created wallet via ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/celestiacommunity"},"Discord"),"\nby sending this message to either the #mocha-faucet or #arabica-faucet channel:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"$request celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,n.kt)("p",null,"Wait to see if you get a confirmation that the\ntokens have been successfully sent. To check if\ntokens have arrived successfully to the destination\nwallet run the command below replacing the public\naddress with your own:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\ncelestia-appd query bank balances celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")))}u.isMDXComponent=!0}}]);