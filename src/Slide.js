/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      min-height: 700px;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide