import { useState } from "react";
function Profile() {
 const[logedIn,setLoggeIn] =useState(3)
 //1,2,3
 return(
    <div>
        ?{logedIn==1?
        <h1>Welcome User 1</h1>
        :logedIn==2?<h1>Welcom User2</h1>
        :<h1>Welcon User3</h1>
        }
    </div>
 )  ;
    
}

export default Profile;