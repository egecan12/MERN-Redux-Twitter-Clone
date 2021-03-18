import styled from "@emotion/styled";

const LoginPageContainer = styled.div`
.Mega-Div{
    flex-direction: row;
    display: flex;
    justify-content: space-between;

}
.main-Login-Div{
    background-color: #b366ff;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 200vh;
    
}
@media screen and (max-width: 600px) {
    .bannerImg {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
   .bannerImg {
      display: none;
    }
  }
  
`;

export default LoginPageContainer;