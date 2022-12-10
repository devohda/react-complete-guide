import {FormEventHandler, useEffect, useRef} from 'react';

import useHttp from '../../hooks/use-http';
import {addComment} from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

interface NewCommentFormProps {
  quoteId: string;
  onAddedComment: () => void;
}

const NewCommentForm = ({quoteId, onAddedComment}: NewCommentFormProps) => {
  const {sendRequest, status, error} = useHttp(addComment);
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler: FormEventHandler = event => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    sendRequest({
      commentData: {text: commentTextRef.current?.value},
      quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'loading' && (
        <p className="centered">
          <LoadingSpinner />
        </p>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
