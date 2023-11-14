import { useNavigate } from 'react-router-dom';
import Home from '../images/home.svg';
import Wallet from '../images/wallet.svg';
import Crown from '../images/crown.svg';
import { Grid, Img, Button } from '../components';

function Bar() {
  const navigate = useNavigate();

  return (
    <>
      <Grid theme="footerWrap">
        <Grid theme="footer">
          <Button theme="icon" onClick={onClickHome}>
            <Img theme="icon" src={Home} alt="home" />
            Home
          </Button>
          <Button theme="icon" onClick={onClickWallet}>
            <Img theme="icon" src={Wallet} alt="wallet" />
            Wallets
          </Button>
          <Button theme="icon" onClick={onClickCrown}>
            <Img theme="icon" src={Crown} alt="crown" />
            주주되기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default Bar;
