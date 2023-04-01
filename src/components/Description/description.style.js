import styled from "styled-components";
export const Container = styled.div`
align-items: center;
display block;
max-width: 240px;
margin: 64px auto;
text-align: left;

@media screen and (min-width: 400px) {
    max-width: 300px;
}
@media screen and (min-width: 575px) {
    max-width: 500px;
}
@media screen and (min-width: 768px) {
    max-width: 600px;
}
@media screen and (min-width: 1280px) {
    max-width: 800px;
}
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 20px;
`;
