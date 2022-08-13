import React from "react";

export type UploadDialogContextState = {
    isOpen: boolean, file?: File,
}

export const UploadDialogContext = React.createContext({} as {
    uploadDialogState: UploadDialogContextState,
    setUploadDialogState: React.Dispatch<React.SetStateAction<UploadDialogContextState>>
});

export default UploadDialogContext;