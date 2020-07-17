import * as React from 'react';

import { AppBar, Toolbar} from '@material-ui/core';

import './Header.css';

export function Header() {
    return (
        <div>
            <AppBar className={'header'} position="static">
                <Toolbar className={'header_container'} variant="regular">
                    <p className={'header_text'} >
                        Phone number
                    </p>
                </Toolbar>
            </AppBar>
        </div>
    );
}