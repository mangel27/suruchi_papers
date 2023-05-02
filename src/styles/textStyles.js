export const textStyle = {
    Text: {
        variants: {
          navText:{
            fontSize:"md", textTransform:"uppercase", fontFamily:"Arial",color:"primary_4",cursor:"pointer", _hover: { transform: `scale(1.1)` ,color:"#e8491d"},
          },
          mobileNvText:{
            fontSize:"xl", textTransform:"uppercase", fontFamily:"Arial",color:"primary_1",fontWeight:"600",cursor:"pointer", _hover: { transform: `scale(1.1)` ,color:"#e8491d"},
          },
          heroDescription:{
            fontSize:["sm","md","2xl"], fontWeight:"400", fontFamily:" sansSerif",color:"primary_4",textAlign:"center",lineHeight:"2"
          },
          sectionDesc:{
            fontSize:["md","md","xl"],  fontFamily:" sansSerif",color:"gray.600", lineHeight:"1.5",paddingTop:"20px",
          },
          productDesc:{
            fontSize:["md","md","md","2xl"],  fontFamily:" sansSerif",color:"gray.600",textAlign:"center"
          },
          footerHeadText:{fontWeight:'600', fontSize:'xl',fontFamily:"sansSerif",color:"primary_4"},
          footerText:{ fontSize:['md','sm','sm','md'],fontFamily:"sansSerif",color:"primary_4"}



        }
    }
};
