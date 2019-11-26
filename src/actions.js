import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_EVENTS = "ALL_EVENTS"
export const NEW_EVENT = "NEW_EVENT"
export const NEW_TICKET = "NEW_TICKET"
export const ALL_TICKETS = "ALL_TICKETS"

function allTickets (payload) {
  return {
    type: ALL_TICKETS,
    payload
  }
}

export const getTickets = () => (dispatch, getState) => {
  const state = getState()
  const { tickets } = state

  if (!tickets.length) {
    request(`${baseUrl}/ticket`)
      .then(res => {
        const action = allTickets(res.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}

function newTicket (payload) {
  return {
    type: NEW_TICKET,
    payload
  }
}

export const createTicket = data => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/ticket`)
    .set('Authorization', `Bearer ${user}`)
    .send(data)
    .then(res => {
      const action = newTicket(res.body)

      dispatch(action)
    })
    .catch(console.error)
}


function newEvent (payload) {
  return {
    type: NEW_EVENT,
    payload
  }
}

export const createEvent = data => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${user}`)
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

