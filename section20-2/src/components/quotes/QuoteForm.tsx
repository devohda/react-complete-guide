import {FormEventHandler, useRef, useState} from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {Quote} from './types';

interface QuoteFormProps {
  isLoading: boolean;
  onAddQuote: (props: Partial<Quote>) => void;
}

const QuoteForm = (props: QuoteFormProps) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler: FormEventHandler = event => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current?.value;
    const enteredText = textInputRef.current?.value;

    // optional: Could validate here

    props.onAddQuote({author: enteredAuthor, text: enteredText});
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      {/*<Prompt*/}
      {/*  when={isEntering}*/}
      {/*  message={location =>*/}
      {/*    'Are you sure you want to leave? All your entered data will be lost!'*/}
      {/*  }*/}
      {/*/>*/}
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusedHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows={5} ref={textInputRef} />
          </div>
          <div className={classes.actions}>
            <button
              className="btn"
              type="submit"
              onClick={finishEnteringHandler}
            >
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
