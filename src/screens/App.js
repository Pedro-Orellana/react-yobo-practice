import { setLogin, isLoggedSelector } from "../redux/slices/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";

function App() {

  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const buttonRef = useRef()

  useEffect(() => {
    console.log("This is gonna run when the component is mounted")

    return (() => {
      console.log("This is gonna run when the component unmounts")
    })
    
  },[])


  useEffect(() => {
    if(userIsLoggedIn) {
      buttonRef.current.className = "btn btn-danger";
      
    } else {
      buttonRef.current.className = " btn btn-primary";
    }

  },[userIsLoggedIn])

  const dispatch = useDispatch();
  const isLogged = useSelector(isLoggedSelector);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col"></div>
        <div className="col-10">
          
            
              <div className="d-flex justify-content-center">
                <h4>Home</h4>
              </div>

              <br/>

              <div className="d-flex justify-content-center">
                {showUserStatus(isLogged)}
              </div>



          <br />
          <br />

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={() => {dispatch(setLogin()); setUserIsLoggedIn(!userIsLoggedIn)}} ref={buttonRef}>{showButtonText(isLogged)}</button>
          </div>

        </div>
        <div className="col"></div>
      </div>

    </div>
  );

}

export const showUserStatus = (isLogged) => (isLogged ? <h3>User is logged in</h3> : <h3>Not logged in!</h3>)
export const showButtonText = (isLogged) => (isLogged ? "Log out" : "Log in")





export default App;
