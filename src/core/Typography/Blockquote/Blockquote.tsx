// Copyright (c) Bentley Systems, Incorporated. All rights reserved.
import '@bentley/itwinui/css/blockquote.css';
import cx from 'classnames';
import React from 'react';
import { useTheme } from '../../utils/hooks/useTheme';

export type BlockquoteProps = {
  /**
   * Optional footer for any attribution/source.
   */
  footer?: React.ReactNode;
} & React.BlockquoteHTMLAttributes<HTMLQuoteElement>;

/**
 * Basic blockquote component
 * @example
 * <Blockquote>This is a quote</Blockquote>
 * <Blockquote footer='— Someone'>
 *  <p>This is a quote from someone</p>
 * </Blockquote>
 */
export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (props, ref) => {
    const { className, children, footer, ...rest } = props;

    useTheme();

    return (
      <blockquote
        className={cx('iui-blockquote', className)}
        ref={ref}
        {...rest}
      >
        {children}
        {footer && <footer>{footer}</footer>}
      </blockquote>
    );
  },
);

export default Blockquote;
