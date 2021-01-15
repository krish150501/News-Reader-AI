import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '60vh',
      padding: '8%',
      borderRadius: '20px',
      background: 'linear-gradient(21.23deg, rgba(255, 253, 253, 0.29) 0%, rgba(0, 166, 255, 0.29) 55.23%, rgba(255, 253, 253, 0.0493) 106.04%)',
      backgroundBlendMode: 'color-dodge',
      border: '1px solid #E0E0E0',
      boxSizing: 'border-box',
      backdropFilter: 'blur(10px)',
      color: 'white',
    },
    infoCard: {
      display: 'flex', flexDirection: 'column', textAlign: 'center',
    },
    container: {
      padding: '0 5%', width: '100%', margin: 0,
    },
  });
 