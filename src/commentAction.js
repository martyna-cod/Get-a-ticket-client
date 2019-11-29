import request from "superagent";
const baseUrl = "http://localhost:4000";
export const NEW_COMMENT = "NEW_COMMENT"
export const ALL_COMMENTS ="ALL_COMMENTS"

export function newComment (payload) {
  console.log(payload, "What payload is in new comment")
    return {
      type: NEW_COMMENT,
      payload
    };
  }
  
  export const createComment = (commentData, ticketId) => ( dispatch, getState) =>{
    const state = getState();
    const { jwt } = state.user
  
    request
      .post(`${baseUrl}/ticket/${ticketId}/comment`)
      //.set("Authorization", `Bearer ${jwt}`)
      .send(commentData)
      .then(res => {
        const action = newComment(res.body)
  
        dispatch(action)
        console.log(action,"comment action fired")
      })
      .catch(console.error)
  };

  export function allComments (payload) {
    return {
      type: ALL_COMMENTS,
      payload
    }
  }
  
  export const getComments = commentId => (dispatch) => { 
    
      request
      .get(`${baseUrl}/comment/${commentId}`)
       .then(res => {
         const action = allComments(res.body)
         console.log(action, "action ALLCOMMENTS")
         dispatch(action)
       })
       .catch(console.error)  
  }