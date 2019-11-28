import request from "superagent";
const baseUrl = "http://localhost:4000";
export const NEW_COMMENT = "NEW_COMMENT"

export function newComment (payload) {
    return {
      type: NEW_COMMENT,
      payload
    };
  }
  
  export const createComment = (commentData, ticketId) => ( dispatch, getState) =>{
    const state = getState();
    const { user } = state
  
    request
      .post(`${baseUrl}/ticket/:ticketId/comment`)
      .set("Authorization", `Bearer ${user}`)
      .send(commentData)
      .then(res => {
        const action = newComment(res.body)
  
        dispatch(action)
        console.log(action,"comment action")
      })
      .catch(console.error)
  };