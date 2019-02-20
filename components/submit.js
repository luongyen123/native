
import {SubmissionError} from 'redux-form';

const submit =values=>{
    // alert(values.username);//dung api gui du lieu
    if(values.username !== 'Luongyen'){
        throw new SubmissionError({
            username:"User name exits",
            _error:"Login fail"
        })
    }
    
}
export default submit;