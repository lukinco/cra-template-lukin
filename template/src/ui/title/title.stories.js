import React from 'react'
import Title from './title'

export default {
  title: 'Title',
  component: Title
}

export const title = () => <Title>Default title</Title>
title.story = {
  name: 'Default title'
}
