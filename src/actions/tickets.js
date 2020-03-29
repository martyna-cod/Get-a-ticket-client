import request from "superagent";
const baseUrl = "http://localhost:4010";
export const ALL_TICKETS = "ALL_TICKETS"
export const NEW_TICKET = "NEW_TICKET"
export const TICKET = "TICKET"
export const EDITED_TICKET = "EDITED_TICKET"


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
  const { user } = state

  request
    .post(`${baseUrl}/event/${eventId}/createticket`)
    .set("Authorization", `Bearer ${user}`)
    .send(ticketdata)
    .then(res => {
      const action = newTicket(res.body)

      dispatch(action)
      console.log(action,"ACTON newticket")
    })
    .catch(console.error)
};

export function editedTicket (payload) {
  return {
    type: EDITED_TICKET,
    payload
  }
}

  export const editTicket = ticketId => (dispatch, getState) => { 
    const state = getState();
    const { user } = state
    
    request 
    .get(`${baseUrl}/ticket/${ticketId}`) 
    .set("Authorization", `Bearer ${user}`)
     .then(res => {
       const action = editedTicket(res.body)
       console.log(action, "editing ticket")
       dispatch(action)
     })
     .catch(console.error)  
}