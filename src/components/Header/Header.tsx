import { HeaderContainer, ComparativeButton } from "./styles";
import logo from "../../assets/logo-econoFraudas.png"
import imagemComparativo from '../../assets/image-comparador.png'
export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        {/* <ImageLogo> */}
            <img src={logo} alt="" />
        {/* </ImageLogo>        */}
        {/* <h2>EconoFraudas</h2> */}
       <ComparativeButton>
        <img src={imagemComparativo} alt="" />
       </ComparativeButton>
      </HeaderContainer>
    </div>
  );
};
