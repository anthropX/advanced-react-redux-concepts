import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS } from './types'
export function saveComment (comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}
export function fetchComments () {
  return async function (dispatch) {
    const result = await axios('https://jsonplaceholder.typicode.com/comments')
    dispatch({
      type: FETCH_COMMENTS,
      payload: result.data.map(comment => comment.name)
    })
  }
}
