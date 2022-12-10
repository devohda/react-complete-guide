import {
  useNavigate,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import {savePost} from '../util/api.js';

function NewPostPage() {
  const navigate = useNavigate();
  const data = useActionData();
  const navigation = useNavigation();

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {data?.status === 422 && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  );
}

export const action = async ({request}) => {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  };

  try {
    await savePost(post);
  } catch (error) {
    if (error.statue === 422) {
      return error;
    }
    throw error;
  }

  return redirect('/blog');
};

export default NewPostPage;
