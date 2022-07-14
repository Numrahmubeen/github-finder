import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {

    const intialState ={
        users :[],
        user:{},
        repos:[],
        loading:false
    }
    const [state,dispatch] = useReducer(githubReducer,intialState)
 // Get Users for testing purpose
    // const fetchUsers = async () =>{
    //     setLoading()
    //     const response = await fetch(`${GITHUB_URL}/users`,{
    //     headers:{
    //         Authoriation : `token ${GITHUB_TOKEN}`,
    //     },
    // })
    //     const data = await response.json()
    //    dispatch({
    //     type:'GET_USERS',
    //     payload:data
    //    })
    // }

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext