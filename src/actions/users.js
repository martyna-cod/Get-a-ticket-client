import request from "superagent";
const baseUrl = "http://localhost:4010";
export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (username, password) => dispatch => { 
  request
    .post(`${baseUrl}/login`)
   // .set(`Authorization, Bearer ${jwt}`)
    .send({ username, password })
    .then(res => {
      const action = jwt(res.body.jwt);
      console.log(res.body.jwt)
      dispatch(action);
    })
};

 export const signUp = data => (dispatch, getState) => { 

  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(res => {
      console.log(res.body);   
    })
    .catch(console.error);
};

