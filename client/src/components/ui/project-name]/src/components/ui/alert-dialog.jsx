// filepath: c:\Users\princ\Desktop\Bowls\src\components\ui\alert-dialog.jsx
import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AlertDialogPrimitive.Trigger ref={ref} className={className} {...props}>
      {children}
    </AlertDialogPrimitive.Trigger>
  )
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

const AlertDialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-black/30" />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={`fixed top-1/2 left-1/2 w-full max-w-md p-6 bg-white rounded-md shadow-lg transform -translate-x-1/2 -translate-y-1/2 ${className}`}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  )
);
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogAction = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Action>
  )
);
AlertDialogAction.displayName = "AlertDialogAction";

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogAction };