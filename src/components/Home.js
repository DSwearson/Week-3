import Book from './Book';
import {useState} from "react";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";

//import img from  "./sddssd"

//Read component data from a local JSON file or API
import bookList from "../data/data.json";


//t least one image, video or multimedia component 

export default function Home ({setScreen}) {

    //state
    const [show, setShow] = useState(false)

    //At least one Event Handling, Lists And keys
   
    const buttonHandler = function (e) {
            console.log("click", e.target)
            setShow(!show)

    }

    //<img src={img} />

    return <div>
     
        <div className="loginButton"  onClick={()=> setScreen("login")}>
            Login
        </div>
        <h1>CSP Book Store</h1>
        <button onClick={buttonHandler}>Click me</button>
        <div className="bookContainer">
        {
            bookList.map((b)=>{

                let bookImg = "";
                if(b.img == "book1.jpg"){
                    bookImg = book1;
                } else if (b.img == "book2.jpg") {
                    bookImg = book2;
                } else {
                    bookImg = book3;
                }

                //Passing property from a parent component to a child component
                return <Book key={b.title} title={b.title}
                buttonHandler={buttonHandler}
                author={b.author}
                show={show}
                img={bookImg}
                >{b.desc}</Book>
            })
        }
        </div>

        {
            show ? <div>secret</div>:""
        }
       
    </div>



}