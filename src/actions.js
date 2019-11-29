import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_EVENTS = "ALL_EVENTS"
export const NEW_EVENT = "NEW_EVENT"


function newEvent (payload) {
  return {
    type: NEW_EVENT,
    payload
  }
}

export const createEvent = data => (dispatch, getState) => {
  const state = getState()
  const { jwt } = state.user

  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(response => {
      const action = newEvent(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

function allEvents (payload) {
  return {
    type: ALL_EVENTS,
    payload
  }
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState()
  const { events } = state

  if (!events.length) {
    request(`${baseUrl}/event`)
      .then(response => {
        const action = allEvents(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

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

