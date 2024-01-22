import { HeaderContainer, ImageLogo, ComparativeButton } from "./styles";
import logo from "../../assets/logo-EconoFraudas.png"
import imagemComparativo from '../../assets/imagem-comparativo.jpeg'
export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <ImageLogo>
            <img src={logo} alt="" />
        </ImageLogo>       
        <h2>EconoFraudas</h2>
       <ComparativeButton>
        <img src={imagemComparativo} alt="" />
       </ComparativeButton>
      </HeaderContainer>
    </div>
  );
};
