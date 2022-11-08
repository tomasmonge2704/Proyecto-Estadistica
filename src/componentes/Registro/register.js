import { Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function Register (){
    return(
        <div style={{display:"grid",justifyContent:"center",alignContent:"center",height:"100vh"}}>
            <p> pagina registro</p>
            <Link to="/login">
        <Button shadow color="success" auto>
          Volver al Login!
        </Button>
        </Link>
      </div>

    )
}