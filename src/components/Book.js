import Title from "./Title"

export default function Book ({title, img , author, children,show, buttonHandler}){


    return <div class="bookItem">
         
            <img src={img} style={{width: "150px"}}/>
            <Title>{title}</Title>
            
            <p>{children}</p>
            {/* Passing property from a child component to parent component (use a callback */}
            <button onClick={buttonHandler}>Inside Button</button>
            {
                show ? <div>{author}</div>: ""
            }


    </div>
}