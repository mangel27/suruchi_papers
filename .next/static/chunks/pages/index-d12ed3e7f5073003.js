(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2317)}])},2317:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var o=r(5893),i=r(7294);r(9809);var a=r(204),n=r(6684),s=r(5059),u=(0,s.G)((e,t)=>(0,o.jsx)(n.K,{align:"center",...e,direction:"column",ref:t}));u.displayName="VStack";var c=r(4418),d=r(9564);let l=()=>(0,o.jsx)(a.k,{id:"home",w:"100%",h:"500px",backgroundImage:"url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",backgroundSize:"cover",backgroundPosition:"center center",children:(0,o.jsx)(u,{w:"full",justify:"center",bgGradient:"linear(to-r, blackAlpha.600, transparent)",children:(0,o.jsxs)(n.K,{align:"center",mb:"10",px:"2",children:[(0,o.jsx)(c.X,{variant:"herotext",children:"Suruchi Papers"}),(0,o.jsx)(d.x,{variant:"heroDescription",children:"specializes in supply of variety of paper & Boards"})]})})});var p=r(3100),h=r(6979),m=r(4641),f=r(1658);let y=()=>(0,o.jsxs)(p.xu,{mt:"3em",p:5,id:"about",children:[(0,o.jsx)(n.K,{spacing:4,as:h.W,maxW:"3xl",textAlign:"center",children:(0,o.jsx)(c.X,{variant:"sectionsHead",children:"AboutUs"})}),(0,o.jsx)(h.W,{maxW:"6xl",children:f.NL.map(e=>(0,o.jsx)(m.U,{children:(0,o.jsx)(d.x,{variant:"sectionDesc",children:e.text})},e.id))})]});var g=r(4416);let v=e=>{let{imgSrc:t,...r}=e;return(0,o.jsx)(g.E,{objectFit:"contain",...r,src:t})};var w=r(6877),P=r(5227),x=r(2495),b=r(1639),S=r(3179),j=r(2504),[C,D]=(0,P.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),W=(0,s.G)(function(e,t){let r=(0,b.jC)("List",e),{children:i,styleType:a="none",stylePosition:n,spacing:s,...u}=(0,S.Lr)(e),c=(0,x.W)(i);return(0,o.jsx)(C,{value:r,children:(0,o.jsx)(j.m.ul,{ref:t,listStyleType:a,listStylePosition:n,role:"list",__css:{...r.container,...s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{}},...u,children:c})})});W.displayName="List",(0,s.G)((e,t)=>{let{as:r,...i}=e;return(0,o.jsx)(W,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...i})}).displayName="OrderedList";var k=(0,s.G)(function(e,t){let{as:r,...i}=e;return(0,o.jsx)(W,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...i})});k.displayName="UnorderedList";var q=(0,s.G)(function(e,t){let r=D();return(0,o.jsx)(j.m.li,{ref:t,...e,__css:r.item})});q.displayName="ListItem",(0,s.G)(function(e,t){let r=D();return(0,o.jsx)(w.J,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon";let L=e=>{let{title:t,description:r}=e;return(0,o.jsxs)(p.xu,{w:"50%",...e,children:[(0,o.jsx)(c.X,{variant:"productHead",children:t}),(0,o.jsx)(k,{fontSize:["14px","18px"],mx:"auto",children:r&&r.map((e,t)=>(0,o.jsx)(q,{fontFamily:"sansSerif",fontSize:["md","md","xl"],color:"gray.600",lineHeight:1.5,paddingTop:["0.5em","1em"],mb:"0.5em",children:e},t+"li_"+e))})]})},B=e=>{let{Data:t,index:r}=e,n=(0,i.useRef)(null),[s,u]=(0,i.useState)(!1),[c,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=new IntersectionObserver(e=>{e[0].isIntersecting&&u(!0)},{rootMargin:"0px 0px -50px 0px"});return e.observe(n.current),()=>{e.disconnect()}},[]);let l=()=>{d(!0)},h=()=>{d(!1)};return(0,o.jsx)(p.xu,{py:"10",className:"fade-in ".concat(s?"visible":""," ").concat(c?"no-fade-out":""),onMouseEnter:l,onMouseLeave:h,ref:n,children:(0,o.jsxs)(a.k,{h:"auto",w:"100%",direction:["column","row"],children:[(0,o.jsx)(v,{w:["100%","50%"],h:"auto",order:[1,r%2==0?1:2],imgSrc:t.imageurl,py:[5,0],px:[0,0,0,10]}),(0,o.jsx)(L,{w:["100%","50%"],order:[2,r%2==0?2:1],...t,px:[5,0,0,10]})]})})},T=()=>(0,o.jsxs)(p.xu,{p:"5vw",id:"products",children:[(0,o.jsxs)(n.K,{spacing:4,as:h.W,maxW:"3xl",textAlign:"center",children:[(0,o.jsx)(c.X,{variant:"sectionsHead",children:"Our Products"}),(0,o.jsx)(d.x,{variant:"sectionDesc",children:"Our comprehensive product range which continues to grow through research and development initiatives, includes the following:"})]}),f.f4.map((e,t)=>(0,o.jsx)(B,{index:t,Data:e},t+"ProductDetails"))]});r(3433);let _=()=>(0,o.jsx)(p.xu,{maxWidth:"100%",children:(0,o.jsxs)(p.xu,{position:"relative",w:"100%",children:[(0,o.jsx)(l,{id:"home"}),(0,o.jsx)(y,{id:"about"}),(0,o.jsx)(T,{id:"products"})]})});function N(){return(0,o.jsx)(_,{})}},1658:function(e,t,r){"use strict";r.d(t,{NL:function(){return i},f4:function(){return o},sS:function(){return a}});let o=[{id:1,imageurl:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg",title:" PAPERS",description:["Offset Printing Paper (White and Colored)","Kraft Paper (Plain, Ribbed & Corrugation Grade)"," Writing and Printing Paper"," MG Cover Paper"," Coated Paper (C1S & C2S )/ Art Paper"," Newsprint ( Standard & Bulky )"," Copier Paper","Cast Coated Paper"," Color Printing Paper","Tissue Paper – Facial, Toilet, Napkin & Towel"]},{id:2,imageurl:"https://suruchipapers.com/images/boards.webp",title:" BOARDS",description:["Coated Board (C1S & C2S )/ Art Card","Cup Stock Board","  Bristol Board (White & Colored)"," Folding Box Board (FBB)","  Solid Bleached Sulfate (SBS)","  Coated Duplex and Triplex Board","  Playing Card Board"," Grey Boards","  File Board"," Core Boards"," Cast Coated Board"]},{id:3,imageurl:"https://suruchipapers.com/images/speciality.jpg",title:" SPECIALITY GRADES",description:["Bible Paper / Quran Paper","Construction Paper"," Carbonless Paper (NCR)"," Carbon Paper"," One Time Carbonizing Paper","Ledger Paper","Thermal Paper","MG Poster Paper","Fluorescent Papers & Boards","Parchment Paper","Diary Paper","Label Stock","Duplicating Paper"]}],i=[{id:1,text:"Established in 2005, Suruchi Papers Pvt. Ltd. is a prominent supplier of various quality of paper, Paper boards and office supplies."},{id:2,text:"Our expertise and knowledge in paper procurement and distribution help us to serve a wide range of options to our customers."},{id:3,text:"Each of our product has been designed keeping in view the most stringent global standards and upon observing the quality conscious customers."},{id:4,text:"This virtue and our varied range of handsomely designed products for our esteemed customers, all alike, has bought us this far with integrity and has made us one of the India’s leading Trader, Distributor & Supplier of paper and paper products."},{id:5,text:"We have a dedicated team of people and the right attitude to match the ever-evolving requirements of our customers, both in relation to quality and quantity, without compromising on quality and being cost-efficient."},{id:6,text:"Suruchi Papers is known for consistency in the quality of the products and timely delivery that maintains perfect price-performance ratio."}],a=[{id:1,title:" Introduction",description:["When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.","This Policy will help you understand what information we collect, reason for collection and steps we take to protect your information."]},{id:2,title:" Definition",description:["For the purpose of this Policy  ","Suruchi Papers Pvt Ltd (“we”, “us”, or “our”) is the company that collects and processes Personal Data for the purposes described in this Policy.Personal Data is any information relating to an identified or identifiable natural person.","Customer or Client is a legal business entity with whom Suruchi Papers Pvt Ltd has an agreement to provide the Services. Who are we?","We are in supply business for paper and boards. Our products include as mentioned on website suruchipapers.com. To bring the best out of our services we have partnered with other solution provider (e.g. Airtel for SMS, NSDL partner for TDS, Azure, AWS, etc).","We understand that your privacy is a right and we take strict measures to protect data that we use for our own purposes, and that we maintain on behalf of our Clients."]},{id:3,title:" Collection and Use of Personal Data We collect information, including Personal Data, for the following purposes:",description:["Providing and managing the Service Internal business purposes Communicating with you and marketing  ","Your data is stored in secure cloud servers, and we try our best to encrypt all personally identifiable information.","Upon termination, all your data (contacts, etc.) is deleted permanently from our database unless you request otherwise.","Account Information, including contact information, user profile information, and information about your payment method, is collected from you when you register or authenticate into our Service and is used to manage payment for the Service, enable us to provide support, and facilitate communication.","We collect the following information from you through user initiated phone calls, referrals and other channels for the following purposes:","Communicating with you and marketing practices"]},{id:5,title:"Responding to your request for a product demo: ",description:["When you request a free demo, we may collect your company name, first and last name, job title, contact number, business email address, and information and solution requirement about your company. We use this information to contact you and otherwise facilitate your free demo. Responding to your inquiries: When you contact us with a comment, question or complaint, you may be asked for information that identifies you, such as your name, address and a telephone number, along with additional information we need to help us promptly answer your question or respond to your comment. We may retain this information to assist you in the future and to improve our customer service and service offerings (including the Service and Website) Preemptive notification regarding software updates and outage of services.","Informing you about products and services. We may use your contact information for our own marketing purposes.","We do not sell or rent your Personal Data to third parties.      "]},{id:6,title:"You can opt out of these at any time by following the steps outlined below.",description:["Opt out of our emailing list","Send us a communication to request deletion of your contact details","Disclosure of your Personal Data  ","As a matter of practice, Suruchi Papers Pvt Ltd does not disclose, trade, rent, sell or otherwise transfer Personal Data, except as set out in this policy."]},{id:7,title:"We may transfer or disclose Personal Data as follows:",description:["Compliance with Laws. Suruchi Papers Pvt Ltd and our Partner Service Providers of other countries may share or disclose Personal Data to comply with legal or regulatory requirements and to respond to lawful requests, court orders and legal process.","Enforcing Our Rights, Preventing Fraud, and Safety. Suruchi Papers Pvt Ltd may share or disclose data to protect and defend the rights, property, or safety of us or third parties, including enforcing contracts or policies, or in connection with investigation and preventing fraud.","We do not store, share or have access to clients Business Data.  "]},{id:8,title:"Your Rights",description:["Access and Correction of Personal Data ","If we receive a request from an individual to access or update Personal Data we have collected on behalf of a particular Customer, we will direct that individual to the relevant Customer. We will assist our Customers wherever possible in responding to individual access requests. If you submit Personal Data via our Website or otherwise provide us with your Personal Data, you may request access, updating or correction of your Personal Data by submitting a written request to us. We may request certain Personal Data for the purposes of verifying your identity.          "]},{id:9,title:"Updates to this Privacy Policy",description:["This Privacy Policy may be updated periodically to reflect changes to our Personal Data handling practices. The revised Privacy Policy will be posted on the Website. If you continue to use the Service or the Website after the changes are in effect, you agree to the revised Notice.We strongly encourage you to please refer to this Privacy Policy often for the latest information about our Personal Data handling practices. "]},{id:10,title:"Contact us",description:["Please contact Suruchi Papers Pvt Ltd if:","you have any questions or comments about this Privacy Policy;","you wish to access, update, and/or correct inaccuracies in your Personal Data; or you otherwise have a question or complaint about the manner in which we or our service providers treat your Personal Data.","You can reach us by emailing purvamodani@suruchipapers.com or at our mailing address below:"]}]}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);