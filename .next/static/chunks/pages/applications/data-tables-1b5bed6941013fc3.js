(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8646],{78487:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications/data-tables",function(){return t(78673)}])},60654:function(e,a,t){"use strict";t.d(a,{Z:function(){return Tables_DataTable}});var i=t(85893),n=t(67294),o=t(79521),r=t(7906),s=t(295),l=t(53184),c=t(72882),d=t(53816),f=t(53252),g=t(98456),p=t(89566);t(46769);var m=t(94936),u=t(45697),h=t.n(u),y=(0,t(90948).ZP)(m.Z)(e=>{let{theme:a,ownerState:t}=e,{borders:i,functions:n,typography:o,palette:r}=a,{variant:s,paginationSize:l,active:c}=t,{borderColor:d}=i,{pxToRem:f}=n,{fontWeightRegular:g,size:p}=o,{light:m}=r,u=f(36);return"small"===l?u=f(30):"large"===l&&(u=f(46)),{borderColor:d,margin:"0 ".concat(f(2)),pointerEvents:c?"none":"auto",fontWeight:g,fontSize:p.sm,width:u,minWidth:u,height:u,minHeight:u,"&:hover, &:focus, &:active":{transform:"none",boxShadow:("gradient"!==s||"contained"!==s)&&"none !important",opacity:"1 !important"},"&:hover":{backgroundColor:m.main,borderColor:d}}});let D=(0,n.createContext)(null),x=(0,n.forwardRef)((e,a)=>{let{item:t,variant:o,color:r,size:s,active:l,children:c,...d}=e,f=(0,n.useContext)(D),g=f?f.size:null,m=(0,n.useMemo)(()=>({variant:o,color:r,size:s}),[o,r,s]);return(0,i.jsx)(D.Provider,{value:m,children:t?(0,i.jsx)(y,{...d,ref:a,variant:l?f.variant:"outlined",color:l?f.color:"secondary",iconOnly:!0,circular:!0,ownerState:{variant:o,active:l,paginationSize:g},children:c}):(0,i.jsx)(p.Z,{display:"flex",justifyContent:"flex-end",alignItems:"center",sx:{listStyle:"none"},children:c})})});x.defaultProps={item:!1,variant:"gradient",color:"dark",size:"medium",active:!1},x.propTypes={item:h().bool,variant:h().oneOf(["gradient","contained"]),color:h().oneOf(["white","primary","secondary","info","success","warning","error","light","dark"]),size:h().oneOf(["small","medium","large"]),active:h().bool,children:h().node.isRequired},x.displayName="MDPagination";var b=t(59581);function DataTableHeadCell(e){let{width:a,children:t,sorted:n,align:o,...r}=e,[s]=(0,b.Ad)(),{darkMode:l}=s;return(0,i.jsx)(p.Z,{component:"th",width:a,py:1.5,px:3,sx:e=>{let{palette:{light:a},borders:{borderWidth:t}}=e;return{borderBottom:"".concat(t[1]," solid ").concat(a.main)}},children:(0,i.jsxs)(p.Z,{...r,position:"relative",textAlign:o,color:l?"white":"secondary",opacity:.7,sx:e=>{let{typography:{size:a,fontWeightBold:t}}=e;return{fontSize:a.xxs,fontWeight:t,textTransform:"uppercase",cursor:n&&"pointer",userSelect:n&&"none"}},children:[t,n&&(0,i.jsx)(p.Z,{position:"absolute",top:0,right:"right"!==o?"16px":0,left:"right"===o?"-5px":"unset",sx:e=>{let{typography:{size:a}}=e;return{fontSize:a.lg}}})]})})}function DataTableBodyCell(e){let{noBorder:a,align:t,children:n}=e;return(0,i.jsx)(p.Z,{component:"td",textAlign:t,py:1.5,px:3,sx:e=>{let{palette:{light:t},typography:{size:i},borders:{borderWidth:n}}=e;return{fontSize:i.sm,borderBottom:a?"none":"".concat(n[1]," solid ").concat(t.main)}},children:(0,i.jsx)(p.Z,{display:"inline-block",width:"max-content",color:"text",sx:{verticalAlign:"middle"},children:n})})}DataTableHeadCell.defaultProps={width:"auto",sorted:"none",align:"left"},DataTableHeadCell.propTypes={width:h().oneOfType([h().string,h().number]),children:h().node.isRequired,sorted:h().oneOf([!1,"none","asce","desc"]),align:h().oneOf(["left","right","center"])},DataTableBodyCell.defaultProps={noBorder:!1,align:"left"},DataTableBodyCell.propTypes={children:h().node.isRequired,noBorder:h().bool,align:h().oneOf(["left","right","center"])};var $=t(15861),v=t(11163),Tables_DataTable=function(e){let{patientList:a,entriesPerPage:t,canSearch:u,showTotalEntries:h,pagination:y,isSorted:D,noEndBorder:x}=e,[b,C]=(0,n.useState)("loading"),S=t.defaultValue||10;t.entries&&t.entries.map(e=>e.toString());let j=(0,n.useMemo)(()=>[{Header:"Patient ID",accessor:"patientID",width:"15%"},{Header:"First Name",accessor:"firstName",width:"30%"},{Header:"Last Name",accessor:"lastName",width:"30%"},{Header:"Action",accessor:"action",width:"15%"}],[]),T=(0,n.useMemo)(()=>a,[a]);(0,n.useEffect)(()=>{0===T.length?C("loading"):C("success")},[T]);let P=(0,o.useTable)({columns:j,data:T,initialState:{pageIndex:0}},o.useGlobalFilter,o.useSortBy,o.usePagination),{getTableProps:A,getTableBodyProps:w,headerGroups:Z,prepareRow:H,rows:I,page:k,pageOptions:M,canPreviousPage:B,canNextPage:E,gotoPage:z,nextPage:G,previousPage:_,setPageSize:N,setGlobalFilter:O,state:{pageIndex:R,pageSize:J,globalFilter:L}}=P;(0,n.useEffect)(()=>N(S||10),[S,N]);let W=(0,v.useRouter)();return"loading"===b?(0,i.jsx)(p.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,i.jsx)(g.Z,{})}):(0,i.jsx)(c.Z,{children:(0,i.jsxs)(r.Z,{...A(),children:[(0,i.jsx)(l.Z,{children:Z.map(e=>(0,i.jsx)(d.Z,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,i.jsx)(DataTableHeadCell,{...e.getHeaderProps(e.getSortByToggleProps()),children:(0,i.jsxs)($.Z,{variant:"body2",sx:{textTransform:"capitalize"},children:[e.render("Header"),e.isSorted?e.isSortedDesc?" ▼":" ▲":""]})},e.id))}))}),(0,i.jsx)(s.Z,{...w(),children:k.map(e=>(H(e),(0,i.jsxs)(d.Z,{...e.getRowProps(),children:[e.cells.map(e=>(0,i.jsx)(DataTableBodyCell,{...e.getCellProps(),children:(0,i.jsx)($.Z,{variant:"body2",sx:{textTransform:"capitalize"},children:e.render("Cell")})},e.id)),(0,i.jsx)(f.Z,{children:(0,i.jsx)(m.Z,{onClick:()=>W.push("/patient/".concat(e.original._id)),variant:"gradient",color:"light",children:"View"})})]})))})]})})}},78673:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return data_tables}});var i=t(85893),n=t(66242),o=t(89566),r=t(46769),s=t(86819),l=t(5819),c=t(97629),d=t(60654),f={columns:[{Header:"name",accessor:"name",width:"20%"},{Header:"position",accessor:"position",width:"25%"},{Header:"office",accessor:"office"},{Header:"age",accessor:"age",width:"7%"},{Header:"start date",accessor:"startDate"},{Header:"salary",accessor:"salary"}],rows:[{name:"Hanny Baniard",position:"Data Coordiator",office:"Baorixile",age:42,startDate:"4/11/2021",salary:"$474,978"},{name:"Lara Puleque",position:"Payment Adjustment Coordinator",office:"Cijangkar",age:47,startDate:"8/2/2021",salary:"$387,287"},{name:"Torie Repper",position:"Administrative Officer",office:"Montpellier",age:25,startDate:"4/21/2021",salary:"$94,780"},{name:"Nat Gair",position:"Help Desk Technician",office:"Imider",age:57,startDate:"12/6/2020",salary:"$179,177"},{name:"Maggi Slowan",position:"Help Desk Technician",office:"Jaunpils",age:56,startDate:"11/7/2020",salary:"$440,874"},{name:"Marleah Snipe",position:"Account Representative II",office:"Orekhovo-Borisovo Severnoye",age:31,startDate:"7/18/2021",salary:"$404,983"},{name:"Georgia Danbury",position:"Professor",office:"Gniezno",age:50,startDate:"10/1/2020",salary:"$346,576"},{name:"Bev Castan",position:"Design Engineer",office:"Acharn\xe9s",age:19,startDate:"1/14/2021",salary:"$445,171"},{name:"Reggi Westney",position:"Financial Advisor",office:"Piu\xed",age:56,startDate:"3/21/2021",salary:"$441,569"},{name:"Bartholomeus Prosh",position:"Project Manager",office:"Kelīshād va Sūdarjān",age:28,startDate:"5/27/2021",salary:"$336,238"},{name:"Sheffy Feehely",position:"Software Consultant",office:"Ndib\xe8ne Dahra",age:27,startDate:"3/23/2021",salary:"$473,391"},{name:"Euphemia Chastelain",position:"Engineer IV",office:"Little Baguio",age:63,startDate:"5/1/2021",salary:"$339,489"},{name:"Sharai Labat",position:"Geological Engineer",office:"B\xfdšť",age:53,startDate:"6/18/2021",salary:"$403,178"},{name:"Nicolis Bremmell",position:"Analyst Programmer",office:"Pira\xed do Sul",age:27,startDate:"1/29/2021",salary:"$443,473"},{name:"Mattie Rait",position:"Budget/Accounting Analyst IV",office:"Meziměst\xed",age:30,startDate:"6/9/2021",salary:"$233,875"},{name:"Inger Gawkes",position:"Internal Auditor",office:"Kangar",age:27,startDate:"4/20/2021",salary:"$378,343"},{name:"Aldus Marginson",position:"Chief Design Engineer",office:"Pingdingshan",age:29,startDate:"3/24/2021",salary:"$223,231"},{name:"Wendel Swaite",position:"Speech Pathologist",office:"Rubirizi",age:22,startDate:"6/5/2021",salary:"$325,812"},{name:"Duffy Cicconetti",position:"Software Test Engineer I",office:"Sendai-shi",age:58,startDate:"5/2/2021",salary:"$335,397"},{name:"Mandi Paulley",position:"Account Representative III",office:"Independencia",age:25,startDate:"4/27/2021",salary:"$367,351"},{name:"Gladi Doorly",position:"Dental Hygienist",office:"Longwy",age:52,startDate:"4/28/2021",salary:"$306,827"},{name:"Johnnie Godfray",position:"Human Resources Manager",office:"Afikpo",age:31,startDate:"4/15/2021",salary:"$275,513"},{name:"Rudolph Jurczik",position:"Web Developer III",office:"Jaciara",age:36,startDate:"11/19/2020",salary:"$193,993"},{name:"Annmarie Fulbrook",position:"Cost Accountant",office:"Lisala",age:25,startDate:"9/30/2020",salary:"$423,486"},{name:"Daisey Nickolls",position:"Electrical Engineer",office:"Xucheng",age:60,startDate:"2/26/2021",salary:"$209,415"},{name:"Mordecai Dace",position:"Help Desk Technician",office:"Busuanga",age:22,startDate:"1/29/2021",salary:"$263,774"},{name:"Melisande Spall",position:"VP Accounting",office:"Xiakouyi",age:50,startDate:"11/21/2020",salary:"$290,169"},{name:"Karlik Sherrock",position:"GIS Technical Architect",office:"Bagumbayan",age:50,startDate:"3/13/2021",salary:"$217,224"},{name:"Constance Vinick",position:"Physical Therapy Assistant",office:"Jiaoba",age:46,startDate:"3/23/2021",salary:"$146,130"},{name:"Kimberlee Hoogendorp",position:"Dental Hygienist",office:"Santo Ant\xf4nio de P\xe1dua",age:63,startDate:"4/11/2021",salary:"$401,826"},{name:"Jephthah McIlvenny",position:"Executive Secretary",office:"Poligny",age:40,startDate:"2/25/2021",salary:"$397,099"},{name:"Claudetta Ivanchenkov",position:"Computer Systems Analyst III",office:"Barranca de Up\xeda",age:22,startDate:"2/4/2021",salary:"$497,394"},{name:"Gordie Winterbottom",position:"General Manager",office:"Kaeng Khro",age:18,startDate:"6/11/2021",salary:"$85,498"},{name:"Yvor Ching",position:"Systems Administrator IV",office:"Sobreira",age:43,startDate:"10/4/2020",salary:"$445,688"},{name:"Marilin Swires",position:"Electrical Engineer",office:"Longnan",age:38,startDate:"10/30/2020",salary:"$121,519"},{name:"Tobey Fernan",position:"Compensation Analyst",office:"Hushan",age:31,startDate:"3/17/2021",salary:"$275,670"},{name:"Jan Trustrie",position:"Developer IV",office:"Mashava",age:34,startDate:"12/3/2020",salary:"$200,260"},{name:"Silva Linger",position:"Nurse Practicioner",office:"Cosne-Cours-sur-Loire",age:25,startDate:"1/14/2021",salary:"$490,838"},{name:"Jocko Oriel",position:"Design Engineer",office:"Clisson",age:61,startDate:"12/2/2020",salary:"$401,741"},{name:"Barbra Ready",position:"Paralegal",office:"Xuedian",age:29,startDate:"11/3/2020",salary:"$246,939"},{name:"Cynde Blakeslee",position:"Software Consultant",office:"Kembangan",age:23,startDate:"1/9/2021",salary:"$186,173"},{name:"Erminia O' Shea",position:"Analog Circuit Design manager",office:"Tungawan",age:51,startDate:"12/8/2020",salary:"$209,678"},{name:"Pietro Hoggins",position:"Account Coordinator",office:"Lexington",age:34,startDate:"7/1/2021",salary:"$245,579"},{name:"Cobb Fish",position:"VP Product Management",office:"General Elizardo Aquino",age:60,startDate:"8/27/2020",salary:"$201,191"},{name:"Goddart Zorzutti",position:"Office Assistant I",office:"Hedi",age:44,startDate:"4/14/2021",salary:"$89,168"},{name:"Joyce Gason",position:"VP Product Management",office:"Jingzhou",age:48,startDate:"10/10/2020",salary:"$285,350"},{name:"Juliet Lemm",position:"Junior Executive",office:"Tečovice",age:37,startDate:"4/28/2021",salary:"$479,963"},{name:"Filberte Dobrowolski",position:"Senior Cost Accountant",office:"Puncakmanis",age:55,startDate:"8/21/2020",salary:"$424,438"},{name:"Justinian Faraday",position:"Help Desk Technician",office:"Bacong",age:60,startDate:"1/24/2021",salary:"$369,012"},{name:"Amata Cahan",position:"Technical Writer",office:"Hradec Kr\xe1lov\xe9",age:56,startDate:"9/22/2020",salary:"$385,712"},{name:"Gunar Albrecht",position:"Tax Accountant",office:"Chernivtsi",age:52,startDate:"6/30/2021",salary:"$392,642"},{name:"Mal Deignan",position:"Senior Cost Accountant",office:"Nefta",age:57,startDate:"7/18/2021",salary:"$322,031"},{name:"Hamil Cicci",position:"Programmer Analyst IV",office:"Fukushima-shi",age:34,startDate:"10/7/2020",salary:"$471,172"},{name:"Stormie Peacop",position:"GIS Technical Architect",office:"Emiliano Zapata",age:57,startDate:"10/21/2020",salary:"$217,522"},{name:"Kayle Fallon",position:"Technical Writer",office:"Midleton",age:19,startDate:"12/10/2020",salary:"$294,275"},{name:"Cassandre Watters",position:"Technical Writer",office:"Karang Tengah",age:21,startDate:"7/31/2021",salary:"$213,508"},{name:"Cobb Fish",position:"VP Product Management",office:"General Elizardo Aquino",age:60,startDate:"8/27/2020",salary:"$201,191"}]},data_tables=function(){return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsxs)(o.Z,{pt:6,pb:3,children:[(0,i.jsx)(o.Z,{mb:3,children:(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(o.Z,{p:3,lineHeight:1,children:[(0,i.jsx)(r.Z,{variant:"h5",fontWeight:"medium",children:"Datatable Simple"}),(0,i.jsx)(r.Z,{variant:"button",color:"text",children:"A lightweight, extendable, dependency-free javascript HTML table plugin."})]}),(0,i.jsx)(d.Z,{table:f})]})}),(0,i.jsxs)(n.Z,{children:[(0,i.jsxs)(o.Z,{p:3,lineHeight:1,children:[(0,i.jsx)(r.Z,{variant:"h5",fontWeight:"medium",children:"Datatable Search"}),(0,i.jsx)(r.Z,{variant:"button",color:"text",children:"A lightweight, extendable, dependency-free javascript HTML table plugin."})]}),(0,i.jsx)(d.Z,{table:f,canSearch:!0})]})]}),(0,i.jsx)(c.Z,{})]})}}},function(e){e.O(0,[487,8067,4411,8976,9713,9774,2888,179],function(){return e(e.s=78487)}),_N_E=e.O()}]);