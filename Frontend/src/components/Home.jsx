import Announcement from './Announcement';
import Footer from './Footer';
import Navbar from './Navbar';
function Home(){
    return(
        <>
        <Navbar/>
        <Announcement
        title="VIII-sem-Makeup Revevaluation Last Day"
        discription="LastDate= 20 MAY Fee=RS.500"/>

        <Announcement
         title="VIII Sem-MakeUp Result"
         discription="VII sem-makeup results are out"/>
         
        <Announcement
         title="Application of Backlogs "
         discription="Last date= 27 May"/>
       
        <Announcement
         title="IA 2 Examinations"
         discription="IA to for II / IV / VI sem students"/>
          <Footer/>

        <Announcement
         title="Make for VIII sem Examinations"
         discription="Will commence for 13 May to 15th May"/>
          <Footer/>
       
        
        <Announcement
        title="Annoucement of  VIII Result"
        discription="8th May"/>
        
        <Announcement
        title="Annoucement of  VIII Result"
        discription="8th May"/>
         <Footer/>
        </>

       
    )
}
export default Home;