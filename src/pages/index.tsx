import * as React from "react"
import Todos from '../components/Todos'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';



const baseURL = "https://5fdfaa662e8608000759aa76--mystifying-benz-e9e782.netlify.app/.netlify/functions/faunadb-crud/";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            textAlign:'center',
        },
        parent:{
          textAlign:'center'
        }
    }),
);


// markup
const IndexPage = () => {

  const classes=useStyles();

  return (
    <div className={classes.parent}>
      <title>Todos</title>
      <h1>Todos</h1>
      {/* <AddTodo/> */}
      <Todos/>
  
    </div>
  )
}

export default IndexPage
