import React from "react";

export default function CreateComment(props) {
  return (
        <form onSubmit={props.onSubmit}>
              <input
                type="string"
                name="text"
                placeholder="text"
                value={props.values.text}
                onChange={props.onChange}
            ></input>
         <button type="submit">Add Comment</button>
        
        </form>
    );
}

{/* <div class="row bootstrap snippets">
<div class="col-md-6 col-md-offset-2 col-sm-12">
    <div class="comment-wrapper">
        <div class="panel panel-info">
            <div class="panel-heading">
                Comment panel
            </div>
            <div class="panel-body">
                <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                
                <button type="button" class="btn btn-info pull-right">Post</button>
                <div class="clearfix"></div>
                </div>
</div>
                </div></div></div>
             )}  */}