import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const styles = () =>
	({
		root :
		{
			display       : 'flex',
			flexDirection : 'column',
			width         : '100%',
			height        : '100%',
			overflowY     : 'auto'
		}
	});

const Chat = (props) =>
{
	const {
		classes
	} = props;

  const [showPlaylist, setShowPlaylist] = useState(true);

	return (
		<Paper className={classes.root}>
      <input
        type="checkbox"
        checked={showPlaylist}
        onChange={() => setShowPlaylist(!showPlaylist)}
      />
			<MessageList showPlaylist={showPlaylist} />
			<ChatInput />
		</Paper>
	);
};

Chat.propTypes =
{
	classes : PropTypes.object.isRequired
};

export default withStyles(styles)(Chat);
