import { ImageRounded } from '@material-ui/icons'
import React from 'react'
import HomeBanner from '../images/banner2.gif'
import "../StyleSheet/Banner.css";

const Banner = () =>{
    return(
        <div className="Banner_container" >
           <div className="Banner">

           </div>
           <div className="categories_available">
               <div className="Category_title">
                   <h1>All Categories</h1>
               </div>
               <div className="Actual_categories">    
               <h4 className="Categories_inStock" >Mobile Phones</h4>
               <h4 className="Categories_inStock" >Cars</h4>
               <h4 className="Categories_inStock" >Motorcycles</h4>
               <h4 className="Categories_inStock" >Houses</h4>
               <h4 className="Categories_inStock" >TV-Video-Audio</h4>
               <h4 className="Categories_inStock" >Tablets</h4>
               <h4 className="Categories_inStock" >Land and Plots</h4>

               </div>
               

           </div>
           <img src={HomeBanner} alt="Banner" className="HomeBanner" />


        </div>
    )
}
export default Banner