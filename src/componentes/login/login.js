import { Input, Spacer } from "@nextui-org/react";
import { Button, Grid} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Login (){
    return(
        <div style={{display:"grid",justifyContent:"center",alignContent:"center",height:"100vh"}}>
            <Input placeholder="Username" />
            <Spacer y={1.6} />
        <Input.Password labelPlaceholder="Password" initialValue="" />
        <Spacer y={1.6} />
        <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
        <Link to="/">
        <Button shadow color="success" auto>
          Submit
        </Button>
        </Link>
      </Grid>
      <Grid xs={6}>
      <Link to="/register">
        <Button shadow color="success" auto>
          Registrate!
        </Button>
        </Link>
      </Grid>
      </Grid.Container>
        
      </div>
    )
}