import styled, { css } from 'styled-components'

import rem from '../utils/rem'
import { mobile } from '../utils/media'
import { X } from './Icons'

const OrganizersLogos = ({ compact = false }) => (
  <Wrapper>
    <FlexWrapper compact={compact}>
      <a
        href="https://www.honeypot.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoImage
          src={require('../static/logos/honeypot.svg')}
          alt="Honeypot"
          compact={compact}
        />
      </a>

      <XWrapper compact={compact}>
        <X />
      </XWrapper>

      <a
        href="https://www.prisma.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoImage
          src={require('../static/logos/prisma.svg')}
          alt="Prisma"
          compact={compact}
          last={true}
        />
      </a>
    </FlexWrapper>
  </Wrapper>
)

export default OrganizersLogos

const Wrapper = styled.div`
  display: inline-block;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    ${p =>
      !p.compact
        ? css`
            flex-direction: column;
            align-items: flex-start;
          `
        : ''};
  `)};
`

const XWrapper = styled.div`
  margin: 0 ${rem(30)};

  ${p =>
    p.compact
      ? css`
          margin: 0 ${rem(18)};

          svg {
            width: ${rem(15)};
            height: auto;

            path {
              stroke-width: 2px;
            }
          }
        `
      : ''} ${mobile(css`
      ${p =>
        !p.compact &&
        css`
          display: none;
        `};
    `)};
`

const LogoImage = styled.img`
  display: inline-block;
  height: ${rem(50)};
  transition: all 100ms;

  &:hover {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.12));
    transform: translateY(-1px);
    opacity: 0.9;
  }

  ${p =>
    p.compact &&
    css`
      height: ${rem(25)};
    `};
  ${mobile(css`
    ${p =>
      !p.compact &&
      css`
        width: ${rem(230)};
        height: auto;
        margin-bottom: ${rem(20)};
      `};
    ${p =>
      p.last &&
      css`
        margin-bottom: 0;
      `};
  `)};
`
