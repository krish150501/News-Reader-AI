import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop:'30'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    height:'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(21.23deg, rgba(254, 251, 251, 0.29) 0%, rgba(255,255, 255, 0.29) 55.23%, rgba(255, 254, 254, 0.0493) 106.04%)',
    backgroundBlendMode: 'color-dodge',
    borderBottom: '1px solid #E0E0E0',
    boxSizing: 'border-box',
    backdropFilter: 'blur(10px)',
    color: 'white',
    borderRadius:'5px'
  },
  desc:{
    fontsize:'5px',
    
  },
  activeCard: {
    justifyContent: 'space-between',
    display: 'flex',
    height:'auto',
    flexDirection: 'column',
    background: 'linear-gradient(21.23deg, rgba(254, 251, 251, 0.29) 0%, rgba(255,255, 255, 0.29) 55.23%, rgba(255, 254, 254, 0.0493) 106.04%)',
    backgroundBlendMode: 'color-dodge',
    boxSizing: 'border-box',
    backdropFilter: 'blur(10px)',
    color: 'white',
    borderRadius:'5px',
    border:'2px solid white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  title: {
    fontSize:'18px',
    fontWeight:'500',
    padding: '0 10px',
    color:'white'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});