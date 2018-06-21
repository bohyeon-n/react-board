import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import WritePostForm from '../components/WritePostForm'

storiesOf('write post form', module)
  .add('write post form', () => <WritePostForm/>);