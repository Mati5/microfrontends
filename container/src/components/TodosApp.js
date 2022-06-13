import { mount } from 'todos/TodosApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const TodosApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log("HISTORY", history)
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default TodosApp;
