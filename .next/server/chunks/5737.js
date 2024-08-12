"use strict";exports.id=5737,exports.ids=[5737],exports.modules={45737:(e,i,r)=>{r.d(i,{Z:()=>m});var t=r(20997),n=r(16689),s=r(580),a=r.n(s),o=r(68167),d=r.n(o),u=r(15612),l=r.n(u),g=r(89566),h=r(46769),c=r(3502);function Header({name:e,age:i,sex:r,occupation:s,weight:a,height:o,activityLevel:u,previousDiagnoses:m,pastSurgeries:R,phone:q,insuranceInformation:f,currentMedications:p,allergies:x,medicalNotes:$,diet:v,exerciseRoutine:b,smokingHabits:y,alcoholConsumption:w,otherLifestyleFactors:H}){let[j,O]=(0,n.useState)("horizontal"),[k,S]=(0,n.useState)(0);(0,n.useEffect)(()=>{function handleTabsOrientation(){return window.innerWidth<c.default.values.sm?O("vertical"):O("horizontal")}return window.addEventListener("resize",handleTabsOrientation),handleTabsOrientation(),()=>window.removeEventListener("resize",handleTabsOrientation)},[]);let Z=`
    ${e} is a ${i}-year-old ${r} who works as a ${s}.
    With a height of ${o} cm and a weight of ${a} kg, ${e} maintains a ${u} activity level.
    They have been diagnosed with ${m} and have undergone the following surgery: ${R}.
    Currently, ${e} is managing health conditions such as ${$}.

    Additional details include:
    - Phone: ${q}

    - Insurance: ${f}
    - Current Medications: ${p}
    - Allergies: ${x}


    - Diet: ${v}
    - Exercise Routine: ${b}
    - Smoking Habits: ${y}
    - Alcohol Consumption: ${w}
    - Other Lifestyle Factors: ${H}
  `;return(0,t.jsxs)(g.Z,{position:"relative",mb:5,children:[t.jsx(g.Z,{display:"flex",alignItems:"center",position:"relative",minHeight:"2.75rem",borderRadius:"xl",sx:{backgroundImage:({functions:{rgba:e,linearGradient:i},palette:{gradients:r}})=>`${i(e(r.info.main,.6),e(r.info.state,.6))}`,backgroundSize:"cover",backgroundPosition:"50%",overflow:"hidden"}}),t.jsx(d(),{sx:{position:"relative",mt:-8,mx:3,py:2,px:2},children:t.jsx(l(),{container:!0,spacing:3,alignItems:"center",children:(0,t.jsxs)(l(),{item:!0,children:[t.jsx(g.Z,{height:"100%",mt:.5,lineHeight:1,children:(0,t.jsxs)(h.Z,{variant:"h5",fontWeight:"medium",children:[e,"'s Medical History"]})}),t.jsx(g.Z,{height:"100%",mt:5.5,lineHeight:1,children:t.jsx(h.Z,{variant:"button",color:"text",fontWeight:"light",children:Z})})]})})})]})}Header.defaultProps={children:""},Header.propTypes={name:a().string.isRequired,age:a().number.isRequired,sex:a().string.isRequired,occupation:a().string.isRequired,weight:a().number.isRequired,height:a().number.isRequired,activityLevel:a().string.isRequired,previousDiagnoses:a().string.isRequired,pastSurgeries:a().string.isRequired,phone:a().string.isRequired,emergencyContact:a().string.isRequired,emergencyPhone:a().string.isRequired,insuranceInformation:a().string.isRequired,currentMedications:a().string.isRequired,allergies:a().string.isRequired,medicalNotes:a().string.isRequired,reasonOfHospitalization:a().string.isRequired,dateOfAdmission:a().string.isRequired,dateOfDischarge:a().string.isRequired,lengthOfStay:a().number.isRequired,procedurePerformed:a().string.isRequired,hospitalDischargeSummary:a().string.isRequired,followUpInstructions:a().string.isRequired,diet:a().string.isRequired,exerciseRoutine:a().string.isRequired,smokingHabits:a().string.isRequired,alcoholConsumption:a().string.isRequired,otherLifestyleFactors:a().string.isRequired,limitations:a().string.isRequired};let m=Header}};