import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PostListItem from './PostListItem';

storiesOf('PostListItem', module).add('list item', () => <PostListItem />);
