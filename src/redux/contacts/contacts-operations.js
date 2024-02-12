import * as contactsApi from '../../api/contacts-api';
import {
    fetchContactsLoading, fetchContactsSuccess, fetchContactsError,
    addContactsLoading, addContactsSuccess, addContactsError,
    deleteContactLoading, deleteContactSuccess, deleteContactError
} from './contacts-slice'

export const fetchContacts = ()=>{
    const func = async (dispatch)=>{

        try {
            dispatch(fetchContactsLoading());
            const data = await contactsApi.requestFetchContacts();
            dispatch(fetchContactsSuccess(data));


        } catch (error) {
            dispatch(fetchContactsError(error.message));
        }
    }

    return func;
} 

export const addContact =(body)=>{
    const func = async (dispatch)=>{

try {
    dispatch(addContactsLoading());
    const data =  await contactsApi.requestAddContacts(body);
    dispatch(addContactsSuccess(data));

} catch (error) {
    dispatch(addContactsError(error.message));

}
    }
    return func;
}
// console.log("api-",contactsApi)
export const deleteContact = (id) =>{
    const func = async (dispatch) => {
                try {
                    dispatch(deleteContactLoading());
                    await contactsApi.requestDeleteContacts(id);
                    dispatch(deleteContactSuccess(id))
                } catch (error) {
                    dispatch(deleteContactError(error.message));
                }
            }
            return func;
}