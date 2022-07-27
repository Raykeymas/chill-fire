import { CssBaseline, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import React, { useState } from 'react';
import HelpDialog from '../components/organisms/help_dialog/help_dialog';
import Fires from '../components/page/fires'
import ChillFireTheme from '../util/theme'

export const HelpDialogContext = React.createContext({} as {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>});

const Home: NextPage = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HelpDialogContext.Provider value={{isOpen, setIsOpen}}>
    <ThemeProvider theme={ChillFireTheme}>
      <CssBaseline>
        <Fires />
      </CssBaseline>
    </ThemeProvider>
    <HelpDialog />
    </HelpDialogContext.Provider>
  )
}

export default Home
