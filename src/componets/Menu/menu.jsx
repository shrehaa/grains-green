import './menu.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Menu = () => {
  return (
    <div className='menu-container'>
    <h2>Mouth Watering food from the Greens 🌳</h2>
    <Stack className='stack' direction="row" spacing={2}>
    <Button  variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="contained">Contained</Button>
    </Stack>
    
    </div>
  )
}

export default Menu