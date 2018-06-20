import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PostLists from './PostLists'

storiesOf('PostLists', module)
  .add('post list', () => <PostLists/>);