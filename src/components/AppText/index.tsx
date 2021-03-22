import React from 'react';
import {
  Text,
  TextStyle, 
} from 'react-native';


type MarginProps = {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
}

interface AppTextProps extends MarginProps {    
  size?: number,  
  color?: string | undefined,
  bold?: boolean,
  uppercase?: boolean,
  style?: TextStyle,
  children: any
}

/**
 * 
 * The default text that is commonly used throughout the app
 */
export const AppText = ({  
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  size = 18,
  bold = false,
  uppercase = false,
  color = undefined,
  style,
  children,
}: AppTextProps) => {

  const defaultStyle: TextStyle = {    
    fontSize: size,
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    fontFamily: 'Inter_900Black',
    color: color ? color : 'white',
    textTransform: uppercase ? 'uppercase' : 'none'
  }

  // Note: If new style exists, overwrite default style 
  const newStyle = style ? { ...defaultStyle, ...style } : defaultStyle

  return (
    <Text style={newStyle}>
      {children}
    </Text>
  );
};