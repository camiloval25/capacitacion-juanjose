import React from "react";

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const resetNavigationTo = (name, params) => {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name, params }],
  });
};

export const goBack = () => {
  navigationRef.current?.goBack();
};
