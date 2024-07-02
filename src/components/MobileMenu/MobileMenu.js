/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { QUERIES, COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <UnstyledButton onClick={onDismiss}>
          <CloseIcon id='close' />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </UnstyledButton>
        <Nav>
        <MainLink href="/sale">Sale</MainLink>
          <MainLink href="/new">New&nbsp;Releases</MainLink>
          <MainLink href="/men">Men</MainLink>
          <MainLink href="/women">Women</MainLink>
          <MainLink href="/kids">Kids</MainLink>
          <MainLink href="/collections">Collections</MainLink>

        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
  color: var(--color-gray-900);
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100%;
  padding-left: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

const MainLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  font-size: ${18/16}rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary)
  }
`;

const Filler = styled.div`
flex: 1;
`

const FooterLink = styled.a`
text-decoration: none;
  color: var(--color-gray-700);
  font-weight: ${WEIGHTS.normal}
  font-size: 1rem;
`

export default MobileMenu;
