import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function PageNavegationListener({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(PageNavegationListener);
