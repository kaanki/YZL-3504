export function ConditionalRendering (){
    return (
        <>
        <h1>Conditional Rendering - Koşullu Render </h1>
        <BurakPackingList/>
        <DogukanPackingList/>
        <FatmaPackingList/>
        
        </>
    )
}


function BurakPackingList (){
    return (
        <>
        <h2> Burak'ın tatil için yanına alacakları</h2>
        <ul>
        <BurakPackingItem item = "şapka" isPacked={true}/>
        <BurakPackingItem item = "havlu" isPacked={true}/>
        <BurakPackingItem item = "çanta"isPacked={false}/>
        <BurakPackingItem item = "güneş kremi"isPacked={false}/>
        <BurakPackingItem item = "güneş gözlüğü"isPacked={true}/>

        </ul>
        </>
        
    )
}

function BurakPackingItem({item , isPacked}){
    if (isPacked){
        return ( 
        <li>
            {item} <strong style={{color:"green"}}>ok</strong>  
        </li>
        )

    }
    return <li>{item}</li>

    
}



function DogukanPackingList () {
    return (
        <>
        <h2> Doğukan'ın tatil için yanına aldıkları</h2>
        <ul>
             <Dogukanİtem item="Şort" isPacked={false}/>
             <Dogukanİtem item="Şapka" isPacked={true}/>
             <Dogukanİtem item="Kolluk" isPacked={false}/>
            
        </ul>
        
        </>
    )
}

function Dogukanİtem ({item,isPacked}){

    let  liJsx = <li> {item} </li> ;

    if(isPacked===true) {
        liJsx = <li> {item} ✔ </li>
    }
    return liJsx;
}



function FatmaPackingList () {
    return (
        <>
        <h2> Fatma'nın tatil için yanına aldıkları</h2>
        <ul>
             <Fatmaİtem item="Şort" isPacked={false}/>
             <Fatmaİtem item="Şapka" isPacked={true}/>
             <Fatmaİtem item="Kolluk" isPacked={false}/>
            
        </ul>
        
        </>
    )
}

function Fatmaİtem ({item,isPacked}){
return  <li>{item}{isPacked ? "ok" : ""}    </li>


 
}