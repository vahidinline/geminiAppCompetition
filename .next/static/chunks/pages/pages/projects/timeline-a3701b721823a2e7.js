(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7489],{38426:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/projects/timeline",function(){return i(99230)}])},93326:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var o=i(85893),r=i(45697),n=i.n(r),s=i(67564),a=i(89566),l=i(46769),d=i(18334),styles=function(e,t){let{borders:i}=e,{lastItem:o,isDark:r}=t,{borderWidth:n,borderColor:s}=i;return{"&:after":{content:!o&&"''",position:"absolute",top:"2rem",left:"17px",height:"100%",opacity:r?.1:1,borderRight:"".concat(n[2]," solid ").concat(s)}}};function TimelineItem(e){let{color:t,icon:i,title:r,dateTime:n,description:c,lastItem:u}=e,h=(0,d.m)();return(0,o.jsxs)(a.Z,{position:"relative",mb:3,sx:e=>styles(e,{lastItem:u,isDark:h}),children:[(0,o.jsx)(a.Z,{display:"flex",justifyContent:"center",alignItems:"center",bgColor:t,color:"white",width:"2rem",height:"2rem",borderRadius:"50%",position:"absolute",top:"8%",left:"2px",zIndex:2,sx:{fontSize:e=>{let{typography:{size:t}}=e;return t.sm}},children:(0,o.jsx)(s.Z,{fontSize:"inherit",children:i})}),(0,o.jsxs)(a.Z,{ml:5.75,pt:c?.7:.5,lineHeight:0,maxWidth:"30rem",children:[(0,o.jsx)(l.Z,{variant:"button",fontWeight:"medium",color:h?"white":"dark",children:r}),(0,o.jsx)(a.Z,{mt:.5,children:(0,o.jsx)(l.Z,{variant:"caption",color:h?"secondary":"text",children:n})}),(0,o.jsx)(a.Z,{mt:2,mb:1.5,children:c?(0,o.jsx)(l.Z,{variant:"button",color:h?"white":"dark",children:c}):null})]})]})}TimelineItem.defaultProps={color:"dark",lastItem:!1,description:""},TimelineItem.propTypes={color:n().oneOf(["primary","secondary","info","success","warning","error","dark","light"]),icon:n().node.isRequired,title:n().string.isRequired,dateTime:n().string.isRequired,description:n().string,lastItem:n().bool};var c=TimelineItem},18334:function(e,t,i){"use strict";i.d(t,{m:function(){return useTimeline},w:function(){return TimelineProvider}});var o=i(85893),r=i(67294);let n=(0,r.createContext)();function TimelineProvider(e){let{children:t,value:i}=e;return(0,o.jsx)(n.Provider,{value:i,children:t})}function useTimeline(){return(0,r.useContext)(n)}},99230:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return timeline}});var o=i(85893),r=i(86886),n=i(89566),s=i(86819),a=i(5819),l=i(97629),d=i(45697),c=i.n(d),u=i(66242),h=i(46769),m=i(59581),w=i(18334);function TimelineList(e){let{title:t,dark:i,children:r}=e,[s]=(0,m.Ad)(),{darkMode:a}=s;return(0,o.jsx)(w.w,{value:i,children:(0,o.jsx)(u.Z,{children:(0,o.jsxs)(n.Z,{bgColor:i?"dark":"white",variant:"gradient",borderRadius:"xl",sx:{background:e=>{let{palette:{background:t}}=e;return a&&t.card}},children:[(0,o.jsx)(n.Z,{pt:3,px:3,children:(0,o.jsx)(h.Z,{variant:"h6",fontWeight:"medium",color:i?"white":"dark",children:t})}),(0,o.jsx)(n.Z,{p:2,children:r})]})})})}TimelineList.defaultProps={dark:!1},TimelineList.propTypes={title:c().string.isRequired,dark:c().bool,children:c().node.isRequired};var p=i(93326),g=[{color:"success",icon:"notifications",title:"$2400, Design changes",dateTime:"22 DEC 7:20 PM",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["design"]},{color:"error",icon:"inventory_2",title:"New order #1832412",dateTime:"21 DEC 11 PM",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["order","#1832412"]},{color:"info",icon:"shopping_cart",title:"Server payments for April",dateTime:"21 DEC 9:34 PM",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["server","payments"]},{color:"warning",icon:"payment",title:"New card added for order #4395133",dateTime:"20 DEC 2:20 AM",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["card","#4395133","priority"]},{color:"primary",icon:"vpn_key",title:"Unlock packages for development",dateTime:"18 DEC 4:54 AM",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["development"]},{color:"success",icon:"inbox",title:"New message unread",dateTime:"16 DEC",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["message"]},{color:"info",icon:"campaign",title:"Notifications unread",dateTime:"15 DEC",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."},{color:"warning",icon:"archive",title:"New request",dateTime:"14 DEC",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["request","priority"]},{color:"secondary",icon:"sports_esports",title:"Controller issues",dateTime:"13 DEC",description:"People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",badges:["controller"],lastItem:!0}],timeline=function(){let e=g.map(e=>{let{color:t,icon:i,title:r,dateTime:n,description:s,badges:a,lastItem:l}=e;return(0,o.jsx)(p.Z,{color:t,icon:i,title:r,dateTime:n,description:s,badges:a,lastItem:l},r+t)});return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)(n.Z,{my:3,children:(0,o.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,o.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(TimelineList,{title:"Timeline with dotted line",children:e})}),(0,o.jsx)(r.ZP,{item:!0,xs:12,lg:6,children:(0,o.jsx)(TimelineList,{title:"Timeline with dotted line",dark:!0,children:e})})]})}),(0,o.jsx)(l.Z,{})]})}}},function(e){e.O(0,[487,6886,8067,9713,9774,2888,179],function(){return e(e.s=38426)}),_N_E=e.O()}]);