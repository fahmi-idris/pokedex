import { colors } from 'components/provider/utils';
import { ButtonColors, ButtonFontWeight, Weight, Colors } from '../types/types';

export const fontWeightChooser = (font: ButtonFontWeight): string => {
  switch (font) {
    case Weight.REGULAR:
      return 'Montserrat-Regular';
    case Weight.MEDIUM:
      return 'Montserrat-Medium';
    case Weight.BOLD:
      return 'Montserrat-Bold';
    default:
      return 'Montserrat-Regular';
  }
};

export const boxShadowChooser = (color: ButtonColors): string => {
  switch (color) {
    case Colors.PRIMARY:
      return '0px 8px 24px #00000027';
    case Colors.SECONDARY:
      return '0px 3px 6px #00000029';
    default:
      return '';
  }
};

export const backgroundChooser = (color: ButtonColors): string => {
  switch (color) {
    case Colors.PRIMARY:
      return `${colors.main} 0% 0% no-repeat padding-box`;
    case Colors.SECONDARY:
      return `${colors.blue} 0% 0% no-repeat padding-box`;
    case Colors.OUTLINE:
    case Colors.OUTLINE_BLACK:
      return `${colors.white} 0% 0% no-repeat padding-box`;
    default:
      return `${colors.main} 0% 0% no-repeat padding-box`;
  }
};

export const backgroundHoverChooser = (color: ButtonColors): string => {
  switch (color) {
    case Colors.PRIMARY:
      return `${colors.secondary} 0% 0% no-repeat padding-box`;
    case Colors.SECONDARY:
      return `#67a6f5 0% 0% no-repeat padding-box`;
    case Colors.OUTLINE:
    case Colors.OUTLINE_BLACK:
      return `${colors.main} 0% 0% no-repeat padding-box`;
    default:
      return `${colors.secondary} 0% 0% no-repeat padding-box`;
  }
};

export const borderHoverChooser = (color: ButtonColors): string => {
  switch (color) {
    case Colors.OUTLINE_BLACK:
      return colors.main;
    default:
      return `none`;
  }
};

export const colorTextChooser = (color: ButtonColors): string => {
  switch (color) {
    case Colors.PRIMARY:
    case Colors.SECONDARY:
      return colors.white;
    case Colors.OUTLINE:
      return colors.main;
    case Colors.OUTLINE_BLACK:
      return colors.inputColor;
    default:
      return colors.white;
  }
};

export const borderChooser = (color: ButtonColors): string => {
  switch (color) {
    case Colors.PRIMARY:
    case Colors.SECONDARY:
      return 'none';
    case Colors.OUTLINE:
      return `1px solid ${colors.main}`;
    case Colors.OUTLINE_BLACK:
      return `1px solid ${colors.inputColor}`;
    default:
      return 'none';
  }
};
