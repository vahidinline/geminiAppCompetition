(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7011],{69368:function(e,A,t){"use strict";t.d(A,{Z:function(){return b}});var r=t(63366),a=t(87462),i=t(67294),n=t(90512),o=t(94780),s=t(8423),l=t(21964),c=t(82066),d=t(85893),u=(0,c.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),g=(0,c.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,c.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(98216),x=t(71657),C=t(90948),m=t(1588),f=t(34867);function getCheckboxUtilityClass(e){return(0,f.ZP)("MuiCheckbox",e)}let v=(0,m.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Z=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],useUtilityClasses=e=>{let{classes:A,indeterminate:t,color:r,size:i}=e,n={root:["root",t&&"indeterminate",`color${(0,p.Z)(r)}`,`size${(0,p.Z)(i)}`]},s=(0,o.Z)(n,getCheckboxUtilityClass,A);return(0,a.Z)({},A,s)},E=(0,C.ZP)(l.Z,{shouldForwardProp:e=>(0,C.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,A)=>{let{ownerState:t}=e;return[A.root,t.indeterminate&&A.indeterminate,"default"!==t.color&&A[`color${(0,p.Z)(t.color)}`]]}})(({theme:e,ownerState:A})=>(0,a.Z)({color:(e.vars||e).palette.text.secondary},!A.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===A.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)("default"===A.color?e.palette.action.active:e.palette[A.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==A.color&&{[`&.${v.checked}, &.${v.indeterminate}`]:{color:(e.vars||e).palette[A.color].main},[`&.${v.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),B=(0,d.jsx)(g,{}),j=(0,d.jsx)(u,{}),I=(0,d.jsx)(h,{}),w=i.forwardRef(function(e,A){var t,o;let s=(0,x.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:l=B,color:c="primary",icon:u=j,indeterminate:g=!1,indeterminateIcon:h=I,inputProps:p,size:C="medium",className:m}=s,f=(0,r.Z)(s,Z),v=g?h:u,w=g?h:l,b=(0,a.Z)({},s,{color:c,indeterminate:g,size:C}),Q=useUtilityClasses(b);return(0,d.jsx)(E,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":g},p),icon:i.cloneElement(v,{fontSize:null!=(t=v.props.fontSize)?t:C}),checkedIcon:i.cloneElement(w,{fontSize:null!=(o=w.props.fontSize)?o:C}),ownerState:b,ref:A,className:(0,n.Z)(Q.root,m)},f,{classes:Q}))});var b=w},21964:function(e,A,t){"use strict";t.d(A,{Z:function(){return v}});var r=t(63366),a=t(87462),i=t(67294),n=t(90512),o=t(94780),s=t(98216),l=t(90948),c=t(49299),d=t(74423),u=t(47739),g=t(1588),h=t(34867);function getSwitchBaseUtilityClass(e){return(0,h.ZP)("PrivateSwitchBase",e)}(0,g.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var p=t(85893);let x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],useUtilityClasses=e=>{let{classes:A,checked:t,disabled:r,edge:a}=e,i={root:["root",t&&"checked",r&&"disabled",a&&`edge${(0,s.Z)(a)}`],input:["input"]};return(0,o.Z)(i,getSwitchBaseUtilityClass,A)},C=(0,l.ZP)(u.Z)(({ownerState:e})=>(0,a.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),m=(0,l.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),f=i.forwardRef(function(e,A){let{autoFocus:t,checked:i,checkedIcon:o,className:s,defaultChecked:l,disabled:u,disableFocusRipple:g=!1,edge:h=!1,icon:f,id:v,inputProps:Z,inputRef:E,name:B,onBlur:j,onChange:I,onFocus:w,readOnly:b,required:Q=!1,tabIndex:y,type:k,value:M}=e,P=(0,r.Z)(e,x),[D,S]=(0,c.Z)({controlled:i,default:!!l,name:"SwitchBase",state:"checked"}),T=(0,d.Z)(),F=u;T&&void 0===F&&(F=T.disabled);let R="checkbox"===k||"radio"===k,z=(0,a.Z)({},e,{checked:D,disabled:F,disableFocusRipple:g,edge:h}),U=useUtilityClasses(z);return(0,p.jsxs)(C,(0,a.Z)({component:"span",className:(0,n.Z)(U.root,s),centerRipple:!0,focusRipple:!g,disabled:F,tabIndex:null,role:void 0,onFocus:e=>{w&&w(e),T&&T.onFocus&&T.onFocus(e)},onBlur:e=>{j&&j(e),T&&T.onBlur&&T.onBlur(e)},ownerState:z,ref:A},P,{children:[(0,p.jsx)(m,(0,a.Z)({autoFocus:t,checked:i,defaultChecked:l,className:U.input,disabled:F,id:R?v:void 0,name:B,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;let A=e.target.checked;S(A),I&&I(e,A)},readOnly:b,ref:E,required:Q,ownerState:z,tabIndex:y,type:k},"checkbox"===k&&void 0===M?{}:{value:M},Z)),D?o:f]}))});var v=f},13074:function(e,A,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ecommerce/orders/order-list",function(){return t(13321)}])},98596:function(e,A){"use strict";A.Z={src:"/_next/static/media/team-1.cd822dc7.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAmwBf/8QAHhAAAgIABwAAAAAAAAAAAAAAAQIDBAAFExQiUeL/2gAIAQEAAT8ASOtYyYThU192UdSOvPLH/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFCcf/aAAgBAgEBPwBVp//EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRISL/2gAIAQMBAT8At0ygDHCz/9k=",blurWidth:8,blurHeight:8}},60607:function(e,A){"use strict";A.Z={src:"/_next/static/media/team-2.1593fb7f.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAuCv/xAAfEAABAwMFAAAAAAAAAAAAAAACAQMFABNyBAYSIUH/2gAIAQEAAT8A026I+8Tz0iJhztKCN9upj7lX/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhUf/aAAgBAgEBPwC6z//EABgRAAIDAAAAAAAAAAAAAAAAAAABITFS/9oACAEDAQE/AIyqP//Z",blurWidth:8,blurHeight:8}},14952:function(e,A){"use strict";A.Z={src:"/_next/static/media/team-4.f9d98090.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAmwK//8QAHBABAAIBBQAAAAAAAAAAAAAAAQIDBAASFCJS/9oACAEBAAE/AAx+DZXOvbll4k1Dr51//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAgEBPwBXT//EABcRAAMBAAAAAAAAAAAAAAAAAAACQnH/2gAIAQMBAT8AacP/2Q==",blurWidth:8,blurHeight:8}},89933:function(e,A){"use strict";A.Z={src:"/_next/static/media/team-5.249ffb17.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIhKv//EAB0QAAIBBAMAAAAAAAAAAAAAAAIDAQAFESETIrH/2gAIAQEAAT8AcaAtzENlfN0Id7KC9xX/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIicf/aAAgBAgEBPwCCrp//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDIUL/2gAIAQMBAT8AvjoprkJ//9k=",blurWidth:8,blurHeight:8}},60654:function(e,A,t){"use strict";t.d(A,{Z:function(){return Tables_DataTable}});var r=t(85893),a=t(67294),i=t(79521),n=t(7906),o=t(295),s=t(53184),l=t(72882),c=t(53816),d=t(53252),u=t(98456),g=t(89566);t(46769);var h=t(94936),p=t(45697),x=t.n(p),C=(0,t(90948).ZP)(h.Z)(e=>{let{theme:A,ownerState:t}=e,{borders:r,functions:a,typography:i,palette:n}=A,{variant:o,paginationSize:s,active:l}=t,{borderColor:c}=r,{pxToRem:d}=a,{fontWeightRegular:u,size:g}=i,{light:h}=n,p=d(36);return"small"===s?p=d(30):"large"===s&&(p=d(46)),{borderColor:c,margin:"0 ".concat(d(2)),pointerEvents:l?"none":"auto",fontWeight:u,fontSize:g.sm,width:p,minWidth:p,height:p,minHeight:p,"&:hover, &:focus, &:active":{transform:"none",boxShadow:("gradient"!==o||"contained"!==o)&&"none !important",opacity:"1 !important"},"&:hover":{backgroundColor:h.main,borderColor:c}}});let m=(0,a.createContext)(null),f=(0,a.forwardRef)((e,A)=>{let{item:t,variant:i,color:n,size:o,active:s,children:l,...c}=e,d=(0,a.useContext)(m),u=d?d.size:null,h=(0,a.useMemo)(()=>({variant:i,color:n,size:o}),[i,n,o]);return(0,r.jsx)(m.Provider,{value:h,children:t?(0,r.jsx)(C,{...c,ref:A,variant:s?d.variant:"outlined",color:s?d.color:"secondary",iconOnly:!0,circular:!0,ownerState:{variant:i,active:s,paginationSize:u},children:l}):(0,r.jsx)(g.Z,{display:"flex",justifyContent:"flex-end",alignItems:"center",sx:{listStyle:"none"},children:l})})});f.defaultProps={item:!1,variant:"gradient",color:"dark",size:"medium",active:!1},f.propTypes={item:x().bool,variant:x().oneOf(["gradient","contained"]),color:x().oneOf(["white","primary","secondary","info","success","warning","error","light","dark"]),size:x().oneOf(["small","medium","large"]),active:x().bool,children:x().node.isRequired},f.displayName="MDPagination";var v=t(59581);function DataTableHeadCell(e){let{width:A,children:t,sorted:a,align:i,...n}=e,[o]=(0,v.Ad)(),{darkMode:s}=o;return(0,r.jsx)(g.Z,{component:"th",width:A,py:1.5,px:3,sx:e=>{let{palette:{light:A},borders:{borderWidth:t}}=e;return{borderBottom:"".concat(t[1]," solid ").concat(A.main)}},children:(0,r.jsxs)(g.Z,{...n,position:"relative",textAlign:i,color:s?"white":"secondary",opacity:.7,sx:e=>{let{typography:{size:A,fontWeightBold:t}}=e;return{fontSize:A.xxs,fontWeight:t,textTransform:"uppercase",cursor:a&&"pointer",userSelect:a&&"none"}},children:[t,a&&(0,r.jsx)(g.Z,{position:"absolute",top:0,right:"right"!==i?"16px":0,left:"right"===i?"-5px":"unset",sx:e=>{let{typography:{size:A}}=e;return{fontSize:A.lg}}})]})})}function DataTableBodyCell(e){let{noBorder:A,align:t,children:a}=e;return(0,r.jsx)(g.Z,{component:"td",textAlign:t,py:1.5,px:3,sx:e=>{let{palette:{light:t},typography:{size:r},borders:{borderWidth:a}}=e;return{fontSize:r.sm,borderBottom:A?"none":"".concat(a[1]," solid ").concat(t.main)}},children:(0,r.jsx)(g.Z,{display:"inline-block",width:"max-content",color:"text",sx:{verticalAlign:"middle"},children:a})})}DataTableHeadCell.defaultProps={width:"auto",sorted:"none",align:"left"},DataTableHeadCell.propTypes={width:x().oneOfType([x().string,x().number]),children:x().node.isRequired,sorted:x().oneOf([!1,"none","asce","desc"]),align:x().oneOf(["left","right","center"])},DataTableBodyCell.defaultProps={noBorder:!1,align:"left"},DataTableBodyCell.propTypes={children:x().node.isRequired,noBorder:x().bool,align:x().oneOf(["left","right","center"])};var Z=t(15861),E=t(11163),Tables_DataTable=function(e){let{patientList:A,entriesPerPage:t,canSearch:p,showTotalEntries:x,pagination:C,isSorted:m,noEndBorder:f}=e,[v,B]=(0,a.useState)("loading"),j=t.defaultValue||10;t.entries&&t.entries.map(e=>e.toString());let I=(0,a.useMemo)(()=>[{Header:"Patient ID",accessor:"patientID",width:"15%"},{Header:"First Name",accessor:"firstName",width:"30%"},{Header:"Last Name",accessor:"lastName",width:"30%"},{Header:"Action",accessor:"action",width:"15%"}],[]),w=(0,a.useMemo)(()=>A,[A]);(0,a.useEffect)(()=>{0===w.length?B("loading"):B("success")},[w]);let b=(0,i.useTable)({columns:I,data:w,initialState:{pageIndex:0}},i.useGlobalFilter,i.useSortBy,i.usePagination),{getTableProps:Q,getTableBodyProps:y,headerGroups:k,prepareRow:M,rows:P,page:D,pageOptions:S,canPreviousPage:T,canNextPage:F,gotoPage:R,nextPage:z,previousPage:U,setPageSize:H,setGlobalFilter:N,state:{pageIndex:K,pageSize:O,globalFilter:L}}=b;(0,a.useEffect)(()=>H(j||10),[j,H]);let W=(0,E.useRouter)();return"loading"===v?(0,r.jsx)(g.Z,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:(0,r.jsx)(u.Z,{})}):(0,r.jsx)(l.Z,{children:(0,r.jsxs)(n.Z,{...Q(),children:[(0,r.jsx)(s.Z,{children:k.map(e=>(0,r.jsx)(c.Z,{...e.getHeaderGroupProps(),children:e.headers.map(e=>(0,r.jsx)(DataTableHeadCell,{...e.getHeaderProps(e.getSortByToggleProps()),children:(0,r.jsxs)(Z.Z,{variant:"body2",sx:{textTransform:"capitalize"},children:[e.render("Header"),e.isSorted?e.isSortedDesc?" ▼":" ▲":""]})},e.id))}))}),(0,r.jsx)(o.Z,{...y(),children:D.map(e=>(M(e),(0,r.jsxs)(c.Z,{...e.getRowProps(),children:[e.cells.map(e=>(0,r.jsx)(DataTableBodyCell,{...e.getCellProps(),children:(0,r.jsx)(Z.Z,{variant:"body2",sx:{textTransform:"capitalize"},children:e.render("Cell")})},e.id)),(0,r.jsx)(d.Z,{children:(0,r.jsx)(h.Z,{onClick:()=>W.push("/patient/".concat(e.original._id)),variant:"gradient",color:"light",children:"View"})})]})))})]})})}},13321:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return order_list}});var r=t(85893),a=t(67294),i=t(66242),n=t(67564),o=t(35294),s=t(18972),l=t(67720),c=t(89566),d=t(46769),u=t(94936),g=t(86819),h=t(5819),p=t(97629),x=t(60654),C=t(45697),m=t.n(C),f=t(69368);function IdCell(e){let{id:A,checked:t}=e;return(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,r.jsx)(f.Z,{defaultChecked:t}),(0,r.jsx)(c.Z,{ml:1,children:(0,r.jsx)(d.Z,{variant:"caption",fontWeight:"medium",color:"text",children:A})})]})}function DefaultCell(e){let{value:A,suffix:t}=e;return(0,r.jsxs)(d.Z,{variant:"caption",fontWeight:"medium",color:"text",children:[A,t&&(0,r.jsxs)(d.Z,{variant:"caption",fontWeight:"medium",color:"secondary",children:["\xa0\xa0",t]})]})}function StatusCell(e){let{icon:A,color:t,status:a}=e;return(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,r.jsx)(c.Z,{mr:1,children:(0,r.jsx)(u.Z,{variant:"outlined",color:t,size:"small",iconOnly:!0,circular:!0,children:(0,r.jsx)(n.Z,{sx:{fontWeight:"bold"},children:A})})}),(0,r.jsx)(d.Z,{variant:"caption",fontWeight:"medium",color:"text",sx:{lineHeight:0},children:a})]})}IdCell.defaultProps={checked:!1},IdCell.propTypes={id:m().string.isRequired,checked:m().bool},DefaultCell.defaultProps={suffix:""},DefaultCell.propTypes={value:m().string.isRequired,suffix:m().oneOfType([m().string,m().bool])},StatusCell.propTypes={icon:m().string.isRequired,color:m().string.isRequired,status:m().string.isRequired};var v=t(56643);function CustomerCell(e){let{image:A,name:t,color:a}=e;return(0,r.jsxs)(c.Z,{display:"flex",alignItems:"center",children:[(0,r.jsx)(c.Z,{mr:1,children:(0,r.jsx)(v.Z,{bgColor:a,src:A.src||A,alt:t,size:"xs"})}),(0,r.jsx)(d.Z,{variant:"caption",fontWeight:"medium",color:"text",sx:{lineHeight:0},children:t})]})}CustomerCell.defaultProps={image:"",color:"dark"},CustomerCell.propTypes={image:m().oneOfType([m().string,m().object]),name:m().string.isRequired,color:m().oneOf(["transparent","primary","secondary","info","success","warning","error","light","dark"])};var Z=t(98596),E=t(60607),B=t(35365),j=t(14952),I=t(89933);let w={columns:[{Header:"id",accessor:"id",Cell:e=>{let{value:A}=e;return(0,r.jsx)(IdCell,{id:A})}},{Header:"date",accessor:"date",Cell:e=>{let{value:A}=e;return(0,r.jsx)(DefaultCell,{value:A})}},{Header:"status",accessor:"status",Cell:e=>{let{value:A}=e;return"paid"===A?(0,r.jsx)(StatusCell,{icon:"done",color:"success",status:"Paid"}):"refunded"===A?(0,r.jsx)(StatusCell,{icon:"replay",color:"dark",status:"Refunded"}):(0,r.jsx)(StatusCell,{icon:"close",color:"error",status:"Canceled"})}},{Header:"customer",accessor:"customer",Cell:e=>{let{value:[A,t]}=e;return(0,r.jsx)(CustomerCell,{image:t.image,color:t.color||"dark",name:A})}},{Header:"product",accessor:"product",Cell:e=>{let{value:A}=e,[t,a]=A;return(0,r.jsx)(DefaultCell,{value:"string"==typeof A?A:t,suffix:a.suffix||!1})}},{Header:"revenue",accessor:"revenue",Cell:e=>{let{value:A}=e;return(0,r.jsx)(DefaultCell,{value:A})}}],rows:[{id:"#10421",date:"1 Nov, 10:20 AM",status:"paid",customer:["Orlando Imieto",{image:E.Z}],product:"Nike Sport V2",revenue:"$140,20"},{id:"#10422",date:"1 Nov, 10:53 AM",status:"paid",customer:["Alice Murinho",{image:Z.Z}],product:"Valvet T-shirt",revenue:"$42,00"},{id:"#10423",date:"1 Nov, 11:13 AM",status:"refunded",customer:["Michael Mirra",{image:"M"}],product:["Leather Wallet",{suffix:"+1 more"}],revenue:"$25,50"},{id:"#10424",date:"1 Nov, 12:20 PM",status:"paid",customer:["Andrew Nichel",{image:B.Z}],product:"Bracelet Onu-Lino",revenue:"$19,40"},{id:"#10425",date:"1 Nov, 1:40 PM",status:"canceled",customer:["Sebastian Koga",{image:j.Z}],product:["Phone Case Pink",{suffix:"x 2"}],revenue:"$44,90"},{id:"#10426",date:"1 Nov, 2:19 PM",status:"paid",customer:["Laur Gilbert",{image:"L"}],product:"Backpack Niver",revenue:"$112,50"},{id:"#10427",date:"1 Nov, 3:42 AM",status:"paid",customer:["Iryna Innda",{image:"I"}],product:"Adidas Vio",revenue:"$200,00"},{id:"#10428",date:"2 Nov, 9:32 AM",status:"paid",customer:["Arrias Liunda",{image:"A"}],product:"Airpods 2 Gen",revenue:"$350,00"},{id:"#10429",date:"2 Nov, 10:14 AM",status:"paid",customer:["Rugna Ilpio",{image:I.Z}],product:"Bracelet Warret",revenue:"$15,00"},{id:"#10430",date:"2 Nov, 10:14 AM",status:"refunded",customer:["Anna Landa",{image:{src:"/_next/static/media/ivana-squares.ce014a37.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJQk/wD/xAAeEAACAgAHAAAAAAAAAAAAAAACAwEEAAUGERMjcf/aAAgBAQABPwC3qXM+Co6QWD2RIkmQ6tvMf//EABgRAAIDAAAAAAAAAAAAAAAAAAEhABEx/9oACAECAQE/AArZ2f/EABkRAAEFAAAAAAAAAAAAAAAAAAEAAiExQf/aAAgBAwEBPwB2QKC//9k=",blurWidth:8,blurHeight:8}}],product:["Watter Bottle India",{suffix:"x 3"}],revenue:"$25,00"},{id:"#10431",date:"2 Nov, 3:12 PM",status:"paid",customer:["Karl Innas",{image:"K"}],product:"Kitchen Gadgets",revenue:"$164,90"},{id:"#10432",date:"2 Nov, 5:12 PM",status:"paid",customer:["Oana Kilas",{image:"O",color:"info"}],product:"Office Papers",revenue:"$23,90"}]};var order_list=function(){let[e,A]=(0,a.useState)(null),closeMenu=()=>A(null),t=(0,r.jsxs)(o.Z,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:!!e,onClose:closeMenu,keepMounted:!0,children:[(0,r.jsx)(s.Z,{onClick:closeMenu,children:"Status: Paid"}),(0,r.jsx)(s.Z,{onClick:closeMenu,children:"Status: Refunded"}),(0,r.jsx)(s.Z,{onClick:closeMenu,children:"Status: Canceled"}),(0,r.jsx)(l.Z,{sx:{margin:"0.5rem 0"}}),(0,r.jsx)(s.Z,{onClick:closeMenu,children:(0,r.jsx)(d.Z,{variant:"button",color:"error",fontWeight:"regular",children:"Remove Filter"})})]});return(0,r.jsxs)(g.Z,{children:[(0,r.jsx)(h.Z,{}),(0,r.jsxs)(c.Z,{my:3,children:[(0,r.jsxs)(c.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:2,children:[(0,r.jsx)(u.Z,{variant:"gradient",color:"dark",children:"new order"}),(0,r.jsxs)(c.Z,{display:"flex",children:[(0,r.jsxs)(u.Z,{variant:e?"contained":"outlined",color:"dark",onClick:e=>A(e.currentTarget),children:["filters\xa0",(0,r.jsx)(n.Z,{children:"keyboard_arrow_down"})]}),t,(0,r.jsx)(c.Z,{ml:1,children:(0,r.jsxs)(u.Z,{variant:"outlined",color:"dark",children:[(0,r.jsx)(n.Z,{children:"description"}),"\xa0export csv"]})})]})]}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(x.Z,{table:w,entriesPerPage:!1,canSearch:!0})})]}),(0,r.jsx)(p.Z,{})]})}}},function(e){e.O(0,[487,8067,4411,8976,9713,9774,2888,179],function(){return e(e.s=13074)}),_N_E=e.O()}]);