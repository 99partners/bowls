import React from "react";

const Alert = ({ type = "info", children }) => {
  const alertStyles = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  };

  return (
    <div className={`p-4 rounded ${alertStyles[type]}`}>
      {children}
    </div>
  );
};

const AlertTitle = ({ children }) => (
  <h4 className="font-bold">{children}</h4>
);

const AlertDescription = ({ children }) => (
  <p className="mt-1">{children}</p>
);

export { Alert, AlertTitle, AlertDescription };