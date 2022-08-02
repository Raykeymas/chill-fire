import React from "react";

const HelpDialogContext = React.createContext({} as { helpDialogIsOpen: boolean, setHelpDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>> });

export default HelpDialogContext