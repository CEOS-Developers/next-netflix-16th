import MyHead from '../components/MyHead';
import styled from 'styled-components';

export default function menu() {
  return (
    <div>
      <MyHead title="More" />
      <FooterLinkContent>
        <FooterLink href="https://help.netflix.com/ko/node/412">
          넷플릭스 소개
        </FooterLink>
        <FooterLink href="https://help.netflix.com/ko">고객 센터</FooterLink>
        <FooterLink href="https://help.netflix.com/ko/">미디어 센터</FooterLink>
        <FooterLink href="https://help.netflix.com/ko/">이용 약관</FooterLink>
      </FooterLinkContent>
    </div>
  );
}
const FooterLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  font-weight: bolder;
`;
