import React from "react";

const UploadDialogContext = React.createContext({} as { uploadDialogIsOpen: boolean, setUploadDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>> });

export default UploadDialogContext