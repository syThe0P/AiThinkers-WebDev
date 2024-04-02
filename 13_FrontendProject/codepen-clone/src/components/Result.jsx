import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import {Box} from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)`
    height: 41vh;
`



const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js} = useContext(DataContext);
    const srcCode = `
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
    `

    useEffect(()=>{
        setTimeout(()=>{
            setSrc(srcCode);
        },1000);

    },[html, css, js])

  return (
    <Container>
        <iframe srcDoc={src} title='Output' sandbox='allow-scripts' width="100%" height="100%" frameborder="0" />
    </Container>
  )
}

export default Result