import { ListItem, ListItemText } from "@mui/material";
import moment from "moment";

const Todo = ({id,timestamp,title,detail}) => {
    return ( 
      <ListItem
      sx={{mt:3, boxShadow:3}}
      style={{backgroundColor:"#D3D3D3"}}
      >
          <ListItemText
          primary={title}
          secondary={moment(timestamp).format("MMM dd, yyyy")}
          />
      </ListItem>
     );
}
 
export default Todo;