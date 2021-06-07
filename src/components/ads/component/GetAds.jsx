import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'


export default function GetAds({ data }) {
    console.log(data[1])


    return (



        // <Grid item xs={12} md={4} key={props.data.id}>
        <div>
            <Card variant="outlined">
            <CardActionArea >
                <CardMedia
                    // className="w-28"
                    image={data[1].photo}
                    title={data[1].title}
                    style={{ objectFit: 'contain' }}
                />
                </CardActionArea>
            </Card>
        </div>





    )
}

