import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'components/provider/utils';
import {
  boxShadowChooser,
  backgroundChooser,
  colorTextChooser,
  borderChooser,
  fontWeightChooser,
  backgroundHoverChooser,
  borderHoverChooser,
} from '../utils/formatter';
import { ButtonSizes, ButtonColors, ButtonType, ButtonFontWeight } from '../types/types';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the button is disabled or not. */
  disabled?: boolean;
  /** The color of the button. */
  color?: ButtonColors;
  /** The size of the button. */
  size?: ButtonSizes;
  /** Is a block button. */
  block?: boolean;
  /** Whether the button is an icon button or not. */
  isIcon?: boolean;
  /** Additional CSS classes to give to the button. */
  className?: string;
  /** Event handler triggered during `onClick`. */
  // eslint-disable-next-line
  onClick?: any;
  /** The HTML type of the button. */
  type?: ButtonType;
  /**
   * (Deprecated) Whether the button is active or not.
   */
  active?: boolean;
  /** Triggers the loading state of the button. */
  loading?: boolean;
  /** The border radius of the button. */
  rounded?: boolean;
  /** The font weight of the button. */
  fontWeight?: ButtonFontWeight;
  /** (Deprecated) If the button is an outline button, define it here. */
  outline?: boolean;
}

/**
 * Buttons express what action will occur when the user clicks or touches it.
 * Buttons are used to initialize an action, either in the background or
 * foreground of an experience.
 */
export class Button extends React.Component<Props> {
  static defaultProps = {
    color: 'primary' as ButtonColors,
    type: 'button',
    size: 'lg' as ButtonSizes,
    fontWeight: 'regular' as ButtonFontWeight,
    block: false,
    active: false,
    disabled: false,
    outline: false,
    rounded: false,
  };

  constructor(props: Props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const { disabled, loading, onClick } = this.props;
    if (disabled || loading) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  }

  render(): JSX.Element {
    const { className, color, type, loading, disabled, isIcon, children, ...props } = this.props;

    return (
      <ButtonWrapper
        className={className}
        type={type}
        onClick={this.onClick}
        disabled={disabled || loading}
        color={color}
        isIcon={isIcon}
        {...props}
      >
        {children}
      </ButtonWrapper>
    );
  }
}

export default Button;

const ButtonWrapper = styled('button')<Props>`
  ${(props) => (props.disabled || props.loading ? 'pointer-events: none;' : '')};
  position: relative;
  width: ${(props) => (props.block ? '100%' : 'auto')};
  padding: ${(props) => (props.size === 'sm' ? '8px 20px' : '13px 20px')};
  height: ${(props) => (props.size === 'sm' ? '35px' : '45px')};
  border-radius: ${(props) => (props.rounded ? '50px' : '3px')};
  box-shadow: ${(props) => boxShadowChooser(props.color)};
  ${(props) =>
    props.disabled || props.loading
      ? `background: ${colors.disabled}`
      : `background: ${backgroundChooser(props.color)}`};
  color: ${(props) => colorTextChooser(props.color)};
  font-size: 1rem;
  border: ${(props) => borderChooser(props.color)};
  outline: none;
  cursor: pointer;
  font-family: ${(props) => fontWeightChooser(props.fontWeight)};

  &:hover {
    background: ${(props) => backgroundHoverChooser(props.color)};
    border-color: ${(props) => borderHoverChooser(props.color)};
    color: ${colors.white};
    outline: 0;
  }

  &:focus {
    outline: 0;
  }
`;
