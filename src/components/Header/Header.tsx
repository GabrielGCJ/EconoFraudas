import { HeaderContainer, ImageLogo } from "./styles";
import logo from "../../assets/logo-EconoFraudas.jpeg"
export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <ImageLogo>
            <img src={logo} alt="" />
        </ImageLogo>

       
      </HeaderContainer>
    </div>
  );
};
