import request from "superagent";
const baseUrl = "http://localhost:4010";
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
  const  { user }  = state
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