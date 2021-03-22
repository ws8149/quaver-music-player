import styled from 'styled-components/native'

type SectionTitleContainerProps = {
  color?: string,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
}

export const SectionTitleContainer = styled.View<SectionTitleContainerProps>`  
  border-bottom-color: ${props => props.color ? props.color : props.theme.light_grey_border2};
  border-bottom-width: 1.2px;
  padding-bottom: 5px;   
  margin-top: ${props => props.top ? props.top : 0}px; 
  margin-right: ${props => props.right ? props.right : 0}px; 
  margin-bottom: ${props => props.bottom ? props.bottom : 10}px; 
  margin-left: ${props => props.left ? props.left : 0}px; 
  width: 100%;
`