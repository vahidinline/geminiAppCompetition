"use strict";exports.id=8110,exports.ids=[8110],exports.modules={78110:(e,t,i)=>{i.d(t,{Z:()=>p});var s=i(20997),r=i(580),n=i.n(r),o=i(68167),d=i.n(o),l=i(73646),a=i.n(l),c=i(63843),x=i.n(c);i(68632);var h=i(89566),g=i(46769),u=i(35757);function BookingCard({day:e,image:t,title:i,description:r,sets:n,reps:o,rest:l,duration:c,notes:p,action:f,children:m}){let j=`
  For this exercise, you should complete ${n} sets.
  Each set should consist of ${o} repetitions.
  You should rest for ${l} between each set.
  After completing all sets of this exercise, rest for a total of ${c} before moving on to the next exercise.
`;return(0,s.jsxs)(d(),{children:[s.jsx(h.Z,{position:"relative",mt:10,mx:2,className:"card-header",sx:{transition:"transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)"},children:s.jsx(h.Z,{borderRadius:"lg",shadow:"md",width:"100%",height:"100%",position:"relative",zIndex:1,overflow:"hidden"})}),(0,s.jsxs)(h.Z,{textAlign:"center",pt:3,px:3,children:[s.jsx(h.Z,{display:"flex",justifyContent:"center",alignItems:"center",mt:f?-8:-4.25,children:f}),s.jsx("img",{src:t,alt:i,style:{width:"20%",height:"20%"}}),(0,s.jsxs)(g.Z,{variant:"h5",fontWeight:"regular",sx:{mt:4},children:["day ",e," - ",i]}),s.jsx(g.Z,{variant:"body2",color:"text",sx:{mt:1.5,mb:1},children:r})]}),s.jsx(a(),{}),s.jsx(h.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",pt:.5,pb:3,px:3,lineHeight:1,children:s.jsx(g.Z,{variant:"body2",fontWeight:"regular",color:"text",children:j})}),(0,s.jsxs)(h.Z,{color:"text",alignItems:"center",children:[(0,s.jsxs)(u.Z,{color:"warning",children:[s.jsx(x(),{fontSize:"small",children:"info"}),"\xa0",s.jsx(g.Z,{variant:"body2",fontWeight:"regular",color:"white",children:p})]}),m]})]})}BookingCard.defaultProps={action:!1},BookingCard.propTypes={image:n().oneOfType([n().string,n().object]).isRequired,title:n().string.isRequired,description:n().string.isRequired,sets:n().string.isRequired,reps:n().node.isRequired,rest:n().string.isRequired,duration:n().string.isRequired};let p=BookingCard}};