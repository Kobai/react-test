import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Card as CardType } from '../types/Card'

export const PokemonCard = () => {
    return (
        <Card sx={{ width: 300, m: 2 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={'https://media.tenor.com/MvP6_21qivwAAAAC/can-we-get-much-higher-so-high.gif'}
            />
            <CardContent>
                Hello world
            </CardContent>
        </Card>
    )
}