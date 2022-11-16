// import {Form} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import  BootstrapSwitchButton from 'bootstrap-switch-button-react'
import axios from "axios";

const ControlConfigureRow = (props)=>{

    const switchStateHandler= async ()=>{
        console.log(props.data.id);


        props.updateData(props.data);
    }


    return <>

    <tr>
        <td id='deviceId'>
            {props.data.data.id}
        </td>
        <td>
            {props.data.data.name}
        </td>
        <td>


            <BootstrapSwitchButton
                checked={props.data.data.status}
                onlabel='Stop'
                offlabel='Start'
                width={100}
                id={props.data.data.id}
                onChange={switchStateHandler}
            />

        </td>
    </tr>



    </>

}



export default ControlConfigureRow;
