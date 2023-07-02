import React, { memo } from 'react'
import type { FC } from 'react'

import Styles from './FooterStyles.scss'

export const Footer: FC = memo(() => <footer className={Styles.footer} />)

export default Footer
