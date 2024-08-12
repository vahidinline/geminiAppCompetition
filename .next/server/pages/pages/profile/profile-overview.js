"use strict";(()=>{var A={};A.id=2615,A.ids=[2615,2888,660],A.modules={75762:(A,e,i)=>{i.a(A,async(A,t)=>{try{i.r(e),i.d(e,{config:()=>u,default:()=>p,getServerSideProps:()=>h,getStaticPaths:()=>x,getStaticProps:()=>g,reportWebVitals:()=>d,routeModule:()=>Q,unstable_getServerProps:()=>C,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>E,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var r=i(87093),a=i(35244),o=i(1323),s=i(73155),n=i(67648),l=i(40188),c=A([s,n]);[s,n]=c.then?(await c)():c;let m=r.PagesRouteModule,p=(0,o.l)(l,"default"),g=(0,o.l)(l,"getStaticProps"),x=(0,o.l)(l,"getStaticPaths"),h=(0,o.l)(l,"getServerSideProps"),u=(0,o.l)(l,"config"),d=(0,o.l)(l,"reportWebVitals"),f=(0,o.l)(l,"unstable_getStaticProps"),j=(0,o.l)(l,"unstable_getStaticPaths"),E=(0,o.l)(l,"unstable_getStaticParams"),C=(0,o.l)(l,"unstable_getServerProps"),w=(0,o.l)(l,"unstable_getServerSideProps"),Q=new m({definition:{kind:a.x.PAGES,page:"/pages/profile/profile-overview",pathname:"/pages/profile/profile-overview",bundlePath:"",filename:""},components:{App:n.default,Document:s.default},userland:l});t()}catch(A){t(A)}})},40188:(A,e,i)=>{i.r(e),i.d(e,{default:()=>profile_overview});var t=i(20997),r=i(15612),a=i.n(r),o=i(73646),s=i.n(o),n=i(17666),l=i.n(n),c=i(85631),m=i.n(c),p=i(73281),g=i.n(p),x=i(89566),h=i(46769),u=i(86819),d=i(5819),f=i(97629);i(41664);var j=i(580),E=i.n(j),C=i(68167),w=i.n(C);i(27229),i(63843);var Q=i(45746),b=i(94695);function ProfileInfoCard({title:A,description:e,info:i,previousDiagnoses:r,insuranceInformation:a,shadow:o}){let n=[],l=[],{socialMediaColors:c}=Q.default,{size:m}=b.default;Object.keys(i).forEach(A=>{if(A.match(/[A-Z\s]+/)){let e=Array.from(A).find(A=>A.match(/[A-Z]+/)),i=A.replace(e,` ${e.toLowerCase()}`);n.push(i)}else n.push(A)}),Object.values(i).forEach(A=>l.push(A));let p=n.map((A,e)=>(0,t.jsxs)(x.Z,{display:"flex",py:1,pr:2,children:[(0,t.jsxs)(h.Z,{variant:"button",fontWeight:"bold",textTransform:"capitalize",children:[A,": \xa0"]}),(0,t.jsxs)(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:["\xa0",l[e]]})]},A)),g=r.map(({diagnosis:A,date:e,treatment:i,i:r})=>t.jsx(x.Z,{component:"a",target:"_blank",rel:"noreferrer",fontSize:m.lg,pr:1,pl:.5,lineHeight:1,children:t.jsx(h.Z,{variant:"button",fontWeight:"bold",textTransform:"capitalize",children:A})},r)),u=a.map(({provider:A,policyNumber:e,groupNumber:i,i:r})=>t.jsx(x.Z,{component:"a",target:"_blank",rel:"noreferrer",fontSize:m.lg,pr:1,pl:.5,lineHeight:1,children:t.jsx(h.Z,{variant:"button",fontWeight:"bold",textTransform:"capitalize",children:A})},r));return(0,t.jsxs)(w(),{sx:{height:"100%",boxShadow:!o&&"none"},children:[t.jsx(x.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",pt:2,px:2,children:t.jsx(h.Z,{variant:"h6",fontWeight:"medium",textTransform:"capitalize",children:A})}),(0,t.jsxs)(x.Z,{p:2,children:[t.jsx(x.Z,{mb:2,lineHeight:1,children:t.jsx(h.Z,{variant:"button",color:"text",fontWeight:"light"})}),t.jsx(x.Z,{opacity:.3,children:t.jsx(s(),{})}),(0,t.jsxs)(x.Z,{children:[p,(0,t.jsxs)(x.Z,{display:"flex",py:1,pr:2,children:[t.jsx(h.Z,{variant:"button",fontWeight:"bold",textTransform:"capitalize",children:"Insurance information : \xa0"}),u," "]})]}),(0,t.jsxs)(x.Z,{children:[p,(0,t.jsxs)(x.Z,{display:"flex",py:1,pr:2,children:[t.jsx(h.Z,{variant:"button",fontWeight:"bold",textTransform:"capitalize",children:"Previous Diagnoses : \xa0"}),g]})]})]})]})}function ProfilesList({title:A,activityPlan:e,shadow:i}){console.log("activityPlan",e);let r=e.map(({day:A,exercises:e,i})=>t.jsx(x.Z,{component:"li",display:"flex",alignItems:"center",py:1,mb:1,children:(0,t.jsxs)(x.Z,{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",children:[(0,t.jsxs)(h.Z,{variant:"button",fontWeight:"medium",children:["day:",A]}),t.jsx(h.Z,{variant:"caption",color:"text",children:e.map(A=>(0,t.jsxs)(x.Z,{children:[t.jsx(h.Z,{variant:"h3",color:"text",children:A.name}),(0,t.jsxs)(h.Z,{variant:"caption",color:"text",children:["description: ",A.description]}),(0,t.jsxs)(h.Z,{variant:"caption",color:"text",children:["notes: ",A.notes]})]},A.id))})]})},i));return(0,t.jsxs)(w(),{sx:{height:"100%",boxShadow:!i&&"none"},children:[t.jsx(x.Z,{pt:2,px:2,children:t.jsx(h.Z,{variant:"h6",fontWeight:"medium",textTransform:"capitalize",children:A})}),t.jsx(x.Z,{p:2,children:t.jsx(x.Z,{component:"ul",display:"flex",flexDirection:"column",p:0,m:0,children:r})})]})}ProfileInfoCard.defaultProps={shadow:!0},ProfileInfoCard.propTypes={title:E().string.isRequired,description:E().string.isRequired,info:E().objectOf(E().string).isRequired,social:E().arrayOf(E().object).isRequired,action:E().shape({route:E().string.isRequired,tooltip:E().string.isRequired}).isRequired,shadow:E().bool},i(28294),i(68632),ProfilesList.defaultProps={shadow:!0},ProfilesList.propTypes={title:E().string.isRequired,profiles:E().arrayOf(E().object).isRequired,shadow:E().bool};var B=i(8556),Z=i(45737),I=i(16689),v=i(13191),P=i.n(v);let components_PlatformSettings=function(){let[A,e]=(0,I.useState)(!0),[i,r]=(0,I.useState)(!1),[a,o]=(0,I.useState)(!0),[s,n]=(0,I.useState)(!1),[l,c]=(0,I.useState)(!0),[m,p]=(0,I.useState)(!1);return(0,t.jsxs)(w(),{sx:{boxShadow:"none"},children:[t.jsx(x.Z,{p:2,children:t.jsx(h.Z,{variant:"h6",fontWeight:"medium",textTransform:"capitalize",children:"platform settings"})}),(0,t.jsxs)(x.Z,{pt:1,pb:2,px:2,lineHeight:1.25,children:[t.jsx(h.Z,{variant:"caption",fontWeight:"bold",color:"text",textTransform:"uppercase",children:"account"}),(0,t.jsxs)(x.Z,{display:"flex",alignItems:"center",mb:.5,ml:-1.5,children:[t.jsx(x.Z,{mt:.5,children:t.jsx(P(),{checked:A,onChange:()=>e(!A)})}),t.jsx(x.Z,{width:"80%",ml:.5,children:t.jsx(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:"Email me when someone follows me"})})]}),(0,t.jsxs)(x.Z,{display:"flex",alignItems:"center",mb:.5,ml:-1.5,children:[t.jsx(x.Z,{mt:.5,children:t.jsx(P(),{checked:i,onChange:()=>r(!i)})}),t.jsx(x.Z,{width:"80%",ml:.5,children:t.jsx(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:"Email me when someone answers on my post"})})]}),(0,t.jsxs)(x.Z,{display:"flex",alignItems:"center",mb:.5,ml:-1.5,children:[t.jsx(x.Z,{mt:.5,children:t.jsx(P(),{checked:a,onChange:()=>o(!a)})}),t.jsx(x.Z,{width:"80%",ml:.5,children:t.jsx(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:"Email me when someone mentions me"})})]}),t.jsx(x.Z,{mt:3,children:t.jsx(h.Z,{variant:"caption",fontWeight:"bold",color:"text",textTransform:"uppercase",children:"application"})}),(0,t.jsxs)(x.Z,{display:"flex",alignItems:"center",mb:.5,ml:-1.5,children:[t.jsx(x.Z,{mt:.5,children:t.jsx(P(),{checked:s,onChange:()=>n(!s)})}),t.jsx(x.Z,{width:"80%",ml:.5,children:t.jsx(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:"New launches and projects"})})]}),(0,t.jsxs)(x.Z,{display:"flex",alignItems:"center",mb:.5,ml:-1.5,children:[t.jsx(x.Z,{mt:.5,children:t.jsx(P(),{checked:l,onChange:()=>c(!l)})}),t.jsx(x.Z,{width:"80%",ml:.5,children:t.jsx(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:"Monthly product updates"})})]}),(0,t.jsxs)(x.Z,{display:"flex",alignItems:"center",mb:.5,ml:-1.5,children:[t.jsx(x.Z,{mt:.5,children:t.jsx(P(),{checked:m,onChange:()=>p(!m)})}),t.jsx(x.Z,{width:"80%",ml:.5,children:t.jsx(h.Z,{variant:"button",fontWeight:"regular",color:"text",children:"Subscribe to newsletter"})})]})]})]})};var D=i(35365),y=i(14952);let M=[{image:{src:"/_next/static/media/kal-visuals-square.ed295c0d.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAlAL/xAAbEAACAgMBAAAAAAAAAAAAAAACAwEEAAUSEf/aAAgBAQABPwAtPt6wjLaj3KFcGMDzzHmf/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgADYf/aAAgBAgEBPwBVHZ//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIDUf/aAAgBAwEBPwBWSxH/2Q==",blurWidth:8,blurHeight:8},name:"Sophie B.",description:"Hi! I need more information..",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"reply"}},{image:{src:"/_next/static/media/marie.460e7723.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJgC/wD/xAAbEAACAwADAAAAAAAAAAAAAAABAwIEIQAFQf/aAAgBAQABPwBXYUJTc2xNmuWFKGkL9zn/xAAWEQADAAAAAAAAAAAAAAAAAAAAASH/2gAIAQIBAT8AqP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhQf/aAAgBAwEBPwAoprOT/9k=",blurWidth:8,blurHeight:8},name:"Anne Marie",description:"Awesome work, can you..",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"reply"}},{image:{src:"/_next/static/media/ivana-square.10cb0e1f.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ8M/wD/xAAeEAACAQMFAAAAAAAAAAAAAAABAgQABREDEhQiMf/aAAgBAQABPwC3XmFF47HUAZHPueuV21//xAAVEQEBAAAAAAAAAAAAAAAAAAAAUf/aAAgBAgEBPwCv/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAwEBPwCLh//Z",blurWidth:8,blurHeight:8},name:"Ivanna",description:"About files I can..",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"reply"}},{image:y.Z,name:"Peterson",description:"Have a great afternoon..",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"reply"}},{image:D.Z,name:"Nick Daniel",description:"Hi! I need more information..",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"reply"}}],S={src:"/_next/static/media/home-decor-1.dc0ca618.jpg",height:1095,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAlQf/xAAdEAABBAIDAAAAAAAAAAAAAAACAQMEEgAFFFFh/9oACAEBAAE/AJe4lMcpppaqAAd+/M//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5},q={src:"/_next/static/media/home-decor-2.15863b89.jpg",height:1095,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKYTr//EABkQAQEAAwEAAAAAAAAAAAAAAAECAAMREv/aAAgBAQABPwCCXf7YlCyucz//xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAW/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQMBAT8AQv/Z",blurWidth:8,blurHeight:5},F={src:"/_next/static/media/home-decor-3.b0ddc512.jpg",height:1095,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoFP/xAAdEAABAwUBAAAAAAAAAAAAAAABAgMRAAQFBhRB/9oACAEBAAE/ANXyDvALfxthKQQYMGv/xAAYEQEBAAMAAAAAAAAAAAAAAAACAQARQv/aAAgBAgEBPwApSub6z//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAiEiQf/aAAgBAwEBPwAtFYxf/9k=",blurWidth:8,blurHeight:5},k={src:"/_next/static/media/home-decor-4.a5138244.jpeg",height:450,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAngf/xAAdEAABBAIDAAAAAAAAAAAAAAACAQMEBQATISIj/9oACAEBAAE/AKajFH4szf6sEJp14LP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:5};var U=i(98596),T=i(60607);let profile_overview=function(){return(0,t.jsxs)(u.Z,{children:[t.jsx(d.Z,{}),t.jsx(x.Z,{mb:2}),(0,t.jsxs)(Z.Z,{children:[t.jsx(x.Z,{mt:5,mb:3,children:(0,t.jsxs)(a(),{container:!0,spacing:1,children:[t.jsx(a(),{item:!0,xs:12,md:6,xl:4,children:t.jsx(components_PlatformSettings,{})}),(0,t.jsxs)(a(),{item:!0,xs:12,md:6,xl:4,sx:{display:"flex"},children:[t.jsx(s(),{orientation:"vertical",sx:{ml:-2,mr:1}}),t.jsx(ProfileInfoCard,{title:"profile information",description:"Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",info:{fullName:"Alec M. Thompson",mobile:"(44) 123 1234 123",email:"alecthompson@mail.com",location:"USA"},social:[{link:"https://www.facebook.com/CreativeTim/",icon:t.jsx(l(),{}),color:"facebook"},{link:"https://twitter.com/creativetim",icon:t.jsx(m(),{}),color:"twitter"},{link:"https://www.instagram.com/creativetimofficial/",icon:t.jsx(g(),{}),color:"instagram"}],action:{route:"/pages/profile/profile-overview",tooltip:"Edit Profile"},shadow:!1}),t.jsx(s(),{orientation:"vertical",sx:{mx:0}})]}),t.jsx(a(),{item:!0,xs:12,xl:4,children:t.jsx(ProfilesList,{title:"conversations",profiles:M,shadow:!1})})]})}),(0,t.jsxs)(x.Z,{pt:2,px:2,lineHeight:1.25,children:[t.jsx(h.Z,{variant:"h6",fontWeight:"medium",children:"Projects"}),t.jsx(x.Z,{mb:1,children:t.jsx(h.Z,{variant:"button",color:"text",children:"Architects design houses"})})]}),t.jsx(x.Z,{p:2,children:(0,t.jsxs)(a(),{container:!0,spacing:6,children:[t.jsx(a(),{item:!0,xs:12,md:6,xl:3,children:t.jsx(B.Z,{image:S,label:"project #2",title:"modern",description:"As Uber works through a huge amount of internal management turmoil.",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"view project"},authors:[{image:U.Z,name:"Elena Morison"},{image:T.Z,name:"Ryan Milly"},{image:D.Z,name:"Nick Daniel"},{image:y.Z,name:"Peterson"}]})}),t.jsx(a(),{item:!0,xs:12,md:6,xl:3,children:t.jsx(B.Z,{image:q,label:"project #1",title:"scandinavian",description:"Music is something that everyone has their own specific opinion about.",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"view project"},authors:[{image:D.Z,name:"Nick Daniel"},{image:y.Z,name:"Peterson"},{image:U.Z,name:"Elena Morison"},{image:T.Z,name:"Ryan Milly"}]})}),t.jsx(a(),{item:!0,xs:12,md:6,xl:3,children:t.jsx(B.Z,{image:F,label:"project #3",title:"minimalist",description:"Different people have different taste, and various types of music.",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"view project"},authors:[{image:y.Z,name:"Peterson"},{image:D.Z,name:"Nick Daniel"},{image:T.Z,name:"Ryan Milly"},{image:U.Z,name:"Elena Morison"}]})}),t.jsx(a(),{item:!0,xs:12,md:6,xl:3,children:t.jsx(B.Z,{image:k,label:"project #4",title:"gothic",description:"Why would anyone pick blue over pink? Pink is obviously a better color.",action:{type:"internal",route:"/pages/profile/profile-overview",color:"info",label:"view project"},authors:[{image:y.Z,name:"Peterson"},{image:D.Z,name:"Nick Daniel"},{image:T.Z,name:"Ryan Milly"},{image:U.Z,name:"Elena Morison"}]})})]})})]}),t.jsx(f.Z,{})]})}},63013:A=>{A.exports=require("@mui/base")},29295:A=>{A.exports=require("@mui/base/composeClasses")},17666:A=>{A.exports=require("@mui/icons-material/Facebook")},73281:A=>{A.exports=require("@mui/icons-material/Instagram")},85631:A=>{A.exports=require("@mui/icons-material/Twitter")},83882:A=>{A.exports=require("@mui/material/AppBar")},52120:A=>{A.exports=require("@mui/material/Avatar")},65168:A=>{A.exports=require("@mui/material/Badge")},19:A=>{A.exports=require("@mui/material/Box")},53819:A=>{A.exports=require("@mui/material/Button")},68167:A=>{A.exports=require("@mui/material/Card")},46731:A=>{A.exports=require("@mui/material/CardMedia")},15732:A=>{A.exports=require("@mui/material/Collapse")},94960:A=>{A.exports=require("@mui/material/CssBaseline")},73646:A=>{A.exports=require("@mui/material/Divider")},97898:A=>{A.exports=require("@mui/material/Drawer")},45634:A=>{A.exports=require("@mui/material/Fade")},15612:A=>{A.exports=require("@mui/material/Grid")},63843:A=>{A.exports=require("@mui/material/Icon")},67934:A=>{A.exports=require("@mui/material/IconButton")},85246:A=>{A.exports=require("@mui/material/Link")},94192:A=>{A.exports=require("@mui/material/List")},834:A=>{A.exports=require("@mui/material/ListItem")},63787:A=>{A.exports=require("@mui/material/ListItemIcon")},78315:A=>{A.exports=require("@mui/material/ListItemText")},48125:A=>{A.exports=require("@mui/material/Menu")},29271:A=>{A.exports=require("@mui/material/MenuItem")},13191:A=>{A.exports=require("@mui/material/Switch")},36042:A=>{A.exports=require("@mui/material/TextField")},91431:A=>{A.exports=require("@mui/material/Toolbar")},27229:A=>{A.exports=require("@mui/material/Tooltip")},27163:A=>{A.exports=require("@mui/material/Typography")},18442:A=>{A.exports=require("@mui/material/styles")},97986:A=>{A.exports=require("@mui/system")},90657:A=>{A.exports=require("@mui/utils")},66303:A=>{A.exports=require("chroma-js")},68103:A=>{A.exports=require("clsx")},3849:A=>{A.exports=require("github-buttons")},62785:A=>{A.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:A=>{A.exports=require("next/head")},580:A=>{A.exports=require("prop-types")},16689:A=>{A.exports=require("react")},66405:A=>{A.exports=require("react-dom")},1469:A=>{A.exports=require("react-is")},84466:A=>{A.exports=require("react-transition-group")},20997:A=>{A.exports=require("react/jsx-runtime")},93195:A=>{A.exports=require("stylis-plugin-rtl")},8440:A=>{A.exports=import("@emotion/cache")},53139:A=>{A.exports=import("@emotion/react")},730:A=>{A.exports=import("@emotion/server/create-instance")},57147:A=>{A.exports=require("fs")},71017:A=>{A.exports=require("path")},12781:A=>{A.exports=require("stream")},59796:A=>{A.exports=require("zlib")}};var e=require("../../../webpack-runtime.js");e.C(A);var __webpack_exec__=A=>e(e.s=A),i=e.X(0,[9966,6041,6859,8450,3864,6636,4605,5675,7648,3155,232,2637,5819,2137,5737,8556],()=>__webpack_exec__(75762));module.exports=i})();