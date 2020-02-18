import React from 'react';
import { FormattedMessage } from 'react-intl';
import Game from '../../components/Game';

const PageGame = () => (
  <>
    <FormattedMessage id="title" />
    <Game />
  </>
);

export default PageGame;