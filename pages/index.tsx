import { CssBaseline, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import React, { useState } from 'react';
import HelpDialog from '../components/organisms/help_dialog/help_dialog';
import UploadDialog from '../components/organisms/upload_dialog/upload_dialog';
import Fires from '../components/page/fires'
import HelpDialogContext from '../context/help_dialog_context';
import UploadDialogContext from '../context/upload_dialog_context';
import ChillFireTheme from '../util/theme'


const Home: NextPage = () => {

  const [uploadDialogIsOpen, setUploadDialogIsOpen] = useState<boolean>(false);
  const [helpDialogIsOpen, setHelpDialogIsOpen] = useState<boolean>(false);

  return (
    <UploadDialogContext.Provider value={{ uploadDialogIsOpen, setUploadDialogIsOpen }}>
      <HelpDialogContext.Provider value={{ helpDialogIsOpen, setHelpDialogIsOpen }}>
        <ThemeProvider theme={ChillFireTheme}>
          <CssBaseline>
            <Fires />
          </CssBaseline>
        </ThemeProvider>
        <HelpDialog />
        <UploadDialog />
      </HelpDialogContext.Provider>
    </UploadDialogContext.Provider>
  )
}

export default Home
