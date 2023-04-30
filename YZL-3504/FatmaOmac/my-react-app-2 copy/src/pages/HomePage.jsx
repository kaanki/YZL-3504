export function HomePage(){
    return(
        <>
        <h1>Ana sayfa</h1>
        <h2>Using js in jsx ( Jsx içinde js kullanmak)</h2>
        <p>Süslü parantezler arasında js expressionları kullanabilirsiniz.</p>
        You can only use curly braces in two ways inside JSX:
        
       <Profiles/>

       <Button/>

       <Button2/>
        </>
    )
}


function Profiles(){
    const title = "Ünlü İnsan Profilleri"
    let myNum = 3;

    const isRainy = true;

    if( isRainy){
        myNum = 5;
    }
    

    return(
        <div>
            <h3 className={Math.random()}>{title}</h3>
            <h4>{Math.random()}</h4>
            <h5>{ `${myNum} deneme` }</h5>
            <Avatar/>
            <Avatar/>
            <Avatar/>
            <Avatar/>
        </div>
    )
}

function Avatar(){
    const imgSrc = "https://i.imgur.com/MK3eW3Am.jpg";
    const avatarClass = "avatar";
    const description = "Henry Ford";
    return <img className={avatarClass} src={imgSrc} alt={description}/>
}

function Button(){
    const btnType = "button";
    const txtContent = "Hello";
    const btnStyles = { backgroundColor:"red", color:"white"  }
    return <button type={btnType} style={ btnStyles  } >{txtContent}</button>;
}

function Button2(){
    const btnType = "button";
    const txtContent = "Hello";
    return <button type={btnType} style={  { backgroundColor:"red", color:"white"  }  } >{txtContent}</button>;
}