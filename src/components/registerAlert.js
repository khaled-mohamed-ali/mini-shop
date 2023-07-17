import Alert from 'react-bootstrap/Alert';

export const  Regalert = (props) => {
    return (
        <>
                <Alert  variant={props.alert?'success':'danger'}>
                    This is a  alert—check it out!
                </Alert>

        </>
    );
}

