import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_TICKETS = "ALL_TICKETS"
export const NEW_TICKET = "NEW_TICKET"


export function allTickets (payload) {
    return {
      type: ALL_TICKETS,
      payload
    }
  }
  
  export const getTickets = eventId => (dispatch) => { 
    
      request
      .get(`${baseUrl}/event/${eventId}/ticket`)
       .then(res => {
         const action = allTickets(res.body)
         console.log(action, "fjsnf")
         dispatch(action)
       })
       .catch(console.error)  
  }
  
  
export function newTicket (payload) {
  return {
    type: NEW_TICKET,
    payload
  }
}

export const createTicket = data => dispatch => {


  request
    .post(`${baseUrl}/event/:eventId/createticket`)
    .send(data)
    .then(response => {
      const action = newTicket(response.body)

      dispatch(action)
    })
    .catch(console.error)
}