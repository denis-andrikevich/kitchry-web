import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Wrapper extends Component {

    render() {
        const NavMenu = (props) => (
            <IconMenu
                {...props}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        )
        return (
            <div>
                <AppBar
                    title="Kitchry web"
                    iconElementRight={ <NavMenu /> }
                />
            </div>
        )
    }
}

export default Wrapper;