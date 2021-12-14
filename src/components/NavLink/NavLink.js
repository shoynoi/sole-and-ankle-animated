import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants'

const NavLink = ({ children, ...props }) => {
  return (
    <Wrapper {...props} >
      <FrontLink>{children}</FrontLink>
      <BackLink>{children}</BackLink>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const LinkText = styled.span`
  display: block;
  transition: transform 200ms;
  will-change: transform;
  
`

const FrontLink = styled(LinkText)`
  transform: translateY(0);

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transform: translateY(-100%);
    } 
  }
`

const BackLink = styled(LinkText)`
  transform: translateY(100%);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 900;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transform: translateY(0);
    }
  }
`

export default NavLink
