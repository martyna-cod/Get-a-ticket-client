import request from "superagent";
const baseUrl = "http://localhost:4000";
export const ALL_TICKETS = "ALL_TICKETS"
export const NEW_TICKET = "NEW_TICKET"
export const TICKET = "TICKET"


export function allTickets (payload) {
    return {
      type: ALL_TICKETS,
      payload
    }
  }
  
  export const getTickets = eventId => (dispatch, getState) => { 

      request
      .get(`${baseUrl}/event/${eventId}/ticket`)
       .then(res => {
         const action = allTickets(res.body)
         console.log(action, "actiongetTicket")
         dispatch(action)
       })
       .catch(console.error)  
  }
  
export function ticket (payload) {
  return {
    type: TICKET,
    payload
  }
}

  export const getTicket = ticketId => (dispatch) => { 
    
    request
    .get(`${baseUrl}/ticket/${ticketId}`) 
     .then(res => {
       const action = ticket(res.body)
       console.log(action, "actiongetTicket")
       dispatch(action)
     })
     .catch(console.error)  
}

  
export function newTicket (payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = (ticketdata, eventId) => ( dispatch, getState) =>{
  const state = getState();
  const { jwt } = state.user

  request
    .post(`${baseUrl}/event/${eventId}/createticket`)
  //.set("Authorization", `Bearer ${jwt}`)
    .send(ticketdata)
    .then(res => {
      const action = newTicket(res.body)

      dispatch(action)
      console.log(action,"ACTON newticket")
    })
    .catch(console.error)
};