import {TitleHeader} from './styled'

export const Header = (props) => {
     return(
    <>
    { props.pageFlow===2?
        (<div>
        <h4>{props.usuario.nome}</h4>
        <img src={props.usuario.profile} alt="imgprfl"/>
    </div>):""
    }
    
    <TitleHeader>
            <h1>Insta4</h1>
        </TitleHeader>
    </>
        
    )
}